<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import type { MenuItem } from '@valko-ui/components'
import { useRouter } from 'vue-router'

const router = useRouter()

const htmlElement = document.querySelector('html')
const darkTheme = ref(false)

const menuItems: MenuItem[] = [
  { key: 'get-started', group: 'General', text: 'Get Started'},
  { key: 'divider', group: 'Layout', text: 'Divider'},
  { key: 'button', group: 'Forms', text: 'Button'},
  { key: 'input', group: 'Forms',  text:'Input'},
  { key: 'checkbox', group: 'Forms', text: 'Checkbox'},
  { key: 'select', group: 'Forms', text: 'Select'},
  { key: 'spinner', group: 'Ui', text: 'Spinner'}, 
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
  if (darkTheme.value) htmlElement?.classList.add('dark')
  else htmlElement?.classList.remove('dark')
})
</script>

<template>
  <div class="flex flex-col h-full justify-items-start overflow-hidden">
    <vk-navbar fixed>
      <div class="flex">
        <label
          for="cb-dark-mode"
          class="mr-2"
        >Dark mode: </label>
        <input
          name="cb-dark-mode"
          type="checkbox"
          v-model="darkTheme"
        >
      </div>
    </vk-navbar>
    <div class="w-full flex flex-wrap grow overflow-y-auto">
      <aside class="w-2/12 h-full overflow-y-auto pt-2 px-2 border-r border-light-4 dark:border-dark-2">
        <vk-menu
          :items="menuItems"
          :active="activeItem"
          rounded
          floating
          @item-click="onItemClick"
        />
      </aside>
      <div class="w-10/12 h-full flex flex-col justify-between overflow-y-auto">
        <main class="flew-grow">
          <router-view />
        </main>
        <footer class="w-full px-2 py-1 text-sm bg-light-3 dark:bg-dark-5">
          ValkoUI all rights reserved
        </footer>
      </div>
    </div>
  </div>
</template>