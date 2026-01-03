
import { VerbConjugation, VocabularyCategory } from './types';

export const ER_VERBS: VerbConjugation[] = [
  {
    verb: "Parler",
    translation: "To speak",
    forms: { je: "parle", tu: "parles", il_elle_on: "parle", nous: "parlons", vous: "parlez", ils_elles: "parlent" }
  },
  {
    verb: "Habiter",
    translation: "To live",
    forms: { je: "habite", tu: "habites", il_elle_on: "habite", nous: "habitons", vous: "habitez", ils_elles: "habitent" }
  },
  {
    verb: "Chanter",
    translation: "To sing",
    forms: { je: "chante", tu: "chantes", il_elle_on: "chante", nous: "chantons", vous: "chantez", ils_elles: "chantent" }
  },
  {
    verb: "Manger",
    translation: "To eat",
    forms: { je: "mange", tu: "manges", il_elle_on: "mange", nous: "mangeons", vous: "mangez", ils_elles: "mangent" }
  },
  {
    verb: "Étudier",
    translation: "To study",
    forms: { je: "étudie", tu: "étudies", il_elle_on: "étudie", nous: "étudions", vous: "étudiez", ils_elles: "étudient" }
  }
];

export const IR_VERBS: VerbConjugation[] = [
  {
    verb: "Finir",
    translation: "To finish",
    forms: { je: "finis", tu: "finis", il_elle_on: "finit", nous: "finissons", vous: "finissez", ils_elles: "finissent" }
  },
  {
    verb: "Choisir",
    translation: "To choose",
    forms: { je: "choisis", tu: "choisis", il_elle_on: "choisit", nous: "choisissons", vous: "choisissez", ils_elles: "choisissent" }
  },
  {
    verb: "Sortir",
    translation: "To go out",
    forms: { je: "sors", tu: "sors", il_elle_on: "sort", nous: "sortons", vous: "sortez", ils_elles: "sortent" }
  },
  {
    verb: "Partir",
    translation: "To leave",
    forms: { je: "pars", tu: "pars", il_elle_on: "part", nous: "partons", vous: "partez", ils_elles: "partent" }
  },
  {
    verb: "Dormir",
    translation: "To sleep",
    forms: { je: "dors", tu: "dors", il_elle_on: "dort", nous: "dormons", vous: "dormez", ils_elles: "dorment" }
  }
];

export const IRREGULAR_VERBS: VerbConjugation[] = [
  {
    verb: "Être",
    translation: "To be",
    forms: { je: "suis", tu: "es", il_elle_on: "est", nous: "sommes", vous: "êtes", ils_elles: "sont" }
  },
  {
    verb: "Avoir",
    translation: "To have",
    forms: { je: "ai", tu: "as", il_elle_on: "a", nous: "avons", vous: "avez", ils_elles: "ont" }
  },
  {
    verb: "Aller",
    translation: "To go",
    forms: { je: "vais", tu: "vas", il_elle_on: "va", nous: "allons", vous: "allez", ils_elles: "vont" }
  },
  {
    verb: "Faire",
    translation: "To do/make",
    forms: { je: "fais", tu: "fais", il_elle_on: "fait", nous: "faisons", vous: "faites", ils_elles: "font" }
  }
];

export const NUMBERS_DATA: { [key: number]: string } = {
  1: "un", 2: "deux", 3: "trois", 4: "quatre", 5: "cinq",
  6: "six", 7: "sept", 8: "huit", 9: "neuf", 10: "dix",
  11: "onze", 12: "douze", 13: "treize", 14: "quatorze", 15: "quinze",
  16: "seize", 17: "dix-sept", 18: "dix-huit", 19: "dix-neuf", 20: "vingt",
  21: "vingt et un", 22: "vingt-deux", 23: "vingt-trois", 24: "vingt-quatre", 25: "vingt-cinq",
  26: "vingt-six", 27: "vingt-sept", 28: "vingt-huit", 29: "vingt-neuf", 30: "trente",
  31: "trente et un", 32: "trente-deux", 33: "trente-trois", 34: "trente-quatre", 35: "trente-cinq",
  36: "trente-six", 37: "trente-sept", 38: "trente-huit", 39: "trente-neuf", 40: "quarante",
  41: "quarante et un", 42: "quarante-deux", 43: "quarante-trois", 44: "quarante-quatre", 45: "quarante-cinq",
  46: "quarante-six", 47: "quarante-sept", 48: "quarante-huit", 49: "quarante-neuf", 50: "cinquante",
  51: "cinquante et un", 52: "cinquante-deux", 53: "cinquante-trois", 54: "cinquante-quatre", 55: "cinquante-cinq",
  56: "cinquante-six", 57: "cinquante-sept", 58: "cinquante-huit", 59: "cinquante-neuf", 60: "soixante",
  61: "soixante et un", 62: "soixante-deux", 63: "soixante-trois", 64: "soixante-quatre", 65: "soixante-cinq",
  66: "soixante-six", 67: "soixante-sept", 68: "soixante-huit", 69: "soixante-neuf", 70: "soixante-dix",
  71: "soixante et onze", 72: "soixante-douze", 73: "soixante-treize", 74: "soixante-quatorze", 75: "soixante-quinze",
  76: "soixante-seize", 77: "soixante-dix-sept", 78: "soixante-dix-huit", 79: "soixante-dix-neuf", 80: "quatre-vingts",
  81: "quatre-vingt-un", 82: "quatre-vingt-deux", 83: "quatre-vingt-trois", 84: "quatre-vingt-quatre", 85: "quatre-vingt-cinq",
  86: "quatre-vingt-six", 87: "quatre-vingt-sept", 88: "quatre-vingt-huit", 89: "quatre-vingt-neuf", 90: "quatre-vingt-dix",
  91: "quatre-vingt-onze", 92: "quatre-vingt-douze", 93: "quatre-vingt-treize", 94: "quatre-vingt-quatorze", 95: "quatre-vingt-quinze",
  96: "quatre-vingt-seize", 97: "quatre-vingt-dix-sept", 98: "quatre-vingt-dix-huit", 99: "quatre-vingt-dix-neuf", 100: "cent"
};

export const VOCABULARY: VocabularyCategory[] = [
  {
    title: "Greetings & Common Phrases",
    items: [
      { french: "Bonjour", english: "Hello/Good morning", context: "Used during the day." },
      { french: "Bonsoir", english: "Good evening", context: "Used after sunset." },
      { french: "Salut", english: "Hi/Bye", context: "Informal greeting." },
      { french: "Au revoir", english: "Goodbye", context: "Formal goodbye." },
      { french: "Merci", english: "Thank you", context: "Gratitude." },
      { french: "De rien", english: "You're welcome", context: "Response to thank you." },
      { french: "S'il vous plaît", english: "Please", context: "Formal/Plural polite request." },
      { french: "S'il te plaît", english: "Please", context: "Informal polite request." },
      { french: "Pardon", english: "Sorry / Excuse me", context: "Catching someone's attention." },
      { french: "Désolé(e)", english: "Sorry", context: "Expressing regret." },
      { french: "Enchanté(e)", english: "Nice to meet you", context: "When meeting for the first time." },
      { french: "Comment ça va ?", english: "How are you?", context: "Informal question." },
      { french: "Ça va bien", english: "It's going well", context: "Common response." },
      { french: "Comment vous appelez-vous ?", english: "What is your name?", context: "Formal inquiry." }
    ]
  },
  {
    title: "Colors & Descriptors",
    items: [
      { french: "Rouge", english: "Red", context: "Une voiture rouge." },
      { french: "Bleu", english: "Blue", context: "Le ciel est bleu." },
      { french: "Vert", english: "Green", context: "L'herbe est verte." },
      { french: "Jaune", english: "Yellow", context: "Un citron jaune." },
      { french: "Noir", english: "Black", context: "Un chat noir." },
      { french: "Blanc", english: "White", context: "Une chemise blanche." },
      { french: "Gris", english: "Grey", context: "Un nuage gris." },
      { french: "Marron", english: "Brown", context: "Des chaussures marron." },
      { french: "Orange", english: "Orange", context: "Un fruit orange." },
      { french: "Petit(e)", english: "Small", context: "Un petit chien." },
      { french: "Grand(e)", english: "Big/Tall", context: "Une grande maison." },
      { french: "Nouveau / Nouvelle", english: "New", context: "Un nouveau livre." },
      { french: "Vieux / Vieille", english: "Old", context: "Une vieille voiture." },
      { french: "Beau / Belle", english: "Beautiful", context: "Un beau paysage." }
    ]
  },
  {
    title: "The Family (La Famille)",
    items: [
      { french: "La famille", english: "Family", context: "J'aime ma famille." },
      { french: "Le père", english: "Father", context: "Mon père travaille." },
      { french: "La mère", english: "Mother", context: "Ma mère cuisine." },
      { french: "Les parents", english: "Parents", context: "Mes parents sont là." },
      { french: "Le frère", english: "Brother", context: "Il a un frère." },
      { french: "La sœur", english: "Sister", context: "Elle a une sœur." },
      { french: "Le fils", english: "Son", context: "C'est mon fils." },
      { french: "La fille", english: "Daughter", context: "C'est ma fille." },
      { french: "Le grand-père", english: "Grandfather", context: "Mon grand-père est âgé." },
      { french: "La grand-mère", english: "Grandmother", context: "Ma grand-mère est gentille." },
      { french: "L'oncle", english: "Uncle", context: "Mon oncle habite ici." },
      { french: "La tante", english: "Aunt", context: "Ma tante est médecin." },
      { french: "Le cousin / La cousine", english: "Cousin", context: "Nous jouons avec nos cousins." },
      { french: "Le mari", english: "Husband", context: "Son mari est gentil." },
      { french: "La femme", english: "Wife / Woman", context: "Sa femme est française." }
    ]
  },
  {
    title: "Food & Drinks (Nourriture et Boissons)",
    items: [
      { french: "Le pain", english: "Bread", context: "Je mange du pain." },
      { french: "Le fromage", english: "Cheese", context: "La France aime le fromage." },
      { french: "Le vin", english: "Wine", context: "Un verre de vin." },
      { french: "L'eau", english: "Water", context: "Je bois de l'eau." },
      { french: "Le lait", english: "Milk", context: "Le chat boit du lait." },
      { french: "Le café", english: "Coffee", context: "Un café, s'il vous plaît." },
      { french: "Le thé", english: "Tea", context: "Elle préfère le thé." },
      { french: "Le petit-déjeuner", english: "Breakfast", context: "Le matin." },
      { french: "Le déjeuner", english: "Lunch", context: "À midi." },
      { french: "Le dîner", english: "Dinner", context: "Le soir." },
      { french: "La pomme", english: "Apple", context: "Une pomme rouge." },
      { french: "La banane", english: "Banana", context: "Une banane mûre." },
      { french: "Le poisson", english: "Fish", context: "Il mange du poisson." },
      { french: "La viande", english: "Meat", context: "Je ne mange pas de viande." },
      { french: "Le poulet", english: "Chicken", context: "Du poulet rôti." },
      { french: "Le sucre", english: "Sugar", context: "Sans sucre, merci." },
      { french: "Le sel", english: "Salt", context: "Passe-moi le sel." },
      { french: "L'œuf", english: "Egg", context: "Un œuf au plat." }
    ]
  },
  {
    title: "Places & Transport",
    items: [
      { french: "La maison", english: "House", context: "Ma maison est bleue." },
      { french: "L'appartement", english: "Apartment", context: "Un petit appartement." },
      { french: "L'école", english: "School", context: "Je vais à l'école." },
      { french: "La ville", english: "City", context: "Paris est une grande ville." },
      { french: "Le village", english: "Village", context: "Un village calme." },
      { french: "Le magasin", english: "Shop/Store", context: "Le magasin est ouvert." },
      { french: "Le supermarché", english: "Supermarket", context: "Je fais les courses." },
      { french: "Le restaurant", english: "Restaurant", context: "Un bon restaurant." },
      { french: "La rue", english: "Street", context: "Ma rue est longue." },
      { french: "La voiture", english: "Car", context: "Ma voiture est en panne." },
      { french: "Le bus", english: "Bus", context: "Je prends le bus." },
      { french: "Le train", english: "Train", context: "Le train arrive à midi." },
      { french: "Le vélo", english: "Bicycle", context: "Je fais du vélo." },
      { french: "L'avion", english: "Airplane", context: "L'avion décolle." },
      { french: "La gare", english: "Train station", context: "Où est la gare ?" },
      { french: "L'aéroport", english: "Airport", context: "Aller à l'aéroport." }
    ]
  },
  {
    title: "Days & Time",
    items: [
      { french: "Lundi", english: "Monday", context: "Le premier jour." },
      { french: "Mardi", english: "Tuesday", context: "Le deuxième jour." },
      { french: "Mercredi", english: "Wednesday", context: "Le milieu de semaine." },
      { french: "Jeudi", english: "Thursday", context: "Avant vendredi." },
      { french: "Vendredi", english: "Friday", context: "Le dernier jour de travail." },
      { french: "Samedi", english: "Saturday", context: "Le weekend." },
      { french: "Dimanche", english: "Sunday", context: "Repos." },
      { french: "Aujourd'hui", english: "Today", context: "Maintenant." },
      { french: "Demain", english: "Tomorrow", context: "Le jour après." },
      { french: "Hier", english: "Yesterday", context: "Le jour avant." },
      { french: "Le matin", english: "Morning", context: "6h à 12h." },
      { french: "L'après-midi", english: "Afternoon", context: "12h à 18h." },
      { french: "Le soir", english: "Evening", context: "18h à 22h." },
      { french: "La nuit", english: "Night", context: "Dormir." }
    ]
  },
  {
    title: "Professions",
    items: [
      { french: "Étudiant(e)", english: "Student", context: "J'étudie à l'université." },
      { french: "Professeur", english: "Teacher", context: "Il enseigne le français." },
      { french: "Médecin", english: "Doctor", context: "Le médecin m'aide." },
      { french: "Ingénieur", english: "Engineer", context: "Elle travaille dans la tech." },
      { french: "Infirmier / Infirmière", english: "Nurse", context: "À l'hôpital." },
      { french: "Avocat(e)", english: "Lawyer", context: "Il connaît la loi." },
      { french: "Vendeur / Vendeuse", english: "Seller/Clerk", context: "Dans un magasin." },
      { french: "Cuisinier / Cuisinière", english: "Cook/Chef", context: "Dans une cuisine." }
    ]
  },
  {
    title: "Weather (La Météo)",
    items: [
      { french: "Le soleil", english: "Sun", context: "Il y a du soleil." },
      { french: "La pluie", english: "Rain", context: "Il pleut." },
      { french: "Le vent", english: "Wind", context: "Il y a du vent." },
      { french: "La neige", english: "Snow", context: "Il neige en hiver." },
      { french: "Il fait beau", english: "The weather is nice", context: "Ciel bleu." },
      { french: "Il fait froid", english: "It is cold", context: "Mettre un manteau." },
      { french: "Il fait chaud", english: "It is hot", context: "Aller à la piscine." }
    ]
  }
];
