module.exports = {
  env: {
    es2021: true,
    'react-native/react-native': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'react-native'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-empty-function': 0,
    'react-native/no-raw-text': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
    'react-native/no-color-literals': 1,
    'react-native/no-inline-styles': 1,
    'react-native/sort-styles': 1,
    'prefer-const': 1,
    'react-native/no-unused-styles': 1,
    'react-native/split-platform-components': 0,
    'no-duplicate-imports': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
