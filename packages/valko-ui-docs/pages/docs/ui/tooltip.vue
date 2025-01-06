<script setup lang="ts">
import type { TooltipProps, TableItem, SelectOption, Placement } from '#valkoui'

const form = ref<TooltipProps>({
  shape: 'soft',
  size: 'md',
  placement: 'top',
  content: 'Tooltip Content',
  flat: true
})

const placementOptions: SelectOption<Placement>[] = [
  { value:'top', label:'Top' },
  { value:'bottom', label:'Bottom' },
  { value:'left', label:'Left' },
  { value:'right', label:'Right' }
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
    description: 'The placement of the Tooltip.',
    values: 'top, bottom, left, right',
    default: 'top'
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

const shapeSnippet = `
<template>
  ${shapeOptions.general.map(shape => `
  <vk-tooltip shape="${shape.value}">
    <vk-button>${shape.label}</vk-button>
  </vk-tooltip>
  `).join('')}
</template>
`

const sizeSnippet = `
<template>
  ${sizeOptions.general.map(size => `
  <vk-tooltip size="${size.value}">
    <vk-button>${size.label}</vk-button>
  </vk-tooltip>
  `).join('')}
</template>
`

const placementSnippet = `
<template>
  ${placementOptions.map(placement => `
  <vk-tooltip placement="${placement.value}">
    <vk-button>${placement.label}</vk-button>
  </vk-tooltip>
  `).join('')}
</template>
`

const flatSnippet = `
<template>

  <vk-tooltip flat>
    <vk-button>Flat</vk-button>
  </vk-tooltip>

</template>
`
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
    </template>

    <template #examples>
      <example-section
        title="Shapes"
        classes="grid-cols-2 md:grid-cols-3"
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
          <code-block
            :code="shapeSnippet"
            :copy="shapeSnippet"
          />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
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
          <code-block
            :code="sizeSnippet"
            :copy="sizeSnippet"
          />
        </template>
      </example-section>

      <example-section
        title="Placements"
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
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
          <code-block
            :code="placementSnippet"
            :copy="placementSnippet"
          />
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
          <code-block
            :code="flatSnippet"
            :copy="flatSnippet"
          />
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
