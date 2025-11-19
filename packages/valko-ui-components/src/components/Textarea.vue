<script setup lang="ts">
import { ref, useId, watch, computed } from 'vue'
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

const isFilled = ref(false)
const inputValue = ref(props.modelValue || '')
const inputRef = ref<HTMLInputElement | null>(null)
const helpertextId = useId()
const inputId = useId()

const describedBy = computed(() => {
  const ids: string[] = []
  if (props.helpertext) ids.push(helpertextId)
  if (props['aria-describedby']) ids.push(props['aria-describedby'])
  return ids.length > 0 ? ids.join(' ') : undefined
})

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
    inputRef.value?.focus()
  }
}

watch(() => props.modelValue, (newValue) => {
  inputValue.value = newValue
  isFilled.value = newValue !== null && newValue !== undefined && newValue !== ''
}, { immediate: true })
</script>

<template>
  <div :class="s.container({ class: styleSlots?.container })">
    <div :class="s.field({ class: styleSlots?.field })">
      <textarea
        ref="inputRef"
        :id="inputId"
        :class="s.textarea({ class: styleSlots?.textarea })"
        :disabled="disabled"
        :readonly="readonly"
        :value="inputValue"
        :data-filled="isFilled"
        :maxlength="maxlength"
        :aria-label="props['aria-label']"
        :aria-labelledby="props['aria-labelledby']"
        :aria-describedby="describedBy"
        :aria-invalid="props['aria-invalid']"
        :aria-required="props['aria-required']"
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
      <label
        :for="inputId"
        :class="s.label({ class: styleSlots?.label })"
      >
        {{ label }}
      </label>
    </div>
    <div :class="s.footer({ class: styleSlots?.footer })">
      <span
        v-if="helpertext"
        :id="helpertextId"
        :class="s.helper({ class: styleSlots?.helper })"
      > {{ helpertext }}</span>
      <span
        v-if="maxlength && maxlength > 0"
        :class="s.counter({ class: styleSlots?.counter })"
      >{{ `${inputValue.length} / ${maxlength}` }}</span>
    </div>
  </div>
</template>
