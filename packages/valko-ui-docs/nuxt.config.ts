// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@valko-ui/components/nuxt', '@nuxt/eslint'],
  routeRules: {
    '/docs': { redirect: '/docs/get-started' },
    '/docs/': { redirect: '/docs/get-started' },
    '/docs/layout': { redirect: '/docs/layout/divider' },
    '/docs/layout/': { redirect: '/docs/layout/divider' },
    '/docs/forms': { redirect: '/docs/forms/button' },
    '/docs/forms/': { redirect: '/docs/forms/button' },
    '/docs/ui': { redirect: '/docs/ui/alert' },
    '/docs/ui/': { redirect: '/docs/ui/alert' },
    '/docs/data': { redirect: '/docs/data/collapse' },
    '/docs/data/': { redirect: '/docs/data/collapse' }
  },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}
    }
  },

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'tailwind-variants',
        'toastify-js',
        'highlight.js/lib/core',
        'highlight.js/lib/languages/xml',
        'highlight.js/lib/languages/typescript',
        'highlight.js/lib/languages/css'
      ]
    }
  },

  compatibilityDate: '2024-09-24'
})
