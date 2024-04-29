<script setup lang="ts">
import { type BadgeProps, type SlotStyles, useStyle } from '#valkoui'
import style from './Badge.styles.ts'

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

const classes = useStyle<BadgeProps, SlotStyles>(props, style)
</script>

<template>
  <div :class="classes.container">
    <span :class="classes.content">{{ !props.dot ? props.content : '' }}</span>
    <slot />
  </div>
</template>
