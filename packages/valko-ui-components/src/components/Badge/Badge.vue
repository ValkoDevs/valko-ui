<script setup lang="ts">
import { BadgeProps } from '#valkoui/types'
import { useStyle } from './Badge.styles'

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

const classes = useStyle(props)
</script>

<template>
  <div :class="classes.container">
    <span :class="classes.content">{{ !props.dot ? props.content : '' }}</span>
    <slot />
  </div>
</template>
