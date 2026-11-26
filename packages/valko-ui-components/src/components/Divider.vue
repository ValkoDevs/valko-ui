<script setup lang="ts">
import { computed } from 'vue'
import { Separator } from 'reka-ui'
import type { DividerProps } from '#valkoui/types/Divider'
import styles from '#valkoui/styles/Divider.styles.ts'

defineOptions({ name: 'VkDivider' })

const props = withDefaults(defineProps<DividerProps>(), {
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  direction: 'horizontal'
})

const s = computed(() => styles({ ...props, class: props.styleSlots }))
</script>

<template>
  <Separator
    as="hr"
    :class="s"
    :orientation="direction"
    :decorative="false"
    :aria-label="ariaLabel"
    :aria-labelledby="ariaLabelledBy"
  />
</template>
