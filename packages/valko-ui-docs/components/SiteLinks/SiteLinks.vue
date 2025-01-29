<script setup lang="ts">
defineOptions({ name: 'SiteLinks' })

const route = useRoute()
</script>

<template>
  <div class="flex gap-2">
    <nav>
      <ul class="flex gap-2 justify-between items-center h-full mr-4">
        <li>
          <nuxt-link to="/">
            <vk-button
              variant="link"
              :color="route.fullPath === '/' ? 'primary' : 'neutral'"
              size="sm"
            >
              Home
            </vk-button>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/docs">
            <vk-button
              variant="link"
              :color="route.fullPath.startsWith('/docs') ? 'primary' : 'neutral'"
              size="sm"
            >
              Documentation
            </vk-button>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/templates">
            <vk-button
              variant="link"
              :color="route.fullPath.startsWith('/templates') ? 'primary' : 'neutral'"
              size="sm"
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
</template>
