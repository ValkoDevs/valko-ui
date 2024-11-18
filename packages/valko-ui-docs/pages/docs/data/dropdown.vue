<script setup lang="ts">
import type { DropdownProps, TableItem, Item } from '#valkoui'

const form = ref<Partial<DropdownProps>>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  flat: false,
  disabled: false,
  label: 'Dropdown Menu'
})

const items: Item[] = [
  { key: 'image', title: 'Upload Image', icon: 'photo', onClick: () => useNotification({ text: 'Image Uploaded' }) },
  { key: 'edit', title: 'Edit', icon: 'edit', onClick: () => useNotification({ text: 'Editing' }) },
  { key: 'disabled', title: 'Disabled', icon: 'error-404', disabled: true },
  { key: 'video', title: 'Upload Video', icon: 'video', onClick: () => useNotification({ text: 'Video uploaded' }) },
  { key: 'delete', title: 'Delete', icon: 'trash', onClick: () => useNotification({ text: 'Item Deleted' }) }
]

const dropdownProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The Dropdown color theme.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The Dropdown variant.',
    values: 'filled, outlined, ghost, gradient',
    default: 'filled'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The Dropdown shape.',
    values: 'rounded, soft, square',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The Dropdown size.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'flatProp',
    prop: 'flat',
    required: false,
    description: 'Wheter the Dropdown is flat or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'disabledProp',
    prop: 'disabled',
    required: false,
    description: 'Wheter the Dropdown is disabled or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'labelProp',
    prop: 'label',
    required: false,
    description: 'The default slot button label.',
    values: 'string',
    default: ''
  },
  {
    key: 'iconProp',
    prop: 'icon',
    required: false,
    description: 'The default slot button icon.',
    values: 'string',
    default: 'chevron-down'
  },
  {
    key: 'itemsProp',
    prop: 'items',
    required: false,
    description: 'The Dropdown items displayed on the menu.',
    values: 'item[]',
    default: '[]'
  }
]

const itemInterface: TableItem[] = [
  {
    key: 'keyInterfaceProp',
    prop: 'key',
    required: true,
    description: 'The key of the Item',
    values: 'string | number',
    default: ''
  },
  {
    key: 'titleInterfaceProp',
    prop: 'title',
    required: true,
    description: 'The title for the Item',
    values: 'string',
    default: ''
  },
  {
    key: 'iconInterfaceProp',
    prop: 'icon',
    required: false,
    description: 'The name of the icon to display on the left side of the title',
    values: 'string',
    default: ''
  },
  {
    key: 'disabledInterfaceProp',
    prop: 'disabled',
    required: false,
    description: 'Wheter the Item is disabled or not',
    values: 'true, false',
    default: ''
  },
  {
    key: 'onClickInterfaceProp',
    prop: 'onClick',
    required: false,
    description: 'Emit for the Item',
    values: '() => void',
    default: ''
  }
]

const dropdownEmits: TableItem[] = [
  {
    key: 'itemClickEmit',
    event: 'itemClick',
    description: 'Emitted when an item in the dropdown menu is clicked.',
    values: 'Item',
    type: '(item: Item) => void'
  }
]

const dropdownSlots: TableItem[] = [
  {
    key: 'dropdownTriggerSlot',
    name: 'dropdown-trigger',
    description: 'The dropdown-trigger slot for the Dropdown. By default, it renders a `VkButton`. If you use a custom component within this slot, you can access the `props` for binding attributes like color, variant, and size, as well as an `open` prop indicating the dropdown’s current state. This allows you to integrate any custom component as the dropdown trigger, while retaining full control over its appearance and behavior.',
    example: '<template #dropdown-trigger>\n  <!-- Your custom dropdown trigger component here -->\n</template>'
  }
]
</script>

<template>
  <doc-section
    title="Dropdown"
    description="List of options that expands when the user interacts with a trigger element. Dropdowns provide a compact way to display a list of choices and are commonly used in forms and navigation menus."
  >
    <template #playground-view>
      <div class="w-full flex px-2 justify-center">
        <vk-dropdown
          :color="form.color"
          :size="form.size"
          :variant="form.variant"
          :shape="form.shape"
          :disabled="form.disabled"
          :flat="form.flat"
          :label="form.label"
          :items="items"
        />
      </div>
    </template>

    <template #playground-options>
      <vk-input
        v-model="form.label"
        size="sm"
        label="Label"
      />
      <vk-select
        v-model="form.color"
        label="Color"
        size="sm"
        :options="colorOptions"
      />
      <vk-select
        v-model="form.variant"
        label="Variant"
        size="sm"
        :options="variantOptions.withGradientAndLink"
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
      <vk-checkbox
        v-model="form.flat"
        label="Flat"
      />
      <vk-checkbox
        v-model="form.disabled"
        label="Disabled"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        gap
      >
        <vk-dropdown
          v-for="color in colorOptions"
          :key="color.value"
          :color="color.value"
          :title="color.label"
          :items="items"
          label="Dropdown Menu"
        />
      </example-section>

      <example-section
        title="Variants"
        gap
      >
        <vk-dropdown
          v-for="variant in variantOptions.withGradientAndLink"
          :key="variant.value"
          :variant="variant.value"
          :title="variant.label"
          :items="items"
          label="Dropdown Menu"
        />
      </example-section>

      <example-section
        title="Shapes"
        gap
      >
        <vk-dropdown
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          :shape="shape.value"
          :title="shape.label"
          :items="items"
          label="Dropdown Menu"
        />
      </example-section>

      <example-section
        title="Sizes"
        gap
      >
        <vk-dropdown
          v-for="size in sizeOptions.general"
          :key="size.value"
          :size="size.value"
          :title="size.label"
          :items="items"
          label="Dropdown Menu"
        />
      </example-section>

      <example-section
        title="Flat"
        gap
      >
        <vk-dropdown
          title="Flat"
          :items="items"
          label="Dropdown Menu"
        />
      </example-section>

      <example-section
        title="Disabled"
        gap
      >
        <vk-dropdown
          title="Disabled"
          disabled
          :items="items"
          label="Dropdown Menu"
        />
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Dropdown Props"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="dropdownProps"
          />
        </example-section>

        <example-section
          title="Item interface"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="itemInterface"
          />
        </example-section>

        <example-section
          title="Dropdown Emits"
          gap
        >
          <vk-table
            :headers="emitHeaders"
            :data="dropdownEmits"
          />
        </example-section>

        <example-section
          title="Dropdown Slots"
          gap
        >
          <vk-table
            :headers="slotHeaders"
            :data="dropdownSlots"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
