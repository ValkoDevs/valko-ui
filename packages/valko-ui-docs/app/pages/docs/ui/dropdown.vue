<script setup lang="ts">
import type { DropdownProps, TableItem, Item } from '#valkoui'

const form = ref<Partial<DropdownProps>>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  placement: 'auto',
  alignment: undefined,
  disabled: false,
  elevated: false,
  label: 'Dropdown Menu'
})

const items: Item[] = [
  { key: 'image', title: 'Upload Image', icon: 'photo', onClick: () => useNotification({ text: 'Image Uploaded' }) },
  { key: 'edit', title: 'Edit', icon: 'edit', onClick: () => useNotification({ text: 'Editing' }) },
  { key: 'disabled', title: 'Disabled', icon: 'ban', disabled: true },
  { key: 'video', title: 'Upload Video', icon: 'video', onClick: () => useNotification({ text: 'Video uploaded' }) },
  { key: 'delete', title: 'Delete', icon: 'trash', onClick: () => useNotification({ text: 'Item Deleted' }) }
]

const dropdownProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The Dropdown color theme.',
    values: 'primary, secondary, negative, warning, accent, positive',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The Dropdown variant.',
    values: 'filled, outlined, ghost, gradient, link',
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
    key: 'isOpenProp',
    prop: 'isOpen',
    required: false,
    description: 'Controls the open state of the Dropdown, if not provided it will be managed internally.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'elevatedProp',
    prop: 'elevated',
    required: false,
    description: 'Wheter the Dropdown is elevated or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'placementProp',
    prop: 'placement',
    required: false,
    description: 'Defines where the Dropdown should appear relative to the reference element. If set to "auto", the Dropdown will automatically choose the best placement based on available space.',
    values: 'bottom, top, left, right, auto',
    default: 'auto'
  },
  {
    key: 'alignmentProp',
    prop: 'alignment',
    required: false,
    description: 'Specifies how the Dropdown is aligned within its placement. If not set, it defaults to the best fit based on available space.',
    values: 'start, center, end',
    default: 'undefined'
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
    required: true,
    description: 'The Dropdown items displayed on the menu.',
    values: 'item[]',
    default: '[]'
  },
  {
    key: 'styleSlotsProp',
    prop: 'styleSlots',
    required: false,
    description: 'Customizes style slots for Dropdown.',
    values: 'DropdownStyleSlots',
    default: ''
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

const styleSlotsInterface = [
  {
    key: 'container',
    prop: 'container',
    description: 'Root element of the Dropdown (vk-popover).',
    values: 'string[]',
    default: ''
  },
  {
    key: 'triggerButton',
    prop: 'triggerButton',
    description: 'Styles for the default trigger button.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'icon',
    prop: 'icon',
    description: 'Styles for the default icon on the trigger.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'itemsMenu',
    prop: 'itemsMenu',
    description: 'Main container for the Dropdown items.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'itemsButton',
    prop: 'itemsButton',
    description: 'Styles for the Dropdown items buttons.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'itemsIcon',
    prop: 'itemsIcon',
    description: 'Styles for the Dropdown items icons.',
    values: 'string[]',
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
  },
  {
    key: 'clickEmit',
    event: 'click',
    description: 'Emitted when the dropdown trigger is clicked.',
    values: 'MouseEvent',
    type: '(event: MouseEvent) => void'
  }
]

const dropdownSlots: TableItem[] = [
  {
    key: 'dropdownTriggerSlot',
    name: 'dropdown-trigger',
    description: 'The dropdown-trigger slot for the Dropdown. By default, it renders a `VkButton`.\nIf you use a custom component within this slot, you can access the `props` for binding attributes like color, variant, and size.\nAdditionally, the slot exposes:\n- `toggle`: a function to open or close the dropdown.\n- `open`: a boolean indicating the current open state.\nThis lets you integrate any custom component as the trigger while reacting to the dropdown’s state.',
    example: '<template #dropdown-trigger="{ toggle }">\n  <!-- Your custom dropdown trigger component here -->\n</template>'
  }
]

const scriptCode = `
<script setup lang="ts">
import type { Item } from '#valkoui'

const items: Item[] = [
  { key: 'image', title: 'Upload Image', icon: 'photo' },
  { key: 'edit', title: 'Edit', icon: 'edit' },
  { key: 'disabled', title: 'Disabled', icon: 'negative', disabled: true },
  { key: 'video', title: 'Upload Video', icon: 'video' },
  { key: 'delete', title: 'Delete', icon: 'trash' }
]
<\u002Fscript>
`

const generateSnippet = snippetGeneratorFactory('vk-dropdown')

const extraProps = ':items="items"'
</script>

<template>
  <doc-section
    title="Dropdown"
    description="List of options that expands when the user interacts with a trigger element. Dropdowns provide a compact way to display a list of choices and are commonly used in forms and navigation menus."
  >
    <template #playground-view>
      <vk-dropdown
        :color="form.color"
        :size="form.size"
        :variant="form.variant"
        :elevated="form.elevated"
        :shape="form.shape"
        :disabled="form.disabled"
        :label="form.label"
        :items="items"
        :placement="form.placement"
        :alignment="form.alignment"
      />
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
        :options="colorOptions.withSurface"
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
        label="Elevated"
      />
      <vk-checkbox
        v-model="form.disabled"
        label="Disabled"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        classes="grid-cols-[repeat(2,_minmax(0,_max-content))] md:grid-cols-[repeat(3,_minmax(0,_max-content))] xl:grid-cols-[repeat(6,_minmax(0,_max-content))]"
      >
        <vk-dropdown
          v-for="color in colorOptions.withSurface"
          :key="color.value"
          :color="color.value"
          :title="color.label"
          :items="items"
          :label="color.label"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('color', { values: colorOptions.withSurface.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        classes="grid-cols-[repeat(2,_minmax(0,_max-content))] md:grid-cols-[repeat(3,_minmax(0,_max-content))] lg:grid-cols-[repeat(5,_minmax(0,_max-content))]"
      >
        <vk-dropdown
          v-for="variant in variantOptions.withGradientAndLink"
          :key="variant.value"
          :variant="variant.value"
          :title="variant.label"
          :items="items"
          :label="variant.label"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('variant', { values: variantOptions.withGradientAndLink.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        classes="grid-cols-[repeat(2,_minmax(0,_max-content))] md:grid-cols-[repeat(3,_minmax(0,_max-content))]"
      >
        <vk-dropdown
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          :shape="shape.value"
          :title="shape.label"
          :items="items"
          :label="shape.label"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        classes="grid-cols-[repeat(2,_minmax(0,_max-content))] md:grid-cols-[repeat(3,_minmax(0,_max-content))] lg:grid-cols-[repeat(4,_minmax(0,_max-content))]"
      >
        <vk-dropdown
          v-for="size in sizeOptions.general"
          :key="size.value"
          :size="size.value"
          :title="size.label"
          :items="items"
          :label="size.label"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section
        title="Placements"
        classes="grid-cols-[repeat(2,_minmax(0,_max-content))] md:grid-cols-[repeat(3,_minmax(0,_max-content))] lg:grid-cols-[repeat(5,_minmax(0,_max-content))]"
      >
        <vk-dropdown
          v-for="placement in placementOptions.withAuto"
          :key="placement.value"
          :placement="placement.value"
          :title="placement.label"
          :items="items"
          :label="placement.label"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('placement', { values: placementOptions.withAuto.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section
        title="Alignments"
        classes="grid-cols-[repeat(2,_minmax(0,_max-content))] md:grid-cols-[repeat(3,_minmax(0,_max-content))]"
      >
        <vk-dropdown
          v-for="alignment in alignmentOptions"
          :key="alignment.value"
          :alignment="alignment.value"
          :title="alignment.label"
          :items="items"
          :label="alignment.label"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('alignment', { values: alignmentOptions.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section title="Elevated">
        <vk-dropdown
          title="Elevated"
          :items="items"
          label="Elevated"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<boolean>('elevated', { values: [true], extraProps })}`" />
        </template>
      </example-section>

      <example-section title="Disabled">
        <vk-dropdown
          title="Disabled"
          disabled
          :items="items"
          label="Disabled"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<boolean>('disabled', { values: [true], extraProps })}`" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Dropdown Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="dropdownProps"
      />
      <h3>Style Slots Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="styleSlotsInterface"
      />
      <h3>Item interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="itemInterface"
      />

      <h3>Dropdown Emits</h3>
      <vk-table
        :headers="emitHeaders"
        :data="dropdownEmits"
      />

      <h3>Dropdown Slots</h3>
      <vk-table
        :headers="slotHeaders"
        :data="dropdownSlots"
      />
    </template>
  </doc-section>
</template>
