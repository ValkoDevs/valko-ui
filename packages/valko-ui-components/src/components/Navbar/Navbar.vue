<script setup lang="ts">
import { NavbarProps } from '#valkoui/types'
import { useStyle } from './Navbar.styles'

defineOptions({ name: 'VkNavbar' })

const props = withDefaults(defineProps<NavbarProps>(), {
  color: 'neutral',
  size: 'md',
  variant: 'filled',
  shape: 'soft',
  fixed: false,
  flat: false,
  floating: false
})

const classes = useStyle(props)
</script>

<template>
  <header :class="classes">
    <slot />
  </header>
</template>
