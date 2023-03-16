module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'react'
    ],
    root: true,
    env: {
        browser: true,
        es2021: true
    },
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'indent': ['error', 4],
        '@typescript-eslint/indent': ['error', 4],
        'quotes': ['error', 'single'],
        '@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/array-type': 'warn',
        'semi': ['error', 'always'],
        '@typescript-eslint/semi': ['error', 'always'],
        'no-trailing-spaces': ['error', { 'skipBlankLines': true }],
        'eol-last': 'off',
        'object-curly-spacing': ['error', 'always'],
        'no-undef': 'off',
    }
};
