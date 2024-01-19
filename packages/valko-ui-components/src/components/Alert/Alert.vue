<script setup lang="ts">
import { computed } from 'vue'
import { AlertProps } from '@/components/Alert/interfaces'
import { VkIcon, VkButton } from '../'

import useStyle from './Alert.Styles'

const props = withDefaults(defineProps<AlertProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  icon: '',
  closable: false
})

defineOptions({ name: 'VkAlert' })
const emit = defineEmits(['close'])

const classes = useStyle(props)

const onClick = () => {
  emit('close')
}

const defaultIcon = computed(() => {
  switch (props.color) {
    case 'primary': return 'bulb-filled'
    case 'secondary': return 'bug-filled'
    case 'success': return 'circle-check-filled'
    case 'info': return 'info-circle-filled'
    case 'warning': return 'alert-circle-filled'
    case 'error': return 'circle-x-filled'
    default: return 'bulb-filled'
  }
})
</script>

<template>
  <div
    :class="classes.container"
  >
    <vk-icon
      v-if="props.icon !== null"
      :name="props.icon ? props.icon : defaultIcon"
      :class="classes.leftIcon"
    />
    <div :class="classes.content">
      <h6
        :class="classes.title"
        v-if="props.title"
      >
        {{ props.title }}
      </h6>
      <span :class="classes.span">
        <slot />
      </span>
    </div>
    <div
      :class="classes.button"
      v-if="props.closable"
    >
      <vk-button
        variant="ghost"
        size="xs"
        rounded
        flat
        @click="onClick"
      >
        <vk-icon
          name="x"
          :class="classes.rightIcon"
        />
      </vk-button>
    </div>
  </div>
</template>
