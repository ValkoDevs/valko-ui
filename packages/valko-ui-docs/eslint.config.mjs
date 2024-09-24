import valkoUiConfig from '@valko-ui/eslint-config'

export default [
  ...valkoUiConfig,
  {
    ignores: ['**/node_modules', '**/dist', '**/.vscode', '**/img']
  }
]
