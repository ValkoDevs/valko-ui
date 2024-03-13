<script setup lang="ts">
import { CollapseProps } from '#valkoui/types'
import { useStyle } from './Collapse.styles'

defineOptions({ name: 'VkCollapse' })

const props = withDefaults(defineProps<CollapseProps>(), {
  variant: 'filled',
  size: 'md',
  separator: 'line',
  shape: 'soft'
})

const classes = useStyle(props)
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
