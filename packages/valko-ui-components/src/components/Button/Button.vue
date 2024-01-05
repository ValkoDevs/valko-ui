<script setup lang="ts">
import { ButtonProps } from '@/components/Button/interfaces'
import useStyle from './Button.styles'

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  type: 'filled',
  size: 'md'
})

defineOptions({ name: 'VkButton' })
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
    :rounded="rounded"
    :condensed="condensed"
    :block="block"
    @click="onClick"
  >
    <slot />
  </button>
</template>