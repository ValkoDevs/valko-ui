<script setup lang="ts">
import { Popover, PopoverPanel } from '@headlessui/vue'
import type { PopoverProps } from '#valkoui/types/Popover'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Popover.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'

defineOptions({ name: 'VkPopover' })

const props = withDefaults(defineProps<PopoverProps>(), {
  isOpen: false,
  shape: 'soft',
  text: '',
  placement: 'bottom'
})

const classes = useStyle<PopoverProps, SlotStyles>(props, styles)
</script>

<template>
  <popover
    :class="classes.popover"
    :data-isOpen-state="isOpen"
  >
    <slot name="default" />

    <transition
      enter-active-class="transition-transform duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <popover-panel
        v-if="isOpen"
        static
        :class="[classes.panel, ...(Array.isArray(panelClasses) ? panelClasses : [panelClasses])]"
        :data-text="!!text"
      >
        <slot name="popover-content">
          {{ text }}
        </slot>
      </popover-panel>
    </transition>
  </popover>
</template>
