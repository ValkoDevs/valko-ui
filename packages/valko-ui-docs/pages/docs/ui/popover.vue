<script setup lang="ts">
import type { PopoverProps, TableItem } from '#valkoui'

const form = ref<PopoverProps>({
  shape: 'soft',
  placement: 'auto',
  alignment: undefined,
  isOpen: false,
  elevated: false,
  condensed: false
})

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
    description: 'Defines where the Popover should appear relative to the reference element. If set to "auto", the Popover will automatically choose the best placement based on available space.',
    values: 'bottom, top, left, right, auto',
    default: 'auto'
  },
  {
    key: 'alignmentProp',
    prop: 'alignment',
    required: false,
    description: 'Specifies how the Popover is aligned within its placement. If not set, it defaults to the best fit based on available space.',
    values: 'start, center, end',
    default: 'undefined'
  },
  {
    key: 'elevatedProp',
    prop: 'elevated',
    required: false,
    description: 'Whether the Popover is elevated, this will increase the level of the shadow.',
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
    key: 'condensedProp',
    prop: 'condensed',
    required: false,
    description: 'Whether the Popover is condensed, this will remove the padding for the panel.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'classesProp',
    prop: 'classes',
    required: false,
    description: 'Allows you to apply custom CSS classes to the popover content for further customization (e.g., for styling the background, padding, borders, etc.). Accepts a single string or an array of strings.',
    values: 'string | string[]',
    default: '[]'
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
        classes="grid-cols-[repeat(2,_minmax(0,_max-content))] md:grid-cols-[repeat(3,_minmax(0,_max-content))]"
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
        title="Placement"
        classes="grid-cols-[repeat(2,_minmax(0,_max-content))] md:grid-cols-[repeat(5,_minmax(0,_max-content))]"
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
        title="Alignment"
        classes="grid-cols-[repeat(2,_minmax(0,_max-content))] md:grid-cols-[repeat(3,_minmax(0,_max-content))]"
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
