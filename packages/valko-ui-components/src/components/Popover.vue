<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
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

const emit = defineEmits(['close'])

const s = computed(() => styles(props))

const rootRef = ref<HTMLElement | null>(null)
const slotRef = ref<HTMLElement | null>(null)
const panelRef = ref<HTMLElement | null>(null)

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (rootRef.value && !rootRef.value.contains(target) && panelRef.value && !panelRef.value.contains(target)) {
    emit('close')
  }
}

const placement = computed(() => {
  if (props.placement !== 'auto')
    return `${props.placement}-${props.alignment || 'start'}`

  if (!slotRef.value || !panelRef.value || !rootRef.value)
    return 'bottom-start'

  const { bottom, top, left, right } = slotRef.value.getBoundingClientRect()
  const { height, width } = panelRef.value.getBoundingClientRect()
  const offset = 8

  const placements = {
    bottom: innerHeight - bottom > height + offset,
    top: top > height + offset,
    right: right > innerWidth - (width + offset),
    left: left + width + offset < innerWidth
  }

  const selectedPlacement = Object.entries(placements).find(([, fits]) => fits)?.[0] || 'left'

  if (props.alignment) return `${selectedPlacement}-${props.alignment}`

  const alignments = {
    start: left + width + offset < innerWidth,
    end: right > innerWidth - (width + offset),
    center: (left > width / 2) && (right > width / 2)
  }

  const selectedAlignment = Object.entries(alignments).find(([, fits]) => fits)?.[0] || 'start'

  return `${selectedPlacement}-${selectedAlignment}`
})

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div
    ref="rootRef"
    :class="s.container({ class: styleSlots?.container })"
  >
    <div
      :class="s.slotContainer({ class: styleSlots?.slotContainer })"
      ref="slotRef"
    >
      <slot name="default" />
    </div>

    <transition
      enter-active-class="transition-transform duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        ref="panelRef"
        role="dialog"
        :aria-modal="false"
        :aria-label="props['aria-label']"
        :aria-labelledby="props['aria-labelledby']"
        :aria-describedby="props['aria-describedby']"
        :class="s.panel({ class: styleSlots?.panel })"
        :data-text="!!text"
        :data-placement="placement"
      >
        <slot name="popover-content">
          {{ text }}
        </slot>
      </div>
    </transition>
  </div>
</template>
