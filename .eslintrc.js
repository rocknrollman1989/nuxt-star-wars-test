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
    "plugin:vue/recommended",
    'plugin:vue/essential',
    'airbnb-base'
],
  globals: {
    $nuxt: true
  },
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "vue/component-name-in-template-casing": 0,
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    'no-shadow': [0, { allow: ['state'] }],
    'no-param-reassign': 0,
    'arrow-body-style': 0,
    'no-plusplus': 0,
    'object-curly-newline': 0,
    'max-len': 0,
    'prefer-destructuring': 0,
    'prefer-default-export': 0,
    'vue/html-self-closing': 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "vue/name-property-casing": 0,
    "vue/max-attributes-per-line": 0,
  },
}
