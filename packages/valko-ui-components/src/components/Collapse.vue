<script setup lang="ts">
import { reactive, provide } from 'vue'
import type { CollapseProps } from '#valkoui/types/Collapse'
import styles from '#valkoui/styles/Collapse.styles.ts'

defineOptions({ name: 'VkCollapse' })

const props = withDefaults(defineProps<CollapseProps>(), {
  variant: 'filled',
  size: 'md',
  separator: 'line',
  shape: 'soft',
  multiple: false,
  styleSlots: undefined
})

const classes = styles({ ...props, class: props.styleSlots })

const items = reactive<Record<string, boolean>>({})

const toggleItem = (id: string | undefined) => {
  if (!id) return

  const toggleAction = props.multiple
    ? () => items[id] = !items[id]
    : () => {
      const isAlreadyOpen = items[id]
      Object.keys(items).forEach(key => items[key] = false)
      if (!isAlreadyOpen) items[id] = true
    }

  toggleAction()
}

provide('itemStates', { items, toggleItem })
</script>

<template>
  <div
    :class="classes"
    :data-size="size"
    :data-compact="compact"
    :data-separator="separator"
    :data-variant="variant"
    :data-shape="shape"
  >
    <slot />
  </div>
</template>
