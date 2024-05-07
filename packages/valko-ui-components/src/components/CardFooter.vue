<script setup lang="ts">
import type { CardFooterProps } from '#valkoui/types/Card'
import useStyle from '#valkoui/composables/useStyle.ts'
import styles from '#valkoui/styles/CardFooter.styles.ts'

defineOptions({ name: 'VkCardFooter' })

const props = defineProps<CardFooterProps>()

const classes = useStyle<CardFooterProps>(props, styles)
</script>

<template>
  <div
    :class="classes"
  >
    <slot />
  </div>
</template>
