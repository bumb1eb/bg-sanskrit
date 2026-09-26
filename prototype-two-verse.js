const verses = [
  {
    id: "1.1",
    title: "Verse 1.1",
    words: {
      w1: { text: "धृतराष्ट्र", type: "noun", meaning: "Dhritarashtra", case: "Nominative" },
      w2: { text: "उवाच", type: "verb", meaning: "said" },
      w3: { text: "धर्मक्षेत्रे", type: "noun", meaning: "in the field of dharma", case: "Locative" },
      w4: { text: "कुरुक्षेत्रे", type: "noun", meaning: "in Kurukshetra", case: "Locative" },
      w5: { text: "समवेता", type: "adjective", meaning: "assembled / gathered" },
      w6: { text: "युयुत्सवः", type: "noun", meaning: "desiring to fight" },
      w7: { text: "मामकाः", type: "noun", meaning: "my sons / my people" },
      w8: { text: "पाण्डवाश्चैव", type: "noun", meaning: "the sons of Pandu and also" },
      w9: { text: "किम्", type: "pronoun", meaning: "what" },
      w10: { text: "अकुर्वत", type: "verb", meaning: "did they do" },
      w11: { text: "सञ्जय", type: "noun", meaning: "Sanjaya", case: "Vocative" }
    },
    blocks: {
      original: [
        { id: "w1", text: "धृतराष्ट्र" },
        { id: "w2", text: "उवाच" },
        { id: "w3", text: "धर्मक्षेत्रे" },
        { id: "w4", text: "कुरुक्षेत्रे" },
        { id: "w5", text: "समवेता" },
        { id: "w6", text: "युयुत्सवः" },
        { id: "w7", text: "मामकाः" },
        { id: "w8", text: "पाण्डवाश्चैव" },
        { id: "w9", text: "किम्" },
        { id: "w10", text: "अकुर्वत" },
        { id: "w11", text: "सञ्जय" }
      ],
      sandhi: [
        { id: "w1", text: "धृतराष्ट्र" },
        { id: "w2", text: "उवाच" },
        { id: "w3", text: "धर्मक्षेत्रे" },
        { id: "w4", text: "कुरुक्षेत्रे" },
        { id: "w5", text: "समवेताः" },
        { id: "w6", text: "युयुत्सवः" },
        { id: "w7", text: "मामकाः" },
        { id: "w8", text: "पाण्डवाः" },
        { id: "w9", text: "च" },
        { id: "w10", text: "एव" },
        { id: "w11", text: "किम्" },
        { id: "w12", text: "अकुर्वत" },
        { id: "w13", text: "सञ्जय" }
      ],
      iast: [
        { id: "w1", text: "dhṛtarāṣṭra" },
        { id: "w2", text: "uvāca" },
        { id: "w3", text: "dharma-kṣetre" },
        { id: "w4", text: "kuru-kṣetre" },
        { id: "w5", text: "samavetāḥ" },
        { id: "w6", text: "yuyutsavaḥ" },
        { id: "w7", text: "māmakāḥ" },
        { id: "w8", text: "pāṇḍavāś ca eva" },
        { id: "w9", text: "kim" },
        { id: "w10", text: "akurvata" },
        { id: "w11", text: "sañjaya" }
      ],
      translation: [
        { ids: ["w1", "w2"], text: "Dhritarashtra said." },
        { ids: ["w3", "w4", "w5", "w6"], text: "On the field of dharma, in Kurukshetra, gathered and eager for battle," },
        { ids: ["w7", "w8", "w9", "w10", "w11"], text: "my sons and the sons of Pandu—what did they do, Sanjaya?" }
      ]
    }
  },
  {
    id: "1.2",
    title: "Verse 1.2",
    words: {
      w1: { text: "सञ्जय", type: "noun", meaning: "Sanjaya", case: "Nominative" },
      w2: { text: "उवाच", type: "verb", meaning: "said" },
      w3: { text: "दृष्ट्वा", type: "verb", meaning: "having seen" },
      w4: { text: "तु", type: "indeclinable", meaning: "then / but" },
      w5: { text: "पाण्डवानीकं", type: "noun", meaning: "the Pandava army", case: "Accusative" },
      w6: { text: "व्यूढं", type: "adjective", meaning: "arrayed / formed" },
      w7: { text: "दुर्योधनस्तदा", type: "noun", meaning: "Duryodhana then" },
      w8: { text: "आचार्यमुपसङ्गम्य", type: "verb", meaning: "approaching the teacher" },
      w9: { text: "राजा", type: "noun", meaning: "king", case: "Nominative" },
      w10: { text: "वचनमब्रवीत्", type: "verb", meaning: "spoke these words" }
    },
    blocks: {
      original: [
        { id: "w1", text: "सञ्जय" },
        { id: "w2", text: "उवाच" },
        { id: "w3", text: "दृष्ट्वा" },
        { id: "w4", text: "तु" },
        { id: "w5", text: "पाण्डवानीकं" },
        { id: "w6", text: "व्यूढं" },
        { id: "w7", text: "दुर्योधनस्तदा" },
        { id: "w8", text: "आचार्यमुपसङ्गम्य" },
        { id: "w9", text: "राजा" },
        { id: "w10", text: "वचनमब्रवीत्" }
      ],
      sandhi: [
        { id: "w1", text: "सञ्जय" },
        { id: "w2", text: "उवाच" },
        { id: "w3", text: "दृष्ट्वा" },
        { id: "w4", text: "तु" },
        { id: "w5", text: "पाण्डवः अनीकम्" },
        { id: "w6", text: "व्यूढं" },
        { id: "w7", text: "दुर्योधनः तदा" },
        { id: "w8", text: "आचार्यम् उपसङ्गम्य" },
        { id: "w9", text: "राजा" },
        { id: "w10", text: "वचनम् अब्रवीत्" }
      ],
      iast: [
        { id: "w1", text: "sañjaya" },
        { id: "w2", text: "uvāca" },
        { id: "w3", text: "dṛṣṭvā" },
        { id: "w4", text: "tu" },
        { id: "w5", text: "pāṇḍavānīkam" },
        { id: "w6", text: "vyūḍham" },
        { id: "w7", text: "duryodhanaḥ tadā" },
        { id: "w8", text: "ācāryam upasaṅgamya" },
        { id: "w9", text: "rājā" },
        { id: "w10", text: "vacanam abravīt" }
      ],
      translation: [
        { ids: ["w1", "w2"], text: "Sanjaya said." },
        { ids: ["w3", "w4", "w5", "w6", "w7"], text: "Having seen the Pandava army arrayed, Duryodhana then" },
        { ids: ["w8", "w9", "w10"], text: "approached the teacher and spoke these words." }
      ]
    }
  }
];

const wordInfo = {};
for (const verse of verses) {
  Object.assign(wordInfo, verse.words);
}

let selectedWord = null;
let currentIndex = 0;

const originalBlock = document.getElementById("originalBlock");
const sandhiBlock = document.getElementById("sandhiBlock");
const iastBlock = document.getElementById("iastBlock");
const translationBlock = document.getElementById("translationBlock");
const verseLabel = document.getElementById("verseLabel");
const detailPanel = document.getElementById("detailPanel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function renderWordList(target, tokens) {
  target.innerHTML = "";
  tokens.forEach((token) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "word";
    btn.textContent = token.text;
    btn.setAttribute("data-word-id", token.id);
    btn.setAttribute("data-type", wordInfo[token.id]?.type || "noun");
    if (selectedWord && token.id === selectedWord) {
      btn.classList.add("is-selected");
    }
    btn.addEventListener("click", () => {
      selectedWord = token.id;
      render();
    });
    target.appendChild(btn);
    target.appendChild(document.createTextNode(" "));
  });
}

function renderTranslation(translationItems) {
  translationBlock.innerHTML = "";
  translationItems.forEach((item) => {
    const line = document.createElement("div");
    line.className = "translation-line";
    line.textContent = item.text;

    const ids = item.ids || [];
    if (ids.length > 0 && selectedWord && ids.includes(selectedWord)) {
      line.classList.add("is-selected");
    }

    line.addEventListener("click", () => {
      if (ids.length > 0) {
        selectedWord = ids[0];
        render();
      }
    });
    translationBlock.appendChild(line);
  });
}

function renderDetailPanel() {
  if (!selectedWord) {
    detailPanel.innerHTML = "<h3>Word details</h3><p>Click a word to inspect it.</p>";
    return;
  }

  const info = wordInfo[selectedWord];
  if (!info) {
    detailPanel.innerHTML = "<h3>Word details</h3><p>No metadata found for this word.</p>";
    return;
  }

  detailPanel.innerHTML = `
    <h3>Word details</h3>
    <p><span class="label">Word:</span> ${info.text}</p>
    <p><span class="label">Type:</span> ${info.type}</p>
    <p><span class="label">Meaning:</span> ${info.meaning}</p>
    <p><span class="label">Case:</span> ${info.case || "—"}</p>
  `;
}

function render() {
  const verse = verses[currentIndex];
  verseLabel.textContent = verse.title;

  renderWordList(originalBlock, verse.blocks.original);
  renderWordList(sandhiBlock, verse.blocks.sandhi);
  renderWordList(iastBlock, verse.blocks.iast);
  renderTranslation(verse.blocks.translation);
  renderDetailPanel();

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === verses.length - 1;
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    selectedWord = null;
    render();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < verses.length - 1) {
    currentIndex += 1;
    selectedWord = null;
    render();
  }
});

render();
