import { createApp } from 'vue'
import '@valko-ui/components/styles'
import App from './App.vue'
import valkoui from '@valko-ui/components'
import router from './router'

createApp(App)
  .use(router)
  .use(valkoui)
  .mount('#app')
