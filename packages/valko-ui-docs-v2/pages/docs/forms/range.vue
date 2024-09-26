<script setup lang="ts">
import type { RangeProps, TableItem, Label } from '#valkoui'

const form = ref<RangeProps>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  striped: false,
  isDouble: false,
  showSteps: false,
  min: 0,
  max: 100,
  step: 10,
  modelValue: 50,
  labels: []
})

const extraForm = ref({
  hasLabel: false
})

const generateLabels = () => {
  const labels: Label[] = []
  const min = form.value.min ?? 0
  const max = form.value.max ?? 100
  const step = form.value.step ?? 10

  if (step <= 0 || min >= max) return labels

  const stepCount = (max - min) / step

  for (let i = 1; i < stepCount; i++) {
    const value = min + i * step
    labels.push({ value, label: `${value.toString()}%` })
  }

  return labels
}

const rangeProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Range slider.',
    values: 'primary, neutral, success, info, warning, error',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant style of the Range slider.',
    values: 'filled, outlined, ghost, gradient',
    default: 'filled'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape style of the Range slider.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Range slider.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'stripedProp',
    prop: 'striped',
    required: false,
    description: 'Adds a striped pattern to the Range slider.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'showStepsProp',
    prop: 'showSteps',
    required: false,
    description: 'Displays step marks at intervals along the Range slider.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'stepProp',
    prop: 'step',
    required: false,
    description: 'The distance between step marks.',
    values: 'number',
    default: '10'
  },
  {
    key: 'isDoubleProp',
    prop: 'isDouble',
    required: false,
    description: 'Enables the Range slider to have two thumbs for selecting a range.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'minProp',
    prop: 'min',
    required: false,
    description: 'The minimum value of the Range slider.',
    values: 'number',
    default: '0'
  },
  {
    key: 'maxProp',
    prop: 'max',
    required: false,
    description: 'The maximum value of the Range slider.',
    values: 'number',
    default: '100'
  },
  {
    key: 'offsetProp',
    prop: 'offset',
    required: false,
    description: 'The offset value for the Range slider.',
    values: 'number',
    default: '0'
  },
  {
    key: 'modelValueProp',
    prop: 'modelValue',
    required: true,
    description: 'The value of the Range slider.',
    values: 'number | number[]',
    default: '50'
  },
  {
    key: 'labelsProp',
    prop: 'labels',
    required: false,
    description: 'The labels for the stepmarks in the slider.',
    values: 'Label[]',
    default: '[]'
  }
]

const rangeEmits: TableItem[] = [
  {
    key: 'updateModelValueEmit',
    event: 'update:modelValue',
    type: '(value: number | [number, number]) => void',
    description: 'Emitted when the value of the slider is updated.'
  }
]

const labelsInterface: TableItem[] = [
  {
    key: 'valueProp',
    prop: 'value',
    required: true,
    description: 'The value where the label is gonna be displayed on the slider.',
    values: 'number',
    default: ''
  },
  {
    key: 'labelProp',
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
          Value: {{ form.modelValue }}
        </div>
        <vk-range
          v-model="form.modelValue"
          :color="form.color"
          :variant="form.variant"
          :shape="form.shape"
          :size="form.size"
          :striped="form.striped"
          :is-double="form.isDouble"
          :min="+form.min!"
          :max="+form.max!"
          :step="+form.step!"
          :show-steps="form.showSteps"
          :labels="extraForm.hasLabel ? form.labels : []"
        />
      </div>
    </template>
    <template #playground-options>
      <vk-select
        v-model="form.color"
        label="Color"
        size="sm"
        :options="colorOptions"
      />
      <vk-select
        v-model="form.variant"
        label="Variant"
        size="sm"
        :options="variantOptions.withGradient"
      />
      <vk-select
        v-model="form.shape"
        label="Shape"
        size="sm"
        :options="shapeOptions.general"
      />
      <vk-select
        v-model="form.size"
        label="Size"
        size="sm"
        :options="sizeOptions.general"
      />
      <vk-input
        v-model="form.min"
        label="Min"
        size="sm"
        type="number"
      />
      <vk-input
        v-model="form.max"
        label="Max"
        size="sm"
        type="number"
      />
      <vk-input
        v-model="form.step"
        label="Step"
        size="sm"
        type="number"
      />
      <vk-checkbox
        v-model="form.isDouble"
        label="isDouble"
      />
      <vk-checkbox
        v-model="form.striped"
        label="Striped"
      />
      <vk-checkbox
        v-model="form.showSteps"
        label="Show Steps"
      />
      <vk-checkbox
        v-model="extraForm.hasLabel"
        label="Show Labels"
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
          v-for="variant in variantOptions.withGradient"
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
          v-for="shape in shapeOptions.general"
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
          v-for="size in sizeOptions.general"
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
          :step="10"
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
