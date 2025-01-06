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
  flat: false,
  floating: false,
  vertical: false
})

const classes = useStyle<NavbarProps, SlotStyles>(props, styles)
</script>

<template>
  <header :class="classes">
    <slot />
  </header>
</template>
