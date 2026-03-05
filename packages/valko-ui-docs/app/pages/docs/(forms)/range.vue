<script setup lang="ts">
import type { RangeProps, TableItem, Label } from '#valkoui'

const form = reactive<RangeProps>({
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
  const min = form.min ?? 0
  const max = form.max ?? 100
  const step = form.step ?? 10

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
    values: 'primary, secondary, positive, accent, warning, negative',
    default: 'primary',
    apiType: ApiTypeCategory.CUSTOM_STRING
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant style of the Range slider.',
    values: 'filled, outlined, ghost, gradient',
    default: 'filled',
    apiType: ApiTypeCategory.CUSTOM_STRING
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape style of the Range slider.',
    values: 'rounded, square, soft',
    default: 'soft',
    apiType: ApiTypeCategory.CUSTOM_STRING
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Range slider.',
    values: 'xs, sm, md, lg',
    default: 'md',
    apiType: ApiTypeCategory.CUSTOM_STRING
  },
  {
    key: 'stripedProp',
    prop: 'striped',
    required: false,
    description: 'Adds a striped pattern to the Range slider.',
    values: 'boolean',
    default: 'false',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'showStepsProp',
    prop: 'showSteps',
    required: false,
    description: 'Displays step marks at intervals along the Range slider.',
    values: 'boolean',
    default: 'false',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'stepProp',
    prop: 'step',
    required: false,
    description: 'The distance between step marks.',
    values: 'number',
    default: '10',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'isDoubleProp',
    prop: 'isDouble',
    required: false,
    description: 'Enables the Range slider to have two thumbs for selecting a range.',
    values: 'boolean',
    default: 'false',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'minProp',
    prop: 'min',
    required: false,
    description: 'The minimum value of the Range slider.',
    values: 'number',
    default: '0',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'maxProp',
    prop: 'max',
    required: false,
    description: 'The maximum value of the Range slider.',
    values: 'number',
    default: '100',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'offsetProp',
    prop: 'offset',
    required: false,
    description: 'The offset value for the Range slider.',
    values: 'number',
    default: '0',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'modelValueProp',
    prop: 'modelValue',
    required: true,
    description: 'The value of the Range slider.',
    values: 'number | number[]',
    default: '50',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'labelsProp',
    prop: 'labels',
    required: false,
    description: 'The labels for the stepmarks in the slider.',
    values: 'Label[]',
    default: '[]',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  },
  {
    key: 'ariaDescribedByProp',
    prop: 'ariaDescribedBy',
    required: false,
    description: 'ID reference to an element that further describes the range, such as helper or error text.',
    values: 'string',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'styleSlotsProps',
    prop: 'styleSlots',
    required: false,
    description: 'Custom styles for different parts of the Range component.',
    values: 'RangeSlots',
    default: '',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  }
]

const rangeEmits: TableItem[] = [
  {
    key: 'updateModelValueEmit',
    event: 'update:modelValue',
    type: '(value: number | [number, number]) => void',
    description: 'Emitted when the value of the slider is updated.',
    apiType: ApiTypeCategory.PRIMITIVE
  }
]

const labelsInterface: TableItem[] = [
  {
    key: 'valueProp',
    prop: 'value',
    required: true,
    description: 'The value where the label is gonna be displayed on the slider.',
    values: 'number',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'labelProp',
    prop: 'label',
    required: true,
    description: 'The displayed name of the label.',
    values: 'string',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  }
]

const styleSlotsInterface: TableItem[] = [
  {
    key: 'container',
    prop: 'container',
    description: 'Root container for the range slider.',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'progressContainer',
    prop: 'progressContainer',
    description: 'Container for the progress bar and step marks.',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'progress',
    prop: 'progress',
    description: 'Progress bar element showing the selected range.',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'stepMark',
    prop: 'stepMark',
    description: 'Step mark indicator for each step on the slider.',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'thumbContainer',
    prop: 'thumbContainer',
    description: 'Container for the slider thumbs.',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'thumb',
    prop: 'thumb',
    description: 'Slider thumb element (draggable handle).',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'labelContainer',
    prop: 'labelContainer',
    description: 'Container for custom labels below the slider.',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'label',
    prop: 'label',
    description: 'Custom label element for the slider.',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  }
]

watch([() => form.min, () => form.max, () => form.step], () => {
  form.labels = generateLabels()
})

form.labels = generateLabels()

const generateSnippet = snippetGeneratorFactory('vk-range')

const styles = {
  colors: {
    slotContainer: [
      'sm:grid-cols-2',
      'md:grid-cols-3'
    ]
  },
  variants: {
    slotContainer: [
      'sm:grid-cols-2',
      'md:grid-cols-3',
      'lg:grid-cols-4'
    ]
  },
  shapes: {
    slotContainer: [
      'sm:grid-cols-2',
      'md:grid-cols-3'
    ]
  },
  sizes: {
    slotContainer: [
      'sm:grid-cols-2',
      'md:grid-cols-3',
      'lg:grid-cols-4'
    ]
  },
  stripes: {
    slotContainer: [
      'sm:grid-cols-2',
      'md:grid-cols-3'
    ]
  }
}
</script>

<template>
  <doc-section
    title="Range"
    description="A versatile slider interface for selecting a single value or a range of values within specified bounds. Features include optional step marks, striped backgrounds, and the ability to display two thumbs for selecting a range (isDouble mode). The component offers precise control over minimum (min) and maximum (max) values, step intervals, and visual styling options such as color, variant, shape, and size. Ideal for scenarios where precise value selection and visual feedback are crucial."
  >
    <template #playground-view>
      <div class="flex flex-col items-center gap-2 w-full">
        <span>
          Value: {{ form.modelValue }}
        </span>
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
        :options="colorOptions.general"
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
        :style-slots="styles.colors"
      >
        <div
          v-for="color in colorOptions.general"
          :key="color.value"
        >
          <span>{{ color.label }}</span>
          <vk-range
            :color="color.value"
            class="mt-2"
          />
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('color', { values: colorOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        :style-slots="styles.variants"
      >
        <div
          v-for="variant in variantOptions.withGradient"
          :key="variant.value"
        >
          <span>{{ variant.label }}</span>
          <vk-range :variant="variant.value" />
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('variant', { values: variantOptions.withGradient.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        :style-slots="styles.shapes"
      >
        <div
          v-for="shape in shapeOptions.general"
          :key="shape.value"
        >
          <span>{{ shape.label }}</span>
          <vk-range :shape="shape.value" />
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        :style-slots="styles.sizes"
      >
        <div
          v-for="size in sizeOptions.general"
          :key="size.value"
        >
          <span>{{ size.label }}</span>
          <vk-range :size="size.value" />
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section title="Double">
        <vk-range is-double />

        <template #code>
          <code-block :code="generateSnippet<string>(':is-double', { values: ['true'] })" />
        </template>
      </example-section>

      <example-section title="Show Steps">
        <vk-range
          show-steps
          :step="10"
        />

        <template #code>
          <code-block :code="generateSnippet<boolean>('show-steps', { values: [true] })" />
        </template>
      </example-section>

      <example-section
        title="Striped"
        :style-slots="styles.stripes"
      >
        <div
          v-for="color in colorOptions.general"
          :key="color.value"
        >
          <span>{{ color.label }}</span>
          <vk-range
            :color="color.value"
            striped
          />
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('color', { values: colorOptions.general.map(o => o.value), extraProps: 'striped' })" />
        </template>
      </example-section>
    </template>

    <template #api>
      <api-table
        name="Range"
        :tables="[
          { title: 'Props', data: rangeProps, headers: 'props' },
          { title: 'Emits', data: rangeEmits, headers: 'emits' },
          { title: 'Labels', data: labelsInterface, headers: 'interface' },
          { title: 'Style Slots', data: styleSlotsInterface, headers: 'interface' }
        ]"
      />
    </template>
  </doc-section>
</template>
