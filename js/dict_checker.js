/* -----------------------------------------------------------
   ADVANCED DICTIONARY CHECKER (NON‑MODULE VERSION)
   Produces 3 separate lists:
   1. Shloka NON‑sandhi words missing in DICT
   2. Viched words missing in DICT
   3. Shloka SANDHI‑compound words missing in DICT_SANDHI
----------------------------------------------------------- */

(function () {

  function checkMissingWords(verses, DICT, DICT_SANDHI) {

    const missingShlokaSimple = new Set();
    const missingViched = new Set();
    const missingShlokaSandhi = new Set();

    // Remove punctuation and invisible characters
    const clean = w =>
      w
        .replace(/[.,;:!?()"'”“’॥।]/g, "")
        .replace(/[\u200B-\u200D\uFEFF]/g, "")
        .trim();

    // Split token into parts (hyphen, middle dot, whitespace)
    const splitToken = token =>
      token
        .split(/[-–—]|·|\s+/)
        .map(t => clean(t))
        .filter(t => t.length > 0);

    // Detect compound words (sandhi)
    const isCompound = rawToken => {
      const token = clean(rawToken);
      return (
        token.includes("·") ||
        token.includes("-") ||
        token.includes("–") ||
        token.includes("—") ||
        splitToken(token).length > 1
      );
    };

    verses.forEach(v => {

      /* -------------------------------
         1. SCAN SHLOKA
         ------------------------------- */
      v.shloka
        .split(/[\s<br>]+/)
        .forEach(token => {
          const cleaned = clean(token);
          if (!cleaned) return;

          const parts = splitToken(cleaned);

          // CASE A: SANDHI COMPOUND → must exist in DICT_SANDHI
          if (isCompound(token)) {
            if (!DICT_SANDHI[cleaned]) {
              missingShlokaSandhi.add(cleaned);
            }
            return;
          }

          // CASE B: SIMPLE WORD → must exist in DICT
          parts.forEach(part => {
            if (!DICT[part] && !DICT_SANDHI[part]) {
              missingShlokaSimple.add(part);
            }
          });
        });

      /* -------------------------------
         2. SCAN SANDHI‑VICHED
         ------------------------------- */
      v.sandhi
        .split(/[\s<br>]+/)
        .forEach(token => {
          const cleaned = clean(token);
          if (!cleaned) return;

          const parts = splitToken(cleaned);

          parts.forEach(part => {
            if (!DICT[part] && !DICT_SANDHI[part]) {
              missingViched.add(part);
            }
          });
        });

    });

    /* -------------------------------
       PRINT RESULTS
       ------------------------------- */
    console.log("=== Missing SHLOKA simple words (DICT) ===");
    console.log([...missingShlokaSimple]);

    console.log("=== Missing VICHED words (DICT) ===");
    console.log([...missingViched]);

    console.log("=== Missing SHLOKA sandhi compounds (DICT_SANDHI) ===");
    console.log([...missingShlokaSandhi]);

    return {
      shlokaSimple: [...missingShlokaSimple],
      viched: [...missingViched],
      shlokaSandhi: [...missingShlokaSandhi]
    };
  }

  // ⭐ Make available globally
  window.checkMissingWords = checkMissingWords;


function runChecker() {
  const chapterData = getChapterData(CURRENT_CHAPTER);

  const result = checkMissingWords(chapterData, DICT, SANDHI);

  console.log("🔍 Missing words report:");
  console.log(result);

  alert("Check console for missing words.");
}


})();
