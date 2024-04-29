<script setup lang="ts">
import { type DividerProps, useStyle } from '#valkoui'
import styles from './Divider.styles.ts'

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
  <hr :class="classes">
</template>
