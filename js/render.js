// js/render.js

// Use real chapter objects as the source of truth
window.CHAPTERS = [
  CHAPTER_1,
  CHAPTER_2,
  CHAPTER_3
];


function normalizeSanskrit(str) {
  return str
    .normalize("NFC")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .trim();
}

function getLookupKey(rawWord) {
  let w = rawWord.normalize("NFC");

  w = w.replace(/[।॥]/g, "");
  w = w.replace(/[\u200B-\u200D\uFEFF]/g, "");
  w = w.replace(/[-‑–—]/g, "-");
  w = w.replace(/[|,;:.!?]/g, "");
  w = w.replace(/\s+/g, "");

  return w;
}

/* -----------------------------------------------------------
   HELPER: FLATTEN CHAPTER
----------------------------------------------------------- */
function getChapterData(chapter) {
  if (!chapter) return [];
  if (Array.isArray(chapter)) return chapter;
  if (chapter.groups && Array.isArray(chapter.groups)) {
    return chapter.groups.flatMap(g => g.data || []);
  }
  return [];
}

/* -----------------------------------------------------------
   GLOBAL DICTIONARY LOOKUP
----------------------------------------------------------- */
function lookupDict(rawWord) {
  const key = getLookupKey(rawWord);

  if (window.DICT && window.DICT[key]) return window.DICT[key];
  if (window.SANDHI && window.SANDHI[key]) return window.SANDHI[key];

  return null;
}

/* -----------------------------------------------------------
   SHLOKA RENDERER
----------------------------------------------------------- */
function renderWord(rawWord) {
  const info = lookupDict(rawWord) || {};

  const allowedTypes = ["noun","verb","adjective","pronoun","indeclinable","sandhi"];
  const cls = allowedTypes.includes(info.type) ? info.type : "";
  const title = info.meaning ? `title="${info.meaning}"` : "";

  return `<span class="${cls}" ${title}>${rawWord}</span>`;
}

function renderSection(text) {
  if (!text) return "";

  text = text.replace(/^\s+/gm, "");

  return text
    .split("<br>")
    .map(line =>
      line.replace(/[ \t]+/g, " ").trim()
          .split(" ")
          .map(w => renderWord(w.trim()))
          .join(" ")
    )
    .join("<br>");
}

/* -----------------------------------------------------------
   SANDHI-VICHED RENDERER
----------------------------------------------------------- */
function renderSandhiViched(text) {

  text = text
    .replace(/^\s+/gm, "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/[ \t]+/g, " ");

  if (!text) return "";

  return text
    .split("<br>")
    .map(line =>
      line.replace(/[ \t]+/g, " ").trim()
        .split(" ")
        .map(w => {
          const parts = w.split(/[-–—]|·/);
          return parts
            .map(p => renderWord(p))
            .join('<span class="dot">·</span>');
        })
        .join(" ")
    )
    .join("<br>");
}

/* -----------------------------------------------------------
   MAP SANDHI → TRANSLIT
----------------------------------------------------------- */
function mapSandhiToTranslit(sandhiLine, translitLine, DICT) {

  const splitWords = line =>
    line
      .replace(/[|।॥]/g, "")
      .replace(/[\u200B-\u200D\uFEFF]/g, "")
      .split(/[\s·]+/)
      .filter(w => w.trim().length > 0);

  const sandhiWords = splitWords(sandhiLine);
  const translitWords = splitWords(translitLine);

  const result = [];

  for (let i = 0; i < translitWords.length; i++) {

    const sandhiWord = sandhiWords[i];
    const translitWord = translitWords[i];

    let dictEntry = null;

    if (sandhiWord && DICT[sandhiWord]) {
      dictEntry = DICT[sandhiWord];
    }

    if (dictEntry) {
      const cls = dictEntry.type || "";
      const meaning = dictEntry.meaning || "";
      result.push(
        `<span class="${cls}" title="${meaning}">${translitWord}</span>`
      );
    } else {
      result.push(`<span>${translitWord}</span>`);
    }
  }

  return result.join(" ");
}

/* -----------------------------------------------------------
   TRANSLIT RENDERER
----------------------------------------------------------- */
function renderTranslitMapped(sandhiText, translitText) {
  return translitText
    .replace(/^\s+/gm, "")
    .split("<br>")
    .map((line, idx) => {
      const sandhiLine = sandhiText.split("<br>")[idx] || "";
      return mapSandhiToTranslit(sandhiLine, line, DICT);
    })
    .join("<br>");
}

/* -----------------------------------------------------------
   GLOBAL STATE
----------------------------------------------------------- */
let currentIndex = 0;
let CURRENT_CHAPTER = CHAPTER_1;
let CURRENT_CHAPTER_NAME = CHAPTER_1.name || "Chapter 1";

/* -----------------------------------------------------------
   DEBUG TOGGLE
----------------------------------------------------------- */
const DEBUG = false;

const btn = document.getElementById("check-missing-btn");
if (btn) {
  btn.style.display = DEBUG ? "inline-block" : "none";
}

/* -----------------------------------------------------------
   INDEX MAPPING
----------------------------------------------------------- */
function getGlobalIndex(localIndex) {
  const ch1Len = getChapterData(CHAPTER_1).length;
  const ch2Len = getChapterData(CHAPTER_2).length;
  const ch3Len = getChapterData(CHAPTER_3).length;

  if (CURRENT_CHAPTER === CHAPTER_1) return localIndex + 1;
  if (CURRENT_CHAPTER === CHAPTER_2) return ch1Len + localIndex + 1;
  if (CURRENT_CHAPTER === CHAPTER_3) return ch1Len + ch2Len + localIndex + 1;
  return localIndex + 1;
}

/* -----------------------------------------------------------
   CHAPTER SWITCH
----------------------------------------------------------- */
function setChapter(chapterObj, chapterName = "Current Chapter") {
  CURRENT_CHAPTER = chapterObj;
  CURRENT_CHAPTER_NAME = chapterName;
  currentIndex = 0;

  if (CURRENT_CHAPTER.sandhi) {
    loadChapterSandhi(CURRENT_CHAPTER.sandhi);
  } else {
    window.SANDHI = {};
  }

  // ⭐ DO NOT clear the content panel
  // The verse on screen must remain visible until user clicks a verse

  // Save current active chapter to localStorage
  localStorage.setItem("lastChapter", CURRENT_CHAPTER_NAME);

  // ⭐ DO NOT auto-jump, auto-highlight, auto-expand, or collapse anything
}


/* -----------------------------------------------------------
   MAIN RENDERER
----------------------------------------------------------- */
function renderStotra(index) {
  const chapterData = getChapterData(CURRENT_CHAPTER);
  const s = chapterData[index];
  if (!s) return;

  currentIndex = index;

  document.getElementById("shloka").innerHTML = renderSection(s.shloka);
  document.getElementById("sandhi").innerHTML = renderSandhiViched(s.sandhi);
  document.getElementById("translit").innerHTML = renderTranslitMapped(s.sandhi, s.translit);
  document.getElementById("translation").innerHTML = renderSection(s.translation || "");

  document.getElementById("pageIndicator").innerText =
  `Stotra ${index + 1} of ${chapterData.length}`;

  document.getElementById("prevBtn").disabled = index === 0;
  document.getElementById("nextBtn").disabled = index === chapterData.length - 1;

  renderCasePanel(index);
}

/* -----------------------------------------------------------
   CASE PANEL
----------------------------------------------------------- */
function renderCasePanel(index) {
  const chapterData = getChapterData(CURRENT_CHAPTER);
  const s = chapterData[index];
  if (!s) return;

  const sandhiText = s.sandhi || "";

  const sandhiWords = sandhiText
    .replace(/<br>/g, " ")
    .replace(/[।|,;:.!?]/g, "")
    .split(/\s+/)
    .filter(w => w.trim().length > 0);

  const cases = {
    "Nominative (1st)": [],
    "Accusative (2nd)": [],
    "Instrumental (3rd)": [],
    "Dative (4th)": [],
    "Ablative (5th)": [],
    "Genitive (6th)": [],
    "Locative (7th)": [],
    "Vocative (8th)": []
  };

  const caseKeyMap = {
    "Nominative": "Nominative (1st)",
    "Accusative": "Accusative (2nd)",
    "Instrumental": "Instrumental (3rd)",
    "Dative": "Dative (4th)",
    "Ablative": "Ablative (5th)",
    "Genitive": "Genitive (6th)",
    "Locative": "Locative (7th)",
    "Vocative": "Vocative (8th)"
  };

  sandhiWords.forEach(w => {
    const parts = w.split(/[-–—]|·/).filter(p => p.trim().length > 0);

    parts.forEach(p => {
      const info = lookupDict(p);
      if (info && info.case) {
        const bucket = caseKeyMap[info.case] || info.case;
        if (cases[bucket]) {
          cases[bucket].push(p);
        }
      }
    });
  });

  let html = "<h3>Cases in this Shloka</h3>";

  Object.entries(cases).forEach(([caseName, words]) => {
    if (words.length > 0) {
      html += `<div class="case-group"><strong>${caseName}</strong><br>${words.join(", ")}</div>`;
    }
  });

  document.getElementById("case-panel").innerHTML = html;
}

/* -----------------------------------------------------------
   PAGE NAVIGATION
----------------------------------------------------------- */
function changePage(dir) {
  const chapterData = getChapterData(CURRENT_CHAPTER);
  let newIndex = currentIndex + dir;

  if (newIndex < 0) newIndex = 0;
  if (newIndex >= chapterData.length) newIndex = chapterData.length - 1;

  currentIndex = newIndex;

  jumpTo(newIndex);
}

/* -----------------------------------------------------------
   FIXED jumpTo() — NO toggleTT()
----------------------------------------------------------- */
function jumpTo(index) {
  const chapterData = getChapterData(CURRENT_CHAPTER);
  if (index < 0 || index >= chapterData.length) return;

  localStorage.setItem("lastVerse", index);
  renderStotra(index);

  // ⭐ Reset slider
  const slider = document.getElementById("toggle-slider");
  slider.checked = false;
  toggleSandhiTranslit();

  // ⭐ Highlight active verse in index
  highlightActiveVerse(index);
  expandGroupForVerse(index + 1);

}

function highlightActiveVerse(index) {
  const verseNumber = index + 1;

  // Find the chapter-block whose header matches CURRENT_CHAPTER.name
  const chapterBlocks = document.querySelectorAll(".chapter-block");
  let currentBlock = null;

  chapterBlocks.forEach(block => {
    const header = block.querySelector(".chapter-header span:nth-child(2)");
    if (header && header.textContent.trim() === CURRENT_CHAPTER.name.trim()) {
      currentBlock = block;
    }
  });

  if (!currentBlock) return;

  // Remove highlight ONLY inside the current chapter
  currentBlock.querySelectorAll("ul.verses li")
    .forEach(li => li.classList.remove("active-verse"));

  // Highlight the correct verse inside the current chapter
  const target = currentBlock.querySelector(`ul.verses li[data-verse="${verseNumber}"]`);
  if (target) {
    target.classList.add("active-verse");
  }
}




/* -----------------------------------------------------------
   NEW Sandhi ↔ Transliteration toggle
----------------------------------------------------------- */
function toggleSandhiTranslit() {
  const sandhi = document.getElementById("sandhi");
  const translit = document.getElementById("translit");
  const slider = document.getElementById("toggle-slider");

  if (slider.checked) {
    translit.style.display = "block";
    sandhi.style.display = "none";
  } else {
    translit.style.display = "none";
    sandhi.style.display = "block";
  }
}

/* -----------------------------------------------------------
   CHAPTER INDEX UI
----------------------------------------------------------- */
function toggleChapter(header) {
  const chapterBlock = header.parentElement;
  const chapterBody = chapterBlock.querySelector(".chapter-body");
  const icon = header.querySelector(".toggle-icon");

  // Identify which chapter this header belongs to
  const chapterName = header.querySelector("span:not(.toggle-icon)").textContent.trim();
  const chapterIndex = window.CHAPTERS.findIndex(ch => ch.name === chapterName);

  if (chapterIndex !== -1 && CURRENT_CHAPTER !== window.CHAPTERS[chapterIndex]) {
    // ⭐ Formally switch the chapter state and reload Chapter data
    setChapter(window.CHAPTERS[chapterIndex], chapterName);
  }

  // Collapse all other chapters
  document.querySelectorAll(".chapter-body").forEach(body => {
    if (body !== chapterBody) body.style.display = "none";
  });
  document.querySelectorAll(".chapter-header .toggle-icon").forEach(ic => {
    if (ic !== icon) ic.textContent = "▶";
  });

  // Toggle selected chapter body display
  if (chapterBody.style.display === "none") {
    chapterBody.style.display = "block";
    icon.textContent = "▼";
  } else {
    chapterBody.style.display = "none";
    icon.textContent = "▶";
  }
}


/* -----------------------------------------------------------
   BUILD INDEX (SAFE VERSION)
----------------------------------------------------------- */
function buildIndex() {
  console.log("CHAPTERS in buildIndex:", window.CHAPTERS);
  const container = document.getElementById("index-container");
  container.innerHTML = "";

  const chapters = window.CHAPTERS || [];

  chapters.forEach((chapter, cIndex) => {

    const chapterBlock = document.createElement("div");
    chapterBlock.className = "chapter-block";

    const chapterHeader = document.createElement("div");
    chapterHeader.className = "chapter-header";

    const chapterIcon = document.createElement("span");
    chapterIcon.className = "toggle-icon";
    chapterIcon.textContent = "▶";

    const chapterTitle = document.createElement("span");
    chapterTitle.textContent = chapter.name || `Chapter ${cIndex + 1}`;

    chapterHeader.appendChild(chapterIcon);
    chapterHeader.appendChild(chapterTitle);

    chapterHeader.onclick = () => toggleChapter(chapterHeader);

    chapterBlock.appendChild(chapterHeader);

    const chapterBody = document.createElement("div");
    chapterBody.className = "chapter-body";
    chapterBody.style.display = "none";

    const groups = chapter.groups || [];

    groups.forEach((group, gIndex) => {

      const groupHeader = document.createElement("div");
      groupHeader.className = "group-header";

      const groupIcon = document.createElement("span");
      groupIcon.className = "toggle-icon";
      groupIcon.textContent = "▶";

      const groupTitle = document.createElement("span");
      groupTitle.textContent = group.label || `Group ${gIndex + 1}`;

      groupHeader.appendChild(groupIcon);
      groupHeader.appendChild(groupTitle);

      const ul = document.createElement("ul");
      ul.className = "verses";
      ul.style.display = "none";

      const verseObjects = group.data || [];

      // ⭐ store range on the header for auto-expand logic
      if (verseObjects.length > 0) {
        groupHeader.dataset.start = verseObjects[0].id;
        groupHeader.dataset.end = verseObjects[verseObjects.length - 1].id;
      }

      verseObjects.forEach((verseObj) => {
        const li = document.createElement("li");
        li.textContent = `Verse ${verseObj.id}`;
        li.setAttribute("data-verse", verseObj.id);
        li.onclick = (event) => {
		  event.stopPropagation();              // prevent collapsing the group
		  expandGroupForVerse(verseObj.id);     // ensure correct group is open
		  jumpTo(verseObj.id - 1);              // load the verse (0-based index)
		};
        ul.appendChild(li);
      });

      groupHeader.onclick = (event) => {
        event.stopPropagation();
        toggleGroup(groupHeader, ul);
      };

      chapterBody.appendChild(groupHeader);
      chapterBody.appendChild(ul);
    });

    chapterBlock.appendChild(chapterBody);
    container.appendChild(chapterBlock);
  });
}

function toggleGroup(groupHeader, ul) {
  const icon = groupHeader.querySelector(".toggle-icon");
  const isOpen = ul.style.display === "block";
  ul.style.display = isOpen ? "none" : "block";
  icon.textContent = isOpen ? "▶" : "▼";
}


function expandGroupForVerse(verseNumber) {
  // Find active chapter block in sidebar to prevent cross-chapter matching
  const chapterBlocks = document.querySelectorAll("#sidebar .chapter-block");
  let activeChapterBlock = null;

  chapterBlocks.forEach(block => {
    const title = block.querySelector(".chapter-header span:not(.toggle-icon)").textContent.trim();
    if (title === CURRENT_CHAPTER_NAME) {
      activeChapterBlock = block;
    }
  });

  const scope = activeChapterBlock || document;
  const headers = scope.querySelectorAll(".group-header");

  headers.forEach(header => {
    const start = parseInt(header.dataset.start, 10);
    const end = parseInt(header.dataset.end, 10);
    const body = header.nextElementSibling; // <ul> after group header
    const icon = header.querySelector(".toggle-icon");

    if (!body || isNaN(start) || isNaN(end)) return;

    if (verseNumber >= start && verseNumber <= end) {
      body.style.display = "block";
      if (icon) icon.textContent = "▼";
    } else {
      body.style.display = "none";
      if (icon) icon.textContent = "▶";
    }
  });
}


/* -----------------------------------------------------------
   MOBILE TAP HANDLER
----------------------------------------------------------- */
document.addEventListener("click", function (e) {
  const popup = document.getElementById("meaningPopup");

  const isWord =
    e.target.classList.contains("noun") ||
    e.target.classList.contains("verb") ||
    e.target.classList.contains("pronoun") ||
    e.target.classList.contains("adjective") ||
    e.target.classList.contains("indeclinable") ||
    e.target.classList.contains("sandhi");

  if (!isWord) {
    popup.style.display = "none";
    return;
  }

  const meaning =
    e.target.getAttribute("title") ||
    e.target.getAttribute("data-sandhi");

  if (!meaning) return;

  popup.innerText = meaning;

  const rect = e.target.getBoundingClientRect();
  const scrollY = window.scrollY || window.pageYOffset;

  popup.style.left = (rect.left + rect.width / 2 - popup.offsetWidth / 2) + "px";
  popup.style.top = (rect.top + scrollY - popup.offsetHeight - 12) + "px";

  popup.style.display = "block";
});

/* -----------------------------------------------------------
   PAGE INITIALIZATION
----------------------------------------------------------- */
window.onload = () => {
  window.CHAPTERS = [CHAPTER_1, CHAPTER_2, CHAPTER_3];  
  
  console.log("CHAPTERS used in buildIndex:", window.CHAPTERS);
  
  buildIndex();

  const lastChapter = localStorage.getItem("lastChapter");
  const lastVerse = localStorage.getItem("lastVerse");

  const chapterMap = {
    "Chapter 1": CHAPTER_1,
    "Chapter 2": CHAPTER_2,
    "Chapter 3": CHAPTER_3
  };

  const chapterObj = chapterMap[lastChapter] || CHAPTER_1;
  setChapter(chapterObj, chapterObj.name);

  if (lastVerse !== null) {
    jumpTo(parseInt(lastVerse));
  } else {
    jumpTo(0);
  }
};
