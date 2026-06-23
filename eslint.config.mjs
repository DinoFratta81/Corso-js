import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import htmlPlugin from "eslint-plugin-html";
export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,html}"], 
    plugins: { 
      js,
      html: htmlPlugin 
    }, 
    extends: ["js/recommended"], 
    languageOptions: { globals: globals.browser },
    rules: {
      "no-await-in-loop": "error",
      "require-await": "error",
      "no-unused-vars": "warn",
    }
  },
  { 
    files: ["**/*.js"], 
    languageOptions: { sourceType: "commonjs" } 
  },
]);