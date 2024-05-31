import type { App, Component, Plugin } from 'vue'
import * as components from '../components/index.ts'

export type ValkoUIOptions = {
  prefix: string,
  components: Component[]
}

const defaultOptions: ValkoUIOptions = {
  prefix: 'Vk',
  components: []
}

export const createValkoUI = (createOptions: Partial<ValkoUIOptions> = {}): Plugin<[]> => ({
  install: (app: App, installOptions: Partial<ValkoUIOptions> = {}) => {
    const options: ValkoUIOptions = {
      ...defaultOptions,
      ...createOptions,
      ...installOptions
    }

    for (const component of options.components) {
      const name = component.name?.startsWith(options.prefix) ? component.name.slice(defaultOptions.prefix.length) : component.name

      app.component(`${options.prefix}${name}`, component)
    }
  }
})

export default createValkoUI({
  components: Object.keys(components)
    .map(key => components[key as keyof object])
}) as Plugin<[]>
