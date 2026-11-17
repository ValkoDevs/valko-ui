<script setup lang="ts">
import { computed } from 'vue'
import { PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui'
import type { PopoverProps } from '#valkoui/types/Popover'
import styles from '#valkoui/styles/Popover.styles.ts'

defineOptions({ name: 'VkPopover' })

const props = withDefaults(defineProps<PopoverProps>(), {
  isOpen: false,
  shape: 'soft',
  text: '',
  placement: 'auto',
  elevated: false
})

const emit = defineEmits(['close', 'update:isOpen'])

const s = computed(() => styles(props))

// `placement: 'auto'` is delegated to Reka's default side + collision
// avoidance, which flips the panel when it does not fit.
const side = computed(() => (props.placement === 'auto' ? undefined : props.placement))
const align = computed(() => props.alignment ?? 'start')

const onOpenChange = (open: boolean) => {
  emit('update:isOpen', open)
  if (!open) emit('close')
}
</script>

<template>
  <PopoverRoot
    :open="isOpen"
    @update:open="onOpenChange"
  >
    <div
      :class="s.container({ class: styleSlots?.container })"
      :data-open="isOpen"
    >
      <PopoverTrigger
        as-child
        :class="s.slotContainer({ class: styleSlots?.slotContainer })"
      >
        <slot name="default" />
      </PopoverTrigger>

      <PopoverPortal>
        <PopoverContent
          :side="side"
          :align="align"
          :side-offset="4"
          :aria-label="ariaLabel"
          :aria-labelledby="ariaLabelledBy"
          :aria-describedby="ariaDescribedBy"
          :data-text="!!text"
          :class="s.panel({ class: styleSlots?.panel })"
        >
          <slot name="popover-content">
            {{ text }}
          </slot>
        </PopoverContent>
      </PopoverPortal>
    </div>
  </PopoverRoot>
</template>
