<script setup lang="ts">
import { IconProps } from '#valkoui/types'

defineOptions({ name: 'VkIcon' })

const props = defineProps<IconProps>()
</script>

<template>
  <i :class="`ti ti-${props.name}`" />
</template>
