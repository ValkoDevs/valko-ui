<script setup lang="ts">
import { ref } from 'vue'
import { Popover, PopoverPanel } from '@headlessui/vue'
import { TooltipProps } from '#valkoui/types'
import { useStyle } from './Tooltip.styles'

defineOptions({ name: 'VkTooltip' })

const props = withDefaults(defineProps<TooltipProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  placement: 'top'
})

const classes = useStyle(props)
const isShown = ref(false)

const showTooltip = (value: boolean) => {
  isShown.value = value
}
</script>

<template>
  <Popover
    :class="classes.container"
  >
    <div
      :class="classes.mouseover"
      @mouseenter="() => showTooltip(true)"
      @mouseleave="() => showTooltip(false)"
    >
      <slot data-test="default-slot" />
    </div>

    <transition
      enter-active-class="transition-transform duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <PopoverPanel
        v-if="isShown"
        static
        :class="classes.tip"
      >
        {{ content }}
      </PopoverPanel>
    </transition>
  </Popover>
</template>
