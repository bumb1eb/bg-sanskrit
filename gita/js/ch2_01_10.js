const CH2_01_10 = [
  {
    id: 1,
    title: "श्लोक 1",
    shloka: `
      सञ्जय उवाच।<br>
      तं तथा कृपयाविष्टमश्रुपूर्णाकुलेक्षणम् ।<br>
      विषीदन्तमिदं वाक्यमुवाच मधुसूदन:॥<br>
    `,
    sandhi: `
      सञ्जय उवाच।<br>
      तं तथा कृपया·आविष्टम्·अश्रुपूर्ण·आकुल·ईक्षणम् ।<br>
      विषीदन्तम्·इदं वाक्यम्·उवाच मधुसूदनः॥<br>
    `,
    translit: `
      sañjaya uvāca।<br>
      taṃ tathā kṛpayā·āviṣṭam·aśrupūrṇa·ākula·īkṣaṇam ।<br>
      viṣīdantam·idaṃ vākyam·uvāca madhusūdanaḥ॥<br>
    `,
    translation: `
      Sañjaya spoke;<br>
      (To) him, thus, compassion‑entered, tear‑filled, agitated‑eyed;<br>
      (To the) grieving one, word spoke, Madhusūdana. <br>
    `,
    parts: [
      {id: 1, role: "Speaker", sandhi: "सञ्जय उवाच।", translit: "sañjaya uvāca।", guide: "Sañjaya said"},
      {id: 2, role: "Person addressed", sandhi: "तं तथा", translit: "taṃ tathā", guide: "to him (Arjuna), thus"},
      {id: 3, role: "Description or quality", sandhi: "कृपया·आविष्टम्·अश्रुपूर्ण·आकुल·ईक्षणम् ।", translit: "kṛpayā·āviṣṭam·aśrupūrṇa·ākula·īkṣaṇam ।", guide: "overcome with pity, with eyes filled with tears and agitated"},
      {id: 4, role: "Description or quality", sandhi: "विषीदन्तम्", translit: "viṣīdantam", guide: "grieving"},
      {id: 5, role: "What happens?", sandhi: "इदं वाक्यम्·उवाच", translit: "idaṃ vākyam·uvāca", guide: "spoke these words"},
      {id: 6, role: "Who acts?", sandhi: "मधुसूदनः॥", translit: "madhusūdanaḥ॥", guide: "Madhusūdana (Kṛṣṇa)"}
    ],
    meaningOrder: [1, 6, 5, 2, 3, 4]
  },

  {
    id: 2,
    title: "श्लोक 2",
    shloka: `
      श्रीभगवानुवाच ।<br>
      कुतस्त्वा कश्मलमिदं विषमे समुपस्थितम्  ।<br>
      अनार्यजुष्टमस्वर्ग्यमकीर्तिकरमर्जुन ॥<br>
    `,
    sandhi: `
      श्रीभगवान् उवाच।<br>
      कुतः·त्वा·कश्मलम्·इदं विषमे·समुपस्थितम् ।<br>
      अनार्य·जुष्टम्·अस्वर्ग्यम्·अकीर्ति·करम्·अर्जुन॥<br>
    `,
    translit: `
      śrībhagavān uvāca।<br>
      kutaḥ·tvā·kaśmalam·idaṃ viṣame·samupasthitam ।<br>
      anārya·juṣṭam·asvargyam·akīrti·karam·arjuna॥<br>
    `,
    translation: `
      The Lord spoke;<br>
      Where from, upon you, this dirty stuff, in adversity (has) arisen ;<br>
      Un‑Aryan, un-heavenly, infamy‑bringing, O Arjuna. <br>
    `,
    parts: [
      {id: 1, role: "Speaker", sandhi: "श्रीभगवान् उवाच।", translit: "śrībhagavān uvāca।", guide: "The Blessed Lord said"},
      {id: 2, role: "Question", sandhi: "कुतः·त्वा·कश्मलम्·इदं", translit: "kutaḥ·tvā·kaśmalam·idaṃ", guide: "whence has this delusion come upon you"},
      {id: 3, role: "Situation or context", sandhi: "विषमे·समुपस्थितम् ।", translit: "viṣame·samupasthitam ।", guide: "arising at this critical hour"},
      {id: 4, role: "Description or quality", sandhi: "अनार्य·जुष्टम्·अस्वर्ग्यम्·अकीर्ति·करम्", translit: "anārya·juṣṭam·asvargyam·akīrti·karam", guide: "unworthy of the noble, leading away from heaven, and causing disgrace"},
      {id: 5, role: "Person addressed", sandhi: "अर्जुन॥", translit: "arjuna॥", guide: "O Arjuna"}
    ],
    meaningOrder: [1, 5, 2, 3, 4]
  },

  {
    id: 3,
    title: "श्लोक 3",
    shloka: `
      क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते ।<br>
      क्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप ॥<br>
    `,
    sandhi: `
      क्लैब्यं मा स्म गमः पार्थ; न·एतत·त्वयि·उपपद्यते ।<br>
      क्षुद्रं हृदय·दौर्बल्यं·त्यक्त्वा उत्तिष्ठ परन्तप॥<br>
    `,
    translit: `
      klaibyaṃ mā sma gamaḥ pārtha; na·etat·tvayi·upapadyate ।<br>
      kṣudraṃ hṛdaya·daurbalyaṃ tyaktvā·uttiṣṭha parantapa॥<br>
    `,
    translation: `
      Unmanliness, do not go to, O Pārtha; not this you befits;<br>
      Petty heart‑weakness, having abandoned, arise, O scorcher of foes. <br>
    `,
    parts: [
      {id: 1, role: "Guidance / Advice", sandhi: "क्लैब्यं मा स्म गमः", translit: "klaibyaṃ mā sma gamaḥ", guide: "do not yield to unmanliness"},
      {id: 2, role: "Person addressed", sandhi: "पार्थ;", translit: "pārtha;", guide: "O Pārtha"},
      {id: 3, role: "Reason / Because", sandhi: "न·एतत·त्वयि·उपपद्यते ।", translit: "na·etat·tvayi·upapadyate ।", guide: "this does not befit you"},
      {id: 4, role: "Guidance / Advice", sandhi: "क्षुद्रं हृदय·दौर्बल्यं·त्यक्त्वा", translit: "kṣudraṃ hṛdaya·daurbalyaṃ tyaktvā", guide: "casting off this petty weakness of heart"},
      {id: 5, role: "Guidance / Advice", sandhi: "उत्तिष्ठ", translit: "uttiṣṭha", guide: "arise"},
      {id: 6, role: "Person addressed", sandhi: "परन्तप॥", translit: "parantapa॥", guide: "O scorcher of foes"}
    ],
    meaningOrder: [2, 1, 3, 6, 4, 5]
  },

  {
    id: 4,
    title: "श्लोक 4",
    shloka: `
      अर्जुन उवाच ।<br>
      कथं भीष्ममहं सङ्ख्ये द्रोणं च मधुसूदन ।<br>
      इषुभिः प्रतियोत्स्यामि पूजार्हावरिसूदन ॥<br>
    `,
    sandhi: `
      अर्जुन उवाच।<br>
      कथं·भीष्मम्·अहं सङ्ख्ये द्रोणं च मधुसूदन ।<br>
      इषुभिः प्रति·योत्स्यामि पूजार्हावरि·सूदन॥<br>
    `,
    translit: `
      arjuna uvāca।<br>
      kathaṃ·bhīṣmam·ahaṃ saṅkhye droṇaṃ ca madhusūdana ।<br>
      iṣubhiḥ prati·yotsyāmi pūjāarhāvari·sūdana॥<br>
    `,
    translation: `
      Arjuna spoke;<br>
      How, Bhīṣma, shall I in battle, and Droṇa, O Madhusūdana;<br>
      With arrows, against shall fight, (those) worthy of worship, O destroyer of foes. <br>
    `,
    parts: [
      {id: 1, role: "Speaker", sandhi: "अर्जुन उवाच।", translit: "arjuna uvāca।", guide: "Arjuna said"},
      {id: 2, role: "Doubt / Dilemma", sandhi: "कथं·भीष्मम्·अहं", translit: "kathaṃ·bhīṣmam·ahaṃ", guide: "how shall I against Bhīṣma"},
      {id: 3, role: "Place or setting", sandhi: "सङ्ख्ये", translit: "saṅkhye", guide: "in battle"},
      {id: 4, role: "What is affected?", sandhi: "द्रोणं च", translit: "droṇaṃ ca", guide: "and against Droṇa"},
      {id: 5, role: "Person addressed", sandhi: "मधुसूदन ।", translit: "madhusūdana ।", guide: "O Madhusūdana"},
      {id: 6, role: "Doubt / Dilemma", sandhi: "इषुभिः प्रति·योत्स्यामि", translit: "iṣubhiḥ prati·yotsyāmi", guide: "fight back with arrows"},
      {id: 7, role: "Description or quality", sandhi: "पूजार्हौ", translit: "pūjārhau", guide: "both of whom are worthy of reverence"},
      {id: 8, role: "Person addressed", sandhi: "अरि·सूदन॥", translit: "ari·sūdana॥", guide: "O destroyer of foes"}
    ],
    meaningOrder: [1, 5, 2, 4, 3, 6, 7, 8]
  },

  {
    id: 5,
    title: "श्लोक 5",
    shloka: `
      गुरूनहत्वा हि महानुभावान् श्रेयो भोक्तुं भैक्ष्यमपीह लोक ।<br>
      हत्वार्थकामांस्तु गुरूनिहैव भुञ्जीय भोगान् रुधिरप्रदिग्धान् ॥<br>
    `,
    sandhi: `
      गुरून्·अहत्वा·हि महानुभावान् श्रेयः भोक्तुं भैक्ष्यम्·अपि·इह लोक ।<br>
      हत्वा·अर्थ·कामान्·तु गुरून्·इह·एव भुञ्जीय भोगान् रुधिर·प्रदिग्धान्॥<br>
    `,
    translit: `
      gurūn·ahatvā·hi mahā·anubhāvān śreyaḥ bhoktuṃ bhaikṣyam·api·iha loka ।<br>
      hatvā·artha·kāmān·tu gurūn·iha·eva bhuñjīya bhogān rudhira·pradigdhān॥<br>
    `,
    translation: `
      Teachers, not having killed, surely distinguished personalities, better to enjoy by begging for alms even in this world;<br>
      Having slain for wealth and desire, teachers, here indeed, (one would) enjoy pleasures blood‑smeared. <br>
    `,
    parts: [
      {id: 1, role: "Condition / If–When", sandhi: "गुरून्·अहत्वा·हि महानुभावान्", translit: "gurūn·ahatvā·hi mahā·anubhāvān", guide: "without slaying these noble-minded teachers"},
      {id: 2, role: "Doubt / Dilemma", sandhi: "श्रेयः भोक्तुं भैक्ष्यम्·अपि", translit: "śreyaḥ bhoktuṃ bhaikṣyam·api", guide: "it would be better even to live on alms"},
      {id: 3, role: "Place or setting", sandhi: "इह लोक ।", translit: "iha loka ।", guide: "in this world"},
      {id: 4, role: "Condition / If–When", sandhi: "हत्वा·अर्थ·कामान्·तु गुरून्", translit: "hatvā·artha·kāmān·tu gurūn", guide: "for by slaying these teachers who seek wealth and desires"},
      {id: 5, role: "Result / Consequence", sandhi: "इह·एव भुञ्जीय भोगान् रुधिर·प्रदिग्धान्॥", translit: "iha·eva bhuñjīya bhogān rudhira·pradigdhān॥", guide: "I would only enjoy blood-stained pleasures right here"}
    ],
    meaningOrder: [2, 3, 1, 4, 5]
  },

  {
    id: 6,
    title: "श्लोक 6",
    shloka: `
      न चैतद्विद्म: कतरन्नो गरीयो यद्वा जयेम यदि वा नो जयेयुः।<br>
      यानेव हत्वा न जिजीविषाम स्तेऽवस्थिता: प्रमुखे धार्तराष्ट्रा: ॥<br>
    `,
    sandhi: `
      न च·एतत·विद्मः कतरम्·नः गरीयो; यद्·वा जयेम यदि वा नो जयेयुः।<br>
      यान्·एव हत्वा न जिजीविषामः; ते·अवस्थिताः प्रमुखे धार्तराष्ट्राः॥<br>
    `,
    translit: `
      na ca·etat·vidmaḥ kataram·no garīyaḥ; yad·vā jayema yadi vā no jayeyuḥ।<br>
      yān·eva hatvā na jijīviṣāmaḥ; te·avasthitāḥ pramukhe dhārtarāṣṭrāḥ॥<br>
    `,
    translation: `
      Nor this we know, which for us is better; whether we conquer, or whether they conquer us;<br>
      Those (whom), indeed, having slain, (we would have) no desie to live ,they stand before us, the sons of Dhṛtarāṣṭra. <br>
    `,
    parts: [
      {id: 1, role: "Doubt / Dilemma", sandhi: "न च·एतत·विद्मः कतरम्·नः गरीयो;", translit: "na ca·etat·vidmaḥ kataram·no garīyaḥ;", guide: "nor do we know which of the two is better for us"},
      {id: 2, role: "Doubt / Dilemma", sandhi: "यद्·वा जयेम यदि वा नो जयेयुः।", translit: "yad·vā jayema yadi vā no jayeyuḥ।", guide: "whether we should conquer them or they should conquer us"},
      {id: 3, role: "Result / Consequence", sandhi: "यान्·एव हत्वा न जिजीविषामः;", translit: "yān·eva hatvā na jijīviṣāmaḥ;", guide: "whom having slain we would not wish to live"},
      {id: 4, role: "Situation or context", sandhi: "ते·अवस्थिताः प्रमुखे धार्तराष्ट्राः॥", translit: "te·avasthitāḥ pramukhe dhārtarāṣṭrāḥ॥", guide: "those very sons of Dhṛtarāṣṭra stand arrayed before us"}
    ],
    meaningOrder: [1, 2, 4, 3]
  },

  {
    id: 7,
    title: "श्लोक 7",
    shloka: `
      कार्पण्यदोषोपहतस्वभावः पृच्छामि त्वां धर्मसम्मूढचेताः <br>
      यच्छ्रेयः स्यान्निश्चितं ब्रूहि तन्मे शिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम्॥<br>
    `,
    sandhi: `
      कार्पण्य·दोष·उपहत·स्वभावः·पृच्छामि·त्वां धर्म·सम्मूढ·चेताः।<br>
      यत्·श्रेयः·स्यात्·निश्चितं·ब्रूहि·तत्·मे; शिष्यः·ते·अहं·शाधि·मां·त्वां·प्रपन्नम्॥<br>
    `,
    translit: `
      kārpaṇya·doṣa·upahata·svabhāvaḥ·pṛcchāmi·tvāṃ dharma·sammūḍha·cetāḥ।<br>
      yat·śreyaḥ·syāt·niścitaṃ·brūhi·tat·me; śiṣyaḥ·te·ahaṃ·śādhi·māṃ·tvāṃ·prapannam॥<br>
    `,
    translation: `
      (By) miserliness fault overcome in nature, I ask you, (with) duty‑confused mind;<br>
      What good, would be certainly, tell that to me; disciple of yours I am, instruct me, to you (I have) surrendered. <br>
    `,
    parts: [
      {id: 1, role: "Description or quality", sandhi: "कार्पण्य·दोष·उपहत·स्वभावः", translit: "kārpaṇya·doṣa·upahata·svabhāvaḥ", guide: "with my nature overwhelmed by the flaw of faint-heartedness"},
      {id: 2, role: "What happens?", sandhi: "पृच्छामि·त्वां", translit: "pṛcchāmi·tvāṃ", guide: "I ask You"},
      {id: 3, role: "Description or quality", sandhi: "धर्म·सम्मूढ·चेताः।", translit: "dharma·sammūḍha·cetāḥ।", guide: "with my mind bewildered about my duty"},
      {id: 4, role: "Question", sandhi: "यत्·श्रेयः·स्यात्·निश्चितं", translit: "yat·śreyaḥ·syāt·niścitaṃ", guide: "what is decisively good"},
      {id: 5, role: "Request or command", sandhi: "ब्रूहि·तत्·मे;", translit: "brūhi·tat·me;", guide: "tell that to me"},
      {id: 6, role: "Situation or context", sandhi: "शिष्यः·ते·अहं", translit: "śiṣyaḥ·te·ahaṃ", guide: "I am Your disciple"},
      {id: 7, role: "Request or command", sandhi: "शाधि·मां·त्वां·प्रपन्नम्॥", translit: "śādhi·māṃ·tvāṃ·prapannam॥", guide: "instruct me, who have surrendered unto You"}
    ],
    meaningOrder: [1, 3, 2, 4, 5, 6, 7]
  },

  {
    id: 8,
    title: "श्लोक 8",
    shloka: `
      न हि प्रपश्यामि ममापनुद्याद् यच्छोकमुच्छोषणमिन्द्रियाणाम् ।<br>
      अवाप्य भूमावसपत्नमृद्धं राज्यं सुराणामपि चाधिपत्यम् ॥<br>
    `,
    sandhi: `
      न हि प्रपश्यामि मम·अपनुद्यात् यत्·शोकम्·उच्छोषणम्·इन्द्रियाणाम् ।<br>
      अवाप्य भूमौ·असपत्नम्·ऋद्धं राज्यं सुराणाम्·अपि च·अधिपत्यम्॥<br>
    `,
    translit: `
      na hi prapaśyāmi mama·apanudyāt yatśokam·ucchoṣaṇam·indriyāṇām ।<br>
      avāpya bhūmau·asapatnam·ṛddhaṃ rājyaṃ surāṇām·api ca·adhipatyam॥<br>
    `,
    translation: `
      Not indeed I see my (grief being) dispelled , which grief (is causing) drying of the senses;<br>
      Having obtained on earth unrivaled, prosperous kingdom, and even of the gods lordship. <br>
    `,
    parts: [
      {id: 1, role: "Doubt / Dilemma", sandhi: "न हि प्रपश्यामि", translit: "na hi prapaśyāmi", guide: "for I do not see anything"},
      {id: 2, role: "What happens?", sandhi: "मम·अपनुद्यात् यत्·शोकम्", translit: "mama·apanudyāt yat·śokam", guide: "that can drive away this grief of mine"},
      {id: 3, role: "Description or quality", sandhi: "उच्छोषणम्·इन्द्रियाणाम् ।", translit: "ucchoṣaṇam·indriyāṇām ।", guide: "which is withering away my senses"},
      {id: 4, role: "Condition / If–When", sandhi: "अवाप्य भूमौ·असपत्नम्·ऋद्धं राज्यं", translit: "avāpya bhūmau·asapatnam·ṛddhaṃ rājyaṃ", guide: "even after attaining an unrivaled, prosperous kingdom on earth"},
      {id: 5, role: "Condition / If–When", sandhi: "सुराणाम्·अपि च·अधिपत्यम्॥", translit: "surāṇām·api ca·adhipatyam॥", guide: "or even sovereignty over the gods"}
    ],
    meaningOrder: [1, 2, 3, 4, 5]
  },

  {
    id: 9,
    title: "श्लोक 9",
    shloka: `
      सञ्जय उवाच ।<br>
      एवमुक्त्वा हृषीकेशं गुडाकेशः परन्तप । <br>
      न योत्स्य इति गोविन्दमुक्त्वा तूष्णीं बभूव ह ॥<br>
    `,
    sandhi: `
      सञ्जय उवाच।<br>
      एवम्·उक्त्वा·हृषीकेशं·गुडाकेशः·परन्तप ।<br>
      न·योत्स्य·इति·गोविन्दम्·उक्त्वा·तूष्णीं·बभूव·ह॥<br>
    `,
    translit: `
      sañjaya uvāca।<br>
      evam·uktvā·hṛṣīkeśaṃ·guḍākeśaḥ·parantapa ।<br>
      na·yotsya·iti·govindam·uktvā·tūṣṇīṃ·babhūva·ha॥<br>
    `,
    translation: `
      Sañjaya spoke;<br>
      Thus having said to Hṛṣīkeśa (Krishna), Guḍākeśa (Arjuna), the scorcher of foes;<br>
      “(I will) not fight,” thus to Govinda having said, silent became he (Arjuna). <br>
    `,
    parts: [
      {id: 1, role: "Speaker", sandhi: "सञ्जय उवाच।", translit: "sañjaya uvāca।", guide: "Sañjaya said"},
      {id: 2, role: "What happens?", sandhi: "एवम्·उक्त्वा·हृषीकेशं", translit: "evam·uktvā·hṛṣīkeśaṃ", guide: "having spoken thus to Hṛṣīkeśa"},
      {id: 3, role: "Who acts?", sandhi: "गुडाकेशः·परन्तप ।", translit: "guḍākeśaḥ·parantapa ।", guide: "Guḍākeśa (Arjuna), the scorcher of foes"},
      {id: 4, role: "What happens?", sandhi: "न·योत्स्य·इति·गोविन्दम्·उक्त्वा", translit: "na·yotsya·iti·govindam·uktvā", guide: "saying to Govinda, “I will not fight,”"},
      {id: 5, role: "Result / Consequence", sandhi: "तूष्णीं·बभूव·ह॥", translit: "tūṣṇīṃ·babhūva·ha॥", guide: "became silent indeed"}
    ],
    meaningOrder: [1, 3, 2, 4, 5]
  },

  {
    id: 10,
    title: "श्लोक 10",
    shloka: `
      तमुवाच हृषीकेश: प्रहसन्निव भारत ।<br>
      सेनयोरुभयोर्मध्ये विषीदन्तमिदं वच: ॥<br>
    `,
    sandhi: `
      तम्·उवाच·हृषीकेशः·प्रहसन्·इव·भारत ।<br>
      सेनयोः·उभयोः·मध्ये·विषीदन्तम्·इदं·वचः॥<br>
    `,
    translit: `
      tam·uvāca·hṛṣīkeśaḥ·prahasan·iva·bhārata ।<br>
      senayoḥ·ubhayor·madhye·viṣīdantam·idaṃ·vacaḥ॥<br>
    `,
    translation: `
      To him spoke Hṛṣīkeśa (Krishna), smiling as if, O Bhārata (Dhritarashtra);<br>
      Between the two armies, (to the) despondent one, this word. <br>
    `,
    parts: [
      {id: 1, role: "Person addressed", sandhi: "तम्", translit: "tam", guide: "to him (Arjuna)"},
      {id: 2, role: "What happens?", sandhi: "उवाच", translit: "uvāca", guide: "spoke"},
      {id: 3, role: "Speaker", sandhi: "हृषीकेशः", translit: "hṛṣīkeśaḥ", guide: "Hṛṣīkeśa (Kṛṣṇa)"},
      {id: 4, role: "Description or quality", sandhi: "प्रहसन्·इव", translit: "prahasan·iva", guide: "as if smiling"},
      {id: 5, role: "Person addressed", sandhi: "भारत ।", translit: "bhārata ।", guide: "O Bhārata (Dhṛtarāṣṭra)"},
      {id: 6, role: "Place or setting", sandhi: "सेनयोः·उभयोः·मध्ये", translit: "senayoḥ·ubhayor·madhye", guide: "in the midst of both armies"},
      {id: 7, role: "Description or quality", sandhi: "विषीदन्तम्", translit: "viṣīdantam", guide: "to the despondent one"},
      {id: 8, role: "What is affected?", sandhi: "इदं·वचः॥", translit: "idaṃ·vacaḥ॥", guide: "these words"}
    ],
    meaningOrder: [5, 3, 4, 2, 1, 7, 6, 8]
  }
];
