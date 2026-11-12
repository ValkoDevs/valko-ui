<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  SelectContent,
  SelectItem,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  type AcceptableValue,
  type SelectItemSelectEvent
} from 'reka-ui'
import type { SelectOption, SelectProps } from '#valkoui/types/Select'
import styles from '#valkoui/styles/Select.styles.ts'
import VkIcon from './Icon.vue'
import VkInput from './Input.vue'

defineOptions({ name: 'VkSelect' })

const props = withDefaults(defineProps<SelectProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  options: () => [],
  clearable: false,
  multiple: false,
  disabled: false,
  readonly: false
})

const emit = defineEmits(['update:modelValue'])

const s = computed(() => styles(props))

const isOpen = ref(false)

const showMap = computed(() => props.options.reduce((acc: Record<string, string>, opt: SelectOption) => ({
  ...acc,
  [`${opt.value}`]: opt.label
}), { 'undefined': '' }))

const showValue = computed(
  () => Array.isArray(props.modelValue)
    ? props.modelValue.map(
      (val: string | number) => showMap.value[`${val}`]
    ).join(', ')
    : showMap.value[`${props.modelValue}`]
)

const isSelected = (value: string | number) => {
  if (Array.isArray(props.modelValue)) return props.modelValue.includes(value)
  return props.modelValue === value
}

const updateValue = (value: SelectProps['modelValue']) => {
  if (!props.disabled && !props.readonly) {
    emit('update:modelValue', value)
  }
}

const setOpened = (open: boolean) => {
  if (props.disabled || props.readonly) return
  if (!open) {
    isOpen.value = false
    return
  }
  // Reka returns focus to the trigger while the content is still mounted in
  // its closing state; ignore that refocus so the select doesn't reopen.
  const isClosing = document.querySelector<HTMLElement>('.vk-select__dropdown[data-state="closed"]')
  if (isClosing) return
  isOpen.value = true
}

const clearSelection = () => {
  if (!props.clearable) return
  updateValue(props.multiple ? [] : undefined)
  isOpen.value = false
}

const handleItemSelect = (option: SelectOption, event: SelectItemSelectEvent<AcceptableValue>) => {
  const selected = isSelected(option.value)

  if (!props.multiple) {
    if (!selected) return

    if (!props.clearable) {
      // Re-selecting the selected item keeps the current value and the list open.
      event.preventDefault()
      return
    }

    // Deselect on click, matching the previous behavior for clearable selects.
    event.preventDefault()
    updateValue(undefined)
    isOpen.value = false
    return
  }

  if (selected && !props.clearable) {
    const current = Array.isArray(props.modelValue) ? props.modelValue : []
    if (current.length === 1) event.preventDefault()
  }
}
</script>

<template>
  <div :class="s.container({ class: styleSlots?.container })">
    <select-root
      :name="name"
      :multiple="multiple"
      :disabled="disabled || readonly"
      :model-value="modelValue"
      :open="isOpen"
      @update:open="setOpened"
      @update:model-value="updateValue"
    >
      <select-trigger as-child>
        <vk-input
          readonly
          :helpertext="helpertext"
          :label="label"
          :disabled="disabled"
          :variant="variant"
          :color="color"
          :size="size"
          :shape="shape"
          :model-value="showValue"
          :clearable="clearable"
          cursor="pointer"
          :aria-label="ariaLabel"
          :aria-labelledby="ariaLabelledBy"
          :aria-describedby="ariaDescribedBy"
          :aria-invalid="ariaInvalid"
          :aria-required="ariaRequired"
          @focus="setOpened(true)"
          @clear="clearSelection"
        >
          <template #right-icon>
            <vk-icon
              name="chevron-down"
              :data-open="isOpen"
              :class="s.icon({ class: styleSlots?.icon })"
            />
          </template>
        </vk-input>
      </select-trigger>
      <select-portal>
        <select-content
          position="popper"
          align="start"
          :side-offset="4"
          :data-helper="!!helpertext"
          :data-shape="shape"
          :data-variant="variant"
          :aria-label="label || 'Select options'"
          :class="s.dropdown({ class: styleSlots?.dropdown })"
        >
          <select-item
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            :data-shape="shape"
            :data-variant="variant"
            :class="s.item({ class: styleSlots?.item })"
            @select="handleItemSelect(option, $event)"
          >
            <select-item-text>{{ option.label }}</select-item-text>
          </select-item>
        </select-content>
      </select-portal>
    </select-root>
  </div>
</template>
