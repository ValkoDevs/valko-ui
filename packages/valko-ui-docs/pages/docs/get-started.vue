<!-- eslint-disable no-useless-escape -->
<script setup lang="ts">
const tabs = [
  { key: 'npm', title: 'npm' },
  { key: 'yarn', title: 'yarn' },
  { key: 'pnpm', title: 'pnpm' }
]

const nuxtCommand = 'npx nuxi@latest init'

const valkoCommand = 'npm install @valko-ui/components'

const tailwindCommands = {
  npm: 'npm install --save-dev @nuxtjs/tailwindcss',
  yarn: 'yarn add --dev @nuxtjs/tailwindcss',
  pnpm: 'pnpm add -D @nuxtjs/tailwindcss'
}

const tailwindVariantsCommands = {
  npm: 'npm install tailwind-variants',
  yarn: 'yarn add tailwind-variants',
  pnpm: 'pnpm add tailwind-variants'
}

const tailwindCommand = 'npx tailwindcss init'

const nuxtConfig = `
// https://nuxt.com/docs/api/configuration/nuxt-config
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

const tailwindConfig = `
/** @type {import('tailwindcss').Config} */
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

const example = `
<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)
<\/script>

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
          :code="nuxtCommand"
          :copy="nuxtCommand"
          class="p-5 bg-light-3 dark:bg-dark-3 rounded-lg mt-2"
        />
      </div>

      <div class="mt-4">
        <h3 class="text-lg font-medium">
          2. Install ValkoUI
        </h3>
        <code-block
          :code="valkoCommand"
          :copy="valkoCommand"
          class="p-5 bg-light-3 dark:bg-dark-3 rounded-lg mt-2"
        />
      </div>

      <div class="mt-4">
        <h3 class="text-lg font-medium">
          3. Install TailwindCSS
        </h3>
        <vk-tabs
          :tabs="tabs"
          shape="line"
          variant="ghost"
          grow
        >
          <template #npm>
            <code-block
              :code="tailwindCommands.npm"
              :copy="tailwindCommands.npm"
              class="p-5 bg-light-3 dark:bg-dark-3 rounded-lg mt-2"
            />
          </template>
          <template #yarn>
            <code-block
              :code="tailwindCommands.yarn"
              :copy="tailwindCommands.yarn"
              class="p-5 bg-light-3 dark:bg-dark-3 rounded-lg mt-2"
            />
          </template>
          <template #pnpm>
            <code-block
              :code="tailwindCommands.pnpm"
              :copy="tailwindCommands.pnpm"
              class="p-5 bg-light-3 dark:bg-dark-3 rounded-lg mt-2"
            />
          </template>
        </vk-tabs>
      </div>

      <div class="mt-4">
        <h3 class="text-lg font-medium">
          4. Install Tailwind Variants
        </h3>
        <vk-tabs
          :tabs="tabs"
          shape="line"
          variant="ghost"
          grow
        >
          <template #npm>
            <code-block
              :code="tailwindVariantsCommands.npm"
              :copy="tailwindVariantsCommands.npm"
              class="p-5 bg-light-3 dark:bg-dark-3 rounded-lg mt-2"
            />
          </template>
          <template #yarn>
            <code-block
              :code="tailwindVariantsCommands.yarn"
              :copy="tailwindVariantsCommands.yarn"
              class="p-5 bg-light-3 dark:bg-dark-3 rounded-lg mt-2"
            />
          </template>
          <template #pnpm>
            <code-block
              :code="tailwindVariantsCommands.pnpm"
              :copy="tailwindVariantsCommands.pnpm"
              class="p-5 bg-light-3 dark:bg-dark-3 rounded-lg mt-2"
            />
          </template>
        </vk-tabs>
      </div>

      <div class="mt-4">
        <h3 class="text-lg font-medium">
          5. Configure Nuxt
        </h3>
        <p>Add the ValkoUI and TailwindCSS modules to your Nuxt configuration file:</p>
        <code-block
          :code="nuxtConfig"
          :copy="nuxtConfig"
          language="js"
          class="p-5 bg-light-3 dark:bg-dark-3 rounded-lg mt-2"
        />
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="text-lg font-medium">
          6. Initialize Tailwind Config
        </h3>
        <p>Run the following command to create a TailwindCSS configuration file:</p>
        <code-block
          :code="tailwindCommand"
          :copy="tailwindCommand"
          class="p-5 bg-light-3 dark:bg-dark-3 rounded-lg mt-2"
        />
        <p>Then update your <code>tailwind.config.js</code> to include the ValkoUI preset:</p>
        <code-block
          :code="tailwindConfig"
          :copy="tailwindConfig"
          language="js"
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
          :copy="example"
          class="p-5 bg-light-3 dark:bg-dark-3 rounded-lg mt-2"
        />
      </div>
    </div>
  </div>
</template>
