<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from '#valkoui/types/Button'
import styles from '#valkoui/styles/Button.styles.ts'
import VkSpinner from './Spinner.vue'
import useRipple from '#valkoui/composables/useRipple'

defineOptions({ name: 'VkButton' })

const props = withDefaults(defineProps<ButtonProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  block: false,
  elevated: false,
  disabled: false,
  condensed: false,
  loading: false,
  type: 'button',
  styleSlots: undefined
})

const emit = defineEmits(['click'])

const { button, stateLayer, spinnerContainer, spinner } = styles(props)

const buttonRef = ref<HTMLButtonElement | null>(null)
const createRipple = useRipple(buttonRef)

const onClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}

const onMouseDown = (event: MouseEvent | TouchEvent) => {
  if (!props.disabled && !props.loading) {
    createRipple(event)
  }
}
</script>

<template>
  <button
    ref="buttonRef"
    :class="button({ class: styleSlots?.button })"
    :disabled="props.disabled"
    :aria-disabled="props.disabled"
    :aria-label="props['aria-label']"
    :type="props.type"
    @click="onClick"
    @mousedown="onMouseDown"
    @touchstart="onMouseDown"
  >
    <div :class="stateLayer({ class: styleSlots?.stateLayer })" />
    <div :class="spinnerContainer({ class: styleSlots?.spinnerContainer })">
      <transition
        enter-active-class="transition ease-out duration-150"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-out duration-150"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <vk-spinner
          v-if="props.loading"
          condensed
          :data-variant="props.variant"
          :style-slots="{ icon: [spinner({ class: styleSlots?.spinner })] }"
          :size="props.size"
          :color="props.color"
          role="status"
          aria-live="polite"
          aria-label="Loading..."
        />
      </transition>
    </div>
    <slot />
  </button>
</template>
