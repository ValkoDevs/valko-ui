<script setup lang="ts">
import { CardFooterProps } from '#valkoui/types'
import { useStyle } from './CardFooter.styles'

defineOptions({ name: 'VkCardFooter' })

defineProps<CardFooterProps>()

const classes = useStyle()
</script>

<template>
  <div
    :class="classes"
  >
    <slot />
  </div>
</template>
