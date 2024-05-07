<script setup lang="ts">
import useStyle from '#valkoui/composables/useStyle.ts'
import styles from '#valkoui/styles/CardHeader.styles.ts'

defineOptions({ name: 'VkCardHeader' })

const classes = useStyle({}, styles)
</script>

<template>
  <div
    :class="classes"
  >
    <slot />
  </div>
</template>
