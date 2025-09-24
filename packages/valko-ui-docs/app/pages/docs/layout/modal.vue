<script setup lang="ts">
import type { ModalProps, SelectOption, Backdrop, TableItem } from '#valkoui'

const form = ref<ModalProps>({
  shape: 'soft',
  size: 'md',
  backdrop: 'opaque',
  title: 'Modal',
  closable: true,
  isOpen: false
})

const backdropOptions: SelectOption<Backdrop>[] = [
  { value: 'opaque', label: 'Opaque' },
  { value: 'blur', label: 'Blur' },
  { value: 'transparent', label: 'Transparent' }
]

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
    key: 'ariaLabelledByProp',
    prop: 'aria-labelledby',
    required: false,
    description: 'Specifies the ID of the element that labels the Modal. Required for accessibility to associate the title with the dialog.',
    values: 'string',
    default: ''
  },
  {
    key: 'ariaDescriptionProp',
    prop: 'aria-description',
    required: false,
    description: 'Provides additional descriptive text for the Modal, improving context for screen readers. The text will be visually hidden but read by assistive technologies.',
    values: 'string',
    default: ''
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

const modalStates = reactive<Record<string, boolean>>({})

const toggleModal = (modalId: string) => modalStates[modalId] = !modalStates[modalId]

const scriptCode = `<script setup lang="ts">
const modalStates = reactive<Record<string, boolean>>({})

const toggleModal = (modalId: string) => modalStates[modalId] = !modalStates[modalId]
<\u002Fscript>
`

const generateSnippet = snippetGeneratorFactory('vk-modal')

const triggerSnippet = '<vk-button\n    @click="toggleModal(\'modalId\')"\n  >\n    Slot Content\n  </vk-button>\n\n  <vk-modal'

const extraProps = ':is-open="modalStates[\'modalId\']" @close="toggleModal(\'modalId\')"'

const shapeSnippet = `${scriptCode}\n${generateSnippet<string>('shape',
  {
    values: shapeOptions.general.map(o => o.value),
    hasSlot: true, extraProps
  }).replace(/<vk-modal/g, `${triggerSnippet}`)
}`

const sizeSnippet = `${scriptCode}\n${generateSnippet<string>('size',
  {
    values: sizeOptions.general.map(o => o.value),
    hasSlot: true, extraProps
  }).replace(/<vk-modal/g, `${triggerSnippet}`)
}`

const backdropSnippet = `${scriptCode}\n${generateSnippet<string>('backdrop',
  {
    values: backdropOptions.map(o => o.value),
    hasSlot: true, extraProps
  }).replace(/<vk-modal/g, `${triggerSnippet}`)
}`

const closableSnippet = `${scriptCode}\n${generateSnippet<string>(':closable',
  {
    values: ['false'],
    hasSlot: true, extraProps
  }).replace(/<vk-modal/g, `${triggerSnippet}`)
}`
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
            color="positive"
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
        v-model="form.closable"
        label="Closable"
      />
    </template>

    <template #examples>
      <example-section
        title="Shapes"
        classes="grid-cols-[repeat(2,_minmax(0,_max-content))] md:grid-cols-[repeat(3,_minmax(0,_max-content))]"
      >
        <div
          v-for="shape in shapeOptions.general"
          :key="shape.value"
        >
          <vk-button @click="toggleModal(shape.value)">
            {{ shape.label }}
          </vk-button>
          <vk-modal
            :shape="shape.value"
            :is-open="modalStates[shape.value]"
            :title="shape.label"
            @close="toggleModal(shape.value)"
          >
            <template #default>
              {{ shape.label }} Body - Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
            </template>
          </vk-modal>
        </div>

        <template #code>
          <code-block :code="shapeSnippet" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        classes="grid-cols-[repeat(2,_minmax(0,_max-content))] md:grid-cols-[repeat(3,_minmax(0,_max-content))] lg:grid-cols-[repeat(6,_minmax(0,_max-content))]"
      >
        <div
          v-for="size in sizeOptions.withFull"
          :key="size.value"
        >
          <vk-button @click="toggleModal(size.value)">
            {{ size.label }}
          </vk-button>
          <vk-modal
            :size="size.value"
            :is-open="modalStates[size.value]"
            :title="size.label"
            @close="toggleModal(size.value)"
          >
            <template #default>
              {{ size.label }} Body - Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
            </template>
          </vk-modal>
        </div>

        <template #code>
          <code-block :code="sizeSnippet" />
        </template>
      </example-section>

      <example-section
        title="Backdrops"
        classes="grid-cols-[repeat(2,_minmax(0,_max-content))] md:grid-cols-[repeat(3,_minmax(0,_max-content))]"
      >
        <div
          v-for="backdrop in backdropOptions"
          :key="backdrop.value"
        >
          <vk-button @click="toggleModal(backdrop.value)">
            {{ backdrop.label }}
          </vk-button>
          <vk-modal
            :backdrop="backdrop.value"
            :is-open="modalStates[backdrop.value]"
            :title="backdrop.label"
            @close="toggleModal(backdrop.value)"
          >
            <template #default>
              {{ backdrop.label }} Body - Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
            </template>
          </vk-modal>
        </div>

        <template #code>
          <code-block :code="backdropSnippet" />
        </template>
      </example-section>

      <example-section title="Closable">
        <vk-button @click="toggleModal('closable')">
          Closable
        </vk-button>
        <vk-modal
          :is-open="modalStates['closable']"
          title="Closable"
          :closable="false"
          @close="toggleModal('closable')"
        >
          <template #default>
            Closable Body - Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.

            <vk-button
              color="positive"
              size="sm"
              class="self-end"
              @click="toggleModal('closable')"
            >
              Accept & close
            </vk-button>
          </template>
        </vk-modal>

        <template #code>
          <code-block :code="closableSnippet" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Modal Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="modalProps"
      />

      <h3>Modal Emits</h3>
      <vk-table
        :headers="emitHeaders"
        :data="modalEmits"
      />

      <h3>Modal Slots</h3>
      <vk-table
        :headers="slotHeaders"
        :data="modalSlots"
      />
    </template>
  </doc-section>
</template>
