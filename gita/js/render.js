/* ============================================================
   render.js — Main Rendering Engine for Sanskrit Explorer (Part 1/4)
   ------------------------------------------------------------
   Responsibilities:
   - Load chapter/verse data & support ?ch=X&v=Y deep links
   - Render shloka, sandhi, translit, translation
   - Render phrase groups + meaning order
   - Render cases
   - Build dual-tab sidebar navigation (By Number | By Context)
   - Handle next/prev navigation
   - Provide hooks for grammar.js, dictionary.js, hover.js, animations.js
   ============================================================ */


/* ------------------------------------------------------------
   GLOBAL STATE
   ------------------------------------------------------------ */

// Current chapter and verse index
let currentChapter = 1;
let currentVerseIndex = 0;

// Sidebar view mode: "number" | "context"
let sidebarViewMode = "number";

// All chapters loaded from chapter files
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
  // 1. Check URL parameters (?ch=X&v=Y) first for direct topic links
  const urlParams = new URLSearchParams(window.location.search);
  const paramCh = parseInt(urlParams.get("ch"), 10);
  const paramV  = parseInt(urlParams.get("v"), 10);

  if (!isNaN(paramCh) && chapters[paramCh]) {
    currentChapter = paramCh;
    currentVerseIndex =
      !isNaN(paramV) && paramV >= 1 && paramV <= chapters[paramCh].length
        ? paramV - 1
        : 0;

    localStorage.setItem("currentChapter", currentChapter);
    localStorage.setItem("currentVerseIndex", currentVerseIndex);
  } else {
    // 2. Otherwise fall back to saved localStorage position
    const savedChapter = parseInt(localStorage.getItem("currentChapter"), 10);
    const savedVerse   = parseInt(localStorage.getItem("currentVerseIndex"), 10);

    if (!isNaN(savedChapter) && chapters[savedChapter] && !isNaN(savedVerse)) {
      currentChapter = savedChapter;
      currentVerseIndex = savedVerse;
    }
  }

  buildSidebar();
  renderCurrentVerse();
  highlightActiveVerse();
});


/* ============================================================
   SIDEBAR — DUAL-TAB SWITCHER (BY NUMBER | BY CONTEXT)
   ============================================================ */

function setSidebarViewMode(mode) {
  sidebarViewMode = mode;
  buildSidebar();
  highlightActiveVerse();
}

function jumpToVerse(chInt, verseIdx) {
  currentChapter = chInt;
  currentVerseIndex = verseIdx;

  localStorage.setItem("currentChapter", currentChapter);
  localStorage.setItem("currentVerseIndex", currentVerseIndex);

  renderCurrentVerse();
  highlightActiveVerse();
}

function buildSidebar() {
  const container = document.getElementById("index-container");
  container.innerHTML = "";

  // --- Top Switcher: By Number | By Context ---
  const tabBar = document.createElement("div");
  tabBar.className = "sidebar-mode-bar";
  tabBar.innerHTML = `
    <button type="button" class="sb-tab ${sidebarViewMode === "number" ? "active" : ""}"
            onclick="setSidebarViewMode('number')">By Number</button>
    <button type="button" class="sb-tab ${sidebarViewMode === "context" ? "active" : ""}"
            onclick="setSidebarViewMode('context')">By Context</button>
  `;
  container.appendChild(tabBar);

  Object.keys(chapters).forEach(chNum => {
    const chInt = parseInt(chNum, 10);
    const chBlock = document.createElement("div");
    chBlock.className = "chapter-block";
    chBlock.dataset.chapter = chNum;

    // --- Chapter header with triangle ---
    const header = document.createElement("div");
    header.className = "chapter-header";

    const isCurrentChapter = chInt === currentChapter;
    if (isCurrentChapter) header.classList.add("open");

    header.innerHTML = `
      <span class="toggle-icon">▶</span>
      Chapter ${chNum}
    `;

    header.onclick = () => {
      toggleChapter(chNum);
    };

    chBlock.appendChild(header);

    // --- VIEW A: 5-Column Verse Number Grid ---
    if (sidebarViewMode === "number") {
      const body = document.createElement("ul");
      body.className = "verses verse-grid";
      body.style.display = isCurrentChapter ? "grid" : "none";

      chapters[chNum].forEach((v, idx) => {
        const li = document.createElement("li");
        li.textContent = v.id;
        li.title = `Chapter ${chNum}, Verse ${v.id}`;
        li.onclick = () => jumpToVerse(chInt, idx);
        body.appendChild(li);
      });

      chBlock.appendChild(body);
    }

    // --- VIEW B: Thematic Spine (By Context) ---
    else {
      const spineList = document.createElement("div");
      spineList.className = "verses spine-list";
      spineList.style.display = isCurrentChapter ? "flex" : "none";

      const sections = (typeof GITA_SPINE !== "undefined" && GITA_SPINE[chInt]) || [];

      if (sections.length === 0) {
        const emptyNote = document.createElement("div");
        emptyNote.className = "spine-summary";
        emptyNote.style.padding = "4px 6px";
        emptyNote.textContent = "Context outline coming soon.";
        spineList.appendChild(emptyNote);
      } else {
        sections.forEach(sec => {
          const card = document.createElement("div");
          card.className = "spine-card";
          card.dataset.start = sec.start;
          card.dataset.end = sec.end;

          card.innerHTML = `
            <div class="spine-range">Verses ${chInt}.${sec.start}–${chInt}.${sec.end}</div>
            <div class="spine-title">${sec.title}</div>
            <div class="spine-summary">${sec.summary}</div>
          `;

          card.onclick = () => jumpToVerse(chInt, sec.start - 1);
          spineList.appendChild(card);
        });
      }

      chBlock.appendChild(spineList);
    }

    container.appendChild(chBlock);
  });
}

/* ============================================================
   SIDEBAR TOGGLING & ACTIVE HIGHLIGHTING (Part 2/4)
   ============================================================ */

function toggleChapter(chNum) {
  const openDisplay = sidebarViewMode === "number" ? "grid" : "flex";
  const blocks = document.querySelectorAll(".chapter-block");

  blocks.forEach(block => {
    const header = block.querySelector(".chapter-header");
    const body = block.querySelector(".verses");

    if (block.dataset.chapter === String(chNum)) {
      const isOpen = body.style.display === openDisplay;
      body.style.display = isOpen ? "none" : openDisplay;
      header.classList.toggle("open", !isOpen);
    } else {
      // Collapse all other chapters
      body.style.display = "none";
      header.classList.remove("open");
    }
  });
}


function highlightActiveVerse() {
  const openDisplay = sidebarViewMode === "number" ? "grid" : "flex";

  // Expand only the active chapter and collapse all others
  const blocks = document.querySelectorAll("#sidebar .chapter-block");
  blocks.forEach(block => {
    const header = block.querySelector(".chapter-header");
    const body = block.querySelector(".verses");
    const isCurrent = block.dataset.chapter === String(currentChapter);

    body.style.display = isCurrent ? openDisplay : "none";
    if (header) header.classList.toggle("open", isCurrent);
  });

  const activeBlock = document.querySelector(`#sidebar .chapter-block[data-chapter="${currentChapter}"]`);
  if (!activeBlock) return;

  let activeTarget = null;

  if (sidebarViewMode === "number") {
    document.querySelectorAll("#sidebar ul.verses li").forEach(li => li.classList.remove("active-verse"));
    const chapterList = activeBlock.querySelector("ul.verses");
    if (chapterList && chapterList.children[currentVerseIndex]) {
      activeTarget = chapterList.children[currentVerseIndex];
      activeTarget.classList.add("active-verse");
    }
  } else {
    document.querySelectorAll("#sidebar .spine-card").forEach(card => card.classList.remove("active-spine"));
    const verseObj = chapters[currentChapter]?.[currentVerseIndex];
    const verseNum = verseObj ? verseObj.id : currentVerseIndex + 1;

    activeBlock.querySelectorAll(".spine-card").forEach(card => {
      const start = parseInt(card.dataset.start, 10);
      const end   = parseInt(card.dataset.end, 10);
      if (verseNum >= start && verseNum <= end) {
        card.classList.add("active-spine");
        activeTarget = card;
      }
    });
  }

  // Only scroll inside the sidebar on desktop/laptop without moving the main page
  if (activeTarget) {
    const sidebar = document.getElementById("sidebar");
    if (sidebar && window.innerWidth > 900) {
      sidebar.scrollTo({
        top: activeTarget.offsetTop - sidebar.clientHeight / 2,
        behavior: "smooth"
      });
    }
  }
}


/* ============================================================
   MAIN RENDER FUNCTION
   ============================================================ */

function renderCurrentVerse() {
  // Load sandhi dictionary for this chapter
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

  // Trigger animations BEFORE hover meanings so .shloka-word spans exist for sandhi linking
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
   HELPER: Render unified layer (Split Words / Phrase Groups / Meaning Order) (Part 3/4)
   ------------------------------------------------------------ */
function renderAnalyticalLayer(v, targetId, scriptMode) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = "";

  const wrapper = document.getElementById("sandhi-translit-wrapper");
  const isMeaningMode = wrapper && wrapper.classList.contains("show-meaning-order");

  // MODE 3: MEANING ORDER (Rendered inside the same workspace with numbered pills + cascade)
  if (isMeaningMode && Array.isArray(v.parts) && v.parts.length > 0) {
    const showRoleTags = currentChapter !== 3;
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

      // Separate danda from the word
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
  );

  return enriched;
}

/* ============================================================
   UI TOGGLES / DISPLAY HELPERS (Part 4/4)
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

  // Force re-rendering of the text layers so all metadata classes are cleanly generated
  renderSandhi(verseObj);
  renderTranslit(verseObj);
  renderPhraseGroups(verseObj);
  renderMeaningOrder(verseObj);

  // Re-attach hover + execute grammar coloring engine now that the elements are safe in the DOM
  if (typeof applyGrammarColoring === "function") applyGrammarColoring();
  if (typeof attachHoverMeanings === "function") attachHoverMeanings();
}


/* ------------------------------------------------------------
   PHRASE GROUPS (Legacy Compatibility Hook)
   ------------------------------------------------------------ */
function renderPhraseGroups(v) {
  const container = document.getElementById("phrase-groups");
  if (!container) return;
  container.innerHTML = "";

  if (!v.parts) return;

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
   MEANING ORDER (Legacy Compatibility Hook)
   ------------------------------------------------------------ */
function renderMeaningOrder(v) {
  const container = document.getElementById("meaning-order");
  if (!container) return;
  container.innerHTML = "";

  if (!v.parts) return;

  const sortedParts = v.meaningOrder
    ? v.meaningOrder.map(idx => v.parts[idx - 1]).filter(Boolean)
    : v.parts;

  sortedParts.forEach(part => {
    const row = document.createElement("div");
    row.className = "meaning-row";

    const tagCol = document.createElement("div");
    tagCol.className = "meaning-tag-col";
    if (part.role) {
      const roleSpan = document.createElement("span");
      roleSpan.className = "role-tag";
      roleSpan.textContent = part.role;
      tagCol.appendChild(roleSpan);
    }
    row.appendChild(tagCol);

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
  if (!container) return;
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
  if (typeof auditChapter === "function") {
    auditChapter(currentChapter);
  }
}
