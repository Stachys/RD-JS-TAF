import globals from 'globals';
import babelParser from '@babel/eslint-parser';
import pluginJs from '@eslint/js';

export default [
    pluginJs.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.mocha,
                ...globals.node,
            },
            parser: babelParser,
            parserOptions: {
                sourceType: 'module',
                requireConfigFile: false,
                babelOptions: {
                    plugins: ['@babel/plugin-syntax-import-attributes'],
                },
            },
        },
    },
    {
        rules: {
            'indent': ['error', 4],
            'no-trailing-spaces': 'error',
            'comma-dangle': ['error', 'always-multiline'],
            'semi': ['error', 'always'],
            'eol-last': ['error', 'always'],
            'quotes': ['error', 'single'],
        },
    },
    {
        ignores: ['reports/'],
    },
];
