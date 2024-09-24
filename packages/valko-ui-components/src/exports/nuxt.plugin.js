import { defineNuxtPlugin } from '#app'
import { createValkoUI } from '#valkoui'

export default defineNuxtPlugin((nuxtApp) => {
  const UI = createValkoUI(nuxtApp.$config.valkoUiOptions)
  nuxtApp.vueApp.use(UI)
})
