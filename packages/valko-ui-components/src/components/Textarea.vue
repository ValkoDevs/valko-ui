<script setup lang="ts">
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

const updateValue = (e: Event) => {
  if (!props.disabled && !props.readonly) {
    emit('update:modelValue', (e.target as HTMLInputElement).value)
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
        :value="modelValue"
        @input="updateValue"
        :data-filled="!!modelValue"
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
      >{{ `${modelValue.length} / ${maxlength}` }}</span>
    </div>
  </div>
</template>
