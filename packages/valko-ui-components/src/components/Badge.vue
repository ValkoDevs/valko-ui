<script setup lang="ts">
import type { BadgeProps } from '#valkoui/types/Badge'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Badge.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'

defineOptions({ name: 'VkBadge' })

const props = withDefaults(defineProps<BadgeProps>(), {
  content: '',
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  placement: 'top-right',
  dot: false,
  hidden: false
})

const classes = useStyle<BadgeProps, SlotStyles>(props, styles)
</script>

<template>
  <div :class="classes.container">
    <span :class="classes.badge">{{ !dot ? content : '' }}</span>
    <slot />
  </div>
</template>
