<script setup lang="ts">
import type { IconProps } from '#valkoui/types/Icon'

defineOptions({ name: 'VkIcon' })

const props = defineProps<IconProps>()
</script>

<template>
  <i
    :class="`ti ti-${props.name}`"
    :role="props['aria-label'] ? 'img' : undefined"
    :aria-label="props['aria-label']"
    :aria-hidden="!props['aria-label'] || undefined"
  />
</template>
