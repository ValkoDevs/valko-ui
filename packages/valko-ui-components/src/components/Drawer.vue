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

// Conditional binds keep Reka's generated `aria-labelledby`/`aria-describedby`
// (its title/description ids) intact: a static `aria-labelledby` with an
// undefined value would override Reka's binding in `mergeProps`, leaving the
// dialog unlabeled when no custom id is provided. When no description is
// rendered the describedby reference is dropped so it never dangles.
const ariaBinds = computed(() => ({
  ...(props.ariaLabelledBy ? { 'aria-labelledby': props.ariaLabelledBy } : {}),
  ...(props.ariaDescription ? {} : { 'aria-describedby': undefined })
}))

// Initial focus goes to the panel root, not to the first focusable part
// (typically the close button): the root is made programmatically focusable
// with `tabindex="-1"` so `focus()` actually moves focus inside the
// FocusScope instead of silently keeping it on the trigger.
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
        :class="[
          s.dialog({ class: styleSlots?.dialog }),
          s.container({ class: styleSlots?.container }),
          s.content({ class: styleSlots?.content })
        ]"
        :aria-modal="true"
        v-bind="ariaBinds"
        @open-auto-focus="onOpenAutoFocus"
      >
        <div
          :class="s.panel({ class: styleSlots?.panel })"
          :data-title="!!title"
          ref="containerRef"
          tabindex="-1"
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
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
