<script setup lang="ts">
import { computed } from 'vue'
import type { NavbarProps } from '#valkoui/types/Navbar'
import styles from '#valkoui/styles/Navbar.styles.ts'

defineOptions({ name: 'VkNavbar' })

const props = withDefaults(defineProps<NavbarProps>(), {
  color: 'primary',
  size: 'md',
  variant: 'filled',
  shape: 'soft',
  fixed: false,
  elevated: false,
  floating: false,
  vertical: false
})

const s = computed(() => styles({ ...props, class: props.styleSlots }))
</script>

<template>
  <nav
    :class="s"
    role="navigation"
    :aria-label="props['aria-label'] ?? 'Main navigation'"
  >
    <slot />
  </nav>
</template>
