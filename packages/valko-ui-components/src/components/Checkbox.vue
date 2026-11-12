<script setup lang="ts">
import { useId, computed } from 'vue'
import { CheckboxRoot } from 'reka-ui'
import type { CheckboxProps } from '#valkoui/types/Checkbox'
import styles from '#valkoui/styles/Checkbox.styles.ts'
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

const s = computed(() => styles(props))

const inputId = useId()
const helpertextId = useId()

const describedBy = computed(() => {
  const ids = []
  if (props.helpertext) ids.push(helpertextId)
  if (props.ariaDescribedBy) ids.push(props.ariaDescribedBy)
  return ids.length > 0 ? ids.join(' ') : undefined
})

// Valko's `null` maps to Reka's indeterminate state; Reka owns
// aria-checked (mixed), data-state and the keyboard/roving-focus behavior.
const checkedState = computed(() => (props.modelValue === null ? 'indeterminate' : props.modelValue))

const onClick = (value: boolean | 'indeterminate') => {
  if (!props.disabled && !props.readonly) emit('update:modelValue', value === 'indeterminate' ? true : value)
}
</script>

<template>
  <div :class="s.container({ class: styleSlots?.container })">
    <div :class="s.checkboxContainer({ class: styleSlots?.checkboxContainer })">
      <CheckboxRoot
        :id="inputId"
        :model-value="checkedState"
        :disabled="disabled"
        :name="name"
        :class="s.stateLayer({ class: styleSlots?.stateLayer })"
        :aria-label="ariaLabel"
        :aria-labelledby="ariaLabelledBy"
        :aria-describedby="describedBy"
        @update:model-value="onClick"
      >
        <div
          :class="s.checkbox({ class: styleSlots?.checkbox })"
          :data-checked="!!modelValue"
          :data-indeterminate="modelValue === null"
        >
          <vk-icon
            v-if="modelValue !== false"
            :name="`${modelValue === null ? 'minus' : 'check'}`"
            :class="s.icon({ class: styleSlots?.icon })"
          />
        </div>
      </CheckboxRoot>

      <label
        :for="inputId"
        :class="s.label({ class: styleSlots?.label })"
      >
        {{ label }}
      </label>
    </div>

    <span
      v-if="helpertext"
      :class="s.helpertext({ class: styleSlots?.helpertext })"
      :id="helpertextId"
    >
      {{ helpertext }}
    </span>
  </div>
</template>
