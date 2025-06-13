<script setup lang="ts">
defineOptions({ name: 'SiteLinks' })

const route = useRoute()
</script>

<template>
  <div class="flex gap-2">
    <nav>
      <ul class="hidden lg:flex gap-2 justify-between items-center h-full mr-4">
        <li>
          <nuxt-link to="/">
            <vk-button
              variant="link"
              :color="route.fullPath === '/' ? 'primary' : 'surface'"
              size="sm"
              class="font-bold"
            >
              Home
            </vk-button>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/docs">
            <vk-button
              variant="link"
              :color="route.fullPath.startsWith('/docs') ? 'primary' : 'surface'"
              size="sm"
              class="font-bold"
            >
              Documentation
            </vk-button>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/templates">
            <vk-button
              variant="link"
              :color="route.fullPath.startsWith('/templates') ? 'primary' : 'surface'"
              size="sm"
              class="font-bold"
            >
              Templates
            </vk-button>
          </nuxt-link>
        </li>
      </ul>
    </nav>

    <theme-switch />
    <a
      href="https://github.com/ValkoDevs/valko-ui"
      target="_blank"
    >
      <vk-button
        variant="link"
        shape="rounded"
        color="surface"
        condensed
        size="lg"
        class="size-10"
      >
        <vk-icon
          name="brand-github"
          class="text-2xl p-2"
        />
      </vk-button>
    </a>
  </div>
</template>
