// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  ignorePatterns: [
    'node_modules',
    'dist',
    'coverage'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-strongly-recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    '@stylistic',
    'vue'
  ],
  rules: {
    '@stylistic/indent': [
      'error',
      2
    ],
    '@stylistic/quotes': [
      'error',
      'single'
    ],
    '@stylistic/semi': [
      'error',
      'never'
    ],
    '@stylistic/eol-last': [
      'error',
      'always'
    ],
    '@stylistic/no-mixed-spaces-and-tabs': [
      'error'
    ],
    '@stylistic/no-trailing-spaces': [
      'error'
    ],
    '@stylistic/object-curly-spacing': [
      'error',
      'always'
    ],
    '@stylistic/type-annotation-spacing': [
      'error'
    ],
    '@stylistic/comma-spacing': [
      'error'
    ],
    '@stylistic/comma-dangle': [
      'error'
    ],
    'prefer-const': [
      'error'
    ]
  }
}
