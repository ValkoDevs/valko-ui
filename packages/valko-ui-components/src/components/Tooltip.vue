<script setup lang="ts">
import { computed } from 'vue'
import { TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui'
import type { TooltipProps } from '#valkoui/types/Tooltip'
import styles from '#valkoui/styles/Tooltip.styles.ts'

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

// `placement: 'auto'` is delegated to Reka's default side + collision
// avoidance, which flips the tooltip when it does not fit.
const side = computed(() => (props.placement === 'auto' ? undefined : props.placement))
const align = computed(() => props.alignment ?? 'start')
</script>

<template>
  <TooltipProvider
    :delay-duration="0"
    :close-delay="0"
  >
    <TooltipRoot disable-hoverable-content>
      <TooltipTrigger
        as-child
        :class="s.container({ class: styleSlots?.container })"
      >
        <slot>
          <span />
        </slot>
      </TooltipTrigger>

      <TooltipPortal>
        <TooltipContent
          :side="side"
          :align="align"
          :side-offset="4"
          :class="s.tip({ class: styleSlots?.tip })"
        >
          {{ content }}
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
