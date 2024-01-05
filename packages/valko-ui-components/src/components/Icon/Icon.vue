<script setup lang="ts">
import { IconProps } from '@/components/Icon/interfaces'

defineOptions({ name: 'VkIcon' })

const props = withDefaults(defineProps<IconProps>(), {
  name: 'home'
})

</script>

<template>
  <i :class="`ti ti-${props.name}`" />
</template>
