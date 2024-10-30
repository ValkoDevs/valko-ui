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

const shapePopoverStates = ref(shapeOptions.general.map(() => false))
const placementPopoverStates = ref(placementOptions.map(() => false))

const toggleShapePopover = (index: number) => {
  shapePopoverStates.value[index] = !shapePopoverStates.value[index]
}

const togglePlacementPopover = (index: number) => {
  placementPopoverStates.value[index] = !placementPopoverStates.value[index]
}
</script>

<template>
  <doc-section
    title="Popover"
    description="A versatile UI element designed to display additional content upon user interaction. It can be used for tooltips, dropdowns, or any contextual information that needs to be shown when a user interacts with a specific element on the page."
  >
    <template #playground-view>
      <div class="w-full flex justify-center p-4">
        <vk-popover
          :shape="form.shape"
          :is-open="form.isOpen"
          :flat="form.flat"
          :placement="form.placement"
          text="Popover Content"
        >
          <vk-button @click="() => { form.isOpen = !form.isOpen }">
            Click Me
          </vk-button>
        </vk-popover>
      </div>
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
        justify="start"
        gap
      >
        <vk-popover
          v-for="(shape, index) in shapeOptions.general"
          :key="shape.value"
          :shape="shape.value"
          :is-open="shapePopoverStates[index]"
          :text="shape.label"
        >
          <vk-button @click="() => toggleShapePopover(index)">
            {{ shape.label }}
          </vk-button>
        </vk-popover>
      </example-section>

      <example-section
        title="Placement"
        justify="start"
        gap
      >
        <vk-popover
          v-for="(placement, index) in placementOptions"
          :key="placement.value"
          :placement="placement.value"
          :is-open="placementPopoverStates[index]"
          :text="placement.label"
        >
          <vk-button @click="() => togglePlacementPopover(index)">
            {{ placement.label }}
          </vk-button>
        </vk-popover>
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Popover Props"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="popoverProps"
          />
        </example-section>

        <example-section
          title="Popover Slots"
          gap
        >
          <vk-table
            :headers="slotHeaders"
            :data="popoverSlots"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
