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
  allowClear: true,
  clearable: false
})

const exampleSectionForm = ref<Record<string, string | number>>({
  primary: '',
  secondary: '',
  error: '',
  success: '',
  warning: '',
  info: '',
  filled: '',
  outlined: '',
  ghost: '',
  shape: '',
  xs: '',
  sm: '',
  md: '',
  lg: '',
  exampleReadonly: 1
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
    key: 'allowClearProp',
    prop: 'allowClear',
    required: false,
    description: 'Allows to leave the selection empty.',
    values: 'true, false',
    default: 'true'
  },
  {
    key: 'clearableProp',
    prop: 'clearable',
    required: false,
    description: 'Displays an icon that clears the selection when clicked only if allowClear is true.',
    values: 'true, false',
    default: 'true'
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
</script>

<template>
  <doc-section
    title="Select"
    description="Dropdown list that allows the user to choose an option among several. Selects provide users with a convenient way to select from a predefined set of options and are commonly used in forms and settings."
  >
    <template #playground-view>
      <div class="w-full flex px-2">
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
          :allow-clear="form.allowClear"
          :clearable="form.clearable"
        />
      </div>
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
        v-model="form.allowClear"
        label="Allow Clear"
      />
      <vk-checkbox
        v-model="form.clearable"
        label="Clearable"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        justify="around"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-select
            v-for="color in colorOptions"
            :key="color.value"
            v-model="exampleSectionForm[color.value]"
            :color="color.value"
            :label="color.label"
            :options="people"
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
          <vk-select
            v-for="variant in variantOptions.general"
            :key="variant.value"
            v-model="exampleSectionForm[variant.value]"
            :variant="variant.value"
            :label="variant.label"
            :options="people"
          />
        </div>
      </example-section>

      <example-section
        title="Shapes"
        justify="start"
        align="start"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2 items-end">
          <vk-select
            v-for="shape in shapeOptions.general"
            :key="shape.value"
            v-model="exampleSectionForm[shape.value]"
            :shape="shape.value"
            :label="shape.label"
            :options="people"
          />
        </div>
      </example-section>

      <example-section
        title="Sizes"
        justify="start"
        align="start"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2 items-end">
          <vk-select
            v-for="size in sizeOptions.general"
            :key="size.value"
            v-model="exampleSectionForm[size.value]"
            :size="size.value"
            :label="size.label"
            :options="people"
          />
        </div>
      </example-section>

      <example-section
        title="Disabled"
      >
        <vk-select
          disabled
          label="Disabled"
        />
      </example-section>

      <example-section
        title="Readonly"
      >
        <vk-select
          v-model="exampleSectionForm.exampleReadonly"
          readonly
          :options="people"
          label="Readonly"
        />
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Select Props"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="apiData"
          />
        </example-section>

        <example-section
          title="Select Emits"
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
