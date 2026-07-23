<script setup lang="ts">
import { ref, useId, computed } from 'vue'
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

const s = computed(() => styles(props))

const isShown = ref(false)
const tooltipId = useId()
</script>

<template>
  <vk-popover
    :v-model:is-open="isShown"
    :placement="placement"
    :alignment="alignment"
    :shape="shape"
    :elevated="elevated"
    :class="s.container({ class: styleSlots?.container })"
    condensed
  >
    <template #trigger="{ setOpen }">
      <div
        @mouseenter="setOpen(true)"
        @mouseleave="setOpen(false)"
      >
        <slot :aria-describedby="tooltipId" />
      </div>
    </template>

    <template #panel>
      <div
        :id="tooltipId"
        role="tooltip"
        :class="s.tip({ class: styleSlots?.tip })"
      >
        {{ content }}
      </div>
    </template>
  </vk-popover>
</template>
