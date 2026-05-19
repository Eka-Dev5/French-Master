


"use strict";

/* ═══════════════════════════════════════════════════════
   THEME : MARKET
   Level 2
   Food, shopping and quantities.
   ═══════════════════════════════════════════════════════ */

const MARKET_THEME = {

    id: 2,

    key: "market",

    name: "Market",

    emoji: "🛒",

    color: "#48bb78",

    lessons: [

        {
            id: "market-1",

            title: "Buying Food",

            introduction:
                "Useful expressions at the market.",

            rules: [

                "Je voudrais = I would like",

                "Combien coûte = how much does it cost",

                "Un kilo de = one kilo of"

            ],

            examples: [

                {
                    fr: "Je voudrais une pomme.",
                    en: "I would like an apple."
                },

                {
                    fr: "Combien coûte le fromage ?",
                    en: "How much is the cheese?"
                }

            ]

        }

    ],

    vocabulary: [

        {
            fr: "une pomme",
            en: "an apple",
            pronunciation: "une pom",
            category: "food"
        },

        {
            fr: "du pain",
            en: "bread",
            pronunciation: "du pan",
            category: "food"
        },

        {
            fr: "le fromage",
            en: "cheese",
            pronunciation: "fro-maj",
            category: "food"
        }

    ],

    questions: [

        {
            id: "market-q1",

            type: "multiple-choice",

            question:
                "What does 'Je voudrais' mean?",

            answers: [

                "I would like",
                "I hate",
                "I bought",
                "I forgot"

            ],

            correctAnswer:
                "I would like",

            explanation:
                "Je voudrais is a polite request."

        },

        {
            id: "market-q2",

            type: "multiple-choice",

            question:
                "What is 'une pomme'?",

            answers: [

                "An apple",
                "A carrot",
                "Bread",
                "Milk"

            ],

            correctAnswer:
                "An apple",

            explanation:
                "Une pomme means an apple."

        }

    ]

};