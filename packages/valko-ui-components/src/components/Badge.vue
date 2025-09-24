<script setup lang="ts">
import { computed } from 'vue'
import type { BadgeProps } from '#valkoui/types/Badge'
import styles from '#valkoui/styles/Badge.styles.ts'

defineOptions({ name: 'VkBadge' })

const props = withDefaults(defineProps<BadgeProps>(), {
  content: '',
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  placement: 'top',
  alignment: 'end',
  dot: false,
  hidden: false
})

const s = computed(() => styles(props))
</script>

<template>
  <div :class="s.container({ class: styleSlots?.container })">
    <span
      :class="s.badge({ class: styleSlots?.badge })"
      :aria-hidden="(dot && !props['aria-label'] && !content) || undefined"
      :role="(dot && !props['aria-label'] && !content) ? undefined : 'status'"
      :aria-label="props['aria-label'] || (!dot ? String(content) : undefined)"
    >
      {{ !dot ? content : '' }}
    </span>
    <slot />
  </div>
</template>
