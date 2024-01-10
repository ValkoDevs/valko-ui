<script setup lang="ts">
import { CollapseProps } from '@/components/Collapse/interfaces'
import useStyle from './Collapse.styles'

defineOptions({ name: 'VkCollapse' })

const props = withDefaults(defineProps<CollapseProps>(), {
  variant: 'filled',
  size: 'md',
  separator: 'line'
})

const classes = useStyle(props)
</script>

<template>
  <div
    :class="classes"
    :data-size="props.size"
    :data-compact="props.compact"
    :data-separator="props.separator"
    :data-variant="props.variant"
    :data-multiple="props.multiple"
  >
    <slot />
  </div>
</template>
