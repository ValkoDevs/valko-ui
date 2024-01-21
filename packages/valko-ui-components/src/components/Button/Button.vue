<script setup lang="ts">
import { ButtonProps } from '@/components/Button/interfaces'
import useStyle from './Button.styles'

defineOptions({ name: 'VkButton' })

const props = withDefaults(defineProps<ButtonProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft'
})

const emit = defineEmits(['click'])

const onClick = () => {
  if (!props.disabled && !props.loading) {
    emit('click')
  }
}

const classes = useStyle(props)
</script>

<template>
  <button
    :class="classes"
    :disabled="disabled"
    :flat="flat"
    :condensed="condensed"
    :block="block"
    @click="onClick"
  >
    <slot />
  </button>
</template>
