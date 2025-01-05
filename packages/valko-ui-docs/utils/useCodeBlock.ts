import type { SelectOption } from '#valkoui'

const useCodeBlock = (component: string) => {

  const generateCode = <T>(
    dataArray: T[],
    template: (item: T) => string
  ): string => dataArray.map(template).join('\n')

  const generalCode = (propName: string, propArray: SelectOption[]) =>
    generateCode(propArray, prop => `<${component} ${propName}="${prop.value}"></${component}>`)

  const slotCode = (propName: string, propArray: SelectOption[]) =>
    generateCode(propArray, prop => `<${component} ${propName}="${prop.value}">${prop.label}</${component}>`)

  const templateCode = (templateArray: { hash: string, content: string }[]) =>
    generateCode(templateArray, el => `<${component}><template #${el.hash}>${el.content}</template></${component}>`)

  const twoPropsCode = (propName: string, propArray: SelectOption[], secondPropName: string) =>
    generateCode(propArray, prop => `<${component} ${secondPropName} ${propName}="${prop.value}"></${component}>`)

  const notificationCode = (propName: string, propArray: SelectOption[]) =>
    generateCode(propArray, prop => `<vk-button @click="createNotification({ text: '${prop.label}', ${propName}: '${prop.value}' })">${prop.label}</vk-button>`)

  const pickersCode = (propName: 'string', propArray: SelectOption[]) =>
    generateCode(propArray, prop => `
    <${component}
      v-model="model"
      :adapter="adapter"
      :parsed-model="parsedModel"
      ${propName}="${prop.value}"
    ></${component}>`)

  return {
    templateCode,
    slotCode,
    generalCode,
    twoPropsCode,
    notificationCode,
    pickersCode
  }
}

export default useCodeBlock
