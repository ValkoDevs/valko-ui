<script setup lang="ts">
import { ref, useId } from 'vue'
import type { TooltipProps } from '#valkoui/types/Tooltip'
import styles from '#valkoui/styles/Tooltip.styles.ts'
import VkPopover from './Popover.vue'

defineOptions({ name: 'VkTooltip' })

const props = withDefaults(defineProps<TooltipProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  placement: 'auto',
  alignment: undefined,
  elevated: false
})

const { container, tip } = styles(props)

const isShown = ref(false)
const tooltipId = useId()

const showTooltip = (value: boolean) => {
  isShown.value = value
}
</script>

<template>
  <vk-popover
    :is-open="isShown"
    :placement="placement"
    :alignment="alignment"
    :shape="shape"
    :elevated="elevated"
    :class="container({ class: styleSlots?.container })"
    condensed
    @mouseenter="() => showTooltip(true)"
    @mouseleave="() => showTooltip(false)"
  >
    <slot :aria-describedby="tooltipId" />

    <template #popover-content>
      <div
        :id="tooltipId"
        role="tooltip"
        :class="tip({ class: styleSlots?.tip })"
      >
        {{ content }}
      </div>
    </template>
  </vk-popover>
</template>
