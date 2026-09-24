/* -----------------------------------------------------------
   ADVANCED DICTIONARY CHECKER (NON‑MODULE VERSION)
----------------------------------------------------------- */

(function () {

  function checkMissingWords(verses, DICT, DICT_SANDHI) {

    const missingShlokaSimple = new Set();
    const missingViched = new Set();
    const missingShlokaSandhi = new Set();

    const clean = w =>
      w.replace(/[.,;:!?()"'”“’॥।]/g, "")
       .replace(/[\u200B-\u200D\uFEFF]/g, "")
       .trim();

    const splitToken = token =>
      token.split(/[-–—]|·|\s+/)
           .map(t => clean(t))
           .filter(t => t.length > 0);

    const isCompound = rawToken => {
	  const token = clean(rawToken);

	  // If token contains explicit separators → compound
	  if (token.includes("·") || token.includes("-") || token.includes("–") || token.includes("—")) {
		return true;
	  }

	  // If token is long and contains multiple Devanagari consonant clusters → likely compound
	  // e.g. व्यवसायात्मिका, बुद्धिरेकेह, ह्यनन्ताश्च
	  if (/[\u0900-\u097F]{6,}/.test(token)) {
		return true;
	  }

	return false;
	};


    verses.forEach(v => {

      // 1. SHLOKA
      v.shloka.split(/[\s<br>]+/).forEach(token => {
        const cleaned = clean(token);
        if (!cleaned) return;

        const parts = splitToken(cleaned);

        if (isCompound(token)) {
          if (!DICT_SANDHI[cleaned]) missingShlokaSandhi.add(cleaned);
          return;
        }

        parts.forEach(part => {
          if (!DICT[part] && !DICT_SANDHI[part]) {
            missingShlokaSimple.add(part);
          }
        });
      });

      // 2. SANDHI-VICHED
      v.sandhi.split(/[\s<br>]+/).forEach(token => {
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

	  // ⭐ Button handler
	window.runChecker = function () {

	  // ⭐ CHECK VERSES 51–70
	  const chapterData = [
		...CH2_51_60
		
	  ];

	  const result = checkMissingWords(
		chapterData,
		DICT,
		CURRENT_CHAPTER.sandhi || {}
	  );

	  console.log("🔍 Missing words report:");
	  console.log(result);

	  alert("Check console for missing words.");
	};


})();
