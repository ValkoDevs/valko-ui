<script setup lang="ts">
import { NavbarProps } from '#valkoui/types'
import { useStyle } from './Navbar.styles'

const props = withDefaults(defineProps<NavbarProps>(), {
  color: 'neutral',
  size: 'md',
  variant: 'filled',
  shape: 'soft',
  fixed: false,
  flat: false,
  floating: false
})

defineOptions({ name: 'VkNavbar' })

const classes = useStyle(props)
</script>

<template>
  <header :class="classes">
    <slot />
  </header>
</template>
