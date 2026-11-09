/* ============================================================
   grammar.js — Grammar Coloring Engine
   ------------------------------------------------------------
   Responsibilities:
   - Apply grammar colors to split Sanskrit only
   - Use DICT + dict-sandhi to classify words
   - Respond to grammar panel toggles
   - Never color shloka or translation
   - Provide clean API for render.js
   ============================================================ */


/* ------------------------------------------------------------
   Utility: remove all grammar classes from an element
   ------------------------------------------------------------ */

function clearGrammarClasses(el) {
  el.classList.remove(
    "noun",
    "verb",
    "pronoun",
    "adjective",
    "indeclinable",
    "case"
  );
}


/* ------------------------------------------------------------
   Utility: classify a word using DICT + dict-sandhi
   ------------------------------------------------------------ */

function classifyWord(word) {
  if (!word) return null;

  const w = word.trim();

  // 1. Check DICT (simple words)
  if (DICT[w]) {
    return DICT[w].type;   // noun / verb / pronoun / adjective / indeclinable
  }

  // 2. Check dict-sandhi (compounds)
/*   if (dictSandhi[w]) {
    return "case";         // compounds show case info
  } */

  return null;
}


/* ------------------------------------------------------------
   Apply grammar coloring to all split Sanskrit sections
   ------------------------------------------------------------
   Sections affected:
     - sandhi
     - translit
     - phrase groups
     - meaning order
     - cases-below
   ------------------------------------------------------------ */

function applyGrammarColoring() {
  // Collect all elements that may contain split Sanskrit layout text boxes
  const targets = document.querySelectorAll(
    "#sandhi span, #sandhi div, #sandhi .sanskrit-text," +
    "#translit span, #translit div, #translit .sanskrit-text," +
    "#phrase-groups span, #phrase-groups div," +
    "#meaning-order span, #meaning-order div," +
    "#cases-below span, #cases-below div"
  );

  targets.forEach(el => {
    // ⭐ FIX: Cache the original class token on first execution pass before it gets erased
    if (!el._originalType) {
      if (el.classList.contains("noun")) el._originalType = "noun";
      else if (el.classList.contains("verb")) el._originalType = "verb";
      else if (el.classList.contains("pronoun")) el._originalType = "pronoun";
      else if (el.classList.contains("adjective")) el._originalType = "adjective";
      else if (el.classList.contains("indeclinable")) el._originalType = "indeclinable";
      else if (el.classList.contains("case")) el._originalType = "case";
    }

    // Prioritize our persistent in-memory token over standard text string lookups
    const type = el._originalType || classifyWord(el.textContent.trim());

    // Safely clear dynamic visual coloring class states out
    clearGrammarClasses(el);

    // Stop execution sequence if word type is not in configuration matrix
    if (!type) return;

    // Evaluate active status of management checkboxes and append styling variables
    if (type === "noun" && document.getElementById("toggle-nouns").checked) {
      el.classList.add("noun");
    }
    if (type === "verb" && document.getElementById("toggle-verbs").checked) {
      el.classList.add("verb");
    }
    if (type === "pronoun" && document.getElementById("toggle-pronouns").checked) {
      el.classList.add("pronoun");
    }
    if (type === "adjective" && document.getElementById("toggle-adjectives").checked) {
      el.classList.add("adjective");
    }
    if (type === "indeclinable" && document.getElementById("toggle-indeclinables").checked) {
      el.classList.add("indeclinable");
    }
    if (type === "case" && document.getElementById("toggle-cases").checked) {
      el.classList.add("case");
    }
  });
}



/* ============================================================
   Grammar Toggle Handlers
   ------------------------------------------------------------
   Called when user clicks grammar panel checkboxes.
   ============================================================ */

function toggleGrammar(type) {
  // Re-apply grammar coloring after any toggle change
  applyGrammarColoring();
}


/* ============================================================
   Enable All Grammar (button)
   ============================================================ */

function enableAllGrammar() {
  const toggles = [
    "toggle-nouns",
    "toggle-verbs",
    "toggle-pronouns",
    "toggle-adjectives",
    "toggle-indeclinables",
    "toggle-cases"
  ];

  toggles.forEach(id => {
    const cb = document.getElementById(id);
    if (cb) cb.checked = true;
  });

  applyGrammarColoring();
}


/* ============================================================
   Reset Grammar (button)
   ============================================================ */

function disableAllGrammar() {
  const toggles = [
    "toggle-nouns",
    "toggle-verbs",
    "toggle-pronouns",
    "toggle-adjectives",
    "toggle-indeclinables",
    "toggle-cases"
  ];

  toggles.forEach(id => {
    const cb = document.getElementById(id);
    if (cb) cb.checked = false;
  });

  applyGrammarColoring();
}
