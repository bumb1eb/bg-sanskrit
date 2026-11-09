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
   Attach hover listeners to split Sanskrit words
   ------------------------------------------------------------
   Affected sections:
     - sandhi
     - translit
     - phrase groups
     - meaning order
     - cases-below
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

    // ⭐ NEW: use data-meaning first (this fixes IAST)
    const meaningFromData = el.getAttribute("data-meaning");

    // ⭐ fallback to old DICT lookup
    const meaning = meaningFromData || getMeaning(el.textContent.trim());

    if (!meaning) return;

    el.addEventListener("mouseenter", () => showTooltip(el, meaning));
    el.addEventListener("mouseleave", hideTooltip);
  });
}






/* ============================================================
   Cleanup on scroll (hide tooltip)
   ============================================================ */

window.addEventListener("scroll", hideTooltip);
window.addEventListener("resize", hideTooltip);
