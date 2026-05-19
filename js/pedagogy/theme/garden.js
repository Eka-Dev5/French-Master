// garden.js
// French Master

"use strict";

/* ═══════════════════════════════════════════════════════
   THEME : GARDEN
   Level 3
   Nature and outdoor vocabulary.
   ═══════════════════════════════════════════════════════ */

const GARDEN_THEME = {

    id: 3,

    key: "garden",

    name: "Garden",

    emoji: "🌿",

    color: "#38a169",

    lessons: [

        {
            id: "garden-1",

            title: "Nature Vocabulary",

            introduction:
                "Basic garden and nature words.",

            rules: [

                "Le jardin = the garden",

                "Les fleurs = flowers",

                "Les arbres = trees"

            ],

            examples: [

                {
                    fr: "Le jardin est grand.",
                    en: "The garden is big."
                }

            ]

        }

    ],

    vocabulary: [

        {
            fr: "une fleur",
            en: "a flower",
            pronunciation: "fleur",
            category: "nature"
        },

        {
            fr: "un arbre",
            en: "a tree",
            pronunciation: "arbr",
            category: "nature"
        }

    ],

    questions: [

        {
            id: "garden-q1",

            type: "multiple-choice",

            question:
                "What is 'une fleur'?",

            answers: [

                "A flower",
                "A tree",
                "A stone",
                "A bird"

            ],

            correctAnswer:
                "A flower",

            explanation:
                "Une fleur means flower."

        }

    ]

};
