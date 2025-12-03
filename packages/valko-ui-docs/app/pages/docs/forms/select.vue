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

const iconsInForm = ref({
  left: false,
  right: false
})

const exampleSectionModel = reactive<Record<string, number>>({ readonly: 1 })

const apiData: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Select.',
    values: 'primary, secondary, negative, warning, accent, positive',
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
    values: 'SelectOption[]',
    default: ''
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
  },
  {
    key: 'ariaLabelProp',
    prop: 'aria-label',
    required: false,
    description: 'Accessible text label read by assistive technologies when no visible label is provided.',
    values: 'string',
    default: ''
  },
  {
    key: 'ariaLabelledByProp',
    prop: 'aria-labelledby',
    required: false,
    description: 'ID reference to an element that labels the select (e.g. a visible <label>).',
    values: 'string',
    default: ''
  },
  {
    key: 'ariaDescribedByProp',
    prop: 'aria-describedby',
    required: false,
    description: 'ID reference to an element that further describes the select, such as helper or error text.',
    values: 'string',
    default: ''
  },
  {
    key: 'ariaRequiredProp',
    prop: 'aria-required',
    required: false,
    description: 'Marks the select as required for form submission.',
    values: 'true, false',
    default: ''
  },
  {
    key: 'ariaInvalidProp',
    prop: 'aria-invalid',
    required: false,
    description: 'Indicates that the current value entered into the select is invalid.',
    values: 'true, false',
    default: ''
  },
  {
    key: 'styleSlotsProps',
    prop: 'styleSlots',
    required: false,
    description: 'Custom styles for different parts of the Select component.',
    values: 'SelectSlots',
    default: ''
  }
]

const styleSlotsInterface: TableItem[] = [
  {
    key: 'container',
    prop: 'container',
    description: 'Root container for the select component.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'field',
    prop: 'field',
    description: 'Wrapper for the input and dropdown.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'select',
    prop: 'select',
    description: 'Hidden native select element.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'dropdown',
    prop: 'dropdown',
    description: 'Dropdown menu container for options.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'item',
    prop: 'item',
    description: 'Styles for each option item in the dropdown.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'chevronIcon',
    prop: 'chevronIcon',
    description: 'The chevron icon for the select component.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'rightIcon',
    prop: 'rightIcon',
    description: 'The right icon for the select component.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'clearIcon',
    prop: 'clearIcon',
    description: 'The clear icon for the select component.',
    values: 'string[]',
    default: ''
  }
]

const optionsInterface: TableItem[] = [
  {
    key: 'valueOption',
    prop: 'value',
    description: 'The value of the option. By default, this is a string or number, but you can use any type by providing a generic type parameter to SelectOption<T>.',
    values: 'string | number | T',
    default: ''
  },
  {
    key: 'labelOption',
    prop: 'label',
    description: 'The label displayed for the option.',
    values: 'string',
    default: ''
  }
]

const slotData: TableItem[] = [
  {
    key: 'leftIconSlot',
    name: 'left-icon',
    description: 'Slot for placing an icon on the left side of the input field. This slot is typically used to include an icon for visual enhancement or to indicate input type.',
    example: '<template #left-icon>\n  <!-- Your icon component goes here -->\n</template>'
  },
  {
    key: 'rightIconSlot',
    name: 'right-icon',
    description: 'Slot for placing an icon on the right side of the input field. This slot is typically used to include an icon for actions like clear input or show/hide password.',
    example: '<template #right-icon>\n  <!-- Your icon component goes here -->\n</template>'
  }
]

const emitData: TableItem[] = [
  {
    key: 'updateModelValueEmit',
    event: 'update:modelValue',
    description: 'Emitted when the selected value(s) in the Select component change.',
    values: 'any',
    type: '(value: any) => void'
  },
  {
    key: 'leftIconClickEmit',
    event: 'leftIconClick',
    description: 'Emitted when the left icon of the input is clicked.',
    values: '',
    type: '() => void'
  },
  {
    key: 'rightIconClickEmit',
    event: 'rightIconClick',
    description: 'Emitted when the right icon of the input is clicked.',
    values: '',
    type: '() => void'
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

const styles = generateStyles({
  default: [
    'sm:grid-cols-2',
    'md:grid-cols-3'
  ],
  sizes: [
    'sm:grid-cols-2',
    'md:grid-cols-3',
    'lg:grid-cols-4'
  ]
})
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
        @left-icon-click="useNotification({ text: 'Left Icon!!', color: 'surface' })"
        @right-icon-click="useNotification({ text: 'Right Icon!!', color: 'surface' })"
      >
        <template
          v-if="iconsInForm.left"
          #left-icon
        >
          <vk-icon name="home" />
        </template>
        <template
          v-if="iconsInForm.right"
          #right-icon
        >
          <vk-icon name="home" />
        </template>
      </vk-select>
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
      <vk-checkbox
        v-model="iconsInForm.left"
        label="Left Icon"
      />
      <vk-checkbox
        v-model="iconsInForm.right"
        label="Right Icon"
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
      <h3>Select Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="apiData"
      />

      <h3>Select Option Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="optionsInterface"
      />

      <h3>Style Slots Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="styleSlotsInterface"
      />

      <h3>Select Emits</h3>
      <vk-table
        :headers="emitHeaders"
        :data="emitData"
      />

      <h3>Select Slots</h3>
      <vk-table
        :headers="slotHeaders"
        :data="slotData"
      />
    </template>
  </doc-section>
</template>
