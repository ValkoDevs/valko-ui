<script setup lang="ts">
import type { BadgeProps, TableItem, Corner, SelectOption } from '#valkoui'

const form = ref<BadgeProps>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  placement: 'top-right',
  content: 'new',
  flat: false,
  hidden: false,
  dot: false
})

const placementOptions: SelectOption<Corner>[] = [
  { value: 'top-right', label: 'Top Right' },
  { value: 'bottom-right', label: 'Bottom Right' },
  { value: 'top-left', label: 'Top Left' },
  { value: 'bottom-left', label: 'Bottom Left' }
]

const src = '/assets/badge.jpg'

const badgeProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Badge.',
    values: 'primary, secondary, negative, warning, accent, positive',
    default: 'primary'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Badge.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Badge.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'placementProp',
    prop: 'placement',
    required: false,
    description: 'The placement of the Badge.',
    values: 'top-right | top-left | bottom-right | bottom-left',
    default: 'top-right'
  },
  {
    key: 'contentProp',
    prop: 'content',
    required: false,
    description: 'The content displayed inside of the Badge.',
    values: 'number | string',
    default: ''
  },
  {
    key: 'outlinedProp',
    prop: 'outlined',
    required: false,
    description: 'Displays an outline for the Badge.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'flatProp',
    prop: 'flat',
    required: false,
    description: 'Displays a shadow for the Badge.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'dotProp',
    prop: 'dot',
    required: false,
    description: 'If true the Badge will have smaller dimensions and not display content inside.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'hiddenProp',
    prop: 'hidden',
    required: false,
    description: 'If true the Badge will be hidden.',
    values: 'true, false',
    default: 'false'
  }
]

const badgeSlots: TableItem[] = [
  {
    key: 'defaultSlots',
    name: 'default',
    description: 'Slot for additional content to be placed inside the badge. This slot is typically used to include custom elements like icons, text, or other components.',
    example: '<template #default>\n  <!-- Your custom content goes here -->\n</template>'
  }
]

const generateSnippet = snippetGeneratorFactory('vk-badge')

const customSlot = '<vk-avatar\n      :src="src"\n      color="secondary"\n    />'
const extraProps = {
  content: 'content="new"',
  dot: 'dot'
}
</script>

<template>
  <doc-section
    title="Badge"
    description="Visual element that displays additional accent, such as notifications or states. Badges are typically used to indicate new or unread items, status indicators, or numeric counters."
  >
    <template #playground-view>
      <vk-badge
        :color="form.color"
        :variant="form.variant"
        :size="form.size"
        :shape="form.shape"
        :placement="form.placement"
        :content="form.content"
        :flat="form.flat"
        :hidden="form.hidden"
        :dot="form.dot"
      >
        <vk-avatar
          :src="src"
          color="secondary"
        />
      </vk-badge>
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
        :options="variantOptions.withGradient"
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
      <vk-input
        v-model="form.content"
        label="Content"
      />
      <vk-select
        v-model="form.placement"
        label="Placement"
        size="sm"
        :options="placementOptions"
      />
      <vk-checkbox
        v-model="form.flat"
        label="Flat"
      />
      <vk-checkbox
        v-model="form.hidden"
        label="Hidden"
      />
      <vk-checkbox
        v-model="form.dot"
        label="Dot"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
      >
        <div
          v-for="color in colorOptions"
          :key="color.value"
          class="flex flex-col gap-2 items-center justify-center md:items-start md:justify-start"
        >
          <span>{{ color.label }}</span>
          <vk-badge
            :color="color.value"
            content="new"
          >
            <vk-avatar
              :src="src"
              color="secondary"
            />
          </vk-badge>
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('color', { values: colorOptions.map(o => o.value), customSlot, extraProps: extraProps.content })" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
      >
        <div
          v-for="variant in variantOptions.withGradient"
          :key="variant.value"
          class="flex flex-col gap-2 items-center justify-center md:items-start md:justify-start"
        >
          <span>{{ variant.label }}</span>
          <vk-badge
            :variant="variant.value"
            content="new"
          >
            <vk-avatar
              :src="src"
              color="secondary"
            />
          </vk-badge>
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('variant', { values: variantOptions.withGradient.map(o => o.value), customSlot, extraProps: extraProps.content })" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        classes="grid-cols-2 md:grid-cols-3"
      >
        <div
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          class="flex flex-col gap-2 items-center justify-center md:items-start md:justify-start"
        >
          <span>{{ shape.label }}</span>
          <vk-badge
            :shape="shape.value"
            content="new"
          >
            <vk-avatar
              :src="src"
              color="secondary"
            />
          </vk-badge>
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value), customSlot, extraProps: extraProps.content })" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="size in sizeOptions.general"
          :key="size.value"
          class="flex flex-col gap-2 items-center justify-center md:items-start md:justify-start"
        >
          <span>{{ size.label }}</span>
          <vk-badge
            :size="size.value"
            content="new"
          >
            <vk-avatar
              :src="src"
              color="secondary"
            />
          </vk-badge>
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value), customSlot, extraProps: extraProps.content })" />
        </template>
      </example-section>

      <example-section
        title="Placements"
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="placement in placementOptions"
          :key="placement.value"
          class="flex flex-col gap-2 items-center justify-center md:items-start md:justify-start"
        >
          <span>{{ placement.label }}</span>
          <vk-badge
            :placement="placement.value"
            content="new"
          >
            <vk-avatar
              :src="src"
              color="secondary"
            />
          </vk-badge>
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('placement', { values: placementOptions.map(o => o.value), customSlot, extraProps: extraProps.content })" />
        </template>
      </example-section>

      <example-section title="Flat">
        <vk-badge
          flat
          content="new"
        >
          <vk-avatar
            :src="src"
            color="secondary"
          />
        </vk-badge>

        <template #code>
          <code-block :code="generateSnippet<boolean>('flat', { values: [true], customSlot, extraProps: extraProps.content })" />
        </template>
      </example-section>

      <example-section title="Outlined">
        <vk-badge
          outlined
          content="new"
        >
          <vk-avatar
            :src="src"
            color="secondary"
          />
        </vk-badge>

        <template #code>
          <code-block :code="generateSnippet<boolean>('outlined', { values: [true], customSlot, extraProps: extraProps.content })" />
        </template>
      </example-section>

      <example-section
        title="Dot"
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="size in sizeOptions.general"
          :key="size.value"
          class="flex flex-col gap-2 items-center justify-center md:items-start md:justify-start"
        >
          <span>{{ size.label }}</span>
          <vk-badge
            :size="size.value"
            dot
          >
            <vk-avatar
              :src="src"
              color="secondary"
            />
          </vk-badge>
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value), customSlot, extraProps: extraProps.dot })" />
        </template>
      </example-section>

      <example-section title="Hidden">
        <vk-badge
          hidden
        >
          <vk-avatar
            :src="src"
            color="secondary"
          />
        </vk-badge>

        <template #code>
          <code-block :code="generateSnippet<boolean>('hidden', { values: [true], customSlot })" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Badge Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="badgeProps"
      />

      <h3>Badge Slots</h3>
      <vk-table
        :headers="slotHeaders"
        :data="badgeSlots"
      />
    </template>
  </doc-section>
</template>
