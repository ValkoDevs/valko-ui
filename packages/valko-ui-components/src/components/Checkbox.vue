<script setup lang="ts">
import { useId, computed } from 'vue'
import type { CheckboxProps } from '#valkoui/types/Checkbox'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Checkbox.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkCheckbox' })

const props = withDefaults(defineProps<CheckboxProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  label: '',
  modelValue: false,
  readonly: false,
  labelPosition: 'right',
  disabled: false
})

const emit = defineEmits(['update:modelValue'])

const classes = useStyle<CheckboxProps, SlotStyles>(props, styles)

const inputId = useId()
const helpertextId = useId()

const describedBy = computed(() => {
  const ids = []
  if (props.helpertext) ids.push(helpertextId)
  if (props['aria-describedby']) ids.push(props['aria-describedby'])
  return ids.length > 0 ? ids.join(' ') : undefined
})

const onClick = () => {
  if (!props.disabled && !props.readonly) emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <div :class="classes.container">
    <div
      role="checkbox"
      :class="classes.checkboxContainer"
      :aria-checked="modelValue === null ? 'mixed' : !!modelValue"
      :aria-disabled="disabled"
      :aria-label="props['aria-label']"
      :aria-labelledby="props['aria-labelledby']"
      :aria-describedby="describedBy"
      :tabindex="disabled ? -1 : 0"
      @click="onClick"
      @keydown.enter.prevent="onClick"
      @keydown.space.prevent="onClick"
    >
      <div :class="classes.stateLayer">
        <div
          :class="classes.checkbox"
          :data-checked="!!modelValue"
          :data-indeterminate="modelValue === null"
        >
          <vk-icon
            v-if="modelValue !== false"
            :name="`${modelValue === null ? 'minus' : 'check'}`"
            :class="classes.icon"
          />
        </div>
      </div>

      <input
        type="checkbox"
        :id="inputId"
        :checked="!!modelValue"
        :indeterminate="modelValue === null"
        :name="name"
        :disabled="disabled"
        :class="classes.input"
        @click.prevent=""
      >
      <label
        :for="inputId"
        :class="classes.label"
        @click="onClick"
      >
        {{ label }}
      </label>
    </div>

    <span
      v-if="helpertext"
      :class="classes.helpertext"
      :id="helpertextId"
    >
      {{ helpertext }}
    </span>
  </div>
</template>
