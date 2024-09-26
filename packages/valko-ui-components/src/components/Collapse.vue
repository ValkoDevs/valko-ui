<script setup lang="ts">
import { provide, useId } from 'vue'
import type { CollapseProps } from '#valkoui/types/Collapse'
import styles from '#valkoui/styles/Collapse.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'

defineOptions({ name: 'VkCollapse' })

const props = withDefaults(defineProps<CollapseProps>(), {
  variant: 'filled',
  size: 'md',
  separator: 'line',
  shape: 'soft'
})

const classes = useStyle<CollapseProps>(props, styles)

const collapseId = useId()
provide('collapseId', collapseId)
</script>

<template>
  <div
    :class="classes"
    :data-size="size"
    :data-compact="compact"
    :data-separator="separator"
    :data-variant="variant"
    :data-multiple="multiple"
    :data-shape="shape"
    :data-collapse-id="collapseId"
  >
    <slot />
  </div>
</template>
