<script setup lang="ts">
import type { MenuItem } from '@valko-ui/components'
import { useLocalStorage } from '@vueuse/core'

const router = useRouter()
const theme = useLocalStorage('theme', 'dark')

const isDarkTheme = computed({
  get: () => theme.value === 'dark',
  set: (value: boolean) => theme.value = value ? 'dark' : 'light'
})

const menuItems: MenuItem[] = [
  { key: 'get-started', group: 'General', text: 'Get Started' },
  { key: 'layout/divider', group: 'Layout', text: 'Divider' },
  { key: 'layout/modal', group: 'Layout', text: 'Modal' },
  { key: 'layout/drawer', group: 'Layout', text: 'Drawer' },
  { key: 'forms/button', group: 'Forms', text: 'Button' },
  { key: 'forms/checkbox', group: 'Forms', text: 'Checkbox' },
  { key: 'forms/datepicker', group: 'Forms', text: 'Datepicker' },
  { key: 'forms/input', group: 'Forms',  text: 'Input' },
  { key: 'forms/radio', group: 'Forms', text: 'Radio' },
  { key: 'forms/range', group: 'Forms', text: 'Range' },
  { key: 'forms/select', group: 'Forms', text: 'Select' },
  { key: 'forms/switch', group: 'Forms', text: 'Switch' },
  { key: 'forms/textarea', group: 'Forms', text: 'Textarea' },
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
  { key: 'ui/tooltip', group: 'Ui', text: 'Tooltip' },
  { key: 'data/collapse', group: 'Data', text: 'Collapse' },
  { key: 'data/datatable', group: 'Data', text: 'DataTable' },
  { key: 'data/dropdown', group: 'Data', text: 'Dropdown' },
  { key: 'data/pagination', group: 'Data', text: 'Pagination' },
  { key: 'data/table', group: 'Data', text: 'Table' },
  { key: 'data/tabs', group: 'Data', text: 'Tabs' }
]


const activeItem = ref<MenuItem['key'] | null>(null)
let htmlElement: HTMLElement | null = null

const onItemClick = (item: MenuItem) => {
  activeItem.value = item.key
  router.push(`/docs/${item.key}`)
}

onMounted(() => {
  htmlElement = document.querySelector('html')
  const activeItemKey = router.currentRoute.value.path.replace('/docs/', '')
  if (activeItemKey === '') {
    activeItem.value = 'get-started'
    router.push('/docs/get-started')
  } else activeItem.value = activeItemKey
})

watchEffect(() => {
  if (theme.value === 'dark') htmlElement?.classList.add('dark')
  else htmlElement?.classList.remove('dark')
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
    >
      <vk-switch
        v-model="isDarkTheme"
        :position="true"
        label="Dark Mode"
      />
    </vk-navbar>

    <div class="w-full flex">
      <aside class="hidden md:block md:w-40 lg:w-52 xl:w-60 shrink-0 overflow-y-auto border-r border-light-4 dark:border-dark-2 max-h-[calc(100vh_-_3.5rem)] h-screen sticky top-14">
        <vk-menu
          :items="menuItems"
          :active="activeItem"
          color="primary"
          size="md"
          variant="ghost"
          shape="square"
          @item-click="onItemClick"
        />
      </aside>
      <div class="grow flex flex-col justify-between items-center">
        <main class="w-full max-w-7xl px-4 mx-auto">
          <NuxtPage />
        </main>
        <footer class="w-full px-2 py-1 text-sm bg-light-3 dark:bg-dark-5">
          ValkoUI all rights reserved
        </footer>
      </div>
    </div>
  </div>
</template>
