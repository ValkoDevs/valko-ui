<script setup lang="ts">
import { ref, computed } from 'vue'
import type { TimepickerProps } from '#valkoui/types/Timepicker'
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
  okButtonLabel: 'OK',
  isOpen: undefined
})

const emit = defineEmits(['onSelect', 'open', 'close'])

const internalOpen = ref(false)

const open = computed({
  get: () => props.isOpen ?? internalOpen.value,
  set: (val: boolean) => {
    if (props.isOpen === undefined) internalOpen.value = val
  }
})

const handleOpen = () => {
  open.value = true
  emit('open')
}

const handleClose = () => {
  open.value = false
  emit('close')
}
</script>

<template>
  <vk-popover
    class="vk-timepicker"
    :is-open="open"
    :shape="shape"
    :condensed="false"
    @close="handleClose"
  >
    <vk-input
      v-bind="props"
      :model-value="displayValue"
      :label="label"
      readonly
      @focus="handleOpen"
      @right-icon-click="handleOpen"
    >
      <template #right-icon>
        <vk-icon name="clock-2" />
      </template>
    </vk-input>

    <template #popover-content>
      <vk-time
        v-if="open"
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
          handleClose()
        }"
      />
    </template>
  </vk-popover>
</template>
