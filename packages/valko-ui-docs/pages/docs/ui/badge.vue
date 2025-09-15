<script setup lang="ts">
import type { BadgeProps, TableItem } from '#valkoui'

const form = ref<BadgeProps>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  placement: 'top',
  alignment: 'end',
  content: 'new',
  hidden: false,
  dot: false
})

const src = '/assets/badge.jpg'

const badgeProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Badge.',
    values: 'primary, secondary, negative, warning, accent, positive, surface',
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
    values: 'bottom, top, right, left',
    default: 'top'
  },
  {
    key: 'alignmentProp',
    prop: 'alignment',
    required: false,
    description: 'The alignment of the Badge.',
    values: 'start, center, end',
    default: 'end'
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
    key: 'styleSlotsProp',
    prop: 'styleSlots',
    required: false,
    description: 'Slots for applying custom styles to the Badge.',
    values: 'BadgeSlots',
    default: ''
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

const styleSlotsInterface: TableItem[] = [
  {
    key: 'container',
    prop: 'container',
    required: false,
    description: 'Root container for the badge. Controls the overall layout and background.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'badge',
    prop: 'badge',
    required: false,
    description: 'Styles for the badge element itself.',
    values: 'string[]',
    default: ''
  }
]

const generateSnippet = snippetGeneratorFactory('vk-badge')

const customSlot = '<vk-avatar\n      :src="src"\n      color="surface"\n    />'
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
        :alignment="form.alignment"
        :content="form.content"
        :hidden="form.hidden"
        :dot="form.dot"
      >
        <vk-avatar
          :src="src"
          color="surface"
        />
      </vk-badge>
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
        :options="placementOptions.general"
      />
      <vk-select
        v-model="form.alignment"
        label="Alignment"
        size="sm"
        :options="alignmentOptions"
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
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-7"
      >
        <div
          v-for="color in colorOptions.withSurface"
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
              color="surface"
            />
          </vk-badge>
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('color', { values: colorOptions.withSurface.map(o => o.value), customSlot, extraProps: extraProps.content })" />
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
              color="surface"
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
              color="surface"
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
              color="surface"
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
          v-for="placement in placementOptions.general"
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
              color="surface"
            />
          </vk-badge>
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('placement', { values: placementOptions.general.map(o => o.value), customSlot, extraProps: extraProps.content })" />
        </template>
      </example-section>

      <example-section
        title="Alignments"
        classes="grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="alignment in alignmentOptions"
          :key="alignment.value"
          class="flex flex-col gap-2 items-center justify-center md:items-start md:justify-start"
        >
          <span>{{ alignment.label }}</span>
          <vk-badge
            :alignment="alignment.value"
            content="new"
          >
            <vk-avatar
              :src="src"
              color="surface"
            />
          </vk-badge>
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('alignment', { values: alignmentOptions.map(o => o.value), customSlot, extraProps: extraProps.content })" />
        </template>
      </example-section>

      <example-section title="Outlined">
        <vk-badge
          outlined
          content="new"
        >
          <vk-avatar
            :src="src"
            color="surface"
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
              color="surface"
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
            color="surface"
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

      <h3>Style Slots Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="styleSlotsInterface"
      />

      <h3>Badge Slots</h3>
      <vk-table
        :headers="slotHeaders"
        :data="badgeSlots"
      />
    </template>
  </doc-section>
</template>
