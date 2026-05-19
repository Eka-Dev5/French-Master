"use strict";

/* ═══════════════════════════════════════════════════════
   STRING NORMALIZATION UTILITIES
   Used across the entire pedagogical system.
   Makes the app tolerant to:
   - accents
   - uppercase/lowercase
   - iOS apostrophes
   - unicode variants
   - extra spaces
   - punctuation
   ═══════════════════════════════════════════════════════ */

const StringUtils = {

    normalize(text) {

        if (!text) return "";

        return text

            .normalize("NFD")

            .replace(/[\u0300-\u036f]/g, "")

            .replace(/[’‘`´]/g, "'")

            .replace(/[“”]/g, '"')

            .replace(/[–—]/g, "-")

            .replace(/[.,!?;:()[\]{}]/g, "")

            .replace(/\s+/g, " ")

            .trim()

            .toLowerCase();

    },

    areEquivalent(a, b) {

        return this.normalize(a) === this.normalize(b);

    }

};