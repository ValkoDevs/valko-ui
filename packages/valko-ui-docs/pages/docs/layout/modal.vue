<script setup lang="ts">
import type { ModalProps, SelectOption, Backdrop, TableItem } from '#valkoui'

const form = ref<ModalProps>({
  shape: 'soft',
  size: 'md',
  backdrop: 'opaque',
  title: 'Modal',
  flat: false,
  closable: true,
  isOpen: false
})

const backdropOptions: SelectOption<Backdrop>[] = [
  { value: 'opaque', label: 'Opaque' },
  { value: 'blur', label: 'Blur' },
  { value: 'transparent', label: 'Transparent' }
]

const exampleSectionForm = reactive({
  shapes: Array(shapeOptions.general.length).fill(false),
  sizes: Array(sizeOptions.withFull.length).fill(false),
  backdrop: Array(backdropOptions.length).fill(false),
  flat: false,
  closable: false
})

const modalProps: TableItem[] = [
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Modal.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Modal.',
    values: 'xs, sm, md, lg, full',
    default: 'md'
  },
  {
    key: 'isOpenProp',
    prop: 'isOpen',
    required: true,
    description: 'Wheter the Modal is open or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'titleProp',
    prop: 'title',
    required: false,
    description: 'The title of the Modal',
    values: 'string',
    default: 'Modal'
  },
  {
    key: 'backdropProp',
    prop: 'backdrop',
    required: false,
    description: 'The background backdrop displayed behind the Modal',
    values: 'opaque, blur, transparent',
    default: 'opaque'
  },
  {
    key: 'closableProp',
    prop: 'closable',
    required: false,
    description: 'Displays a close button on the Modal and allows to close it by clicking outside or pressing esc',
    values: 'true, false',
    default: 'true'
  },
  {
    key: 'flatProp',
    prop: 'flat',
    required: false,
    description: 'Wheter the Modal has a shadow or not',
    values: 'true, false',
    default: 'false'
  }
]

const modalEmits: TableItem[] = [
  {
    key: 'closeEmit',
    event: 'close',
    description: 'Emitted when the modal is closed.',
    values: '',
    type: '() => void'
  }
]

const modalSlots = [
  {
    key: 'defaultSlot',
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

          <vk-button
            color="primary"
            size="sm"
            class="self-end"
            @click="() => {form.isOpen = false}"
          >
            Accept & close
          </vk-button>
        </template>
      </vk-modal>
    </template>

    <template #playground-options>
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
        :options="sizeOptions.withFull"
      />
      <vk-input
        v-model="form.title"
        label="Title"
      />
      <vk-select
        v-model="form.backdrop"
        label="Backdrop"
        size="sm"
        :options="backdropOptions"
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
      <example-section title="Shapes">
        <div
          v-for="(shape, index) in shapeOptions.general"
          :key="shape.value"
        >
          <vk-button @click="() => {exampleSectionForm['shapes'][index] = true}">
            Open {{ shape.label }}
          </vk-button>
          <vk-modal
            :shape="shape.value"
            :is-open="exampleSectionForm['shapes'][index]"
            :title="shape.label"
            @close="() => {exampleSectionForm['shapes'][index] = false}"
          >
            <template #default>
              {{ shape.label }} Body - Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
            </template>
          </vk-modal>
        </div>
      </example-section>

      <example-section title="Sizes">
        <div
          v-for="(size, index) in sizeOptions.withFull"
          :key="size.value"
        >
          <vk-button @click="() => {exampleSectionForm['sizes'][index] = true}">
            Open {{ size.label }}
          </vk-button>
          <vk-modal
            :size="size.value"
            :is-open="exampleSectionForm['sizes'][index]"
            :title="size.label"
            @close="() => {exampleSectionForm['sizes'][index] = false}"
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
          v-for="(backdrop, index) in backdropOptions"
          :key="backdrop.value"
        >
          <vk-button @click="() => {exampleSectionForm['backdrop'][index] = true}">
            Open {{ backdrop.label }}
          </vk-button>
          <vk-modal
            :backdrop="backdrop.value"
            :is-open="exampleSectionForm['backdrop'][index]"
            :title="backdrop.label"
            @close="() => {exampleSectionForm['backdrop'][index] = false}"
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
        <vk-button @click="() => {exampleSectionForm['flat'] = true}">
          Flat
        </vk-button>
        <vk-modal
          :is-open="exampleSectionForm['flat']"
          title="Flat"
          @close="() => {exampleSectionForm['flat'] = false}"
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
        <vk-button @click="() => {exampleSectionForm['closable'] = true}">
          Closable
        </vk-button>
        <vk-modal
          :is-open="exampleSectionForm['closable']"
          title="Closable"
          closable
          @close="() => {exampleSectionForm['closable'] = false}"
        >
          <template #default>
            Closable Body - Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.

            <vk-button
              color="primary"
              size="sm"
              class="self-end"
              @click="() => {exampleSectionForm['closable'] = false}"
            >
              Accept & close
            </vk-button>
          </template>
        </vk-modal>
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section title="Modal Props">
          <vk-table
            :headers="propHeaders"
            :data="modalProps"
          />
        </example-section>

        <example-section title="Modal Emits">
          <vk-table
            :headers="emitHeaders"
            :data="modalEmits"
          />
        </example-section>

        <example-section title="Modal Slots">
          <vk-table
            :headers="slotHeaders"
            :data="modalSlots"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
