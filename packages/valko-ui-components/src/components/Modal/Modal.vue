<script setup lang="ts">
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import { ModalProps } from '@/components/Modal/interfaces'
import { VkButton, VkIcon } from '../'
import useStyle from './Modal.styles'

const props = withDefaults(defineProps<ModalProps>(), {
  size: 'md',
  shape: 'soft',
  backdrop: 'opaque',
  closable: true,
  flat: false
})

defineOptions({ name: 'VkModal' })

const classes = useStyle(props)
const emit = defineEmits(['close'])

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

      <div :class="classes.container">
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
                  tab-index="-1"
                  size="xs"
                  variant="ghost"
                  shape="rounded"
                  color="secondary"
                  condensed
                  class="justify-self-end"
                  @click="closeModal"
                >
                  <div class="p-1">
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