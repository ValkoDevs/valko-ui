<script setup lang="ts">
import { computed, getCurrentInstance, ref, watch } from 'vue'
import type { Ref } from 'vue'
import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from 'reka-ui'
import type { RangeProps } from '#valkoui/types/Range'
import styles from '#valkoui/styles/Range.styles.ts'
import diagonalStripes from '#valkoui/img/diagonal-stripes.svg'

defineOptions({ name: 'VkRange' })

const props = withDefaults(defineProps<RangeProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  min: 0,
  max: 100,
  step: 10,
  modelValue: 50,
  striped: false,
  isDouble: false,
  showSteps: false,
  labels: () => []
})

const emit = defineEmits(['update:modelValue'])

const s = computed(() => styles(props))

// reka-ui's slider is fully controlled through `modelValue`, so a static
// `:model-value` binding (no v-model) would freeze the internal value at its
// initial render. Track the value internally whenever the parent does not
// listen for `update:modelValue`.
const hasModelValueListener = Boolean(getCurrentInstance()?.vnode.props?.['onUpdate:modelValue'])
const isControlled = hasModelValueListener

const internalValue = ref<number | number[]>(props.modelValue as number | number[]) as Ref<number | number[]>

watch(() => props.modelValue, (value) => {
  internalValue.value = value as number | number[]
})

const modelValue = computed<number | number[]>(() => isControlled
  ? props.modelValue as number | number[]
  : internalValue.value)

const sliderValues = computed<number[]>(() => {
  if (!props.isDouble) return [modelValue.value as number]
  if (Array.isArray(modelValue.value)) return modelValue.value
  return [props.min, modelValue.value as number]
})

const onValueChange = (value: number[] | undefined) => {
  if (!value?.length) return

  const next = props.isDouble ? value : value[0]
  if (!isControlled) internalValue.value = next
  emit('update:modelValue', next)
}

const onLabelClick = (newPosition: number) => {
  const clamped = Math.min(props.max, Math.max(props.min, newPosition))

  if (!props.isDouble) {
    if (!isControlled) internalValue.value = clamped
    emit('update:modelValue', clamped)
    return
  }

  const [minValue, maxValue] = sliderValues.value
  const next: number[] = clamped <= (minValue + maxValue) / 2
    ? [clamped, maxValue]
    : [minValue, clamped]
  if (!isControlled) internalValue.value = next
  emit('update:modelValue', next)
}

const stepMarks = computed(() => {
  return Array.from({ length: Math.round((props.max - props.min) / props.step - 1) }, (_, i) => {
    return ((i + 1) * props.step / (props.max - props.min)) * 100
  })
})

const stripedStyles = computed(() => {
  const sizeMap: Record<string, string> = {
    xs: '1rem',
    sm: '1.25rem',
    md: '1.50rem',
    lg: '1.75rem'
  }

  if (!props.striped) return undefined

  return `background-image: url("${diagonalStripes}"); background-size: ${sizeMap[props.size]};`
})
</script>

<template>
  <SliderRoot
    :class="s.container({ class: styleSlots?.container })"
    :model-value="sliderValues"
    :min="min"
    :max="max"
    :step="step"
    @update:model-value="onValueChange"
  >
    <SliderTrack :class="s.progressContainer({ class: styleSlots?.progressContainer })">
      <SliderRange
        :class="s.progress({ class: styleSlots?.progress })"
        :style="stripedStyles"
      />
      <template v-if="showSteps">
        <div
          v-for="(position, index) in stepMarks"
          :key="index"
          :style="`left:${position}%`"
          :class="s.stepMark({ class: styleSlots?.stepMark })"
        />
      </template>
    </SliderTrack>
    <div :class="s.thumbContainer({ class: styleSlots?.thumbContainer })">
      <SliderThumb
        v-if="isDouble"
        :class="s.thumb({ class: styleSlots?.thumb })"
        aria-label="Minimum value"
        :aria-describedby="ariaDescribedBy"
      />
      <SliderThumb
        :class="s.thumb({ class: styleSlots?.thumb })"
        :aria-label="isDouble ? 'Maximum value' : 'Value'"
        :aria-describedby="ariaDescribedBy"
      />
    </div>
    <div
      v-if="labels.length > 0"
      :class="s.labelContainer({ class: styleSlots?.labelContainer })"
    >
      <span
        v-for="(el, index) in labels"
        :key="index"
        :style="`left:${el.value}%`"
        :class="s.label({ class: styleSlots?.label })"
        @click="() => onLabelClick(el.value)"
      >
        {{ el.label }}
      </span>
    </div>
  </SliderRoot>
</template>
