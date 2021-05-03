module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  rules: {
    quotes: ['error', 'single'],
    'no-console': 'warn',
    'no-unused-vars': 'off',
    'no-empty': 'warn'
  }
}
