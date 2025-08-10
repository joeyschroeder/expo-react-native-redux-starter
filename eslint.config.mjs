import babelParser from "@babel/eslint-parser";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import jest from "eslint-plugin-jest";
import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores([
    "**/.expo-shared/",
    "**/.expo/",
    "**/assets/",
    "**/coverage/",
    "**/node_modules/",
    "**/npm-debug.*",
  ]),
  {
    extends: compat.extends(
      "airbnb",
      "eslint:recommended",
      "plugin:prettier/recommended",
      "plugin:react-native/all",
      "plugin:react/all",
      "plugin:testing-library/react",
    ),
    plugins: {
      jest,
      react,
      "react-native": reactNative,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
      parser: babelParser,
    },
    rules: {
      "comma-dangle": 0,
      "import/no-extraneous-dependencies": [0],
      "import/no-unresolved": 0,
      "import/order": [0],
      "import/prefer-default-export": [0],
      "jsx-a11y/click-events-have-key-events": [0],
      "jsx-a11y/label-has-for": [0],
      "jsx-a11y/no-static-element-interactions": [0],
      "react/boolean-prop-naming": ["error", { "propTypeNames": ["bool", "mutuallyExclusiveTrueProps"] }],
      "react/jsx-filename-extension": [0],
      "react/jsx-indent": 0,
      "react/jsx-indent-props": 0,
      "react/jsx-no-literals": [0],
      "react/jsx-one-expression-per-line": [0],
      "react/prop-types": [0],
      "react/react-in-jsx-scope": 0,
      quotes: ["error", "single"],
      semi: ["error", "always"],
    },
  },
]);
