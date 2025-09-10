<script setup lang="ts">
import type { SpinnerProps } from '#valkoui/types/Spinner'
import styles from '#valkoui/styles/Spinner.styles.ts'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkSpinner' })

const props = withDefaults(defineProps<SpinnerProps>(), {
  name: 'loader-2',
  color: 'primary',
  size: 'md'
})

const { container, icon } = styles(props)
</script>

<template>
  <div :class="container({ class: styleSlots?.container })">
    <vk-icon
      :name="name"
      :class="icon({ class: styleSlots?.icon })"
    />
  </div>
</template>
