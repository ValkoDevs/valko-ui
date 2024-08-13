<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import variantOptions from '@/data/variantOptions'
import colorOptions from '@/data/colorOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import shapeOptions from '@/data/shapeOptions'
import emitHeaders from '@/data/emitHeaders'
import slotHeaders from '@/data/slotHeaders'

interface Option {
  value: string
  label: string
}

const typeOptions: Option[] = [
  { value:'text', label:'Text' },
  { value:'email', label:'Email' },
  { value:'password', label:'Password' },
  { value:'date', label:'Date' }
]

const generateInputValues = (options: Option[]): Record<string, string> => {
  return options.reduce((acc, option) => {
    acc[option.value] = ''
    return acc
  }, {} as Record<string, string>)
}

const form = ref({
  color: 'primary',
  variant: 'filled',
  size: 'md',
  type: 'text',
  shape: 'soft',
  disabled: false,
  flat: false,
  readonly: false,
  value: '',
  labelValue: 'Label',
  helperValue: 'Helpertext',
  exampleReadonly: 'Example readonly text',
  left: false,
  right: false,
  clearable: false,
  colorInputs: generateInputValues(colorOptions),
  variantInputs: generateInputValues(variantOptions),
  shapeInputs: generateInputValues(shapeOptions),
  sizeInputs: generateInputValues(sizeOptions),
  typeInputs: generateInputValues(typeOptions)
})

const apiData = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Input.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'primary'
  },
  {
    prop: 'variant',
    required: false,
    description: 'The variant of the Input.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'type',
    required: false,
    description: 'The type of the Input.',
    values: 'text, email, password, date',
    default: 'text'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Input.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'disabled',
    required: false,
    description: 'Whether the Input is disabled or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'rounded',
    required: false,
    description: 'Whether the Input is rounded or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'modelValue',
    required: false,
    description: 'The v-model for the Input',
    values: 'string',
    default: 'false'
  },
  {
    prop: 'readonly',
    required: false,
    description: 'Wheter the Input is readonly or not',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'label',
    required: false,
    description: 'The label for the Input',
    values: 'string',
    default: 'false'
  },
  {
    prop: 'helpertext',
    required: false,
    description: 'A hint for the Input',
    values: 'string',
    default: 'false'
  },
  {
    prop: 'iconLeft',
    required: false,
    description: 'A icon on the left side for the Input',
    values: 'string',
    default: ''
  },
  {
    prop: 'iconRight',
    required: false,
    description: 'A icon on the right side for the Input',
    values: 'string',
    default: ''
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Input',
    values: 'rounded, soft, square',
    default: 'soft'
  }
]

const emitData = [
  {
    event: 'update:modelValue',
    description: 'Emitted when the value of the input is updated.',
    values: 'string',
    type: '(value: string) => void'
  },
  {
    event: 'focus',
    description: 'Emitted when the input is focused.',
    values: '',
    type: '(event: FocusEvent) => void'
  },
  {
    event: 'leftIconClick',
    description: 'Emitted when the left icon of the input is clicked.',
    values: '',
    type: '() => void'
  },
  {
    event: 'rightIconClick',
    description: 'Emitted when the right icon of the input is clicked.',
    values: '',
    type: '() => void'
  }
]

const slotData = [
  {
    name: 'leftIcon',
    description: 'Slot for placing an icon on the left side of the input field. This slot is typically used to include an icon for visual enhancement or to indicate input type.',
    example: '<template #leftIcon>\n  <!-- Your icon component goes here -->\n</template>'
  },
  {
    name: 'rightIcon',
    description: 'Slot for placing an icon on the right side of the input field. This slot is typically used to include an icon for actions like clear input or show/hide password.',
    example: '<template #rightIcon>\n  <!-- Your icon component goes here -->\n</template>'
  }
]
</script>

<template>
  <doc-section
    title="Input"
    description="Area where the user can enter text or other data. Inputs allow users to provide information such as text, numbers, or selections, and are commonly used in forms and search fields."
  >
    <template #playground-view>
      <div class="w-full flex px-2">
        <vk-input
          :variant="form.variant"
          :color="form.color"
          :size="form.size"
          :disabled="form.disabled"
          :readonly="form.readonly"
          :flat="form.flat"
          :shape="form.shape"
          :type="form.type"
          :label="form.labelValue"
          :helpertext="form.helperValue"
          :clearable="form.clearable"
          v-model="form.value"
        >
          <template
            #leftIcon
            v-if="form.left"
          >
            <vk-icon name="home" />
          </template>
          <template
            #rightIcon
            v-if="form.right"
          >
            <vk-icon name="home" />
          </template>
        </vk-input>
      </div>
    </template>

    <template #playground-options>
      <vk-input
        label="Label"
        size="sm"
        v-model="form.labelValue"
      />
      <vk-input
        label="Helpertext"
        size="sm"
        v-model="form.helperValue"
      />
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
      <vk-select
        placeholder="Type"
        size="sm"
        :options="typeOptions"
        v-model="form.type"
      />
      <vk-checkbox
        label="Disabled"
        v-model="form.disabled"
      />
      <vk-checkbox
        label="Readonly"
        v-model="form.readonly"
      />
      <vk-checkbox
        label="Clearable"
        v-model="form.clearable"
      />
      <vk-checkbox
        label="Left Icon"
        v-model="form.left"
      />
      <vk-checkbox
        label="Right Icon"
        v-model="form.right"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        justify="around"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-input
            v-for="color in colorOptions"
            :key="color.value"
            :color="color.value"
            :label="color.label"
            v-model="form.variantInputs[color.value]"
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
          <vk-input
            v-for="variant in variantOptions"
            :key="variant.value"
            :variant="variant.value"
            :label="variant.label"
            v-model="form.variantInputs[variant.value]"
          />
        </div>
      </example-section>

      <example-section
        title="Shapes"
        justify="start"
        align="start"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-input
            v-for="shape in shapeOptions"
            :key="shape.value"
            :shape="shape.value"
            :label="shape.label"
            v-model="form.variantInputs[shape.value]"
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
          <vk-input
            v-for="size in sizeOptions"
            :key="size.value"
            :size="size.value"
            :label="size.label"
            v-model="form.variantInputs[size.value]"
          />
        </div>
      </example-section>

      <example-section
        title="Types"
        justify="start"
        align="start"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-input
            v-for="type in typeOptions"
            :key="type.value"
            :type="type.value"
            :label="type.label"
            v-model="form.variantInputs[type.value]"
          />
        </div>
      </example-section>

      <example-section
        title="Disabled"
      >
        <vk-input
          disabled
          label="Disabled"
        />
      </example-section>

      <example-section
        title="Readonly"
      >
        <vk-input
          readonly
          label="Readonly"
          v-model="form.exampleReadonly"
        />
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Input Props"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="apiData"
          />
        </example-section>

        <example-section
          title="Input Emits"
          gap
        >
          <vk-table
            :headers="emitHeaders"
            :data="emitData"
          />
        </example-section>

        <example-section
          title="Input Slots"
          gap
        >
          <vk-table
            :headers="slotHeaders"
            :data="slotData"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
