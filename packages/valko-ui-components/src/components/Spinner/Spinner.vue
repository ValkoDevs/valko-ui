<script setup lang="ts">
import { SpinnerProps } from '@/components/Spinner/interfaces'
import useStyle from './Spinner.styles'

const props = withDefaults(defineProps<SpinnerProps>(), {
  variant: 'secondary',
  size: 'md'
})
defineOptions({ name: 'VkSpinner' })
const classes = useStyle(props)
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 100" 
    :class="classes.spinner"
  >
    <circle 
      cx="50" 
      cy="50" 
      r="45" 
      fill="none" 
      stroke="#ccc" 
      stroke-width="5" 
    />
    <circle
      cx="50" 
      cy="50" 
      r="45" 
      fill="none" 
      stroke="#000000" 
      stroke-width="5" 
      stroke-dasharray="141.37" 
      stroke-dashoffset="141.37" 
      :class="classes.circle" 
    />
  </svg>
</template>
