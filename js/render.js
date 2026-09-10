// js/render.js

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

  // 1. Try normal dictionary
  if (window.DICT && window.DICT[key]) return window.DICT[key];

  // 2. Try sandhi dictionary
  if (window.SANDHI && window.SANDHI[key]) return window.SANDHI[key];

  return null;
}

/* -----------------------------------------------------------
   SHLOKA RENDERER (gradient)
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

  return text
    .split("<br>")
    .map(line =>
      line.replace(/\s+/g, " ").trim()
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
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\s+/g, " ");

  if (!text) return "";

  return text
    .split("<br>")
    .map(line =>
      line.replace(/\s+/g, " ").trim()
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
   GLOBAL STATE
----------------------------------------------------------- */
let currentIndex = 0;
let CURRENT_CHAPTER = CHAPTER_1;
let CURRENT_CHAPTER_NAME = CHAPTER_1.name || "Chapter 1";

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

  document.getElementById("shloka").innerHTML = "";
  document.getElementById("sandhi").innerHTML = "";
  document.getElementById("translit").innerHTML = "";
  document.getElementById("translation").innerHTML = "";
  document.getElementById("case-panel").innerHTML = "";

  renderStotra(0);
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
  document.getElementById("translit").innerHTML = renderSection(s.translit);
  document.getElementById("translation").innerHTML = renderSection(s.translation || "");

  document.getElementById("pageIndicator").innerText =
    `Stotra ${index + 1} of ${chapterData.length}`;

  document.getElementById("prevBtn").disabled = index === 0;
  document.getElementById("nextBtn").disabled = index === chapterData.length - 1;

  renderCasePanel(index);
}

/* -----------------------------------------------------------
   CASE PANEL — WITH CASE NAME NORMALIZATION
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
   UI TOGGLES
----------------------------------------------------------- */
function showTranslit() {
  document.getElementById("translit").style.display = "block";
  document.getElementById("translation").style.display = "none";
  document.getElementById("toggle-title").innerText = "Transliteration";
}

function showTranslation() {
  document.getElementById("translit").style.display = "none";
  document.getElementById("translation").style.display = "block";
  document.getElementById("toggle-title").innerText = "Verbatim Translation";
}

/* -----------------------------------------------------------
   PAGE NAVIGATION
----------------------------------------------------------- */
function changePage(dir) {
  const chapterData = getChapterData(CURRENT_CHAPTER);
  let newIndex = currentIndex + dir;
  if (newIndex < 0) newIndex = 0;
  if (newIndex >= chapterData.length) newIndex = chapterData.length - 1;
  renderStotra(newIndex);
}

function jumpTo(index) {
  const chapterData = getChapterData(CURRENT_CHAPTER);
  if (index < 0 || index >= chapterData.length) return;
  renderStotra(index);
}

/* -----------------------------------------------------------
   CHAPTER INDEX UI
----------------------------------------------------------- */
function toggleChapter(headerEl) {
  const chapterBlock = headerEl.parentElement;
  const body = chapterBlock.querySelector(".chapter-body");
  if (!body) return;

  const isOpen = body.style.display === "block";
  body.style.display = isOpen ? "none" : "block";

  const icon = headerEl.querySelector(".toggle-icon");
  if (icon) icon.textContent = isOpen ? "+" : "–";
}

function buildIndex() {
  const container = document.getElementById("index-container");
  if (!container) return;

  container.innerHTML = "";

  const chapters = [CHAPTER_1, CHAPTER_2, CHAPTER_3];

  chapters.forEach((chapter) => {
    if (!chapter) return;

    const chapterBlock = document.createElement("div");
    chapterBlock.className = "chapter-block";

    const header = document.createElement("div");
    header.className = "chapter-header";

    const icon = document.createElement("span");
    icon.className = "toggle-icon";
    icon.textContent = "+";
    icon.onclick = (event) => {
      event.stopPropagation();
      toggleChapter(header);
    };

    const title = document.createElement("span");
    title.className = "chapter-title";
    title.textContent = chapter.name || "Chapter";
    title.onclick = (event) => {
      event.stopPropagation();
      toggleChapter(header);
    };

    header.appendChild(icon);
    header.appendChild(title);
    chapterBlock.appendChild(header);

    const body = document.createElement("div");
    body.className = "chapter-body";
    body.style.display = "none";

    if (chapter.groups && Array.isArray(chapter.groups)) {
      chapter.groups.forEach((group, gIndex) => {
        const groupHeader = document.createElement("div");
        groupHeader.className = "group-header";
        groupHeader.textContent = group.label || `Group ${gIndex + 1}`;

        const ul = document.createElement("ul");
        ul.className = "verses";
        ul.style.display = "none";

        groupHeader.onclick = (event) => {
          event.stopPropagation();
          const isOpen = ul.style.display === "block";
          ul.style.display = isOpen ? "none" : "block";
        };

        const data = group.data || [];
        for (let v = 0; v < data.length; v++) {
          const li = document.createElement("li");
          const verse = data[v];
          li.textContent = verse.title || `Verse ${verse.id || (v + 1)}`;

          li.onclick = (event) => {
            event.stopPropagation();
            setChapter(chapter, chapter.name || "Chapter");
            let offset = 0;
            for (let gg = 0; gg < gIndex; gg++) {
              offset += (chapter.groups[gg].data || []).length;
            }
            const flatIndex = offset + v;
            jumpTo(flatIndex);
          };

          ul.appendChild(li);
        }

        body.appendChild(groupHeader);
        body.appendChild(ul);
      });

    } else {
      const data = getChapterData(chapter);
      const ul = document.createElement("ul");
      ul.className = "verses";
      ul.style.display = "none";

      for (let i = 0; i < data.length; i++) {
        const li = document.createElement("li");
        const verse = data[i];
        li.textContent = verse.title || `Verse ${verse.id || (i + 1)}`;

        li.onclick = (event) => {
          event.stopPropagation();
          setChapter(chapter, chapter.name || "Chapter");
          jumpTo(i);
        };

        ul.appendChild(li);
      }

      body.appendChild(ul);
    }

    chapterBlock.appendChild(body);
    container.appendChild(chapterBlock);
  });
}

// === MOBILE TAP HANDLER: POPUP NEXT TO TAPPED WORD ===
document.addEventListener("click", function (e) {
  const popup = document.getElementById("meaningPopup");

  // If tap is NOT on a Sanskrit word → hide popup
  if (!e.target.classList.contains("noun") &&
      !e.target.classList.contains("verb") &&
      !e.target.classList.contains("pronoun") &&
      !e.target.classList.contains("adjective") &&
      !e.target.classList.contains("indeclinable")) {
    popup.style.display = "none";
    return;
  }

  // Get meaning
  const meaning = e.target.getAttribute("title");
  if (!meaning) return;

  // Set popup text
  popup.innerText = meaning;

  // Position popup next to the tapped word
  const rect = e.target.getBoundingClientRect();
  const scrollY = window.scrollY || window.pageYOffset;

  popup.style.left = (rect.left + rect.width/2 - popup.offsetWidth/2) + "px";
  popup.style.top = (rect.top + scrollY - 45) + "px"; // 45px above the word
  popup.style.display = "block";
});



// === PAGE INITIALIZATION ===
window.onload = () => {
  buildIndex();
  setChapter(CHAPTER_1, CHAPTER_1.name || "Chapter 1");
};


window.onload = () => {
  buildIndex();
  setChapter(CHAPTER_1, CHAPTER_1.name || "Chapter 1");
};
