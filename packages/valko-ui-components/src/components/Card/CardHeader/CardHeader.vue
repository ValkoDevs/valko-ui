<script setup lang="ts">
import { useStyle } from './CardHeader.styles'

defineOptions({ name: 'VkCardHeader' })

const classes = useStyle()
</script>

<template>
  <div
    :class="classes"
  >
    <slot />
  </div>
</template>
