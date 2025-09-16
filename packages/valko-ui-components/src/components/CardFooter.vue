<script setup lang="ts">
import { computed } from 'vue'
import type { CardFooterProps } from '#valkoui/types/Card'
import styles from '#valkoui/styles/CardFooter.styles.ts'

defineOptions({ name: 'VkCardFooter' })

const props = defineProps<CardFooterProps>()

const s = computed(() => styles({ ...props, class: props.styleSlots }))
</script>

<template>
  <div :class="s">
    <slot />
  </div>
</template>
