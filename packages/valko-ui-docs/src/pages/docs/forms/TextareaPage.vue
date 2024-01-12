<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import variantOptions from '@/data/variantOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import colorOptions from '@/data/colorOptions'

const form = ref({
  color: 'primary',
  variant: 'filled',
  size: 'md',
  disabled: ref(false),
  readonly: ref(false),
  value: ref(''),
  label: ref('Label'),
  helper: ref('Helpertext'),
  counter: ref(null),
  exampleReadonly: ref('Example readonly text')
})

const apiData = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Textarea.',
    values: 'primary, secondary, error, warning, info, success',
    default: 'primary'
  },
  {
    prop: 'variant',
    required: false,
    description: 'The variant of the Textarea.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Textarea.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'disabled',
    required: false,
    description: 'Whether the Textarea is disabled or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'modelValue',
    required: false,
    description: 'The v-model for the Textarea',
    values: 'string',
    default: 'false'
  },
  {
    prop: 'readonly',
    required: false,
    description: 'Wheter the Textarea is readonly or not',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'label',
    required: false,
    description: 'The label for the Textarea',
    values: 'string',
    default: 'false'
  },
  {
    prop: 'helpertext',
    required: false,
    description: 'A hint for the Textarea',
    values: 'string',
    default: 'false'
  }
]
</script>

<template>
  <doc-section
    title="Textarea"
    description="Textarea component is a multi-line Input which allows you to write large texts."
  >
    <template #playground-view>
      <div class="w-full p-4">
        <vk-textarea
          :variant="form.variant"
          :size="form.size"
          :disabled="form.disabled"
          :readonly="form.readonly"
          :color="form.color"
          v-model="form.value"
          :label="form.label"
          :maxlength="form.counter"
          :helpertext="form.helper"
        />
      </div>
    </template>

    <template #playground-options>
      <div class="flex">
        <div class="w-1/2 px-4">
          <form action="">
            <div class="flex mb-1">
              <vk-input
                label="Label"
                size="sm"
                v-model="form.value"
              />
            </div>
            <div class="flex mb-1">
              <vk-input
                label="Helpertext"
                size="sm"
                v-model="form.helper"
              />
            </div>
            <div class="flex mb-1">
              <vk-input
                label="Counter"
                type="number"
                size="sm"
                v-model="form.counter"
              />
            </div>
            <div class="flex mb-1">
              <vk-select
                placeholder="Variant"
                size="sm"
                :options="variantOptions"
                v-model="form.variant"
              />
            </div>
            <div class="flex mb-1">
              <vk-select
                placeholder="Color"
                size="sm"
                :options="colorOptions"
                v-model="form.color"
              />
            </div>
            <div class="flex mb-1">
              <vk-select
                placeholder="Size"
                size="sm"
                :options="sizeOptions"
                v-model="form.size"
              />
            </div>
            <div class="flex">
              <vk-checkbox
                label="Disabled"
                v-model="form.disabled"
              />
            </div>
            <div class="flex">
              <vk-checkbox
                label="Readonly"
                v-model="form.readonly"
              />
            </div>
          </form>
        </div>
      </div>
    </template>

    <template #examples>
      <example-section
        title="Colors"
        justify="around"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-textarea
            v-for="color in colorOptions"
            :key="color.value"
            :color="color.value"
            :label="color.label"
          />
        </div>
      </example-section>

      <example-section
        title="Variants"
        justify="start"
        align="start"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-textarea
            v-for="variant in variantOptions"
            :key="variant.value"
            :variant="variant.value"
            :label="variant.label"
          />
          <vk-textarea
            disabled
            label="Disabled"
          />
          <vk-textarea
            readonly
            label="Readonly"
            v-model="form.exampleReadonly"
          />
        </div>
      </example-section>

      <example-section
        title="Sizes"
        justify="start"
        align="start"
        gap
      >
        <div class="w-full grid grid-cols-2 gap-4 items-start">
          <vk-textarea
            v-for="size in sizeOptions"
            :key="size.value"
            :size="size.value"
            :label="size.label"
          />
        </div>
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
