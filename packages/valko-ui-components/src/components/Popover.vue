<script setup lang="ts">
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue'
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

const emit = defineEmits(['close'])

const classes = useStyle<PopoverProps, SlotStyles>(props, styles)

const rootRef = ref<HTMLElement | null>(null)

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement

  if (rootRef.value && !rootRef.value.contains(target)) emit('close')
}

onMounted(() => nextTick(() => document.addEventListener('click', handleClickOutside)))

onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))
</script>

<template>
  <div ref="rootRef">
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
  </div>
</template>
