<script setup lang="ts">
import { ref, watch } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import colorOptions from '@/data/colorOptions'
import variantWithGradient from '@/data/variantWithGradient'
import shapeOptions from '@/data/shapeOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import emitHeaders from '@/data/emitHeaders'
import type { Label } from '@valko-ui/components'

const form = ref({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  striped: false,
  isDouble: false,
  showSteps: false,
  hasLabel: false,
  min: 0,
  max: 100,
  step: 10,
  modelValue: 50,
  labels: [] as Label[]
})

const generateLabels = () => {
  const labels: Label[] = []
  const stepCount = (form.value.max - form.value.min) / form.value.step

  for (let i = 1; i < stepCount; i++) {
    const value = form.value.min + (i * form.value.step)
    labels.push({ value, label: `${value.toString()}%` })
  }

  return labels
}

const rangeProps = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Range slider.',
    values: 'primary, neutral, success, info, warning, error',
    default: 'primary'
  },
  {
    prop: 'variant',
    required: false,
    description: 'The variant style of the Range slider.',
    values: 'filled, outlined, ghost, gradient',
    default: 'filled'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape style of the Range slider.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Range slider.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'striped',
    required: false,
    description: 'Adds a striped pattern to the Range slider.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'showSteps',
    required: false,
    description: 'Displays step marks at intervals along the Range slider.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'step',
    required: false,
    description: 'The distance between step marks.',
    values: 'number',
    default: '10'
  },
  {
    prop: 'isDouble',
    required: false,
    description: 'Enables the Range slider to have two thumbs for selecting a range.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'min',
    required: false,
    description: 'The minimum value of the Range slider.',
    values: 'number',
    default: '0'
  },
  {
    prop: 'max',
    required: false,
    description: 'The maximum value of the Range slider.',
    values: 'number',
    default: '100'
  },
  {
    prop: 'offset',
    required: false,
    description: 'The offset value for the Range slider.',
    values: 'number',
    default: '0'
  },
  {
    prop: 'modelValue',
    required: true,
    description: 'The value of the Range slider.',
    values: 'number | number[]',
    default: '50'
  },
  {
    prop: 'labels',
    required: false,
    description: 'The labels for the stepmarks in the slider.',
    values: 'Label[]',
    default: '[]'
  }
]

const rangeEmits = [
  {
    event: 'update:modelValue',
    type: '(value: number | [number, number]) => void',
    description: 'Emitted when the value of the slider is updated.'
  }
]

const labelsInterface = [
  {
    prop: 'value',
    required: true,
    description: 'The value where the label is gonna be displayed on the slider.',
    values: 'number',
    default: ''
  },
  {
    prop: 'label',
    required: true,
    description: 'The displayed name of the label.',
    values: 'string',
    default: ''
  }
]

watch([() => form.value.min, () => form.value.max, () => form.value.step], () => {
  form.value.labels = generateLabels()
})

form.value.labels = generateLabels()
</script>

<template>
  <doc-section
    title="Range"
    description="A versatile slider interface for selecting a single value or a range of values within specified bounds. Features include optional step marks, striped backgrounds, and the ability to display two thumbs for selecting a range (isDouble mode). The component offers precise control over minimum (min) and maximum (max) values, step intervals, and visual styling options such as color, variant, shape, and size. Ideal for scenarios where precise value selection and visual feedback are crucial."
  >
    <template #playground-view>
      <div class="w-full flex justify-center p-4 flex-col">
        <div class="flex justify-between py-2">
          value: {{ form.modelValue }}
        </div>
        <vk-range
          :color="form.color"
          :variant="form.variant"
          :shape="form.shape"
          :size="form.size"
          :striped="form.striped"
          :is-double="form.isDouble"
          :min="+form.min"
          :max="+form.max"
          :step="form.step"
          :show-steps="form.showSteps"
          :labels="form.hasLabel ? form.labels : []"
          v-model="form.modelValue"
        />
      </div>
    </template>
    <template #playground-options>
      <vk-select
        placeholder="Color"
        size="sm"
        :options="colorOptions"
        v-model="form.color"
      />
      <vk-select
        placeholder="Variant"
        size="sm"
        :options="variantWithGradient"
        v-model="form.variant"
      />
      <vk-select
        placeholder="Shape"
        size="sm"
        :options="shapeOptions"
        v-model="form.shape"
      />
      <vk-select
        placeholder="Size"
        size="sm"
        :options="sizeOptions"
        v-model="form.size"
      />
      <vk-input
        label="Min"
        size="sm"
        type="number"
        v-model="form.min"
      />
      <vk-input
        label="Max"
        size="sm"
        type="number"
        v-model="form.max"
      />
      <vk-input
        label="Step"
        size="sm"
        type="number"
        v-model="form.step"
      />
      <vk-checkbox
        label="isDouble"
        v-model="form.isDouble"
      />
      <vk-checkbox
        label="Striped"
        v-model="form.striped"
      />
      <vk-checkbox
        label="Show Steps"
        v-model="form.showSteps"
      />
      <vk-checkbox
        label="Show Labels"
        v-model="form.hasLabel"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        justify="start"
        gap
        wrap
      >
        <div
          v-for="color in colorOptions"
          :key="color.value"
          class="w-1/4 mr-2"
        >
          <span>{{ color.label }}</span>
          <vk-range :color="color.value" />
        </div>
      </example-section>

      <example-section
        title="Variants"
        justify="start"
        gap
        wrap
      >
        <div
          v-for="variant in variantWithGradient"
          :key="variant.value"
          class="w-1/3 mr-2"
        >
          <span>{{ variant.label }}</span>
          <vk-range :variant="variant.value" />
        </div>
      </example-section>

      <example-section
        title="Shapes"
        justify="start"
        gap
      >
        <div
          v-for="shape in shapeOptions"
          :key="shape.value"
          class="w-full mr-2"
        >
          <span>{{ shape.label }}</span>
          <vk-range :shape="shape.value" />
        </div>
      </example-section>

      <example-section
        title="Sizes"
        justify="start"
        gap
        wrap
      >
        <div
          v-for="size in sizeOptions"
          :key="size.value"
          class="w-1/3 mr-2"
        >
          <span>{{ size.label }}</span>
          <vk-range :size="size.value" />
        </div>
      </example-section>

      <example-section
        title="Double"
        justify="start"
        gap
      >
        <vk-range
          :is-double="true"
          class="w-1/3"
        />
      </example-section>

      <example-section
        title="Show Steps"
        justify="start"
        gap
      >
        <vk-range
          show-steps
          step="10"
          class="w-1/3"
        />
      </example-section>

      <example-section
        title="Striped"
        justify="start"
        gap
        wrap
      >
        <div
          v-for="color in colorOptions"
          :key="color.value"
          class="w-1/3 mr-2"
        >
          <span>{{ color.label }}</span>
          <vk-range
            :color="color.value"
            striped
          />
        </div>
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Range Props"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="rangeProps"
          />
        </example-section>

        <example-section
          title="Label Interface"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="labelsInterface"
          />
        </example-section>

        <example-section
          title="Range Emits"
          gap
        >
          <vk-table
            :headers="emitHeaders"
            :data="rangeEmits"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
