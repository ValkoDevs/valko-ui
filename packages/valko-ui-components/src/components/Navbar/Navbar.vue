<script setup lang="ts">
import { type NavbarProps, type SlotStyles, useStyle } from '#valkoui'
import styles from './Navbar.styles.ts'

defineOptions({ name: 'VkNavbar' })

const props = withDefaults(defineProps<NavbarProps>(), {
  color: 'primary',
  size: 'md',
  variant: 'filled',
  shape: 'soft',
  fixed: false,
  flat: false,
  floating: false
})

const classes = useStyle<NavbarProps, SlotStyles>(props, styles)
</script>

<template>
  <header :class="classes">
    <slot />
  </header>
</template>
