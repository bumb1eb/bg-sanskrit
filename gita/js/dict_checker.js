/* ============================================================
   dict_checker.js — Dictionary Coverage Checker
   ------------------------------------------------------------
   Responsibilities:
   - Identify missing DICT entries
   - Identify missing dict-sandhi entries
   - Check both shloka and sandhi-viched
   - Work with ANY chapter (auto-detect)
   - Provide clean console output
   - Integrate with render.js → runChecker()
   ============================================================ */

(function () {

  /* ------------------------------------------------------------
     Utility: clean a Sanskrit token
     ------------------------------------------------------------ */
  function cleanToken(w) {
    return w
      .replace(/[.,;:!?()"'”“’॥।]/g, "")
      .replace(/[\u200B-\u200D\uFEFF]/g, "")
      .trim();
  }

  /* ------------------------------------------------------------
     Utility: split token into parts (handles ·, -, —, whitespace)
     ------------------------------------------------------------ */
  function splitToken(token) {
    return token
      .split(/[-–—]|·|\s+/)
      .map(t => cleanToken(t))
      .filter(t => t.length > 0);
  }

  /* ------------------------------------------------------------
     Utility: detect compound words
     ------------------------------------------------------------ */
  function isCompound(rawToken) {
    const token = cleanToken(rawToken);

    // Explicit separators
    if (token.includes("·") || token.includes("-") || token.includes("–") || token.includes("—")) {
      return true;
    }

    // Long Devanagari cluster → likely compound
    if (/[\u0900-\u097F]{6,}/.test(token)) {
      return true;
    }

    return false;
  }

  /* ------------------------------------------------------------
     MAIN CHECKER
     ------------------------------------------------------------ */
  function checkMissingWords(verses, DICT, DICT_SANDHI) {

    const missingShlokaSimple = new Set();
    const missingViched = new Set();
    const missingShlokaSandhi = new Set();

    verses.forEach(v => {

      /* --------------------------------------------------------
         1. CHECK SHLOKA (original Sanskrit)
         -------------------------------------------------------- */
      v.shloka.split(/[\s<br>]+/).forEach(token => {
        const cleaned = cleanToken(token);
        if (!cleaned) return;

        const parts = splitToken(cleaned);

        if (isCompound(token)) {
          if (!DICT_SANDHI[cleaned]) {
            missingShlokaSandhi.add(cleaned);
          }
          return;
        }

        parts.forEach(part => {
          if (!DICT[part] && !DICT_SANDHI[part]) {
            missingShlokaSimple.add(part);
          }
        });
      });

      /* --------------------------------------------------------
         2. CHECK SANDHI-VICHED (split Sanskrit)
         -------------------------------------------------------- */
      v.sandhi.split(/[\s<br>]+/).forEach(token => {
        const cleaned = cleanToken(token);
        if (!cleaned) return;

        const parts = splitToken(cleaned);

        parts.forEach(part => {
          if (!DICT[part] && !DICT_SANDHI[part]) {
            missingViched.add(part);
          }
        });
      });

    });

    /* ------------------------------------------------------------
       OUTPUT RESULTS
       ------------------------------------------------------------ */
    console.log("===============================================");
    console.log("🔍 DICTIONARY COVERAGE REPORT");
    console.log("===============================================");

    console.log("📘 Missing SHLOKA simple words (DICT):");
    console.log([...missingShlokaSimple]);

    console.log("📗 Missing VICHED words (DICT):");
    console.log([...missingViched]);

    console.log("📙 Missing SHLOKA sandhi compounds (DICT_SANDHI):");
    console.log([...missingShlokaSandhi]);

    return {
      shlokaSimple: [...missingShlokaSimple],
      viched: [...missingViched],
      shlokaSandhi: [...missingShlokaSandhi]
    };
  }

  /* ------------------------------------------------------------
     Make available globally
     ------------------------------------------------------------ */
  window.checkMissingWords = checkMissingWords;

  /* ------------------------------------------------------------
     Button handler — auto-detect current chapter
     ------------------------------------------------------------
     Your old version hardcoded CH2_51_60.
     This new version:
       ✔ Detects currentChapter from render.js
       ✔ Checks ALL verses in that chapter
     ------------------------------------------------------------ */
  window.runChecker = function () {

    const chapterData = chapters[currentChapter]; // from render.js

    if (!chapterData) {
      alert("No chapter data found.");
      return;
    }

    const result = checkMissingWords(
      chapterData,
      DICT,
      SANDHI
    );

    console.log("🔍 Missing words report:");
    console.log(result);

    alert("Dictionary check complete. See console for details.");
  };

})();
