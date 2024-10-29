<script setup lang="ts">
import { computed } from 'vue'
import type { TimeProps } from '#valkoui/types/Time'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Time.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkButton from './Button.vue'

defineOptions({ name: 'VkTime' })

const props = withDefaults(defineProps<TimeProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  format: 'HH:mm:ss'
})

const emit = defineEmits(['update:modelValue'])

const classes = useStyle<TimeProps, SlotStyles>(props, styles)

const hsColItems = computed(() => /[Aa]/.test(props.format) ? 12 : 24)

const hasHours = computed(() => /[Hh]/.test(props.format))
const hasMinutes = computed(() => /[m]/.test(props.format))
const hasSeconds = computed(() => /[s]/.test(props.format))
const hasAMPM = computed(() => /[Aa]/.test(props.format))
const selectedTime = computed(() => props.adapter.formattedTime.value.selected)

const isSelectedHour = (hour: number) => selectedTime.value.hours === hour
const isSelectedMinute = (minute: number) => selectedTime.value.minutes === minute
const isSelectedSecond = (second: number) => selectedTime.value.seconds === second
const isSelectedAMPM = (period: 'AM' | 'PM') => props.adapter.period.value === period

const isHourDisabled = (hour: number) => {
  const { minTime: min, maxTime: max, disabledTimes: disabled } = props

  return ((min && hour < min) || (max && hour > max) || (disabled && disabled.includes(hour)))
}

const selectHour = (hour: number) => {
  const result = props.adapter.onSelectHour(hour)
  emit('update:modelValue', result)
}

const selectMinute = (minute: number) => {
  const result = props.adapter.onSelectMinute(minute)
  emit('update:modelValue', result)
}

const selectSecond = (second: number) => {
  const result = props.adapter.onSelectSecond(second)
  emit('update:modelValue', result)
}

const selectAMPM = (period: 'AM' | 'PM') => {
  const result = props.adapter.onSelectAMPM(period)
  emit('update:modelValue', result)
}
</script>

<template>
  <div :class="classes.container">
    <div
      v-if="hasHours"
      :class="classes.viewContainer"
    >
      <vk-button
        v-for="(h, H) in hsColItems"
        :key="`hours-button-${H}`"
        condensed
        flat
        :size="size"
        :shape="shape"
        :disabled="isHourDisabled(H)"
        :variant="isSelectedHour(hsColItems === 12 ? h : H) ? variant : 'link'"
        :color="isSelectedHour(hsColItems === 12 ? h : H) ? color : 'neutral'"
        :class="classes.gridButton"
        @click="selectHour(hsColItems === 12 ? h : H)"
      >
        {{ `${hsColItems === 12 ? h : H}`.padStart(2, '0') }}
      </vk-button>
    </div>
    <div
      v-if="hasMinutes"
      :class="classes.viewContainer"
    >
      <vk-button
        v-for="m in 60"
        :key="`minutes-button-${m-1}`"
        condensed
        flat
        :size="size"
        :shape="shape"
        :variant="isSelectedMinute(m - 1) ? variant : 'link'"
        :color="isSelectedMinute(m - 1) ? color : 'neutral'"
        :class="classes.gridButton"
        @click="selectMinute(m-1)"
      >
        {{ `${m-1}`.padStart(2, '0') }}
      </vk-button>
    </div>
    <div
      v-if="hasSeconds"
      :class="classes.viewContainer"
    >
      <vk-button
        v-for="s in 60"
        :key="`seconds-button-${s-1}`"
        condensed
        flat
        :size="size"
        :shape="shape"
        :variant="isSelectedSecond(s - 1) ? variant : 'link'"
        :color="isSelectedSecond(s - 1) ? color : 'neutral'"
        :class="classes.gridButton"
        @click="selectSecond(s-1)"
      >
        {{ `${s-1}`.padStart(2, '0') }}
      </vk-button>
    </div>
    <div
      v-if="hasAMPM"
      :class="classes.viewContainer"
    >
      <vk-button
        :key="'AM-button'"
        condensed
        flat
        :size="size"
        :shape="shape"
        :variant="isSelectedAMPM('AM') ? variant : 'link'"
        :color="isSelectedAMPM('AM') ? color : 'neutral'"
        :class="classes.periodButton"
        @click="selectAMPM('AM')"
      >
        AM
      </vk-button>
      <vk-button
        :key="'PM-button'"
        condensed
        flat
        :size="size"
        :shape="shape"
        :variant="isSelectedAMPM('PM') ? variant : 'link'"
        :color="isSelectedAMPM('PM') ? color : 'neutral'"
        :class="classes.periodButton"
        @click="selectAMPM('PM')"
      >
        PM
      </vk-button>
    </div>
  </div>
</template>
