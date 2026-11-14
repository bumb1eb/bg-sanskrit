/* ============================================================
   hover.js — Meaning Tooltip Engine
   ------------------------------------------------------------
   Responsibilities:
   - Attach hover tooltips to split Sanskrit words
   - Use DICT + dict-sandhi for meanings
   - Prevent tooltip overlap with text
   - Smooth fade-in/out using CSS classes
   - Never show tooltips on shloka or translation
   ============================================================ */


/* ------------------------------------------------------------
   Tooltip element (created once)
   ------------------------------------------------------------ */

let tooltipEl = null;

function ensureTooltipElement() {
  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.className = "tooltip";
    document.body.appendChild(tooltipEl);
  }
}


/* ------------------------------------------------------------
   Normalize word for DICT lookup (remove punctuation, danda, etc.)
   ------------------------------------------------------------ */
function cleanWordForLookup(word) {
  return word
    .trim()
    .replace(/[।॥,:;.!?]/g, "")   // remove punctuation + danda marks
    .replace(/-/g, "")            // remove hyphens
    .replace(/\s+/g, "");         // remove stray spaces
}

/* ------------------------------------------------------------
   Get meaning ONLY from DICT (not dict-sandhi)
   ------------------------------------------------------------ */
function getMeaning(word) {
  const w = cleanWordForLookup(word);

  if (DICT[w]) {
    return DICT[w].meaning || DICT[w].gloss || null;
  }

  return null;
}


/* ------------------------------------------------------------
   Position tooltip so it does NOT overlap text
   ------------------------------------------------------------ */

function positionTooltip(el) {
  const rect = el.getBoundingClientRect();
  const tipRect = tooltipEl.getBoundingClientRect();

  // Default: place tooltip above the word
  let top = rect.top - tipRect.height - 8;
  let left = rect.left + (rect.width / 2) - (tipRect.width / 2);

  // If tooltip goes above viewport → place below
  if (top < 0) {
    top = rect.bottom + 8;
  }

  // Prevent overflow left
  if (left < 0) {
    left = 8;
  }

  // Prevent overflow right
  const maxRight = window.innerWidth - tipRect.width - 8;
  if (left > maxRight) {
    left = maxRight;
  }

  tooltipEl.style.top = `${top}px`;
  tooltipEl.style.left = `${left}px`;
}


/* ------------------------------------------------------------
   Show tooltip
   ------------------------------------------------------------ */

function showTooltip(el, meaning) {
  ensureTooltipElement();

  tooltipEl.textContent = meaning;
  tooltipEl.classList.add("visible");

  positionTooltip(el);
}


/* ------------------------------------------------------------
   Hide tooltip
   ------------------------------------------------------------ */

function hideTooltip() {
  if (tooltipEl) {
    tooltipEl.classList.remove("visible");
  }
}


/* ============================================================
   Link compound words in #shloka with split words across layers
   ============================================================ */

function linkSandhiCompounds() {
  // 1. Clear any previous group tags
  document.querySelectorAll("[data-sandhi-group]").forEach(el => {
    el.removeAttribute("data-sandhi-group");
    el.classList.remove("sandhi-highlight");
  });

  // Only link when "Separate joined words" is active and SANDHI dictionary exists
  const sandhiToggle = document.getElementById("toggle-sandhi");
  if (!sandhiToggle || !sandhiToggle.checked || !window.SANDHI) return;

  const shlokaWords = Array.from(document.querySelectorAll("#shloka .shloka-word"));

  // Build ordered list of Devanagari source words in #sandhi for exact index matching
  const sandhiWordEls = Array.from(document.querySelectorAll("#sandhi .word"));
  const sandhiLineWords = sandhiWordEls.map(el => cleanWordForLookup(el.textContent));
  const translitLineWords = Array.from(document.querySelectorAll("#translit .word"));

  // Pre-query Meaning Order and Phrase Group words once
  const meaningWordEls = Array.from(document.querySelectorAll("#meaning-order .word"));
  const phraseGroupWordEls = Array.from(document.querySelectorAll("#phrase-groups .word"));

  let groupIndex = 0;

  shlokaWords.forEach(shlokaEl => {
    const rawCompound = shlokaEl.textContent.trim();
    const entry = window.SANDHI[rawCompound];

    if (!entry || !entry.isCompound) return;

    // Extract split parts from entry.split array or "word1 + word2 = meaning" string
    let parts = [];
    if (Array.isArray(entry.split)) {
      parts = entry.split.map(w => cleanWordForLookup(w));
    } else if (typeof entry.meaning === "string" && entry.meaning.includes("+")) {
      const leftSide = entry.meaning.split("=")[0];
      parts = leftSide.split("+").map(w => cleanWordForLookup(w)).filter(Boolean);
    }

    if (parts.length === 0) return;

    const groupId = `sg-${groupIndex++}`;
    shlokaEl.setAttribute("data-sandhi-group", groupId);

    // 2. Match each split part in #sandhi (and mirror to #translit by index)
    let searchStart = 0;
    parts.forEach(partWord => {
      const normPart = partWord.replace(/[ःं]/g, "");
      let foundIdx = -1;

      for (let i = searchStart; i < sandhiLineWords.length; i++) {
        const w = sandhiLineWords[i];
        if (w === partWord || w.replace(/[ःं]/g, "") === normPart) {
          foundIdx = i;
          break;
        }
      }

      if (foundIdx !== -1) {
        if (sandhiWordEls[foundIdx]) {
          sandhiWordEls[foundIdx].setAttribute("data-sandhi-group", groupId);
        }
        if (translitLineWords[foundIdx]) {
          translitLineWords[foundIdx].setAttribute("data-sandhi-group", groupId);
        }
        searchStart = foundIdx + 1;
      }
    });

    // 3. Match split parts sequentially in #meaning-order without overwriting earlier groups
    if (meaningWordEls.length > 0) {
      const firstNorm = parts[0].replace(/[ःं]/g, "");
      let startIdx = meaningWordEls.findIndex(el => {
        if (el.hasAttribute("data-sandhi-group")) return false;
        const w = cleanWordForLookup(el.textContent);
        return w === parts[0] || w.replace(/[ःं]/g, "") === firstNorm;
      });

      if (startIdx !== -1) {
        let mCursor = startIdx;
        parts.forEach(partWord => {
          const normPart = partWord.replace(/[ःं]/g, "");
          for (let i = mCursor; i < meaningWordEls.length; i++) {
            const el = meaningWordEls[i];
            if (el.hasAttribute("data-sandhi-group")) continue;
            const w = cleanWordForLookup(el.textContent);
            if (w === partWord || w.replace(/[ःं]/g, "") === normPart) {
              el.setAttribute("data-sandhi-group", groupId);
              mCursor = i + 1;
              break;
            }
          }
        });
      }
    }

    // 4. Match split parts sequentially in #phrase-groups (if active)
    if (phraseGroupWordEls.length > 0) {
      let pCursor = 0;
      parts.forEach(partWord => {
        const normPart = partWord.replace(/[ःं]/g, "");
        for (let i = pCursor; i < phraseGroupWordEls.length; i++) {
          const el = phraseGroupWordEls[i];
          if (el.hasAttribute("data-sandhi-group")) continue;
          const w = cleanWordForLookup(el.textContent);
          if (w === partWord || w.replace(/[ःं]/g, "") === normPart) {
            el.setAttribute("data-sandhi-group", groupId);
            pCursor = i + 1;
            break;
          }
        }
      });
    }
  });

  // 5. Attach bidirectional hover listeners to all tagged elements
  const groupedEls = document.querySelectorAll("[data-sandhi-group]");
  groupedEls.forEach(el => {
    el.addEventListener("mouseenter", () => {
      const id = el.getAttribute("data-sandhi-group");
      document
        .querySelectorAll(`[data-sandhi-group="${id}"]`)
        .forEach(match => match.classList.add("sandhi-highlight"));
    });

    el.addEventListener("mouseleave", () => {
      const id = el.getAttribute("data-sandhi-group");
      document
        .querySelectorAll(`[data-sandhi-group="${id}"]`)
        .forEach(match => match.classList.remove("sandhi-highlight"));
    });
  });
}


/* ============================================================
   Attach hover listeners to split Sanskrit words
   ============================================================ */

function attachHoverMeanings() {
  hideTooltip();

  const targets = document.querySelectorAll(
    "#sandhi .word, " +
    "#translit .word, " +
    "#phrase-groups .word, " +
    "#meaning-order .word, " +
    "#cases-below .word"
  );

  targets.forEach(el => {
    const meaningFromData = el.getAttribute("data-meaning");
    const meaning = meaningFromData || getMeaning(el.textContent.trim());

    if (!meaning) return;

    el.addEventListener("mouseenter", () => showTooltip(el, meaning));
    el.addEventListener("mouseleave", hideTooltip);
  });

  // Link compound words with their split parts
  linkSandhiCompounds();
}
