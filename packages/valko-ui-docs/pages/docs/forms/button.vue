<script setup lang="ts">
import type { ButtonProps, TableItem } from '@valko-ui/components'

const form = ref<ButtonProps>({
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  disabled: false,
  flat: false,
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
    values: 'primary, neutral, error, warning, info, success',
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
    key: 'flat',
    prop: 'flat',
    required: false,
    description: 'Whether the Button has a shadow or not.',
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
        :flat="form.flat"
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
        v-model="form.flat"
        label="Flat"
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
        gap
      >
        <vk-button
          v-for="color in colorOptions"
          :key="color.value"
          :color="color.value"
        >
          {{ color.label }}
        </vk-button>
      </example-section>

      <example-section
        title="Variants"
        gap
        wrap
      >
        <vk-button
          v-for="variant in variantOptions.withGradientAndLink"
          :key="variant.value"
          :variant="variant.value"
        >
          {{ variant.label }}
        </vk-button>
      </example-section>

      <example-section
        title="Shapes"
        gap
      >
        <vk-button
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          :shape="shape.value"
        >
          {{ shape.label }}
        </vk-button>
      </example-section>

      <example-section
        title="Sizes"
        gap
      >
        <vk-button
          v-for="size in sizeOptions.general"
          :key="size.value"
          :size="size.value"
        >
          {{ size.label }}
        </vk-button>
      </example-section>

      <example-section
        title="Flat"
      >
        <vk-button flat>
          Flat
        </vk-button>
      </example-section>

      <example-section
        title="Disabled"
      >
        <vk-button disabled>
          Disabled
        </vk-button>
      </example-section>

      <example-section
        title="Condensed"
      >
        <vk-button condensed>
          Condensed
        </vk-button>
      </example-section>

      <example-section
        title="Block"
        gap
        wrap
      >
        <vk-button block>
          Block
        </vk-button>
      </example-section>

      <example-section
        title="Loading"
        gap
        wrap
      >
        <vk-button loading>
          Loading
        </vk-button>
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Button Props"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="apiData"
          />
        </example-section>

        <example-section
          title="Button Emits"
          gap
        >
          <vk-table
            :headers="emitHeaders"
            :data="emitData"
          />
        </example-section>

        <example-section
          title="Button Slots"
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
