<script setup lang="ts">
import type { PopoverProps } from '#valkoui'

const form = ref<PopoverProps>({
  shape: 'soft',
  placement: 'auto',
  alignment: undefined,
  elevated: false,
  condensed: false
})

const popoverProps: PropData[] = [
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Popover.',
    values: 'rounded, square, soft',
    default: 'soft',
    apiType: 'custom-string'
  },
  {
    key: 'isOpenProp',
    prop: 'isOpen',
    required: false,
    description: 'Controls whether the Popover is visible. When omitted, the component manages its own open state internally (uncontrolled mode). When provided, the component becomes controlled and the state must be updated through the update:isOpen event.',
    values: 'boolean',
    default: 'undefined',
    apiType: 'primitive'
  },
  {
    key: 'placementProp',
    prop: 'placement',
    required: false,
    description: 'Defines where the Popover should appear relative to the reference element. If set to "auto", the Popover will automatically choose the best placement based on available space.',
    values: 'bottom, top, left, right, auto',
    default: 'auto',
    apiType: 'custom-string'
  },
  {
    key: 'alignmentProp',
    prop: 'alignment',
    required: false,
    description: 'Specifies how the Popover is aligned within its placement. If not set, it defaults to the best fit based on available space.',
    values: 'start, center, end',
    default: 'undefined',
    apiType: 'custom-string'
  },
  {
    key: 'elevatedProp',
    prop: 'elevated',
    required: false,
    description: 'Whether the Popover is elevated, this will increase the level of the shadow.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'textProp',
    prop: 'text',
    required: false,
    description: 'Text displayed inside the Popover panel when the panel slot is not provided.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'condensedProp',
    prop: 'condensed',
    required: false,
    description: 'Whether the Popover is condensed, this will remove the padding for the panel.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'ariaLabelProp',
    prop: 'ariaLabel',
    required: false,
    description: 'Accessible label for the popover panel when no visible heading is provided.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'ariaLabelledbyProp',
    prop: 'ariaLabelledBy',
    required: false,
    description: 'ID of the element that labels the popover.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'ariaDescribedbyProp',
    prop: 'ariaDescribedBy',
    required: false,
    description: 'ID of the element that describes the popover’s content.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'styleSlotsProp',
    prop: 'styleSlots',
    required: false,
    description: 'Customizes style slots for Popover.',
    values: 'PopoverSlots',
    default: '',
    apiType: 'custom-type'
  }
]

const styleSlotsInterface: PropData[] = [
  {
    key: 'container',
    prop: 'container',
    required: false,
    description: 'Root container for the Popover.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'slotContainer',
    prop: 'slotContainer',
    required: false,
    description: 'Container for the trigger slot (the element that opens the popover).',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'panel',
    prop: 'panel',
    required: false,
    description: 'Panel element that displays the popover content.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  }
]

const popoverEmits: EmitData[] = [
  {
    key: 'update:isOpen',
    event: 'update:isOpen',
    description: 'Emitted when the open state changes. Provides the new open state value.',
    values: 'boolean',
    type: '(value: boolean) => void',
    apiType: 'event'
  }
]

const popoverSlots: SlotData[] = [
  {
    key: 'triggerSlot',
    name: 'trigger',
    description: 'Slot for the element that triggers the Popover. Exposes the current open state and a function to update it.',
    example: `<template #trigger="{ isOpen, setOpen }">
  <vk-button @click="setOpen(!isOpen)">
    Click Me
  </vk-button>
</template>`,
    apiType: 'slot'
  },
  {
    key: 'panelSlot',
    name: 'panel',
    description: 'Slot for the Popover content. Exposes the current open state and a function to update it.',
    example: `<template #panel="{ isOpen, setOpen }">
  <div>
    Popover content
  </div>
</template>`,
    apiType: 'slot'
  }
]

const slotPropsInterface: PropData[] = [
  {
    key: 'isOpen',
    prop: 'isOpen',
    required: false,
    description: 'Current open state of the Popover.',
    values: 'boolean',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'setOpen',
    prop: 'setOpen',
    required: false,
    description: 'Function used to update the Popover open state.',
    values: '(value: boolean) => void',
    default: '',
    apiType: 'function'
  }
]

const generateSnippet = snippetGeneratorFactory('vk-popover')
const open = ref(false)

const triggerUncontrolled = `<template #trigger="{ isOpen, setOpen }">
      <vk-button @click="setOpen(!isOpen)">
        Slot Content
      </vk-button>
    </template>`

const triggerControlled = `<script>
const open = ref(false)
<\u002Fscript>

<vk-popover v-model:is-open="open">
  <template #trigger>
    <vk-button @click="open = !open">
      Slot Content
    </vk-button>
  </template>
</vk-popover>
`

const styles = {
  shapes: {
    slotContainer: [
      'grid-cols-[repeat(2,_minmax(0,_max-content))]',
      'md:grid-cols-[repeat(3,_minmax(0,_max-content))]'
    ]
  },
  placements: {
    slotContainer: [
      'grid-cols-[repeat(2,_minmax(0,_max-content))]',
      'md:grid-cols-[repeat(5,_minmax(0,_max-content))]'
    ]
  },
  alignments: {
    slotContainer: [
      'grid-cols-[repeat(2,_minmax(0,_max-content))]',
      'md:grid-cols-[repeat(3,_minmax(0,_max-content))]'
    ]
  }
}
</script>

<template>
  <doc-section
    title="Popover"
    description="A versatile UI element designed to display additional content upon user interaction. It can be used for tooltips, dropdowns, or any contextual accent that needs to be shown when a user interacts with a specific element on the page."
  >
    <template #playground-view>
      <vk-popover
        :shape="form.shape"
        :elevated="form.elevated"
        :condensed="form.condensed"
        :placement="form.placement"
        :alignment="form.alignment"
        text="Popover Content"
      >
        <template #trigger="{ isOpen, setOpen }">
          <vk-button @click="setOpen(!isOpen)">
            Click Me
          </vk-button>
        </template>
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
        :options="placementOptions.withAuto"
      />
      <vk-select
        v-model="form.alignment"
        label="Alignment"
        size="sm"
        :options="alignmentOptions"
      />
      <vk-checkbox
        v-model="form.elevated"
        label="elevated"
      />
      <vk-checkbox
        v-model="form.condensed"
        label="Condensed"
      />
    </template>

    <template #examples>
      <example-section
        title="Shapes"
        :style-slots="styles.shapes"
      >
        <vk-popover
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          :shape="shape.value"
          :text="shape.label"
        >
          <template #trigger="{ setOpen, isOpen }">
            <vk-button @click="setOpen(!isOpen)">
              {{ shape.label }}
            </vk-button>
          </template>
        </vk-popover>

        <template #code>
          <code-block :code="generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value), customSlot: triggerUncontrolled })" />
        </template>
      </example-section>

      <example-section
        title="Placements"
        :style-slots="styles.placements"
      >
        <vk-popover
          v-for="placement in placementOptions.withAuto"
          :key="placement.value"
          :placement="placement.value"
          :text="placement.label"
        >
          <template #trigger="{ setOpen, isOpen }">
            <vk-button @click="setOpen(!isOpen)">
              {{ placement.label }}
            </vk-button>
          </template>
        </vk-popover>

        <template #code>
          <code-block :code="generateSnippet<string>('placement', { values: placementOptions.withAuto.map(o => o.value), customSlot: triggerUncontrolled })" />
        </template>
      </example-section>

      <example-section
        title="Alignments"
        :style-slots="styles.alignments"
      >
        <vk-popover
          v-for="alignment in alignmentOptions"
          :key="alignment.value"
          :alignment="alignment.value"
          :text="alignment.label"
        >
          <template #trigger="{ setOpen, isOpen }">
            <vk-button @click="setOpen(!isOpen)">
              {{ alignment.label }}
            </vk-button>
          </template>
        </vk-popover>

        <template #code>
          <code-block :code="generateSnippet<string>('alignment', { values: alignmentOptions.map(o => o.value), customSlot: triggerUncontrolled })" />
        </template>
      </example-section>

      <example-section title="Elevated">
        <vk-popover
          elevated
          text="Elevated"
        >
          <template #trigger="{ setOpen, isOpen }">
            <vk-button @click="setOpen(!isOpen)">
              Elevated
            </vk-button>
          </template>
        </vk-popover>

        <template #code>
          <code-block :code="generateSnippet<boolean>('elevated', { values: [true], customSlot: triggerUncontrolled })" />
        </template>
      </example-section>

      <example-section title="Controlled">
        <vk-popover
          v-model:is-open="open"
          text="Controlled"
        >
          <template #trigger>
            <vk-button @click="open = !open">
              Controlled
            </vk-button>
          </template>
        </vk-popover>

        <template #code>
          <code-block :code="triggerControlled" />
        </template>
      </example-section>
    </template>

    <template #api>
      <api-table
        name="Popover"
        :tables="[
          { title: 'Props', data: popoverProps, headers: 'props' },
          { title: 'Emits', data: popoverEmits, headers: 'emits' },
          { title: 'Slots', data: popoverSlots, headers: 'slots' },
          { title: 'Slot Props', data: slotPropsInterface, headers: 'interface' },
          { title: 'Style Slots', data: styleSlotsInterface, headers: 'interface' }
        ]"
      />
    </template>
  </doc-section>
</template>
