<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import type { TimepickerProps } from '#valkoui/types/Timepicker'
import styles from '#valkoui/styles/Timepicker.styles.ts'
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

const { container, input, content } = styles(props)

const rootRef = ref<HTMLElement | null>(null)

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement

  if (rootRef.value && !rootRef.value.contains(target) && !target.closest('.vk-timepicker__content')) emit('close')
}

onMounted(() => nextTick(() => document.addEventListener('mousedown', handleClickOutside, true)))
onBeforeUnmount(() => document.addEventListener('mousedown', handleClickOutside, true))
</script>

<template>
  <div
    ref="rootRef"
    :class="container({ class: styleSlots?.container })"
  >
    <vk-input
      v-bind="props"
      :model-value="parsedModel"
      :label="label"
      :class="input({ class: styleSlots?.input })"
      readonly
      @focus="emit('open')"
      @right-icon-click="emit('open')"
    >
      <template #right-icon>
        <vk-icon name="clock-2" />
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
        v-if="isOpen"
        :class="content({ class: styleSlots?.content })"
      >
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
            emit('close')
          }"
        />
      </div>
    </transition>
  </div>
</template>
