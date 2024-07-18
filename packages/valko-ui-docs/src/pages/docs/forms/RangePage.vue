<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import colorOptions from '@/data/colorOptions'
import variantWithGradient from '@/data/variantWithGradient'
import shapeOptions from '@/data/shapeOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import emitHeaders from '@/data/emitHeaders'

const form = ref({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  striped: false,
  isRange: false,
  showSteps: false,
  min: 0,
  max: 100,
  step: 10,
  first: 50,
  second: 100
})

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
    prop: 'minThumbValue',
    required: false,
    description: 'The value of the primary thumb in the Range slider.',
    values: 'number',
    default: '50'
  },
  {
    prop: 'maxThumbValue',
    required: false,
    description: 'The value of the secondary thumb in the Range slider.',
    values: 'number',
    default: '100'
  },
  {
    prop: 'progress',
    required: false,
    description: 'The progress percentage of the Range slider.',
    values: 'number (0-100)',
    default: '0'
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
    prop: 'isRange',
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
  }
]

const rangeEmits = [
  {
    event: 'update:primaryThumbVal',
    type: '(value: number) => void',
    values: 'value: The new value of the primary thumb.',
    description: 'Emitted when the value of the primary thumb of the slider is updated.'
  },
  {
    event: 'update:secondaryThumbVal',
    type: '(value: number) => void',
    values: 'value: The new value of the secondary thumb.',
    description: 'Emitted when the value of the secondary thumb of the slider is updated.'
  }
]
</script>

<template>
  <doc-section
    title="Range"
    description="A versatile slider interface for selecting a single value or a range of values within specified bounds.  Features include optional step marks, striped backgrounds, and the ability to display two thumbs for selecting a range (isRange mode). The component offers precise control over minimum (min) and maximum (max) values, along with the positions of the primary (minThumbValue) and secondary (maxThumbValue) thumbs. Ideal for scenarios where precise value selection and visual feedback are crucial."
  >
    <template #playground-view>
      <div class="w-full flex justify-center p-4 flex-col">
        <div class="flex justify-between py-2">
          <span>Min thumb value: {{ form.first }}</span>
          <span v-if="form.isRange">Max thumb value: {{ form.second }}</span>
        </div>
        <vk-range
          :color="form.color"
          :variant="form.variant"
          :shape="form.shape"
          :size="form.size"
          :striped="form.striped"
          :is-range="form.isRange"
          :min="form.min"
          :max="form.max"
          :step="form.step"
          :show-steps="form.showSteps"
          @update:min-thumb-value="form.first = $event"
          @update:max-thumb-value="form.second = $event"
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
        label="isRange"
        v-model="form.isRange"
      />
      <vk-checkbox
        label="Striped"
        v-model="form.striped"
      />
      <vk-checkbox
        label="Show Steps"
        v-model="form.showSteps"
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
        title="Range"
        justify="start"
        gap
      >
        <vk-range
          is-range
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
          <vk-data-table
            :headers="propHeaders"
            :data="rangeProps"
          />
        </example-section>

        <example-section
          title="Range Emits"
          gap
        >
          <vk-data-table
            :headers="emitHeaders"
            :data="rangeEmits"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
