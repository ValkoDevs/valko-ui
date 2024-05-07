<script setup lang="ts">
import useStyle from '#valkoui/composables/useStyle.ts'
import styles from '#valkoui/styles/CardBody.styles.ts'

defineOptions({ name: 'VkCardBody' })

const classes = useStyle({}, styles)
</script>

<template>
  <div
    :class="classes"
  >
    <slot />
  </div>
</template>
