<script setup lang="ts">
import type { MenuItem } from '@valko-ui/components'

const router = useRouter()

const baseMenuItems: MenuItem[] = [
  { key: '/docs/get-started', group: 'General', text: 'Get Started' },
  { key: '/docs/icons', group: 'General', text: 'Icons' },
  { key: '/docs/theme', group: 'General', text: 'Theme' },
  { key: '/docs/divider', group: 'Layout', text: 'Divider' },
  { key: '/docs/drawer', group: 'Layout', text: 'Drawer' },
  { key: '/docs/modal', group: 'Layout', text: 'Modal' },
  { key: '/docs/button', group: 'Forms', text: 'Button' },
  { key: '/docs/checkbox', group: 'Forms', text: 'Checkbox' },
  { key: '/docs/datepicker', group: 'Forms', text: 'Datepicker' },
  { key: '/docs/input', group: 'Forms',  text: 'Input' },
  { key: '/docs/radio', group: 'Forms', text: 'Radio' },
  { key: '/docs/range', group: 'Forms', text: 'Range' },
  { key: '/docs/select', group: 'Forms', text: 'Select' },
  { key: '/docs/switch', group: 'Forms', text: 'Switch' },
  { key: '/docs/textarea', group: 'Forms', text: 'Textarea' },
  { key: '/docs/timepicker', group: 'Forms', text: 'Timepicker' },
  { key: '/docs/alert', group: 'Ui', text: 'Alert' },
  { key: '/docs/avatar', group: 'Ui', text: 'Avatar' },
  { key: '/docs/badge', group: 'Ui', text: 'Badge' },
  { key: '/docs/breadcrumbs', group: 'Ui', text: 'Breadcrumbs' },
  { key: '/docs/calendar', group: 'Ui', text: 'Calendar' },
  { key: '/docs/card', group: 'Ui', text: 'Card' },
  { key: '/docs/dropdown', group: 'Ui', text: 'Dropdown' },
  { key: '/docs/menu', group: 'Ui', text: 'Menu' },
  { key: '/docs/navbar', group: 'Ui', text: 'Navbar' },
  { key: '/docs/notification', group: 'Ui', text: 'Notification' },
  { key: '/docs/popover', group: 'Ui', text: 'Popover' },
  { key: '/docs/progressbar', group: 'Ui', text: 'Progressbar' },
  { key: '/docs/spinner', group: 'Ui', text: 'Spinner' },
  { key: '/docs/tag', group: 'Ui', text: 'Tag' },
  { key: '/docs/time', group: 'Ui', text: 'Time' },
  { key: '/docs/tooltip', group: 'Ui', text: 'Tooltip' },
  { key: '/docs/collapse', group: 'Data', text: 'Collapse' },
  { key: '/docs/datatable', group: 'Data', text: 'DataTable' },
  { key: '/docs/pagination', group: 'Data', text: 'Pagination' },
  { key: '/docs/table', group: 'Data', text: 'Table' },
  { key: '/docs/tabs', group: 'Data', text: 'Tabs' }
]

const extraMenuItems: MenuItem[] = [
  { key: '/', group: 'General', text: 'Home' },
  { key: '/templates', group: 'General', text: 'Templates' }
]

const isOpen = ref(false)
const mobileRef = ref<HTMLElement| null>(null)
const desktopRef = ref<HTMLElement| null>(null)
const activeItem = ref<MenuItem['key'] | null>(null)
const currentRoute = computed(() => router.currentRoute.value.path)
const menuItems = computed(() => isOpen.value ? [...extraMenuItems, ...baseMenuItems] : baseMenuItems)

const toggle = () => isOpen.value = !isOpen.value

const onItemClick = (item: MenuItem) => {
  activeItem.value = `${item.key}`
  router.push(`${item.key}`)
  isOpen.value = false
}

const scrollToActiveMenuItem = (menuRef: HTMLElement| null) => {
  if (!menuRef) return

  const activeMenuItem = menuRef?.querySelector('.vk-menu__content[data-active="true"]')
  if (!activeMenuItem) return

  activeMenuItem.scrollIntoView({ block: 'center', behavior: 'smooth' })
}

watch(
  [() => currentRoute.value, () => isOpen.value],
  ([newRoute, isOpen]) => {
    activeItem.value = newRoute === '/docs' ? '/docs/get-started' : newRoute

    scrollToActiveMenuItem(desktopRef.value)
    if (isOpen) setTimeout(() => scrollToActiveMenuItem(mobileRef.value), 300)
  }, { immediate: true }
)

onMounted(() => scrollToActiveMenuItem(desktopRef.value))
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
        @click="toggle"
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
        :is-open="isOpen"
        shape="square"
        placement="left"
        @close="toggle"
      >
        <div
          ref="mobileRef"
          class="flex px-4"
        >
          <vk-menu
            :items="menuItems"
            :active="activeItem"
            variant="ghost"
            floating
            @item-click="onItemClick"
          />
        </div>
      </vk-drawer>
      <aside
        ref="desktopRef"
        class="hidden lg:block lg:w-52 bg-surface-container shrink-0 overflow-y-auto border-r border-surface-dim max-h-[calc(100vh_-_3.5rem)] h-screen sticky top-14"
      >
        <vk-menu
          :items="menuItems"
          :active="activeItem"
          variant="ghost"
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
