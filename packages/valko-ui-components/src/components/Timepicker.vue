<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import type { TimepickerProps } from '#valkoui/types/Timepicker'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Timepicker.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkInput from './Input.vue'
import VkTime from './Time.vue'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkTimepicker' })

const props = withDefaults(defineProps<TimepickerProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  format: 'HH:mm:ss'
})

const emit = defineEmits(['onSelect'])

const classes = useStyle<TimepickerProps, SlotStyles>(props, styles)

const isOpen = ref(false)
const rootRef = ref<HTMLElement | null>(null)
const togglePopover = () => isOpen.value = !isOpen.value

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement

  if (rootRef.value && !rootRef.value.contains(target)) isOpen.value = false
}

onMounted(() => nextTick(() => document.addEventListener('click', handleClickOutside)))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))
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
      :class="classes.input"
      readonly
      @focus="togglePopover"
      @right-icon-click="togglePopover"
    >
      <template #rightIcon>
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
        :class="classes.content"
      >
        <vk-time
          v-bind="props"
          :adapter="adapter"
          :locale="locale"
          :format="format"
          :min-time="minTime"
          :max-time="maxTime"
          :disabled-times="disabledTimes"
          @on-select="() => {
            emit('onSelect')
            isOpen = false
          }"
        />
      </div>
    </transition>
  </div>
</template>
