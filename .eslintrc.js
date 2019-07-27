module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: ['@nuxtjs'],
  plugins: ['@typescript-eslint'],
  // add your custom rules here
  rules: {
    '@typescript-eslint/no-unused-vars': 'error'
  }
}
