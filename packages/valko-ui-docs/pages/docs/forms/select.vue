<script setup lang="ts">
import type { SelectProps, TableItem, SelectOption } from '#valkoui'

const people: SelectOption[] = [
  { value: 1, label: 'Wade Cooper' },
  { value: 2, label: 'Arlene Mccoy' },
  { value: 3, label: 'Devon Webb' },
  { value: 4, label: 'Tom Cook' }
]

const form = ref<SelectProps>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  helpertext: 'Helpertext',
  label: 'Label',
  modelValue: '',
  disabled: false,
  readonly: false,
  multiple: false,
  clearable: false
})

const exampleSectionForm = reactive({
  colors: Array(colorOptions.length).fill(''),
  variants: Array(variantOptions.general.length).fill(''),
  shapes: Array(shapeOptions.general.length).fill(''),
  sizes: Array(sizeOptions.general.length).fill(''),
  readonly: 1
})

const apiData: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Select.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Select.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Select.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'disabledProp',
    prop: 'disabled',
    required: false,
    description: 'Whether the Select is disabled or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'roundedProp',
    prop: 'rounded',
    required: false,
    description: 'Whether the Select is rounded or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'multipleProp',
    prop: 'multiple',
    required: false,
    description: 'Wheter the Select is enabled to choose multiple options',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'optionsProp',
    prop: 'options',
    required: false,
    description: 'An array of options for the Select',
    values: 'array',
    default: 'false'
  },
  {
    key: 'modelValueProp',
    prop: 'modelValue',
    required: false,
    description: 'The v-model for the Select',
    values: 'string, number, Array<string | number>',
    default: 'false'
  },
  {
    key: 'readonlyProp',
    prop: 'readonly',
    required: false,
    description: 'Wheter the Select is readonly or not',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'labelProp',
    prop: 'label',
    required: false,
    description: 'The label for the Select',
    values: 'string',
    default: 'false'
  },
  {
    key: 'helpertextProp',
    prop: 'helpertext',
    required: false,
    description: 'A hint for the Select',
    values: 'string',
    default: 'false'
  },
  {
    key: 'iconLeftProp',
    prop: 'iconLeft',
    required: false,
    description: 'A icon on the left side for the Select',
    values: 'string',
    default: ''
  },
  {
    key: 'iconRightProp',
    prop: 'iconRight',
    required: false,
    description: 'A icon on the right side for the Select',
    values: 'string',
    default: 'chevron-down'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Button.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'clearableProp',
    prop: 'clearable',
    required: false,
    description: 'Allows to leave the selection empty and displays an icon that clears the selection when clicked.',
    values: 'true, false',
    default: 'false'
  }
]

const emitData: TableItem[] = [
  {
    key: 'updateModelValueEmit',
    event: 'update:modelValue',
    description: 'Emitted when the selected value(s) in the Select component change.',
    values: 'any',
    type: '(value: any) => void'
  }
]

const { generalCode } = useCodeBlock('vk-select')
</script>

<template>
  <doc-section
    title="Select"
    description="Dropdown list that allows the user to choose an option among several. Selects provide users with a convenient way to select from a predefined set of options and are commonly used in forms and settings."
  >
    <template #playground-view>
      <vk-select
        v-model="form.modelValue"
        :label="form.label"
        :helpertext="form.helpertext"
        :options="people"
        :color="form.color"
        :variant="form.variant"
        :readonly="form.readonly"
        :shape="form.shape"
        :disabled="form.disabled"
        :size="form.size"
        :multiple="form.multiple"
        :clearable="form.clearable"
      />
    </template>

    <template #playground-options>
      <vk-input
        v-model="form.label"
        label="Label"
        size="sm"
      />
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
      <vk-checkbox
        v-model="form.multiple"
        label="Multiple"
      />
      <vk-checkbox
        v-model="form.disabled"
        label="Disabled"
      />
      <vk-checkbox
        v-model="form.readonly"
        label="Readonly"
      />
      <vk-checkbox
        v-model="form.clearable"
        label="Clearable"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        classes="sm:grid-cols-2 md:grid-cols-3"
      >
        <vk-select
          v-for="(color, index) in colorOptions"
          :key="color.value"
          v-model="exampleSectionForm['colors'][index]"
          :color="color.value"
          :label="color.label"
          :options="people"
        />

        <template #code>
          <code-block :code="generalCode('color', colorOptions)"/>
        </template>
      </example-section>

      <example-section
        title="Variants"
        classes="sm:grid-cols-2 md:grid-cols-3"
      >
        <vk-select
          v-for="(variant, index) in variantOptions.general"
          :key="variant.value"
          v-model="exampleSectionForm['variants'][index]"
          :variant="variant.value"
          :label="variant.label"
          :options="people"
        />

        <template #code>
          <code-block :code="generalCode('variant', variantOptions.general)"/>
        </template>
      </example-section>

      <example-section
        title="Shapes"
        classes="sm:grid-cols-2 md:grid-cols-3"
      >
        <vk-select
          v-for="(shape, index) in shapeOptions.general"
          :key="shape.value"
          v-model="exampleSectionForm['shapes'][index]"
          :shape="shape.value"
          :label="shape.label"
          :options="people"
        />

        <template #code>
          <code-block :code="generalCode('shape', shapeOptions.general)"/>
        </template>
      </example-section>

      <example-section
        title="Sizes"
        classes="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <vk-select
          v-for="(size, index) in sizeOptions.general"
          :key="size.value"
          v-model="exampleSectionForm['sizes'][index]"
          :size="size.value"
          :label="size.label"
          :options="people"
        />

        <template #code>
          <code-block :code="generalCode('size', sizeOptions.general)"/>
        </template>
      </example-section>

      <example-section title="Disabled">
        <vk-select
          disabled
          label="Disabled"
        />

        <template #code>
          <code-block code="<vk-select disabled></vk-select>"/>
        </template>
      </example-section>

      <example-section title="Readonly">
        <vk-select
          v-model="exampleSectionForm['readonly']"
          readonly
          :options="people"
          label="Readonly"
        />

        <template #code>
          <code-block code="<vk-select readonly></vk-select>"/>
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Select Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="apiData"
      />

      <h3>Select Emits</h3>
      <vk-table
        :headers="emitHeaders"
        :data="emitData"
      />
    </template>
  </doc-section>
</template>
