<script setup lang="ts">
import type { SelectOption, MenuItem, MenuProps } from '#valkoui'

const form = ref<Partial<MenuProps>>({
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  floating: false
})

const menuItems: MenuItem[] = [
  { key: 'button', group: 'Forms', text: 'Button' },
  { key: 'input', group: 'Forms',  text:'Input' },
  { key: 'checkbox', group: 'Forms', text: 'Checkbox' }
]

const menuProps: PropData[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Menu.',
    values: 'primary, secondary, negative, warning, accent, positive',
    default: 'primary',
    apiType: 'custom-string'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Menu.',
    values: 'filled, outlined, ghost, link, line, gradient',
    default: 'filled',
    apiType: 'custom-string'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Menu buttons.',
    values: 'rounded, square, soft',
    default: 'soft',
    apiType: 'custom-string'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Menu.',
    values: 'xs, sm, md, lg',
    default: 'md',
    apiType: 'custom-string'
  },
  {
    key: 'floatingProp',
    prop: 'floating',
    required: false,
    description: 'Changes the padding of the Menu.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'activeProp',
    prop: 'active',
    required: true,
    description: 'The active element of the Menu.',
    values: 'null, string, number',
    default: 'null',
    apiType: 'primitive'
  },
  {
    key: 'itemsProp',
    prop: 'items',
    required: true,
    description: 'The Menu items.',
    values: 'MenuItem[]',
    default: '[]',
    apiType: 'custom-type'
  },
  {
    key: 'styleSlotsProp',
    prop: 'styleSlots',
    required: false,
    description: 'Customizes style slots for Menu.',
    values: 'MenuStyleSlots',
    default: '',
    apiType: 'custom-type'
  }
]

const styleSlotsInterface: PropData[] = [
  {
    key: 'group',
    prop: 'group',
    required: false,
    description: 'Styles for the group label (if grouping is used).',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'menu',
    prop: 'menu',
    required: false,
    description: 'Styles for the menu container (the <ul> element).',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'item',
    prop: 'item',
    required: false,
    description: 'Styles for each menu item container (<li> element).',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'content',
    prop: 'content',
    required: false,
    description: 'Styles for the menu item content/button.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  }
]

const menuItemsInterface: PropData[] = [
  {
    key: 'keyInterfaceMenu',
    prop: 'key',
    required: true,
    description: 'The key of the Item.',
    values: 'string | number',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'textInterfaceMenu',
    prop: 'text',
    required: true,
    description: 'The displayed name of the Item.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'groupInterfaceMenu',
    prop: 'group',
    required: false,
    description: 'The displayed name of the wrapper for the Items.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'iconInterfaceMenu',
    prop: 'icon',
    required: false,
    description: 'The icon name for the Menu item.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'disabledInterfaceMenu',
    prop: 'disabled',
    required: false,
    description: 'Wheter the Item is disabled or not.',
    values: 'boolean',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'activeInterfaceMenu',
    prop: 'active',
    required: false,
    description: 'Wheter the Item is active or not.',
    values: 'boolean',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'onClickInterfaceMenu',
    prop: 'onClick',
    required: false,
    description: 'Emit for the Item.',
    values: '() => void',
    default: '',
    apiType: 'function'
  }
]

const menuEmits: EmitData[] = [
  {
    key: 'itemClickEmit',
    event: 'itemClick',
    description: 'Emitted when an item in the Menu is clicked.',
    values: 'Item',
    type: '(item: MenuItem) => void',
    apiType: 'event'
  }
]

const menuSlots: SlotData[] = [
  {
    key: 'defaultSlot',
    name: 'default',
    description: 'Slot for the main content of the menu item.',
    example: '<template #default>\n  <p>This is the main content of the menu item.</p>\n</template>',
    apiType: 'slot'
  }
]

const generateMenuItems = (items: SelectOption[], groupName: string) => {
  return items.map(item => ({
    key: item.value,
    text: item.label,
    group: groupName
  }))
}

const activeItemsList = ref<Record<string, MenuItem['key'] | null>>({})

const onItemClick = (item: MenuItem, menuKey: string) => {
  activeItemsList.value[menuKey] = item.key
}

const activeItem = ref<MenuItem['key'] | null>(null)

const onClick = (item: MenuItem) => {
  activeItem.value = item.key
}

const generateSnippet = snippetGeneratorFactory('vk-menu')

const scriptCode = `<script setup lang="ts">
import type { MenuItem } from '#valkoui'

const menuItems: MenuItem[] = [
  { key: 'button', group: 'Forms', text: 'Button' },
  { key: 'input', group: 'Forms',  text:'Input' },
  { key: 'checkbox', group: 'Forms', text: 'Checkbox' }
]
<\u002Fscript>
`

const extraProps = ':items="menuItems"'

onMounted(() => {
  const setFirstItemActive = (options: SelectOption[], menuPrefix: string) => {
    if (!Array.isArray(options) || options.length === 0 || !options[0]?.value) return
    const firstItemKey = options[0].value
    options.forEach((_, index) => {
      const menuKey = `${menuPrefix}-${index}`
      activeItemsList.value[menuKey] = firstItemKey
      const menuItem = menuItems.find(item => item.key === firstItemKey)
      if (menuItem) menuItem.active = true
    })
  }

  setFirstItemActive(colorOptions.general, 'color-menu')
  setFirstItemActive(variantOptions.withGradientLinkAndLine, 'variant-menu')
  setFirstItemActive(shapeOptions.general, 'shape-menu')
  setFirstItemActive(sizeOptions.general, 'size-menu')

  if (Array.isArray(menuItems) && menuItems.length > 0 && menuItems[0]?.key) {
    const firstPlaygroundItemKey = menuItems[0].key
    activeItem.value = firstPlaygroundItemKey
    const firstPlaygroundItem = menuItems.find(item => item.key === firstPlaygroundItemKey)
    if (firstPlaygroundItem) firstPlaygroundItem.active = true
  }
})

const styles = {
  default: {
    slotContainer: [
      'grid-cols-2',
      'md:grid-cols-3'
    ]
  },
  sizes: {
    slotContainer: [
      'grid-cols-2',
      'md:grid-cols-3',
      'lg:grid-cols-4'
    ]
  }
}
</script>

<template>
  <doc-section
    title="Menu"
    description="A Menu component offers users a visual interface for navigating and interacting with a set of options or commands. It's commonly used to organize and present navigation choices, settings, or actions within an application's user interface."
  >
    <template #playground-view>
      <vk-menu
        :items="menuItems"
        :variant="form.variant"
        :color="form.color"
        :shape="form.shape"
        :size="form.size"
        :active="activeItem"
        :floating="form.floating"
        @item-click="onClick"
      />
    </template>
    <template #playground-options>
      <vk-select
        v-model="form.color"
        label="Color"
        size="sm"
        :options="colorOptions.general"
      />
      <vk-select
        v-model="form.variant"
        label="Variant"
        size="sm"
        :options="variantOptions.withGradientLinkAndLine"
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
        v-model="form.floating"
        label="Floating"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        :style-slots="styles.default"
      >
        <vk-menu
          v-for="(color, index) in colorOptions.general"
          :key="`color-menu-${index}`"
          :items="generateMenuItems(colorOptions.general, color.label)"
          :color="color.value"
          :active="activeItemsList[`color-menu-${index}`] ?? ''"
          @item-click="(item: MenuItem) => onItemClick(item, `color-menu-${index}`)"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('color', { values: colorOptions.general.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        :style-slots="styles.default"
      >
        <vk-menu
          v-for="(variant, index) in variantOptions.withGradientLinkAndLine"
          :key="`variant-menu-${index}`"
          :items="generateMenuItems(variantOptions.withGradientLinkAndLine, variant.label)"
          :variant="variant.value"
          :active="activeItemsList[`variant-menu-${index}`] ?? ''"
          @item-click="(item: MenuItem) => onItemClick(item, `variant-menu-${index}`)"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('variant', { values: variantOptions.withGradientLinkAndLine.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        :style-slots="styles.default"
      >
        <vk-menu
          v-for="(shape, index) in shapeOptions.general"
          :key="`shape-menu-${index}`"
          :items="generateMenuItems(shapeOptions.general, shape.label)"
          :shape="shape.value"
          :active="activeItemsList[`shape-menu-${index}`] ?? ''"
          @item-click="(item: MenuItem) => onItemClick(item, `shape-menu-${index}`)"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        :style-slots="styles.sizes"
      >
        <vk-menu
          v-for="(size, index) in sizeOptions.general"
          :key="`size-menu-${index}`"
          :items="generateMenuItems(sizeOptions.general, size.label)"
          :size="size.value"
          :active="activeItemsList[`size-menu-${index}`] ?? ''"
          @item-click="(item: MenuItem) => onItemClick(item, `size-menu-${index}`)"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section title="Floating">
        <vk-menu
          :items="menuItems"
          :active="activeItem"
          floating
          @item-click="onClick"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<boolean>('floating', { values: [true], extraProps })}`" />
        </template>
      </example-section>
    </template>

    <template #api>
      <api-table
        name="Menu"
        :tables="[
          { title: 'Props', data: menuProps, headers: 'props' },
          { title: 'Emits', data: menuEmits, headers: 'emits' },
          { title: 'Slots', data: menuSlots, headers: 'slots' },
          { title: 'MenuItem Interface', data: menuItemsInterface, headers: 'interface' },
          { title: 'Style Slots', data: styleSlotsInterface, headers: 'interface' }
        ]"
      />
    </template>
  </doc-section>
</template>
