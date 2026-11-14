const CH1_01_10 = [
  {
    id: 1,
    title: "श्लोक 1",
    shloka: `
      धृतराष्ट्र उवाच ।<br>
      धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः ।<br>
      मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ॥<br>
    `,
    sandhi: `
      धृतराष्ट्र उवाच ।<br>
      धर्मक्षेत्रे कुरुक्षेत्रे समवेताः युयुत्सवः |<br>
      मामकाः पाण्डवाः च एव किम् अकुर्वत सञ्जय ||<br>
    `,
    translit: `
      dhṛtarāṣṭra uvāca |<br>
      dharma-kṣetre kuru-kṣetre samavetāḥ yuyutsavaḥ |<br>
      māmakāḥ pāṇḍavāś ca eva kim akurvata sañjaya ||<br>
    `,
    translation: `
      Dhritarashtra said.<br> 
      On this land of dharma, in Kururshetra, gathered wanting to fight,<br>
      Mine and Pandu's kin indeed, what did they do, Sanjay? <br>
    `,
    parts: [
      {id: 1, role: "Speaker", sandhi: "धृतराष्ट्र उवाच ।", translit: "dhṛtarāṣṭra uvāca |", guide: "Dhṛtarāṣṭra said"},
      {id: 2, role: "Place or setting", sandhi: "धर्मक्षेत्रे कुरुक्षेत्रे", translit: "dharma-kṣetre kuru-kṣetre", guide: "in the land of dharma, in Kurukṣetra"},
      {id: 3, role: "Description or quality", sandhi: "समवेताः युयुत्सवः |", translit: "samavetāḥ yuyutsavaḥ |", guide: "gathered together, desiring to fight"},
      {id: 4, role: "Who acts?", sandhi: "मामकाः पाण्डवाः च एव", translit: "māmakāḥ pāṇḍavāś ca eva", guide: "my people and the sons of Pāṇḍu indeed"},
      {id: 5, role: "Question", sandhi: "किम् अकुर्वत", translit: "kim akurvata", guide: "what did they do"},
      {id: 6, role: "Person addressed", sandhi: "सञ्जय ||", translit: "sañjaya ||", guide: "O Sañjaya"}
    ],
    meaningOrder: [1, 6, 4, 3, 2, 5]
  },


  {
    id: 2,
    title: "श्लोक 2",
    shloka: `
      सञ्जय उवाच ।<br>
      दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा ।<br>
      आचार्यमुपसङ्गम्य राजा वचनमब्रवीत् ॥<br>
    `,
    sandhi: `
      सञ्जय उवाच ।<br>
      दृष्ट्वा तु पाण्डवः अनीकम् व्यूढं दुर्योधनः तदा |<br>
      आचार्यम् उपसङ्गम्य राजा वचनम् अब्रवीत् ||<br>
    `,
    translit: `
      sañjaya uvāca |<br>
      dṛṣṭvā tu pāṇḍavānīkam vyūḍham duryodhanaḥ tadā |<br>
      ācāryam upasaṅgamya rājā vacanam abravīt ||
    `,
    translation: `
      Sanjaya said,<br>
      having seen Pandava army, arrayed, Duryodhana then,<br>
      getting closer to teacher/sir (Drona), king (he) said these words.<br>
    `,
    parts: [
      {id: 1, role: "Speaker", sandhi: "सञ्जय उवाच ।", translit: "sañjaya uvāca |", guide: "Sañjaya said"},
      {id: 2, role: "What happens?", sandhi: "दृष्ट्वा तु", translit: "dṛṣṭvā tu", guide: "then having seen"},
      {id: 3, role: "What is affected?", sandhi: "पाण्डवः अनीकम् व्यूढं", translit: "pāṇḍavānīkam vyūḍham", guide: "the arrayed army of the Pāṇḍavas"},
      {id: 4, role: "Who acts?", sandhi: "दुर्योधनः तदा", translit: "duryodhanaḥ tadā", guide: "Duryodhana at that time"},
      {id: 5, role: "What happens?", sandhi: "आचार्यम् उपसङ्गम्य", translit: "ācāryam upasaṅgamya", guide: "approaching the teacher (Droṇa)"},
      {id: 6, role: "What happens?", sandhi: "राजा वचनम् अब्रवीत् ||", translit: "rājā vacanam abravīt ||", guide: "the king spoke these words"}
    ],
    meaningOrder: [1, 4, 2, 3, 5, 6]
  },

  {
    id: 3,
    title: "श्लोक 3",
    shloka: `
      पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम् ।<br>
      व्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता ॥<br>
    `,
    sandhi: `
      पश्य एताम् पाण्डुपुत्राणाम् आचार्य महतीम् चमूम् |<br>
      व्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता ||<br>
    `,
    translit: `
      paśya etām pāṇḍuputrāṇām ācārya mahatīm camūm |<br>
      vyūḍhām drupadaputreṇa tava śiṣyeṇa dhīmatā ||
    `,
    translation: `
      Having seen this great grouping belonging to Pandu-putras, teacher/sir, <br>
      arrayed by son of Drupada, your disciple, the intelligent.<br>
    `,
    parts: [
      {id: 1, role: "Request or command", sandhi: "पश्य एताम्", translit: "paśya etām", guide: "Behold this"},
      {id: 2, role: "Description or quality", sandhi: "पाण्डुपुत्राणाम्", translit: "pāṇḍuputrāṇām", guide: "of the sons of Pāṇḍu"},
      {id: 3, role: "Person addressed", sandhi: "आचार्य", translit: "ācārya", guide: "O teacher"},
      {id: 4, role: "What is affected?", sandhi: "महतीम् चमूम् |", translit: "mahatīm camūm |", guide: "mighty army"},
      {id: 5, role: "What happens?", sandhi: "व्यूढां द्रुपदपुत्रेण", translit: "vyūḍhām drupadaputreṇa", guide: "arrayed by the son of Drupada"},
      {id: 6, role: "Description or quality", sandhi: "तव शिष्येण धीमता ||", translit: "tava śiṣyeṇa dhīmatā ||", guide: "by your intelligent disciple"}
    ],
    meaningOrder: [3, 1, 4, 2, 5, 6]
  },

  {
    id: 4,
    title: "श्लोक 4",
    shloka: `
      अत्र शूरा महेष्वासा भीमार्जुनसमा युधि ।<br>
      युयुधानो विराटश्च द्रुपदश्च महारथः ॥<br>
    `,
    sandhi: `
      अत्र शूराः महा इष्वासाः भीमः अर्जुन - समाः युधि |<br>
      युयुधानः विराटः च द्रुपदः च महारथः ||   
    `,
    translit: `
      atra śūrā maha eṣvāsā bhīm ārjuna-samā yudhi |<br>
      yuyudhāno virāṭaś ca drupadaś ca mahārathaḥ ||
    `,
    translation: `
      Here are many heroic archers like Bhima and Arjun in battle, <br>
      Yuyudhana and Virat and Drupada, (all) great warriors. <br>
    `,
    parts: [
      {id: 1, role: "Place or setting", sandhi: "अत्र", translit: "atra", guide: "Here (in this army)"},
      {id: 2, role: "Description or quality", sandhi: "शूराः महा इष्वासाः", translit: "śūrā maha eṣvāsā", guide: "heroic great archers"},
      {id: 3, role: "Description or quality", sandhi: "भीमः अर्जुन - समाः युधि |", translit: "bhīm ārjuna-samā yudhi |", guide: "equal to Bhīma and Arjuna in battle"},
      {id: 4, role: "Who acts?", sandhi: "युयुधानः विराटः च", translit: "yuyudhāno virāṭaś ca", guide: "Yuyudhāna and Virāṭa"},
      {id: 5, role: "Who acts?", sandhi: "द्रुपदः च महारथः ||", translit: "drupadaś ca mahārathaḥ ||", guide: "and Drupada, the great chariot-warrior"}
    ],
    meaningOrder: [1, 2, 3, 4, 5]
  },

  {
    id: 5,
    title: "श्लोक 5",
    shloka: `
      धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान् ।<br>
      पुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुङ्गवः ॥<br>
    `,
    sandhi: `
      धृष्टकेतुः चेकितानः काशिराजः च वीर्यवान् ।<br>
      पुरुजित् कुन्तिभोजः च शैब्यः च नरपुङ्गवः ॥<br>
    `,
    translit: `
      dhṛṣṭaketuḥ cekitānaḥ kāśirājaḥ ca vīryavān ।<br>
      purujit kuntibhojaḥ ca śaibyaḥ ca narapuṅgavaḥ ॥<br>
    `,
    translation: `
      Dhrstaketuh and Chekitanah and King of Kashi, the powerful, <br>
      Purujit and Kuntibhoja and Saibyah, the bull among men.<br>
    `,
    parts: [
      {id: 1, role: "Who acts?", sandhi: "धृष्टकेतुः चेकितानः", translit: "dhṛṣṭaketuḥ cekitānaḥ", guide: "Dhṛṣṭaketu and Cekitāna"},
      {id: 2, role: "Who acts?", sandhi: "काशिराजः च वीर्यवान् ।", translit: "kāśirājaḥ ca vīryavān ।", guide: "and the valiant King of Kāśī"},
      {id: 3, role: "Who acts?", sandhi: "पुरुजित् कुन्तिभोजः च", translit: "purujit kuntibhojaḥ ca", guide: "Purujit and Kuntibhoja"},
      {id: 4, role: "Who acts?", sandhi: "शैब्यः च नरपुङ्गवः ॥", translit: "śaibyaḥ ca narapuṅgavaḥ ॥", guide: "and Śaibya, the foremost among men"}
    ],
    meaningOrder: [1, 2, 3, 4]
  },


  {
    id: 6,
    title: "श्लोक 6",
    shloka: `
      युधामन्युश्च विक्रान्त उत्तमौजाश्च वीर्यवान् ।<br>
      सौभद्रो द्रौपदेयाश्च सर्व एव महारथाः ॥<br>
    `,
    sandhi: `
      युधामन्युः च विक्रान्तः उत्तमौजाः च वीर्यवान् ।<br>
      सौभद्रः द्रौपदेयाः च सर्व एव महारथाः ॥<br>
    `,
    translit: `
      yudhāmanyuḥ ca vikrāntaḥ uttamaujāḥ ca vīryavān ।<br>
      saubhadraḥ draupadeyāḥ ca sarve eva mahārathāḥ ॥<br>
    `,
    translation: `
      Yudhamanyu and Vikrantah and Uttamaujah, the powerful, <br>
      Son of Subhadra and sons of Draupadi, all indeed great warriors <br>
    `,
    parts: [
      {id: 1, role: "Who acts?", sandhi: "युधामन्युः च विक्रान्तः", translit: "yudhāmanyuḥ ca vikrāntaḥ", guide: "the valiant Yudhāmanyu"},
      {id: 2, role: "Who acts?", sandhi: "उत्तमौजाः च वीर्यवान् ।", translit: "uttamaujāḥ ca vīryavān ।", guide: "and the powerful Uttamaujāḥ"},
      {id: 3, role: "Who acts?", sandhi: "सौभद्रः द्रौपदेयाः च", translit: "saubhadraḥ draupadeyāḥ ca", guide: "the son of Subhadrā and the sons of Draupadī"},
      {id: 4, role: "Description or quality", sandhi: "सर्व एव महारथाः ॥", translit: "sarve eva mahārathāḥ ॥", guide: "all of them indeed are great chariot-warriors"}
    ],
    meaningOrder: [1, 2, 3, 4]
  },

  {
    id: 7,
    title: "श्लोक 7",
    shloka: `
      अस्माकं तु विशिष्टा ये तान्निबोध द्विजोत्तम ।<br>
      नायका मम सैन्यस्य संज्ञार्थं तान्ब्रवीमि ते ॥ <br>
    `,
    sandhi: `
      अस्माकम् तु विशिष्टाः ये तान् निबोध द्विज-उत्तम ।<br>
      नायकाः मम सैन्यस्य संज्ञा अर्थम् तान् ब्रवीमि ते ॥<br>
    `,
    translit: `
      asmākam tu viśiṣṭāḥ ye tān nibodha dvija-uttama ।<br>
      nāyakāḥ mama sainyasya saṃjñā artham tān bravīmi te॥<br>
    `,
    translation: `
      Ours (army) but distinguished, for your knowledge, O twice-born (Drona), <br>
      Leaders of my army, for your information, I will tell you. <br>
    `,
    parts: [
      {id: 1, role: "Description or quality", sandhi: "अस्माकम् तु विशिष्टाः ये", translit: "asmākam tu viśiṣṭāḥ ye", guide: "those who are distinguished among ours"},
      {id: 2, role: "Request or command", sandhi: "तान् निबोध", translit: "tān nibodha", guide: "know them"},
      {id: 3, role: "Person addressed", sandhi: "द्विज-उत्तम ।", translit: "dvija-uttama ।", guide: "O best among the twice-born (Droṇa)"},
      {id: 4, role: "What is affected?", sandhi: "नायकाः मम सैन्यस्य", translit: "nāyakāḥ mama sainyasya", guide: "the leaders of my army"},
      {id: 5, role: "Time or purpose", sandhi: "संज्ञा अर्थम्", translit: "saṃjñā artham", guide: "for your information"},
      {id: 6, role: "What happens?", sandhi: "तान् ब्रवीमि ते ॥", translit: "tān bravīmi te॥", guide: "I name them to you"}
    ],
    meaningOrder: [3, 1, 2, 4, 5, 6]
  },

  {
    id: 8,
    title: "श्लोक 8",
    shloka: `
      भवान्भीष्मश्च कर्णश्च कृपश्च समितिंजयः।<br>
      अश्वत्थामा विकर्णश्च सौमदत्तिस्तथैव च ॥<br>
    `,
    sandhi: `
      भवान् भीष्मः च कर्णः च कृपः च समितिंजयः।<br>
      अश्वत्थामा विकर्णः च सौमदत्तिः तथा एव च ॥<br>
    `,
    translit: `
      bhavān bhīṣmaḥ ca karṇaḥ ca kṛpaḥ ca samitiñjayaḥ।<br>
      aśvatthāmā vikarṇaḥ ca saumadattiḥ tathā eva ca॥<br>
    `,
    translation: `
      You and Bhishma and Karna and Kripah and Samitinjayah,<br>
      Ashvathama and Vikarna and Saumadattih, likewise indeed.<br>
    `,
    parts: [
      {id: 1, role: "Who acts?", sandhi: "भवान् भीष्मः च", translit: "bhavān bhīṣmaḥ ca", guide: "Yourself (Droṇa) and Bhīṣma"},
      {id: 2, role: "Who acts?", sandhi: "कर्णः च कृपः च समितिंजयः।", translit: "karṇaḥ ca kṛpaḥ ca samitiñjayaḥ।", guide: "Karṇa, and Kṛpa, victorious in battle"},
      {id: 3, role: "Who acts?", sandhi: "अश्वत्थामा विकर्णः च", translit: "aśvatthāmā vikarṇaḥ ca", guide: "Aśvatthāmā and Vikarṇa"},
      {id: 4, role: "Who acts?", sandhi: "सौमदत्तिः तथा एव च ॥", translit: "saumadattiḥ tathā eva ca॥", guide: "and Saumadatti (Bhūriśravā) likewise indeed"}
    ],
    meaningOrder: [1, 2, 3, 4]
  },

  {
    id: 9,
    title: "श्लोक 9",
    shloka: `
      अन्ये च बहवः शूराः मदर्थे त्यक्तजीविताः ।<br>
      नानाशस्त्रप्रहरणाः सर्वे युद्धविशारदाः ॥<br>
    `,
    sandhi: `
      अन्ये च बहवः शूराः मत्·अर्थे त्यक्त·जीविताः ।<br>
      नाना·शस्त्र·प्रहरणाः सर्वे युद्ध·विशारदाः ॥<br>
    `,
    translit: `
      anye ca bahavaḥ śūrāḥ mat-arthe tyakta-jīvitāḥ ।<br>
      nānā-śastra-praharaṇāḥ sarve yuddha-viśāradāḥ ॥<br>
    `,
    translation: `
      And many more heroic (men), for my sake, ready to give up (their) lives, <br>
      Different weapons bearing, all proficient in battle. <br>
    `,
    parts: [
      {id: 1, role: "Who acts?", sandhi: "अन्ये च बहवः शूराः", translit: "anye ca bahavaḥ śūrāḥ", guide: "and many other heroes"},
      {id: 2, role: "Reason or result", sandhi: "मत्·अर्थे त्यक्त·जीविताः ।", translit: "mat-arthe tyakta-jīvitāḥ ।", guide: "ready to give up their lives for my sake"},
      {id: 3, role: "Description or quality", sandhi: "नाना·शस्त्र·प्रहरणाः", translit: "nānā-śastra-praharaṇāḥ", guide: "armed with various weapons"},
      {id: 4, role: "Description or quality", sandhi: "सर्वे युद्ध·विशारदाः ॥", translit: "sarve yuddha-viśāradāḥ ॥", guide: "all of them skilled in warfare"}
    ],
    meaningOrder: [1, 2, 3, 4]
  },

  {
    id: 10,
    title: "श्लोक 10",
    shloka: `
      अपर्याप्तं तदस्माकं बलं भीष्माभिरक्षितम् ।<br>
      पर्याप्तं त्विदमेतेषां बलं भीमाभिरक्षितम् ॥<br>
    `,
    sandhi: `
      अपर्याप्तम् तत् अस्माकम् बलम् भीष्म·अभिरक्षितम् ।<br>
      पर्याप्तम् तु इदम् एतेषाम् बलम् भीम·अभिरक्षितम् ॥<br>
    `,
    translit: `
      aparyāptam tat asmākam balam bhīṣma-abhirakṣitam।<br>
      paryāptam tu idam eteṣām balam bhīma-abhirakṣitam॥<br>
    `,
    translation: `
      More than sufficient, thats our strength, protected by Bhishma, <br>
      But sufficient is their strength, protected by Bhima. <br>
    `,
    parts: [
      {id: 1, role: "Description or quality", sandhi: "अपर्याप्तम्", translit: "aparyāptam", guide: "immeasurable / beyond sufficient"},
      {id: 2, role: "What is affected?", sandhi: "तत् अस्माकम् बलम्", translit: "tat asmākam balam", guide: "is that strength of ours"},
      {id: 3, role: "Description or quality", sandhi: "भीष्म·अभिरक्षितम् ।", translit: "bhīṣma-abhirakṣitam।", guide: "protected by Bhīṣma"},
      {id: 4, role: "Description or quality", sandhi: "पर्याप्तम् तु", translit: "paryāptam tu", guide: "whereas limited / merely sufficient"},
      {id: 5, role: "What is affected?", sandhi: "इदम् एतेषाम् बलम्", translit: "idam eteṣām balam", guide: "is this strength of theirs"},
      {id: 6, role: "Description or quality", sandhi: "भीम·अभिरक्षितम् ॥", translit: "bhīma-abhirakṣitam॥", guide: "protected by Bhīma"}
    ],
    meaningOrder: [2, 3, 1, 5, 6, 4]
  }
];
