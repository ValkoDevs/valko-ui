<script setup lang="ts">
import { computed } from 'vue'
import type { SkeletonProps } from '#valkoui/types/Skeleton'
import styles from '#valkoui/styles/Skeleton.styles.ts'

defineOptions({ name: 'VkSkeleton' })

const props = withDefaults(defineProps<SkeletonProps>(), {
  width: 200,
  height: 200,
  shape: 'soft'
})

const s = computed(() => styles(props))
</script>

<template>
  <div
    :class="s.container({ class: styleSlots?.container })"
    :style="{
      width: `${width}px`,
      height: `${height}px`
    }"
  />
</template>
