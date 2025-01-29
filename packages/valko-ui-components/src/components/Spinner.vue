<script setup lang="ts">
import type { SpinnerProps } from '#valkoui/types/Spinner'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Spinner.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkSpinner' })

const props = withDefaults(defineProps<SpinnerProps>(), {
  name: 'loader-2',
  color: 'primary',
  size: 'md'
})

const classes = useStyle<SpinnerProps, SlotStyles>(props, styles)
</script>

<template>
  <div :class="classes.container">
    <vk-icon
      :name="name"
      :class="[classes.icon, className ? className : classes.iconColor]"
    />
  </div>
</template>
