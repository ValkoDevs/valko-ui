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
    :role="ariaLabel ? 'img' : undefined"
    :aria-label="ariaLabel"
    :aria-hidden="!ariaLabel || undefined"
  />
</template>
