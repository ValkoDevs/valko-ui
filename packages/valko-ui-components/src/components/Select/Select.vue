<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { SelectProps } from '@/components/Select/interfaces'
import { VkInput } from '../'
import useStyle from './Select.styles'

defineOptions({ name: 'VkSelect' })

const props = withDefaults(defineProps<SelectProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  placeholder: 'Select an option',
  iconRight: 'chevron-down',
  options: () => []
})

const emit = defineEmits(['update:modelValue'])

const classes = useStyle(props)
const select = ref(null)

const showMap: Record<string, string> = props.options.reduce((acc, opt) => ({
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

const selectItem = (value: string | number ) => {
  if (props.multiple) {
    const selectedValues = Array.isArray(props.modelValue) ? [...props.modelValue] : []
    const index = selectedValues.indexOf(value)

    if (index === -1) {
      selectedValues.push(value)
    } else {
      selectedValues.splice(index, 1)
    }

    updateValue(selectedValues)
  } else {
    const newValue = isSelected(value) ? undefined : value
    updateValue(newValue)
    toggleDropdown(false)
  }
}

const isSelected = (value: string | number) => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(value)
  }
  return props.modelValue === value
}

const isOpen = ref(false)

const closeDropdownOnOutsideClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (target.closest('.vk-select-container') !== select.value) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdownOnOutsideClick)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdownOnOutsideClick)
})

const toggleDropdown = (onFocus: boolean) => {
  isOpen.value = onFocus && !props.disabled && !props.readonly
}

</script>

<template>
  <div
    ref="select"
    :class="classes.container"
  >
    <select
      hidden
      :class="classes.select"
      :value="modelValue"
      :multiple="multiple"
      :readonly="readonly"
      @update="updateValue"
    >
      <option
        v-for="item in options"
        :key="item.value"
        :value="item.value"
      >
        {{ item.label }}
      </option>
    </select>
    <div :class="classes.field">
      <vk-input
        readonly
        :helpertext="helpertext"
        :label="placeholder"
        :disabled="disabled"
        :rounded="rounded"
        :variant="variant"
        :color="color"
        :size="size"
        :model-value="showValue"
        :icon-left="iconLeft"
        :icon-right="iconRight"
        :is-open="isOpen"
        @focus="() => toggleDropdown(true)"
      />
      <ul
        :data-helper="!!helpertext"
        :class="classes.dropdown"
        v-show="isOpen"
      >
        <li
          v-for="item in options"
          :key="item.value"
          :data-selected="isSelected(item.value)"
          :class="classes.item"
          @click="selectItem(item.value)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>
