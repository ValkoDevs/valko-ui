<script setup lang="ts">
import { ref } from 'vue'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import { ModalProps } from '#valkoui/types'
import { VkButton, VkIcon } from '../'
import { useStyle } from './Modal.styles'

defineOptions({ name: 'VkModal' })

const props = withDefaults(defineProps<ModalProps>(), {
  size: 'md',
  shape: 'soft',
  backdrop: 'opaque',
  closable: true,
  flat: false
})

const emit = defineEmits(['close'])

const classes = useStyle(props)
const containerRef = ref(null)

const closeModal = () => { emit('close') }
</script>

<template>
  <transition-root
    appear
    :show="isOpen"
    as="template"
  >
    <Dialog
      @close="closeModal"
      :class="classes.dialog"
      :initial-focus="containerRef"
    >
      <transition-child
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          :class="classes.backdrop"
        />
      </transition-child>

      <div
        :class="classes.container"
        ref="containerRef"
      >
        <div
          :class="classes.content"
        >
          <transition-child
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <dialog-panel
              :class="classes.panel"
            >
              <div
                v-if="props.title || props.closable"
                :class="classes.panelChild"
              >
                <dialog-title
                  :class="classes.title"
                >
                  {{ props.title }}
                </dialog-title>
                <vk-button
                  v-if="props.closable"
                  tabindex="-1"
                  size="xs"
                  variant="link"
                  shape="rounded"
                  color="secondary"
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
