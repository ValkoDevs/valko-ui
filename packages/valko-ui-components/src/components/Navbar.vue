<script setup lang="ts">
import type { NavbarProps } from '#valkoui/types/Navbar'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Navbar.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'

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

const classes = useStyle<NavbarProps, SlotStyles>(props, styles)
</script>

<template>
  <nav
    :class="classes"
    role="navigation"
    :aria-label="props['aria-label'] ?? 'Main navigation'"
  >
    <slot />
  </nav>
</template>
