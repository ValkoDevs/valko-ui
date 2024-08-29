<script setup lang="ts">
import { ref, computed } from 'vue'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import type { DrawerProps } from '#valkoui/types/Drawer'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Drawer.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
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
  flat: false,
  title: 'Drawer'
})

const emit = defineEmits(['close'])

const classes = useStyle<DrawerProps, SlotStyles>(props, styles)

const containerRef = ref(null)

const closeDrawer = () => { emit('close') }

const transitionClasses = computed(() => {
  switch (props.placement) {
    case 'top':
      return {
        enter: 'duration-300 ease-out transform',
        enterFrom: '-translate-y-full',
        enterTo: 'translate-y-0',
        leave: 'duration-300 ease-in transform',
        leaveFrom: 'translate-y-0',
        leaveTo: '-translate-y-full'
      }
    case 'bottom':
      return {
        enter: 'duration-300 ease-out transform',
        enterFrom: 'translate-y-full',
        enterTo: 'translate-y-0',
        leave: 'duration-300 ease-in transform',
        leaveFrom: 'translate-y-0',
        leaveTo: 'translate-y-full'
      }
    case 'left':
      return {
        enter: 'duration-300 ease-out transform',
        enterFrom: '-translate-x-full',
        enterTo: 'translate-x-0',
        leave: 'duration-300 ease-in transform',
        leaveFrom: 'translate-x-0',
        leaveTo: '-translate-x-full'
      }
    case 'right':
      return {
        enter: 'duration-300 ease-out transform',
        enterFrom: 'translate-x-full',
        enterTo: 'translate-x-0',
        leave: 'duration-300 ease-in transform',
        leaveFrom: 'translate-x-0',
        leaveTo: 'translate-x-full'
      }
    default:
      return {
        enter: 'duration-300 ease-out',
        enterFrom: 'opacity-0',
        enterTo: 'opacity-100',
        leave: 'duration-300 ease-in',
        leaveFrom: 'opacity-100',
        leaveTo: 'opacity-0'
      }
  }
})
</script>

<template>
  <transition-root
    appear
    :show="isOpen"
    as="template"
  >
    <Dialog
      @close="closeDrawer"
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
            :enter="transitionClasses.enter"
            :enter-from="transitionClasses.enterFrom"
            :enter-to="transitionClasses.enterTo"
            :leave="transitionClasses.leave"
            :leave-from="transitionClasses.leaveFrom"
            :leave-to="transitionClasses.leaveTo"
          >
            <dialog-panel
              :class="classes.panel"
            >
              <div
                v-if="title || closable"
                :class="classes.panelChild"
              >
                <dialog-title
                  :class="classes.title"
                >
                  {{ title }}
                </dialog-title>
                <vk-button
                  v-if="closable"
                  tabindex="-1"
                  size="xs"
                  variant="link"
                  shape="rounded"
                  color="neutral"
                  condensed
                  :class="classes.closeButton"
                  @click="closeDrawer"
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
