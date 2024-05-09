<script setup lang="ts">
import type { ButtonProps } from '#valkoui/types/Button'
import styles from '#valkoui/styles/Button.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'

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

const classes = useStyle<ButtonProps>(props, styles)

const onClick = () => {
  if (!props.disabled && !props.loading) {
    emit('click')
  }
}
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
