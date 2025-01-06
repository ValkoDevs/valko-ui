<script setup lang="ts">
const tabs = [
  { key: 'example', title: 'Example' },
  { key: 'code', title: 'Code' }
]
</script>

<template>
  <vk-tabs
    :tabs
    grow
    shape="line"
  >
    <template #example>
      <slot name="example" />
    </template>

    <template #code>
      <slot name="code" />
    </template>
  </vk-tabs>
</template>
