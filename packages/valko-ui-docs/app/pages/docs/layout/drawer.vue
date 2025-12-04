<script setup lang="ts">
import type { DrawerProps, SelectOption, TableItem, Backdrop } from '#valkoui'

definePageMeta({
  alias: ['/docs/drawer']
})

const form = ref<Omit<DrawerProps, 'isOpen'>>({
  shape: 'soft',
  size: 'md',
  placement: 'right',
  backdrop: 'opaque',
  title: 'Drawer',
  closable: true
})

const backdropOptions: SelectOption<Backdrop>[] = [
  { value: 'opaque', label: 'Opaque' },
  { value: 'blur', label: 'Blur' },
  { value: 'transparent', label: 'Transparent' }
]

const drawerProps: TableItem[] = [
  {
    key: 'propShape',
    prop: 'shape',
    required: false,
    description: 'The shape of the Drawer.',
    values: 'soft, square, rounded',
    default: 'soft'
  },
  {
    key: 'propSize',
    prop: 'size',
    required: false,
    description: 'The size of the Drawer.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'propPlacement',
    prop: 'placement',
    required: false,
    description: 'The placement of the Drawer.',
    values: 'top, bottom, left, right',
    default: 'right'
  },
  {
    key: 'propIsOpen',
    prop: 'isOpen',
    required: true,
    description: 'Whether the Drawer is open or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'propTitle',
    prop: 'title',
    required: false,
    description: 'The title of the Drawer',
    values: 'string',
    default: 'Drawer'
  },
  {
    key: 'propBackdrop',
    prop: 'backdrop',
    required: false,
    description: 'The background backdrop displayed behind the Drawer',
    values: 'opaque, blur, transparent',
    default: 'opaque'
  },
  {
    key: 'closableProp',
    prop: 'closable',
    required: false,
    description: 'Displays a close button on the Drawer and allows to close it by clicking outside or pressing esc',
    values: 'true, false',
    default: 'true'
  },
  {
    key: 'ariaLabelledByProp',
    prop: 'aria-labelledby',
    required: false,
    description: 'Specifies the ID of the element that labels the Drawer. Required for accessibility to associate the title with the dialog.',
    values: 'string',
    default: ''
  },
  {
    key: 'ariaDescriptionProp',
    prop: 'aria-description',
    required: false,
    description: 'Provides additional descriptive text for the Drawer, improving context for screen readers. The text will be visually hidden but read by assistive technologies.',
    values: 'string',
    default: ''
  },
  {
    key: 'styleSlotsProp',
    prop: 'styleSlots',
    required: false,
    description: 'Customizes style slots for Drawer.',
    values: 'DrawerSlots',
    default: ''
  }
]

const styleSlotsInterface: TableItem[] = [
  {
    key: 'dialog',
    prop: 'dialog',
    description: 'Root dialog container for the Drawer.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'backdrop',
    prop: 'backdrop',
    description: 'Backdrop overlay behind the Drawer.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'container',
    prop: 'container',
    description: 'Outer container wrapping the Drawer content.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'content',
    prop: 'content',
    description: 'Content wrapper for transitions and layout.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'panel',
    prop: 'panel',
    description: 'Main panel element of the Drawer.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'panelChild',
    prop: 'panelChild',
    description: 'Container for the title and close button at the top of the Drawer.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'title',
    prop: 'title',
    description: 'Title text element inside the Drawer.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'closeButton',
    prop: 'closeButton',
    description: 'Close button element for dismissing the Drawer.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'closeIcon',
    prop: 'closeIcon',
    description: 'Icon inside the close button.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'slotContainer',
    prop: 'slotContainer',
    description: 'Container for Drawer slot content (main body).',
    values: 'string[]',
    default: ''
  }
]

const drawerEmits: TableItem[] = [
  {
    key: 'closeEmit',
    event: 'close',
    description: 'Emitted when the drawer is closed.',
    values: '',
    type: '() => void'
  }
]

const drawerSlots: TableItem[] = [
  {
    key: 'defaultSlot',
    name: 'default',
    description: 'Slot for the main content of the drawer. This slot is typically used to include additional content inside the drawer.',
    example: '<template #default>\n  <!-- Your main content goes here -->\n</template>'
  }
]

const drawerStates = reactive<Record<string, boolean>>({})

const toggleDrawer = (drawerId: string) => drawerStates[drawerId] = !drawerStates[drawerId]

const scriptCode = `<script setup lang="ts">
const drawerStates = reactive<Record<string, boolean>>({})

const toggleDrawer = (drawerId: string) => drawerStates[drawerId] = !drawerStates[drawerId]
<\u002Fscript>
`

const generateSnippet = snippetGeneratorFactory('vk-drawer')

const triggerSnippet = '<vk-button\n    @click="toggleDrawer(\'drawerId\')"\n  >\n    Slot Content\n  </vk-button>\n\n  <vk-drawer'

const extraProps = ':is-open="drawerStates[\'drawerId\']" @close="toggleDrawer(\'drawerId\')"'

const placementSnippet = `${scriptCode}\n${generateSnippet<string>('placement',
  {
    values: placementOptions.general.map(o => o.value),
    hasSlot: true, extraProps
  }).replace(/<vk-drawer/g, `${triggerSnippet}`)
}`

const shapeSnippet = `${scriptCode}\n${generateSnippet<string>('shape',
  {
    values: shapeOptions.general.map(o => o.value),
    hasSlot: true, extraProps
  }).replace(/<vk-drawer/g, `${triggerSnippet}`)
}`

const sizeSnippet = `${scriptCode}\n${generateSnippet<string>('size',
  {
    values: sizeOptions.general.map(o => o.value),
    hasSlot: true, extraProps
  }).replace(/<vk-drawer/g, `${triggerSnippet}`)
}`

const backdropSnippet = `${scriptCode}\n${generateSnippet<string>('backdrop',
  {
    values: backdropOptions.map(o => o.value),
    hasSlot: true, extraProps
  }).replace(/<vk-drawer/g, `${triggerSnippet}`)
}`

const closableSnippet = `${scriptCode}\n${generateSnippet<boolean>(':closable',
  {
    values: [false],
    hasSlot: true, extraProps
  }).replace(/<vk-drawer/g, `${triggerSnippet}`)
}`

const styles = generateStyles({
  default: [
    'grid-cols-[repeat(2,_minmax(0,_max-content))]',
    'md:grid-cols-[repeat(4,_minmax(0,_max-content))]'
  ],
  shapes: [
    'grid-cols-[repeat(2,_minmax(0,_max-content))]',
    'md:grid-cols-[repeat(3,_minmax(0,_max-content))]'
  ],
  backdrop: [
    'grid-cols-[repeat(2,_minmax(0,_max-content))]',
    'md:grid-cols-[repeat(3,_minmax(0,_max-content))]'
  ]
})
</script>

<template>
  <doc-section
    title="Drawer"
    description="A versatile sliding drawer component that can appear from any side of the viewport, with options for shape, size, backdrop, placement, title, shadow, and optional close functionality."
  >
    <template #playground-view>
      <vk-button @click="toggleDrawer('playground-drawer')">
        Open Drawer
      </vk-button>
      <vk-drawer
        :is-open="drawerStates['playground-drawer'] ?? false"
        :placement="form.placement"
        :backdrop="form.backdrop"
        :shape="form.shape"
        :closable="form.closable"
        :title="form.title"
        :size="form.size"
        @close="toggleDrawer('playground-drawer')"
      >
        <template #default>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus nihil, recusandae, enim sit corporis quia reprehenderit odit obcaecati, voluptas id dolor ipsam maiores at? Dolores incidunt sequi reiciendis nostrum exercitationem.

          <vk-button
            class="self-end mt-auto"
            color="negative"
            @click="toggleDrawer('playground-drawer')"
          >
            Close Drawer
          </vk-button>
        </template>
      </vk-drawer>
    </template>

    <template #playground-options>
      <vk-input
        v-model="form.title"
        label="Title"
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
      <vk-select
        v-model="form.placement"
        label="Placement"
        size="sm"
        :options="placementOptions.general"
      />
      <vk-select
        v-model="form.backdrop"
        label="Backdrop"
        size="sm"
        :options="backdropOptions"
      />
      <vk-checkbox
        v-model="form.closable"
        label="Closable"
      />
    </template>

    <template #examples>
      <example-section
        title="Placement"
        :style-slots="styles.default"
      >
        <div
          v-for="placement in placementOptions.general"
          :key="placement.value"
        >
          <vk-button @click="toggleDrawer(placement.value)">
            {{ placement.label }}
          </vk-button>
          <vk-drawer
            :is-open="drawerStates[placement.value] ?? false"
            :placement="placement.value"
            :title="placement.label"
            @close="toggleDrawer(placement.value)"
          >
            <template #default>
              {{ placement.label }} Body - Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
            </template>
          </vk-drawer>
        </div>

        <template #code>
          <code-block :code="placementSnippet" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        :style-slots="styles.shapes"
      >
        <div
          v-for="shape in shapeOptions.general"
          :key="shape.value"
        >
          <vk-button @click="toggleDrawer(shape.value)">
            {{ shape.label }}
          </vk-button>
          <vk-drawer
            :is-open="drawerStates[shape.value] ?? false"
            :shape="shape.value"
            :title="shape.label"
            @close="toggleDrawer(shape.value)"
          >
            <template #default>
              {{ shape.label }} Body - Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
            </template>
          </vk-drawer>
        </div>

        <template #code>
          <code-block :code="shapeSnippet" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        :style-slots="styles.default"
      >
        <div
          v-for="size in sizeOptions.general"
          :key="size.value"
        >
          <vk-button @click="toggleDrawer(size.value)">
            {{ size.label }}
          </vk-button>
          <vk-drawer
            :is-open="drawerStates[size.value] ?? false"
            :size="size.value"
            :title="size.label"
            @close="toggleDrawer(size.value)"
          >
            <template #default>
              {{ size.label }} Body - Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
            </template>
          </vk-drawer>
        </div>

        <template #code>
          <code-block :code="sizeSnippet" />
        </template>
      </example-section>

      <example-section
        title="Backdrops"
        :style-slots="styles.backdrop"
      >
        <div
          v-for="backdrop in backdropOptions"
          :key="backdrop.value"
        >
          <vk-button @click="toggleDrawer(backdrop.value)">
            {{ backdrop.label }}
          </vk-button>
          <vk-drawer
            :is-open="drawerStates[backdrop.value] ?? false"
            :backdrop="backdrop.value"
            :title="backdrop.label"
            @close="toggleDrawer(backdrop.value)"
          >
            <template #default>
              {{ backdrop.label }} Body - Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
            </template>
          </vk-drawer>
        </div>

        <template #code>
          <code-block :code="backdropSnippet" />
        </template>
      </example-section>

      <example-section title="Closable">
        <vk-button @click="toggleDrawer('closable')">
          Closable
        </vk-button>
        <vk-drawer
          :is-open="drawerStates['closable'] ?? false"
          title="Closable"
          :closable="false"
          @close="toggleDrawer('closable')"
        >
          <template #default>
            Closable Body - Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.

            <vk-button
              class="self-end mt-auto"
              color="negative"
              @click="toggleDrawer('closable')"
            >
              Close Drawer
            </vk-button>
          </template>
        </vk-drawer>

        <template #code>
          <code-block :code="closableSnippet" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Drawer Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="drawerProps"
      />

      <h3>Style Slots Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="styleSlotsInterface"
      />

      <h3>Drawer Emits</h3>
      <vk-table
        :headers="emitHeaders"
        :data="drawerEmits"
      />

      <h3>Drawer Slots</h3>
      <vk-table
        :headers="slotHeaders"
        :data="drawerSlots"
      />
    </template>
  </doc-section>
</template>
