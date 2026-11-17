<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { FieldControl, FieldDescription, FieldLabel, FieldRoot, useForwardExpose } from 'reka-ui'
import type { TextareaProps } from '#valkoui/types/Textarea'
import styles from '#valkoui/styles/Textarea.styles.ts'

defineOptions({ name: 'VkTextarea' })

const props = withDefaults(defineProps<TextareaProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  modelValue: '',
  maxlenght: 0
})

const emit = defineEmits(['update:modelValue', 'leftIconClick', 'rightIconClick'])

const s = computed(() => styles(props))

const { forwardRef, currentElement } = useForwardExpose()
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

const handleIconClick = (icon: 'left' | 'right') => {
  if (!props.disabled && !props.readonly) {
    emit(`${icon}IconClick`)
    currentElement.value?.focus()
  }
}

watch(() => props.modelValue, (newValue) => {
  inputValue.value = newValue
  isFilled.value = newValue !== null && newValue !== undefined && newValue !== ''
}, { immediate: true })
</script>

<template>
  <FieldRoot
    :class="s.container({ class: styleSlots?.container })"
    :disabled="disabled"
  >
    <div :class="s.field({ class: styleSlots?.field })">
      <FieldControl
        :ref="forwardRef"
        as="textarea"
        :class="s.textarea({ class: styleSlots?.textarea })"
        :readonly="readonly"
        :value="inputValue"
        :maxlength="maxlength"
        :data-filled="isFilled"
        :aria-label="ariaLabel"
        :aria-labelledby="ariaLabelledBy"
        :aria-describedby="ariaDescribedBy"
        :aria-invalid="ariaInvalid"
        :aria-required="ariaRequired"
        :data-left-icon="!!$slots['left-icon']"
        :data-right-icon="!!$slots['right-icon']"
        @input="updateValue"
      />
      <span
        v-if="!!$slots['left-icon']"
        :class="[s.icons({ class: styleSlots?.icons }), s.leftIcon({ class: styleSlots?.leftIcon })]"
        @click="handleIconClick('left')"
      >
        <slot name="left-icon" />
      </span>

      <span
        v-if="!!$slots['right-icon']"
        :class="[s.icons({ class: styleSlots?.icons }), s.rightIcon({ class: styleSlots?.rightIcon })]"
        @click="handleIconClick('right')"
      >
        <slot name="right-icon" />
      </span>
      <FieldLabel :class="s.label({ class: styleSlots?.label })">
        {{ label }}
      </FieldLabel>
    </div>
    <div :class="s.footer({ class: styleSlots?.footer })">
      <FieldDescription
        v-if="helpertext"
        as="span"
        :class="s.helper({ class: styleSlots?.helper })"
      >
        {{ helpertext }}
      </FieldDescription>
      <span
        v-if="maxlength && maxlength > 0"
        :class="s.counter({ class: styleSlots?.counter })"
      >{{ `${inputValue.length} / ${maxlength}` }}</span>
    </div>
  </FieldRoot>
</template>
