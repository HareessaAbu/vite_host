module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-recommended', // Enable full compulsory change to vue3
        '@vue/standard',
    ],
    globals: {
        'axios': true,
        '_': true,
        'api': true,
        'dateTime': true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
    },
    rules: {
        'comma-dangle': ['error', 'always-multiline'],
        'default-case-last': ['off'],
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'multiline-ternary': ['off'],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-empty-function': ['error'],
        'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
        'quote-props': ['error', 'as-needed', { 'unnecessary': false }],
        'semi': ['error', 'always'],
        'space-unary-ops': [2, {
            'overrides': {
                '!': true,
            },
        }],
        'standard/no-callback-literal': 0,
        'operator-linebreak': [2, 'before'],
        'vue/attributes-order': ['error', {
            'alphabetical': true,
        }],
        'vue/component-name-in-template-casing': 'error',
        'vue/component-tags-order': ['error', {
            'order': ['template', 'script', 'style'],
        }],
        'vue/html-indent': ['warn', 4],
        'vue/script-indent': ['error', 4, { 'baseIndent': 1, 'switchCase': 1 }],
        'vue/max-attributes-per-line': ['error', {
            'singleline': 3,
        }],
        'vue/padding-line-between-blocks': 'error',

    // Surpress rules
    'vue/no-v-html': 0,
    'vue/no-mutating-props': 0,
    'vue/v-slot-style': 0,
    'vue/valid-v-slot': 0,

    // Enforce using the Composition API
    'vue/no-setup-props-destructure': 'error', // Disallow props destructuring in setup
    'vue/no-setup-returns': 'error', // Disallow values returned from setup

    // Enforce using script setup
    'vue/require-script-setup': 'error', // Require script setup

    // Disallow using the Options API
    'vue/no-deprecated-data-object-declaration': 'error', // Disallow using "data" as an object in Options API
    'vue/no-deprecated-destroyed-lifecycle': 'error', // Disallow using "destroyed" lifecycle hook
    'vue/no-deprecated-dollar-listeners-api': 'error', // Disallow using "$listeners" in Options API
    'vue/no-deprecated-dollar-attrs-api': 'error', // Disallow using "$attrs" in Options API
    'vue/no-deprecated-vue-config-keycodes': 'error', // Disallow using "$vueConfig.keyCodes" in Options API
    'vue/no-deprecated-filter': 'error', // Disallow using "filter" in Options API
    'vue/no-deprecated-functional-template': 'error', // Disallow using functional template in Options API
    'vue/no-deprecated-html-element-is': 'error', // Disallow using "$el" in Options API
    'vue/no-deprecated-inline-template': 'error', // Disallow using inline template in Options API
    'vue/no-deprecated-props-default-this': 'error', // Disallow using "this" in default prop values
    'vue/no-deprecated-v-bind-sync': 'error', // Disallow using "v-bind.sync" in Options API
    'vue/no-deprecated-v-is': 'error', // Disallow using "v-is" in Options API
    'vue/no-deprecated-watch-array': 'error', // Disallow using watch with an array of dependencies in Options API
},
overrides: [
    {
        files: ['*.vue'],
        rules: {
            indent: 'off',
        },
    },
],
};