import js from "@eslint/js";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.js"], 
    rules: {
      "no-redeclare": "error",   
      "no-unused-vars": "off"    
    }
  }
]);