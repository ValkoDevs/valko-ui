<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import colorOptions from '@/data/colorOptions'
import variantOptions from '@/data/variantOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import shapeOptions from '@/data/shapeOptions'

const form = ref({
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  disabled: false,
  flat: false,
  block: false,
  condensed: false
})

const apiData = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Button.',
    values: 'primary, secondary, error, warning, info, success, light, dark',
    default: 'primary'
  },
  {
    prop: 'variant',
    required: false,
    description: 'The variant of the Button.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Button.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'disabled',
    required: false,
    description: 'Whether the Button is disabled or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'flat',
    required: false,
    description: 'Whether the Button has a shadow or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'block',
    required: false,
    description: 'Whether the Button width is equal to it\'s container.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Button.',
    values: 'rounded, square, soft',
    default: 'soft'
  }
]
</script>

<template>
  <doc-section
    title="Button"
    description="Buttons are used to initialize an action, either in the background or foreground of an experience."
  >
    <template #playground-view>
      <vk-button
        :color="form.color"
        :variant="form.variant"
        :size="form.size"
        :disabled="form.disabled"
        :flat="form.flat"
        :block="form.block"
        :condensed="form.condensed"
        :shape="form.shape"
      >
        Primary
      </vk-button>
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
        :options="variantOptions"
        v-model="form.variant"
      />
      <vk-select
        placeholder="Size"
        size="sm"
        :options="sizeOptions"
        v-model="form.size"
      />
      <vk-select
        placeholder="Shape"
        size="sm"
        :options="shapeOptions"
        v-model="form.shape"
      />
      <vk-checkbox
        v-model="form.disabled"
        label="Disabled"
      />
      <vk-checkbox
        v-model="form.condensed"
        label="Condensed"
      />
      <vk-checkbox
        v-model="form.flat"
        label="Flat"
      />
      <vk-checkbox
        v-model="form.block"
        label="Block"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        gap
      >
        <vk-button
          v-for="color in colorOptions"
          :key="color.value"
          :color="color.value"
        >
          {{ color.label }}
        </vk-button>
      </example-section>

      <example-section
        title="Variants"
        gap
        wrap
      >
        <vk-button
          v-for="variant in variantOptions"
          :key="variant.value"
          :variant="variant.value"
        >
          {{ variant.label }}
        </vk-button>
        <vk-button flat>
          Flat
        </vk-button>
        <vk-button disabled>
          Disabled
        </vk-button>
        <vk-button condensed>
          Condensed
        </vk-button>
        <vk-button block>
          Block
        </vk-button>
      </example-section>

      <example-section
        title="Shapes"
        gap
      >
        <vk-button
          v-for="shape in shapeOptions"
          :key="shape.value"
          :shape="shape.value"
        >
          {{ shape.label }}
        </vk-button>
      </example-section>

      <example-section
        title="Sizes"
        gap
      >
        <vk-button
          v-for="size in sizeOptions"
          :key="size.value"
          :size="size.value"
        >
          {{ size.label }}
        </vk-button>
      </example-section>
    </template>

    <template #api>
      <vk-data-table
        :headers="propHeaders"
        :data="apiData"
      />
    </template>
  </doc-section>
</template>
