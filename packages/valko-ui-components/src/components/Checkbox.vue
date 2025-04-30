<script setup lang="ts">
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

const onClick = () => {
  if (!props.disabled && !props.readonly) emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <div :class="classes.container">
    <div
      :class="classes.checkboxContainer"
      @click="onClick"
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
        :checked="!!modelValue"
        :class="classes.input"
        :indeterminate="modelValue === null"
        :helpertext="helpertext"
        @click.prevent=""
      >
      <label :class="classes.label">
        {{ label }}
      </label>
    </div>

    <span
      v-if="helpertext"
      :class="classes.helpertext"
    >
      {{ helpertext }}
    </span>
  </div>
</template>
