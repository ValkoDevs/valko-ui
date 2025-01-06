<!-- eslint-disable no-useless-escape -->
<script setup lang="ts">
import type { DrawerProps, SelectOption, TableItem, Backdrop, Placement } from '#valkoui'

const form = ref<Omit<DrawerProps, 'isOpen'>>({
  shape: 'soft',
  size: 'md',
  placement: 'right',
  backdrop: 'opaque',
  title: 'Drawer',
  closable: true,
  flat: false
})

const placementOptions: SelectOption<Placement>[] = [
  { value: 'right', label: 'Right' },
  { value: 'left', label: 'Left' },
  { value: 'top', label: 'Top' },
  { value: 'bottom', label: 'Bottom' }
]

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
    key: 'flatProp',
    prop: 'flat',
    required: false,
    description: 'Wheter the Drawer has a shadow or not',
    values: 'true, false',
    default: 'false'
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

const toggleDrawer = (drawerId: string) => {
  drawerStates[drawerId] = !drawerStates[drawerId]
}

const scriptCode = `
<script setup lang="ts">
const drawerStates = reactive<Record<string, boolean>>({})

const toggleDrawer = (drawerId: string) => drawerStates[drawerId] = !drawerStates[drawerId]
<\/script>
`

const placementSnippet = `
${scriptCode}
<template>
${placementOptions.map(pos => `
  <vk-button @click="toggleDrawer('${pos.value}')">
    ${pos.label}
  </vk-button>

  <vk-drawer
    :is-open="drawerStates['${pos.value}']"
    placement="${pos.value}"
    @close="toggleDrawer('${pos.value}')"
  >
    Content goes here.
  </vk-drawer>`).join('\n')}

</template>
`

const shapeSnippet = `
${scriptCode}
<template>
${shapeOptions.general.map(shape => `
  <vk-button @click="toggleDrawer('${shape.value}')">
    ${shape.label}
  </vk-button>

  <vk-drawer
    :is-open="drawerStates['${shape.value}']"
    shape="${shape.value}"
    @close="toggleDrawer('${shape.value}')"
  >
    Content goes here.
  </vk-drawer>`).join('\n')}

</template>
`

const sizeSnippet = `
${scriptCode}
<template>
${sizeOptions.general.map(size => `
  <vk-button @click="toggleDrawer('${size.value}')">
    ${size.label}
  </vk-button>

  <vk-drawer
    :is-open="drawerStates['${size.value}']"
    size="${size.value}"
    @close="toggleDrawer('${size.value}')"
  >
    Content goes here.
  </vk-drawer>`).join('\n')}

</template>
`

const backdropSnippet = `
${scriptCode}
<template>
${backdropOptions.map(backdrop => `
  <vk-button @click="toggleDrawer('${backdrop.value}')">
    ${backdrop.label}
  </vk-button>

  <vk-drawer
    :is-open="drawerStates['${backdrop.value}']"
    backdrop="${backdrop.value}"
    @close="toggleDrawer('${backdrop.value}')"
  >
    Content goes here.
  </vk-drawer>`).join('\n')}

</template>
`

const closableSnippet = `
<script setup lang="ts">
const isOpen = ref(false)

const toggleDrawer = () => isOpen = !isOpen
<\/script>

<template>

  <vk-button @click="toggleDrawer">
    Closable
  </vk-button>

  <vk-drawer
    :is-open="isOpen"
    closable
    @close="toggleDrawer"
  >
    Content goes here.
  </vk-drawer>

</template>
`

const flatSnippet = `
<script setup lang="ts">
const isOpen = ref(false)

const toggleDrawer = () => isOpen = !isOpen
<\/script>

<template>

  <vk-button @click="toggleDrawer">
    Flat
  </vk-button>

  <vk-drawer
    :is-open="isOpen"
    flat
    @close="toggleDrawer"
  >
    Content goes here.
  </vk-drawer>

</template>
`
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
        :is-open="drawerStates['playground-drawer']"
        :placement="form.placement"
        :backdrop="form.backdrop"
        :shape="form.shape"
        :closable="form.closable"
        :title="form.title"
        :flat="form.flat"
        :size="form.size"
        @close="toggleDrawer('playground-drawer')"
      >
        <template #default>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus nihil, recusandae, enim sit corporis quia reprehenderit odit obcaecati, voluptas id dolor ipsam maiores at? Dolores incidunt sequi reiciendis nostrum exercitationem.
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
        :options="placementOptions"
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
      <vk-checkbox
        v-model="form.flat"
        label="Flat"
      />
    </template>

    <template #examples>
      <example-section
        title="Placement"
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="placement in placementOptions"
          :key="placement.value"
        >
          <vk-button @click="toggleDrawer(placement.value)">
            {{ placement.label }}
          </vk-button>
          <vk-drawer
            :is-open="drawerStates[placement.value]"
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
          <code-block
            :code="placementSnippet"
            :copy="placementSnippet"
          />
        </template>
      </example-section>

      <example-section
        title="Shape"
        classes="grid-cols-2 md:grid-cols-3"
      >
        <div
          v-for="shape in shapeOptions.general"
          :key="shape.value"
        >
          <vk-button @click="toggleDrawer(shape.value)">
            {{ shape.label }}
          </vk-button>
          <vk-drawer
            :is-open="drawerStates[shape.value]"
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
          <code-block
            :code="shapeSnippet"
            :copy="shapeSnippet"
          />
        </template>
      </example-section>

      <example-section
        title="Size"
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="size in sizeOptions.general"
          :key="size.value"
        >
          <vk-button @click="toggleDrawer(size.value)">
            {{ size.label }}
          </vk-button>
          <vk-drawer
            :is-open="drawerStates[size.value]"
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
          <code-block
            :code="sizeSnippet"
            :copy="sizeSnippet"
          />
        </template>
      </example-section>

      <example-section
        title="Backdrop"
        classes="grid-cols-2 md:grid-cols-3"
      >
        <div
          v-for="backdrop in backdropOptions"
          :key="backdrop.value"
        >
          <vk-button @click="toggleDrawer(backdrop.value)">
            {{ backdrop.label }}
          </vk-button>
          <vk-drawer
            :is-open="drawerStates[backdrop.value]"
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
          <code-block
            :code="backdropSnippet"
            :copy="backdropSnippet"
          />
        </template>
      </example-section>

      <example-section title="Closable">
        <vk-button @click="toggleDrawer('closable')">
          Closable
        </vk-button>
        <vk-drawer
          :is-open="drawerStates['closable']"
          title="Closable"
          closable
          @close="toggleDrawer('closable')"
        >
          <template #default>
            Closable Body - Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
          </template>
        </vk-drawer>

        <template #code>
          <code-block
            :code="closableSnippet"
            :copy="closableSnippet"
          />
        </template>
      </example-section>

      <example-section title="Flat">
        <vk-button @click="toggleDrawer('flat')">
          Flat
        </vk-button>
        <vk-drawer
          :is-open="drawerStates['flat']"
          title="Flat"
          flat
          @close="toggleDrawer('flat')"
        >
          <template #default>
            Closable Body - Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
          </template>
        </vk-drawer>

        <template #code>
          <code-block
            :code="flatSnippet"
            :copy="flatSnippet"
          />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Drawer Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="drawerProps"
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
