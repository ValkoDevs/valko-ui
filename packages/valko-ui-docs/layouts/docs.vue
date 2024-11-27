<script setup lang="ts">
import type { MenuItem } from '@valko-ui/components'

const router = useRouter()

const menuItems: MenuItem[] = [
  { key: 'get-started', group: 'General', text: 'Get Started' },
  { key: 'layout/divider', group: 'Layout', text: 'Divider' },
  { key: 'layout/drawer', group: 'Layout', text: 'Drawer' },
  { key: 'layout/modal', group: 'Layout', text: 'Modal' },
  { key: 'forms/button', group: 'Forms', text: 'Button' },
  { key: 'forms/checkbox', group: 'Forms', text: 'Checkbox' },
  { key: 'forms/datepicker', group: 'Forms', text: 'Datepicker' },
  { key: 'forms/input', group: 'Forms',  text: 'Input' },
  { key: 'forms/radio', group: 'Forms', text: 'Radio' },
  { key: 'forms/range', group: 'Forms', text: 'Range' },
  { key: 'forms/select', group: 'Forms', text: 'Select' },
  { key: 'forms/switch', group: 'Forms', text: 'Switch' },
  { key: 'forms/textarea', group: 'Forms', text: 'Textarea' },
  { key: 'forms/timepicker', group: 'Forms', text: 'Timepicker' },
  { key: 'ui/alert', group: 'Ui', text: 'Alert' },
  { key: 'ui/avatar', group: 'Ui', text: 'Avatar' },
  { key: 'ui/badge', group: 'Ui', text: 'Badge' },
  { key: 'ui/breadcrumbs', group: 'Ui', text: 'Breadcrumbs' },
  { key: 'ui/calendar', group: 'Ui', text: 'Calendar' },
  { key: 'ui/card', group: 'Ui', text: 'Card' },
  { key: 'ui/menu', group: 'Ui', text: 'Menu' },
  { key: 'ui/navbar', group: 'Ui', text: 'Navbar' },
  { key: 'ui/notification', group: 'Ui', text: 'Notification' },
  { key: 'ui/popover', group: 'Ui', text: 'Popover' },
  { key: 'ui/progressbar', group: 'Ui', text: 'Progressbar' },
  { key: 'ui/spinner', group: 'Ui', text: 'Spinner' },
  { key: 'ui/tag', group: 'Ui', text: 'Tag' },
  { key: 'ui/time', group: 'Ui', text: 'Time' },
  { key: 'ui/tooltip', group: 'Ui', text: 'Tooltip' },
  { key: 'data/collapse', group: 'Data', text: 'Collapse' },
  { key: 'data/datatable', group: 'Data', text: 'DataTable' },
  { key: 'data/dropdown', group: 'Data', text: 'Dropdown' },
  { key: 'data/pagination', group: 'Data', text: 'Pagination' },
  { key: 'data/table', group: 'Data', text: 'Table' },
  { key: 'data/tabs', group: 'Data', text: 'Tabs' }
]

const activeItem = ref<MenuItem['key'] | null>(null)
const menuOpen = ref(false)

const onItemClick = (item: MenuItem) => {
  activeItem.value = item.key
  router.push(`/docs/${item.key}`)
  menuOpen.value = false
}

const toggleMenu = () => menuOpen.value = !menuOpen.value

onMounted(() => {
  const activeItemKey = router.currentRoute.value.path.replace('/docs/', '')
  if (activeItemKey === '') {
    activeItem.value = 'get-started'
  } else activeItem.value = activeItemKey
})
</script>

<template>
  <div class="flex flex-col w-full">
    <vk-navbar
      color="neutral"
      variant="outlined"
      size="md"
      shape="square"
      flat
      fixed
      class="flex justify-between !bg-light-2 dark:!bg-dark-3"
    >
      <vk-button
        variant="link"
        shape="rounded"
        color="neutral"
        condensed
        size="lg"
        class="size-10 md:hidden"
        @click="toggleMenu"
      >
        <vk-icon
          name="paw"
          class="text-2xl"
        />
      </vk-button>
      <h2 class="text-primary-600 dark:text-primary-400 text-3xl font-serif tracking-wider">
        ValkoUI
      </h2>
      <div class="flex gap-1">
        <theme-switch />
        <a
          href="https://github.com/ValkoDevs/valko-ui"
          target="_blank"
        >
          <vk-button
            variant="link"
            shape="rounded"
            color="neutral"
            condensed
            size="lg"
            class="size-10"
          >
            <vk-icon
              name="brand-github"
              class="text-2xl"
            />
          </vk-button>
        </a>
      </div>
    </vk-navbar>

    <div class="w-full flex">
      <vk-drawer
        :is-open="menuOpen"
        shape="soft"
        placement="left"
        class="w-4/5"
        @close="toggleMenu"
      >
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
      </vk-drawer>
      <aside class="hidden md:block md:w-40 lg:w-52 bg-light-2 dark:bg-dark-3 shrink-0 overflow-y-auto border-r border-light-4 dark:border-dark-2 max-h-[calc(100vh_-_3.5rem)] h-screen sticky top-14">
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
      <div class="flex flex-col grow items-center max-w-screen-xl w-full px-4 mx-auto">
        <main class="w-full">
          <NuxtPage />
        </main>
        <footer class="w-full px-2 py-1 text-sm bg-light-3 dark:bg-dark-5">
          ValkoUI all rights reserved
        </footer>
      </div>
    </div>
  </div>
</template>
