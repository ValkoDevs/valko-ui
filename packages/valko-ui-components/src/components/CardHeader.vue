<script setup lang="ts">
import styles from '#valkoui/styles/CardHeader.styles.ts'
import type { CardHeaderProps } from '#valkoui/types/Card'

defineOptions({ name: 'VkCardHeader' })

const props = withDefaults(defineProps<CardHeaderProps>(), {
  styleSlots: undefined
})

const classes = styles({ ...props, class: props.styleSlots })
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
