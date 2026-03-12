<script setup lang="ts">
import type { MenuItem } from '@valko-ui/components'

const router = useRouter()

const menuItems: MenuItem[] = [
  { key: '/', group: 'General', text: 'Home' },
  { key: '/docs', group: 'General', text: 'Documentation' },
  { key: '/templates', group: 'General', text: 'Templates' }
]

const activeItem = ref<MenuItem['key'] | null>('/')
const menuOpen = ref(false)

const onItemClick = (item: MenuItem) => {
  activeItem.value = item.key
  router.push(`${item.key}`)
  menuOpen.value = false
}

const toggleMenu = () => menuOpen.value = !menuOpen.value
</script>

<template>
  <vk-navbar
    color="surface"
    variant="outlined"
    size="md"
    shape="square"
    fixed
    class="flex justify-between !bg-surface-container !border-none"
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
  </vk-navbar>

  <div class="flex w-full h-full bg-gradient-to-b from-primary/[.2] to-surface relative">
    <vk-divider
      color="secondary"
      class="absolute top-0 my-0!"
    />
    <div class="relative z-1 flex flex-col w-full h-full bg-gradient-to-r from-surface from-10% via-transparent via-50% to-surface to-90%">
      <div class="w-full grid grid-cols-2 gap-3">
        <div class="flex flex-col items-center justify-center p-6 h-[80vh]">
          <h1 class="text-4xl font-bold text-center mb-4">
            Welcome to <span class="text-primary">ValkoUI</span>
          </h1>
          <p class="text-center mb-6">
            A modern library for building sleek, responsive user interfaces with ease.
          </p>

          <div class="flex flex-col md:flex-row gap-2 max-w-full items-stretch">
            <code-block
              code="npm install @valko-ui/components"
              class="md:order-2"
            />
            <nuxt-link to="/docs">
              <vk-button class="h-full gap-2 items-center">
                <span class="text-nowrap">Get Started</span>  <vk-icon
                  name="arrow-right"
                  class="text-xl"
                />
              </vk-button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
