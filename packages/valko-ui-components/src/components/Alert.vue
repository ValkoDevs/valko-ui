<script setup lang="ts">
import { computed, useId } from 'vue'
import type { AlertProps } from '#valkoui/types/Alert'
import styles from '#valkoui/styles/Alert.styles.ts'
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
  styleSlots: undefined
})

const emit = defineEmits(['close'])

const classes = styles(props)

const titleId = useId()

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

const ariaRole = computed(() => {
  return ['warning', 'negative'].includes(props.color) ? 'alert' : 'status'
})

const ariaLive = computed(() => {
  return ['warning', 'negative'].includes(props.color) ? 'assertive' : 'polite'
})
</script>

<template>
  <div
    :class="classes.container({ class: styleSlots?.container })"
    :role="ariaRole"
    :aria-live="ariaLive"
    :aria-label="title ? titleId : props['aria-label']"
    :aria-labelledby="props['aria-labelledby']"
  >
    <vk-icon
      v-if="icon !== null"
      :name="icon ? icon : defaultIcon"
      :class="classes.mainIcon({ class: styleSlots?.mainIcon })"
    />

    <div :class="classes.contentContainer({ class: styleSlots?.contentContainer })">
      <h6
        v-if="title"
        :id="titleId"
        :class="classes.title({ class: styleSlots?.title })"
      >
        {{ title }}
      </h6>

      <p :class="classes.p({ class: styleSlots?.p })">
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
        :class="classes.closeIcon({ class: styleSlots?.closeIcon })"
      />
    </vk-button>
  </div>
</template>
