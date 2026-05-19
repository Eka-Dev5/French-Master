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

"use strict";

/* ═══════════════════════════════════════════════════════
   THEME : GREETINGS
   Level 1
   Basic greetings and introductions.
   ═══════════════════════════════════════════════════════ */

const GREETINGS_THEME = {

    id: 1,

    key: "greetings",

    name: "Greetings",

    emoji: "🙋",

    color: "#667eea",

    lessons: [

        {
            id: "greetings-1",

            title: "Saying Hello",

            introduction:
                "French has formal and informal greetings.",

            rules: [

                "Bonjour = hello (formal/general)",

                "Salut = hi (informal)",

                "Bonsoir = good evening"

            ],

            examples: [

                {
                    fr: "Bonjour !",
                    en: "Hello!"
                },

                {
                    fr: "Salut Lucas !",
                    en: "Hi Lucas!"
                }

            ]

        }

    ],

    vocabulary: [

        {
            fr: "bonjour",
            en: "hello",
            pronunciation: "bon-zhoor",
            category: "greeting"
        },

        {
            fr: "salut",
            en: "hi",
            pronunciation: "sa-lu",
            category: "greeting"
        },

        {
            fr: "bonsoir",
            en: "good evening",
            pronunciation: "bon-swahr",
            category: "greeting"
        }

    ],

    questions: [

        {
            id: "greetings-q1",

            type: "multiple-choice",

            question:
                "How do you say 'Hello' in French?",

            answers: [

                "Bonjour",
                "Merci",
                "Pardon",
                "Au revoir"

            ],

            correctAnswer:
                "Bonjour",

            explanation:
                "Bonjour means Hello."

        },

        {
            id: "greetings-q2",

            type: "multiple-choice",

            question:
                "Which greeting is informal?",

            answers: [

                "Bonsoir",
                "Salut",
                "Merci",
                "Excusez-moi"

            ],

            correctAnswer:
                "Salut",

            explanation:
                "Salut is informal."

        }

    ]

};
};