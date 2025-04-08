<script setup lang="ts">
import type { MenuItem } from '@valko-ui/components'

const router = useRouter()

const baseMenuItems: MenuItem[] = [
  { key: '/docs/get-started', group: 'General', text: 'Get Started' },
  { key: '/docs/layout/divider', group: 'Layout', text: 'Divider' },
  { key: '/docs/layout/drawer', group: 'Layout', text: 'Drawer' },
  { key: '/docs/layout/modal', group: 'Layout', text: 'Modal' },
  { key: '/docs/forms/button', group: 'Forms', text: 'Button' },
  { key: '/docs/forms/checkbox', group: 'Forms', text: 'Checkbox' },
  { key: '/docs/forms/datepicker', group: 'Forms', text: 'Datepicker' },
  { key: '/docs/forms/input', group: 'Forms', text: 'Input' },
  { key: '/docs/forms/radio', group: 'Forms', text: 'Radio' },
  { key: '/docs/forms/range', group: 'Forms', text: 'Range' },
  { key: '/docs/forms/select', group: 'Forms', text: 'Select' },
  { key: '/docs/forms/switch', group: 'Forms', text: 'Switch' },
  { key: '/docs/forms/textarea', group: 'Forms', text: 'Textarea' },
  { key: '/docs/forms/timepicker', group: 'Forms', text: 'Timepicker' },
  { key: '/docs/ui/alert', group: 'Ui', text: 'Alert' },
  { key: '/docs/ui/avatar', group: 'Ui', text: 'Avatar' },
  { key: '/docs/ui/badge', group: 'Ui', text: 'Badge' },
  { key: '/docs/ui/breadcrumbs', group: 'Ui', text: 'Breadcrumbs' },
  { key: '/docs/ui/calendar', group: 'Ui', text: 'Calendar' },
  { key: '/docs/ui/card', group: 'Ui', text: 'Card' },
  { key: '/docs/ui/fullcalendar', group: 'Ui', text: 'Full Calendar' },
  { key: '/docs/ui/menu', group: 'Ui', text: 'Menu' },
  { key: '/docs/ui/navbar', group: 'Ui', text: 'Navbar' },
  { key: '/docs/ui/notification', group: 'Ui', text: 'Notification' },
  { key: '/docs/ui/popover', group: 'Ui', text: 'Popover' },
  { key: '/docs/ui/progressbar', group: 'Ui', text: 'Progressbar' },
  { key: '/docs/ui/spinner', group: 'Ui', text: 'Spinner' },
  { key: '/docs/ui/tag', group: 'Ui', text: 'Tag' },
  { key: '/docs/ui/time', group: 'Ui', text: 'Time' },
  { key: '/docs/ui/tooltip', group: 'Ui', text: 'Tooltip' },
  { key: '/docs/data/collapse', group: 'Data', text: 'Collapse' },
  { key: '/docs/data/datatable', group: 'Data', text: 'DataTable' },
  { key: '/docs/data/dropdown', group: 'Data', text: 'Dropdown' },
  { key: '/docs/data/pagination', group: 'Data', text: 'Pagination' },
  { key: '/docs/data/table', group: 'Data', text: 'Table' },
  { key: '/docs/data/tabs', group: 'Data', text: 'Tabs' }
]

const extraMenuItems: MenuItem[] = [
  { key: '/', group: 'General', text: 'Home' },
  { key: '/templates', group: 'General', text: 'Templates' }
]

const menuItems = computed(() => menuOpen.value ? [...extraMenuItems, ...baseMenuItems] : baseMenuItems)

const activeItem = ref<MenuItem['key'] | null>(null)
const menuOpen = ref(false)

const onItemClick = (item: MenuItem) => {
  activeItem.value = item.key
  router.push(`${item.key}`)
  menuOpen.value = false
}

const toggleMenu = () => menuOpen.value = !menuOpen.value

onMounted(() => {
  const routePath = router.currentRoute.value.path
  if (routePath === '/docs') activeItem.value = '/docs/get-started'
  else activeItem.value = routePath
})
</script>

<template>
  <div class="flex flex-col w-full">
    <vk-navbar color="neutral" variant="outlined" size="md" shape="square" flat fixed
      class="flex justify-between !bg-light-2 dark:!bg-dark-3">
      <vk-button variant="link" shape="rounded" color="neutral" condensed size="lg" class="size-10 lg:hidden"
        @click="toggleMenu">
        <vk-icon name="paw" class="text-2xl" />
      </vk-button>
      <h2 class="text-primary-600 dark:text-primary-400 text-3xl font-serif tracking-wider">
        <nuxt-link to="/">
          ValkoUI
        </nuxt-link>
      </h2>
      <div class="lg:hidden gap-2 flex">
        <theme-switch />
        <a href="https://github.com/ValkoDevs/valko-ui" target="_blank">
          <vk-button variant="link" shape="rounded" color="neutral" condensed size="lg" class="size-10">
            <vk-icon name="brand-github" class="text-2xl" />
          </vk-button>
        </a>
      </div>
      <site-links class="hidden lg:flex" />
    </vk-navbar>

    <div class="w-full flex">
      <vk-drawer :is-open="menuOpen" shape="soft" placement="left" @close="toggleMenu">
        <div class="flex gap-2 px-4">
          <theme-switch />
          <a href="https://github.com/ValkoDevs/valko-ui" target="_blank">
            <vk-button variant="link" shape="rounded" color="neutral" condensed size="lg" class="size-10">
              <vk-icon name="brand-github" class="text-2xl" />
            </vk-button>
          </a>
        </div>

        <vk-menu :items="menuItems" :active="activeItem" color="primary" size="md" variant="ghost" shape="soft" floating
          @item-click="onItemClick" />
      </vk-drawer>
      <aside
        class="hidden lg:block lg:w-52 bg-light-2 dark:bg-dark-3 shrink-0 overflow-y-auto border-r border-light-4 dark:border-dark-2 max-h-[calc(100vh_-_3.5rem)] h-screen sticky top-14">
        <vk-menu :items="menuItems" :active="activeItem" color="primary" size="md" variant="ghost" shape="soft" floating
          @item-click="onItemClick" />
      </aside>
      <div class="flex flex-col grow justify-between items-center max-w-screen-xl w-full px-4 mx-auto">
        <main class="w-full grow">
          <NuxtPage />
        </main>
        <footer class="w-full px-2 py-1 text-sm bg-light-3 dark:bg-dark-5">
          ValkoUI all rights reserved
        </footer>
      </div>
    </div>
  </div>
</template>
