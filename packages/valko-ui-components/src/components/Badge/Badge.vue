<script setup lang="ts">
import { BadgeProps } from '#valkoui/components/Badge/interfaces'
import useStyle from './Badge.styles'

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

defineOptions({ name: 'VkBadge' })

const classes = useStyle(props)
</script>

<template>
  <div :class="classes.container">
    <span :class="classes.content">{{ !props.dot ? props.content : '' }}</span>
    <slot />
  </div>
</template>
