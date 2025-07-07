<script setup lang="ts">
import type { DividerProps } from '#valkoui/types/Divider'
import styles from '#valkoui/styles/Divider.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'

defineOptions({ name: 'VkDivider' })

const props = withDefaults(defineProps<DividerProps>(), {
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  direction: 'horizontal'
})

const classes = useStyle<DividerProps>(props, styles)
</script>

<template>
  <hr
    :class="classes"
    role="separator"
    :aria-orientation="direction"
    :aria-label="props['aria-label']"
    :aria-labelledby="props['aria-labelledby']"
  >
</template>
