<script setup lang="ts">
import { computed } from 'vue'
import styles from '#valkoui/styles/CardBody.styles.ts'
import type { CardBodyProps } from '#valkoui/types/Card'

defineOptions({ name: 'VkCardBody' })

const props = defineProps<CardBodyProps>()

const s = computed(() => styles({ ...props, class: props.styleSlots }))
</script>

<template>
  <div :class="s">
    <slot />
  </div>
</template>
