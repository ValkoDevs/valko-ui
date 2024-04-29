<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { VkInput, VkIcon, type SelectProps, type SlotStyles, type SelectOption, useStyle } from '#valkoui'
import styles from './Select.styles.ts'

defineOptions({ name: 'VkSelect' })

const props = withDefaults(defineProps<SelectProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  placeholder: 'Select an option',
  options: () => []
})

const emit = defineEmits(['update:modelValue'])

const classes = useStyle<SelectProps, SlotStyles>(props, styles)
const select = ref(null)
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

const closeDropdownOnOutsideClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (target.closest('.vk-select__container') !== select.value) {
    isOpen.value = false
  }
}

const toggleDropdown = (onFocus: boolean) => {
  isOpen.value = onFocus && !props.disabled && !props.readonly
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
        :variant="variant"
        :color="color"
        :size="size"
        :shape="shape"
        :model-value="showValue"
        cursor="pointer"
        @focus="() => toggleDropdown(true)"
      >
        <template #rightIcon>
          <vk-icon
            name="chevron-down"
            :data-open="isOpen"
            :class="classes.icon"
          />
        </template>
      </vk-input>
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
          :data-helper="!!helpertext"
          :class="classes.dropdown"
          :data-shape="shape"
          :data-variant="props.variant"
        >
          <li
            v-for="item in options"
            :key="item.value"
            :data-selected="isSelected(item.value)"
            :data-shape="shape"
            :data-variant="props.variant"
            :class="classes.item"
            @click="selectItem(item.value)"
          >
            {{ item.label }}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>
