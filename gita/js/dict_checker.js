/* ============================================================
   dict_checker.js — Verse & Chapter Diagnostic Auditor
   ------------------------------------------------------------
   Console Commands:
   - auditCurrentVerse()  → Audits the currently open verse
   - auditChapter()       → Audits all verses in currentChapter
   - runChecker()         → Alias for auditChapter()
   ============================================================ */

(function () {

  /* ------------------------------------------------------------
     Utility: normalize a Sanskrit or IAST token for comparison
     ------------------------------------------------------------ */
  function cleanToken(w) {
    return w
      .replace(/[.,;:!?()"'”“’॥।|]/g, "")
      .replace(/[\u200B-\u200D\uFEFF]/g, "")
      .replace(/-/g, "")
      .trim();
  }

  /* ------------------------------------------------------------
     Utility: split a phrase into individual tokens
     ------------------------------------------------------------ */
  function splitWords(str) {
    return str
      .replace(/<br\s*\/?>/gi, " ")
      .split(/[-–—]|·|\s+/)
      .map(t => cleanToken(t))
      .filter(Boolean);
  }

  /* ------------------------------------------------------------
     Utility: heuristic to flag unindexed long compounds in shloka
     ------------------------------------------------------------ */
  function looksLikeCompound(rawToken) {
    const token = cleanToken(rawToken);
    if (token.includes("·") || token.includes("-") || token.includes("–") || token.includes("—")) {
      return true;
    }
    return /[\u0900-\u097F]{7,}/.test(token);
  }

  /* ------------------------------------------------------------
     CORE AUDITOR: Audits a single verse object
     ------------------------------------------------------------ */
  function auditVerse(chNum, verseObj) {
    const issues = [];
    const missingDictTemplates = {};

    if (!verseObj) {
      console.warn("No verse object found.");
      return { issues: ["No verse object"], missingDictTemplates };
    }

    const label = `Chapter ${chNum}, Verse ${verseObj.id}`;

    // 1. Validate parts & meaningOrder structure
    if (!Array.isArray(verseObj.parts) || verseObj.parts.length === 0) {
      issues.push("Missing 'parts' array (verse will fall back to flat text without pills/meaning order).");
    } else {
      const partCount = verseObj.parts.length;
      if (!Array.isArray(verseObj.meaningOrder) || verseObj.meaningOrder.length !== partCount) {
        issues.push(
          `meaningOrder length (${verseObj.meaningOrder?.length || 0}) does not match parts length (${partCount}).`
        );
      }

      // 2. Check Devanagari vs. IAST word count alignment & DICT coverage per phrase
      verseObj.parts.forEach((p, idx) => {
        const devWords = splitWords(p.sandhi || "");
        const iastWords = splitWords(p.translit || "");

        if (devWords.length !== iastWords.length) {
          issues.push(
            `Part ${idx + 1} word-count mismatch (causes IAST color/hover shift): Devanāgarī has ${devWords.length} words [${devWords.join(", ")}] vs. IAST has ${iastWords.length} words [${iastWords.join(", ")}].`
          );
        }

        devWords.forEach(w => {
          const altVisarga = w.endsWith("ः") ? w.slice(0, -1) : w + "ः";
          const foundInDict =
            (window.DICT && (window.DICT[w] || window.DICT[altVisarga])) ||
            (window.SANDHI && (window.SANDHI[w] || window.SANDHI[altVisarga]));

          if (!foundInDict) {
            issues.push(`Missing in DICT (no color/meaning): "${w}"`);
            missingDictTemplates[w] = { pos: "noun", meaning: "" };
          }
        });
      });
    }

    // 3. Validate compound links between #shloka, SANDHI, and parts.sandhi
    const allSplitWords = (verseObj.parts || []).flatMap(p => splitWords(p.sandhi || ""));
    const shlokaTokens = (verseObj.shloka || "")
      .replace(/<br\s*\/?>/gi, " ")
      .split(/\s+/)
      .map(cleanToken)
      .filter(Boolean);

    shlokaTokens.forEach(token => {
      const entry = window.SANDHI && window.SANDHI[token];

      if (entry && entry.isCompound) {
        let expectedParts = [];
        if (Array.isArray(entry.split)) {
          expectedParts = entry.split.map(cleanToken);
        } else if (typeof entry.meaning === "string" && entry.meaning.includes("+")) {
          expectedParts = entry.meaning
            .split("=")[0]
            .split("+")
            .map(cleanToken)
            .filter(Boolean);
        }

        expectedParts.forEach(sp => {
          const normSp = sp.replace(/[ःं]/g, "");
          const existsInVerse = allSplitWords.some(
            vw => vw === sp || vw.replace(/[ःं]/g, "") === normSp
          );
          if (!existsInVerse) {
            issues.push(
              `Compound "${token}" expects split part "${sp}" from SANDHI, which was not found in parts.sandhi.`
            );
          }
        });
      } else if (!entry && looksLikeCompound(token)) {
        issues.push(`Possible unindexed compound in shloka (not in SANDHI): "${token}"`);
      }
    });

    // 4. Print clean report to Console
    console.group(`🔍 Diagnostic Audit: ${label}`);
    if (issues.length === 0) {
      console.log("✅ All checks passed! DICT, IAST alignment, and SANDHI links look clean.");
    } else {
      console.warn(`Found ${issues.length} issue(s):`);
      issues.forEach((msg, i) => console.log(`${i + 1}. ${msg}`));

      if (Object.keys(missingDictTemplates).length > 0) {
        console.log("📋 Copy-paste template for dict.js:");
        console.log(JSON.stringify(missingDictTemplates, null, 2));
      }
    }
    console.groupEnd();

    return { issues, missingDictTemplates };
  }

  /* ------------------------------------------------------------
     GLOBAL HELPERS (Callable from Console or Button)
     ------------------------------------------------------------ */
  window.auditVerse = auditVerse;

  window.auditCurrentVerse = function () {
    if (typeof chapters === "undefined" || !chapters[currentChapter]) {
      console.error("Chapters data not loaded.");
      return;
    }
    const verseObj = chapters[currentChapter][currentVerseIndex];
    return auditVerse(currentChapter, verseObj);
  };

  window.auditChapter = function (chNum = currentChapter) {
    const chapterData = chapters[chNum];
    if (!chapterData) {
      console.error(`No data found for Chapter ${chNum}.`);
      return;
    }

    console.log(`===============================================`);
    console.log(`📚 FULL CHAPTER ${chNum} DIAGNOSTIC AUDIT (${chapterData.length} verses)`);
    console.log(`===============================================`);

    let totalIssues = 0;
    const allMissingDict = {};

    chapterData.forEach(v => {
      const res = auditVerse(chNum, v);
      totalIssues += res.issues.length;
      Object.assign(allMissingDict, res.missingDictTemplates);
    });

    console.log(`🏁 Chapter ${chNum} audit complete — ${totalIssues} total issue(s) found.`);
    if (Object.keys(allMissingDict).length > 0) {
      console.log("📋 Combined missing DICT entries for dict.js:");
      console.log(JSON.stringify(allMissingDict, null, 2));
    }
  };

  window.runChecker = function () {
    window.auditChapter(currentChapter);
  };

})();
