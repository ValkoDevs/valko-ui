<script setup lang="ts">
import { NavbarProps } from '@/components/Navbar/interfaces'
import useStyle from './Navbar.styles'

const props = withDefaults(defineProps<NavbarProps>(), {
  fixed: false,
  floating: false,
  rounded: false
})

defineOptions({ name: 'VkNavbar' })

const classes = useStyle(props)
</script>

<template>
  <header :class="classes">
    <slot />
  </header>
</template>