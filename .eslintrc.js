module.exports = {
  env: {
    jest: true,
    browser: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime"
  ],
  plugins: [
    "react",
    "import",
    "react-hooks",
    "react-func"
  ],
  rules: {
    "react-func/max-lines-per-function": ["warn", 20]
  }
}
