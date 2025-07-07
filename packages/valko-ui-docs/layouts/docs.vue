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
  { key: '/docs/forms/input', group: 'Forms',  text: 'Input' },
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
  { key: '/docs/ui/dropdown', group: 'Ui', text: 'Dropdown' },
  { key: '/docs/ui/icon', group: 'Ui', text: 'Icon' },
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
    <vk-navbar
      color="surface"
      variant="outlined"
      size="md"
      shape="square"
      fixed
      class="flex justify-between !bg-surface-container !border-surface-dim"
    >
      <vk-button
        variant="link"
        shape="rounded"
        color="surface"
        condensed
        size="lg"
        class="size-10 lg:hidden"
        @click="toggleMenu"
      >
        <vk-icon
          name="paw"
          class="text-2xl"
        />
      </vk-button>
      <h2 class="text-primary text-3xl font-serif tracking-wider">
        <nuxt-link to="/">
          ValkoUI
        </nuxt-link>
      </h2>
      <site-links />
    </vk-navbar>

    <div class="w-full flex">
      <vk-drawer
        :is-open="menuOpen"
        shape="soft"
        placement="left"
        @close="toggleMenu"
      >
        <div class="flex px-4">
          <vk-menu
            :items="menuItems"
            :active="activeItem"
            color="primary"
            size="md"
            variant="ghost"
            shape="soft"
            floating
            @item-click="onItemClick"
          />
        </div>
      </vk-drawer>
      <aside class="hidden lg:block lg:w-52 bg-surface-container shrink-0 overflow-y-auto border-r border-surface-dim max-h-[calc(100vh_-_3.5rem)] h-screen sticky top-14">
        <vk-menu
          :items="menuItems"
          :active="activeItem"
          color="primary"
          size="md"
          variant="ghost"
          shape="soft"
          floating
          @item-click="onItemClick"
        />
      </aside>
      <div class="flex flex-col grow justify-between items-center w-full">
        <main class="w-full grow">
          <div class="mx-auto w-full max-w-screen-xl px-4 md:px-6 lg:px-10">
            <NuxtPage />
          </div>
        </main>
        <footer class="w-full px-2 py-1 text-sm bg-surface-container-lowest items-center justify-center flex">
          ValkoUI all rights reserved
        </footer>
      </div>
    </div>
  </div>
</template>
