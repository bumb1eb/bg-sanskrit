window.DICT = {


// -----------------------------
// GLOBAL NOUNS
// -----------------------------
const NOUNS = {
  "धृतराष्ट्र": { type: "noun", meaning: "Dhritarashtra", case: "Nominative (1st)" },
  "युयुत्सवः": { type: "noun", meaning: "desiring to fight", case: "Nominative (1st)" },
  "मामकाः": { type: "noun", meaning: "my people", case: "Nominative (1st)" },
  "पाण्डवाः": { type: "noun", meaning: "sons of Pandu", case: "Nominative (1st)" },
  "पाण्डवः": { type: "noun", meaning: "Pandava", case: "Nominative (1st)" },
  "अनीकम्": { type: "noun", meaning: "army", case: "Accusative (2nd)" },
  "सञ्जय": { type: "noun", meaning: "Sanjaya", case: "Vocative (8th)" },
  "पाण्डवानीकं": { type: "noun", meaning: "Pandava army", case: "Accusative (2nd)" },
  "दुर्योधनः": { type: "noun", meaning: "Duryodhana", case: "Nominative (1st)" },
  "आचार्यम्": { type: "noun", meaning: "teacher", case: "Accusative (2nd)" },
  "राजा": { type: "noun", meaning: "king", case: "Nominative (1st)" },
  "वचनम्": { type: "noun", meaning: "speech", case: "Accusative (2nd)" },
  "पाण्डुपुत्राणाम्": { type: "noun", meaning: "of the sons of Pandu", case: "Genitive (6th)" },
  "आचार्य": { type: "noun", meaning: "sir", case: "Vocative (8th)" },
  "चमूम्": { type: "noun", meaning: "army", case: "Accusative (2nd)" },
  "द्रुपदपुत्रेण": { type: "noun", meaning: "by the son of Drupada", case: "Instrumental (3rd)" },
  "शिष्येण": { type: "noun", meaning: "by disciple", case: "Instrumental (3rd)" },
  "शूराः": { type: "noun", meaning: "heroes", case: "Nominative (1st)" },
  "महेष्वासाः": { type: "noun", meaning: "great archers", case: "Nominative (1st)" },
  "इष्वासाः": { type: "noun", meaning: "archers", case: "Nominative (1st)" },
  "इष्वासः": { type: "noun", meaning: "archers", case: "Nominative (1st)" },
  "युयुधानः": { type: "noun", meaning: "Yuyudhana", case: "Nominative (1st)" },
  "युयुधानो": { type: "noun", meaning: "Yuyudhana", case: "Nominative (1st)" },
  "विराटः": { type: "noun", meaning: "Virata", case: "Nominative (1st)" },
  "द्रुपदः": { type: "noun", meaning: "Drupada", case: "Nominative (1st)" },
  "रथः": { type: "noun", meaning: "chariot", case: "Nominative (1st)" },
  "धृष्टकेतुः": { type: "noun", meaning: "Dhrishtaketu", case: "Nominative (1st)" },
  "धृष्टद्युम्नः": { type: "noun", meaning: "Dhṛṣṭadyumna", case: "Nominative (1st)" },
  "धृष्टद्युम्नो": { type: "noun", meaning: "Dhṛṣṭadyumna", case: "Nominative (1st)" },
  "चेकितानः": { type: "noun", meaning: "Cekitana", case: "Nominative (1st)" },
  "काशिराजः": { type: "noun", meaning: "King of Kashi", case: "Nominative (1st)" },
  "पुरुजित्": { type: "noun", meaning: "Purujit", case: "Nominative (1st)" },
  "कुन्तिभोजः": { type: "noun", meaning: "Kuntibhoja", case: "Nominative (1st)" },
  "शैब्यः": { type: "noun", meaning: "Shaibya", case: "Nominative (1st)" },
  "नरपुङ्गवः": { type: "noun", meaning: "best among men", case: "Nominative (1st)" },
  "युधामन्युः": { type: "noun", meaning: "Yudhamanyu", case: "Nominative (1st)" },
  "उत्तमौजाः": { type: "noun", meaning: "Uttamaujas", case: "Nominative (1st)" },
  "सौभद्रः": { type: "noun", meaning: "son of Subhadra", case: "Nominative (1st)" },
  "सौभद्रो": { type: "noun", meaning: "son of Subhadra", case: "Nominative (1st)" },
  "द्रौपदेयाः": { type: "noun", meaning: "sons of Draupadi", case: "Nominative (1st)" },
  "नायकाः": { type: "noun", meaning: "leaders", case: "Nominative (1st)" },
  "नायका": { type: "noun", meaning: "leaders", case: "Nominative (1st)" },
  "सैन्यस्य": { type: "noun", meaning: "of the army", case: "Genitive (6th)" },
  "भीष्मः": { type: "noun", meaning: "Bhishma", case: "Nominative (1st)" },
  "कर्णः": { type: "noun", meaning: "Karna", case: "Nominative (1st)" },
  "कृपः": { type: "noun", meaning: "Kripa", case: "Nominative (1st)" },
  "अश्वत्थामा": { type: "noun", meaning: "Ashvatthama", case: "Nominative (1st)" },
  "विकर्णः": { type: "noun", meaning: "Vikarna", case: "Nominative (1st)" },
  "सौमदत्तिः": { type: "noun", meaning: "Saumadatti", case: "Nominative (1st)" },
  "बलम्": { type: "noun", meaning: "strength", case: "Accusative (2nd)" },
  "बलं": { type: "noun", meaning: "strength", case: "Accusative (2nd)" },
  "धर्मक्षेत्रे": { type: "noun", meaning: "in the field of dharma", case: "Locative (7th)" },
  "कुरुक्षेत्रे": { type: "noun", meaning: "in Kurukshetra", case: "Locative (7th)" },
  "भीमः": { type: "noun", meaning: "Bhima", case: "Nominative (1st)" },
  "अर्जुन": { type: "noun", meaning: "Arjuna", case: "Nominative (1st)" },
  "संज्ञा": { type: "noun", meaning: "designation / information", case: "Accusative (2nd)" },
  "अर्थम्": { type: "noun", meaning: "purpose", case: "Accusative (2nd)" },
  "समितिंजयः": { type: "noun", meaning: "Samitiñjaya", case: "Nominative (1st)" },
  "अन्ये": { type: "noun", meaning: "others", case: "Nominative (1st)" },
  "बहवः": { type: "noun", meaning: "many", case: "Nominative (1st)" },
  "जीविताः": { type: "noun", meaning: "lives", case: "Accusative (2nd)" },
  "युद्ध": { type: "noun", meaning: "battle", case: "Locative (7th)" },
  "विशारदाः": { type: "noun", meaning: "experts", case: "Nominative (1st)" },
  "तत्": { type: "noun", meaning: "that", case: "Nominative (1st)" },
  "अस्माकम्": { type: "noun", meaning: "our", case: "Genitive (6th)" },
  "अभिरक्षितम्": { type: "noun", meaning: "protected", case: "Instrumental (3rd)" },
  "इदम्": { type: "noun", meaning: "this", case: "Nominative (1st)" },
  "एतेषाम्": { type: "noun", meaning: "of these", case: "Genitive (6th)" },
  "भीम": { type: "noun", meaning: "Bhima", case: "Nominative (1st)" },
  "भीष्म": { type: "noun", meaning: "Bhishma", case: "Nominative (1st)" },
  "भीष्मम्": { type: "noun", meaning: "Bhishma", case: "Nominative (1st)" },
  "अर्थे": { type: "noun", meaning: "for the sake", case: "Locative (7th)" },
  "अयनेषु": { type: "noun", case: "Locative (7th)", meaning: "in the strategic points / directions" },
  "सर्वेषु": { type: "noun", case: "Locative (7th)", meaning: "in all / everywhere" },
  "पितामहः": { type: "noun", case: "Nominative (1st)", meaning: "grandfather / Bhishma" },
  "पितामह": { type: "noun", case: "Nominative (1st)", meaning: "grandfather / Bhishma" },
  "शङ्खम्": { type: "noun", case: "Accusative (2nd)", meaning: "conch" },
  "शङ्खं": { type: "noun", case: "Accusative (2nd)", meaning: "conch" },
  "शङ्खान्": { type: "noun", case: "Accusative (2nd)", meaning: "conches" },
  "कुरु": { type: "noun", case: "Accusative (2nd)", meaning: "Kuru" },
  "वृद्धः": { type: "noun", case: "Accusative (2nd)", meaning: "elder" },
  "हर्षम्": { type: "noun", case: "Accusative (2nd)", meaning: "joy" },
  "सिंह": { type: "noun", meaning: "lion" },
  "नादम्": { type: "noun", case: "Accusative (2nd)", meaning: "roar / sound" },
  "शङ्खाः": { type: "noun", meaning: "conches", case: "Nominative (1st)" },
"भेर्यः": { type: "noun", meaning: "kettledrums", case: "Nominative (1st)" },
"पणवानक": { type: "noun", meaning: "drum / instrument", case: null },
"गोमुखाः": { type: "noun", meaning: "trumpet-like instrument", case: "Nominative (1st)" },
"शब्दः": { type: "noun", meaning: "sound", case: "Nominative (1st)" },
"महति": { type: "noun", meaning: "large", case: "Nominative (1st)" },
"स्यन्दने": { type: "noun", meaning: "chariot", case: "Nominative (1st)" },
"हयैः": { type: "noun", meaning: "horses", case: "Instrumental (3rd plural)" },
"स्यन्दने": { type: "noun", meaning: "chariot", case: "Locative (7th singular)" },
"माधवः": { type: "noun", meaning: "Madhava (Krishna)", case: "Nominative (1st singular)" },
"पाण्डवः": { type: "noun", meaning: "Pandava (Arjuna)", case: "Nominative (1st singular)" },
"शङ्खौ": { type: "noun", meaning: "conches", case: "Accusative (2nd dual)" },
"पाञ्चजन्यम्": { type: "noun", meaning: "Panchajanya (Krishna’s conch)", case: "Accusative (2nd singular)" },
"पाञ्चजन्यं": { type: "noun", meaning: "Panchajanya (Krishna’s conch)", case: "Accusative (2nd singular)" },
"हृषीकेशः": { type: "noun", meaning: "Hrishikesha (Krishna)", case: "Nominative (1st singular)" },
"हृषीकेशं": { type: "noun", meaning: "Hrishikesha (Krishna)", case: "Nominative (1st singular)" },
"देवदत्तम्": { type: "noun", meaning: "Devadatta (Arjuna’s conch)", case: "Accusative (2nd singular)" },
"हृषीकेशो": { type: "noun", meaning: "Hrishikesha (Krishna)", case: "Nominative (1st singular)" },
"देवदत्तं": { type: "noun", meaning: "Devadatta (Arjuna’s conch)", case: "Accusative (2nd singular)" },
"धनञ्जयः": { type: "noun", meaning: "Dhananjaya (Arjuna)", case: "Nominative (1st singular)" },
"पौण्ड्रम्": { type: "noun", meaning: "Paundra (Bhima’s conch)", case: "Accusative (2nd singular)" },
"पौण्ड्रं": { type: "noun", meaning: "Paundra (Bhima’s conch)", case: "Accusative (2nd singular)" },
"महाशङ्खम्": { type: "noun", meaning: "great conch", case: "Accusative (2nd singular)" },
"भीम·कर्मा": { type: "noun", meaning: "Bhima, doer of mighty deeds", case: "Nominative (1st singular)" },
"वृक·उदरः": { type: "noun", meaning: "wolf‑bellied (Bhima)", case: "Nominative (1st singular)" },
"अनन्त": { type: "noun", meaning: "forever", case: "Accusative (2nd singular)" },
"विजयम्": { type: "noun", meaning: "victorius", case: "Accusative (2nd singular)" },
"राजा": { type: "noun", meaning: "king", case: "Nominative (1st singular)" },
"कुन्ती": { type: "noun", meaning: "Kunti", case: "Nominative (1st singular)" },
"पुत्रः": { type: "noun", meaning: "son", case: "Nominative (1st singular)" },
"युधिष्ठिरः": { type: "noun", meaning: "Yudhishthira", case: "Nominative (1st singular)" },
"नकुलः": { type: "noun", meaning: "Nakula", case: "Nominative (1st singular)" },
"सहदेवः": { type: "noun", meaning: "Sahadeva", case: "Nominative (1st singular)" },
"सुघोषम्": { type: "noun", meaning: "Sughosha (Nakula’s conch)", case: "Accusative (2nd singular)" },
"मणिपुष्पकौ": { type: "noun", meaning: "Manipushpaka (Sahadeva’s conch)", case: "Accusative (2nd dual)" },
"हृषीकेशः": { type: "noun", meaning: "Hṛṣīkeśa", case: "Nominative (1st)" },
"हृषीकेशम्": { type: "noun", meaning: "Hṛṣīkeśa", case: "Accusative (2nd)" },
"धनञ्जयः": { type: "noun", meaning: "Dhanañjaya", case: "Nominative (1st)" },
"भीमकर्मा": { type: "noun", meaning: "Bhīma of mighty deeds", case: "Nominative (1st)" },
"वृकोदरः": { type: "noun", meaning: "wolf‑bellied one (Bhīma)", case: "Nominative (1st)" },
"राजा": { type: "noun", meaning: "king", case: "Nominative (1st)" },
"युधिष्ठिरः": { type: "noun", meaning: "Yudhiṣṭhira", case: "Nominative (1st)" },
"नकुलः": { type: "noun", meaning: "Nakula", case: "Nominative (1st)" },
"सहदेवः": { type: "noun", meaning: "Sahadeva", case: "Nominative (1st)" },
"काश्यः": { type: "noun", meaning: "Kāśya", case: "Nominative (1st)" },
"शिखण्डी": { type: "noun", meaning: "Śikhaṇḍin", case: "Nominative (1st)" },
"धृष्टद्युम्नः": { type: "noun", meaning: "Dhṛṣṭadyumna", case: "Nominative (1st)" },
"विराटः": { type: "noun", meaning: "Virāṭa", case: "Nominative (1st)" },
"सात्यकिः": { type: "noun", meaning: "Sātyaki", case: "Nominative (1st)" },
"द्रुपदः": { type: "noun", meaning: "Drupada", case: "Nominative (1st)" },
"द्रुपदो": { type: "noun", meaning: "Drupada", case: "Nominative (1st)" },
"द्रौपदेयाः": { type: "noun", meaning: "sons of Draupadī", case: "Nominative (1st)" },
"सौभद्रः": { type: "noun", meaning: "Saubhadra (Abhimanyu)", case: "Nominative (1st)" },
"घोषः": { type: "noun", meaning: "sound", case: "Nominative (1st)" },
"घोषो": { type: "noun", meaning: "sounds", case: "Nominative (1st)" },
"धार्तराष्ट्राणाम्": { type: "noun", meaning: "of the sons of Dhṛtarāṣṭra", case: "Genitive (6th)" },
"धार्तराष्ट्रान्": { type: "noun", meaning: "of the sons of Dhṛtarāṣṭra", case: "Genitive (6th)" },
"हृदयानि": { type: "noun", meaning: "hearts", case: "Accusative (2nd)" },
"नभः": { type: "noun", meaning: "sky", case: "Nominative (1st)" },
"कपि": { type: "noun", meaning: "monkey", case: "Nominative (1st)" },
"ध्वजः": { type: "noun", meaning: "flag or banner", case: "Nominative (1st)" },
"पृथिवीम्": { type: "noun", meaning: "earth", case: "Accusative (2nd)" },
"पृथिवी": { type: "noun", meaning: "earth", case: "Accusative (2nd)" },
"पृथिवीं": { type: "noun", meaning: "earth", case: "Accusative (2nd)" },
"मही": { type: "noun", meaning: "earth", case: "null" },
"पते": { type: "noun", meaning: "lord", case: "null" },
"पाण्डवः": { type: "noun", meaning: "son of Pāṇḍu", case: "Nominative (1st)" },
"वाक्यम्": { type: "noun", meaning: "word", case: "Accusative (2nd)" },
"इदम्": { type: "noun", meaning: "this", case: "Accusative (2nd)" },
"अभि": { type: "noun", meaning: "all around", case: null },
"व्यवस्थितान्": { type: "noun", meaning: "arrangements", case: "Nominative (1st)" },
"धनुः": { type: "noun", meaning: "bow", case: "Accusative (2nd)" },
"शस्त्र": { type: "noun", meaning: "weapon", case: null },
"सम्पाते": { type: "noun", meaning: "in the clash / in the onset", case: "Locative (7th)" },
"पितृ": { type: "noun", meaning: "father", case: "Nominative (1st)" },
"नाथ": { type: "noun", meaning: "protector / lord", case: "Nominative (1st)" },
"सखीन्": { type: "noun", meaning: "friends", case: "Accusative (2nd plural)" },
"रथोत्तमम्": { type: "noun", meaning: "excellent chariot", case: "Accusative (2nd)" },
"रथं": { type: "noun", meaning: "chariot", case: "Accusative (2nd)" },
"रथम्": { type: "noun", meaning: "chariot", case: "Accusative (2nd)" },
"अर्जुनः": { type: "noun", meaning: "Arjuna", case: "Nominative (1st)" },
"भारत": { type: "noun", meaning: "O descendant of Bharata", case: "Vocative" },
"सञ्जयः": { type: "noun", meaning: "Sanjaya", case: "Nominative (1st)" },
"भीष्मद्रोणप्रमुखत": { type: "noun", meaning: "before Bhishma and Drona", case: "Ablative (5th)" },
"सर्वेषां": { type: "noun", meaning: "of all", case: "Genitive (6th plural)" },
"महीक्षिताम्": { type: "noun", meaning: "kings / rulers of the earth", case: "Accusative (2nd plural)" },
"पार्थ": { type: "noun", meaning: "O Partha", case: "Vocative" },
"द्रोण": { type: "noun", meaning: "Drona", case: "Nominative (1st)" },
"क्षिताम्": { type: "noun", meaning: "earth / land", case: "Accusative (2nd)" },
"पितामहान्": { type: "noun", meaning: "grandfathers", case: "Accusative (2nd plural)" },
"आचार्यान्": { type: "noun", meaning: "teachers", case: "Accusative (2nd plural)" },
"मातुलान्": { type: "noun", meaning: "maternal uncles", case: "Accusative (2nd plural)" },
"भ्रातॄन्": { type: "noun", meaning: "brothers", case: "Accusative (2nd plural)" },
"पुत्रान्": { type: "noun", meaning: "sons", case: "Accusative (2nd plural)" },
"पौत्रान्": { type: "noun", meaning: "grandsons", case: "Accusative (2nd plural)" },
"श्वशुरान्": { type: "noun", meaning: "fathers‑in‑law", case: "Accusative (2nd plural)" },
"सुहृदः": { type: "noun", meaning: "well‑wishers / friends", case: "Nominative (1st plural)" },
"कौन्तेय": { type: "noun", meaning: "son of Kunti", case: "Vocative" },
"कौन्तेयः": { type: "noun", meaning: "son of Kunti", case: "Nominative (1st)" },
"बन्धून्": { type: "noun", meaning: "kinsmen", case: "Accusative (2nd plural)" },
"स्वजनं": { type: "noun", meaning: "one's own people", case: "Accusative (2nd)" },
"कृष्ण": { type: "noun", meaning: "Krishna", case: "Vocative" },
"गात्राणि": { type: "noun", meaning: "limbs", case: "Nominative (1st plural)" },
"मुखं": { type: "noun", meaning: "mouth", case: "Accusative (2nd)" },
"शरीरे": { type: "noun", meaning: "in the body", case: "Locative (7th)" },
"रोम": { type: "noun", meaning: "hair", case: "Nominative (1st)" },
"हर्षः": { type: "noun", meaning: "thrill / excitement", case: "Nominative (1st)" },
"गाण्डीवं": { type: "noun", meaning: "Gandiva bow", case: "Accusative (2nd)" },
"हस्तात्": { type: "noun", meaning: "from the hand", case: "Ablative (5th)" },
"त्वक्": { type: "noun", meaning: "skin", case: "Nominative (1st)" },
"मनः": { type: "noun", meaning: "mind", case: "Nominative (1st)" },
"सेनयोः": { type: "noun", meaning: "of the armies", case: "Genitive (6th dual)" },
"उभयोः": { type: "noun", meaning: "of both", case: "Genitive (6th dual)" },
"मध्ये": { type: "noun", meaning: "in the middle", case: "Locative (7th)" },
"अच्युत": { type: "noun", meaning: "Acyuta (Krishna)", case: "Vocative" },
"एतान्": { type: "noun", meaning: "these", case: "Accusative (2nd plural)" },
"योद्धु": { type: "noun", meaning: "fighter / warrior", case: "Stem form" },
"कामान्": { type: "noun", meaning: "desires", case: "Accusative (2nd plural)" },
"रण": { type: "noun", meaning: "battle / war", case: "Nominative (1st)" },
"समुद्यमे": { type: "noun", meaning: "undertaking / effort", case: "Locative (7th)" },
"योत्स्यमानान्": { type: "noun", meaning: "those about to fight", case: "Accusative (2nd plural)" },
"धार्तराष्ट्रस्य": { type: "noun", meaning: "of Dhṛtarāṣṭra's son", case: "Genitive (6th)" },
"दुर्बुद्धेः": { type: "noun", meaning: "of the evil‑minded one", case: "Genitive (6th)" },
"युद्धे": { type: "noun", meaning: "in battle", case: "Locative (7th)" },
"गुडाकेशेन": { type: "noun", meaning: "by Guḍākeśa", case: "Instrumental (3rd)" },
"भारत": { type: "noun", meaning: "O Bhārata", case: "Vocative" },
"रथ": { type: "noun", meaning: "chariot", case: "Nominative (1st)" },
"सर्वेषाम्": { type: "noun", meaning: "of all", case: "Genitive (6th plural)" },
"क्षिताम्": { type: "noun", meaning: "earth / land", case: "Accusative (2nd)" },
"पार्थः": { type: "noun", meaning: "Partha (Arjuna)", case: "Nominative (1st)" },
"कुरून्": { type: "noun", meaning: "the Kurus", case: "Accusative (2nd plural)" },
"स्थितान्": { type: "noun", meaning: "those standing", case: "Accusative (2nd plural)" },
"सर्वान्": { type: "noun", meaning: "all (people)", case: "Accusative (2nd plural)" },
"इमम्": { type: "noun", meaning: "this", case: "Accusative (2nd)" },
"जनम्": { type: "noun", meaning: "people", case: "Accusative (2nd)" },
"मुखम्": { type: "noun", meaning: "mouth", case: "Accusative (2nd)" },
"गाण्डीवम्": { type: "noun", meaning: "Gandiva bow", case: "Accusative (2nd)" },
"चिकीर्षवः": { type: "noun", meaning: "those desiring to act / wishing to do", case: "Nominative (1st plural)" },
"द्विज": { type: "noun", meaning: "twice‑born (Brahmin)", case: "Nominative (1st)" },
"महारथः": { type: "noun", meaning: "great chariot‑warrior", case: "Nominative (1st)" },
"प्रियचिकीर्षव": { type: "noun", meaning: "those desiring to please", case: "Nominative (1st plural)" },
"चिकीर्षवः": { type: "noun", meaning: "those wishing to act / desirous to do", case: "Nominative (1st plural)" },
"नथ": { type: "noun", meaning: "protector / lord", case: "Nominative (1st)" },
"मन": { type: "noun", meaning: "mind", case: "Nominative (1st)" },
"निमित्तानि": { type: "noun", meaning: "omens", case: "Nominative (plural)" },
"विपरीतानि": { type: "noun", meaning: "adverse things", case: "Nominative (plural)" },
"केशव": { type: "noun", meaning: "Keśava (Krishna)", case: "Vocative" },
"विजयं": { type: "noun", meaning: "victory", case: "Accusative" },
"राज्यं": { type: "noun", meaning: "kingdom", case: "Accusative" },
"सुखानि": { type: "noun", meaning: "pleasures", case: "Nominative (plural)" },
"राज्येन": { type: "noun", meaning: "by the kingdom", case: "Instrumental" },
"गोविन्द": { type: "noun", meaning: "Govinda (Krishna)", case: "Vocative" },
"भोगाः": { type: "noun", meaning: "enjoyments", case: "Nominative (plural)" },
"धनानि": { type: "noun", meaning: "wealth", case: "Accusative (plural)" },
"आचार्याः": { type: "noun", meaning: "teachers", case: "Nominative (plural)" },
"पितरः": { type: "noun", meaning: "fathers", case: "Nominative (plural)" },
"पितामहाः": { type: "noun", meaning: "grandfathers", case: "Nominative (plural)" },
"मातुलाः": { type: "noun", meaning: "maternal uncles", case: "Nominative (plural)" },
"श्वशुराः": { type: "noun", meaning: "fathers-in-law", case: "Nominative (plural)" },
"पौत्राः": { type: "noun", meaning: "grandsons", case: "Nominative (plural)" },
"श्यालाः": { type: "noun", meaning: "brothers-in-law", case: "Nominative (plural)" },
"सम्बन्धिनः": { type: "noun", meaning: "relatives", case: "Nominative (plural)" },
"मधुसूदन": { type: "noun", meaning: "Madhusūdana (Krishna)", case: "Vocative" },
"त्रैलोक्यराज्यस्य": { type: "noun", meaning: "of the sovereignty of the three worlds", case: "Genitive" },
"हेतोः": { type: "noun", meaning: "for the sake / cause", case: "Genitive" },
"प्रीतिः": { type: "noun", meaning: "joy", case: "Nominative" },
"जनार्दन": { type: "noun", meaning: "Janārdana (Krishna)", case: "Vocative" },
"पापम्": { type: "noun", meaning: "sin", case: "Accusative" },
"अस्मान्": { type: "noun", meaning: "us", case: "Accusative" },
"आततायिनः": { type: "noun", meaning: "aggressors", case: "Nominative (plural)" },
"बान्धवान्": { type: "noun", meaning: "kinsmen", case: "Accusative (plural)" },
"सुखिनः": { type: "noun", meaning: "happy ones", case: "Nominative (plural)" },
"कुलक्षयकृतं": { type: "noun", meaning: "that which causes family destruction", case: "Accusative" },
"दोषं": { type: "noun", meaning: "fault", case: "Accusative" },
"पातकम्": { type: "noun", meaning: "sin", case: "Accusative" },
"कुलक्षये": { type: "noun", meaning: "in the destruction of the family", case: "Locative" },
"कुलधर्माः": { type: "noun", meaning: "family duties", case: "Nominative (plural)" },
"सनातनाः": { type: "noun", meaning: "eternal ones", case: "Nominative (plural)" },
"अधर्मे": { type: "noun", meaning: "in unrighteousness", case: "Locative" },
"नष्टे": { type: "noun", meaning: "when destroyed", case: "Locative" },
"कुलं": { type: "noun", meaning: "family", case: "Accusative" },
"कृत्स्नम्": { type: "noun", meaning: "entire / whole", case: "Accusative" },
"अधर्मः": { type: "noun", meaning: "unrighteousness", case: "Nominative" },
"श्रेयः": { type: "noun", meaning: "welfare, good", case: "Nominative" },
"आहवे": { type: "noun", meaning: "in battle", case: "Locative" },
"भोगैः": { type: "noun", meaning: "by enjoyments", case: "Instrumental (plural)" },
"जीवितेन": { type: "noun", meaning: "by life", case: "Instrumental" },
"प्राणान्": { type: "noun", meaning: "lives", case: "Accusative (plural)" },
"पुत्राः": { type: "noun", meaning: "sons", case: "Nominative (plural)" },
"घ्नतः": { type: "noun", meaning: "one who slays", case: "Genitive / Ablative" },
"मधु": { type: "noun", meaning: "Madhu (demon)", case: "Accusative" },
"सूदन": { type: "noun", meaning: "destroyer", case: "Vocative (as epithet)" },
"त्रि": { type: "noun", meaning: "three", case: null },
"लोक्य": { type: "noun", meaning: "world-related / of the worlds", case: null },
"राज्यस्य": { type: "noun", meaning: "of the kingdom", case: "Genitive" },
"कृते": { type: "noun", meaning: "for the sake of", case: "Locative" },
"अर्हाः": { type: "noun", meaning: "worthy ones", case: "Nominative (plural)" },
"लोभ": { type: "noun", meaning: "greed", case: "Nominative" },
"उपहत": { type: "noun", meaning: "overpowered / struck down", case: null },
"चेतसः": { type: "noun", meaning: "mind", case: "Genitive" },
"कुल": { type: "noun", meaning: "family", case: "Nominative" },
"क्षय": { type: "noun", meaning: "destruction", case: "Nominative" },
"कृतम्": { type: "noun", meaning: "that which is done / made", case: "Accusative" },
"दोषम्": { type: "noun", meaning: "fault", case: "Accusative" },
"मित्र": { type: "noun", meaning: "friend", case: "Nominative" },
"द्रोहे": { type: "noun", meaning: "in betrayal", case: "Locative" },
"ज्ञेयम्": { type: "noun", meaning: "that which is to be known", case: "Accusative" },
"अस्माभिः": { type: "noun", meaning: "by us", case: "Instrumental" },
"पापात्": { type: "noun", meaning: "from sin", case: "Ablative" },
"क्षये": { type: "noun", meaning: "in destruction", case: "Locative" },
"धर्माः": { type: "noun", meaning: "duties", case: "Nominative (plural)" },
"उत": { type: "noun", meaning: "indeed / moreover", case: null },
"माधव": { type: "noun", meaning: "Mādhava (Krishna)", case: "Vocative" }











  
};



// -----------------------------
// GLOBAL VERBS
// -----------------------------
const VERBS = {
  "उवाच": { type: "verb", meaning: "said" },
  "समवेता": { type: "verb", meaning: "assembled" },
  "समवेताः": { type: "verb", meaning: "assembled" },
  "दृष्ट्वा": { type: "verb", meaning: "having seen" },
  "उपसङ्गम्य": { type: "verb", meaning: "approaching" },
  "अब्रवीत्": { type: "verb", meaning: "said" },
  "पश्य": { type: "verb", meaning: "behold" },
  "निबोध": { type: "verb", meaning: "know" },
  "ब्रवीमि": { type: "verb", meaning: "I speak" },
  "अकुर्वत": { type: "verb", meaning: "did they do" },
  "त्यक्त": { type: "verb", meaning: "having given up" },
  "अवस्थिताः": { type: "verb", case: "Nominative (1st)", meaning: "being stationed / positioned" },
  "अभिरक्षन्तु": { type: "verb", case: "Nominative (1st)", meaning: "must protect" },
  "दध्मौ": { type: "verb", meaning: "blew / sounded" },
  "सञ्जनयन्": { type: "verb", meaning: "producing / generating" },
  "अभ्यहन्यन्त": { type: "verb", meaning: "were struck / were beaten", case: null },
"अभवत्": { type: "verb", meaning: "became", case: null },
"युक्ते": { type: "verb", meaning: "joined / yoked", case: "" },
"स्थितौ": { type: "verb", meaning: "standing / positioned", case: "" },
"प्रदध्मतुः": { type: "verb", meaning: "blew (dual)", case: "" },
"दध्मौ": { type: "verb", meaning: "blew (singular)", case: "" },
"दध्मौ": { type: "verb", meaning: "blew", case: null },
"दध्मुः": { type: "verb", meaning: "they blew", case: null },
"व्यदारयत्": { type: "verb", meaning: "tore apart", case: null },
"अनुनादयन्": { type: "verb", meaning: "reverberated", case: null },
"आह": { type: "verb", meaning: "said/spoke", case: null },
"दृष्ट्वा": { type: "verb", meaning: "having seen", case: null },
"उद्यम्य": { type: "verb", meaning: "raising", case: null },
"दध्मौ": { type: "verb", meaning: "blew", case: null },
"दध्मुः": { type: "verb", meaning: "they blew", case: null },
"अदारयत्": { type: "verb", meaning: "tore apart", case: null },
"अनुनादयन्": { type: "verb", meaning: "reverberated", case: null },
"आह": { type: "verb", meaning: "said/spoke", case: null },
"दृष्ट्वा": { type: "verb", meaning: "having seen", case: null },
"उद्यम्य": { type: "verb", meaning: "raising", case: null },
"विषीदन्": { type: "verb", meaning: "grieving / sorrowing", case: null },
"अवेक्षे": { type: "verb", meaning: "I observe / I look", case: null },
"उक्तः": { type: "verb", meaning: "was said / was spoken", case: null },
"स्थापयित्वा": { type: "verb", meaning: "having placed", case: null },
"स्थापय": { type: "verb", meaning: "place!", case: null },
"निरीक्षे": { type: "verb", meaning: "I observe", case: null },
"अपश्यत्": { type: "verb", meaning: "he saw", case: null },
"समीक्ष्य": { type: "verb", meaning: "having seen", case: null },
"सीदन्ति": { type: "verb", meaning: "sink / collapse", case: null },
"परिशुष्यति": { type: "verb", meaning: "dries up", case: null },
"वेपथुः": { type: "verb", meaning: "trembles", case: null },
"जायते": { type: "verb", meaning: "arises", case: null },
"स्रंसते": { type: "verb", meaning: "slips", case: null },
"परिदह्यते": { type: "verb", meaning: "burns", case: null },
"शक्नोमि": { type: "verb", meaning: "I am able", case: null },
"अवस्थातुम्": { type: "verb", meaning: "to stand firm", case: null },
"भ्रमति": { type: "verb", meaning: "whirls / reels", case: null },
"उवाच": { type: "verb", meaning: "said", case: null },
"अवस्थितान्": { type: "verb", meaning: "standing / positioned", case: null },
"योद्धव्यम्": { type: "verb", meaning: "must be fought", case: null },
"समवेतान्": { type: "verb", meaning: "assembled", case: null },
"आविष्टः": { type: "verb", meaning: "overcome / filled", case: null },
"शुष्यति": { type: "verb", meaning: "dries up", case: null },
"दह्यते": { type: "verb", meaning: "burns", case: null },
"पश्यामि": { type: "verb", meaning: "I see", case: null },
"अनुपश्यामि": { type: "verb", meaning: "I do not perceive", case: null },
"हत्वा": { type: "verb", meaning: "having slain", case: null },
"काङ्क्षे": { type: "verb", meaning: "I desire", case: null },
"काङ्क्षितम्": { type: "verb", meaning: "desired", case: null },
"इच्छामि": { type: "verb", meaning: "I wish", case: null },
"निहत्य": { type: "verb", meaning: "having slain", case: null },
"स्यात्": { type: "verb", meaning: "would be", case: null },
"आश्रयेत्": { type: "verb", meaning: "would cling", case: null },
"पश्यन्ति": { type: "verb", meaning: "they see", case: null },
"प्रणश्यन्ति": { type: "verb", meaning: "perish", case: null },
"अभिभवति": { type: "verb", meaning: "overwhelms", case: null },
"त्यक्त्वा": { type: "verb", meaning: "having abandoned", case: null },
"निवर्तितुम्": { type: "verb", meaning: "to turn away", case: null },
"नश्यन्ति": { type: "verb", meaning: "perish", case: null },
"पश्यद्भिः": { type: "verb", meaning: "by those who see", case: "Instrumental (participle)",
"हन्तुम्": { type: "verb", meaning: "to slay", case: null },
"हन्तुं": { type: "verb", meaning: "to slay", case: null },   // alternate spelling
"स्याम": { type: "verb", meaning: "may I be / would I be", case: null }


 }








};

// -----------------------------
// GLOBAL PRONOUNS
// -----------------------------
const PRONOUNS = {
  "किम्": { type: "pronoun", meaning: "what" },
  "तव": { type: "pronoun", meaning: "your" },
  "एताम्": { type: "pronoun", meaning: "this" },
  "सर्वे": { type: "pronoun", meaning: "all" },
  "अस्माकम्": { type: "pronoun", meaning: "our" },
  "अस्माकं": { type: "pronoun", meaning: "our" },
  "ते": { type: "pronoun", meaning: "to you" },
  "अन्ये": { type: "pronoun", meaning: "others" },
  "बहवः": { type: "pronoun", meaning: "many" },
  "इदम्": { type: "pronoun", meaning: "this" },
  "एतेषाम्": { type: "pronoun", meaning: "of these" },
  "भवान्": { type: "pronoun", meaning: "you (honorific)" },
  "तदा": { type: "pronoun", meaning: "then" },
  "सर्व": { type: "pronoun", meaning: "all" },
  "तान्": { type: "pronoun", meaning: "you" },
  "मम": { type: "pronoun", meaning: "mine" },
"अन्ये": { type: "pronoun", meaning: "others" },
"सर्वे": { type: "pronoun", meaning: "all" },
"तत्": { type: "pronoun", meaning: "that" },
"अस्माकम्": { type: "pronoun", meaning: "our" },
"इदम्": { type: "pronoun", meaning: "this" },
"एतेषाम्": { type: "pronoun", meaning: "of these" },
"मदर्थे": { type: "pronoun", meaning: "for my sake" },
"मत्": { type: "pronoun", meaning: "my" },
"भवन्तः": { type: "pronoun", case: "Nominative (1st)", meaning: "you" },
"तस्य": { type: "pronoun", case: "Genitive (6th)", meaning: "his" },
"सः": { type: "pronoun", meaning: "he / that", case: "Nominative (1st)" },
"स": { type: "pronoun", meaning: "he / that", case: "Nominative (1st)" },
"इदम्": { type: "pronoun", meaning: "this", case: "Accusative (2nd)" },
"मे": { type: "pronoun", meaning: "my / for me", case: "Genitive / Dative" },
"अहम्": { type: "pronoun", meaning: "I", case: "Nominative (1st)" },
"ये": { type: "pronoun", meaning: "those who", case: "Nominative (1st plural)" },
"एते": { type: "pronoun", meaning: "these", case: "Nominative (1st plural)" },
"स्व": { type: "pronoun", meaning: "one's own", case: "Indeclinable pronoun" },
"न": { type: "pronoun", meaning: "not", case: null },   // functions as negation but stored in pronoun block in your DICT
"य": { type: "pronoun", meaning: "who / which", case: "Nominative (1st)" },
"किं": { type: "pronoun", meaning: "what", case: null },
"नो": { type: "pronoun", meaning: "to us", case: null },
"त": { type: "pronoun", meaning: "those", case: null },
"इमे": { type: "pronoun", meaning: "these", case: null },
"का": { type: "pronoun", meaning: "what (f.)", case: null },
"वयं": { type: "pronoun", meaning: "we", case: null },
"कथं": { type: "pronoun", meaning: "how", case: null },
"येषाम्": { type: "pronoun", meaning: "of whom", case: null }








  
 
};

// -----------------------------
// GLOBAL ADJECTIVES
// -----------------------------
const ADJECTIVES = {
  "महतीं": { type: "adjective", meaning: "great" },
  "महतीम्": { type: "adjective", meaning: "great" },
  "धीमता": { type: "adjective", meaning: "intelligent" },
  "समाः": { type: "adjective", meaning: "equal" },
  "वीर्यवान्": { type: "adjective", meaning: "powerful" },
  "विक्रान्तः": { type: "adjective", meaning: "valiant" },
  "विशिष्टा": { type: "adjective", meaning: "distinguished" },
  "विशिष्टाः": { type: "adjective", meaning: "distinguished" },
  "अपर्याप्तम्": { type: "adjective", meaning: "beyond sufficient" },
  "व्यूढं": { type: "adjective", meaning: "arrayed" },
  "व्यूढां": { type: "adjective", meaning: "arrayed" },
  "पर्याप्तम्": { type: "adjective", meaning: "sufficient" },
  "महा": { type: "adjective", meaning: "great" },
  "विक्रान्त": { type: "adjective", meaning: "brave" },
  "महारथाः": { type: "adjective", meaning: "great warriors" },
  "द्विज-उत्तम": { type: "adjective", meaning: "twice born" },
  "बहवः": { type: "adjective", meaning: "many" },
"बहव": { type: "adjective", meaning: "many" },
"शूरा": { type: "adjective", meaning: "heroic" },
"शूराः": { type: "adjective", meaning: "heroic" },
"त्यक्त": { type: "adjective", meaning: "abandoned" },
"नाना": { type: "adjective", meaning: "various" },
"सर्वे": { type: "adjective", meaning: "all" },
"विशारदाः": { type: "adjective", meaning: "skilled" },
"अपर्याप्तम्": { type: "adjective", meaning: "beyond sufficient" },
"पर्याप्तम्": { type: "adjective", meaning: "sufficient" },
"समितिंजयः": { type: "adjective", meaning: "conqueror of armies" },
"अपर्याप्तं": { type: "adjective", meaning: "beyond sufficient" },
"पर्याप्तं": { type: "adjective", meaning: "sufficient" },
"अभिरक्षितम्": { type: "adjective", meaning: "protected" },
"विशारदाः": { type: "adjective", meaning: "proficient" },
"प्रतापवान्": { type: "adjective", case: "Nominative (1st)", meaning: "glorious / mighty" },
"तुमुलः": { type: "adjective", meaning: "tumultuous / loud", case: "Nominative (1st)" },
"श्वेतैः": { type: "adjective", meaning: "white", case: "Instrumental (3rd plural)" },
"महति": { type: "adjective", meaning: "great", case: "Locative (7th singular)" },
"दिव्यौ": { type: "adjective", meaning: "divine", case: "Nominative (1st dual)" },
"महाबाहुः": { type: "adjective", meaning: "mighty‑armed", case: "Nominative (1st)" },
"अपराजितः": { type: "adjective", meaning: "undefeated", case: "Nominative (1st)" },
"तुमुलः": { type: "adjective", meaning: "tumultuous", case: "Nominative (1st)" },
"परम": { type: "adjective", meaning: "supreme", case: null },
"महान्": { type: "adjective", meaning: "great", case: null },
"प्रहरणाः": {type: "adjective", meaning: "weapon‑bearing / equipped with weapons",case: "Nominative (1st)"},
"समुपस्थितम्": { type: "adjective", meaning: "present / standing near", case: "Accusative (2nd)" },
"अवस्थितान्": { type: "adjective", meaning: "standing / positioned", case: "Accusative (2nd plural)" },
"प्रिय": { type: "adjective", meaning: "dear / pleasing", case: "Nominative (1st)" },
"समागताः": { type: "adjective", meaning: "assembled / gathered", case: "Nominative (1st plural)" },
"उत्तमम्": { type: "adjective", meaning: "excellent", case: "Accusative (2nd)" },
"समागताः": { type: "adjective", meaning: "assembled", case: "Nominative (1st plural)" },
"युयुत्सुं": { type: "adjective", meaning: "desirous of battle", case: "Accusative (2nd)" },
"युयुत्सुम्": { type: "adjective", meaning: "desirous of battle", case: "Accusative (2nd)" },
"स्थितम्": { type: "adjective", meaning: "standing / positioned", case: "Accusative (2nd)" },
"समागताः": { type: "adjective", meaning: "assembled / gathered", case: "Nominative (1st plural)" },
"उत्तमम्": { type: "adjective", meaning: "excellent", case: "Accusative (2nd)" },
"प्रमुखतः": { type: "adjective", meaning: "foremost / prominent", case: "Ablative (5th)" },
"उत्तम": { type: "adjective", meaning: "excellent / highest", case: "Nominative (1st)" },
"समागता": { type: "adjective", meaning: "assembled / gathered", case: "Nominative (1st plural)" },
"विपरीतानि": { type: "adjective", meaning: "adverse", case: "Nominative (plural)" },
"सनातनाः": { type: "adjective", meaning: "eternal", case: "Nominative (plural)" }











};

// -----------------------------
// GLOBAL INDECLINABLES (AVYAYAS)
// -----------------------------
const INDECLINABLES = {
  "च": { type: "indeclinable", meaning: "and" },
  "एव": { type: "indeclinable", meaning: "indeed" },
  "तु": { type: "indeclinable", meaning: "but" },
  "अत्र": { type: "indeclinable", meaning: "here" },
  "युधि": { type: "indeclinable", meaning: "in battle" },
  "तथा": { type: "indeclinable", meaning: "likewise" },
  "समाः": { type: "indeclinable", meaning: "like" },
  "नाना": { type: "indeclinable", meaning: "various" },
  "यथाभागम्": { type: "indeclinable", meaning: "according to division / in parts" },
  "विनद्य": { type: "indeclinable", meaning: "having sounded" },
  "उच्चैः": { type: "indeclinable", meaning: "loudly / with force" },
  "ततः": { type: "indeclinable", meaning: "then", case: null },
"च": { type: "indeclinable", meaning: "and", case: null },
"सहसा": { type: "indeclinable", meaning: "suddenly", case: null },
"एव": { type: "indeclinable", meaning: "indeed / only", case: null },
"ततः": { type: "indeclinable", meaning: "then", case: null },
"हि": { type: "indeclinable", meaning: "indeeed", case: null },
"ततः": { type: "indeclinable", meaning: "then / thereafter", case: "" },
"च": { type: "indeclinable", meaning: "and", case: "" },
"एव": { type: "indeclinable", meaning: "indeed / certainly", case: "" },
"च": { type: "indeclinable", meaning: "and", case: null },
"एव": { type: "indeclinable", meaning: "indeed", case: null },
"पृथक्": { type: "indeclinable", meaning: "separately", case: null },
"अथ": { type: "indeclinable", meaning: "then", case: null },
"प्रवृत्ते": { type: "indeclinable", meaning: "when commenced", case: null },
"सर्वशः": { type: "indeclinable", meaning: "all kinds", case: null },
"कृपया": { type: "indeclinable", meaning: "with compassion / out of pity", case: null },
"सह": { type: "indeclinable", meaning: "with", case: null },
"अस्मिन्": { type: "indeclinable", meaning: "in this", case: null },
"यावत्": { type: "indeclinable", meaning: "until / as long as", case: null },
"कैः": { type: "indeclinable", meaning: "by whom", case: null },
"मया": { type: "indeclinable", meaning: "by me", case: null },
"इति": { type: "indeclinable", meaning: "thus", case: null },
"तत्र": { type: "indeclinable", meaning: "there", case: null },
"अपि": { type: "indeclinable", meaning: "also / even", case: null },
"परया": { type: "indeclinable", meaning: "with supreme (compassion)", case: null },
"इव": { type: "indeclinable", meaning: "as if", case: null },
"इति": { type: "indeclinable", meaning: "thus", case: null },
"एवम्": { type: "indeclinable", meaning: "thus / in this manner", case: null },
"समुप": { type: "indeclinable", meaning: "near / close", case: null },
"परि": { type: "indeclinable", meaning: "around / completely", case: null },
"वि": { type: "indeclinable", meaning: "apart / distinctly / intensely (prefix)", case: null },
"व": { type: "indeclinable", meaning: "and / or (particle)", case: null },
"वा": { type: "indeclinable", meaning: "or", case: null },
"नु": { type: "indeclinable", meaning: "indeed", case: null },
"तस्मात्": { type: "indeclinable", meaning: "therefore", case: null },
"कथम्": { type: "indeclinable", meaning: "how", case: null },
"नः": { type: "indeclinable", meaning: "to us", case: null },
"अधर्मे": { type: "indeclinable", meaning: "in unrighteousness", case: null },
"उत": { type: "indeclinable", meaning: "indeed / moreover", case: null }










  
  
};

};

function loadChapterSandhi(chapterSandhi) {
  Object.keys(chapterSandhi).forEach(verseNum => {
    SANDHI[verseNum] = {
      ...(SANDHI[verseNum] || {}),
      ...chapterSandhi[verseNum]
    };
  });
}


// -----------------------------
// VALIDATOR
// -----------------------------
function validateWords(sectionText, DICT) {
  const words = sectionText
    .replace(/<br>/g, " ")
    .replace(/[।|,;:.!?]/g, "")
    .split(/\s+/);

  words.forEach(w => {
    if (!DICT[w]) {
      console.warn("⚠️ Missing DICT entry:", w);
    }
  });
}

/* // -----------------------------
// AUTO-MERGE DICTIONARY
// -----------------------------
function buildDICT(currentIndex) {
  return {
    ...NOUNS,
    ...VERBS,
    ...PRONOUNS,
    ...ADJECTIVES,
    ...INDECLINABLES,
    ...(SANDHI[currentIndex + 1] || {})
  }; */
  
window.DICT = {
  ...NOUNS,
  ...VERBS,
  ...PRONOUNS,
  ...ADJECTIVES,
  ...INDECLINABLES
};

  
}



