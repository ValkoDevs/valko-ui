import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addImportsDir,
  addComponentsDir
} from '@nuxt/kit'

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

    // Transpile runtime
    const runtimeDir = resolve('./')
    nuxt.options.build.transpile.push(runtimeDir)
    nuxt.options.build.transpile.push('@popperjs/core', '@headlessui/vue')

    nuxt.options.alias['#valkoui'] = runtimeDir

    nuxt.options.css.push(resolve(runtimeDir, 'valkoui.css'))

    // plugin install
    addPlugin({
      src: resolve(runtimeDir, 'nuxt.plugin.js')
    })

    // nuxt install
    addComponentsDir({
      path: resolve(runtimeDir, 'components'),
      extensions: ['vue'],
      prefix: options?.prefix ? options?.prefix : 'Vk',
      watch: false
    })

    addImportsDir(resolve(runtimeDir, 'composables'))
  }
})
