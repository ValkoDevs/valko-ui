<script setup lang="ts">
import { computed } from 'vue'
import type { AlertProps } from '#valkoui/types/Alert'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Alert.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkIcon from './Icon.vue'
import VkButton from './Button.vue'

defineOptions({ name: 'VkAlert' })

const props = withDefaults(defineProps<AlertProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  icon: '',
  closable: false,
  flat: false
})

const emit = defineEmits(['close'])

const classes = useStyle<AlertProps, SlotStyles>(props, styles)

const onClick = () => emit('close')

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
        variant="link"
        color="secondary"
        size="xs"
        shape="rounded"
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
