<script setup lang="ts">
import { ref, useId } from 'vue'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import type { ModalProps } from '#valkoui/types/Modal'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Modal.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkIcon from './Icon.vue'
import VkButton from './Button.vue'

defineOptions({ name: 'VkModal' })

const props = withDefaults(defineProps<ModalProps>(), {
  size: 'md',
  shape: 'soft',
  backdrop: 'opaque',
  title: '',
  closable: true,
  isOpen: false
})

const emit = defineEmits(['close'])

const classes = useStyle<ModalProps, SlotStyles>(props, styles)

const containerRef = ref(null)
const descriptionId = useId()

const closeModal = () => { if (props.closable) emit('close') }
</script>

<template>
  <transition-root
    appear
    :show="isOpen"
    as="template"
  >
    <Dialog
      :class="classes.dialog"
      :initial-focus="containerRef"
      :aria-modal="true"
      :aria-describedby="props['aria-description'] ? descriptionId : undefined"
      :aria-labelledby="props['aria-labelledby']"
      @close="closeModal"
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
        <div :class="classes.backdrop" />
      </transition-child>

      <div
        :class="classes.container"
        ref="containerRef"
      >
        <div :class="classes.content">
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
            <dialog-panel :class="classes.panel">
              <div
                v-if="title || closable"
                :class="classes.panelChild"
              >
                <dialog-title
                  :class="classes.title"
                  :id="props['aria-labelledby']"
                >
                  {{ title }}
                </dialog-title>
                <div
                  v-if="props['aria-description']"
                  class="sr-only"
                  :id="descriptionId"
                >
                  {{ props['aria-description'] }}
                </div>
                <vk-button
                  v-if="closable"
                  tabindex="-1"
                  size="xs"
                  variant="link"
                  shape="rounded"
                  color="surface"
                  condensed
                  :class="classes.closeButton"
                  @click="closeModal"
                >
                  <div :class="classes.closeIcon">
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
