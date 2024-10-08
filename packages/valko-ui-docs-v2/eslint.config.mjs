import valkoUiConfig from '@valko-ui/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  ...valkoUiConfig,
  {
    files: ['pages/**/*.vue', 'layouts/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
)
