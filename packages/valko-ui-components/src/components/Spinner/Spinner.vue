<script setup lang="ts">
import { SpinnerProps } from '#valkoui/types'
import { VkIcon } from '..'
import { useStyle } from './Spinner.styles'

defineOptions({ name: 'VkSpinner' })

const props = withDefaults(defineProps<SpinnerProps>(), {
  variant: 'loader-2',
  color: 'primary',
  size: 'md'
})
const classes = useStyle(props)
</script>

<template>
  <vk-icon
    :name="props.variant"
    :class="classes"
  />
</template>
