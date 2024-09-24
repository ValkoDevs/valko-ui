declare module '@valko-ui/eslint-config' {
  import ts from 'typescript-eslint'
  const config: ReturnType<typeof ts.config>
  export default config
}
