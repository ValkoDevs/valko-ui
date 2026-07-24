<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { DateTimePickerProps, View } from '#valkoui/types/DateTimePicker'
import styles from '#valkoui/styles/DateTimePicker.styles.ts'
import VkPopover from './Popover.vue'
import VkInput from './Input.vue'
import VkCalendar from './Calendar.vue'
import VkTime from './Time.vue'
import VkButton from './Button.vue'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkDateTimePicker' })

const props = withDefaults(defineProps<DateTimePickerProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  format: 'YYYY-MM-DD HH:mm',
  okButtonLabel: 'OK',
  backButtonLabel: 'Back',
  isOpen: undefined
})

const emit = defineEmits(['update:modelValue', 'update:isOpen'])

const s = computed(() => styles(props))

const view = ref<View>('date')

const onConfirmSelection = () => {
  const value = props.controls.commitSelection()
  emit('update:modelValue', value)
}

const handleOpenChange = (open: boolean) => {
  emit('update:isOpen', open)

  if (props.isOpen === undefined && !open) {
    view.value = 'date'
    props.controls.resetSelection()
  }
}

watch(
  () => props.isOpen,
  (open) => {
    if (open === false) {
      view.value = 'date'
      props.controls.resetSelection()
    }
  }
)
</script>

<template>
  <vk-popover
    class="vk-datetimepicker"
    :is-open="isOpen"
    :shape="shape"
    :style-slots="{ panel: ['p-2'] }"
    @update:is-open="handleOpenChange"
  >
    <template #trigger="{ setOpen, isOpen }">
      <vk-input
        v-bind="props"
        :style-slots="undefined"
        :model-value="displayValue"
        :label="label"
        readonly
        cursor="pointer"
        @focus="setOpen(true)"
        @right-icon-click="setOpen(!isOpen)"
      >
        <template #right-icon>
          <vk-icon name="calendar-clock" />
        </template>
      </vk-input>
    </template>

    <template #panel="{ setOpen }">
      <vk-calendar
        v-if="view === 'date'"
        v-bind="props"
        :style-slots="undefined"
        :class="s.dateSection({ class: styleSlots?.dateSection })"
        :adapter="adapter.date"
        :disabled-dates="disabledDates"
        :locale="locale"
        :format="format"
        :min-date="minDate"
        :max-date="maxDate"
        :disable-weekends="disableWeekends"
        @finalize-selection="view = 'time'"
      />

      <template v-if="view === 'time'">
        <vk-button
          :size="size"
          :shape="shape"
          :variant="variant"
          color="surface"
          :class="s.backButton({ class: styleSlots?.backButton })"
          @click="view = 'date'"
        >
          <vk-icon name="arrow-left" />
          {{ backButtonLabel }}
        </vk-button>

        <vk-time
          :class="s.timeSection({ class: styleSlots?.timeSection })"
          :adapter="adapter.time"
          :color="color"
          :variant="variant"
          :size="size"
          :shape="shape"
          :locale="locale"
          :format="format"
          :min-time="minTime"
          :max-time="maxTime"
          :disabled-times="disabledTimes"
          :minute-step="minuteStep"
          :ok-button-label="okButtonLabel"
          @on-select="() => { onConfirmSelection(); setOpen(false); }"
        />
      </template>
    </template>
  </vk-popover>
</template>
