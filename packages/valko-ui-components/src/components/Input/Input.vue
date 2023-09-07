<script setup lang="ts">
import { InputProps } from '@/components/Input/interfaces'
import useStyle from './Input.styles'


const props = withDefaults(defineProps<InputProps>(), {
  variant: 'primary',
  kind: 'filled',
  size: 'md',
  type: 'text'
})

defineOptions({ name: 'VkInput' })
const emit = defineEmits(['update:modelValue'])

const updateValue = (e: Event) => {
  if (!props.disabled && !props.readonly) {
    emit('update:modelValue', (e.target as HTMLInputElement).value)
  }
}

const classes = useStyle(props)

</script>

<template>
  <div :class="classes.container">
    <input
      :class="classes.input"
      :readonly="readonly"
      :disabled="disabled"
      :type="type"
      placeholder=" "
      :value="modelValue"
      @input="updateValue"
      :data-filled="!!modelValue"
    >
    <label 
      :class="classes.label"
    >
      <slot name="label" /></label>
    <span 
      :class="classes.helper"
      v-if="helpertext !== ''"
      :value="helpertext"
    ><slot name="helper" /></span>
  </div>
</template>