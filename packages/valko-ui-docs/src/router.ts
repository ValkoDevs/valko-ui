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
        path: 'modal',
        component: lazyLoad('layout', 'ModalPage')
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
        path: 'input',
        component: lazyLoad('forms', 'InputPage')
      },
      {
        path: 'radio',
        component: lazyLoad('forms', 'RadioPage')
      },
      {
        path: 'range',
        component: lazyLoad('forms', 'RangePage')
      },
      {
        path: 'select',
        component: lazyLoad('forms', 'SelectPage')
      },
      {
        path: 'switch',
        component: lazyLoad('forms', 'SwitchPage')
      },
      {
        path: 'textarea',
        component: lazyLoad('forms', 'TextareaPage')
      },
      {
        path: 'collapse',
        component: lazyLoad('data', 'CollapsePage')
      },
      {
        path: 'dropdown',
        component: lazyLoad('data', 'DropdownPage')
      },
      {
        path: 'pagination',
        component: lazyLoad('data', 'PaginationPage')
      },
      {
        path: 'tabs',
        component: lazyLoad('data', 'TabsPage')
      },
      {
        path: 'alert',
        component: lazyLoad('ui', 'AlertPage')
      },
      {
        path: 'avatar',
        component: lazyLoad('ui', 'AvatarPage')
      },
      {
        path: 'badge',
        component: lazyLoad('ui', 'BadgePage')
      },
      {
        path: 'breadcrumbs',
        component: lazyLoad('ui', 'BreadcrumbsPage')
      },
      {
        path: 'card',
        component: lazyLoad('ui', 'CardPage')
      },
      {
        path: 'menu',
        component: lazyLoad('ui', 'MenuPage')
      },
      {
        path: 'navbar',
        component: lazyLoad('ui', 'NavbarPage')
      },
      {
        path: 'notification',
        component: lazyLoad('ui', 'NotificationPage')
      },
      {
        path: 'popover',
        component: lazyLoad('ui', 'PopoverPage')
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
        path: 'tag',
        component: lazyLoad('ui', 'TagPage')
      },
      {
        path: 'tooltip',
        component: lazyLoad('ui', 'TooltipPage')
      }
    ]
  }
]

export default VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})
