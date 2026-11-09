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
   SIDEBAR — CHAPTER + VERSE LIST
   ============================================================ */

function buildSidebar() {
  const container = document.getElementById("index-container");
  container.innerHTML = "";

  Object.keys(chapters).forEach(chNum => {
    const chBlock = document.createElement("div");
    chBlock.className = "chapter-block";

    // --- Chapter header with triangle ---
    const header = document.createElement("div");
    header.className = "chapter-header";

    header.innerHTML = `
      <span class="toggle-icon">▶</span>
      Chapter ${chNum}
    `;

    header.onclick = () => {
      toggleChapter(chNum);
      header.classList.toggle("open");
    };

    // --- Verse list ---
    const body = document.createElement("ul");
    body.className = "verses";
    body.style.display = "none";

    chapters[chNum].forEach((v, idx) => {
      const li = document.createElement("li");

      // Triangle + verse number
      li.innerHTML = `
        <span class="toggle-icon">▶</span>
        Verse ${v.id}
      `;

      li.onclick = () => {
        currentChapter = parseInt(chNum);
        currentVerseIndex = idx;
		
		localStorage.setItem("currentChapter", currentChapter);
		localStorage.setItem("currentVerseIndex", currentVerseIndex);

        renderCurrentVerse();
        highlightActiveVerse();

        // highlight active verse triangle
        li.classList.add("open");
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
    if (header.textContent.includes(chNum)) {
      const isOpen = body.style.display === "block";
      body.style.display = isOpen ? "none" : "block";
      header.classList.toggle("open", !isOpen);
    }
  });
}

function highlightActiveVerse() {
  const lists = document.querySelectorAll("#sidebar ul.verses li");
  lists.forEach(li => li.classList.remove("active-verse"));

  const active = document.querySelectorAll("#sidebar ul.verses")[currentChapter - 1]
    .children[currentVerseIndex];

  if (active) active.classList.add("active-verse");
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

  // Attach hover meanings (hover.js)
  if (typeof attachHoverMeanings === "function") {
    attachHoverMeanings();
  }

  // Trigger animations (animations.js)
  if (typeof runAnimations === "function") {
    runAnimations();
  }

  highlightActiveVerse();
}


/* ============================================================
   RENDERING INDIVIDUAL SECTIONS
   ============================================================ */

function renderShloka(v) {
  document.getElementById("shloka").innerHTML = v.shloka;   // No grammar coloring for parchment
}

function renderSandhi(v) {
  const lines = v.sandhi
    .split("<br>")
    .map(line => line.trim())
    .filter(line => line !== "")
    .map(line => wrapWordsWithGrammar(line));

  document.getElementById("sandhi").innerHTML = lines.join("<br>");
}

function renderTranslit(v) {
  const sandhiLines = v.sandhi.split("<br>").map(line => line.trim());

  const lines = v.translit
    .split("<br>")
    .map(line => line.trim())
    .filter(line => line !== "")
    .map((line, i) => {
      const devWords = sandhiLines[i].split(/[\s·]+/);
      return wrapWordsWithGrammar(line, devWords);
    });

  document.getElementById("translit").innerHTML = lines.join("<br>");
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
   PHRASE GROUPS (origOrder)
   ------------------------------------------------------------ */
function renderPhraseGroups(v) {
  const container = document.getElementById("phrase-groups");
  container.innerHTML = "";

  if (!v.origOrder || !v.parts) return;

  v.origOrder.forEach(idx => {
    const part = v.parts[idx - 1];
    if (!part) return;

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
   MEANING ORDER (sorted parts)
   ------------------------------------------------------------ */
function renderMeaningOrder(v) {
  const container = document.getElementById("meaning-order");
  container.innerHTML = "";

  if (!v.parts) return;

  v.parts.forEach(part => {
    const span = document.createElement("span");

    span.innerHTML = wrapWordsWithGrammar(
      currentMode === "sandhi" ? part.sandhi : part.translit,
      part.sandhi.split(/[\s·]+/)
    );

    span.className = "sanskrit-text";
    container.appendChild(span);

    // ⭐ NEW: guided meaning (minimal addition)
    const guide = document.createElement("span");
    guide.className = "guide-text";
    guide.textContent = " — " + part.guide;
    container.appendChild(guide);

    container.appendChild(document.createElement("br"));
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
