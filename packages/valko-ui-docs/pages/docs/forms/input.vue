<script setup lang="ts">
import type { SelectOption, InputProps, TableItem, InputType } from '#valkoui'

const typeOptions: SelectOption<InputType>[] = [
  { value:'text', label:'Text' },
  { value:'email', label:'Email' },
  { value:'password', label:'Password' }
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

const apiData: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Input.',
    values: 'primary, neutral, error, warning, info, success',
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
    values: 'text, email, password',
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
    key: 'iconLeftProp',
    prop: 'iconLeft',
    required: false,
    description: 'A icon on the left side for the Input',
    values: 'string',
    default: ''
  },
  {
    key: 'iconRightProp',
    prop: 'iconRight',
    required: false,
    description: 'A icon on the right side for the Input',
    values: 'string',
    default: ''
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Input',
    values: 'rounded, soft, square',
    default: 'soft'
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
    values: '',
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
    name: 'leftIcon',
    description: 'Slot for placing an icon on the left side of the input field. This slot is typically used to include an icon for visual enhancement or to indicate input type.',
    example: '<template #leftIcon>\n  <!-- Your icon component goes here -->\n</template>'
  },
  {
    key: 'rightIconSlot',
    name: 'rightIcon',
    description: 'Slot for placing an icon on the right side of the input field. This slot is typically used to include an icon for actions like clear input or show/hide password.',
    example: '<template #rightIcon>\n  <!-- Your icon component goes here -->\n</template>'
  }
]

const { defaultSnippet, booleanSnippet } = useCodeSnippet('vk-input')

const iconSnippet = `
<template>
  <vk-input>
    <template #leftIcon>
      <vk-icon name="home" />
    </template>
  </vk-input>

  <vk-input>
    <template #rightIcon>
      <vk-icon name="home" />
    </template>
  </vk-input>
</template>
`
</script>

<template>
  <doc-section
    title="Input"
    description="Area where the user can enter text or other data. Inputs allow users to provide information such as text, numbers, or selections, and are commonly used in forms and search fields."
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
        :clearable="form.clearable"
      >
        <template
          v-if="iconsInForm.left"
          #leftIcon
        >
          <vk-icon name="home" />
        </template>
        <template
          v-if="iconsInForm.right"
          #rightIcon
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
        v-model="form.type"
        label="Type"
        size="sm"
        :options="typeOptions"
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
          v-for="color in colorOptions"
          :key="color.value"
          :color="color.value"
          :label="color.label"
        />

        <template #code>
          <code-block
            :code="defaultSnippet('color', colorOptions)"
            :copy="defaultSnippet('color', colorOptions)"
          />
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
          <code-block
            :code="defaultSnippet('variant', variantOptions.general)"
            :copy="defaultSnippet('variant', variantOptions.general)"
          />
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
          <code-block
            :code="defaultSnippet('shape', shapeOptions.general)"
            :copy="defaultSnippet('shape', shapeOptions.general)"
          />
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
          <code-block
            :code="defaultSnippet('size', sizeOptions.general)"
            :copy="defaultSnippet('size', sizeOptions.general)"
          />
        </template>
      </example-section>

      <example-section
        title="Types"
        classes="sm:grid-cols-2 md:grid-cols-3"
      >
        <vk-input
          v-for="type in typeOptions"
          :key="type.value"
          :type="type.value"
          :label="type.label"
        />

        <template #code>
          <code-block
            :code="defaultSnippet('type', typeOptions)"
            :copy="defaultSnippet('type', typeOptions)"
          />
        </template>
      </example-section>

      <example-section title="Disabled">
        <vk-input
          disabled
          label="Disabled"
        />

        <template #code>
          <code-block
            :code="booleanSnippet('disabled')"
            :copy="booleanSnippet('disabled')"
          />
        </template>
      </example-section>

      <example-section title="Readonly">
        <vk-input
          readonly
          label="Readonly"
        />

        <template #code>
          <code-block
            :code="booleanSnippet('readonly')"
            :copy="booleanSnippet('readonly')"
          />
        </template>
      </example-section>

      <example-section title="Clearable">
        <vk-input
          clearable
          label="Clearable"
        />

        <template #code>
          <code-block
            :code="booleanSnippet('clearable')"
            :copy="booleanSnippet('clearable')"
          />
        </template>
      </example-section>

      <example-section
        title="Icons"
        classes="sm:grid-cols-2"
      >
        <vk-input
          label="Left Icon"
        >
          <template #leftIcon>
            <vk-icon name="home" />
          </template>
        </vk-input>

        <vk-input
          label="Right Icon"
        >
          <template #rightIcon>
            <vk-icon name="home" />
          </template>
        </vk-input>

        <template #code>
          <code-block
            :code="iconSnippet"
            :copy="iconSnippet"
          />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Input Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="apiData"
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
