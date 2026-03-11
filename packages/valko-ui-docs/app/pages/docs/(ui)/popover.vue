<script setup lang="ts">
import type { PopoverProps } from '#valkoui'

const form = ref<PopoverProps>({
  shape: 'soft',
  placement: 'auto',
  alignment: undefined,
  isOpen: false,
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
    description: 'The state of the Popover.',
    values: 'boolean',
    default: 'false',
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
    description: 'Text displayed instead of the slot popover-content if the slot is not provided.',
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
    key: 'classesProp',
    prop: 'classes',
    required: false,
    description: 'Allows you to apply custom CSS classes to the popover content for further customization (e.g., for styling the background, padding, borders, etc.). Accepts a single string or an array of strings.',
    values: 'string | string[]',
    default: '[]',
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
    key: 'closeEmit',
    event: 'close',
    description: 'Emitted when a click is detected outside the popover.',
    values: '',
    type: '() => void',
    apiType: 'event'
  }
]

const popoverSlots: SlotData[] = [
  {
    key: 'defaultSlot',
    name: 'default',
    description: 'Slot for the component that will display the Popover.',
    example: '<template #default>\n  <vk-button>\n    Click Me.\n  </vk-button>\n</template>',
    apiType: 'slot'
  },
  {
    key: 'popoverContentSlot',
    name: 'popover-content',
    description: 'Slot for the main content of the Popover.',
    example: '<template #popover-content>\n  <p>\n    This is the main content of the Popover.\n  </p>\n</template>',
    apiType: 'slot'
  }
]

const popoverStates = reactive<Record<string, boolean>>({})

const togglePopover = (popoverId: string) => popoverStates[popoverId] = !popoverStates[popoverId]

const handleClose = (popoverId: string) => popoverStates[popoverId] = false

const scriptCode = `<script setup lang="ts">
const popoverStates = reactive<Record<string, boolean>>({})

const togglePopover = (popoverId: string) => popoverStates[popoverId] = !popoverStates[popoverId]

const handleClose = (popoverId: string) => popoverStates[popoverId] = false
<\u002Fscript>
`

const generateSnippet = snippetGeneratorFactory('vk-popover')

const customSlot = '<vk-button\n      @click="togglePopover(\'popoverId\')"\n    >\n      Slot Content\n    </vk-button>'

const extraProps = ':is-open="popoverStates[\'popoverId\']" @close="handleClose(\'popoverId\')"'

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
        :is-open="form.isOpen"
        :elevated="form.elevated"
        :condensed="form.condensed"
        :placement="form.placement"
        :alignment="form.alignment"
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
          :is-open="popoverStates[shape.value]"
          :text="shape.label"
          @close="handleClose(shape.value)"
        >
          <vk-button @click="togglePopover(shape.value)">
            {{ shape.label }}
          </vk-button>
        </vk-popover>

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value), customSlot, extraProps })}`" />
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
          :is-open="popoverStates[placement.value]"
          :text="placement.label"
          @close="handleClose(placement.value)"
        >
          <vk-button @click="togglePopover(placement.value)">
            {{ placement.label }}
          </vk-button>
        </vk-popover>

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('placement', { values: placementOptions.withAuto.map(o => o.value), customSlot, extraProps })}`" />
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
          :is-open="popoverStates[alignment.value]"
          :text="alignment.label"
          @close="handleClose(alignment.value)"
        >
          <vk-button @click="togglePopover(alignment.value)">
            {{ alignment.label }}
          </vk-button>
        </vk-popover>

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('alignment', { values: alignmentOptions.map(o => o.value), customSlot, extraProps })}`" />
        </template>
      </example-section>

      <example-section title="Elevated">
        <vk-popover
          elevated
          :is-open="popoverStates.elevated"
          text="Elevated"
          @close="handleClose('elevated')"
        >
          <vk-button @click="togglePopover('elevated')">
            Elevated
          </vk-button>
        </vk-popover>

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<boolean>('elevated', { values: [true], customSlot, extraProps })}`" />
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
          { title: 'Style Slots', data: styleSlotsInterface, headers: 'interface' }
        ]"
      />
    </template>
  </doc-section>
</template>
