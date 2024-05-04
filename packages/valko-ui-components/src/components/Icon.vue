<script setup lang="ts">
import type { IconProps } from '#valkoui/types/Icon'

defineOptions({ name: 'VkIcon' })

const props = defineProps<IconProps>()
</script>

<template>
  <i :class="`ti ti-${props.name}`" />
</template>
