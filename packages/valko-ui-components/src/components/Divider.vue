<script setup lang="ts">
import { computed } from 'vue'
import type { DividerProps } from '#valkoui/types/Divider'
import styles from '#valkoui/styles/Divider.styles.ts'

defineOptions({ name: 'VkDivider' })

const props = withDefaults(defineProps<DividerProps>(), {
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  direction: 'horizontal'
})

const s = computed(() => styles({ ...props, class: props.styleSlots }))
</script>

<template>
  <hr
    :class="s"
    role="separator"
    :aria-orientation="direction"
    :aria-label="props['aria-label']"
    :aria-labelledby="props['aria-labelledby']"
  >
</template>
