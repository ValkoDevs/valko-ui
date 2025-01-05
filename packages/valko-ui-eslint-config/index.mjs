import ts from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import vue from 'eslint-plugin-vue'
import globals from 'globals'
import js from '@eslint/js'

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  ...vue.configs['flat/strongly-recommended'],
  {
    ignores: ['**/node_modules', '**/dist', '**/coverage'],
    plugins: {
      '@stylistic': stylistic
    },

    languageOptions: {
      globals: {
        ...globals.browser
      },

      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    },

    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/no-mixed-spaces-and-tabs': ['error'],
      '@stylistic/no-trailing-spaces': ['error'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/type-annotation-spacing': ['error'],
      '@stylistic/comma-spacing': ['error'],
      '@stylistic/comma-dangle': ['error'],
      'prefer-const': ['error'],
      'vue/no-multiple-template-root': 'off'
    }
  }
)
