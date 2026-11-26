<script setup lang="ts">
import { computed, ref, useAttrs } from 'vue'
import { Toggle } from 'reka-ui'
import type { TagProps } from '#valkoui/types/Tag'
import styles from '#valkoui/styles/Tag.styles.ts'
import VkIcon from './Icon.vue'
import VkButton from './Button.vue'

defineOptions({
  name: 'VkTag',
  inheritAttrs: false
})

const props = withDefaults(defineProps<TagProps>(), {
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  closable: false,
  isPressable: false,
  pressed: undefined
})

const emit = defineEmits(['click', 'close', 'update:pressed'])

const attrs = useAttrs()

const s = computed(() => styles(props))

// The toggle state is owned here so `aria-pressed`/`data-state` are always
// observable in the DOM: from the `pressed` prop when controlled, from local
// state otherwise.
const localPressed = ref(false)
const isPressed = computed(() => props.pressed !== undefined ? props.pressed : localPressed.value)

const onClick = () => {
  if (!props.disabled && props.isPressable) {
    emit('click')
  }
}

const onToggle = (value: boolean) => {
  localPressed.value = value
  if (!props.disabled) {
    emit('update:pressed', value)
  }
}

const onClose = () => {
  if (!props.disabled) {
    emit('close')
  }
}
</script>

<template>
  <div :class="s.container({ class: styleSlots?.container })">
    <!-- Pressable tags render as a real button (Reka `Toggle`) for native
         keyboard/focus semantics and `aria-pressed`. The close button stays a
         sibling of the toggle to avoid nested `<button>` elements. Consumer
         attrs (e.g. `data-testid`, `aria-label`) fall through to the Toggle,
         the interactive element, instead of the wrapper div. -->
    <component
      :is="isPressable ? Toggle : 'div'"
      v-bind="isPressable
        ? { ...attrs, disabled, modelValue: isPressed }
        : attrs"
      :class="s.contentContainer({ class: styleSlots?.contentContainer })"
      @click="onClick"
      @update:model-value="onToggle"
    >
      <vk-icon
        v-if="iconLeft"
        :name="iconLeft"
        :class="s.icons({ class: styleSlots?.icons })"
      />
      <span :class="s.content({ class: styleSlots?.content })">{{ text }}</span>
      <vk-icon
        v-if="iconRight"
        :name="iconRight"
        :class="s.icons({ class: styleSlots?.icons })"
      />
    </component>
    <vk-button
      v-if="closable"
      :class="s.closeButton({ class: styleSlots?.closeButton })"
      color="surface"
      variant="link"
      shape="rounded"
      size="xs"
      condensed
      :disabled="disabled"
      aria-label="Remove"
      @click="onClose"
    >
      <vk-icon
        name="x"
        :class="s.closeIcon({ class: styleSlots?.closeIcon })"
      />
    </vk-button>
  </div>
</template>
