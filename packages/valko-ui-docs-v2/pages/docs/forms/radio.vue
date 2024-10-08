<script setup lang="ts">
import type { SelectOption, LabelPosition, RadioProps, TableItem } from '#valkoui'

const form = ref<RadioProps>({
  variant: 'filled',
  color: 'primary',
  size: 'md',
  name: 'Radio',
  value: 'Radio-1',
  helpertext: '',
  shape: 'rounded',
  labelPosition: 'right',
  disabled: false,
  readonly: false
})

const position: SelectOption<LabelPosition>[] = [
  { value: 'right', label:'Right' },
  { value: 'left', label:'Left' }
]

const apiData: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Radio.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Radio.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Radio.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'disabledProp',
    prop: 'disabled',
    required: false,
    description: 'Wheter the Radio is disabled or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'readonlyProp',
    prop: 'readonly',
    required: false,
    description: 'Wheter the Radio is readonly or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'helpertextProp',
    prop: 'helpertext',
    required: false,
    description: 'Displays a hint under the Radio.',
    values: 'string',
    default: ''
  },
  {
    key: 'positionProp',
    prop: 'position',
    required: false,
    description: 'Wheter the label is displayed left or right.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'nameProp',
    prop: 'name',
    required: true,
    description: 'The name of the Radio, used when submitting an HTML form.',
    values: 'string',
    default: ''
  },
  {
    key: 'modelValueProp',
    prop: 'modelValue',
    required: true,
    description: 'The value used to identify wich Radio is selected.',
    values: 'string',
    default: ''
  },
  {
    key: 'valueProp',
    prop: 'value',
    required: true,
    description: 'The current selected value. (controlled).',
    values: 'string',
    default: ''
  },
  {
    key: 'labelProp',
    prop: 'label',
    required: true,
    description: 'The label of the Radio.',
    values: 'string',
    default: ''
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Radio.',
    values: 'soft, rounded, square',
    default: 'rounded'
  }
]

const emitData: TableItem[] = [
  {
    key: 'updateModelValueEmit',
    event: 'update:modelValue',
    description: 'Emitted when this radio button is selected.',
    values: 'any',
    type: '(value: any) => void'
  }
]
</script>

<template>
  <doc-section
    title="Radio"
    description="Selection element that allows the user to choose an exclusive option among several. Radio buttons are used when users need to select only one option from a predefined list of choices."
  >
    <template #playground-view>
      <div class="w-full flex flex-col justify-center items-center p-4">
        <vk-radio
          v-model="form.value"
          :variant="form.variant"
          :color="form.color"
          :size="form.size"
          :name="form.name"
          :disabled="form.disabled"
          :readonly="form.readonly"
          :label-position="form.labelPosition"
          :shape="form.shape"
          :helpertext="form.helpertext"
          label="Radio-1"
          value="Radio-1"
        />
        <vk-radio
          v-model="form.value"
          :variant="form.variant"
          :color="form.color"
          :size="form.size"
          :name="form.name"
          :disabled="form.disabled"
          :readonly="form.readonly"
          :label-position="form.labelPosition"
          :shape="form.shape"
          label="Radio-2"
          value="Radio-2"
        />
        <vk-radio
          v-model="form.value"
          :variant="form.variant"
          :color="form.color"
          :size="form.size"
          :name="form.name"
          :disabled="form.disabled"
          :readonly="form.readonly"
          :label-position="form.labelPosition"
          :shape="form.shape"
          label="Radio-3"
          value="Radio-3"
        />
      </div>
    </template>

    <template #playground-options>
      <vk-input
        v-model="form.helpertext"
        label="Helpertext"
        size="sm"
      />
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
        :options="variantOptions.general"
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
      <vk-select
        v-model="form.labelPosition"
        label="Label Position"
        size="sm"
        :options="position"
      />
      <vk-checkbox
        v-model="form.disabled"
        label="Disabled"
      />
      <vk-checkbox
        v-model="form.readonly"
        label="Readonly"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        justify="start"
        gap
      >
        <div class="gap-x-12 gap-y-4 grid grid-cols-3">
          <vk-radio
            v-for="color in colorOptions"
            :key="color.value"
            v-model="color.value"
            :name="color.value"
            :color="color.value"
            :label="color.label"
            :value="color.value"
          />
        </div>
      </example-section>

      <example-section
        title="Variants"
        justify="start"
        gap
      >
        <div class="gap-x-12 gap-y-4 grid grid-cols-3">
          <vk-radio
            v-for="variant in variantOptions.general"
            :key="variant.value"
            v-model="variant.value"
            :name="variant.value"
            :variant="variant.value"
            :label="variant.label"
            :value="variant.value"
          />
        </div>
      </example-section>

      <example-section
        title="Shapes"
        justify="start"
        gap
      >
        <div class="gap-x-12 gap-y-4 grid grid-cols-3">
          <vk-radio
            v-for="shape in shapeOptions.general"
            :key="shape.value"
            v-model="shape.value"
            :name="shape.value"
            :shape="shape.value"
            :label="shape.label"
            :value="shape.value"
          />
        </div>
      </example-section>

      <example-section
        title="Sizes"
        justify="start"
        align="start"
        gap
      >
        <div class="gap-x-12 gap-y-4 grid grid-cols-2">
          <vk-radio
            v-for="size in sizeOptions.general"
            :key="size.value"
            v-model="size.value"
            :name="size.value"
            :size="size.value"
            :label="size.label"
            :value="size.value"
          />
        </div>
      </example-section>

      <example-section
        title="Disabled"
      >
        <vk-radio disabled />
      </example-section>

      <example-section
        title="Readonly"
      >
        <vk-radio readonly />
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Radio Props"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="apiData"
          />
        </example-section>

        <example-section
          title="Radio Emits"
          gap
        >
          <vk-table
            :headers="emitHeaders"
            :data="emitData"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
