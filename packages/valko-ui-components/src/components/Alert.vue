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
  closable: false
})

const emit = defineEmits(['close'])

const classes = useStyle<AlertProps, SlotStyles>(props, styles)

const onClick = () => emit('close')

const defaultIcon = computed(() => {
  switch (props.color) {
    case 'primary': return 'alert-hexagon-filled'
    case 'secondary': return 'alert-hexagon-filled'
    case 'positive': return 'circle-check-filled'
    case 'accent': return 'info-circle-filled'
    case 'warning': return 'alert-circle-filled'
    case 'negative': return 'circle-x-filled'
    default: return 'alert-hexagon-filled'
  }
})
</script>

<template>
  <div :class="classes.container">
    <vk-icon
      v-if="icon !== null"
      :name="icon ? icon : defaultIcon"
      :class="classes.mainIcon"
    />

    <div :class="classes.contentContainer">
      <h6
        :class="classes.title"
        v-if="title"
      >
        {{ title }}
      </h6>

      <p :class="classes.p">
        <slot />
      </p>
    </div>

    <vk-button
      v-if="closable"
      variant="link"
      color="surface"
      size="xs"
      shape="rounded"
      class="size-4"
      condensed
      @click="onClick"
    >
      <vk-icon
        name="x"
        :class="classes.closeIcon"
      />
    </vk-button>
  </div>
</template>
