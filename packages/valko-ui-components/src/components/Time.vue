<script setup lang="ts">
import { computed, toValue } from 'vue'
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
  format: 'HH:mm:ss',
  minuteStep: 1,
  okButtonLabel: 'OK'
})

const emit = defineEmits(['onSelect'])

const classes = useStyle<TimeProps, SlotStyles>(props, styles)

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
</script>

<template>
  <div :class="classes.container">
    <div :class="classes.grid">
      <div
        v-if="formatMap.hasHours"
        :class="classes.unitContainer"
      >
        <vk-button
          v-for="(_, H) in formatMap.hsColItems"
          :key="`hours-button-${H}`"
          condensed
          flat
          :size="size"
          :shape="shape"
          :disabled="adapter.isTimeDisabled(H)"
          :variant="selectedTime.hours === (formatMap.hsColItems === 12 ? H === 0 ? 12 : H : H) ? variant : 'link'"
          :color="selectedTime.hours === (formatMap.hsColItems === 12 ? H === 0 ? 12 : H : H) ? color : 'neutral'"
          :class="classes.unitButton"
          @click="adapter.setDisplayUnit('h', formatMap.hsColItems === 12 ? H === 0 ? 12 : H : H)"
        >
          {{ `${formatMap.hsColItems === 12 ? H === 0 ? 12 : H : H}`.padStart(2, '0') }}
        </vk-button>
      </div>
      <div
        v-if="formatMap.hasMinutes"
        :class="classes.unitContainer"
      >
        <vk-button
          v-for="m in 60 / minuteStep"
          :key="`minutes-button-${m-1}`"
          condensed
          flat
          :size="size"
          :shape="shape"
          :disabled="adapter.isTimeDisabled(selectedTime.hours, m - 1)"
          :variant="selectedTime.minutes === (m - 1) ? variant : 'link'"
          :color="selectedTime.minutes === (m - 1) ? color : 'neutral'"
          :class="classes.unitButton"
          @click="adapter.setDisplayUnit('m', m - 1)"
        >
          {{ `${(m - 1) * minuteStep}`.padStart(2, '0') }}
        </vk-button>
      </div>
      <div
        v-if="formatMap.hasSeconds && minuteStep === 1"
        :class="classes.unitContainer"
      >
        <vk-button
          v-for="s in 60"
          :key="`seconds-button-${s-1}`"
          condensed
          flat
          :size="size"
          :shape="shape"
          :variant="selectedTime.seconds === (s - 1) ? variant : 'link'"
          :color="selectedTime.seconds === (s - 1) ? color : 'neutral'"
          :class="classes.unitButton"
          @click="adapter.setDisplayUnit('s', s - 1)"
        >
          {{ `${s-1}`.padStart(2, '0') }}
        </vk-button>
      </div>
    </div>
    <div :class="classes.footer">
      <vk-button
        flat
        size="xs"
        :shape="shape"
        :variant="variant"
        :color="color"
        :class="classes.okButton"
        @click="onSelect"
      >
        {{ okButtonLabel }}
      </vk-button>
      <div
        v-if="formatMap.hasAMPM"
        :class="classes.periodContainer"
      >
        <vk-button
          flat
          size="xs"
          :shape="shape"
          :variant="adapter.period.value === 'AM' ? variant : 'link'"
          :color="adapter.period.value === 'AM' ? color : 'neutral'"
          :class="classes.periodButton"
          @click="adapter.onSelectAMPM('AM')"
        >
          AM
        </vk-button>
        <vk-button
          flat
          size="xs"
          :shape="shape"
          :variant="adapter.period.value === 'PM' ? variant : 'link'"
          :color="adapter.period.value === 'PM' ? color : 'neutral'"
          :class="classes.periodButton"
          @click="adapter.onSelectAMPM('PM')"
        >
          PM
        </vk-button>
      </div>
    </div>
  </div>
</template>
