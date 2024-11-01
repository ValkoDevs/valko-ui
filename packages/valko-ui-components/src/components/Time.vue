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

const emit = defineEmits(['update:modelValue'])

const classes = useStyle<TimeProps, SlotStyles>(props, styles)

const hsColItems = computed(() => /[Aa]/.test(props.format) ? 12 : 24)

const hasHours = computed(() => /[Hh]/.test(props.format))
const hasMinutes = computed(() => /[m]/.test(props.format))
const hasSeconds = computed(() => /[s]/.test(props.format))
const hasAMPM = computed(() => /[Aa]/.test(props.format))
const selectedTime = computed(() => {
  const dates = toValue(props.adapter.formattedTime)
  if (dates.display) return dates.display
  else return dates.selected
})

const isSelectedAMPM = (period: 'AM' | 'PM') => props.adapter.period.value === period

const selectAMPM = (period: 'AM' | 'PM') => {
  const result = props.adapter.onSelectAMPM(period)
  emit('update:modelValue', result)
}
</script>

<template>
  <div :class="classes.container">
    <div :class="classes.grid">
      <div
        v-if="hasHours"
        :class="classes.unitContainer"
      >
        <vk-button
          v-for="(h, H) in hsColItems"
          :key="`hours-button-${H}`"
          condensed
          flat
          :size="size"
          :shape="shape"
          :disabled="adapter.isTimeDisabled(H)"
          :variant="selectedTime.hours === (hsColItems === 12 ? h : H) ? variant : 'link'"
          :color="selectedTime.hours === (hsColItems === 12 ? h : H) ? color : 'neutral'"
          :class="classes.unitButton"
          @click="adapter.setDisplayUnit('h', hsColItems === 12 ? h : H)"
        >
          {{ `${hsColItems === 12 ? h : H}`.padStart(2, '0') }}
        </vk-button>
      </div>
      <div
        v-if="hasMinutes"
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
          @click="adapter.setDisplayUnit('m', m-1)"
        >
          {{ `${(m - 1) * minuteStep}`.padStart(2, '0') }}
        </vk-button>
      </div>
      <div
        v-if="hasSeconds && minuteStep === 1"
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
          @click="adapter.setDisplayUnit('s', s-1)"
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
        @click="adapter.onSelectTime"
      >
        {{ okButtonLabel }}
      </vk-button>
      <div
        v-if="hasAMPM"
        :class="classes.periodContainer"
      >
        <vk-button
          flat
          size="xs"
          :shape="shape"
          :variant="isSelectedAMPM('AM') ? variant : 'link'"
          :color="isSelectedAMPM('AM') ? color : 'neutral'"
          :class="classes.periodButton"
          @click="selectAMPM('AM')"
        >
          AM
        </vk-button>
        <vk-button
          flat
          size="xs"
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
  </div>
</template>
