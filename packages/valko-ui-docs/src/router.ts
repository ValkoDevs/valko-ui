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
        path: 'input',
        component: lazyLoad('forms', 'InputPage')
      },
      {
        path: 'checkbox',
        component: lazyLoad('forms', 'CheckboxPage')
      },
      {
        path: 'select',
        component: lazyLoad('forms', 'SelectPage')
      },
      {
        path: 'spinner',
        component: lazyLoad('ui', 'SpinnerPage')
      },
      {
        path: 'pagination',
        component: lazyLoad('data', 'PaginationPage')
      }
    ]
  },
]

export default VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})