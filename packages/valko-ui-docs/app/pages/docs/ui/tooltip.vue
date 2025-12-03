<script setup lang="ts">
import type { TooltipProps, TableItem } from '#valkoui'

const form = ref<TooltipProps>({
  shape: 'soft',
  size: 'md',
  placement: 'auto',
  alignment: undefined,
  content: 'Tooltip Content',
  elevated: true
})

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
    key: 'elevatedProp',
    prop: 'elevated',
    required: false,
    description: 'Elevates the tooltip by one level.',
    values: 'true, false',
    default: 'true'
  },
  {
    key: 'styleSlotsProp',
    prop: 'styleSlots',
    required: false,
    description: 'Customizes style slots for Tooltip.',
    values: 'TooltipSlots',
    default: ''
  }
]

const styleSlotsInterface: TableItem[] = [
  {
    key: 'container',
    prop: 'container',
    description: 'Root container for the tooltip popover.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'tip',
    prop: 'tip',
    description: 'Styles for the tooltip content element.',
    values: 'string[]',
    default: ''
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

const styles = {
  shapes: [
    'grid-cols-[repeat(2,_minmax(0,_max-content))]',
    'md:grid-cols-[repeat(3,_minmax(0,_max-content))]'
  ],
  sizes: [
    'grid-cols-[repeat(2,_minmax(0,_max-content))]',
    'md:grid-cols-[repeat(4,_minmax(0,_max-content))]'
  ],
  placements: [
    'grid-cols-[repeat(2,_minmax(0,_max-content))]',
    'md:grid-cols-[repeat(3,_minmax(0,_max-content))]',
    'lg:grid-cols-[repeat(5,_minmax(0,_max-content))]'
  ],
  alignments: [
    'grid-cols-[repeat(2,_minmax(0,_max-content))]',
    'md:grid-cols-[repeat(3,_minmax(0,_max-content))]'
  ]
}
</script>

<template>
  <doc-section
    title="Tooltip"
    description="Popup message that provides additional accent when hovering over an element. Tooltips are used to provide supplementary accent or context about interface elements, helping users understand their purpose or functionality."
  >
    <template #playground-view>
      <vk-tooltip
        :size="form.size"
        :shape="form.shape"
        :placement="form.placement"
        :content="form.content"
        :elevated="form.elevated"
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
        :options="placementOptions.withAuto"
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
        v-model="form.elevated"
        label="Elevated"
      />
    </template>

    <template #examples>
      <example-section
        title="Shapes"
        :style-slots="{ slotContainer: styles.shapes }"
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
        :style-slots="{ slotContainer: styles.sizes }"
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
        :style-slots="{ slotContainer: styles.placements }"
      >
        <vk-tooltip
          v-for="placement in placementOptions.withAuto"
          :key="placement.value"
          :content="placement.label"
          :placement="placement.value"
        >
          <vk-button>
            {{ placement.label }}
          </vk-button>
        </vk-tooltip>

        <template #code>
          <code-block :code="generateSnippet<string>('placement', {values: placementOptions.withAuto.map(o => o.value), customSlot, extraProps})" />
        </template>
      </example-section>

      <example-section
        title="Alignments"
        :style-slots="{ slotContainer: styles.alignments }"
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

      <example-section title="Elevated">
        <vk-tooltip
          elevated
          content="Elevated"
        >
          <vk-button>
            Elevated
          </vk-button>
        </vk-tooltip>

        <template #code>
          <code-block :code="generateSnippet<boolean>('elevated', {values: [true], customSlot, extraProps})" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Tooltip Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="tooltipProps"
      />

      <h3>Style Slots Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="styleSlotsInterface"
      />

      <h3>Tooltip Slots</h3>
      <vk-table
        :headers="slotHeaders"
        :data="tooltipSlots"
      />
    </template>
  </doc-section>
</template>
