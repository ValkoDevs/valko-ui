<script setup lang="ts">
import type { SpinnerProps } from '#valkoui/types/Spinner'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Spinner.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkIcon from './Icon.vue'

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
