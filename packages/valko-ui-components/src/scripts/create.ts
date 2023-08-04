import type { App, Component, Plugin } from 'vue'

export type ValkoUIOptions = {
  prefix: string,
  components: Component[]
}

const defaultOptions: ValkoUIOptions = {
  prefix: 'Vk',
  components: []
}

const create = (createOptions: Partial<ValkoUIOptions> = {}): Plugin => ({
  install: (app: App, installOptions: Partial<ValkoUIOptions> = {}) => {
    const options: ValkoUIOptions = {
      ...defaultOptions,
      ...createOptions,
      ...installOptions,
    }

    for (const component of options.components) {
      const name = component.name?.startsWith(options.prefix) ? component.name.slice(defaultOptions.prefix.length) : component.name

      app.component(`${options.prefix}${name}`, component)
    }
  }
})

export default create