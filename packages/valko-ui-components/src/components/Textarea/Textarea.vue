<script setup lang="ts">
import { TextareaProps } from '@/components/Textarea/interfaces'
import useStyle from './Textarea.styles'
defineOptions({ name: 'VkTextarea' })

const props = withDefaults(defineProps<TextareaProps>(), {
  variant: 'primary',
  type: 'filled',
  size: 'md',
  modelValue: '',
  cols: 30,
  rows: 1
})

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
    <textarea 
      :class="classes.textarea"
      placeholder=" "
      :disabled="disabled"
      :readonly="readonly"
      :value="modelValue"
      @input="updateValue"
      :data-filled="!!modelValue"
      :maxlength="maxlength"
    />
    <label :class="classes.label">{{ props.label }}</label>
    <span v-if="maxlength">{{ `${props.modelValue.length} / ${props.maxlength}` }}</span>
  </div>
</template>
