module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:vue/recommended'
        // 'plugin:prettier/recommended',
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
        // 'prettier'
    ],
    // add your custom rules here
    rules: {
        indent: ['error', 4],
        semi: [2, 'always'],
        'vue/max-attributes-per-line': [
            2,
            {
                singleline: 2,
                multiline: {
                    max: 2,
                    allowFirstLine: false
                }
            }
        ],
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: []
            }
        ],
        'vue/require-v-for-key': 'off'
    }
}
