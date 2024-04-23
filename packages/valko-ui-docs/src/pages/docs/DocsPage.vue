<script setup lang="ts">
import { onMounted, ref, watchEffect, computed } from 'vue'
import { MenuItem } from '@valko-ui/components'
import { useRouter } from 'vue-router'
import { useLocalStorage } from '@vueuse/core'

const router = useRouter()
const theme = useLocalStorage('theme', 'dark')

const isDarkTheme = computed({
  get: () => theme.value === 'dark',
  set: (value: boolean) => theme.value = value ? 'dark' : 'light'
})

const htmlElement = document.querySelector('html')

const menuItems: MenuItem[] = [
  { key: 'get-started', group: 'General', text: 'Get Started' },
  { key: 'divider', group: 'Layout', text: 'Divider' },
  { key: 'modal', group: 'Layout', text: 'Modal' },
  { key: 'button', group: 'Forms', text: 'Button' },
  { key: 'checkbox', group: 'Forms', text: 'Checkbox' },
  { key: 'input', group: 'Forms',  text: 'Input' },
  { key: 'radio', group: 'Forms', text: 'Radio' },
  { key: 'select', group: 'Forms', text: 'Select' },
  { key: 'switch', group: 'Forms', text: 'Switch' },
  { key: 'textarea', group: 'Forms', text: 'Textarea' },
  { key: 'alert', group: 'Ui', text: 'Alert' },
  { key: 'avatar', group: 'Ui', text: 'Avatar' },
  { key: 'badge', group: 'Ui', text: 'Badge' },
  { key: 'breadcrumbs', group: 'Ui', text: 'Breadcrumbs' },
  { key: 'menu', group: 'Ui', text: 'Menu' },
  { key: 'navbar', group: 'Ui', text: 'Navbar' },
  { key: 'notification', group: 'Ui', text: 'Notification' },
  { key: 'progressbar', group: 'Ui', text: 'Progressbar' },
  { key: 'spinner', group: 'Ui', text: 'Spinner' },
  { key: 'tooltip', group: 'Ui', text: 'Tooltip' },
  { key: 'collapse', group: 'Data', text: 'Collapse' },
  { key: 'dropdown', group: 'Data', text: 'Dropdown' },
  { key: 'pagination', group: 'Data', text: 'Pagination' },
  { key: 'tabs', group: 'Data', text: 'Tabs' }
]

const activeItem = ref<MenuItem['key'] | null>(null)

const onItemClick = (item: MenuItem) => {
  activeItem.value = item.key
  router.push(item.key as string)
}

onMounted(() => {
  const activeItemKey = router.currentRoute.value.path.replace('/docs/', '')
  if (activeItemKey === '') {
    activeItem.value = 'get-started'
    router.push('get-started')
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
        :position="true"
        label="Dark Mode"
        v-model="isDarkTheme"
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
          <router-view />
        </main>
        <footer class="w-full px-2 py-1 text-sm bg-light-3 dark:bg-dark-5">
          ValkoUI all rights reserved
        </footer>
      </div>
    </div>
  </div>
</template>
