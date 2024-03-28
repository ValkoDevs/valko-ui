<script setup lang="ts">
import { useStyle } from './CardBody.styles'

defineOptions({ name: 'VkCardBody' })

const classes = useStyle()
</script>

<template>
  <div
    :class="classes"
  >
    <slot />
  </div>
</template>
