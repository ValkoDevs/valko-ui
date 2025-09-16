<script setup lang="ts">
import { useId, computed } from 'vue'
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
  disabled: false,
  styleSlots: undefined
})

const emit = defineEmits(['update:modelValue'])

const s = computed(() => styles(props))

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
  <div :class="s.container({ class: styleSlots?.container })">
    <div
      role="checkbox"
      :class="s.checkboxContainer({ class: styleSlots?.checkboxContainer })"
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
      <div :class="s.stateLayer({ class: styleSlots?.stateLayer })">
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
      </div>

      <input
        type="checkbox"
        :id="inputId"
        :checked="!!modelValue"
        :indeterminate="modelValue === null"
        :name="name"
        :disabled="disabled"
        :class="s.input({ class: styleSlots?.input })"
        @click.prevent=""
      >
      <label
        :for="inputId"
        :class="s.label({ class: styleSlots?.label })"
        @click="onClick"
      >
        {{ props.label }}
      </label>
    </div>

    <span
      v-if="props.helpertext"
      :class="s.helpertext({ class: styleSlots?.helpertext })"
      :id="helpertextId"
    >
      {{ props.helpertext }}
    </span>
  </div>
</template>
