<script setup lang="ts">
import { IconProps } from '#valkoui'

defineOptions({ name: 'VkIcon' })

const props = defineProps<IconProps>()
</script>

<template>
  <i :class="`ti ti-${props.name}`" />
</template>
