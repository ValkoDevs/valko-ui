<script setup lang="ts">
import { computed } from 'vue'
import { TagProps } from '#valkoui/types'
import useDarkMode from '#valkoui/composables/useDarkMode'
import { VkIcon, VkButton } from '../'
import { useStyle } from './Tag.styles'

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
const isDarkMode = useDarkMode()
const neutralColor = computed(() => isDarkMode.value ? 'light' : 'dark')

const buttonColor = computed(() => {
  if (props.color === 'neutral' && props.variant === 'filled') return neutralColor.value
  if (props.variant === 'filled' && props.color === 'light') return 'dark'
  if (props.variant === 'filled' && props.color !== 'neutral') return 'light'
  if (props.color === 'neutral') return neutralColor.value
  return props.color
})

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
      <span :class="classes.content">{{ text }}</span>
      <vk-icon
        v-if="iconRight"
        :name="iconRight"
        :class="classes.icons"
      />
    </div>
    <vk-button
      v-if="closable"
      variant="link"
      :color="buttonColor"
      size="xs"
      shape="rounded"
      flat
      :class="classes.closable"
      :disabled="disabled"
      :style="{ padding: '0' }"
      @click="onClose"
    >
      <vk-icon
        name="x"
      />
    </vk-button>
  </div>
</template>
