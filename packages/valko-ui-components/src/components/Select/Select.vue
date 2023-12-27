<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { SelectProps } from '@/components/Select/interfaces'
import { VkInput } from '../'
import useStyle from './Select.styles'

defineOptions({ name: 'VkSelect' })

const props = withDefaults(defineProps<SelectProps>(), {
  variant: 'primary',
  type: 'filled',
  size: 'md',
  placeholder: 'Select an option',
  options: () => [],
})

const emit = defineEmits(['update:modelValue'])

const classes = useStyle(props)
const select = ref(null)
const showMap: Record<string, string> = props.options.reduce((acc, opt) => ({
  ...acc,
  [`${opt.value}`]: opt.label
}), { 'undefined': '' })
console.log(showMap)

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
    closeDropdown()
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

const closeDropdown = () => {
  isOpen.value = false
}

const toggleDropdown = (isLabelClick: boolean) => {
  if (isLabelClick) {
    isOpen.value = !isOpen.value
  } else {
    isOpen.value = true
  }
}

</script>

<template>
  <div
    ref="select"
    :class="classes.divSelect"
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
    <div :class="classes.divInput">
      <vk-input
        readonly
        :helpertext="helpertext"
        :label="placeholder"
        :disabled="disabled"
        :flat="flat"
        :rounded="rounded"
        :kind="type"
        :variant="variant"
        :size="size"
        :model-value="showValue"
        @label-click="toggleDropdown"
        @container-click="closeDropdown"
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
