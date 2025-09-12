<script setup lang="ts">
import type { ButtonProps, TableItem, SelectOption } from '@valko-ui/components'

const form = ref<ButtonProps>({
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  disabled: false,
  elevated: false,
  block: false,
  condensed: false,
  loading: false,
  type: 'button'
})

const typeOptions: SelectOption<'button' | 'submit' | 'reset'>[] = [
  { value: 'button', label: 'Button' },
  { value: 'submit', label: 'Submit' },
  { value: 'reset', label: 'Reset' }
]

const apiData: TableItem[] = [
  {
    key: 'color',
    prop: 'color',
    required: false,
    description: 'The color theme of the Button.',
    values: 'primary, secondary, negative, warning, accent, positive, surface',
    default: 'primary'
  },
  {
    key: 'variant',
    prop: 'variant',
    required: false,
    description: 'The variant of the Button.',
    values: 'filled, outlined, ghost, link, gradient',
    default: 'filled'
  },
  {
    key: 'shape',
    prop: 'shape',
    required: false,
    description: 'The shape of the Button.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'size',
    prop: 'size',
    required: false,
    description: 'The size of the Button.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'disabled',
    prop: 'disabled',
    required: false,
    description: 'Whether the Button is disabled or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'type',
    prop: 'type',
    required: false,
    description: 'The type of the button.',
    values: 'button, submit, reset',
    default: 'button'
  },
  {
    key: 'elevated',
    prop: 'elevated',
    required: false,
    description: 'Adds a subtle shadow to the button, giving it a slightly raised appearance. When false (default), the button appears flat with no shadow.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'block',
    prop: 'block',
    required: false,
    description: 'Whether the Button width is equal to it\'s container.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'loading',
    prop: 'loading',
    required: false,
    description: 'Whether the Button is loading or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'ariaLabelProp',
    prop: 'aria-label',
    required: false,
    description: 'Defines a string label for the button when no visible text is present. Useful for icon-only buttons or when additional context is needed for assistive technologies.',
    values: 'string',
    default: ''
  },
  {
    key: 'styleSlotsProp',
    prop: 'styleSlots',
    required: false,
    description: 'Slots for applying custom styles to the Button.',
    values: 'ButtonSlots',
    default: ''
  }
]

const styleSlotsInterface: TableItem[] = [
  {
    key: 'button',
    prop: 'button',
    required: false,
    description: 'Styles for the button element itself, this is the main container aswell.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'spinnerContainer',
    prop: 'spinnerContainer',
    required: false,
    description: 'Styles for the spinner container element.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'spinner',
    prop: 'spinner',
    required: false,
    description: 'Styles for the spinner component itself.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'stateLayer',
    prop: 'stateLayer',
    required: false,
    description: 'Styles for the state layer element (e.g., hover, focus, active states).',
    values: 'string[]',
    default: ''
  }
]

const emitData: TableItem[] = [
  {
    key: 'click',
    event: 'click',
    description: 'Emitted when the button is clicked.',
    values: 'MouseEvent',
    type: '(event: MouseEvent) => void'
  }
]

const slotData: TableItem[] = [
  {
    key: 'default',
    name: 'default',
    description: 'Slot for the content of the button. This slot is typically used to include text or other components inside the button.',
    example: '<template #default>\n  <!-- Your button content goes here -->\n</template>'
  }
]

const onClick = () => useNotification({ text: 'Clicked' })

const generateSnippet = snippetGeneratorFactory('vk-button')
</script>

<template>
  <doc-section
    title="Button"
    description="Interactive element that triggers an action when pressed. Buttons are used to initiate actions such as submitting forms, navigating to different pages, or performing specific tasks within an application."
  >
    <template #playground-view>
      <vk-button
        :color="form.color"
        :variant="form.variant"
        :size="form.size"
        :disabled="form.disabled"
        :elevated="form.elevated"
        :block="form.block"
        :condensed="form.condensed"
        :shape="form.shape"
        :loading="form.loading"
        :type="form.type"
        @click="onClick"
      >
        Button
      </vk-button>
    </template>

    <template #playground-options>
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
        :options="variantOptions.withGradientAndLink"
      />
      <vk-select
        v-model="form.size"
        label="Size"
        size="sm"
        :options="sizeOptions.general"
      />
      <vk-select
        v-model="form.shape"
        label="Shape"
        size="sm"
        :options="shapeOptions.general"
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
        v-model="form.condensed"
        label="Condensed"
      />
      <vk-checkbox
        v-model="form.elevated"
        label="Elevated"
      />
      <vk-checkbox
        v-model="form.block"
        label="Block"
      />
      <vk-checkbox
        v-model="form.loading"
        label="Loading"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        classes="sm:grid-cols-[repeat(3,_minmax(0,_max-content))] lg:grid-cols-[repeat(4,_minmax(0,_max-content))] xl:grid-cols-[repeat(7,_minmax(0,_max-content))]"
      >
        <vk-button
          v-for="color in colorOptions.withSurface"
          :key="color.value"
          :color="color.value"
        >
          {{ color.label }}
        </vk-button>

        <template #code>
          <code-block :code="generateSnippet<string>('color', { values: colorOptions.withSurface.map(o => o.value), hasSlot: true })" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        classes="sm:grid-cols-[repeat(3,_minmax(0,_max-content))] lg:grid-cols-[repeat(5,_minmax(0,_max-content))]"
      >
        <vk-button
          v-for="variant in variantOptions.withGradientAndLink"
          :key="variant.value"
          :variant="variant.value"
        >
          {{ variant.label }}
        </vk-button>

        <template #code>
          <code-block :code="generateSnippet<string>('variant', { values: variantOptions.withGradientAndLink.map(o => o.value), hasSlot: true })" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        classes="sm:grid-cols-[repeat(2,_minmax(0,_max-content))] lg:grid-cols-[repeat(3,_minmax(0,_max-content))]"
      >
        <vk-button
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          :shape="shape.value"
        >
          {{ shape.label }}
        </vk-button>

        <template #code>
          <code-block :code="generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value), hasSlot: true })" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        classes="sm:grid-cols-[repeat(2,_minmax(0,_max-content))] lg:grid-cols-[repeat(4,_minmax(0,_max-content))]"
      >
        <vk-button
          v-for="size in sizeOptions.general"
          :key="size.value"
          :size="size.value"
        >
          {{ size.label }}
        </vk-button>

        <template #code>
          <code-block :code="generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value), hasSlot: true })" />
        </template>
      </example-section>

      <example-section
        title="Types"
        classes="sm:grid-cols-[repeat(2,_minmax(0,_max-content))] lg:grid-cols-[repeat(4,_minmax(0,_max-content))]"
      >
        <vk-button
          v-for="type in typeOptions"
          :key="type.value"
          :type="type.value"
        >
          {{ type.label }}
        </vk-button>

        <template #code>
          <code-block :code="generateSnippet<string>('type', { values: typeOptions.map(o => o.value), hasSlot: true })" />
        </template>
      </example-section>

      <example-section title="Elevated">
        <vk-button elevated>
          Elevated
        </vk-button>

        <template #code>
          <code-block :code="generateSnippet<boolean>('elevated', { values: [true], hasSlot: true })" />
        </template>
      </example-section>

      <example-section title="Disabled">
        <vk-button disabled>
          Disabled
        </vk-button>

        <template #code>
          <code-block :code="generateSnippet<boolean>('disabled', { values: [true], hasSlot: true })" />
        </template>
      </example-section>

      <example-section title="Condensed">
        <vk-button condensed>
          Condensed
        </vk-button>

        <template #code>
          <code-block :code="generateSnippet<boolean>('condensed', { values: [true], hasSlot: true })" />
        </template>
      </example-section>

      <example-section title="Block">
        <vk-button block>
          Block
        </vk-button>

        <template #code>
          <code-block :code="generateSnippet<boolean>('block', { values: [true], hasSlot: true })" />
        </template>
      </example-section>

      <example-section title="Loading">
        <vk-button loading>
          Loading
        </vk-button>

        <template #code>
          <code-block :code="generateSnippet<boolean>('loading', { values: [true], hasSlot: true })" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Button Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="apiData"
      />

      <h3>Style Slots Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="styleSlotsInterface"
      />

      <h3>Button Emits</h3>
      <vk-table
        :headers="emitHeaders"
        :data="emitData"
      />

      <h3>Button Slots</h3>
      <vk-table
        :headers="slotHeaders"
        :data="slotData"
      />
    </template>
  </doc-section>
</template>
