<script setup lang="ts">
import { computed } from 'vue'
import styles from '#valkoui/styles/CardHeader.styles.ts'
import type { CardHeaderProps } from '#valkoui/types/Card'

defineOptions({ name: 'VkCardHeader' })

const props = defineProps<CardHeaderProps>()

const s = computed(() => styles({ ...props, class: props.styleSlots }))
</script>

<template>
  <div :class="s">
    <slot />
  </div>
</template>
