/* =========================================================
   FRENCH MASTER
   PEDAGOGY DATA — GREETINGS
   =========================================================

   BUT DU FICHIER
   -------------------------
   Ce fichier contient UNIQUEMENT les données pédagogiques
   du thème "Salutations".

   Il ne contient PAS :
   - de logique de jeu
   - de DOM
   - de localStorage
   - de rendu HTML

   Ce découpage permet :
   ✅ fichiers plus légers
   ✅ contenu pédagogique facile à modifier
   ✅ ajout futur simple
   ✅ meilleure lisibilité
   ✅ architecture pensée comme un vrai système d’apprentissage

========================================================= */

const GREETINGS_THEME = {

    /* =====================================================
       IDENTITÉ DU THÈME
    ===================================================== */

    id: 1,

    slug: "greetings",

    title: "Salutations 🙋",

    description:
        "Apprendre à saluer, se présenter et utiliser les premières formules essentielles du français.",

    difficulty: "beginner",

    color: "#667eea",



    /* =====================================================
       OBJECTIFS PÉDAGOGIQUES
    ===================================================== */

    objectives: [

        "Dire bonjour",

        "Dire au revoir",

        "Se présenter",

        "Demander le nom",

        "Comprendre les salutations courantes",

        "Utiliser les formules de politesse simples"

    ],



    /* =====================================================
       LEÇONS
    ===================================================== */

    lessons: [

        {

            id: "greetings-lesson-1",

            title: "Dire bonjour",

            introduction:
                "En français, il existe plusieurs façons de saluer selon le contexte.",

            rules: [

                "Bonjour = salutation standard",

                "Salut = informel",

                "Bonsoir = utilisé le soir",

                "Bonne nuit = avant de dormir"

            ],

            examples: [

                {
                    fr: "Bonjour !",
                    en: "Hello!"
                },

                {
                    fr: "Salut Lucas !",
                    en: "Hi Lucas!"
                },

                {
                    fr: "Bonsoir Madame.",
                    en: "Good evening Madam."
                }

            ],

            warning:
                "Attention : 'Bonne nuit' ne remplace pas 'Bonsoir'."

        },



        {

            id: "greetings-lesson-2",

            title: "Se présenter",

            introduction:
                "Pour se présenter en français, on utilise souvent 'Je m'appelle'.",

            rules: [

                "Je m'appelle = My name is",

                "Moi c'est = informal introduction",

                "Enchanté = nice to meet you"

            ],

            examples: [

                {
                    fr: "Je m'appelle Emma.",
                    en: "My name is Emma."
                },

                {
                    fr: "Moi c'est Lucas.",
                    en: "I'm Lucas."
                },

                {
                    fr: "Enchanté !",
                    en: "Nice to meet you!"
                }

            ]

        }

    ],



    /* =====================================================
       VOCABULAIRE
    ===================================================== */

    vocabulary: [

        {
            fr: "bonjour",
            en: "hello",
            phonetic: "bon-jour",
            category: "greeting",
            level: 1
        },

        {
            fr: "salut",
            en: "hi",
            phonetic: "sa-lu",
            category: "greeting",
            level: 1
        },

        {
            fr: "bonsoir",
            en: "good evening",
            phonetic: "bon-swar",
            category: "greeting",
            level: 1
        },

        {
            fr: "au revoir",
            en: "goodbye",
            phonetic: "o ruh-vwar",
            category: "farewell",
            level: 1
        },

        {
            fr: "à bientôt",
            en: "see you soon",
            phonetic: "a byen-to",
            category: "farewell",
            level: 1
        }

    ],



    /* =====================================================
       QUESTIONS DE QUIZ
    ===================================================== */

    quiz: [

        {

            id: "greetings-q1",

            q: "Comment dit-on 'hello' en français ?",

            options: [
                "Bonjour",
                "Merci",
                "Pomme",
                "Maison"
            ],

            a: "Bonjour",

            expl:
                "Bonjour est la salutation standard en français.",

            difficulty: "easy"

        },



        {

            id: "greetings-q2",

            q: "Quelle formule est informelle ?",

            options: [
                "Bonsoir",
                "Salut",
                "Bonne nuit",
                "Merci"
            ],

            a: "Salut",

            expl:
                "'Salut' est une formule plus familière.",

            difficulty: "easy"

        },



        {

            id: "greetings-q3",

            q: "Comment se présenter en français ?",

            options: [
                "Je suis appelé",
                "Je m'appelle",
                "Je nomme",
                "Je parle"
            ],

            a: "Je m'appelle",

            expl:
                "'Je m'appelle' est la formule correcte.",

            difficulty: "easy"

        }

    ],



    /* =====================================================
       ERREURS FRÉQUENTES
    ===================================================== */

    commonMistakes: [

        {

            wrong: "Bonne nuit ! (à 18h)",

            correct: "Bonsoir !",

            explanation:
                "Bonne nuit est utilisé avant d’aller dormir."

        },



        {

            wrong: "Je suis Emma.",

            correct: "Je m'appelle Emma.",

            explanation:
                "Les deux existent mais 'Je m'appelle' est plus naturel pour se présenter."

        }

    ],



    /* =====================================================
       DIALOGUES
    ===================================================== */

    dialogues: [

        {

            title: "Première rencontre",

            lines: [

                {
                    speaker: "Lucas",
                    text: "Bonjour !"
                },

                {
                    speaker: "Emma",
                    text: "Salut !"
                },

                {
                    speaker: "Lucas",
                    text: "Je m'appelle Lucas."
                },

                {
                    speaker: "Emma",
                    text: "Enchantée ! Moi c'est Emma."
                }

            ]

        }

    ]

};