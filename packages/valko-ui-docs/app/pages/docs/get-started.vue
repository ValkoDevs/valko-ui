<script setup lang="ts">
const selectedTab = ref(0)

const tabs = [
  { key: 'npm', title: 'npm' },
  { key: 'yarn', title: 'yarn' },
  { key: 'pnpm', title: 'pnpm' }
]

const nuxtConfig = `// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@valko-ui/components/nuxt'
  ],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}
    }
  }
})
`

const valkoUICss = `@import "@valko-ui/components/styles";
@source "../../node_modules/@valko-ui/components/dist";
@custom-variant dark (&:where(.dark, .dark *));
`

const example = `<script setup lang="ts">
import { ref } from 'vue'
import '@/valko-ui.css'

const counter = ref(0)
<\u002Fscript>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
    <h1 class="text-3xl font-bold text-center mb-4">
      Welcome to
      <span class="text-primary">ValkoUI</span>
    </h1>

    <p class="text-gray-700 text-center mb-6">
      A modern component library to build sleek and responsive user interfaces effortlessly.
    </p>

    <div class="flex flex-col items-center gap-4 bg-white shadow-lg p-6 rounded-lg">
      <span class="text-xl font-semibold">
        Counter: <span class="text-primary">{{ counter }}</span>
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

const tsconfig = `{
  // ...other configs...
  "compilerOptions": {
    // ...existing compiler options...
    "paths": {
    // ...existing compiler options...
      "#valkoui/*": [
        "./node_modules/@valko-ui/components/dist/*"
      ],
      "#valkoui": [
        "./node_modules/@valko-ui/components/dist"
      ]
    }
  }
}
`
</script>

<template>
  <div class="flex flex-col gap-6 px-4 md:px-6 lg:px-10 py-5">
    <div>
      <h2 class="text-2xl font-semibold">
        Introduction
      </h2>
      <p>
        ValkoUI is a Vue 3 and Nuxt component library built with TailwindCSS. It empowers developers to create modern, responsive, and accessible web interfaces effortlessly.
      </p>
      <vk-divider
        color="surface"
        size="xs"
      />
    </div>

    <div class="flex flex-col gap-8">
      <h2 class="text-2xl font-semibold">
        Quick Start with Nuxt 3 or 4
      </h2>

      <div class="flex flex-col gap-4">
        <h3 class="text-lg font-medium">
          1. Create a Nuxt Project
        </h3>
        <vk-tabs
          v-model="selectedTab"
          :tabs="tabs"
          shape="line"
          variant="ghost"
          grow
        >
          <template #npm-content>
            <code-block code="npm create nuxt@latest <project-name>" />
          </template>
          <template #yarn-content>
            <code-block code="yarn create nuxt@latest <project-name>" />
          </template>
          <template #pnpm-content>
            <code-block code="pnpm create nuxt@latest <project-name>" />
          </template>
        </vk-tabs>
        <vk-alert
          color="accent"
          variant="ghost"
        >
          If you want to use Nuxt 3 instead of 4, add <span class="bg-black/[.2] px-2">-- -t v3</span> at the end of the create command.
        </vk-alert>
      </div>

      <div class="flex flex-col gap-4">
        <h3 class="text-lg font-medium">
          2. Install Required Dependencies
        </h3>
        <vk-tabs
          v-model="selectedTab"
          :tabs="tabs"
          shape="line"
          variant="ghost"
          grow
        >
          <template #npm-content>
            <code-block code="npm install tailwindcss @tailwindcss/postcss tailwind-variants @headlessui/vue toastify-js" />
          </template>
          <template #yarn-content>
            <code-block code="yarn add tailwindcss @tailwindcss/postcss tailwind-variants @headlessui/vue toastify-js" />
          </template>
          <template #pnpm-content>
            <code-block code="pnpm add tailwindcss @tailwindcss/postcss tailwind-variants @headlessui/vue toastify-js" />
          </template>
        </vk-tabs>
      </div>

      <div class="flex flex-col gap-4">
        <h3 class="text-lg font-medium">
          3. Install ValkoUI Library
        </h3>
        <vk-tabs
          v-model="selectedTab"
          :tabs="tabs"
          shape="line"
          variant="ghost"
          grow
        >
          <template #npm-content>
            <code-block code="npm install @valko-ui/components" />
          </template>
          <template #yarn-content>
            <code-block code="yarn add @valko-ui/components" />
          </template>
          <template #pnpm-content>
            <code-block code="pnpm add @valko-ui/components" />
          </template>
        </vk-tabs>
        <p class="mt-2 text-primary font-semibold">
          This is the core ValkoUI library. Make sure to install it!
        </p>
      </div>

      <div class=" flex flex-col gap-4">
        <h3 class="text-lg font-medium">
          4. Configure Nuxt
        </h3>
        <p>Add the ValkoUI module and TailwindCSS plugin to your <span class="text-primary">nuxt.config.ts</span> file:</p>
        <code-block
          :code="nuxtConfig"
          language="ts"
        />

        <vk-alert
          color="warning"
          variant="ghost"
          title="If you use Nuxt 4 or newer"
        >
          <p>Nuxt 4 relies a lot more on Vite compiler so we need to add aliases to <span class="underline">tsconfig.json</span> for the library to work correctly.</p>
        </vk-alert>

        <code-block
          :code="tsconfig"
          language="ts"
        />
      </div>

      <div class=" flex flex-col gap-4">
        <h3 class="text-lg font-medium">
          5. Create ValkoUI CSS
        </h3>
        <p>Create a CSS file (e.g. <span class="text-primary">valko-ui.css</span>) in your project and add the following:</p>
        <code-block
          :code="valkoUICss"
          language="css"
        />
        <p>
          This will import ValkoUI styles, source, and enable dark mode support. (The source is your relative path to the ValkoUI components CSS file, which is usually located in <span class="text-primary">node_modules/@valko-ui/components/dist</span>.)
        </p>
        <vk-alert
          color="accent"
          variant="ghost"
        >
          If you want to override any styles check out the
          <nuxt-link
            to="/docs/theme"
            class="underline"
          >
            theme documentation
          </nuxt-link>.
        </vk-alert>
      </div>

      <div class="flex flex-col gap-4">
        <h3 class="text-lg font-medium">
          6. Import ValkoUI CSS in app.vue
        </h3>
        <p>Import your <span class="text-primary">valko-ui.css</span> file in your <span class="text-primary">app.vue</span> script section:</p>
        <code-block
          code="import '@/valko-ui.css'"
          language="ts"
        />
      </div>

      <div class="flex flex-col gap-4">
        <h3 class="text-lg font-medium">
          7. You're ready to build!
        </h3>
        <p>Now that everything is set up, you can start using ValkoUI components in your project. Here's a small example to get you started:</p>
        <code-block :code="example" />

        <vk-alert
          color="accent"
          variant="ghost"
        >
          <p>
            Want to see more? Check out our
            <nuxt-link
              to="/templates"
              class="underline"
            >
              templates
            </nuxt-link>
            for ready-to-use UI examples!
          </p>
        </vk-alert>
      </div>
    </div>
  </div>
</template>
