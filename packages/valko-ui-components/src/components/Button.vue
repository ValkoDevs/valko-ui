<script setup lang="ts">
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
  flat: false,
  disabled: false,
  condensed: false,
  loading: false
})

const emit = defineEmits(['click'])

const classes = useStyle<ButtonProps, SlotStyles>(props, styles)

const onClick = () => {
  if (!props.disabled && !props.loading) {
    emit('click')
  }
}
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
          :color="color"
          condensed
          :size="size"
        />
      </transition>
    </div>
    <slot />
  </button>
</template>
