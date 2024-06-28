<script setup lang="ts">
import type { TagProps } from '#valkoui/types/Tag'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Tag.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
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

const classes = useStyle<TagProps, SlotStyles>(props, styles)

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
    :class="classes.container"
    @click="onClick"
  >
    <div>
      <vk-icon
        v-if="iconLeft"
        :name="iconLeft"
        :class="classes.icons"
      />
      <span :class="classes.content">{{ text }}</span>
      <vk-icon
        v-if="iconRight"
        :name="iconRight"
        :class="classes.icons"
      />
    </div>
    <vk-button
      v-if="closable"
      :class="classes.closable"
      :color="variant === 'filled' ? 'neutral' : color"
      variant="link"
      shape="rounded"
      size="xs"
      flat
      condensed
      :disabled="disabled"
      @click="onClose"
    >
      <vk-icon
        name="x"
      />
    </vk-button>
  </div>
</template>
