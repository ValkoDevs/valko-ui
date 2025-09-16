<script setup lang="ts">
import { ref, computed, useId } from 'vue'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
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

const { container, backdrop, dialog, content, panel, panelChild, slotContainer, title, closeButton, closeIcon } = styles(props)

const containerRef = ref(null)
const descriptionId = useId()

const closeDrawer = () => { if (props.closable) emit('close') }

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
      :class="dialog({ class: props.styleSlots?.dialog })"
      :initial-focus="containerRef"
      :aria-modal="true"
      :aria-describedby="props['aria-description'] ? descriptionId : undefined"
      :aria-labelledby="props['aria-labelledby']"
      @close="closeDrawer"
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
        <div
          :class="backdrop({ class: props.styleSlots?.backdrop })"
        />
      </transition-child>

      <div
        :class="container({ class: props.styleSlots?.container })"
        ref="containerRef"
      >
        <div
          :class="content({ class: props.styleSlots?.content })"
        >
          <transition-child
            as="template"
            :class="transitionClasses.enterFrom"
            :enter="transitionClasses.enter"
            :enter-from="transitionClasses.enterFrom"
            :enter-to="transitionClasses.enterTo"
            :leave="transitionClasses.leave"
            :leave-from="transitionClasses.leaveFrom"
            :leave-to="transitionClasses.leaveTo"
          >
            <dialog-panel
              :class="panel({ class: props.styleSlots?.panel })"
              :data-title="!!title"
            >
              <div
                v-if="props.title || closable"
                :class="panelChild({ class: props.styleSlots?.panelChild })"
              >
                <dialog-title
                  :class="title({ class: props.styleSlots?.title })"
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
                  :class="closeButton({ class: props.styleSlots?.closeButton })"
                  @click="closeDrawer"
                >
                  <div :class="closeIcon({ class: props.styleSlots?.closeIcon })">
                    <vk-icon name="x" />
                  </div>
                </vk-button>
              </div>
              <div :class="slotContainer({ class: props.styleSlots?.slotContainer })">
                <slot />
              </div>
            </dialog-panel>
          </transition-child>
        </div>
      </div>
    </Dialog>
  </transition-root>
</template>
