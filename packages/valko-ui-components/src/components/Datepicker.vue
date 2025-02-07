<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import type { DatepickerProps } from '#valkoui/types/Datepicker'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Datepicker.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkInput from './Input.vue'
import VkCalendar from './Calendar.vue'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkDatepicker' })

const props = withDefaults(defineProps<DatepickerProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  format: 'YYYY-MM-DD',
  isOpen: false
})

const emit = defineEmits(['update:modelValue', 'open', 'close'])

const classes = useStyle<DatepickerProps, SlotStyles>(props, styles)

const rootRef = ref<HTMLElement | null>(null)

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement

  if (rootRef.value && !rootRef.value.contains(target) && !target.closest('.vk-datepicker__content')) emit('close')
}

onMounted(() => nextTick(() => document.addEventListener('mousedown', handleClickOutside, true)))
onBeforeUnmount(() => document.addEventListener('mousedown', handleClickOutside, true))
</script>

<template>
  <div
    ref="rootRef"
    :class="classes.container"
  >
    <vk-input
      v-bind="props"
      :model-value="parsedModel"
      :label="label"
      readonly
      cursor="pointer"
      @focus="emit('open')"
      @right-icon-click="emit('open')"
    >
      <template #right-icon>
        <vk-icon name="calendar" />
      </template>
    </vk-input>

    <transition
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isOpen"
        :class="classes.content"
      >
        <vk-calendar
          v-if="isOpen"
          v-bind="props"
          :adapter="adapter"
          :disabled-dates="disabledDates"
          :locale="locale"
          :format="format"
          :min-date="minDate"
          :max-date="maxDate"
          :disable-weekends="disableWeekends"
          @update:model-value="(value) => emit('update:modelValue', value)"
          @finalize-selection="emit('close')"
        />
      </div>
    </transition>
  </div>
</template>
