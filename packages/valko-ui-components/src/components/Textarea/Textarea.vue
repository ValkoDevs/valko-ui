<script setup lang="ts">
import { TextareaProps } from '#valkoui/types'
import { useStyle } from './Textarea.styles'

defineOptions({ name: 'VkTextarea' })

const props = withDefaults(defineProps<TextareaProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  modelValue: '',
  maxlenght: 0
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
    <div :class="classes.field">
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
    </div>
    <div :class="classes.footer">
      <span
        v-if="helpertext"
        :class="classes.helper"
      > {{ props.helpertext }}</span>
      <span
        v-if="maxlength && maxlength > 0"
        :class="classes.counter"
      >{{ `${props.modelValue.length} / ${props.maxlength}` }}</span>
    </div>
  </div>
</template>
