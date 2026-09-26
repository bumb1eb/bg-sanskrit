const verses = [
  {
    id: "1.1",
    title: "Verse 1.1",
    words: {
      w1_1: { text: "धृतराष्ट्र", type: "noun", meaning: "Dhritarashtra", case: "Nominative" },
      w1_2: { text: "उवाच", type: "verb", meaning: "said" },
      w1_3: { text: "धर्मक्षेत्रे", type: "noun", meaning: "in the field of dharma", case: "Locative" },
      w1_4: { text: "कुरुक्षेत्रे", type: "noun", meaning: "in Kurukshetra", case: "Locative" },
      w1_5: { text: "समवेता", type: "adjective", meaning: "assembled / gathered" },
      w1_6: { text: "युयुत्सवः", type: "noun", meaning: "desiring to fight" },
      w1_7: { text: "मामकाः", type: "noun", meaning: "my sons / my people" },
      w1_8: { text: "पाण्डवाश्चैव", type: "noun", meaning: "the sons of Pandu and also" },
      w1_9: { text: "किम��ुर्वत", type: "verb", meaning: "what did they do" },
      w1_10: { text: "सञ्जय", type: "noun", meaning: "Sanjaya", case: "Vocative" }
    },
    blocks: {
      sanskrit: {
        original: [
          { line: 1, tokens: [
            { id: "w1_1", text: "धृतराष्ट्र" },
            { id: "w1_2", text: "उवाच" },
            { id: null, text: "।" }
          ]},
          { line: 2, tokens: [
            { id: "w1_3", text: "धर्मक्षेत्रे" },
            { id: "w1_4", text: "कुरुक्षेत्रे" },
            { id: "w1_5", text: "समवेता" },
            { id: "w1_6", text: "युयुत्सवः" },
            { id: null, text: "।" }
          ]},
          { line: 3, tokens: [
            { id: "w1_7", text: "मामकाः" },
            { id: "w1_8", text: "पाण्डवाश्चैव" },
            { id: "w1_9", text: "किमकुर्वत" },
            { id: "w1_10", text: "सञ्जय" },
            { id: null, text: "॥" }
          ]}
        ],
        sandhi: [
          { line: 1, tokens: [
            { id: "w1_1", text: "धृतराष्ट्र" },
            { id: "w1_2", text: "उवाच" },
            { id: null, text: "।" }
          ]},
          { line: 2, tokens: [
            { id: "w1_3", text: "धर्मक्षेत्रे" },
            { id: "w1_4", text: "कुरुक्षेत्रे" },
            { id: "w1_5", text: "समवेताः" },
            { id: "w1_6", text: "युयुत्सवः" },
            { id: null, text: "|" }
          ]},
          { line: 3, tokens: [
            { id: "w1_7", text: "मामकाः" },
            { id: "w1_8", text: "पाण्डवाः" },
            { id: "w1_8b", text: "च" },
            { id: "w1_8c", text: "एव" },
            { id: "w1_9", text: "किम्" },
            { id: "w1_9b", text: "अकुर्वत" },
            { id: "w1_10", text: "सञ्जय" },
            { id: null, text: "||" }
          ]}
        ]
      },
      iast: [
        "dhṛtarāṣṭra uvāca |",
        "dharma-kṣetre kuru-kṣetre samavetāḥ yuyutsavaḥ |",
        "māmakāḥ pāṇḍavāś ca eva kim akurvata sañjaya ||"
      ],
      translation: [
        { ids: ["w1_1", "w1_2"], text: "Dhritarashtra said." },
        { ids: ["w1_3", "w1_4", "w1_5", "w1_6"], text: "On the field of dharma, in Kurukshetra, gathered and eager for battle," },
        { ids: ["w1_7", "w1_8", "w1_9", "w1_10"], text: "my sons and the sons of Pandu—what did they do, Sanjaya?" }
      ]
    }
  },
  {
    id: "1.2",
    title: "Verse 1.2",
    words: {
      w2_1: { text: "सञ्जय", type: "noun", meaning: "Sanjaya", case: "Nominative" },
      w2_2: { text: "उवाच", type: "verb", meaning: "said" },
      w2_3: { text: "दृष्ट्वा", type: "verb", meaning: "having seen" },
      w2_4: { text: "तु", type: "indeclinable", meaning: "then / but" },
      w2_5: { text: "पाण्डवानीकं", type: "noun", meaning: "the Pandava army", case: "Accusative" },
      w2_6: { text: "व्यूढं", type: "adjective", meaning: "arrayed / formed" },
      w2_7: { text: "दुर्योधनस्तदा", type: "noun", meaning: "Duryodhana then" },
      w2_8: { text: "आचार्यमुपसङ्गम्य", type: "verb", meaning: "approaching the teacher" },
      w2_9: { text: "राजा", type: "noun", meaning: "king", case: "Nominative" },
      w2_10: { text: "वचनमब्रवीत्", type: "verb", meaning: "spoke these words" }
    },
    blocks: {
      sanskrit: {
        original: [
          { line: 1, tokens: [
            { id: "w2_1", text: "सञ्जय" },
            { id: "w2_2", text: "उवाच" },
            { id: null, text: "।" }
          ]},
          { line: 2, tokens: [
            { id: "w2_3", text: "दृष्ट्वा" },
            { id: "w2_4", text: "तु" },
            { id: "w2_5", text: "पाण्डवानीकं" },
            { id: "w2_6", text: "व्यूढं" },
            { id: "w2_7", text: "दुर्योधनस्तदा" },
            { id: null, text: "।" }
          ]},
          { line: 3, tokens: [
            { id: "w2_8", text: "आचार्यमुपसङ्गम्य" },
            { id: "w2_9", text: "राजा" },
            { id: "w2_10", text: "वचनमब्रवीत्" },
            { id: null, text: "॥" }
          ]}
        ],
        sandhi: [
          { line: 1, tokens: [
            { id: "w2_1", text: "सञ्जय" },
            { id: "w2_2", text: "उवाच" },
            { id: null, text: "।" }
          ]},
          { line: 2, tokens: [
            { id: "w2_3", text: "दृष्ट्वा" },
            { id: "w2_4", text: "तु" },
            { id: "w2_5", text: "पाण्डवः" },
            { id: "w2_5b", text: "अनीकम्" },
            { id: "w2_6", text: "व्यूढं" },
            { id: "w2_7", text: "दुर्योधनः" },
            { id: "w2_7b", text: "तदा" },
            { id: null, text: "|" }
          ]},
          { line: 3, tokens: [
            { id: "w2_8", text: "आचार्यम्" },
            { id: "w2_8b", text: "उपसङ्गम्य" },
            { id: "w2_9", text: "राजा" },
            { id: "w2_10", text: "वचनम्" },
            { id: "w2_10b", text: "अब्रवीत्" },
            { id: null, text: "||" }
          ]}
        ]
      },
      iast: [
        "sañjaya uvāca |",
        "dṛṣṭvā tu pāṇḍavānīkam vyūḍham duryodhanaḥ tadā |",
        "ācāryam upasaṅgamya rājā vacanam abravīt ||"
      ],
      translation: [
        { ids: ["w2_1", "w2_2"], text: "Sanjaya said." },
        { ids: ["w2_3", "w2_4", "w2_5", "w2_6", "w2_7"], text: "Having seen the Pandava army arrayed, Duryodhana then" },
        { ids: ["w2_8", "w2_9", "w2_10"], text: "approached the teacher and spoke these words." }
      ]
    }
  },
  {
    id: "1.3",
    title: "Verse 1.3",
    words: {
      w3_1: { text: "पश्य", type: "verb", meaning: "behold" },
      w3_2: { text: "एताम्", type: "pronoun", meaning: "this" },
      w3_3: { text: "पाण्डुपुत्राणाम्", type: "noun", meaning: "of Pandu's sons" },
      w3_4: { text: "आचार्य", type: "noun", meaning: "teacher" },
      w3_5: { text: "महतीम्", type: "adjective", meaning: "great" },
      w3_6: { text: "चमूम्", type: "noun", meaning: "army" },
      w3_7: { text: "व्यूढाम्", type: "adjective", meaning: "arrayed" },
      w3_8: { text: "द्रुपदपुत्रेण", type: "noun", meaning: "by Drupada's son" },
      w3_9: { text: "तव", type: "pronoun", meaning: "your" },
      w3_10: { text: "शिष्येण", type: "noun", meaning: "by the disciple" },
      w3_11: { text: "धीमता", type: "adjective", meaning: "by the intelligent" }
    },
    blocks: {
      sanskrit: {
        original: [
          { line: 1, tokens: [
            { id: "w3_1", text: "पश्यैतां" },
            { id: "w3_3", text: "पाण्डुपुत्राणामाचार्य" },
            { id: "w3_5", text: "महतीं" },
            { id: "w3_6", text: "चमूम्" },
            { id: null, text: "।" }
          ]},
          { line: 2, tokens: [
            { id: "w3_7", text: "व्यूढां" },
            { id: "w3_8", text: "द्रुपदपुत्रेण" },
            { id: "w3_9", text: "तव" },
            { id: "w3_10", text: "शिष्येण" },
            { id: "w3_11", text: "धीमता" },
            { id: null, text: "॥" }
          ]}
        ],
        sandhi: [
          { line: 1, tokens: [
            { id: "w3_1", text: "पश्य" },
            { id: "w3_2", text: "एताम्" },
            { id: "w3_3", text: "पाण्डुपुत्राणाम्" },
            { id: "w3_4", text: "आचार्य" },
            { id: "w3_5", text: "महतीम्" },
            { id: "w3_6", text: "चमूम्" },
            { id: null, text: "|" }
          ]},
          { line: 2, tokens: [
            { id: "w3_7", text: "व्यूढां" },
            { id: "w3_8", text: "द्रुपदपुत्रेण" },
            { id: "w3_9", text: "तव" },
            { id: "w3_10", text: "शिष्येण" },
            { id: "w3_11", text: "धीमता" },
            { id: null, text: "||" }
          ]}
        ]
      },
      iast: [
        "paśya etām pāṇḍuputrāṇām ācārya mahatīm camūm |",
        "vyūḍhām drupadaputreṇa tava śiṣyeṇa dhīmatā ||"
      ],
      translation: [
        { ids: ["w3_1", "w3_2", "w3_3", "w3_4", "w3_5", "w3_6"], text: "Behold the great army of Pandu's sons, O teacher," },
        { ids: ["w3_7", "w3_8", "w3_9", "w3_10", "w3_11"], text: "arrayed by your disciple, the wise Dhrishtadyumna." }
      ]
    }
  },
  {
    id: "1.4",
    title: "Verse 1.4",
    words: {
      w4_1: { text: "अत्र", type: "indeclinable", meaning: "here" },
      w4_2: { text: "शूरा", type: "noun", meaning: "heroes" },
      w4_3: { text: "महेष्वासा", type: "adjective", meaning: "great archers" },
      w4_4: { text: "भीमार्जुनसमा", type: "adjective", meaning: "equal to Bhima and Arjuna" },
      w4_5: { text: "युधि", type: "noun", meaning: "in battle" },
      w4_6: { text: "युयुधानो", type: "noun", meaning: "Yuyudhana" },
      w4_7: { text: "विराटश्च", type: "noun", meaning: "and Virata" },
      w4_8: { text: "द्रुपदश्च", type: "noun", meaning: "and Drupada" },
      w4_9: { text: "महारथः", type: "adjective", meaning: "great warrior" }
    },
    blocks: {
      sanskrit: {
        original: [
          { line: 1, tokens: [
            { id: "w4_1", text: "अत्र" },
            { id: "w4_2", text: "शूरा" },
            { id: "w4_3", text: "महेष्वासा" },
            { id: "w4_4", text: "भीमार्जुनसमा" },
            { id: "w4_5", text: "युधि" },
            { id: null, text: "।" }
          ]},
          { line: 2, tokens: [
            { id: "w4_6", text: "युयुधानो" },
            { id: "w4_7", text: "विराटश्च" },
            { id: "w4_8", text: "द्रुपदश्च" },
            { id: "w4_9", text: "महारथः" },
            { id: null, text: "॥" }
          ]}
        ],
        sandhi: [
          { line: 1, tokens: [
            { id: "w4_1", text: "अत्र" },
            { id: "w4_2", text: "शूराः" },
            { id: "w4_3", text: "महा" },
            { id: "w4_3b", text: "इष्वासाः" },
            { id: "w4_4", text: "भीमः" },
            { id: "w4_4b", text: "अर्जुन" },
            { id: "w4_4c", text: "समाः" },
            { id: "w4_5", text: "युधि" },
            { id: null, text: "|" }
          ]},
          { line: 2, tokens: [
            { id: "w4_6", text: "युयुधानः" },
            { id: "w4_7", text: "विराटः" },
            { id: "w4_7b", text: "च" },
            { id: "w4_8", text: "द्रुपदः" },
            { id: "w4_8b", text: "च" },
            { id: "w4_9", text: "महारथः" },
            { id: null, text: "||" }
          ]}
        ]
      },
      iast: [
        "atra śūrā mahā eṣvāsā bhīm ārjuna-samā yudhi |",
        "yuyudhāno virāṭaś ca drupadaś ca mahārathaḥ ||"
      ],
      translation: [
        { ids: ["w4_1", "w4_2", "w4_3", "w4_4", "w4_5"], text: "Here are many great archers equal to Bhima and Arjuna in battle," },
        { ids: ["w4_6", "w4_7", "w4_8", "w4_9"], text: "Yuyudhana and Virata and Drupada, all great warriors." }
      ]
    }
  },
  {
    id: "1.5",
    title: "Verse 1.5",
    words: {
      w5_1: { text: "धृष्टकेतुः", type: "noun", meaning: "Dhrishtaketu" },
      w5_2: { text: "चेकितानः", type: "noun", meaning: "Chekitana" },
      w5_3: { text: "काशिराजः", type: "noun", meaning: "King of Kashi" },
      w5_4: { text: "च", type: "indeclinable", meaning: "and" },
      w5_5: { text: "वीर्यवान्", type: "adjective", meaning: "the powerful" },
      w5_6: { text: "पुरुजित्", type: "noun", meaning: "Purujit" },
      w5_7: { text: "कुन्तिभोजः", type: "noun", meaning: "Kuntibhoja" },
      w5_8: { text: "च", type: "indeclinable", meaning: "and" },
      w5_9: { text: "शैब्यः", type: "noun", meaning: "Saibyah" },
      w5_10: { text: "च", type: "indeclinable", meaning: "and" },
      w5_11: { text: "नरपुङ्गवः", type: "adjective", meaning: "the bull among men" }
    },
    blocks: {
      sanskrit: {
        original: [
          { line: 1, tokens: [
            { id: "w5_1", text: "धृष्टकेतुश्चेकितानः" },
            { id: "w5_3", text: "काशिराजश्च" },
            { id: "w5_5", text: "वीर्यवान्" },
            { id: null, text: "।" }
          ]},
          { line: 2, tokens: [
            { id: "w5_6", text: "पुरुजित्कुन्तिभोजश्च" },
            { id: "w5_9", text: "शैब्यश्च" },
            { id: "w5_11", text: "नरपुङ्गवः" },
            { id: null, text: "॥" }
          ]}
        ],
        sandhi: [
          { line: 1, tokens: [
            { id: "w5_1", text: "धृष्टकेतुः" },
            { id: "w5_2", text: "चेकितानः" },
            { id: "w5_3", text: "काशिराजः" },
            { id: "w5_4", text: "च" },
            { id: "w5_5", text: "वीर्यवान्" },
            { id: null, text: "." }
          ]},
          { line: 2, tokens: [
            { id: "w5_6", text: "पुरुजित्" },
            { id: "w5_7", text: "कुन्तिभोजः" },
            { id: "w5_8", text: "च" },
            { id: "w5_9", text: "शैब्यः" },
            { id: "w5_10", text: "च" },
            { id: "w5_11", text: "नरपुङ्गवः" },
            { id: null, text: "||" }
          ]}
        ]
      },
      iast: [
        "dhṛṣṭaketuḥ cekitānaḥ kāśirājaḥ ca vīryavān ।",
        "purujit kuntibhojaḥ ca śaibyaḥ ca narapuṅgavaḥ ||"
      ],
      translation: [
        { ids: ["w5_1", "w5_2", "w5_3", "w5_5"], text: "Dhrishtaketu and Chekitana and the King of Kashi, the powerful," },
        { ids: ["w5_6", "w5_7", "w5_9", "w5_11"], text: "Purujit and Kuntibhoja and Saibyah, the bull among men." }
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
let currentMode = "original";

const sanskritBlock = document.getElementById("sanskritBlock");
const iastBlock = document.getElementById("iastBlock");
const translationBlock = document.getElementById("translationBlock");
const verseLabel = document.getElementById("verseLabel");
const detailPanel = document.getElementById("detailPanel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function renderSanskrit() {
  sanskritBlock.innerHTML = "";
  const verse = verses[currentIndex];
  const blockData = verse.blocks.sanskrit[currentMode];

  blockData.forEach((lineData) => {
    const lineDiv = document.createElement("div");
    lineDiv.className = "verse-line";

    lineData.tokens.forEach((token) => {
      if (token.id === null) {
        const danda = document.createElement("span");
        danda.className = "danda";
        danda.textContent = token.text;
        lineDiv.appendChild(danda);
      } else {
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
        lineDiv.appendChild(btn);
      }
      lineDiv.appendChild(document.createTextNode(" "));
    });

    sanskritBlock.appendChild(lineDiv);
  });
}

function renderIAST() {
  iastBlock.innerHTML = "";
  const verse = verses[currentIndex];
  verse.blocks.iast.forEach((line) => {
    const lineDiv = document.createElement("div");
    lineDiv.className = "verse-line";
    lineDiv.textContent = line;
    iastBlock.appendChild(lineDiv);
  });
}

function renderTranslation() {
  translationBlock.innerHTML = "";
  const verse = verses[currentIndex];
  verse.blocks.translation.forEach((item) => {
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

  renderSanskrit();
  renderIAST();
  renderTranslation();
  renderDetailPanel();

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === verses.length - 1;
}

// Toggle mode buttons
document.querySelectorAll(".toggle-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.querySelectorAll(".toggle-btn").forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");
    currentMode = e.target.getAttribute("data-mode");
    render();
  });
});

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
