<script setup lang="ts">
import { reactive, provide } from 'vue'
import type { CollapseProps } from '#valkoui/types/Collapse'
import styles from '#valkoui/styles/Collapse.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'

defineOptions({ name: 'VkCollapse' })

const props = withDefaults(defineProps<CollapseProps>(), {
  variant: 'filled',
  size: 'md',
  separator: 'line',
  shape: 'soft',
  multiple: false
})

const classes = useStyle<CollapseProps>(props, styles)

const itemStates = reactive<Record<string, boolean>>({})

const toggleItem = (id: string) => {
  const toggleAction = props.multiple
    ? () => itemStates[id] = !itemStates[id]
    : () => {
      const isAlreadyOpen = itemStates[id]
      Object.keys(itemStates).forEach(key => itemStates[key] = false)
      if (!isAlreadyOpen) itemStates[id] = true
    }

  toggleAction()
}

provide('itemsManagement', { itemStates, toggleItem })
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
