<script setup lang="ts">
import { type CollapseProps, useStyle } from '#valkoui'
import styles from './Collapse.styles.ts'

defineOptions({ name: 'VkCollapse' })

const props = withDefaults(defineProps<CollapseProps>(), {
  variant: 'filled',
  size: 'md',
  separator: 'line',
  shape: 'soft'
})

const classes = useStyle<CollapseProps>(props, styles)
const collapseId = 'collapse-' + Math.floor(Math.random() * 100000)
</script>

<template>
  <div
    :class="classes"
    :data-size="props.size"
    :data-compact="props.compact"
    :data-separator="props.separator"
    :data-variant="props.variant"
    :data-multiple="props.multiple"
    :data-shape="props.shape"
    :data-collapse-id="collapseId"
  >
    <slot />
  </div>
</template>
