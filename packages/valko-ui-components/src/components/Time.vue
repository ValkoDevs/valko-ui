<script setup lang="ts">
import { computed, toValue } from 'vue'
import type { TimeProps } from '#valkoui/types/Time'
import styles from '#valkoui/styles/Time.styles.ts'
import VkButton from './Button.vue'

defineOptions({ name: 'VkTime' })

const props = withDefaults(defineProps<TimeProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  format: 'HH:mm:ss',
  minuteStep: 1,
  okButtonLabel: 'OK'
})

const emit = defineEmits(['onSelect'])

const s = computed(() => styles(props))

const onSelect = () => {
  props.adapter.onSelectTime()
  emit('onSelect')
}

const formatMap = computed(() => {
  const is12HourFormat = /[h]/.test(props.format) || /[Aa]/.test(props.format)
  return {
    hasHours: /[Hh]/.test(props.format),
    hasMinutes: /[m]/.test(props.format),
    hasSeconds: /[s]/.test(props.format) && props.minuteStep === 1,
    hasAMPM: /[Aa]/.test(props.format) || /[h]/.test(props.format),
    hsColItems: is12HourFormat ? 12 : 24
  }
})

const selectedTime = computed(() => {
  const dates = toValue(props.adapter.formattedTime)
  return dates.display || dates.selected
})

const formatHour = (hour: number): number => {
  const is12HourFormat = formatMap.value.hsColItems === 12
  if (is12HourFormat) return hour === 0 ? 12 : hour
  return hour
}
</script>

<template>
  <div :class="s.container({ class: styleSlots?.container })">
    <div :class="s.grid({ class: styleSlots?.grid })">
      <div
        v-if="formatMap.hasHours"
        :class="s.unitContainer({ class: styleSlots?.unitContainer })"
      >
        <vk-button
          v-for="(_, H) in formatMap.hsColItems"
          :key="`hours-button-${H}`"
          :size="size"
          :shape="shape"
          :disabled="adapter.isTimeDisabled(H)"
          :variant="selectedTime.hours === formatHour(H) ? variant : 'link'"
          :color="selectedTime.hours === formatHour(H) ? color : 'surface'"
          :class="s.unitButton({ class: styleSlots?.unitButton })"
          @click="adapter.setDisplayUnit('h', formatHour(H))"
        >
          {{ `${formatHour(H)}`.padStart(2, '0') }}
        </vk-button>
      </div>
      <div
        v-if="formatMap.hasMinutes"
        :class="s.unitContainer({ class: styleSlots?.unitContainer })"
      >
        <vk-button
          v-for="m in 60 / minuteStep"
          :key="`minutes-button-${m-1}`"
          :size="size"
          :shape="shape"
          :disabled="adapter.isTimeDisabled(selectedTime.hours, m - 1)"
          :variant="selectedTime.minutes === (m - 1) ? variant : 'link'"
          :color="selectedTime.minutes === (m - 1) ? color : 'surface'"
          :class="s.unitButton({ class: styleSlots?.unitButton })"
          @click="adapter.setDisplayUnit('m', m - 1)"
        >
          {{ `${(m - 1) * minuteStep}`.padStart(2, '0') }}
        </vk-button>
      </div>
      <div
        v-if="formatMap.hasSeconds && minuteStep === 1"
        :class="s.unitContainer({ class: styleSlots?.unitContainer })"
      >
        <vk-button
          v-for="seconds in 60"
          :key="`seconds-button-${seconds-1}`"
          :size="size"
          :shape="shape"
          :variant="selectedTime.seconds === (seconds - 1) ? variant : 'link'"
          :color="selectedTime.seconds === (seconds - 1) ? color : 'surface'"
          :class="s.unitButton({ class: styleSlots?.unitButton })"
          @click="adapter.setDisplayUnit('s', seconds - 1)"
        >
          {{ `${seconds-1}`.padStart(2, '0') }}
        </vk-button>
      </div>
    </div>
    <div :class="s.footer({ class: styleSlots?.footer })">
      <vk-button
        size="xs"
        :shape="shape"
        :variant="variant"
        :color="color"
        :class="s.okButton({ class: styleSlots?.okButton })"
        @click="onSelect"
      >
        {{ okButtonLabel }}
      </vk-button>
      <div
        v-if="formatMap.hasAMPM"
        :class="s.periodContainer({ class: styleSlots?.periodContainer })"
      >
        <vk-button
          size="xs"
          :shape="shape"
          :variant="adapter.period.value === 'AM' ? variant : 'link'"
          :color="adapter.period.value === 'AM' ? color : 'surface'"
          :class="s.periodButton({ class: styleSlots?.periodButton })"
          @click="adapter.onSelectAMPM('AM')"
        >
          AM
        </vk-button>
        <vk-button
          size="xs"
          :shape="shape"
          :variant="adapter.period.value === 'PM' ? variant : 'link'"
          :color="adapter.period.value === 'PM' ? color : 'surface'"
          :class="s.periodButton({ class: styleSlots?.periodButton })"
          @click="adapter.onSelectAMPM('PM')"
        >
          PM
        </vk-button>
      </div>
    </div>
  </div>
</template>
