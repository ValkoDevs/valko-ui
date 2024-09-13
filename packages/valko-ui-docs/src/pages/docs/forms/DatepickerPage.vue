<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import colorOptions from '@/data/colorOptions'
import variantOptions from '@/data/variantOptions'
import shapeOptions from '@/data/shapeOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'

const form = ref({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  flat: false
})

const dateProps = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Datepicker.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'primary'
  },
  {
    prop: 'variant',
    required: false,
    description: 'The variant of the Datepicker.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Datepicker.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Datepicker.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'flat',
    required: false,
    description: 'Displays a shadow for the Datepicker.',
    values: 'true, false',
    default: 'false'
  }
]
</script>

<template>
  <doc-section
    title="Datepicker"
    description="Datepicker component."
  >
    <template #playground-view>
      <div class="w-full flex justify-center p-4">
        <vk-datepicker
          :color="form.color"
          :variant="form.variant"
          :size="form.size"
          :shape="form.shape"
          :flat="form.flat"
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
        :options="variantOptions"
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
      <vk-checkbox
        label="Flat"
        v-model="form.flat"
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
          <vk-table
            :headers="propHeaders"
            :data="dateProps"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
