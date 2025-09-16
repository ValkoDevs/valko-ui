<script setup lang="ts">
import { computed } from 'vue'
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

const s = computed(() => styles(props))

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
    :class="s.container({ class: styleSlots?.container })"
    :role="isPressable ? 'button' : undefined"
    :tabindex="isPressable ? 0 : undefined"
    @click="onClick"
  >
    <div :class="s.contentContainer({ class: styleSlots?.contentContainer })">
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
    </div>
    <vk-button
      v-if="closable"
      :class="s.closeButton({ class: styleSlots?.closeButton })"
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
        :class="s.closeIcon({ class: styleSlots?.closeIcon })"
      />
    </vk-button>
  </div>
</template>
