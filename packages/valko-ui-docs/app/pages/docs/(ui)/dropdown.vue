<script setup lang="ts">
import type { DropdownProps, Item } from '#valkoui'

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

const dropdownProps: PropData[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The Dropdown color theme.',
    values: 'primary, secondary, negative, warning, accent, positive',
    default: 'primary',
    apiType: 'custom-string'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The Dropdown variant.',
    values: 'filled, outlined, ghost, gradient, link',
    default: 'filled',
    apiType: 'custom-string'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The Dropdown shape.',
    values: 'rounded, soft, square',
    default: 'soft',
    apiType: 'custom-string'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The Dropdown size.',
    values: 'xs, sm, md, lg',
    default: 'md',
    apiType: 'custom-string'
  },
  {
    key: 'isOpenProp',
    prop: 'isOpen',
    required: false,
    description: 'Controls the open state of the Dropdown, if not provided it will be managed internally.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'elevatedProp',
    prop: 'elevated',
    required: false,
    description: 'Wheter the Dropdown is elevated or not.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'placementProp',
    prop: 'placement',
    required: false,
    description: 'Defines where the Dropdown should appear relative to the reference element. If set to "auto", the Dropdown will automatically choose the best placement based on available space.',
    values: 'bottom, top, left, right, auto',
    default: 'auto',
    apiType: 'custom-string'
  },
  {
    key: 'alignmentProp',
    prop: 'alignment',
    required: false,
    description: 'Specifies how the Dropdown is aligned within its placement. If not set, it defaults to the best fit based on available space.',
    values: 'start, center, end',
    default: 'undefined',
    apiType: 'custom-string'
  },
  {
    key: 'disabledProp',
    prop: 'disabled',
    required: false,
    description: 'Wheter the Dropdown is disabled or not.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'labelProp',
    prop: 'label',
    required: false,
    description: 'The default slot button label.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'iconProp',
    prop: 'icon',
    required: false,
    description: 'The default slot button icon.',
    values: 'string',
    default: 'chevron-down',
    apiType: 'primitive'
  },
  {
    key: 'itemsProp',
    prop: 'items',
    required: true,
    description: 'The Dropdown items displayed on the menu.',
    values: 'item[]',
    default: '[]',
    apiType: 'custom-type'
  },
  {
    key: 'styleSlotsProp',
    prop: 'styleSlots',
    required: false,
    description: 'Customizes style slots for Dropdown.',
    values: 'DropdownStyleSlots',
    default: '',
    apiType: 'custom-type'
  }
]

const itemInterface: PropData[] = [
  {
    key: 'keyInterfaceProp',
    prop: 'key',
    required: true,
    description: 'The key of the Item',
    values: 'string | number',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'titleInterfaceProp',
    prop: 'title',
    required: true,
    description: 'The title for the Item',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'iconInterfaceProp',
    prop: 'icon',
    required: false,
    description: 'The name of the icon to display on the left side of the title',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'disabledInterfaceProp',
    prop: 'disabled',
    required: false,
    description: 'Wheter the Item is disabled or not',
    values: 'boolean',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'onClickInterfaceProp',
    prop: 'onClick',
    required: false,
    description: 'Emit for the Item',
    values: '() => void',
    default: '',
    apiType: 'function'
  }
]

const styleSlotsInterface: PropData[] = [
  {
    key: 'container',
    prop: 'container',
    required: false,
    description: 'Root element of the Dropdown (vk-popover).',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'triggerButton',
    prop: 'triggerButton',
    required: false,
    description: 'Styles for the default trigger button.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'icon',
    prop: 'icon',
    required: false,
    description: 'Styles for the default icon on the trigger.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'panel',
    prop: 'panel',
    required: false,
    description: 'The panel element of the popover containing the dropdown items.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'itemsMenu',
    prop: 'itemsMenu',
    required: false,
    description: 'Main container for the Dropdown items.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'itemsButton',
    prop: 'itemsButton',
    required: false,
    description: 'Styles for the Dropdown items buttons.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'itemsIcon',
    prop: 'itemsIcon',
    required: false,
    description: 'Styles for the Dropdown items icons.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  }
]

const dropdownEmits: EmitData[] = [
  {
    key: 'itemClickEmit',
    event: 'itemClick',
    description: 'Emitted when an item in the dropdown menu is clicked.',
    values: 'Item',
    type: '(item: Item) => void',
    apiType: 'event'
  },
  {
    key: 'clickEmit',
    event: 'click',
    description: 'Emitted when the dropdown trigger is clicked.',
    values: 'MouseEvent',
    type: '(event: MouseEvent) => void',
    apiType: 'event'
  }
]

const dropdownSlots: SlotData[] = [
  {
    key: 'dropdownTriggerSlot',
    name: 'dropdown-trigger',
    description: 'The dropdown-trigger slot for the Dropdown. By default, it renders a `VkButton`.\nIf you use a custom component within this slot, you can access the `props` for binding attributes like color, variant, and size.\nAdditionally, the slot exposes:\n- `toggle`: a function to open or close the dropdown.\n- `open`: a boolean indicating the current open state.\nThis lets you integrate any custom component as the trigger while reacting to the dropdown’s state.',
    example: '<template #dropdown-trigger="{ toggle }">\n  <!-- Your custom dropdown trigger component here -->\n</template>',
    apiType: 'slot'
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

const styles = {
  colors: {
    slotContainer: [
      'grid-cols-[repeat(2,_minmax(0,_max-content))]',
      'md:grid-cols-[repeat(3,_minmax(0,_max-content))]',
      'xl:grid-cols-[repeat(6,_minmax(0,_max-content))]'
    ]
  },
  variants: {
    slotContainer: [
      'grid-cols-[repeat(2,_minmax(0,_max-content))]',
      'md:grid-cols-[repeat(3,_minmax(0,_max-content))]',
      'lg:grid-cols-[repeat(5,_minmax(0,_max-content))]'
    ]
  },
  shapes: {
    slotContainer: [
      'grid-cols-[repeat(2,_minmax(0,_max-content))]',
      'md:grid-cols-[repeat(3,_minmax(0,_max-content))]'
    ]
  },
  sizes: {
    slotContainer: [
      'grid-cols-[repeat(2,_minmax(0,_max-content))]',
      'md:grid-cols-[repeat(3,_minmax(0,_max-content))]',
      'lg:grid-cols-[repeat(4,_minmax(0,_max-content))]'
    ]
  },
  placements: {
    slotContainer: [
      'grid-cols-[repeat(2,_minmax(0,_max-content))]',
      'md:grid-cols-[repeat(3,_minmax(0,_max-content))]',
      'lg:grid-cols-[repeat(5,_minmax(0,_max-content))]'
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
        :style-slots="styles.colors"
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
        :style-slots="styles.variants"
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
        :style-slots="styles.shapes"
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
        :style-slots="styles.sizes"
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
        :style-slots="styles.placements"
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
        :style-slots="styles.alignments"
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
      <api-table
        name="Dropdown"
        :tables="[
          { title: 'Props', data: dropdownProps, headers: 'props' },
          { title: 'Emits', data: dropdownEmits, headers: 'emits' },
          { title: 'Slots', data: dropdownSlots, headers: 'slots' },
          { title: 'Item', data: itemInterface, headers: 'interface' },
          { title: 'Style Slots', data: styleSlotsInterface, headers: 'interface' }
        ]"
      />
    </template>
  </doc-section>
</template>
