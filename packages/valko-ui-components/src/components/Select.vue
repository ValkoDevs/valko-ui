<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  SelectContent,
  SelectItem,
  SelectViewport,
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

// Per-instance handle on the portal content, used to detect this select's own
// closing state (see setOpened). Reka's exposed component ref resolves to the
// rendered content's popper wrapper, so read data-state off its root node.
const contentRef = ref<{ $el?: HTMLElement } | null>(null)
const contentEl = () => contentRef.value?.$el ?? null

// VkInput exposes the inner <input> element (via reka's useForwardExpose),
// so a closed dropdown can return focus to the actual focusable element
// instead of the non-focusable wrapper Reka sees as the trigger. Focusing it
// programmatically must not reopen the select, so the next focus-triggered
// open is suppressed exactly once.
let suppressNextOpen = false
const inputRef = ref<{ $el?: HTMLElement } | null>(null)
const focusTriggerInput = () => {
  suppressNextOpen = true
  inputRef.value?.$el?.focus()
}

// reka-ui's SelectItem throws during setup for a `value: ''` option (it
// requires a non-empty value for the hidden native option it renders), while
// SelectOption types value as `string | number`, so '' is type-legal. Such an
// option is indistinguishable from "no selection" anyway, so drop it here
// rather than forwarding a crashing option to Reka.
const validOptions = computed(() => props.options.filter(option => option.value !== ''))

const showMap = computed(() => validOptions.value.reduce((acc: Record<string, string>, opt: SelectOption) => ({
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
  // its closing state; ignore that refocus so the select doesn't reopen. The
  // check is scoped to this instance's content element — a global DOM query
  // would match another select's closed dropdown and wrongly swallow this
  // instance's reopen.
  if (contentEl()?.dataset.state === 'closed') return
  if (suppressNextOpen) {
    suppressNextOpen = false
    return
  }
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
      <!-- readonly keeps the root enabled: a fake `disabled` on the root would
           put data-disabled on the wrapper while the input looks enabled. The
           readonly signal lives on the input (native readonly + aria-disabled). -->
      <select-root
      :name="name"
      :multiple="multiple"
      :disabled="disabled"
      :model-value="modelValue"
      :open="isOpen"
      @update:open="setOpened"
      @update:model-value="updateValue"
    >
      <!--
        The trigger composes onto VkInput, a FieldRoot compound whose actual
        focusable element is the inner <input>. Reka's `as-child` merges its
        combobox props onto the compound's root wrapper, so VkInput forwards
        the combobox semantics (role, aria-expanded, aria-controls) to the
        inner <input> itself.
      -->
      <select-trigger as-child>
        <vk-input
          ref="inputRef"
          readonly
          role="combobox"
          :aria-expanded="isOpen"
          aria-haspopup="listbox"
          :aria-disabled="readonly || undefined"
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
          :aria-multiselectable="multiple || undefined"
          @close-auto-focus.prevent="focusTriggerInput"
          position="popper"
          align="start"
          :side-offset="4"
          :data-helper="!!helpertext"
          :data-shape="shape"
          :data-variant="variant"
          :aria-label="label || 'Select options'"
          :class="s.dropdown({ class: styleSlots?.dropdown })"
          ref="contentRef"
        >
          <select-viewport>
            <select-item
              v-for="option in validOptions"
              :key="option.value"
              :value="option.value"
              :data-shape="shape"
              :data-variant="variant"
              :class="s.item({ class: styleSlots?.item })"
              @select="handleItemSelect(option, $event)"
            >
              <select-item-text>{{ option.label }}</select-item-text>
            </select-item>
          </select-viewport>
        </select-content>
      </select-portal>
    </select-root>
  </div>
</template>
