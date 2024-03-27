<script setup lang="ts">
import { DividerProps } from '#valkoui/types'
import { useStyle } from './Divider.styles'

defineOptions({ name: 'VkDivider' })

const props = withDefaults(defineProps<DividerProps>(), {
  direction: 'vertical'
})

const classes = useStyle(props)
</script>

<template>
  <div :class="classes" />
</template>
