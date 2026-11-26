<script setup lang="ts">
import { Comment, Fragment, cloneVNode, computed, createTextVNode, defineComponent, h, mergeProps, ref } from 'vue'
import type { ComponentPublicInstance, VNode } from 'vue'
import { Primitive } from 'reka-ui'
import type { ButtonProps } from '#valkoui/types/Button'
import styles from '#valkoui/styles/Button.styles.ts'
import VkSpinner from './Spinner.vue'
import useRipple from '#valkoui/composables/useRipple'

defineOptions({ name: 'VkButton' })

/**
 * Renders the button element through Reka `Primitive`. With `asChild`, Reka's
 * `Slot` merges attrs onto the first child only, which would be the internal
 * state layer. Instead, the consumer's element (first vnode after the
 * internal decorations) is cloned with the button attrs, and the decorations
 * are injected as its children.
 */
const BUTTON_DECORATION_COUNT = 2

const flattenSlotChildren = (nodes: VNode[]): VNode[] => nodes
  .flatMap(node => (node.type === Fragment && Array.isArray(node.children))
    ? flattenSlotChildren(node.children as VNode[])
    : [node])
  .filter(node => node.type !== Comment)

const VkButtonRoot = defineComponent({
  name: 'VkButtonRoot',
  inheritAttrs: false,
  props: { asChild: Boolean },
  setup (rootProps, { attrs, slots }) {
    return () => {
      const children = flattenSlotChildren(slots.default?.() ?? [])

      const renderAsButton = () => h(Primitive, { as: 'button', ...attrs }, { default: () => children })

      if (!rootProps.asChild) return renderAsButton()

      const decorations = children.slice(0, BUTTON_DECORATION_COUNT)
      const consumerChildren = children.slice(BUTTON_DECORATION_COUNT)
      const child = consumerChildren[0]
      if (!child) return renderAsButton()

      const childProps = { ...child.props }
      delete childProps.ref
      const rawChildren = child.children
      const existingChildren: VNode[] = Array.isArray(rawChildren)
        ? rawChildren as VNode[]
        : typeof rawChildren === 'string'
          ? [createTextVNode(rawChildren)]
          : []

      const cloned = cloneVNode(child, mergeProps(attrs, childProps))
      // cloneVNode cannot replace children; inject the decorations into the
      // fresh clone before it is mounted. `patchFlag` 16 is FULL_PROPS and
      // forces a full diff on updates; block tracking (`dynamicChildren`) is
      // dropped because it no longer matches the replaced children.
      cloned.children = [...decorations, ...existingChildren]
      cloned.shapeFlag = (cloned.shapeFlag & ~8) | 16 // TEXT_CHILDREN -> ARRAY_CHILDREN
      cloned.patchFlag = 16
      delete (cloned as { dynamicChildren?: unknown }).dynamicChildren
      return cloned
    }
  }
})

const props = withDefaults(defineProps<ButtonProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  block: false,
  elevated: false,
  disabled: false,
  condensed: false,
  loading: false,
  type: 'button',
  asChild: false
})

const emit = defineEmits(['click'])

const s = computed(() => styles(props))

const buttonRef = ref<ComponentPublicInstance | null>(null)
const createRipple = useRipple(computed(() => buttonRef.value?.$el as HTMLElement ?? null))

const rootAttrs = computed(() => {
  const base = {
    class: s.value.button({ class: props.styleSlots?.button }),
    'aria-label': props.ariaLabel,
    onClick,
    onMousedown: onMouseDown,
    onTouchstart: onMouseDown
  }

  if (props.asChild) {
    return {
      ...base,
      disabled: props.disabled || undefined,
      'aria-disabled': props.disabled ? 'true' : undefined
    }
  }

  return {
    ...base,
    disabled: props.disabled,
    'aria-disabled': props.disabled,
    type: props.type
  }
})

const onClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}

const onMouseDown = (event: MouseEvent | TouchEvent) => {
  if (!props.disabled && !props.loading) {
    createRipple(event)
  }
}
</script>

<template>
  <VkButtonRoot
    ref="buttonRef"
    :as-child="asChild"
    v-bind="rootAttrs"
  >
    <div :class="s.stateLayer({ class: styleSlots?.stateLayer })" />
    <div :class="s.spinnerContainer({ class: styleSlots?.spinnerContainer })">
      <transition
        enter-active-class="transition ease-out duration-150"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-out duration-150"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <vk-spinner
          v-if="loading"
          condensed
          :style-slots="{
            icon: [s.spinnerIcon({ class: styleSlots?.spinnerIcon })],
            container: [s.spinner({ class: styleSlots?.spinner })]
          }"
          :size="size"
          :color="color"
          role="status"
          aria-live="polite"
          aria-label="Loading..."
        />
      </transition>
    </div>
    <slot />
  </VkButtonRoot>
</template>
