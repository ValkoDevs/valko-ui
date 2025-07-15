<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { RatingProps } from '#valkoui/types/Rating'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Rating.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkRating' })

const props = withDefaults(defineProps<RatingProps>(), {
  color: 'primary',
  size: 'md',
  max: 5,
  name: 'star'
})

const emit = defineEmits(['update:modelValue'])

const classes = useStyle<RatingProps, SlotStyles>(props, styles)

const internalValue = ref<number>(props.modelValue ?? 0)
const hoverValue = ref<number | null>(null)
const isControlled = computed(() => props.modelValue !== undefined)

watch(() => props.modelValue, (val) => {
  if (isControlled.value) internalValue.value = val ?? 0
})

const modelValueComputed = computed({
  get: () => isControlled.value ? props.modelValue! : internalValue.value,
  set: (val: number) => {
    if (props.readonly) return
    if (isControlled.value) {
      emit('update:modelValue', val)
    } else {
      internalValue.value = val
      emit('update:modelValue', val)
    }
  }
})

const getStarValue = (e: MouseEvent, index: number) => {
  const target = e.currentTarget as HTMLElement
  const { left, width } = target.getBoundingClientRect()
  const offsetX = e.clientX - left
  if (props.allowHalf && offsetX < width / 2) return index - 0.5
  return index
}

const onMouseMove = (e: MouseEvent, index: number) => {
  if (props.readonly) return
  hoverValue.value = getStarValue(e, index)
}

const onMouseLeave = () => {
  hoverValue.value = null
}

const onClick = (e: MouseEvent, index: number) => {
  if (props.readonly) return
  const newValue = getStarValue(e, index)
  if (modelValueComputed.value === newValue) {
    modelValueComputed.value = 0
    return
  }
  modelValueComputed.value = newValue
}
</script>

<template>
  <div :class="classes.container">
    <vk-icon
      v-for="i in max"
      :key="i"
      :name="name"
      :class="classes.icon"
      :data-active="hoverValue !== null ? i <= hoverValue : i <= modelValueComputed"
      :data-half="hoverValue !== null
        ? allowHalf && hoverValue === i - 0.5
        : allowHalf && modelValueComputed === i - 0.5"
      :data-hover="hoverValue !== null ? i <= hoverValue : false"
      @mousemove="(e: MouseEvent) => onMouseMove(e, i)"
      @mouseleave="onMouseLeave"
      @click="(e: MouseEvent) => onClick(e, i)"
    />
  </div>
</template>
