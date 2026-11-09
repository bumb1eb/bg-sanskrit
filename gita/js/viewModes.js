/* ============================================================
   viewModes.js — Controls visibility of all Sanskrit layers (FIXED SYNC TIMING)
   ------------------------------------------------------------
   Responsibilities:
   - Show/hide sandhi + translit
   - Show/hide phrase groups
   - Show/hide meaning order
   - Show/hide translation
   - Sync UI toggles with rendered content
   - Force critical grammar re-coloring upon element reveal
   ============================================================ */

function show(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = "block";
}

function hide(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = "none";
}

// ⭐ HELPER: Automatically runs re-rendering and re-coloring frameworks
function forceUIRefresh() {
  if (typeof chapters !== 'undefined' && typeof currentChapter !== 'undefined' && typeof currentVerseIndex !== 'undefined') {
    const verseObj = chapters[currentChapter][currentVerseIndex];
    
    // Explicitly rebuild structural layouts to clean DOM tokens
    if (typeof renderSandhi === "function") renderSandhi(verseObj);
    if (typeof renderTranslit === "function") renderTranslit(verseObj);
    if (typeof renderPhraseGroups === "function") renderPhraseGroups(verseObj);
    if (typeof renderMeaningOrder === "function") renderMeaningOrder(verseObj);
    
    // Repaint all visible layouts immediately
    if (typeof applyGrammarColoring === "function") applyGrammarColoring();
    if (typeof attachHoverMeanings === "function") attachHoverMeanings();
  }
}

/* ============================================================
   1. SANDHI / TRANSLIT SLIDER
   ============================================================ */

function toggleSandhiTranslit() {
  const slider = document.getElementById("toggle-slider");

  if (slider.checked) {
    hide("sandhi");
    show("translit");
  } else {
    show("sandhi");
    hide("translit");
  }
  
  // ⭐ FIX: Force color engine evaluation when flipping between Devanagari and IAST
  forceUIRefresh();
}


/* ============================================================
   2. SEPARATE JOINED WORDS (Sandhi split)
   ============================================================ */

document.getElementById("toggle-sandhi").addEventListener("change", () => {
  const checked = document.getElementById("toggle-sandhi").checked;
  const wrapper = document.getElementById("sandhi-translit-wrapper");
  const sandhiEl = document.getElementById("sandhi");
  const translitEl = document.getElementById("translit");
  const slider = document.getElementById("toggle-slider");

  if (checked) {
    wrapper.style.display = "block";
    if (slider.checked) {
      sandhiEl.style.display = "none";
      translitEl.style.display = "block";
    } else {
      sandhiEl.style.display = "block";
      translitEl.style.display = "none";
    }
  } else {
    wrapper.style.display = "none";
    sandhiEl.style.display = "none";
    translitEl.style.display = "none";
  }
  
  // ⭐ FIX: Force coloring sync upon layer split reveal
  forceUIRefresh();
});


/* ============================================================
   3. PHRASE GROUPS
   ============================================================ */

document.getElementById("toggle-phrase-groups").addEventListener("change", () => {
  const checked = document.getElementById("toggle-phrase-groups").checked;
  checked ? show("phrase-groups-wrapper") : hide("phrase-groups-wrapper");
  
  // ⭐ FIX: Enforce colors across dynamic section reveal
  forceUIRefresh();
});

/* ============================================================
   4. MEANING ORDER
   ============================================================ */

document.getElementById("toggle-meaning-order").addEventListener("change", () => {
  const checked = document.getElementById("toggle-meaning-order").checked;
  checked ? show("meaning-order-wrapper") : hide("meaning-order-wrapper");
  
  // ⭐ FIX: Enforce colors across dynamic section reveal
  forceUIRefresh();
});

/* ============================================================
   5. VERBATIM TRANSLATION
   ============================================================ */

document.getElementById("toggle-translation").addEventListener("change", () => {
  const checked = document.getElementById("toggle-translation").checked;
  checked ? show("translation-wrapper") : hide("translation-wrapper");
  
  // ⭐ FIX: Final safety sync pass
  forceUIRefresh();
});

/* ============================================================
   6. RESET VIEW MODES
   ============================================================ */

function resetViewModes() {
  document.getElementById("toggle-sandhi").checked = false;
  document.getElementById("toggle-phrase-groups").checked = false;
  document.getElementById("toggle-meaning-order").checked = false;
  document.getElementById("toggle-translation").checked = false;
  document.getElementById("toggle-slider").checked = false;

  hide("sandhi-translit-wrapper");
  hide("sandhi");
  hide("translit");

  hide("phrase-groups-wrapper");
  hide("meaning-order-wrapper");
  hide("translation-wrapper");
  hide("cases-wrapper");
}

/* ============================================================
   7. INITIAL STATE
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  resetViewModes();
});
