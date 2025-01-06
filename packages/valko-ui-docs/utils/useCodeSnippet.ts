import type { SelectOption } from '#valkoui'

const useCodeSnippet = (component: string) => {

  const generateSnippet = (items: SelectOption[], itemToString: (item: SelectOption) => string): string => {
    const snippets = items.map(itemToString).join('\n')
    return `<template>\n${snippets}\n</template>`
  }

  const defaultSnippet = (propName: string, props: SelectOption[], extraProps: string = ''): string =>
    generateSnippet(props, prop => ` <${component} ${propName}="${prop.value}"${extraProps}></${component}>`)

  const slotSnippet = (propName: string, props: SelectOption[], extraProps: string = ''): string =>
    generateSnippet(props, prop => ` <${component} ${propName}="${prop.value}"${extraProps}>Slot Content</${component}>`)

  const booleanSnippet = (propName: string, extraProps: string = '', slot: boolean = false): string => `
<template>
  <${component} ${propName}${extraProps}>${ slot ? 'Slot Content' : ''}</${component}>
</template>`

  return {
    defaultSnippet,
    slotSnippet,
    booleanSnippet
  }
}

export default useCodeSnippet
