<script setup lang="ts">
defineOptions({ name: 'ThemeSwitch' })

const theme = useCookie('theme', {
  default: () => 'dark'
})
const iconName = computed(() => theme.value === 'light' ? 'sunset-2' : 'moon-stars')

const onClick = () => theme.value = theme.value === 'light' ? 'dark' : 'light'
</script>

<template>
  <vk-button
    variant="link"
    shape="rounded"
    color="neutral"
    condensed
    size="lg"
    class="size-10"
    @click="onClick"
  >
    <vk-icon
      :name="iconName"
      class="text-2xl"
    />
  </vk-button>
</template>
