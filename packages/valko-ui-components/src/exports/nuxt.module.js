import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { fileURLToPath } from 'node:url'

export default defineNuxtModule({
  meta: {
    name: '@valko-ui/components',
    configKey: 'valko-ui',
    compatibility: {
      nuxt: '^3.5.0'
    }
  },
  defaults: {
    prefix: 'Vk'
  },
  async setup(options, nuxt) {
    // Create resolver to resolve relative paths
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.valkoUIOptions = options

    // plugin install
    addPlugin(resolve('./nuxt.plugin.js'))

    // nuxt install
    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: fileURLToPath(new URL('../components', import.meta.url)),
        extensions: ['vue', 'tsx'],
        prefix: options?.prefix ? options?.prefix : 'Vk'
      })
    })
  }
})
