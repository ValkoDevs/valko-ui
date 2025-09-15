<script setup lang="ts">
import type { TagProps } from '#valkoui/types/Tag'
import styles from '#valkoui/styles/Tag.styles.ts'
import VkIcon from './Icon.vue'
import VkButton from './Button.vue'

defineOptions({ name: 'VkTag' })

const props = withDefaults(defineProps<TagProps>(), {
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  closable: false,
  isPressable: false
})

const emit = defineEmits(['click', 'close'])

const { container, icons, content, closeButton, contentContainer, closeIcon } = styles(props)

const onClick = () => {
  if (!props.disabled && props.isPressable) {
    emit('click')
  }
}

const onClose = () => {
  if (!props.disabled) {
    emit('close')
  }
}
</script>

<template>
  <div
    :class="container({ class: styleSlots?.container })"
    :role="isPressable ? 'button' : undefined"
    :tabindex="isPressable ? 0 : undefined"
    @click="onClick"
  >
    <div :class="contentContainer({ class: styleSlots?.contentContainer })">
      <vk-icon
        v-if="iconLeft"
        :name="iconLeft"
        :class="icons({ class: styleSlots?.icons })"
      />
      <span :class="content({ class: styleSlots?.content })">{{ text }}</span>
      <vk-icon
        v-if="iconRight"
        :name="iconRight"
        :class="icons({ class: styleSlots?.icons })"
      />
    </div>
    <vk-button
      v-if="closable"
      :class="closeButton({ class: styleSlots?.closeButton })"
      color="surface"
      variant="link"
      shape="rounded"
      size="xs"
      condensed
      :disabled="disabled"
      @click="onClose"
    >
      <vk-icon
        name="x"
        :class="closeIcon({ class: styleSlots?.closeIcon })"
      />
    </vk-button>
  </div>
</template>
