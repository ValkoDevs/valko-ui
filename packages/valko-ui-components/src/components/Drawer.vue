<script setup lang="ts">
import { ref, computed, watch, onBeforeUnmount } from 'vue'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle, DialogDescription } from '@headlessui/vue'
import type { DrawerProps } from '#valkoui/types/Drawer'
import styles from '#valkoui/styles/Drawer.styles.ts'
import useOverlayStack from '#valkoui/composables/useOverlayStack.ts'
import type { OverlayStackEntry } from '#valkoui/types/OverlayStack.ts'
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
  stackable: false,
  title: '',
  class: ''
})

const emit = defineEmits(['close'])

const s = computed(() => styles(props))

const containerRef = ref(null)
const dialogRef = ref<{ $el: HTMLElement | null } | null>(null)
const panelRef = ref<{ $el: HTMLElement | null } | null>(null)
const dialogEl = computed(() => dialogRef.value?.$el ?? null)
const panelEl = computed(() => panelRef.value?.$el ?? null)

const stack = useOverlayStack()
const stackEntry = ref<OverlayStackEntry | null>(null)

const closeDrawer = () => { if (props.closable) emit('close') }

watch(() => props.isOpen, (open) => {
  if (open) {
    if (!props.stackable) stack.closeOthers()
    stackEntry.value = stack.register({ rootRef: dialogEl, panelRef: panelEl, close: closeDrawer })
  } else if (stackEntry.value !== null) {
    stack.unregister(stackEntry.value)
    stackEntry.value = null
  }
}, { immediate: true })

onBeforeUnmount(() => {
  if (stackEntry.value === null) return
  stack.unregister(stackEntry.value)
  stackEntry.value = null
})

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
        <div
          :class="s.backdrop({ class: styleSlots?.backdrop })"
        />
      </transition-child>

      <div
        :class="s.container({ class: styleSlots?.container })"
        ref="containerRef"
      >
        <div
          :class="s.content({ class: styleSlots?.content })"
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
              ref="panelRef"
              :class="s.panel({ class: styleSlots?.panel })"
              :data-title="!!title"
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
                  @click="closeDrawer"
                >
                  <div :class="s.closeIcon({ class: styleSlots?.closeIcon })">
                    <vk-icon name="x" />
                  </div>
                </vk-button>
              </div>
              <div :class="s.slotContainer({ class: styleSlots?.slotContainer })">
                <slot />
              </div>
            </dialog-panel>
          </transition-child>
        </div>
      </div>
    </Dialog>
  </transition-root>
</template>
