<script setup lang="ts">
import { TagProps } from '#valkoui/types'
import { VkIcon, VkButton } from '../'
import { useStyle } from './Tag.styles'

defineOptions({ name: 'VkTag' })

const props = withDefaults(defineProps<TagProps>(), {
  content: '',
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  closable: false,
  loading: false
})

const emit = defineEmits(['click', 'close'])

const onClick = () => {
  if (!props.disabled && !props.loading) {
    emit('click')
  }
}

const onClose = () => emit('close')

const classes = useStyle(props)
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
      <span :class="classes.content">{{ content }}</span>
      <vk-icon
        v-if="iconRight"
        :name="iconRight"
        :class="classes.icons"
      />
    </div>
    <vk-button
      v-if="closable"
      variant="link"
      color="light"
      size="xs"
      shape="rounded"
      flat
      :class="classes.closable"
      @click="onClose"
    >
      <vk-icon
        name="x"
      />
    </vk-button>
  </div>
</template>
