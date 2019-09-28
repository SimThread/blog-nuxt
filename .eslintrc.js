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
    // 'plugin:vue/recommended',
    // 'plugin:prettier/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'prettier'
  ],
  // add your custom rules here
  rules: {
    "indent": ["error", 4],
    "semi": [2, "always"],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
