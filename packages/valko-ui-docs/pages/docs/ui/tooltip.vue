<script setup lang="ts">
import type { TooltipProps, TableItem, SelectOption, PlacementWithAuto, Alignment } from '#valkoui'

const form = ref<TooltipProps>({
  shape: 'soft',
  size: 'md',
  placement: 'auto',
  alignment: undefined,
  content: 'Tooltip Content',
  flat: true
})

const placementOptions: SelectOption<PlacementWithAuto>[] = [
  { label: 'Bottom', value: 'bottom' },
  { label: 'Top', value: 'top' },
  { label: 'Left', value: 'left' },
  { label: 'Right', value: 'right' },
  { label: 'Auto', value: 'auto' }
]

const alignmentOptions: SelectOption<Alignment>[] = [
  { label: 'Start', value: 'start' },
  { label: 'Center', value: 'center' },
  { label: 'End', value: 'end' }
]

const tooltipProps: TableItem[] = [
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Tooltip.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Tooltip.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'placementProp',
    prop: 'placement',
    required: false,
    description: 'Defines where the Tooltip should appear relative to the reference element. If set to "auto", the Tooltip will automatically choose the best placement based on available space.',
    values: 'bottom, top, left, right, auto',
    default: 'auto'
  },
  {
    key: 'alignmentProp',
    prop: 'alignment',
    required: false,
    description: 'Specifies how the Tooltip is aligned within its placement. If not set, it defaults to the best fit based on available space.',
    values: 'start, center, end',
    default: 'undefined'
  },
  {
    key: 'contentProp',
    prop: 'content',
    required: true,
    description: 'The content of the Tooltip.',
    values: 'string',
    default: ''
  },
  {
    key: 'flatProp',
    prop: 'flat',
    required: false,
    description: 'Determines whether to display a shadow for the Tooltip.',
    values: 'true, false',
    default: 'true'
  }
]

const tooltipSlots: TableItem[] = [
  {
    key: 'defaultSlot',
    name: 'default',
    description: 'Slot for the content to trigger the tooltip.',
    example: `
      <template #default>
        <button>
          Hover over me to show the tooltip
        </button>
      </template>
    `
  }
]

const generateSnippet = snippetGeneratorFactory('vk-tooltip')

const customSlot = '<vk-button>\n      Slot Content\n    </vk-button>'
const extraProps = 'content="Tooltip Content"'
</script>

<template>
  <doc-section
    title="Tooltip"
    description="Popup message that provides additional information when hovering over an element. Tooltips are used to provide supplementary information or context about interface elements, helping users understand their purpose or functionality."
  >
    <template #playground-view>
      <vk-tooltip
        :size="form.size"
        :shape="form.shape"
        :placement="form.placement"
        :content="form.content"
        :flat="form.flat"
        :alignment="form.alignment"
      >
        <vk-button>
          Hover Me
        </vk-button>
      </vk-tooltip>
    </template>

    <template #playground-options>
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
        v-model="form.placement"
        label="Placement"
        size="sm"
        :options="placementOptions"
      />
      <vk-select
        v-model="form.alignment"
        label="Alignment"
        size="sm"
        :options="alignmentOptions"
      />
      <vk-input
        v-model="form.content"
        label="Content"
      />
      <vk-checkbox
        v-model="form.flat"
        label="Flat"
      />
    </template>

    <template #examples>
      <example-section
        title="Shapes"
        classes="grid-cols-[repeat(2,_minmax(0,_max-content))] md:grid-cols-[repeat(3,_minmax(0,_max-content))]"
      >
        <vk-tooltip
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          :content="shape.label"
          :shape="shape.value"
        >
          <vk-button>
            {{ shape.label }}
          </vk-button>
        </vk-tooltip>

        <template #code>
          <code-block :code="generateSnippet<string>('shape', {values: shapeOptions.general.map(o => o.value), customSlot, extraProps})" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        classes="grid-cols-[repeat(2,_minmax(0,_max-content))] md:grid-cols-[repeat(4,_minmax(0,_max-content))]"
      >
        <vk-tooltip
          v-for="size in sizeOptions.general"
          :key="size.value"
          :content="size.label"
          :size="size.value"
        >
          <vk-button>
            {{ size.label }}
          </vk-button>
        </vk-tooltip>

        <template #code>
          <code-block :code="generateSnippet<string>('size', {values: sizeOptions.general.map(o => o.value), customSlot, extraProps})" />
        </template>
      </example-section>

      <example-section
        title="Placements"
        classes="grid-cols-[repeat(2,_minmax(0,_max-content))] md:grid-cols-[repeat(3,_minmax(0,_max-content))] lg:grid-cols-[repeat(5,_minmax(0,_max-content))]"
      >
        <vk-tooltip
          v-for="placement in placementOptions"
          :key="placement.value"
          :content="placement.label"
          :placement="placement.value"
        >
          <vk-button>
            {{ placement.label }}
          </vk-button>
        </vk-tooltip>

        <template #code>
          <code-block :code="generateSnippet<string>('placement', {values: placementOptions.map(o => o.value), customSlot, extraProps})" />
        </template>
      </example-section>

      <example-section
        title="Alignments"
        classes="grid-cols-[repeat(2,_minmax(0,_max-content))] md:grid-cols-[repeat(3,_minmax(0,_max-content))]"
      >
        <vk-tooltip
          v-for="alignment in alignmentOptions"
          :key="alignment.value"
          :content="alignment.label"
          :alignment="alignment.value"
        >
          <vk-button>
            {{ alignment.label }}
          </vk-button>
        </vk-tooltip>

        <template #code>
          <code-block :code="generateSnippet<string>('alignment', {values: alignmentOptions.map(o => o.value), customSlot, extraProps})" />
        </template>
      </example-section>

      <example-section title="Flat">
        <vk-tooltip
          flat
          content="Flat"
        >
          <vk-button>
            Flat
          </vk-button>
        </vk-tooltip>

        <template #code>
          <code-block :code="generateSnippet<boolean>('flat', {values: [true], customSlot, extraProps})" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Tooltip Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="tooltipProps"
      />

      <h3>Tooltip Slots</h3>
      <vk-table
        :headers="slotHeaders"
        :data="tooltipSlots"
      />
    </template>
  </doc-section>
</template>
