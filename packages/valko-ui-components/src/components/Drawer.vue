<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle
} from 'reka-ui'
import type { DrawerProps } from '#valkoui/types/Drawer'
import styles from '#valkoui/styles/Drawer.styles.ts'
import VkIcon from './Icon.vue'
import VkButton from './Button.vue'

defineOptions({ name: 'VkDrawer' })

const props = withDefaults(defineProps<DrawerProps>(), {
  shape: 'soft',
  size: 'md',
  backdrop: 'opaque',
  placement: 'right',
  isOpen: false,
  closable: true,
  title: '',
  class: ''
})

const emit = defineEmits(['close'])

const s = computed(() => styles(props))

const containerRef = ref<HTMLDivElement | null>(null)

const closeModal = () => { if (props.closable) emit('close') }

// Reka requests close on Esc, outside interaction and dismiss; `closable`
// gates all of them, mirroring the previous `@close="closeDrawer"` wiring.
const onRequestClose = (open: boolean) => { if (!open) closeModal() }

// Keep the previous initial-focus behavior: Reka focuses the first focusable
// part by default; the old implementation focused the (non-focusable)
// container element instead, leaving focus where it was.
const onOpenAutoFocus = (event: Event) => {
  event.preventDefault()
  containerRef.value?.focus()
}
</script>

<template>
  <DialogRoot
    :open="isOpen"
    @update:open="onRequestClose"
  >
    <DialogPortal>
      <DialogOverlay
        :class="s.backdrop({ class: styleSlots?.backdrop })"
      />
      <DialogContent
        :class="s.dialog({ class: styleSlots?.dialog })"
        :aria-modal="true"
        :aria-labelledby="ariaLabelledBy || undefined"
        @open-auto-focus="onOpenAutoFocus"
      >
        <div
          :class="s.container({ class: styleSlots?.container })"
          ref="containerRef"
        >
          <div
            :class="s.content({ class: styleSlots?.content })"
          >
            <div
              :class="s.panel({ class: styleSlots?.panel })"
              :data-title="!!title"
            >
              <div
                v-if="title || closable"
                :class="s.panelChild({ class: styleSlots?.panelChild })"
              >
                <DialogTitle
                  v-if="!ariaLabelledBy"
                  :class="s.title({ class: styleSlots?.title })"
                >
                  {{ title }}
                </DialogTitle>
                <!-- Reka's DialogTitle force-overrides custom ids, so when the
                     consumer provides `ariaLabelledBy` the title renders with
                     that exact id for the labelledby reference to resolve. -->
                <h2
                  v-else
                  :id="ariaLabelledBy"
                  :class="s.title({ class: styleSlots?.title })"
                >
                  {{ title }}
                </h2>
                <DialogDescription
                  v-if="ariaDescription"
                  class="sr-only"
                >
                  {{ ariaDescription }}
                </DialogDescription>
                <vk-button
                  v-if="closable"
                  tabindex="-1"
                  size="xs"
                  variant="link"
                  shape="rounded"
                  color="surface"
                  condensed
                  :class="s.closeButton({ class: styleSlots?.closeButton })"
                  @click="closeModal"
                >
                  <div :class="s.closeIcon({ class: styleSlots?.closeIcon })">
                    <vk-icon name="x" />
                  </div>
                </vk-button>
              </div>
              <div :class="s.slotContainer({ class: styleSlots?.slotContainer })">
                <slot />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
