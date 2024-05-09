<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import shapeOptions from '@/data/shapeOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import emitHeaders from '@/data/emitHeaders'
import slotHeaders from '@/data/slotHeaders'

const form = ref({
  shape: 'soft',
  size: 'md',
  backdrop: 'opaque',
  title: 'Modal',
  flat: false,
  closable: true,
  isOpen: false,
  rounded: false,
  soft: false,
  square: false,
  xs: false,
  sm: false,
  md: false,
  lg: false,
  full: false,
  opaque: false,
  blur: false,
  transparent: false,
  flatExample: false,
  closableExample: false
} as Record<string, string | boolean>)

const sizes = [...sizeOptions, {
  value: 'full', label: 'Full'
}]

const backdropOptions = [
  { value: 'opaque', label: 'Opaque' },
  { value: 'blur', label: 'Blur' },
  { value: 'transparent', label: 'Transparent' }
]

const modalProps = [
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Modal.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Modal.',
    values: 'xs, sm, md, lg, full',
    default: 'md'
  },
  {
    prop: 'isOpen',
    required: true,
    description: 'Wheter the Modal is open or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'title',
    required: false,
    description: 'The title of the Modal',
    values: 'string',
    default: 'Modal'
  },
  {
    prop: 'backdrop',
    required: false,
    description: 'The background backdrop displayed behind the Modal',
    values: 'opaque, blur, transparent',
    default: 'opaque'
  },
  {
    prop: 'closable',
    required: false,
    description: 'Displays a close button on the Modal',
    values: 'true, false',
    default: 'true'
  },
  {
    prop: 'flat',
    required: false,
    description: 'Wheter the Modal has a shadow or not',
    values: 'true, false',
    default: 'false'
  }
]

const modalEmits = [
  {
    event: 'close',
    description: 'Emitted when the modal is closed.',
    values: '',
    type: '() => void'
  }
]

const modalSlots = [
  {
    name: 'default',
    description: 'Slot for the main content of the modal. This slot is typically used to include additional content inside the modal.',
    example: '<template #default>\n  <!-- Your main content goes here -->\n</template>'
  }
]
</script>

<template>
  <doc-section
    title="Modal Component"
    description="Popup window that requires user attention before proceeding. Modals are used to display important messages, gather user input, or confirm actions, and typically require user interaction before the underlying content can be accessed."
  >
    <template #playground-view>
      <vk-button @click="() => {form.isOpen = true}">
        Open Modal
      </vk-button>
      <vk-modal
        :is-open="form.isOpen"
        :size="form.size"
        :flat="form.flat"
        :shape="form.shape"
        :backdrop="form.backdrop"
        :title="form.title"
        :closable="form.closable"
        @close="() => {form.isOpen = false}"
      >
        <template #default>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
        </template>
      </vk-modal>
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
        :options="sizes"
        v-model="form.size"
      />
      <vk-input
        label="Title"
        v-model="form.title"
      />
      <vk-select
        placeholder="Backdrop"
        size="sm"
        :options="backdropOptions"
        v-model="form.backdrop"
      />
      <vk-checkbox
        v-model="form.flat"
        label="Flat"
      />
      <vk-checkbox
        v-model="form.closable"
        label="Closable"
      />
    </template>

    <template #examples>
      <example-section
        title="Shapes"
        gap
      >
        <div
          v-for="shape in shapeOptions"
          :key="shape.value"
        >
          <vk-button @click="() => {form[shape.value] = true}">
            Open {{ shape.label }}
          </vk-button>
          <vk-modal
            :shape="shape.value"
            :is-open="form[shape.value]"
            :title="shape.label"
            @close="() => {form[shape.value] = false}"
          >
            <template #default>
              {{ shape.label }} Body - Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
            </template>
          </vk-modal>
        </div>
      </example-section>

      <example-section
        title="Sizes"
        gap
      >
        <div
          v-for="size in sizes"
          :key="size.value"
        >
          <vk-button @click="() => {form[size.value] = true}">
            Open {{ size.label }}
          </vk-button>
          <vk-modal
            :size="size.value"
            :is-open="form[size.value]"
            :title="size.label"
            @close="() => {form[size.value] = false}"
          >
            <template #default>
              {{ size.label }} Body - Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
            </template>
          </vk-modal>
        </div>
      </example-section>

      <example-section
        title="Backdrops"
        gap
      >
        <div
          v-for="backdrop in backdropOptions"
          :key="backdrop.value"
        >
          <vk-button @click="() => {form[backdrop.value] = true}">
            Open {{ backdrop.label }}
          </vk-button>
          <vk-modal
            :backdrop="backdrop.value"
            :is-open="form[backdrop.value]"
            :title="backdrop.label"
            @close="() => {form[backdrop.value] = false}"
          >
            <template #default>
              {{ backdrop.label }} Body - Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
            </template>
          </vk-modal>
        </div>
      </example-section>

      <example-section
        title="Flat"
      >
        <vk-button @click="() => {form.flatExample = true}">
          Flat
        </vk-button>
        <vk-modal
          :is-open="form.flatExample"
          title="Flat"
          @close="() => {form.flatExample = false}"
        >
          <template #default>
            Flat Body - Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
          </template>
        </vk-modal>
      </example-section>

      <example-section
        title="Closable"
      >
        <vk-button @click="() => {form.closableExample = true}">
          Closable
        </vk-button>
        <vk-modal
          :is-open="form.closableExample"
          title="Closable"
          :closable="false"
          @close="() => {form.closableExample = false}"
        >
          <template #default>
            Closable Body - Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
          </template>
        </vk-modal>
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Modal Props"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="modalProps"
          />
        </example-section>

        <example-section
          title="Modal Emits"
          gap
        >
          <vk-data-table
            :headers="emitHeaders"
            :data="modalEmits"
          />
        </example-section>

        <example-section
          title="Modal Slots"
          gap
        >
          <vk-data-table
            :headers="slotHeaders"
            :data="modalSlots"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
