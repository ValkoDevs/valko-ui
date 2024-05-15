<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonProps } from '#valkoui/types/Button'
import type { SlotStyles } from '#valkoui/types/common'
import useDarkMode from '#valkoui/composables/useDarkMode.ts'
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
  flat: false,
  disabled: false,
  condensed: false,
  loading: false
})

const emit = defineEmits(['click'])

const classes = useStyle<ButtonProps, SlotStyles>(props, styles)

const isDarkMode = useDarkMode()

const onClick = () => {
  if (!props.disabled && !props.loading) {
    emit('click')
  }
}

const spinnerColor = computed(() => {
  if (props.color === 'neutral') {
    if (props.variant === 'filled') return isDarkMode.value ? 'dark' : 'light'
    return isDarkMode.value ? 'light' : 'dark'
  }
  if (props.variant === 'filled' && props.color !== 'light') return 'light'
  if (props.variant === 'filled' && props.color === 'light') return 'dark'
  return props.color
})
</script>

<template>
  <button
    :class="classes.button"
    :disabled="disabled"
    :flat="flat"
    :condensed="condensed"
    :block="block"
    @click="onClick"
  >
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
          variant="loader"
          :color="spinnerColor"
          condensed
          :size="size"
        />
      </transition>
    </div>
    <slot />
  </button>
</template>
