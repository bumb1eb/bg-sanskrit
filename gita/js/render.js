/* ============================================================
   render.js — Main Rendering Engine for Sanskrit Explorer
   ------------------------------------------------------------
   Responsibilities:
   - Load chapter/verse data
   - Render shloka, sandhi, translit, translation
   - Render phrase groups + meaning order
   - Render cases
   - Build sidebar navigation
   - Handle next/prev navigation
   - Provide hooks for grammar.js, dictionary.js, hover.js
   - Provide hooks for animations.js (future)
   ============================================================ */


/* ------------------------------------------------------------
   GLOBAL STATE
   ------------------------------------------------------------ */

// Current chapter and verse index
let currentChapter = 1;
let currentVerseIndex = 0;

// All chapters loaded from chapter files
// Each chapter file defines: chapterX = [ {verse objects}, ... ]
const chapters = {
  1: chapter1,
  2: chapter2,
  3: chapter3
};

const chapterSandhiMap = {
  1: window.SANDHI_CH1,
  2: window.SANDHI_CH2,
  3: window.SANDHI_CH3
};

let currentMode = "sandhi";   // or "translit"

/* ------------------------------------------------------------
   INITIALIZATION
   ------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  buildSidebar();

  const savedChapter = parseInt(localStorage.getItem("currentChapter"));
  const savedVerse   = parseInt(localStorage.getItem("currentVerseIndex"));

  if (!isNaN(savedChapter) && !isNaN(savedVerse)) {
    currentChapter = savedChapter;
    currentVerseIndex = savedVerse;
  }

  renderCurrentVerse();
  highlightActiveVerse();
});


/* ============================================================
   SIDEBAR — CHAPTER + VERSE NUMBER GRID
   ============================================================ */

function buildSidebar() {
  const container = document.getElementById("index-container");
  container.innerHTML = "";

  Object.keys(chapters).forEach(chNum => {
    const chBlock = document.createElement("div");
    chBlock.className = "chapter-block";
    chBlock.dataset.chapter = chNum;

    // --- Chapter header with triangle ---
    const header = document.createElement("div");
    header.className = "chapter-header";

    const isCurrentChapter = parseInt(chNum) === currentChapter;
    if (isCurrentChapter) header.classList.add("open");

    header.innerHTML = `
      <span class="toggle-icon">▶</span>
      Chapter ${chNum}
    `;

    header.onclick = () => {
      toggleChapter(chNum);
    };

    // --- Verse number grid ---
    const body = document.createElement("ul");
    body.className = "verses verse-grid";
    body.style.display = isCurrentChapter ? "grid" : "none";

    chapters[chNum].forEach((v, idx) => {
      const li = document.createElement("li");
      li.textContent = v.id;
      li.title = `Chapter ${chNum}, Verse ${v.id}`;

      li.onclick = () => {
        currentChapter = parseInt(chNum);
        currentVerseIndex = idx;

        localStorage.setItem("currentChapter", currentChapter);
        localStorage.setItem("currentVerseIndex", currentVerseIndex);

        renderCurrentVerse();
        highlightActiveVerse();
      };

      body.appendChild(li);
    });

    chBlock.appendChild(header);
    chBlock.appendChild(body);
    container.appendChild(chBlock);
  });
}


function toggleChapter(chNum) {
  const blocks = document.querySelectorAll(".chapter-block");
  blocks.forEach(block => {
    const header = block.querySelector(".chapter-header");
    const body = block.querySelector(".verses");

    if (block.dataset.chapter === String(chNum)) {
      const isOpen = body.style.display === "grid";
      body.style.display = isOpen ? "none" : "grid";
      header.classList.toggle("open", !isOpen);
    } else {
      // Collapse all other chapters
      body.style.display = "none";
      header.classList.remove("open");
    }
  });
}

function highlightActiveVerse() {
  const lists = document.querySelectorAll("#sidebar ul.verses li");
  lists.forEach(li => li.classList.remove("active-verse"));

  // Expand only the active chapter and collapse all others
  const blocks = document.querySelectorAll("#sidebar .chapter-block");
  blocks.forEach(block => {
    const header = block.querySelector(".chapter-header");
    const body = block.querySelector(".verses");
    const isCurrent = block.dataset.chapter === String(currentChapter);

    body.style.display = isCurrent ? "grid" : "none";
    if (header) header.classList.toggle("open", isCurrent);
  });

  const chapterList = document.querySelectorAll("#sidebar ul.verses")[currentChapter - 1];
  if (!chapterList) return;

  const active = chapterList.children[currentVerseIndex];
  if (active) {
    active.classList.add("active-verse");

    // Only scroll inside the sidebar on desktop/laptop without moving the main page
    const sidebar = document.getElementById("sidebar");
    if (sidebar && window.innerWidth > 900) {
      sidebar.scrollTo({
        top: active.offsetTop - sidebar.clientHeight / 2,
        behavior: "smooth"
      });
    }
  }
}



/* ============================================================
   MAIN RENDER FUNCTION
   ============================================================ */

function renderCurrentVerse() {
  // ⭐ Load sandhi dictionary for this chapter
	loadChapterSandhi(chapterSandhiMap[currentChapter]);

  const verseObj = chapters[currentChapter][currentVerseIndex];

  // Update page indicator
  document.getElementById("pageIndicator").textContent =
    `Chapter ${currentChapter}, Verse ${verseObj.id}`;

  // Render each layer
  renderShloka(verseObj);
  renderSandhi(verseObj);
  renderTranslit(verseObj);
  renderTranslation(verseObj);
  renderPhraseGroups(verseObj);
  renderMeaningOrder(verseObj);
  renderCases(verseObj);

  // Apply grammar coloring (grammar.js)
  if (typeof applyGrammarColoring === "function") {
    applyGrammarColoring();
  }

  // ⭐ Trigger animations BEFORE hover meanings so .shloka-word spans exist for sandhi linking
  if (typeof runAnimations === "function") {
    runAnimations();
  }

  // Attach hover meanings and compound links (hover.js)
  if (typeof attachHoverMeanings === "function") {
    attachHoverMeanings();
  }


  highlightActiveVerse();
}


/* ============================================================
   RENDERING INDIVIDUAL SECTIONS
   ============================================================ */

function renderShloka(v) {
  document.getElementById("shloka").innerHTML = v.shloka;   // No grammar coloring for parchment
}

/* ------------------------------------------------------------
   HELPER: Render unified layer (Split Words / Phrase Groups / Meaning Order)
   ------------------------------------------------------------ */
function renderAnalyticalLayer(v, targetId, scriptMode) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = "";

  const wrapper = document.getElementById("sandhi-translit-wrapper");
  const isMeaningMode = wrapper && wrapper.classList.contains("show-meaning-order");

  // MODE 3: MEANING ORDER (Rendered inside the same workspace with numbered pills + cascade)
  if (isMeaningMode && Array.isArray(v.parts) && v.parts.length > 0) {
    const showRoleTags = currentChapter !== 2;
    const meaningBox = document.createElement("div");
    meaningBox.className = "inline-meaning-order" + (showRoleTags ? "" : " no-role-tags");

    const sortedIndices = v.meaningOrder
      ? v.meaningOrder
      : v.parts.map((_, idx) => idx + 1);

    sortedIndices.forEach((partIdx, rowIndex) => {
      const part = v.parts[partIdx - 1];
      if (!part) return;

      const row = document.createElement("div");
      row.className = "meaning-row cascade-row";
      row.style.animationDelay = `${rowIndex * 55}ms`;

      // Column 1: Role tag badge
      const tagCol = document.createElement("div");
      tagCol.className = "meaning-tag-col";
      if (part.role && showRoleTags) {
        const roleSpan = document.createElement("span");
        roleSpan.className = "role-tag";
        roleSpan.textContent = part.role;
        tagCol.appendChild(roleSpan);
      }
      row.appendChild(tagCol);

      // Column 2: Numbered Phrase Pill + English Guide
      const contentCol = document.createElement("div");
      contentCol.className = "meaning-content-col";

      const pill = document.createElement("span");
      pill.className = "phrase-pill meaning-pill";

      const numBadge = document.createElement("span");
      numBadge.className = "phrase-num";
      numBadge.textContent = partIdx;
      pill.appendChild(numBadge);

      const rawText = (scriptMode === "sandhi" ? part.sandhi : part.translit).trim();
      const devWords = part.sandhi.trim().split(/[\s·]+/);
      const wordsWrap = document.createElement("span");
      wordsWrap.innerHTML = wrapWordsWithGrammar(rawText, devWords);
      pill.appendChild(wordsWrap);

      contentCol.appendChild(pill);

      const guide = document.createElement("span");
      guide.className = "guide-text";
      guide.textContent = " — " + part.guide;
      contentCol.appendChild(guide);

      row.appendChild(contentCol);
      meaningBox.appendChild(row);
    });

    el.appendChild(meaningBox);
    return;
  }

  // MODES 1 & 2: SPLIT WORDS / PHRASE GROUPS (Poetic shloka lines)
  if (Array.isArray(v.parts) && v.parts.length > 0) {
    const orderedParts = v.origOrder
      ? v.origOrder.map(idx => v.parts[idx - 1]).filter(Boolean)
      : v.parts;

    orderedParts.forEach((part, index) => {
      const pill = document.createElement("span");
      pill.className = "phrase-pill";

      const numBadge = document.createElement("span");
      numBadge.className = "phrase-num";
      numBadge.textContent = part.id || index + 1;
      pill.appendChild(numBadge);

      const rawText = (scriptMode === "sandhi" ? part.sandhi : part.translit).trim();
      const devWords = part.sandhi.trim().split(/[\s·]+/);
      const wordsWrap = document.createElement("span");
      wordsWrap.innerHTML = wrapWordsWithGrammar(rawText, devWords);
      pill.appendChild(wordsWrap);

      el.appendChild(pill);

      const endsHalfVerse = /[।|]$/.test(rawText) && !/[॥]$/.test(rawText);
      if (endsHalfVerse && index < orderedParts.length - 1) {
        el.appendChild(document.createElement("br"));
      } else {
        el.appendChild(document.createTextNode(" "));
      }
    });
    return;
  }

  // Fallback for verses without v.parts
  if (scriptMode === "sandhi") {
    const lines = v.sandhi.trim().split("<br>").map(l => l.trim());
    el.innerHTML = lines.map(line => wrapWordsWithGrammar(line, line.split(/[\s·]+/))).join("<br>");
  } else {
    const translitLines = v.translit.trim().split("<br>").map(l => l.trim());
    const sandhiLines = v.sandhi.trim().split("<br>").map(l => l.trim());
    el.innerHTML = translitLines
      .map((tLine, i) => wrapWordsWithGrammar(tLine, (sandhiLines[i] || "").split(/[\s·]+/)))
      .join("<br>");
  }
}

function renderSandhi(v) {
  renderAnalyticalLayer(v, "sandhi", "sandhi");
}

function renderTranslit(v) {
  renderAnalyticalLayer(v, "translit", "translit");
}



function renderTranslation(v) {
  document.getElementById("translation").innerHTML = v.translation;
}

function wrapWordsWithGrammar(text, devWords = null) {
  if (!text) return "";

  const words = text.replace(/\s+/g, " ").trim().split(/[\s·]+/);
  const devList = devWords ? devWords : words;

  const colored = words
    .map((word, index) => {

      const devSource = devList[index] || word;
      const cleanDev = devSource.replace(/[।॥]/g, "");

      const info = DICT[cleanDev] || {};
      const cls = info.type ? info.type : "";

      // ⭐ FIX: separate danda from the word
      const cleanedDisplay = word.replace(/[।॥]/g, "");
      const danda = word.match(/[।॥]+$/)?.[0] || "";

      return `<span class="word ${cls}">${cleanedDisplay}</span>${danda}`;
    })
    .join(" ");

  const enriched = colored.replace(
    /<span class="word([^"]*)">([^<]+)<\/span>/g,
    (match, cls, wordText, offset) => {

      const index = (colored.slice(0, offset).match(/<span class="word/g) || []).length;

      const devSource = devList[index] || wordText;
      const cleanDev = devSource.replace(/[।॥]/g, "");

      const dictInfo = DICT[cleanDev];
      const dictMeaning = dictInfo?.meaning || "";
      const dictCase = dictInfo?.case || "";

      const sandhiInfo = window.dictSandhi ? window.dictSandhi[cleanDev] : null;
      const sandhiMeaning = sandhiInfo?.meaning || "";
      const sandhiCase = sandhiInfo?.case || "";

      const meaning = sandhiMeaning || dictMeaning || "";
      const caseInfo = sandhiCase || dictCase || "";

      return `<span class="word ${cls}" data-meaning="${meaning}" data-case="${caseInfo}">${wordText}</span>`;
    }
 )

  // ------------------------------------------------------------
  // DEBUG LOGS (safe to comment out later)
  // ------------------------------------------------------------
/*    console.log("wrapWordsWithGrammar DEBUG:");
      console.log("  text:", text);
      console.log("  words:", words);
      console.log("  devList:", devList);
      console.log("  colored:", colored);

      colored.replace(
        /<span class="word([^"]*)">([^<]+)<\/span>/g,
        (match, cls, wordText, offset) => {
          const index = (colored.slice(0, offset).match(/<span class="word/g) || []).length;
          console.log(`  span: word="${wordText}", index=${index}, devWord="${devList[index]}"`);
        }
      );
*/

  return enriched;
}





/* ============================================================
   UI TOGGLES / DISPLAY HELPERS (FIXED TIMING)
   ============================================================ */

function toggleSlider() {
  const checked = document.getElementById("toggle-slider").checked;

  if (checked) {
    currentMode = "translit";
    document.getElementById("sandhi").style.display = "none";
    document.getElementById("translit").style.display = "block";
  } else {
    currentMode = "sandhi";
    document.getElementById("sandhi").style.display = "block";
    document.getElementById("translit").style.display = "none";
  }

  // Get the current verse data object
  const verseObj = chapters[currentChapter][currentVerseIndex];

  // ⭐ FORCE RE-RENDERING of the text layers so all metadata classes are cleanly generated
  renderSandhi(verseObj);
  renderTranslit(verseObj);
  renderPhraseGroups(verseObj);
  renderMeaningOrder(verseObj);

  // ⭐ REQUIRED: re-attach hover + execute grammar coloring engine now that the elements are safe in the DOM
  if (typeof applyGrammarColoring === "function") applyGrammarColoring();
  if (typeof attachHoverMeanings === "function") attachHoverMeanings();
}





/* ------------------------------------------------------------
   PHRASE GROUPS (Natural Shloka Order)
   ------------------------------------------------------------ */
function renderPhraseGroups(v) {
  const container = document.getElementById("phrase-groups");
  container.innerHTML = "";

  if (!v.parts) return;

  // Backward compatibility: if a verse still uses old origOrder, follow it; otherwise render v.parts directly
  const orderedParts = v.origOrder
    ? v.origOrder.map(idx => v.parts[idx - 1]).filter(Boolean)
    : v.parts;

  orderedParts.forEach(part => {
    const span = document.createElement("span");

    span.innerHTML = wrapWordsWithGrammar(
      currentMode === "sandhi" ? part.sandhi : part.translit,
      part.sandhi.split(/[\s·]+/)
    );

    span.className = "sanskrit-text";

    container.appendChild(span);
    container.appendChild(document.createElement("br"));
  });
}


/* ------------------------------------------------------------
   MEANING ORDER (Sorted by meaningOrder array with role tags)
   ------------------------------------------------------------ */
function renderMeaningOrder(v) {
  const container = document.getElementById("meaning-order");
  container.innerHTML = "";

  if (!v.parts) return;

  const sortedParts = v.meaningOrder
    ? v.meaningOrder.map(idx => v.parts[idx - 1]).filter(Boolean)
    : v.parts;

  sortedParts.forEach(part => {
    const row = document.createElement("div");
    row.className = "meaning-row";

    // Column 1: Role tag badge (keeps empty placeholder if no role so grid stays aligned)
    const tagCol = document.createElement("div");
    tagCol.className = "meaning-tag-col";
    if (part.role) {
      const roleSpan = document.createElement("span");
      roleSpan.className = "role-tag";
      roleSpan.textContent = part.role;
      tagCol.appendChild(roleSpan);
    }
    row.appendChild(tagCol);

    // Column 2: Sanskrit phrase + English guide
    const contentCol = document.createElement("div");
    contentCol.className = "meaning-content-col";

    const span = document.createElement("span");
    span.innerHTML = wrapWordsWithGrammar(
      currentMode === "sandhi" ? part.sandhi : part.translit,
      part.sandhi.split(/[\s·]+/)
    );
    span.className = "sanskrit-text";
    contentCol.appendChild(span);

    const guide = document.createElement("span");
    guide.className = "guide-text";
    guide.textContent = " — " + part.guide;
    contentCol.appendChild(guide);

    row.appendChild(contentCol);
    container.appendChild(row);
  });
}









/* ------------------------------------------------------------
   CASES BELOW (dictionary + dict-sandhi)
   ------------------------------------------------------------ */
function renderCases(v) {
  const container = document.getElementById("cases-below");
  container.innerHTML = "";

  if (!v.cases) return;

  v.cases.forEach(c => {
    const div = document.createElement("div");
    div.textContent = c;
    container.appendChild(div);
  });
}


/* ============================================================
   NAVIGATION BUTTONS (Prev / Next)
   ============================================================ */

function changePage(delta) {
  const chapterArray = chapters[currentChapter];

  currentVerseIndex += delta;

  // If moving before first verse → go to previous chapter
  if (currentVerseIndex < 0) {
    if (currentChapter > 1) {
      currentChapter--;
      currentVerseIndex = chapters[currentChapter].length - 1;
    } else {
      currentVerseIndex = 0;
    }
  }

  // If moving past last verse → go to next chapter
  if (currentVerseIndex >= chapterArray.length) {
    if (currentChapter < Object.keys(chapters).length) {
      currentChapter++;
      currentVerseIndex = 0;
    } else {
      currentVerseIndex = chapterArray.length - 1;
    }
  }

  localStorage.setItem("currentChapter", currentChapter);
  localStorage.setItem("currentVerseIndex", currentVerseIndex);


  renderCurrentVerse();
}


/* ============================================================
   DEVELOPER TOOL — CHECK MISSING DICTIONARY WORDS
   ============================================================ */

function runChecker() {
  if (typeof checkMissingWords === "function") {
    checkMissingWords();
  }
}
