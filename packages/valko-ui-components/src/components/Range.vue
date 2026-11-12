<script setup lang="ts">
import { computed } from 'vue'
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

const sliderValues = computed<number[]>(() => {
  if (!props.isDouble) return [props.modelValue as number]
  if (Array.isArray(props.modelValue)) return props.modelValue
  return [props.min, props.modelValue]
})

const onValueChange = (value: number[] | undefined) => {
  if (!value?.length) return

  emit('update:modelValue', props.isDouble ? value : value[0])
}

const onLabelClick = (newPosition: number) => {
  const clamped = Math.min(props.max, Math.max(props.min, newPosition))

  if (!props.isDouble) {
    emit('update:modelValue', clamped)
    return
  }

  const [minValue, maxValue] = sliderValues.value
  emit('update:modelValue', clamped <= (minValue + maxValue) / 2
    ? [clamped, maxValue]
    : [minValue, clamped])
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
