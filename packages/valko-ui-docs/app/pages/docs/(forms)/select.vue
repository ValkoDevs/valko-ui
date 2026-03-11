<script setup lang="ts">
import type { SelectProps, SelectOption } from '#valkoui'

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

const exampleSectionModel = reactive<Record<string, number>>({ readonly: 1 })

const apiData: PropData[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Select.',
    values: 'primary, secondary, negative, warning, accent, positive',
    default: 'primary',
    apiType: 'custom-string'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Select.',
    values: 'filled, outlined, ghost',
    default: 'filled',
    apiType: 'custom-string'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Select.',
    values: 'xs, sm, md, lg',
    default: 'md',
    apiType: 'custom-string'
  },
  {
    key: 'disabledProp',
    prop: 'disabled',
    required: false,
    description: 'Whether the Select is disabled or not.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'roundedProp',
    prop: 'rounded',
    required: false,
    description: 'Whether the Select is rounded or not.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'multipleProp',
    prop: 'multiple',
    required: false,
    description: 'Wheter the Select is enabled to choose multiple options',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'optionsProp',
    prop: 'options',
    required: false,
    description: 'An array of options for the Select',
    values: 'SelectOption[]',
    default: '[]',
    apiType: 'custom-type'
  },
  {
    key: 'modelValueProp',
    prop: 'modelValue',
    required: false,
    description: 'The v-model for the Select',
    values: 'string, number, Array<string | number>',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'readonlyProp',
    prop: 'readonly',
    required: false,
    description: 'Wheter the Select is readonly or not',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'labelProp',
    prop: 'label',
    required: false,
    description: 'The label for the Select',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'helpertextProp',
    prop: 'helpertext',
    required: false,
    description: 'A hint for the Select',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'iconLeftProp',
    prop: 'iconLeft',
    required: false,
    description: 'A icon on the left side for the Select',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'iconRightProp',
    prop: 'iconRight',
    required: false,
    description: 'A icon on the right side for the Select',
    values: 'string',
    default: 'chevron-down',
    apiType: 'primitive'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Button.',
    values: 'rounded, square, soft',
    default: 'soft',
    apiType: 'custom-string'
  },
  {
    key: 'clearableProp',
    prop: 'clearable',
    required: false,
    description: 'Allows to leave the selection empty and displays an icon that clears the selection when clicked.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'ariaLabelProp',
    prop: 'ariaLabel',
    required: false,
    description: 'Accessible text label read by assistive technologies when no visible label is provided.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'ariaLabelledByProp',
    prop: 'ariaLabelledBy',
    required: false,
    description: 'ID reference to an element that labels the select (e.g. a visible <label>).',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'ariaDescribedByProp',
    prop: 'ariaDescribedBy',
    required: false,
    description: 'ID reference to an element that further describes the select, such as helper or error text.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'ariaRequiredProp',
    prop: 'ariaRequired',
    required: false,
    description: 'Marks the select as required for form submission.',
    values: 'boolean',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'ariaInvalidProp',
    prop: 'ariaInvalid',
    required: false,
    description: 'Indicates that the current value entered into the select is invalid.',
    values: 'boolean',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'styleSlotsProps',
    prop: 'styleSlots',
    required: false,
    description: 'Custom styles for different parts of the Select component.',
    values: 'SelectSlots',
    default: '',
    apiType: 'custom-type'
  }
]

const styleSlotsInterface: PropData[] = [
  {
    key: 'container',
    prop: 'container',
    required: false,
    description: 'Root container for the select component.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'field',
    prop: 'field',
    required: false,
    description: 'Wrapper for the input and dropdown.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'select',
    prop: 'select',
    required: false,
    description: 'Hidden native select element.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'dropdown',
    prop: 'dropdown',
    required: false,
    description: 'Dropdown menu container for options.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'item',
    prop: 'item',
    required: false,
    description: 'Styles for each option item in the dropdown.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'icon',
    prop: 'icon',
    required: false,
    description: 'Icon for dropdown toggle (chevron).',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  }
]

const emitData: EmitData[] = [
  {
    key: 'updateModelValueEmit',
    event: 'update:modelValue',
    description: 'Emitted when the selected value(s) in the Select component change.',
    values: 'any',
    type: '(value: any) => void',
    apiType: 'primitive'
  }
]

const generateSnippet = snippetGeneratorFactory('vk-select')

const extraProps = ':options="people"'

const scriptCode = `
<script>
import type { SelectOption } from '#valkoui'

const people: SelectOption[] = [
  { value: 1, label: 'Wade Cooper' },
  { value: 2, label: 'Arlene Mccoy' },
  { value: 3, label: 'Devon Webb' },
  { value: 4, label: 'Tom Cook' }
]
<\u002Fscript>
`

const styles = {
  default: {
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
  }
}
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
        :options="colorOptions.general"
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
        :style-slots="styles.default"
      >
        <vk-select
          v-for="color in colorOptions.general"
          :key="color.value"
          v-model="exampleSectionModel[color.value]"
          :color="color.value"
          :label="color.label"
          :options="people"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('color', { values: colorOptions.general.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        :style-slots="styles.default"
      >
        <vk-select
          v-for="variant in variantOptions.general"
          :key="variant.value"
          v-model="exampleSectionModel[variant.value]"
          :variant="variant.value"
          :label="variant.label"
          :options="people"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('variant', { values: variantOptions.general.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        :style-slots="styles.default"
      >
        <vk-select
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          v-model="exampleSectionModel[shape.value]"
          :shape="shape.value"
          :label="shape.label"
          :options="people"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        :style-slots="styles.sizes"
      >
        <vk-select
          v-for="size in sizeOptions.general"
          :key="size.value"
          v-model="exampleSectionModel[size.value]"
          :size="size.value"
          :label="size.label"
          :options="people"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section title="Disabled">
        <vk-select
          disabled
          label="Disabled"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<boolean>('disabled', { values: [true], extraProps })}`" />
        </template>
      </example-section>

      <example-section title="Readonly">
        <vk-select
          v-model="exampleSectionModel['readonly']"
          readonly
          :options="people"
          label="Readonly"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<boolean>('readonly', { values: [true], extraProps })}`" />
        </template>
      </example-section>
    </template>

    <template #api>
      <api-table
        name="Select"
        :tables="[
          { title: 'Props', data: apiData, headers: 'props' },
          { title: 'Emits', data: emitData, headers: 'emits' },
          { title: 'Style Slots', data: styleSlotsInterface, headers: 'interface' }
        ]"
      />
    </template>
  </doc-section>
</template>
