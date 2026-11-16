/* ============================================================
   dict_checker.js — Verse & Chapter Diagnostic Auditor (Part 1/2)
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
     Helper: determine which verse data file holds this verse
     ------------------------------------------------------------ */
  function guessVerseFile(chNum, verseId) {
    const start = Math.floor((verseId - 1) / 10) * 10 + 1;
    const end = chNum === 1 && start === 41 ? 47 : chNum === 2 && start === 71 ? 72 : start + 9;
    const pad = n => String(n).padStart(2, "0");
    return `ch${chNum}_${pad(start)}_${pad(end)}.js`;
  }

  /* ------------------------------------------------------------
     CORE AUDITOR: Audits a single verse object with plain-English
     explanations and actionable fix recommendations
     ------------------------------------------------------------ */
  function auditVerse(chNum, verseObj) {
    const findings = [];
    const missingDictTemplates = {};
    const missingSandhiTemplates = {};

    if (!verseObj) {
      console.warn("No verse object found.");
      return { findings: [], missingDictTemplates };
    }

    const label = `Chapter ${chNum}, Verse ${verseObj.id}`;
    const verseFile = guessVerseFile(chNum, verseObj.id);
    const sandhiFile = `dict-sandhi_ch${chNum}.js`;

    // 1. Validate parts & meaningOrder structure
    if (!Array.isArray(verseObj.parts) || verseObj.parts.length === 0) {
      findings.push({
        type: "Missing Phrase Breakdown",
        why: "This verse does not have a 'parts' array yet, so Phrase Groups, Numbered Pills, and Meaning Order cannot render.",
        fix: `Open ${verseFile} (Verse ${verseObj.id}) and add a 'parts' array and 'meaningOrder' array.`
      });
    } else {
      const partCount = verseObj.parts.length;
      if (!Array.isArray(verseObj.meaningOrder) || verseObj.meaningOrder.length !== partCount) {
        const defaultOrder = JSON.stringify(verseObj.parts.map((_, i) => i + 1));
        findings.push({
          type: "Meaning Order Mismatch",
          why: `'meaningOrder' has ${verseObj.meaningOrder?.length || 0} items, while 'parts' has ${partCount} phrases. Every phrase must be listed once so Meaning Order displays the full verse.`,
          fix: `In ${verseFile} (Verse ${verseObj.id}), set meaningOrder to an array of ${partCount} numbers (for example: meaningOrder: ${defaultOrder}).`
        });
      }

      // 2. Check Devanagari vs. IAST word count alignment & DICT coverage per phrase
      verseObj.parts.forEach((p, idx) => {
        const devWords = splitWords(p.sandhi || "");
        const iastWords = splitWords(p.translit || "");

        if (devWords.length !== iastWords.length) {
          findings.push({
            type: `IAST Alignment Shift (Phrase ${idx + 1})`,
            why: `Devanāgarī has ${devWords.length} split words [${devWords.join(" | ")}], while IAST has ${iastWords.length} split words [${iastWords.join(" | ")}]. Because grammar colors and hover links match words by position, this causes IAST words to get the wrong colors or fail to highlight.`,
            fix: `In ${verseFile} (Verse ${verseObj.id}, part id ${p.id}), add or remove '·' separators in 'translit' so it has the exact same ${devWords.length} words as 'sandhi'.`
          });
        }

        devWords.forEach(w => {
          const altVisarga = w.endsWith("ः") ? w.slice(0, -1) : w + "ः";
          const foundInDict =
            (window.DICT && (window.DICT[w] || window.DICT[altVisarga])) ||
            (window.SANDHI && (window.SANDHI[w] || window.SANDHI[altVisarga]));

          if (!foundInDict) {
            findings.push({
              type: `Missing Dictionary Word: "${w}"`,
              why: `The word "${w}" (in Phrase ${idx + 1}) is not in dict.js, so it will appear uncolored and show no English meaning when hovered.`,
              fix: `Add "${w}" to dict.js (a copy-paste template is printed at the bottom of this report).`
            });
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
          const leftSide = entry.meaning.split("=")[0];
          expectedParts = leftSide
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
            findings.push({
              type: `Broken Compound Link: "${token}" → "${sp}"`,
              why: `The compound "${token}" is underlined in the shloka and expects "${sp}" in the breakdown, but "${sp}" was not found in 'parts.sandhi'. Hovering over "${token}" will fail to highlight that part.`,
              fix: `Either update "${token}" in ${sandhiFile} so its split parts match the exact spelling in 'parts.sandhi', or adjust the spelling in ${verseFile} (Verse ${verseObj.id}).`
            });
          }
        });
      } else if (!entry && looksLikeCompound(token)) {
        findings.push({
          type: `Possible Unlinked Compound: "${token}"`,
          why: `"${token}" looks like a joined compound word in the shloka, but it has no entry in ${sandhiFile}. As a result, it will not be underlined in the parchment or get dotted '+' joiners in Split Words.`,
          fix: `If "${token}" is a sandhi compound, add it to ${sandhiFile} (template provided below). If it is a single unjoined word, you can safely ignore this notice.`
        });
        missingSandhiTemplates[token] = {
          isCompound: true,
          meaning: "part1 + part2 = combined meaning"
        };
      }
    });

    // 4. Print friendly, structured report to Console
    console.group(`🔍 Diagnostic Audit: ${label}`);
    if (findings.length === 0) {
      console.log("✅ All checks passed! Dictionary colors, IAST alignment, and compound hover links are healthy.");
    } else {
      console.warn(`Found ${findings.length} item(s) to review:\n`);
      findings.forEach((item, i) => {
        console.log(
          `%c${i + 1}. ${item.type}\n` +
          `%c   • Why it matters: ${item.why}\n` +
          `   • Recommended fix: ${item.fix}`,
          "font-weight: bold; color: #8a6400;",
          "font-weight: normal; color: inherit;"
        );
      });

      if (Object.keys(missingDictTemplates).length > 0) {
        console.log("%c📋 Copy-paste template for dict.js:", "font-weight: bold; color: #2f6fb1;");
        console.log(JSON.stringify(missingDictTemplates, null, 2));
      }

      if (Object.keys(missingSandhiTemplates).length > 0) {
        console.log(`%c📋 Optional template for ${sandhiFile}:`, "font-weight: bold; color: #0b7d3b;");
        console.log(JSON.stringify(missingSandhiTemplates, null, 2));
      }
    }
    console.groupEnd();

    return { findings, missingDictTemplates, missingSandhiTemplates };
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
      totalIssues += res.findings.length;
      Object.assign(allMissingDict, res.missingDictTemplates);
    });

    console.log(`🏁 Chapter ${chNum} audit complete — ${totalIssues} total item(s) flagged.`);
    if (Object.keys(allMissingDict).length > 0) {
      console.log("%c📋 Combined missing DICT entries for dict.js:", "font-weight: bold; color: #2f6fb1;");
      console.log(JSON.stringify(allMissingDict, null, 2));
    }
  };

  window.runChecker = function () {
    window.auditChapter(currentChapter);
  };

})();
