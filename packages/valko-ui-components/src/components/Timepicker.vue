<script setup lang="ts">
import { computed } from 'vue'
import type { TimepickerProps } from '#valkoui/types/Timepicker'
import styles from '#valkoui/styles/Timepicker.styles.ts'
import VkPopover from './Popover.vue'
import VkInput from './Input.vue'
import VkTime from './Time.vue'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkTimepicker' })

const props = withDefaults(defineProps<TimepickerProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  format: 'HH:mm:ss',
  okButtonLabel: 'OK'
})

const emit = defineEmits(['onSelect', 'open', 'close'])

const s = computed(() => styles(props))
</script>

<template>
  <vk-popover
    class="vk-timepicker"
    :is-open="isOpen"
    :shape="shape"
    :condensed="false"
    @close="emit('close')"
  >
    <vk-input
      v-bind="props"
      :model-value="displayValue"
      :label="label"
      :class="s.input({ class: styleSlots?.input })"
      readonly
      @focus="emit('open')"
      @right-icon-click="emit('open')"
    >
      <template #right-icon>
        <vk-icon name="clock-2" />
      </template>
    </vk-input>

    <template #popover-content>
      <vk-time
        v-if="isOpen"
        v-bind="props"
        :style-slots="undefined"
        :adapter="adapter"
        :locale="locale"
        :format="format"
        :min-time="minTime"
        :max-time="maxTime"
        :disabled-times="disabledTimes"
        :ok-button-label="okButtonLabel"
        @on-select="() => {
          emit('onSelect')
          emit('close')
        }"
      />
    </template>
  </vk-popover>
</template>
