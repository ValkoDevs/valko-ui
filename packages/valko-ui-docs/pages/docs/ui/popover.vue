<script setup lang="ts">
import type { PopoverProps, TableItem, Placement, SelectOption } from '#valkoui'

const form = ref<PopoverProps>({
  shape: 'soft',
  isOpen: false,
  flat: false,
  placement: 'bottom'
})

const placementOptions: SelectOption<Placement>[] = [
  { value: 'top', label: 'Top' },
  { value: 'bottom', label: 'Bottom' },
  { value: 'left', label: 'Left' },
  { value: 'right', label: 'Right' }
]

const popoverProps: TableItem[] = [
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Popover.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'isOpenProp',
    prop: 'isOpen',
    required: false,
    description: 'The state of the Popover.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'placementProp',
    prop: 'placement',
    required: false,
    description: 'The placement of the Popover.',
    values: 'top, bottom, left, right',
    default: 'bottom'
  },
  {
    key: 'flatProp',
    prop: 'flat',
    required: false,
    description: 'Whether the Popover displays a shadow.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'textProp',
    prop: 'text',
    required: false,
    description: 'Text displayed instead of the slot popover-content if the slot is not provided.',
    values: 'string',
    default: ''
  },
  {
    key: 'panelClassesProp',
    prop: 'panelClasses',
    required: false,
    description: 'Allows you to apply custom CSS classes to the popover content for further customization (e.g., for styling the background, padding, borders, etc.). Accepts a single string or an array of strings.',
    values: 'string | string[]',
    default: ''
  }
]

const popoverEmits: TableItem[] = [
  {
    key: 'closeEmit',
    event: 'close',
    description: 'Emitted when a click is detected outside the popover.',
    values: '',
    type: '() => void'
  }
]

const popoverSlots: TableItem[] = [
  {
    key: 'defaultSlot',
    name: 'default',
    description: 'Slot for the component that will display the Popover.',
    example: '<template #default>\n  <vk-button>Click Me.</vk-button>\n</template>'
  },
  {
    key: 'popoverContentSlot',
    name: 'popover-content',
    description: 'Slot for the main content of the Popover.',
    example: '<template #popover-content>\n  <p>This is the main content of the Popover.</p>\n</template>'
  }
]

const popoverStates = reactive({
  placements: Array(placementOptions.length).fill(false),
  shapes: Array(shapeOptions.general.length).fill(false)
})

const togglePopover = (category: keyof Record<'placements' | 'shapes', boolean>, index: number) => {
  popoverStates[category][index] = !popoverStates[category][index]
}

const { generalCode } = useCodeBlock('vk-popover')
</script>

<template>
  <doc-section
    title="Popover"
    description="A versatile UI element designed to display additional content upon user interaction. It can be used for tooltips, dropdowns, or any contextual information that needs to be shown when a user interacts with a specific element on the page."
  >
    <template #playground-view>
      <vk-popover
        :shape="form.shape"
        :is-open="form.isOpen"
        :flat="form.flat"
        :placement="form.placement"
        text="Popover Content"
        @close="form.isOpen = false"
      >
        <vk-button @click="() => { form.isOpen = !form.isOpen }">
          Click Me
        </vk-button>
      </vk-popover>
    </template>

    <template #playground-options>
      <vk-select
        v-model="form.shape"
        label="Shape"
        size="sm"
        :options="shapeOptions.general"
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
        <vk-popover
          v-for="(shape, index) in shapeOptions.general"
          :key="shape.value"
          :shape="shape.value"
          :is-open="popoverStates['shapes'][index]"
          :text="shape.label"
          @close="() => popoverStates['shapes'][index] = false"
        >
          <vk-button @click="() => togglePopover('shapes', index)">
            {{ shape.label }}
          </vk-button>
        </vk-popover>

        <template #code>
          <code-block :code="generalCode('shape', shapeOptions.general)" />
        </template>
      </example-section>

      <example-section
        title="Placement"
        classes="grid-cols-2 md:grid-cols-4"
      >
        <vk-popover
          v-for="(placement, index) in placementOptions"
          :key="placement.value"
          :placement="placement.value"
          :is-open="popoverStates['placements'][index]"
          :text="placement.label"
          @close="() => popoverStates['placements'][index] = false"
        >
          <vk-button @click="() => togglePopover('placements', index)">
            {{ placement.label }}
          </vk-button>
        </vk-popover>

        <template #code>
          <code-block :code="generalCode('placement', placementOptions)" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Popover Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="popoverProps"
      />

      <h3>Popover Emits</h3>
      <vk-table
        :headers="emitHeaders"
        :data="popoverEmits"
      />

      <h3>Popover Slots</h3>
      <vk-table
        :headers="slotHeaders"
        :data="popoverSlots"
      />
    </template>
  </doc-section>
</template>
