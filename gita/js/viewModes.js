/* ============================================================
   viewModes.js — Controls visibility of all Sanskrit layers (FIXED SYNC TIMING)
   ------------------------------------------------------------
   Responsibilities:
   - Show/hide sandhi + translit + inline phrase groups + meaning order
   - Sync 3-step segmented bar with right-panel checkboxes
   - Show/hide translation
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
   UNIFIED ANALYTICAL MODE CONTROLLER (Split / Phrases / Meaning)
   ============================================================ */

function setAnalyticalMode(mode) {
  const sandhiChk  = document.getElementById("toggle-sandhi");
  const phraseChk  = document.getElementById("toggle-phrase-groups");
  const meaningChk = document.getElementById("toggle-meaning-order");
  const wrapper    = document.getElementById("sandhi-translit-wrapper");

  // Always keep standalone legacy sections hidden
  hide("phrase-groups-wrapper");
  hide("meaning-order-wrapper");

  // Ensure workspace is open when selecting any tab
  if (sandhiChk && !sandhiChk.checked) {
    sandhiChk.checked = true;
    show("sandhi-translit-wrapper");
    const useTranslit = document.getElementById("toggle-slider")?.checked;
    if (useTranslit) {
      hide("sandhi");
      show("translit");
    } else {
      show("sandhi");
      hide("translit");
    }
    if (typeof runAnimations === "function") {
      runAnimations();
    }
  }

  // Sync checkboxes and wrapper classes
  if (mode === "split") {
    if (phraseChk) phraseChk.checked = false;
    if (meaningChk) meaningChk.checked = false;
    if (wrapper) {
      wrapper.classList.remove("show-phrase-groups", "show-meaning-order");
    }
  } else if (mode === "phrases") {
    if (phraseChk) phraseChk.checked = true;
    if (meaningChk) meaningChk.checked = false;
    if (wrapper) {
      wrapper.classList.add("show-phrase-groups");
      wrapper.classList.remove("show-meaning-order");
    }
  } else if (mode === "meaning") {
    if (phraseChk) phraseChk.checked = false;
    if (meaningChk) meaningChk.checked = true;
    if (wrapper) {
      wrapper.classList.remove("show-phrase-groups");
      wrapper.classList.add("show-meaning-order");
    }
  }

  // Update active button state on the 3-step segmented bar
  document.querySelectorAll(".segmented-bar .seg-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });

  // Re-render active verse layers and re-attach grammar colors + compound hover links
  forceUIRefresh();
}


/* ============================================================
   2. SEPARATE JOINED WORDS (Master On/Off for Analytical Workspace)
   ============================================================ */

document.getElementById("toggle-sandhi").addEventListener("change", () => {
  const checked = document.getElementById("toggle-sandhi").checked;

  if (checked) {
    show("sandhi-translit-wrapper");
    const useTranslit = document.getElementById("toggle-slider").checked;
    if (useTranslit) {
      hide("sandhi");
      show("translit");
    } else {
      show("sandhi");
      hide("translit");
    }

    const phraseChecked = document.getElementById("toggle-phrase-groups")?.checked;
    const meaningChecked = document.getElementById("toggle-meaning-order")?.checked;
    const activeMode = meaningChecked ? "meaning" : phraseChecked ? "phrases" : "split";
    setAnalyticalMode(activeMode);

    if (typeof runAnimations === "function") {
      runAnimations();
    }
  } else {
    hide("sandhi-translit-wrapper");
    hide("sandhi");
    hide("translit");
    if (typeof clearAnimations === "function") {
      clearAnimations();
    }
  }
});


/* ============================================================
   3. PHRASE GROUPS (Synced Checkbox)
   ============================================================ */

document.getElementById("toggle-phrase-groups").addEventListener("change", () => {
  const checked = document.getElementById("toggle-phrase-groups").checked;
  if (checked) {
    setAnalyticalMode("phrases");
  } else {
    const meaningChecked = document.getElementById("toggle-meaning-order")?.checked;
    setAnalyticalMode(meaningChecked ? "meaning" : "split");
  }
});


/* ============================================================
   4. MEANING ORDER (Synced Checkbox)
   ============================================================ */

document.getElementById("toggle-meaning-order").addEventListener("change", () => {
  const checked = document.getElementById("toggle-meaning-order").checked;
  if (checked) {
    setAnalyticalMode("meaning");
  } else {
    const phraseChecked = document.getElementById("toggle-phrase-groups")?.checked;
    setAnalyticalMode(phraseChecked ? "phrases" : "split");
  }
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

  const wrapper = document.getElementById("sandhi-translit-wrapper");
  if (wrapper) {
    wrapper.classList.remove("show-phrase-groups", "show-meaning-order");
  }

  // Reset segmented bar active button back to "Split Words"
  document.querySelectorAll(".segmented-bar .seg-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mode === "split");
  });

  hide("phrase-groups-wrapper");
  hide("meaning-order-wrapper");
  hide("translation-wrapper");
  hide("cases-wrapper");

  if (typeof clearAnimations === "function") {
    clearAnimations();
  }
}


/* ============================================================
   7. INITIAL STATE
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  resetViewModes();
});
