<script setup lang="ts">
import { computed } from 'vue'
import type { SpinnerProps } from '#valkoui/types/Spinner'
import styles from '#valkoui/styles/Spinner.styles.ts'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkSpinner' })

const props = withDefaults(defineProps<SpinnerProps>(), {
  name: 'loader-2',
  color: 'primary',
  size: 'md'
})

const s = computed(() => styles(props))
</script>

<template>
  <div :class="s.container({ class: styleSlots?.container })">
    <vk-icon
      :name="name"
      :class="s.icon({ class: styleSlots?.icon })"
    />
  </div>
</template>
