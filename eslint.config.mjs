import 'eslint-config-airbnb';
import 'eslint-plugin-import'; // used by eslint-config-airbnb
import 'eslint-plugin-jsx-a11y'; // used by eslint-config-airbnb
import 'eslint-plugin-react-hooks'; // used by eslint-config-airbnb
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import * as babelParser from '@babel/eslint-parser';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
// eslint-disable-next-line import/no-unresolved
import { defineConfig, globalIgnores } from 'eslint/config';
import jest from 'eslint-plugin-jest';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactNative from 'eslint-plugin-react-native';
import * as sortDestructureKeys from 'eslint-plugin-sort-destructure-keys';
import globals from 'globals';

import 'eslint-plugin-testing-library';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const compat = new FlatCompat({
  baseDirectory: dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

// eslint-disable-next-line import/no-unused-modules
export default defineConfig([
  globalIgnores([
    '**/.expo-shared/',
    '**/.expo/',
    '**/coverage/',
    '**/node_modules/',
    '**/npm-debug.*',
  ]),
  js.configs.recommended,
  ...compat.extends('airbnb'),
  prettierRecommended,
  react.configs.flat.all,
  react.configs.flat['jsx-runtime'],
  ...compat.extends('plugin:react-native/all'),
  ...compat.extends('plugin:testing-library/react'),
  {
    plugins: {
      jest,
      'react-native': reactNative,
      'sort-destructure-keys': sortDestructureKeys,
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
      parser: babelParser,
    },
  },
  {
    rules: {
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.test.*',
            'babel.config.*',
            'eslint.config.*',
            'jest.config.*',
          ],
        },
      ],
      'import/no-unused-modules': [2, { unusedExports: true }],
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/prefer-default-export': [0],
      'prettier/prettier': [
        1,
        {
          endOfLine: 'auto',
          singleQuote: true,
        },
      ],
      // The following rules is enabled only because there's an error with it in
      // react.configs.flat.all
      'react/boolean-prop-naming': [
        'error',
        { propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'] },
      ],
      'react/jsx-one-expression-per-line': [0],
      'react/jsx-no-literals': [0],
      'react/jsx-filename-extension': [0],
      'react/prop-types': [0],
      'sort-destructure-keys/sort-destructure-keys': 1,
      'sort-imports': [
        'warn',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],
    },
  },
]);
