import type { App, Component, Plugin } from 'vue'

export type ValkoUIOptions = {
  prefix: string,
  components: Component[]
}

const defaultOptions: ValkoUIOptions = {
  prefix: 'Vk',
  components: []
}

const create = (createOptions: Partial<ValkoUIOptions> = {}): Plugin<[]> => ({
  install: (app: App, installOptions: Partial<ValkoUIOptions> = {}) => {
    const options: ValkoUIOptions = {
      ...defaultOptions,
      ...createOptions,
      ...installOptions
    }

    const prefixChange = options.prefix !== defaultOptions.prefix
    for (const component of options.components) {
      let name = component.name || ''
      if (prefixChange) {
        name = `${options.prefix}${name.slice(defaultOptions.prefix.length)}`
      }

      app.component(`${options.prefix}${name}`, component)
    }
  }
})

export default create
