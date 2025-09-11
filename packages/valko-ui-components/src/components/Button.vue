<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from '#valkoui/types/Button'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Button.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkSpinner from './Spinner.vue'
import useRipple from '#valkoui/composables/useRipple.ts'

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

const classes = useStyle<ButtonProps, SlotStyles>(props, styles)

const buttonRef = ref<HTMLButtonElement | null>(null)
const createRipple = useRipple(buttonRef)

const onClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
    createRipple(event)
  }
}
</script>

<template>
  <button
    ref="buttonRef"
    :class="classes.button"
    :disabled="disabled"
    :aria-disabled="disabled"
    :aria-label="props['aria-label']"
    :type="type"
    @click="onClick"
  >
    <div :class="classes.stateLayer" />
    <div
      :class="classes.spinnerContainer"
    >
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
          :classes="variant === 'filled' || variant === 'gradient' ? 'text-surface' : ''"
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
