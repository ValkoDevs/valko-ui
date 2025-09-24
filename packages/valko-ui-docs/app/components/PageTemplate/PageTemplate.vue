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
    class="w-full"
  >
    <template #example-content>
      <div class="w-full p-4">
        <slot name="example" />
      </div>
    </template>

    <template #code-content>
      <div class="w-full p-4">
        <slot name="code" />
      </div>
    </template>
  </vk-tabs>
</template>
