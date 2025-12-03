<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, nextTick, Ref } from 'vue'
import type { SelectProps, SelectOption } from '#valkoui/types/Select'
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

const emit = defineEmits(['update:modelValue', 'leftIconClick', 'rightIconClick'])

const s = computed(() => styles(props))

const itemRefs: Ref<(HTMLElement | null)[]> = ref([])
const selectRef = ref(null)
const isOpen = ref(false)

const showMap: Record<string, string> = props.options.reduce((acc: Record<string, string>, opt: SelectOption) => ({
  ...acc,
  [`${opt.value}`]: opt.label
}), { 'undefined': '' })

const showValue = computed(
  () => Array.isArray(props.modelValue)
    ? props.modelValue.map(
      (val: string | number) => showMap[`${val}`]
    ).join(', ')
    : showMap[`${props.modelValue}`]
)

const updateValue = (value: SelectProps['modelValue']) => {
  if (!props.disabled && !props.readonly) {
    emit('update:modelValue', value)
  }
}

const handleMultipleSelection = (value: string | number) => {
  const selectedValues = Array.isArray(props.modelValue) ? [...props.modelValue] : []
  const index = selectedValues.indexOf(value)

  if (index === -1) selectedValues.push(value)
  else selectedValues.splice(index, 1)
  if (!props.clearable && selectedValues.length === 0) return

  updateValue(selectedValues)
}

const handleSingleSelection = (value: string | number) => {
  const newValue = isSelected(value) ? undefined : value

  if (!props.clearable && newValue === undefined) return

  updateValue(newValue)
  toggleDropdown(false)
}

const isSelected = (value: string | number) => {
  if (Array.isArray(props.modelValue)) return props.modelValue.includes(value)
  return props.modelValue === value
}

const closeDropdownOnOutsideClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (target.closest('.vk-select__container') !== selectRef.value) isOpen.value = false
}

const toggleDropdown = (onFocus: boolean) => {
  isOpen.value = onFocus && !props.disabled && !props.readonly
}

const clearSelection = () => {
  if (!props.clearable) return
  if (!props.multiple) updateValue(undefined)
  else updateValue([])
  toggleDropdown(false)
}

const highlightedIndex = ref(-1)

const handleKeyDown = (e: KeyboardEvent) => {
  type AllowedKeys = 'ArrowDown' | 'ArrowUp' | 'Home' | 'End' | 'Enter' | 'SpaceBar'
  const allowedKeys: AllowedKeys[] = ['ArrowDown', 'ArrowUp', 'Home', 'End', 'Enter', 'SpaceBar']
  const currentKey = e.key === ' ' ? 'SpaceBar' : (e.key as AllowedKeys)

  if (!isOpen.value || !allowedKeys.includes(currentKey)) return

  e.preventDefault()

  const formulaMap = {
    ArrowDown: () => (highlightedIndex.value + 1) % props.options.length,
    ArrowUp: () => (highlightedIndex.value - 1 + props.options.length) % props.options.length,
    Home: () => 0,
    End: () => props.options.length - 1
  }

  if (['Enter', 'SpaceBar'].includes(currentKey) && highlightedIndex.value >= 0) {
    const item = props.options[highlightedIndex.value]
    if (props.multiple) handleMultipleSelection(item.value)
    else handleSingleSelection(item.value)
  }

  highlightedIndex.value = formulaMap[currentKey as keyof typeof formulaMap]()
  nextTick(() => itemRefs.value[highlightedIndex.value]?.scrollIntoView({ block: 'nearest' }))
}

onMounted(() => {
  document.addEventListener('click', closeDropdownOnOutsideClick)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdownOnOutsideClick)
})
</script>

<template>
  <div
    ref="selectRef"
    :class="s.container({ class: styleSlots?.container })"
  >
    <select
      hidden
      :class="s.select({ class: styleSlots?.select })"
      :value="modelValue"
      :multiple="multiple"
      :readonly="readonly"
      @update="updateValue"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <div :class="s.field({ class: styleSlots?.field })">
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
        :icon-click-focus="false"
        cursor="pointer"
        :aria-label="props['aria-label']"
        :aria-labelledby="props['aria-labelledby']"
        :aria-describedby="props['aria-describedby']"
        :aria-invalid="props['aria-invalid']"
        :aria-required="props['aria-required']"
        :style-slots="{
          rightIcon: [s.rightIcon({ class: styleSlots?.rightIcon })],
          clearIcon: [s.clearIcon({ class: styleSlots?.clearIcon })]
        }"
        :data-right-icon="true"
        @focus="toggleDropdown(true)"
        @blur="toggleDropdown(false)"
        @clear="clearSelection"
        @keydown="handleKeyDown"
        @keydown.escape="toggleDropdown(false)"
        @left-icon-click="emit('leftIconClick')"
        @right-icon-click="emit('rightIconClick')"
      >
        <template
          v-for="(_, slotName) in $slots"
          #[slotName]
        >
          <slot :name="slotName" />
        </template>
      </vk-input>

      <vk-icon
        name="chevron-down"
        :data-open="isOpen"
        :class="s.chevronIcon({ class: styleSlots?.chevronIcon })"
        @click.stop="toggleDropdown(!isOpen)"
      />

      <transition
        enter-active-class="transition-all duration-200 ease-out origin-top"
        enter-from-class="opacity-50 scale-y-90"
        enter-to-class="opacity-100 scale-y-100"
        leave-active-class="transition-all duration-200 ease-out origin-top"
        leave-from-class="opacity-100 scale-y-100"
        leave-to-class="opacity-50 scale-y-90"
      >
        <ul
          v-if="isOpen"
          role="listbox"
          :data-helper="!!helpertext"
          :class="s.dropdown({ class: styleSlots?.dropdown })"
          :data-shape="shape"
          :data-variant="variant"
          :aria-multiselectable="multiple || undefined"
          :aria-label="label || 'Select options'"
        >
          <li
            v-for="(option, index) in options"
            role="option"
            :key="option.value"
            :ref="el => itemRefs[index] = (el as HTMLElement | null)"
            :data-highlighted="highlightedIndex === index"
            :data-selected="isSelected(option.value)"
            :data-shape="shape"
            :data-variant="variant"
            :class="s.item({ class: styleSlots?.item })"
            :aria-selected="isSelected(option.value)"
            @click="multiple ? handleMultipleSelection(option.value) : handleSingleSelection(option.value)"
          >
            {{ option.label }}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>
