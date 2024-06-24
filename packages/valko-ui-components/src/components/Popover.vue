<script setup lang="ts">
import { Popover, PopoverPanel } from '@headlessui/vue'
import type { PopoverProps } from '#valkoui/types/Popover'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Popover.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'

defineOptions({ name: 'VkPopover' })

const props = withDefaults(defineProps<PopoverProps>(), {
  isOpen: false,
  shape: 'soft'
})

const classes = useStyle<PopoverProps, SlotStyles>(props, styles)
</script>

<template>
  <popover :class="classes.popover">
    <slot name="default" />

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <popover-panel
        v-if="isOpen"
        static
        :class="classes.panel"
      >
        <slot name="popover-content" />
      </popover-panel>
    </transition>
  </popover>
</template>
