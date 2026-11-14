const CH2_11_20 = [
  {
    id: 11,
    title: "श्लोक 11",
    shloka: `
      श्रीभगवानुवाच ।<br>
      अशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे ।<br>
      गतासूनगतासूंश्च नानुशोचन्ति पण्डिताः॥<br>
    `,
    sandhi: `
      श्रीभगवान·उवाच।<br>
      अशोच्यान्·अन्वशोचस्·त्वं प्रज्ञा·वादांश्·च भाषसे।<br>
      गतासून्·अगतासून्·च न·अनुशोचन्ति पण्डिताः॥<br>
    `,
    translit: `
      śrībhagavān·uvāca।<br>
      aśocyān·anvaśocas·tvaṃ prajñā·vādāṃś·ca bhāṣase।<br>
      gatāsūn·agatāsūṃś·ca na·anuśocanti paṇḍitāḥ॥<br>
    `,
    translation: `
      The Lord spoke;<br>
      Those not‑to‑be‑grieved you grieve, and wise words you speak;<br>
      Departed lives and non‑departed lives, the wise do not grieve. <br>
    `,
    parts: [
      {id: 1, role: "Speaker", sandhi: "श्रीभगवान·उवाच।", translit: "śrībhagavān·uvāca।", guide: "The Blessed Lord said"},
      {id: 2, role: "Refutation / Correction", sandhi: "अशोच्यान्·अन्वशोचस्·त्वं", translit: "aśocyān·anvaśocas·tvaṃ", guide: "you grieve for those who should not be grieved for"},
      {id: 3, role: "Contrast / Distinction", sandhi: "प्रज्ञा·वादांश्·च भाषसे।", translit: "prajñā·vādāṃś·ca bhāṣase।", guide: "yet you speak words of wisdom"},
      {id: 4, role: "What is affected?", sandhi: "गतासून्·अगतासून्·च", translit: "gatāsūn·agatāsūṃś·ca", guide: "for the dead or for the living"},
      {id: 5, role: "Core principle / Truth", sandhi: "न·अनुशोचन्ति पण्डिताः॥", translit: "na·anuśocanti paṇḍitāḥ॥", guide: "the truly wise never grieve"}
    ],
    meaningOrder: [1, 2, 3, 5, 4]
  },

  {
    id: 12,
    title: "श्लोक 12",
    shloka: `
      न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः ।<br>
      न चैव न भविष्यामः सर्वे वयमतः परम् ॥<br>
    `,
    sandhi: `
      न तु·एव·अहं जातु न·आसम् न त्वं न·इमे जनाधिपाः।<br>
      न च·एव न भविष्यामः सर्वे वयम्·अतः परम्॥<br>
    `,
    translit: `
      na tu·eva·aham jātu na·āsam na tvam na·ime janādhipāḥ।<br>
      na ca·eva na·bhaviṣyāmaḥ sarve vayaṃ·ataḥ param॥<br>
    `,
    translation: `
      Never indeed was I at any perid of time not existing, nor you, nor these lords of men;<br>
      Nor indeed shall we not be in the future, all of us, hereafter. <br>
    `,
    parts: [
      {id: 1, role: "Core principle / Truth", sandhi: "न तु·एव·अहं जातु न·आसम्", translit: "na tu·eva·aham jātu na·āsam", guide: "never indeed was there a time when I did not exist"},
      {id: 2, role: "Core principle / Truth", sandhi: "न त्वं न·इमे जनाधिपाः।", translit: "na tvam na·ime janādhipāḥ।", guide: "nor you, nor these rulers of men"},
      {id: 3, role: "Core principle / Truth", sandhi: "न च·एव न भविष्यामः", translit: "na ca·eva na·bhaviṣyāmaḥ", guide: "nor indeed shall we ever cease to exist"},
      {id: 4, role: "Who acts?", sandhi: "सर्वे वयम्", translit: "sarve vayaṃ", guide: "all of us"},
      {id: 5, role: "Time or purpose", sandhi: "अतः परम्॥", translit: "ataḥ param॥", guide: "hereafter / in the future"}
    ],
    meaningOrder: [1, 2, 4, 3, 5]
  },

  {
    id: 13,
    title: "श्लोक 13",
    shloka: `
      देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा ।<br>
      तथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति ॥<br>
    `,
    sandhi: `
      देहिनः·अस्मिन्·यथा देहे·कौमारम्·यौवनम्·जरा।<br>
      तथा देह·अन्तर·प्राप्तिः·धीरः·तत्र न मुह्यति॥<br>
    `,
    translit: `
      dehinaḥ·asmin·yathā dehe·kaumāram·yauvanam·jarā।<br>
      tathā deha·antara·prāptiḥ·dhīraḥ·tatra na muhyati॥<br>
    `,
    translation: `
      Embodied soul (exists), as in the body, (during) childhood, youth, and old age;<br>
      In the same way (also) after change of the body (is) achieved, the steadfast one there is not deceived. <br>
    `,
    parts: [
      {id: 1, role: "Analogy / Example", sandhi: "देहिनः·अस्मिन्·यथा देहे", translit: "dehinaḥ·asmin·yathā dehe", guide: "just as the embodied soul experiences in this body"},
      {id: 2, role: "Analogy / Example", sandhi: "कौमारम्·यौवनम्·जरा।", translit: "kaumāram·yauvanam·jarā।", guide: "childhood, youth, and old age"},
      {id: 3, role: "Core principle / Truth", sandhi: "तथा देह·अन्तर·प्राप्तिः", translit: "tathā deha·antara·prāptiḥ", guide: "so too does it pass into another body"},
      {id: 4, role: "Result / Consequence", sandhi: "धीरः·तत्र न मुह्यति॥", translit: "dhīraḥ·tatra na muhyati॥", guide: "the steadfast person is not deluded by this"}
    ],
    meaningOrder: [1, 2, 3, 4]
  },

  {
    id: 14,
    title: "श्लोक 14",
    shloka: `
      मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः ।<br>
      आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत ॥<br>
    `,
    sandhi: `
      मात्रा·स्पर्शाः·कौन्तेय·शीत·उष्ण·सुख·दुःखदाः।<br>
      आगम·अपायिनः·अनित्याः·तांस्·तितिक्षस्व·भारत॥<br>
    `,
    translit: `
      mātrā·sparśāḥ·kaunteya·śīta·uṣṇa·sukha·duḥkha·dāḥ।<br>
      āgama·apāyinaḥ·anityāḥ·tāṃs·titikṣasva·bhārata॥<br>
    `,
    translation: `
      Sense object contacts, O son of Kuntī, cold‑heat, pleasure‑pain giving;<br>
      Coming‑and‑going, impermanent — endure them, O Bhārata. <br>
    `,
    parts: [
      {id: 1, role: "Definition / Nature of", sandhi: "मात्रा·स्पर्शाः", translit: "mātrā·sparśāḥ", guide: "contacts between the senses and their objects"},
      {id: 2, role: "Person addressed", sandhi: "कौन्तेय", translit: "kaunteya", guide: "O son of Kuntī"},
      {id: 3, role: "Definition / Nature of", sandhi: "शीत·उष्ण·सुख·दुःखदाः।", translit: "śīta·uṣṇa·sukha·duḥkha·dāḥ।", guide: "give rise to cold and heat, pleasure and pain"},
      {id: 4, role: "Definition / Nature of", sandhi: "आगम·अपायिनः·अनित्याः", translit: "āgama·apāyinaḥ·anityāḥ", guide: "they come and go and are impermanent"},
      {id: 5, role: "Guidance / Advice", sandhi: "तांस्·तितिक्षस्व", translit: "tāṃs·titikṣasva", guide: "endure them patiently"},
      {id: 6, role: "Person addressed", sandhi: "भारत॥", translit: "bhārata॥", guide: "O Bhārata"}
    ],
    meaningOrder: [2, 1, 3, 4, 5, 6]
  },

  {
    id: 15,
    title: "श्लोक 15",
    shloka: `
      यं हि न व्यथयन्त्येते पुरुषं पुरुषर्षभ ।<br>
      समदुःखसुखं धीरं सोऽमृतत्वाय कल्पते ॥<br>
    `,
    sandhi: `
      यं·हि·न·व्यथयन्ति·एते·पुरुषम्·पुरुष·ऋषभ।<br>
      सम·दुःख·सुखम्·धीरम्·सः·अमृतत्व·अर्हति॥<br>
    `,
    translit: `
      yaṃ·hi·na·vyathayanti·ete·puruṣam·puruṣa·ṛṣabha।<br>
      sama·duḥkha·sukham·dhīram·saḥ·amṛtatva·arhati॥<br>
    `,
    translation: `
      Whom indeed do not afflict these, O best of men;<br>
      (One who is) Equal in pain (and) pleasure, the steadfast one — he is immortality eligible. <br>
    `,
    parts: [
      {id: 1, role: "Condition / If–When", sandhi: "यं·हि·न·व्यथयन्ति·एते", translit: "yaṃ·hi·na·vyathayanti·ete", guide: "whom indeed these (sense contacts) do not disturb"},
      {id: 2, role: "Who acts?", sandhi: "पुरुषम्", translit: "puruṣam", guide: "that person"},
      {id: 3, role: "Person addressed", sandhi: "पुरुष·ऋषभ।", translit: "puruṣa·ṛṣabha।", guide: "O best among men"},
      {id: 4, role: "Description or quality", sandhi: "सम·दुःख·सुखम्·धीरम्", translit: "sama·duḥkha·sukham·dhīram", guide: "who remains steady and equal in pain and pleasure"},
      {id: 5, role: "Result / Consequence", sandhi: "सः·अमृतत्व·अर्हति॥", translit: "saḥ·amṛtatva·arhati॥", guide: "he becomes fit for immortality"}
    ],
    meaningOrder: [3, 2, 4, 1, 5]
  },

  {
    id: 16,
    title: "श्लोक 16",
    shloka: `
      नासतो विद्यते भावो नाभावो विद्यते सतः ।<br>
      उभयोरपि दृष्टोऽन्तस्त्वनयोस्तत्त्वदर्शिभिः ॥<br>
    `,
    sandhi: `
      न·असतः·विद्यते·भावः·न·अभावः विद्यते सतः।<br>
      उभयोः·अपि·दृष्टः·अन्तः·त्·अनयोः·तत्त्व·दर्शिभिः॥<br>
    `,
    translit: `
      na·asataḥ·vidyate·bhāvaḥ·na·abhāvaḥ vidyate sataḥ।<br>
      ubhayoḥ·api·dṛṣṭaḥ·antaḥ·tu·anayoḥ·tattva·darśibhiḥ॥<br>
    `,
    translation: `
      No unreal exists (in) being; No not-being exits of the real;<br>
      Of both (real and unreal) also (having) observed, (in) the end indeed, of these two, (the) essence (by) the seers. <br>
    `,
    parts: [
      {id: 1, role: "Core principle / Truth", sandhi: "न·असतः·विद्यते·भावः", translit: "na·asataḥ·vidyate·bhāvaḥ", guide: "the unreal has no true existence"},
      {id: 2, role: "Core principle / Truth", sandhi: "न·अभावः विद्यते सतः।", translit: "na·abhāvaḥ vidyate sataḥ।", guide: "and the real never ceases to exist"},
      {id: 3, role: "Who acts?", sandhi: "तत्त्व·दर्शिभिः", translit: "tattva·darśibhiḥ", guide: "by the seers of truth"},
      {id: 4, role: "Result / Consequence", sandhi: "उभयोः·अपि·दृष्टः·अन्तः·तु·अनयोः॥", translit: "ubhayoḥ·api·dṛṣṭaḥ·antaḥ·tu·anayoḥ॥", guide: "the ultimate truth of both of these has been seen"}
    ],
    meaningOrder: [1, 2, 4, 3]
  },

  {
    id: 17,
    title: "श्लोक 17",
    shloka: `
      अविनाशि तु तद्विद्धि येन सर्वमिदं ततम् ।<br>
      विनाशमव्ययस्यास्य न कश्चित्कर्तुमर्हति ॥<br>
    `,
    sandhi: `
      अविनाशि·तु·तत·विद्धि·येन·सर्वम्·इदं·ततम्।<br>
      विनाशम्·अव्ययस्य·अस्य·न·कश्चित्·कर्तुम्·अर्हति॥<br>
    `,
    translit: `
      avināśi·tu·tat·viddhi·yena·sarvam·idam·tatam।<br>
      vināśam·avyayasya·asya·na·kaścit·kartum·arhati॥<br>
    `,
    translation: `
      Indestructible but know (that) by which all this is pervaded;<br>
      The destruction of the imperishable, no one to do is competent. <br>
    `,
    parts: [
      {id: 1, role: "Guidance / Advice", sandhi: "अविनाशि·तु·तत·विद्धि", translit: "avināśi·tu·tat·viddhi", guide: "know that reality to be indestructible"},
      {id: 2, role: "Definition / Nature of", sandhi: "येन·सर्वम्·इदं·ततम्।", translit: "yena·sarvam·idam·tatam।", guide: "by which all this universe is pervaded"},
      {id: 3, role: "What is affected?", sandhi: "विनाशम्·अव्ययस्य·अस्य", translit: "vināśam·avyayasya·asya", guide: "destruction of this imperishable Self"},
      {id: 4, role: "Core principle / Truth", sandhi: "न·कश्चित्·कर्तुम्·अर्हति॥", translit: "na·kaścit·kartum·arhati॥", guide: "no one is able to bring about"}
    ],
    meaningOrder: [1, 2, 4, 3]
  },

  {
    id: 18,
    title: "श्लोक 18",
    shloka: `
      अन्तवन्त इमे देहा नित्यस्योक्ताः शरीरिणः ।<br>
      अनाशिनोऽप्रमेयस्य तस्माद्युध्यस्व भारत ॥<br>
    `,
    sandhi: `
      अन्तवन्त इमे देहाः नित्यस्य·उक्ताः शरीरिणः।<br>
      अनाशिनः·अप्रमेयस्य·तस्मात्·युध्यस्व भारत॥<br>
    `,
    translit: `
      antavantaḥ ime dehāḥ nityasya·uktāḥ śarīriṇaḥ।<br>
      anāśinaḥ·aprameyasya tasmāt·yudhyasva bhārata॥<br>
    `,
    translation: `
      Perishable, these bodies; eternal is said the embodied one (the soul);<br>
      Indestructible, immeasurable — therefore fight, O Bhārata. <br>
    `,
    parts: [
      {id: 1, role: "Contrast / Distinction", sandhi: "अन्तवन्त इमे देहाः", translit: "antavantaḥ ime dehāḥ", guide: "these physical bodies are perishable"},
      {id: 2, role: "Definition / Nature of", sandhi: "नित्यस्य·उक्ताः शरीरिणः।", translit: "nityasya·uktāḥ śarīriṇaḥ।", guide: "while the embodied Self is declared to be eternal"},
      {id: 3, role: "Definition / Nature of", sandhi: "अनाशिनः·अप्रमेयस्य", translit: "anāśinaḥ·aprameyasya", guide: "indestructible and immeasurable"},
      {id: 4, role: "Guidance / Advice", sandhi: "तस्मात्·युध्यस्व", translit: "tasmāt·yudhyasva", guide: "therefore, fight"},
      {id: 5, role: "Person addressed", sandhi: "भारत॥", translit: "bhārata॥", guide: "O Bhārata"}
    ],
    meaningOrder: [1, 2, 3, 5, 4]
  },

  {
    id: 19,
    title: "श्लोक 19",
    shloka: `
      य एनं वेत्ति हन्तारं यश्चैनं मन्यते हतम् ।<br>
      उभौ तौ न विजानीतो नायं हन्ति न हन्यते ॥<br>
    `,
    sandhi: `
      यः एनं वेत्ति हन्तारम्·यः·च·एनं मन्यते·हतम्।<br>
      उभौ तौ न विजानीतः न·अयम् हन्ति न हन्यते॥<br>
    `,
    translit: `
      yaḥ enaṃ vetti hantāram yaḥ·ca·enaṃ manyate hatam।<br>
      ubhau tau na vijānītaḥ na·ayam hanti na hanyate॥<br>
    `,
    translation: `
      (He) Who this thinks as the slayer, and (he) who thinks this as slain;<br>
      Both these two (do) not know - neither this slays, nor is slain. <br>
    `,
    parts: [
      {id: 1, role: "Condition / If–When", sandhi: "यः एनं वेत्ति हन्तारम्", translit: "yaḥ enaṃ vetti hantāram", guide: "he who considers this Self to be a slayer"},
      {id: 2, role: "Condition / If–When", sandhi: "यः·च·एनं मन्यते·हतम्।", translit: "yaḥ·ca·enaṃ manyate hatam।", guide: "and he who thinks this Self can be slain"},
      {id: 3, role: "Refutation / Correction", sandhi: "उभौ तौ न विजानीतः", translit: "ubhau tau na vijānītaḥ", guide: "both of them are ignorant of the truth"},
      {id: 4, role: "Core principle / Truth", sandhi: "न·अयम् हन्ति न हन्यते॥", translit: "na·ayam hanti na hanyate॥", guide: "for this Self neither slays nor is ever slain"}
    ],
    meaningOrder: [1, 2, 3, 4]
  },

  {
    id: 20,
    title: "श्लोक 20",
    shloka: `
      न जायते म्रियते वा कदाचि नायं भूत्वा भविता वा न भूयः।<br>
      अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे ॥<br>
    `,
    sandhi: `
      न जायते म्रियते वा कदा·चित् न·अयम् भूत्वा भविता वा न भूयः।<br>
      अजः नित्यः शाश्वतः·अयम् पुराणः न हन्यते हन्यमाने शरीरे॥<br>
    `,
    translit: `
      na jāyate mriyate vā kadā·cit na·ayam bhūtvā bhavitā vā na bhūyaḥ।<br>
      ajo nityaḥ śāśvataḥ·ayaṃ purāṇaḥ na hanyate hanyamāne śarīre॥<br>
    `,
    translation: `
      Not (it) is born or dies at any time; not this having been, will be or not again;<br>
      Unborn, eternal, everlasting, ancient — (it) is not slain on the slaying of the body. <br>
    `,
    parts: [
      {id: 1, role: "Core principle / Truth", sandhi: "न जायते म्रियते वा कदा·चित्", translit: "na jāyate mriyate vā kadā·cit", guide: "this Self is neither born nor does it ever die"},
      {id: 2, role: "Core principle / Truth", sandhi: "न·अयम् भूत्वा भविता वा न भूयः।", translit: "na·ayam bhūtvā bhavitā vā na bhūyaḥ।", guide: "nor having once existed does it ever cease to be"},
      {id: 3, role: "Definition / Nature of", sandhi: "अजः नित्यः शाश्वतः·अयम् पुराणः", translit: "ajo nityaḥ śāśvataḥ·ayaṃ purāṇaḥ", guide: "it is unborn, eternal, everlasting, and primeval"},
      {id: 4, role: "Core principle / Truth", sandhi: "न हन्यते हन्यमाने शरीरे॥", translit: "na hanyate hanyamāne śarīre॥", guide: "and is not slain when the body is slain"}
    ],
    meaningOrder: [1, 2, 3, 4]
  }
];
