<script setup lang="ts">
const tabs = [
  { key: 'npm', title: 'npm' },
  { key: 'yarn', title: 'yarn' },
  { key: 'pnpm', title: 'pnpm' }
]

const nuxtConfig = `// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@valko-ui/components/nuxt'],
  vite: {
    optimizeDeps: {
      include: ['@valko-ui/components'],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  }
})
`

const tailwindConfig = `/** @type {import('tailwindcss').Config} */
import ValkoUI from '@valko-ui/components/tailwind.preset'
export default {
  presets: [ValkoUI],
  content: [
    './components/**/*.{html,js,ts,vue}',
    './pages/**/*.{html,js,ts,vue}',
    './templates/**/*.{html,js,ts,vue}',
    './composables/**/*.{html,js,ts,vue}',
    './app.vue',
    './node_modules/@valko-ui/components/**/*.{html,js,ts,vue,css}'
  ],
  theme: {
    extend: {}
  }
}
`

const example = `<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)
<\u002Fscript>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
    <h1 class="text-3xl font-bold text-center mb-4">
      Welcome to
      <span class="text-primary-500">ValkoUI</span>
    </h1>

    <p class="text-gray-700 text-center mb-6">
      A modern component library to build sleek and responsive user interfaces effortlessly.
    </p>

    <div class="flex flex-col items-center gap-4 bg-white shadow-lg p-6 rounded-lg">
      <span class="text-xl font-semibold">
        Counter: <span class="text-primary-500">{{ counter }}</span>
      </span>
      <vk-button
        color="primary"
        size="md"
        @click="() => counter++"
      >
        Increment Counter
      </vk-button>
    </div>
  </div>
</template>
`
</script>

<template>
  <div class="flex flex-col gap-6 mt-6">
    <div>
      <h2 class="text-2xl font-semibold">
        Introduction
      </h2>
      <p>
        ValkoUI is a Vue 3 and Nuxt component library built with TailwindCSS. It empowers developers to create modern, responsive, and accessible web interfaces effortlessly. Whether you're starting out or are an experienced developer, ValkoUI simplifies your workflow with ready-to-use components and flexible configurations.
      </p>
      <vk-divider
        color="neutral"
        size="xs"
      />
    </div>

    <div class="flex flex-col gap-6 mt-6">
      <h2 class="text-2xl font-semibold">
        Quick Start with Nuxt
      </h2>

      <div class="mt-4">
        <h3 class="text-lg font-medium">
          1. Create a Nuxt Project
        </h3>
        <code-block
          code="npx nuxi@latest init"
          class="p-5 bg-light-3 dark:bg-dark-3 rounded-lg mt-2"
        />
      </div>

      <div class="mt-4">
        <h3 class="text-lg font-medium">
          2. Install TailwindCSS
        </h3>
        <vk-tabs
          :tabs="tabs"
          shape="line"
          variant="ghost"
          grow
        >
          <template #npm>
            <code-block
              code="npm install --save-dev @nuxtjs/tailwindcss"
              class="p-5 bg-light-3 dark:bg-dark-3 rounded-lg mt-2"
            />
          </template>
          <template #yarn>
            <code-block
              code="yarn add --dev @nuxtjs/tailwindcss"
              class="p-5 bg-light-3 dark:bg-dark-3 rounded-lg mt-2"
            />
          </template>
          <template #pnpm>
            <code-block
              code="pnpm add --save-dev @nuxtjs/tailwindcss"
              class="p-5 bg-light-3 dark:bg-dark-3 rounded-lg mt-2"
            />
          </template>
        </vk-tabs>
      </div>

      <div class="mt-4">
        <h3 class="text-lg font-medium">
          3. Install Tailwind Variants
        </h3>
        <vk-tabs
          :tabs="tabs"
          shape="line"
          variant="ghost"
          grow
        >
          <template #npm>
            <code-block
              code="npm install tailwind-variants"
              class="p-5 bg-light-3 dark:bg-dark-3 rounded-lg mt-2"
            />
          </template>
          <template #yarn>
            <code-block
              code="yarn add tailwind-variants"
              class="p-5 bg-light-3 dark:bg-dark-3 rounded-lg mt-2"
            />
          </template>
          <template #pnpm>
            <code-block
              code="pnpm add tailwind-variants"
              class="p-5 bg-light-3 dark:bg-dark-3 rounded-lg mt-2"
            />
          </template>
        </vk-tabs>
      </div>

      <div class="mt-4">
        <h3 class="text-lg font-medium">
          4. Install ValkoUI
        </h3>
        <code-block
          code="npm install @valko-ui/components"
          class="p-5 bg-light-3 dark:bg-dark-3 rounded-lg mt-2"
        />
      </div>

      <div class="mt-4">
        <h3 class="text-lg font-medium">
          5. Configure Nuxt
        </h3>
        <p>Add the ValkoUI and TailwindCSS modules to your <span class="text-primary-500">nuxt.config.ts</span> file:</p>
        <code-block
          :code="nuxtConfig"
          language="ts"
          class="p-5 bg-light-3 dark:bg-dark-3 rounded-lg mt-2"
        />
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="text-lg font-medium">
          6. Initialize Tailwind Config
        </h3>
        <p>Run the following command to create a TailwindCSS configuration file:</p>
        <code-block
          code="npx tailwindcss init"
          class="p-5 bg-light-3 dark:bg-dark-3 rounded-lg mt-2"
        />
        <p>Then update your <span class="text-primary-500">tailwind.config.js</span> file to include the ValkoUI preset:</p>
        <code-block
          :code="tailwindConfig"
          language="ts"
          class="p-5 bg-light-3 dark:bg-dark-3 rounded-lg mt-2"
        />
      </div>

      <div>
        <h3 class="text-lg font-medium">
          7. You're ready to build!
        </h3>
        <p>Now that everything is set up, you can start using ValkoUI components in your project. Here's a small example to get you started:</p>
        <code-block
          :code="example"
          class="p-5 bg-light-3 dark:bg-dark-3 rounded-lg mt-2"
        />
      </div>
    </div>
  </div>
</template>
