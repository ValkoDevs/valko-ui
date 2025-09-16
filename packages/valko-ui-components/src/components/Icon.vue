<script setup lang="ts">
import { computed } from 'vue'
import type { IconProps } from '#valkoui/types/Icon'
import styles from '#valkoui/styles/Icon.styles.ts'

defineOptions({ name: 'VkIcon' })

const props = defineProps<IconProps>()

const s = computed(() => styles({ ...props, class: props.styleSlots }))
</script>

<template>
  <i
    :class="[s, `ti ti-${name}`]"
    :role="props['aria-label'] ? 'img' : undefined"
    :aria-label="props['aria-label']"
    :aria-hidden="!props['aria-label'] || undefined"
  />
</template>
