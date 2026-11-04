<script setup lang="ts">
import { ref, computed, watch, onBeforeUnmount } from 'vue'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle, DialogDescription } from '@headlessui/vue'
import type { ModalProps } from '#valkoui/types/Modal'
import styles from '#valkoui/styles/Modal.styles.ts'
import useOverlayStack from '#valkoui/composables/useOverlayStack.ts'
import VkIcon from './Icon.vue'
import VkButton from './Button.vue'

defineOptions({ name: 'VkModal' })

const props = withDefaults(defineProps<ModalProps>(), {
  size: 'md',
  shape: 'soft',
  backdrop: 'opaque',
  title: '',
  closable: true,
  stackable: false,
  isOpen: false
})

const emit = defineEmits(['close'])

const s = computed(() => styles(props))

const containerRef = ref(null)
const dialogRef = ref<{ $el: HTMLElement | null } | null>(null)
const panelRef = ref<{ $el: HTMLElement | null } | null>(null)
const dialogEl = computed(() => dialogRef.value?.$el ?? null)
const panelEl = computed(() => panelRef.value?.$el ?? null)

const stack = useOverlayStack()
const stackId = ref<number | null>(null)

const closeModal = () => { if (props.closable) emit('close') }

watch(() => props.isOpen, (open) => {
  if (open) {
    if (!props.stackable) stack.closeOthers()
    stackId.value = stack.register({ rootRef: dialogEl, panelRef: panelEl, close: closeModal })
  } else if (stackId.value !== null) {
    stack.unregister(stackId.value)
    stackId.value = null
  }
}, { immediate: true })

onBeforeUnmount(() => {
  if (stackId.value === null) return
  stack.unregister(stackId.value)
  stackId.value = null
})
</script>

<template>
  <transition-root
    appear
    :show="isOpen"
    as="template"
  >
    <Dialog
      ref="dialogRef"
      :class="s.dialog({ class: styleSlots?.dialog })"
      :initial-focus="containerRef"
      :aria-modal="true"
      :aria-labelledby="ariaLabelledBy"
    >
      <transition-child
        as="template"
        class="opacity-0"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div :class="s.backdrop({ class: styleSlots?.backdrop })" />
      </transition-child>

      <div
        :class="s.container({ class: styleSlots?.container })"
        ref="containerRef"
      >
        <div :class="s.content({ class: styleSlots?.content })">
          <transition-child
            as="template"
            class="opacity-0"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <dialog-panel
              ref="panelRef"
              :class="s.panel({ class: styleSlots?.panel })"
            >
              <div
                v-if="title || closable"
                :class="s.panelChild({ class: styleSlots?.panelChild })"
              >
                <dialog-title
                  :class="s.title({ class: styleSlots?.title })"
                  :id="ariaLabelledBy"
                >
                  {{ title }}
                </dialog-title>
                <dialog-description
                  v-if="ariaDescription"
                  class="sr-only"
                >
                  {{ ariaDescription }}
                </dialog-description>
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
              <slot />
            </dialog-panel>
          </transition-child>
        </div>
      </div>
    </Dialog>
  </transition-root>
</template>
