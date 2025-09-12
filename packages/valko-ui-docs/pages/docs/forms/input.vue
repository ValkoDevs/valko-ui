<script setup lang="ts">
import { useNotification, type SelectOption, type InputProps, type TableItem, type InputType } from '#valkoui'

const typeOptions: SelectOption<InputType>[] = [
  { value:'text', label:'Text' },
  { value:'email', label:'Email' },
  { value:'password', label:'Password' },
  { value:'number', label:'Number' }
]

const form = ref<InputProps>({
  color: 'primary',
  variant: 'filled',
  size: 'md',
  type: 'text',
  shape: 'soft',
  modelValue: '',
  label: 'Label',
  helpertext: 'Helpertext',
  disabled: false,
  readonly: false,
  clearable: false
})

const iconsInForm = ref({
  left: false,
  right: false
})

const inputStates = reactive<Record<string, string>>({
  readonly: 'Example readonly.'
})

const apiData: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Input.',
    values: 'primary, secondary, negative, warning, accent, positive, surface',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Input.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    key: 'typeProp',
    prop: 'type',
    required: false,
    description: 'The type of the Input.',
    values: 'text, email, password, number',
    default: 'text'
  },
  {
    key: 'cursorProp',
    prop: 'cursor',
    required: false,
    description: 'The displayed cursor type when hovering the input.',
    values: 'cursor | text',
    default: 'text'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Input.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'disabledProp',
    prop: 'disabled',
    required: false,
    description: 'Whether the Input is disabled or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'roundedProp',
    prop: 'rounded',
    required: false,
    description: 'Whether the Input is rounded or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'modelValueProp',
    prop: 'modelValue',
    required: false,
    description: 'The v-model for the Input',
    values: 'string',
    default: 'false'
  },
  {
    key: 'minProp',
    prop: 'min',
    required: false,
    description: 'The min value for the Input in type number',
    values: 'number',
    default: '-Infinity'
  },
  {
    key: 'maxProp',
    prop: 'max',
    required: false,
    description: 'The max value for the Input in type number',
    values: 'number',
    default: 'Infinity'
  },
  {
    key: 'stepProp',
    prop: 'step',
    required: false,
    description: 'The step value for the Input in type number',
    values: 'number',
    default: '1'
  },
  {
    key: 'readonlyProp',
    prop: 'readonly',
    required: false,
    description: 'Wheter the Input is readonly or not',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'labelProp',
    prop: 'label',
    required: false,
    description: 'The label for the Input',
    values: 'string',
    default: 'false'
  },
  {
    key: 'helpertextProp',
    prop: 'helpertext',
    required: false,
    description: 'A hint for the Input',
    values: 'string',
    default: 'false'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Input',
    values: 'rounded, soft, square',
    default: 'soft'
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
    description: 'ID reference to an element that labels the input (e.g. a visible <label>).',
    values: 'string',
    default: ''
  },
  {
    key: 'ariaDescribedByProp',
    prop: 'aria-describedby',
    required: false,
    description: 'ID reference to an element that further describes the input, such as helper or error text.',
    values: 'string',
    default: ''
  },
  {
    key: 'ariaRequiredProp',
    prop: 'aria-required',
    required: false,
    description: 'Marks the input as required for form submission.',
    values: 'true, false',
    default: ''
  },
  {
    key: 'ariaInvalidProp',
    prop: 'aria-invalid',
    required: false,
    description: 'Indicates that the current value entered into the input is invalid.',
    values: 'true, false',
    default: ''
  },
  {
    key: 'styleSlotsProps',
    prop: 'styleSlots',
    required: false,
    description: 'Custom styles for different parts of the Input component.',
    values: 'InputSlots',
    default: ''
  }
]

const styleSlotsInterface: TableItem[] = [
  {
    key: 'container',
    prop: 'container',
    required: false,
    description: 'Root container for the input.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'field',
    prop: 'field',
    required: false,
    description: 'Field wrapper for input and icons.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'input',
    prop: 'input',
    required: false,
    description: 'The input element itself.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'label',
    prop: 'label',
    required: false,
    description: 'Label for the input.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'numberArrows',
    prop: 'numberArrows',
    required: false,
    description: 'Numeric input arrow controls.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'chevrons',
    prop: 'chevrons',
    required: false,
    description: 'Chevron icons for numeric input.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'clearIcon',
    prop: 'clearIcon',
    required: false,
    description: 'Clear (reset) icon.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'icons',
    prop: 'icons',
    required: false,
    description: 'Wrapper for left/right icons.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'leftIcon',
    prop: 'leftIcon',
    required: false,
    description: 'Left icon slot.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'rightIcon',
    prop: 'rightIcon',
    required: false,
    description: 'Right icon slot.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'helper',
    prop: 'helper',
    required: false,
    description: 'Helper text below the input.',
    values: 'string[]',
    default: ''
  }
]

const emitData: TableItem[] = [
  {
    key: 'updateModelValueEmit',
    event: 'update:modelValue',
    description: 'Emitted when the value of the input is updated.',
    values: 'string',
    type: '(value: string) => void'
  },
  {
    key: 'focusEmit',
    event: 'focus',
    description: 'Emitted when the input is focused.',
    values: 'FocusEvent',
    type: '(event: FocusEvent) => void'
  },
  {
    key: 'blurEmit',
    event: 'blur',
    description: 'Emitted when the input loses focus.',
    values: 'FocusEvent',
    type: '(event: FocusEvent) => void'
  },
  {
    key: 'clearEmit',
    event: 'clear',
    description: 'Emitted when the input is cleared using the clearable icon.',
    values: '',
    type: '() => void'
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

const generateSnippet = snippetGeneratorFactory('vk-input')

const iconSnippet = `<template>
  <vk-input>
    <template #left-icon>
      <vk-icon name="home" />
    </template>
  </vk-input>

  <vk-input>
    <template #right-icon>
      <vk-icon name="home" />
    </template>
  </vk-input>
</template>
`
</script>

<template>
  <doc-section
    title="Input"
    description="Area where the user can enter text or other data. Inputs allow users to provide accent such as text, numbers, or selections, and are commonly used in forms and search fields."
  >
    <template #playground-view>
      <vk-input
        v-model="form.modelValue"
        :variant="form.variant"
        :color="form.color"
        :size="form.size"
        :disabled="form.disabled"
        :readonly="form.readonly"
        :shape="form.shape"
        :type="form.type"
        :label="form.label"
        :helpertext="form.helpertext"
        :min="form.min"
        :max="form.max"
        :step="form.step"
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
      </vk-input>
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
        :options="colorOptions.withSurface"
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
        v-model="form.type"
        label="Type"
        size="sm"
        :options="typeOptions"
      />
      <vk-input
        v-if="form.type === 'number'"
        v-model="form.min"
        label="Min"
        type="number"
        size="sm"
      />
      <vk-input
        v-if="form.type === 'number'"
        v-model="form.max"
        label="Max"
        type="number"
        size="sm"
      />
      <vk-input
        v-if="form.type === 'number'"
        v-model="form.step"
        label="Step"
        type="number"
        size="sm"
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
        classes="sm:grid-cols-2 md:grid-cols-3"
      >
        <vk-input
          v-for="color in colorOptions.withSurface"
          :key="color.value"
          :color="color.value"
          :label="color.label"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('color', { values: colorOptions.withSurface.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        classes="sm:grid-cols-2 md:grid-cols-3"
      >
        <vk-input
          v-for="variant in variantOptions.general"
          :key="variant.value"
          :variant="variant.value"
          :label="variant.label"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('variant', { values: variantOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        classes="sm:grid-cols-2 md:grid-cols-3"
      >
        <vk-input
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          :shape="shape.value"
          :label="shape.label"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        classes="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <vk-input
          v-for="size in sizeOptions.general"
          :key="size.value"
          :size="size.value"
          :label="size.label"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Types"
        classes="md:grid-cols-2 lg:grid-cols-4"
      >
        <vk-input
          v-for="type in typeOptions"
          :key="type.value"
          :type="type.value"
          :label="type.label"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('type', { values: typeOptions.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section title="Disabled">
        <vk-input
          disabled
          label="Disabled"
        />

        <template #code>
          <code-block :code="generateSnippet<boolean>('disabled', { values: [true] })" />
        </template>
      </example-section>

      <example-section title="Readonly">
        <vk-input
          v-model="inputStates['readonly']"
          readonly
          label="Readonly"
        />

        <template #code>
          <code-block :code="generateSnippet<boolean>('readonly', { values: [true] })" />
        </template>
      </example-section>

      <example-section title="Clearable">
        <vk-input
          clearable
          label="Clearable"
        />

        <template #code>
          <code-block :code="generateSnippet<boolean>('clearable', { values: [true] })" />
        </template>
      </example-section>

      <example-section
        title="Icons"
        classes="sm:grid-cols-2"
      >
        <vk-input
          label="Left Icon"
        >
          <template #left-icon>
            <vk-icon name="home" />
          </template>
        </vk-input>

        <vk-input
          label="Right Icon"
        >
          <template #right-icon>
            <vk-icon name="home" />
          </template>
        </vk-input>

        <template #code>
          <code-block :code="iconSnippet" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Input Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="apiData"
      />

      <h3>Style Slots Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="styleSlotsInterface"
      />

      <h3>Input Emits</h3>
      <vk-table
        :headers="emitHeaders"
        :data="emitData"
      />

      <h3>Input Slots</h3>
      <vk-table
        :headers="slotHeaders"
        :data="slotData"
      />
    </template>
  </doc-section>
</template>
