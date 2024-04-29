<script setup lang="ts">
import { type ButtonProps, type SlotStyles, useStyle } from '#valkoui'
import styles from './Button.styles.ts'

defineOptions({ name: 'VkButton' })

const props = withDefaults(defineProps<ButtonProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  block: false,
  flat: false,
  disabled: false,
  condensed: false
})

const emit = defineEmits(['click'])

const onClick = () => {
  if (!props.disabled && !props.loading) {
    emit('click')
  }
}

const classes = useStyle<ButtonProps, SlotStyles>(props, styles)
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
