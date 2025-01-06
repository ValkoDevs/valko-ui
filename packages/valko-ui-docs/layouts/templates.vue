<script setup lang="ts">
</script>

<template>
  <div>
    <vk-navbar
      color="neutral"
      variant="outlined"
      size="md"
      shape="square"
      flat
      fixed
      class="flex justify-between !bg-light-2 dark:!bg-dark-3"
    >
      <h2 class="text-primary-600 dark:text-primary-400 text-3xl font-serif tracking-wider">
        <nuxt-link to="/">
          ValkoUI
        </nuxt-link>
      </h2>

      <site-links />
    </vk-navbar>

    <main class="w-full mx-auto">
      <NuxtPage />
    </main>
  </div>
</template>
