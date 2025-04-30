<script setup lang="ts">
import type { ButtonProps, TableItem } from '@valko-ui/components'

const form = ref<ButtonProps>({
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  disabled: false,
  elevated: false,
  block: false,
  condensed: false,
  loading: false
})

const apiData: TableItem[] = [
  {
    key: 'color',
    prop: 'color',
    required: false,
    description: 'The color theme of the Button.',
    values: 'primary, secondary, negative, warning, accent, positive',
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
  }
]

const emitData: TableItem[] = [
  {
    key: 'click',
    event: 'click',
    description: 'Emitted when the button is clicked.',
    values: '',
    type: '() => void'
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
        :options="colorOptions"
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
        classes="sm:grid-cols-[repeat(3,_minmax(0,_max-content))] lg:grid-cols-[repeat(6,_minmax(0,_max-content))]"
      >
        <vk-button
          v-for="color in colorOptions"
          :key="color.value"
          :color="color.value"
        >
          {{ color.label }}
        </vk-button>

        <template #code>
          <code-block :code="generateSnippet<string>('color', { values: colorOptions.map(o => o.value), hasSlot: true })" />
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
