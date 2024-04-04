<script setup lang="ts">
import { DividerProps } from '#valkoui/types'
import { useStyle } from './Divider.styles'

defineOptions({ name: 'VkDivider' })

const props = withDefaults(defineProps<DividerProps>(), {
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  direction: 'horizontal'
})

const classes = useStyle(props)
</script>

<template>
  <hr :class="classes">
</template>
