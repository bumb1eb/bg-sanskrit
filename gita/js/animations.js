/* ============================================================
   animations.js — Animation Layer for Sanskrit Explorer
   ------------------------------------------------------------
   Responsibilities:
   - Provide optional animations for:
       • Sandhi (compound underline)
       • Transliteration (typing effect)
       • Phrase groups (fade-in)
   - Called automatically by render.js → runAnimations()
   - Must NOT modify text content or grammar coloring
   - Must NOT interfere with hover tooltips
   ============================================================ */


/* ------------------------------------------------------------
   CONFIG — enable/disable animation types
   ------------------------------------------------------------ */

const ANIM_CONFIG = {
  underlineCompounds: true,     // underline animation for sandhi
  typingTranslit: false,        // typing animation for transliteration
  fadePhraseGroups: false        // fade-in animation for phrase groups
};


/* ============================================================
   MAIN ENTRY POINT — called by render.js & viewModes.js
   ============================================================ */

function runAnimations() {
  const sandhiToggle = document.getElementById("toggle-sandhi");
  const isSandhiActive = sandhiToggle ? sandhiToggle.checked : false;

  if (ANIM_CONFIG.underlineCompounds && isSandhiActive) {
    animateCompounds();
  } else {
    clearAnimations();
  }

  if (ANIM_CONFIG.typingTranslit) animateTranslitTyping();
  if (ANIM_CONFIG.fadePhraseGroups) animatePhraseGroupsFade();
}



/* ============================================================
   1. UNDERLINE ANIMATION FOR COMPOUNDS
   ------------------------------------------------------------
   Uses CSS class: .compound-underline
   Applies to sandhi words that appear in dict-sandhi
   ============================================================ */

function animateCompounds() {
  const shlokaEl = document.getElementById("shloka");
  if (!shlokaEl) return;

  // 1. Only wrap words in spans if they haven't been wrapped yet for this verse
  if (!shlokaEl.querySelector(".shloka-word")) {
    let rawHTML = shlokaEl.innerHTML
      .replace(/^\s+|\s+$/g, "")
      .replace(/\s*\n\s*/g, "<br>")
      .replace(/\s*\r\s*/g, "<br>")
      .replace(/<br>\s*<br>/g, "<br>");

    const lines = rawHTML.split("<br>").map(line => line.trim());

    const wrappedLines = lines.map(line => {
      const words = line.split(/\s+/).filter(Boolean);
      return words
        .map(w => `<span class="shloka-word">${w}</span>`)
        .join(" ");
    });

    shlokaEl.innerHTML = wrappedLines.join("<br>");
  }

  // 2. Underline compounds cleanly
  const spans = shlokaEl.querySelectorAll(".shloka-word");

  spans.forEach(el => {
    const w = el.textContent.trim();

    if (window.SANDHI && window.SANDHI[w]?.isCompound) {
      el.classList.add("compound-underline");

      el.style.transition = "text-decoration-thickness 0.6s ease";
      el.style.textDecorationThickness = "2px";

      setTimeout(() => {
        el.style.textDecorationThickness = "3px";
      }, 150);
    }
  });
}








/* ============================================================
   2. TYPING ANIMATION FOR TRANSLITERATION
   ------------------------------------------------------------
   Disabled by default (ANIM_CONFIG.typingTranslit = false)
   ============================================================ */

function animateTranslitTyping() {
  const el = document.getElementById("translit");
  if (!el) return;

  const text = el.textContent.trim();
  el.textContent = ""; // clear text for typing effect

  let i = 0;

  function typeNext() {
    if (i < text.length) {
      el.textContent += text[i];
      i++;
      requestAnimationFrame(typeNext);
    }
  }

  requestAnimationFrame(typeNext);
}


/* ============================================================
   3. FADE-IN ANIMATION FOR PHRASE GROUPS
   ------------------------------------------------------------
   Applies to #phrase-groups-wrapper
   ============================================================ */

function animatePhraseGroupsFade() {
  const wrapper = document.getElementById("phrase-groups");
  if (!wrapper || wrapper.style.display === "none") return;

  const items = wrapper.querySelectorAll("span, div");

  items.forEach((el, idx) => {
    el.style.opacity = 0;
    el.style.transition = "opacity 0.4s ease";

    setTimeout(() => {
      el.style.opacity = 1;
    }, idx * 80); // staggered fade-in
  });
}


/* ============================================================
   OPTIONAL: CLEAR ANIMATIONS (if needed)
   ------------------------------------------------------------
   Useful if you want to reset animations before re-rendering.
   Not currently used, but included for future expansion.
   ============================================================ */

function clearAnimations() {
  const all = document.querySelectorAll(".compound-underline");
  all.forEach(el => {
    el.classList.remove("compound-underline");
    el.style.textDecorationThickness = "";
  });
}
