<script setup lang="ts">
import type { IconProps } from '#valkoui/types/Icon'
import styles from '#valkoui/styles/Icon.styles.ts'

defineOptions({ name: 'VkIcon' })

const props = defineProps<IconProps>()

const classes = styles({ ...props, class: props.styleSlots })
</script>

<template>
  <i
    :class="[classes, `ti ti-${props.name}`]"
    :role="props['aria-label'] ? 'img' : undefined"
    :aria-label="props['aria-label']"
    :aria-hidden="!props['aria-label'] || undefined"
  />
</template>
