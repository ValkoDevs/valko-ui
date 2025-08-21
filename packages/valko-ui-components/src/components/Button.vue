<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from '#valkoui/types/Button'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Button.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkSpinner from './Spinner.vue'

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
  loading: false
})

const emit = defineEmits(['click'])

const classes = useStyle<ButtonProps, SlotStyles>(props, styles)

const buttonRef = ref<HTMLButtonElement | null>(null)

const createRipple = (event: MouseEvent) => {
  const btn = buttonRef.value
  if (!btn) return

  const ripple = document.createElement('span')
  ripple.className = classes.value.ripple

  const { left, top } = btn.getBoundingClientRect()
  const size = Math.max(btn.offsetWidth, btn.offsetHeight)
  const x = event.clientX - left - size / 2
  const y = event.clientY - top - size / 2

  Object.assign(ripple.style, {
    width: `${size}px`,
    height: `${size}px`,
    left: `${x}px`,
    top: `${y}px`
  })

  ripple.addEventListener('animationend', () => ripple.remove())
  btn.appendChild(ripple)
}

const onClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click')
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
