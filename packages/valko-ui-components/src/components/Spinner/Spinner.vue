<script setup lang="ts">
import { VkIcon, type SpinnerProps, type SlotStyles, useStyle } from '#valkoui'
import styles from './Spinner.styles.ts'

defineOptions({ name: 'VkSpinner' })

const props = withDefaults(defineProps<SpinnerProps>(), {
  variant: 'loader-2',
  color: 'primary',
  size: 'md'
})

const classes = useStyle<SpinnerProps, SlotStyles>(props, styles)
</script>

<template>
  <vk-icon
    :name="props.variant"
    :class="classes"
  />
</template>
