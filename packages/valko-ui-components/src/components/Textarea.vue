<script setup lang="ts">
import { ref } from 'vue'
import type { TextareaProps } from '#valkoui/types/Textarea'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Textarea.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'

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

const classes = useStyle<TextareaProps, SlotStyles>(props, styles)

const isFilled = ref(false)
const inputValue = ref(props.modelValue || '')

const updateValue = (e: Event) => {
  const value = (e.target as HTMLInputElement).value

  if (!props.disabled && !props.readonly) {
    inputValue.value = value
    emit('update:modelValue', value)
    isFilled.value = value !== ''
  }
}
</script>

<template>
  <div :class="classes.container">
    <div :class="classes.field">
      <textarea
        :class="classes.textarea"
        placeholder=" "
        :disabled="disabled"
        :readonly="readonly"
        :value="inputValue"
        @input="updateValue"
        :data-filled="isFilled"
        :maxlength="maxlength"
      />
      <label :class="classes.label">{{ label }}</label>
    </div>
    <div :class="classes.footer">
      <span
        v-if="helpertext"
        :class="classes.helper"
      > {{ helpertext }}</span>
      <span
        v-if="maxlength && maxlength > 0"
        :class="classes.counter"
      >{{ `${inputValue.length} / ${maxlength}` }}</span>
    </div>
  </div>
</template>
