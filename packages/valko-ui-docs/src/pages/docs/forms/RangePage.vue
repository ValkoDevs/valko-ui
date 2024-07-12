<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import colorOptions from '@/data/colorOptions'
import variantWithGradient from '@/data/variantWithGradient'
import shapeOptions from '@/data/shapeOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'

const form = ref({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  striped: false,
  condensed: false,
  double: false,
  min: 0,
  max: 100,
  step: 1,
  first: 0,
  second: 100
})

const rangeProps = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Alert.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'primary'
  },
  {
    prop: 'variant',
    required: false,
    description: 'The variant of the Alert.',
    values: 'filled, outlined, ghost, gradient',
    default: 'filled'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Alert.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Alert.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'closable',
    required: false,
    description: 'Displays a button to close the Alert.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'title',
    required: false,
    description: 'The title of the Alert.',
    values: 'string',
    default: ''
  },
  {
    prop: 'icon',
    required: false,
    description: 'The icon of the Alert.',
    values: 'string | null',
    default: ''
  }
  ,
  {
    prop: 'flat',
    required: false,
    description: 'Displays a shadow for the Alert.',
    values: 'true, false',
    default: 'false'
  }
]
</script>

<template>
  <doc-section
    title="Range"
    description="Visual notification that informs the user about an important state or action. Alerts are commonly used to communicate success messages, warnings, or errors to the user."
  >
    <template #playground-view>
      <div class="w-full flex justify-center p-4">
        <vk-range
          :color="form.color"
          :variant="form.variant"
          :shape="form.shape"
          :size="form.size"
          :striped="form.striped"
          :condensed="form.condensed"
          :double="form.double"
          :min="form.min"
          :max="form.max"
          :step="form.step"
          @update:first-value="form.first"
          @update:second-value="form.second"
        />
        <span>{{ form.first }} {{ form.second }}</span>
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
        label="Double"
        v-model="form.double"
      />
      <vk-checkbox
        label="Striped"
        v-model="form.striped"
      />
      <vk-checkbox
        label="Condensed"
        v-model="form.condensed"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        justify="around"
        gap
      />
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Alert Props"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="rangeProps"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
