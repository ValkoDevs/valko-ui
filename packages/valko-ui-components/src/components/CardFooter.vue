<script setup lang="ts">
import type { CardFooterProps } from '#valkoui/types/Card'
import styles from '#valkoui/styles/CardFooter.styles.ts'

defineOptions({ name: 'VkCardFooter' })

const props = defineProps<CardFooterProps>()

const classes = styles({ ...props, class: props.styleSlots })
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
