<script setup lang="ts">
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

const emit = defineEmits(['onSelect', 'update:isOpen'])
</script>

<template>
  <vk-popover
    :is-open="isOpen"
    :shape="shape"
    :style-slots="{ panel: ['p-2'] }"
    @update:is-open="emit('update:isOpen', $event)"
  >
    <template #trigger="{ setOpen }">
      <vk-input
        v-bind="props"
        :model-value="parsedModel"
        :label="label"
        readonly
        @focus="setOpen(true)"
      >
        <template #right-icon>
          <vk-icon name="clock-2" />
        </template>
      </vk-input>
    </template>

    <template #panel="{ setOpen, isOpen }">
      <vk-time
        v-if="isOpen"
        v-bind="props"
        :adapter="adapter"
        :locale="locale"
        :format="format"
        :min-time="minTime"
        :max-time="maxTime"
        :disabled-times="disabledTimes"
        :ok-button-label="okButtonLabel"
        @on-select="() => {
          emit('onSelect')
          setOpen(false)
        }"
      />
    </template>
  </vk-popover>
</template>
