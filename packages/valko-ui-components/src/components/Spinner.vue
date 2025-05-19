<script setup lang="ts">
import type { SpinnerProps } from '#valkoui/types/Spinner'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Spinner.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkIcon from './Icon.vue'
import { computed } from 'vue'

defineOptions({ name: 'VkSpinner' })

const props = withDefaults(defineProps<SpinnerProps>(), {
  name: 'loader-2',
  color: 'primary',
  size: 'md'
})

const classes = useStyle<SpinnerProps, SlotStyles>(props, styles)

const iconClasses = computed(() => [
  classes.value.icon,
  ...(props.classes
    ? Array.isArray(props.classes)
      ? props.classes
      : [props.classes]
    : [classes.value.iconColor])
])
</script>

<template>
  <div :class="classes.container">
    <vk-icon
      :name="name"
      :class="iconClasses"
    />
  </div>
</template>
