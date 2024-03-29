<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import shapeOptions from '@/data/shapeOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import slotHeaders from '@/data/slotHeaders'

const form = ref({
  shape: 'soft',
  size: 'md',
  placement: 'top',
  content: 'Tooltip Content',
  flat: false
})

const placementOptions = [
  { value:'top', label:'Top' },
  { value:'bottom', label:'Bottom' },
  { value:'left', label:'Left' },
  { value:'right', label:'Right' }
]

const tooltipProps = [
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Tooltip.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Tooltip.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'placement',
    required: false,
    description: 'The placement of the Tooltip.',
    values: 'top, bottom, left, right',
    default: 'top'
  },
  {
    prop: 'content',
    required: true,
    description: 'The content of the Tooltip.',
    values: 'string',
    default: ''
  },
  {
    prop: 'flat',
    required: false,
    description: 'Determines whether to display a shadow for the Tooltip.',
    values: 'true, false',
    default: 'false'
  }
]

const tooltipSlots = [
  {
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
      <vk-input
        label="Content"
        v-model="form.content"
      />
      <vk-select
        placeholder="Placement"
        size="sm"
        :options="placementOptions"
        v-model="form.placement"
      />
      <vk-checkbox
        label="Flat"
        v-model="form.flat"
      />
    </template>

    <template #examples>
      <example-section
        title="Shapes"
        gap
      >
        <vk-tooltip
          v-for="shape in shapeOptions"
          :key="shape.value"
          :content="shape.label"
          :shape="shape.value"
        >
          <vk-button>
            {{ shape.label }}
          </vk-button>
        </vk-tooltip>
      </example-section>

      <example-section
        title="Sizes"
        gap
      >
        <vk-tooltip
          v-for="size in sizeOptions"
          :key="size.value"
          :content="size.label"
          :size="size.value"
        >
          <vk-button>
            {{ size.label }}
          </vk-button>
        </vk-tooltip>
      </example-section>

      <example-section
        title="Placements"
        gap
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
      </example-section>

      <example-section
        title="Flat"
      >
        <vk-tooltip
          flat
          content="Flat"
        >
          <vk-button>
            Flat
          </vk-button>
        </vk-tooltip>
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Tooltip Props"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="tooltipProps"
          />
        </example-section>

        <example-section
          title="Tooltip Slots"
          gap
        >
          <vk-data-table
            :headers="slotHeaders"
            :data="tooltipSlots"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
