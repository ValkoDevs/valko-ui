<script setup lang="ts">
const installCommand = 'npm install @valko-ui/components'
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
    <h2 class="text-primary-500 dark:text-primary-400 text-3xl font-serif tracking-wider">
      <nuxt-link to="/">
        ValkoUI
      </nuxt-link>
    </h2>

    <site-links />
  </vk-navbar>

  <div class="flex flex-col items-center justify-center p-6 h-[80vh]">
    <h1 class="text-4xl font-bold text-center mb-4">
      Welcome to <span class="text-primary-500">ValkoUI</span>
    </h1>
    <p class="text-center mb-6">
      A modern library for building sleek, responsive user interfaces with ease.
    </p>

    <div class="flex gap-2">
      <nuxt-link to="/docs">
        <vk-button class="flex gap-4">
          Get Started  <vk-icon name="arrow-right" />
        </vk-button>
      </nuxt-link>

      <code-block
        :code="installCommand"
        :copy="installCommand"
        class="bg-light-3 dark:bg-dark-3 rounded-lg flex justify-start items-center"
      />
    </div>
  </div>
</template>
