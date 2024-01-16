import * as VueRouter from 'vue-router'
import HomePage from './pages/HomePage.vue'
import DocsPage from './pages/docs/DocsPage.vue'

const lazyLoad = (folder: string, file: string) =>
  () => import(`./pages/docs/${folder}/${file}.vue`)

const routes = [
  { path: '/', component: HomePage },
  {
    path: '/docs',
    component: DocsPage,
    children: [
      {
        path: 'get-started',
        component: lazyLoad('general', 'StartPage')
      },
      {
        path: 'divider',
        component: lazyLoad('layout', 'DividerPage')
      },
      {
        path: 'button',
        component: lazyLoad('forms', 'ButtonPage')
      },
      {
        path: 'checkbox',
        component: lazyLoad('forms', 'CheckboxPage')
      },
      {
        path: 'collapse',
        component: lazyLoad('data', 'CollapsePage')
      },
      {
        path: 'input',
        component: lazyLoad('forms', 'InputPage')
      },
      {
        path: 'pagination',
        component: lazyLoad('data', 'PaginationPage')
      },
      {
        path: 'select',
        component: lazyLoad('forms', 'SelectPage')
      },
      {
        path: 'progressbar',
        component: lazyLoad('ui', 'ProgressbarPage')
      },
      {
        path: 'spinner',
        component: lazyLoad('ui', 'SpinnerPage')
      },
      {
        path: 'tabs',
        component: lazyLoad('data', 'TabsPage')
      },
      {
        path: 'textarea',
        component: lazyLoad('forms', 'TextareaPage')
      }
    ]
  }
]

export default VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})
