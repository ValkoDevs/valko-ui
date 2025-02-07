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
      class="size-10 lg:hidden"
      @click="toggleMenu"
    >
      <vk-icon
        name="paw"
        class="text-2xl"
      />
    </vk-button>
    <h2 class="text-primary-500 dark:text-primary-400 text-3xl font-serif tracking-wider">
      <nuxt-link to="/">
        ValkoUI
      </nuxt-link>
    </h2>

    <div class="flex gap-2 lg:hidden">
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

    <site-links class="hidden lg:flex" />

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

  <div class="flex flex-col items-center justify-center p-6 h-[80vh]">
    <h1 class="text-4xl font-bold text-center mb-4">
      Welcome to <span class="text-primary-500">ValkoUI</span>
    </h1>
    <p class="text-center mb-6">
      A modern library for building sleek, responsive user interfaces with ease.
    </p>

    <div class="flex flex-col md:flex-row gap-2 max-w-full items-stretch">
      <code-block
        code="npm install @valko-ui/components"
        class="bg-light-3 dark:bg-dark-3 rounded-lg md:order-2"
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
</template>
