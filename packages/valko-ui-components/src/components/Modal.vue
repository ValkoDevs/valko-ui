<script setup lang="ts">
import { ref, useId } from 'vue'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import type { ModalProps } from '#valkoui/types/Modal'
import styles from '#valkoui/styles/Modal.styles.ts'
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

const { dialog, backdrop, container, content, panel, panelChild, title, closeButton, closeIcon } = styles(props)

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
      :class="dialog({ class: styleSlots?.dialog })"
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
        <div :class="backdrop({ class: styleSlots?.backdrop })" />
      </transition-child>

      <div
        :class="container({ class: styleSlots?.container })"
        ref="containerRef"
      >
        <div :class="content({ class: styleSlots?.content })">
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
            <dialog-panel :class="panel({ class: styleSlots?.panel })">
              <div
                v-if="props.title || closable"
                :class="panelChild({ class: styleSlots?.panelChild })"
              >
                <dialog-title
                  :class="title({ class: styleSlots?.title })"
                  :id="props['aria-labelledby']"
                >
                  {{ props.title }}
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
                  :class="closeButton({ class: styleSlots?.closeButton })"
                  @click="closeModal"
                >
                  <div :class="closeIcon({ class: styleSlots?.closeIcon })">
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
