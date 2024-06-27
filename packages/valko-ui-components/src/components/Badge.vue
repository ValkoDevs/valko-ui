<script setup lang="ts">
import type { BadgeProps } from '#valkoui/types/Badge'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Badge.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'

defineOptions({ name: 'VkBadge' })

const props = withDefaults(defineProps<BadgeProps>(), {
  content: '',
  color: 'primary',
  size: 'md',
  shape: 'soft',
  placement: 'top-right',
  outlined: false,
  dot: false,
  hidden: false,
  flat: false
})

const classes = useStyle<BadgeProps, SlotStyles>(props, styles)
</script>

<template>
  <div :class="classes.container">
    <span :class="classes.content">{{ !dot ? content : '' }}</span>
    <slot />
  </div>
</template>
