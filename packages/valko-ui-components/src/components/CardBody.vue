<script setup lang="ts">
import styles from '#valkoui/styles/CardBody.styles.ts'
import type { CardBodyProps } from '#valkoui/types/Card'

defineOptions({ name: 'VkCardBody' })

const props = withDefaults(defineProps<CardBodyProps>(), {
  styleSlots: undefined
})

const classes = styles({ ...props, class: props.styleSlots?.container })
</script>

<template>
  <div
    :class="classes"
  >
    <slot />
  </div>
</template>
