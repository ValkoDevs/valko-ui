<script setup lang="ts">
import { ref, reactive } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import propHeaders from '@/data/propHeaders'
import emitHeaders from '@/data/emitHeaders'
import slotHeaders from '@/data/slotHeaders'
import shapeOptions from '@/data/shapeOptions'
import sizeOptions from '@/data/sizeOptions'

const form = ref({
  shape: 'soft',
  size: 'md',
  placement: 'right',
  backdrop: 'opaque',
  title: 'Drawer',
  closable: true,
  flat: false
})

const placementOptions = [
  { value: 'right', label: 'Right' },
  { value: 'left', label: 'Left' },
  { value: 'top', label: 'Top' },
  { value: 'bottom', label: 'Bottom' }
]

const backdropOptions = [
  { value: 'opaque', label: 'Opaque' },
  { value: 'blur', label: 'Blur' },
  { value: 'Transparent', label: 'Transparent' }
]

const drawerProps = [
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
    prop: 'closable',
    required: false,
    description: 'Displays a close button on the Drawer and allows to close it by clicking outside or pressing esc',
    values: 'true, false',
    default: 'true'
  },
  {
    prop: 'flat',
    required: false,
    description: 'Wheter the Drawer has a shadow or not',
    values: 'true, false',
    default: 'false'
  }
]

const drawerEmits = [
  {
    event: 'close',
    description: 'Emitted when the drawer is closed.',
    values: '',
    type: '() => void'
  }
]

const drawerSlots = [
  {
    name: 'default',
    description: 'Slot for the main content of the drawer. This slot is typically used to include additional content inside the drawer.',
    example: '<template #default>\n  <!-- Your main content goes here -->\n</template>'
  }
]

const drawerStates = reactive<Record<string, boolean>>({})

const toggleDrawer = (drawerId: string) => {
  drawerStates[drawerId] = !drawerStates[drawerId]
}
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
        label="Title"
        v-model="form.title"
      />
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
      <vk-select
        placeholder="Placement"
        size="sm"
        :options="placementOptions"
        v-model="form.placement"
      />
      <vk-select
        placeholder="Backdrop"
        size="sm"
        :options="backdropOptions"
        v-model="form.backdrop"
      />
      <vk-checkbox
        label="Closable"
        v-model="form.closable"
      />
      <vk-checkbox
        label="Flat"
        v-model="form.flat"
      />
    </template>

    <template #examples>
      <example-section
        title="Placement"
        justify="start"
        gap
      >
        <div
          v-for="placement in placementOptions"
          :key="placement.value"
        >
          <vk-button @click="toggleDrawer(placement.value)">
            Open {{ placement.label }}
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
      </example-section>

      <example-section
        title="Shape"
        justify="start"
        gap
      >
        <div
          v-for="shape in shapeOptions"
          :key="shape.value"
        >
          <vk-button @click="toggleDrawer(shape.value)">
            Open {{ shape.label }}
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
      </example-section>

      <example-section
        title="Size"
        justify="start"
        gap
      >
        <div
          v-for="size in sizeOptions"
          :key="size.value"
        >
          <vk-button @click="toggleDrawer(size.value)">
            Open {{ size.label }}
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
      </example-section>

      <example-section
        title="Backdrop"
        justify="start"
        gap
      >
        <div
          v-for="backdrop in backdropOptions"
          :key="backdrop.value"
        >
          <vk-button @click="toggleDrawer(backdrop.value)">
            Open {{ backdrop.label }}
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
      </example-section>

      <example-section
        title="Closable"
        justify="start"
      >
        <vk-button @click="toggleDrawer('closable')">
          Open Closable
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
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Drawer Props"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="drawerProps"
          />
        </example-section>

        <example-section
          title="Drawer Emits"
          gap
        >
          <vk-table
            :headers="emitHeaders"
            :data="drawerEmits"
          />
        </example-section>

        <example-section
          title="Drawer Slots"
          gap
        >
          <vk-table
            :headers="slotHeaders"
            :data="drawerSlots"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
