const snippetGeneratorFactory = (component: string) =>
  <T>(propName: string, options: {
    values: T[],
    extraProps?: string | null,
    hasSlot?: boolean,
    customSlot?: string | null
  }): string => {

    const { values, extraProps = null, hasSlot = false, customSlot = null } = options

    const formattedExtraProps = extraProps
      ? `\n    ${extraProps.match(/(?:[^\s"]+|"[^"]*")+/g)?.join('\n    ') || ''}`
      : ''

    const formattedSlot = customSlot || hasSlot
      ? `\n  >\n    ${customSlot || 'Slot Content'}\n  </${component}>`
      : '\n  />'

    const formattedSnippet = values.map(prop => {
      const formattedPropName = prop === true ? propName : `${propName}="${prop}"`

      return `\n  <${component}\n    ${formattedPropName}${formattedExtraProps}${formattedSlot}`
    }).join('\n')

    return `<template>${formattedSnippet}\n</template>`
  }

export default snippetGeneratorFactory
