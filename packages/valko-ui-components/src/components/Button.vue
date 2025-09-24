<script setup lang="ts">
import { ref, computed } from 'vue'
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
  type: 'button'
})

const emit = defineEmits(['click'])

const s = computed(() => styles(props))

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
    :class="s.button({ class: styleSlots?.button })"
    :disabled="disabled"
    :aria-disabled="disabled"
    :aria-label="props['aria-label']"
    :type="type"
    @click="onClick"
    @mousedown="onMouseDown"
    @touchstart="onMouseDown"
  >
    <div :class="s.stateLayer({ class: styleSlots?.stateLayer })" />
    <div :class="s.spinnerContainer({ class: styleSlots?.spinnerContainer })">
      <transition
        enter-active-class="transition ease-out duration-150"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-out duration-150"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <vk-spinner
          v-if="loading"
          condensed
          :style-slots="{
            icon: [s.spinnerIcon({ class: styleSlots?.spinnerIcon })],
            container: [s.spinner({ class: styleSlots?.spinner })]
          }"
          :size="size"
          :color="color"
          role="status"
          aria-live="polite"
          aria-label="Loading..."
        />
      </transition>
    </div>
    <slot />
  </button>
</template>
