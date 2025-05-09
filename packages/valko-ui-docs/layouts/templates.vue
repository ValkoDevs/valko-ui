<script setup lang="ts">
import type { MenuItem } from '@valko-ui/components'

const router = useRouter()

const menuItems: MenuItem[] = [
  { key: '/', group: 'General', text: 'Home' },
  { key: '/docs', group: 'General', text: 'Documentation' },
  { key: '/templates', group: 'General', text: 'Templates' },
  { key: '/templates/top-nav', group: 'Layout', text: 'Top Navbar' },
  { key: '/templates/left-menu', group: 'Layout', text: 'Left Menu' },
  { key: '/templates/left-menu-top-nav', group: 'Layout', text: 'Left Menu Top Navbar' },
  { key: '/templates/vertical-nav', group: 'Layout', text: 'Vertical Navbar' },
  { key: '/templates/vertical-nav-menu', group: 'Layout', text: 'Vertical Navbar & Menu' },
  { key: '/templates/profile', group: 'Forms', text: 'Profile' },
  { key: '/templates/payment', group: 'Forms', text: 'Payment' },
  { key: '/templates/address', group: 'Forms', text: 'Address' },
  { key: '/templates/login', group: 'Forms', text: 'Login' },
  { key: '/templates/signup', group: 'Forms', text: 'Signup' },
  { key: '/templates/settings', group: 'Forms', text: 'Settings' },
  { key: '/templates/product-list-page', group: 'E-Commerce', text: 'Product List Page' },
  { key: '/templates/product-detail-page', group: 'E-Commerce', text: 'Product Detail Page' },
  { key: '/templates/datatable', group: 'Data', text: 'Datatable' },
  { key: '/templates/pricing', group: 'Data', text: 'Pricing' },
  { key: '/templates/dashboard', group: 'Data', text: 'Dashboard' },
  { key: '/templates/user-management', group: 'Data', text: 'User Management' },
  { key: '/templates/user-edit', group: 'Data', text: 'User Edit' },
  { key: '/templates/filters-horizontal', group: 'Filters', text: 'Filters Horizontal' },
  { key: '/templates/filters-vertical', group: 'Filters', text: 'Filters Vertical' }
]

const activeItem = ref<MenuItem['key'] | null>('/templates')
const menuOpen = ref(false)

const onItemClick = (item: MenuItem) => {
  activeItem.value = item.key
  router.push(`${item.key}`)
  menuOpen.value = false
}

const toggleMenu = () => menuOpen.value = !menuOpen.value
</script>

<template>
  <div>
    <vk-navbar
      color="secondary"
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

      <vk-drawer
        :is-open="menuOpen"
        shape="soft"
        placement="left"
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
    </vk-navbar>

    <main class="w-full mx-auto">
      <NuxtPage />
    </main>
  </div>
</template>
