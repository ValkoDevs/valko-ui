<script setup lang="ts">
import type { MenuItem, TableItem, MenuProps } from '#valkoui'

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

const menuProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Menu.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Menu.',
    values: 'filled, outlined, ghost, link, line, gradient',
    default: 'filled'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Menu buttons.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Menu.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'floatingProp',
    prop: 'floating',
    required: false,
    description: 'Changes the padding of the Menu.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'activeProp',
    prop: 'active',
    required: true,
    description: 'The active element of the Menu.',
    values: 'null, string, number',
    default: 'null'
  },
  {
    key: 'itemsProp',
    prop: 'items',
    required: true,
    description: 'The Menu items.',
    values: 'MenuItem[]',
    default: '[]'
  }
]

const menuItemsInterface: TableItem[] = [
  {
    key: 'keyInterfaceMenu',
    prop: 'key',
    required: true,
    description: 'The key of the Item.',
    values: 'string | number',
    default: ''
  },
  {
    key: 'textInterfaceMenu',
    prop: 'text',
    required: true,
    description: 'The displayed name of the Item.',
    values: 'string',
    default: ''
  },
  {
    key: 'groupInterfaceMenu',
    prop: 'group',
    required: false,
    description: 'The displayed name of the wrapper for the Items.',
    values: 'string',
    default: ''
  },
  {
    key: 'iconInterfaceMenu',
    prop: 'icon',
    required: false,
    description: 'The icon name for the Menu item.',
    values: 'string',
    default: ''
  },
  {
    key: 'disabledInterfaceMenu',
    prop: 'disabled',
    required: false,
    description: 'Wheter the Item is disabled or not.',
    values: 'true, false',
    default: ''
  },
  {
    key: 'activeInterfaceMenu',
    prop: 'active',
    required: false,
    description: 'Wheter the Item is active or not.',
    values: 'true, false',
    default: ''
  },
  {
    key: 'onClickInterfaceMenu',
    prop: 'onClick',
    required: false,
    description: 'Emit for the Item.',
    values: '() => void',
    default: ''
  }
]

const menuEmits: TableItem[] = [
  {
    key: 'itemClickEmit',
    event: 'itemClick',
    description: 'Emitted when an item in the Menu is clicked.',
    values: 'Item',
    type: '(item: MenuItem) => void'
  }
]

const menuSlots: TableItem[] = [
  {
    key: 'defaultSlot',
    name: 'default',
    description: 'Slot for the main content of the menu item.',
    example: '<template #default>\n  <p>This is the main content of the menu item.</p>\n</template>'
  }
]

// active, onClick & menu generation for example-section

const generateMenuItems = (items: { value: string; label: string }[], groupName: string) => {
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

// active & onClick for playground menu

const activeItem = ref<MenuItem['key'] | null>(null)

const onClick = (item: MenuItem) => {
  activeItem.value = item.key
}

onMounted(() => {
  // Initialize every menu with the first item active
  colorOptions.forEach((_, index) => {
    // Get the key of the first element in the array
    const firstItemKey = colorOptions[0].value
    // Create a unique menu key based on the index
    const menuKey = `color-menu-${index}`
    // Set the value of the active item in the menu list to the key of the first item
    activeItemsList.value[menuKey] = firstItemKey
    // Find the object of the first element in the menuItems array
    const menuItem = menuItems.find(item => item.key === firstItemKey)
    // If the object of the first element is found
    if (menuItem) {
      // Set the 'active' property to true
      menuItem.active = true
    }
  })


  variantOptions.withGradientLinkAndLine.forEach((_, index) => {
    const firstItemKey = variantOptions.withGradientLinkAndLine[0].value
    const menuKey = `variant-menu-${index}`
    activeItemsList.value[menuKey] = firstItemKey
    const menuItem = menuItems.find(item => item.key === firstItemKey)
    if (menuItem) {
      menuItem.active = true
    }
  })

  shapeOptions.general.forEach((_, index) => {
    const firstItemKey = shapeOptions.general[0].value
    const menuKey = `shape-menu-${index}`
    activeItemsList.value[menuKey] = firstItemKey
    const menuItem = menuItems.find(item => item.key === firstItemKey)
    if (menuItem) {
      menuItem.active = true
    }
  })

  sizeOptions.general.forEach((_, index) => {
    const firstItemKey = sizeOptions.general[0].value
    const menuKey = `size-menu-${index}`
    activeItemsList.value[menuKey] = firstItemKey
    const menuItem = menuItems.find(item => item.key === firstItemKey)
    if (menuItem) {
      menuItem.active = true
    }
  })

  // Initialize the playground menu with the first item active
  const firstPlaygroundItemKey = menuItems[0].key
  activeItem.value = firstPlaygroundItemKey
  const firstPlaygroundItem = menuItems.find(item => item.key === firstPlaygroundItemKey)
  if (firstPlaygroundItem) {
    firstPlaygroundItem.active = true
  }
})
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
        :options="colorOptions"
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
      <example-section title="Colors">
        <vk-menu
          v-for="(color, index) in colorOptions"
          :key="`color-menu-${index}`"
          :items="generateMenuItems(colorOptions, color.label)"
          :color="color.value"
          :active="activeItemsList[`color-menu-${index}`]"
          @item-click="(item: MenuItem) => onItemClick(item, `color-menu-${index}`)"
        />
      </example-section>

      <example-section title="Variants">
        <vk-menu
          v-for="(variant, index) in variantOptions.withGradientLinkAndLine"
          :key="`variant-menu-${index}`"
          :items="generateMenuItems(variantOptions.withGradientLinkAndLine, variant.label)"
          :variant="variant.value"
          :active="activeItemsList[`variant-menu-${index}`]"
          @item-click="(item: MenuItem) => onItemClick(item, `variant-menu-${index}`)"
        />
      </example-section>

      <example-section title="Shapes">
        <vk-menu
          v-for="(shape, index) in shapeOptions.general"
          :key="`shape-menu-${index}`"
          :items="generateMenuItems(shapeOptions.general, shape.label)"
          :shape="shape.value"
          :active="activeItemsList[`shape-menu-${index}`]"
          @item-click="(item: MenuItem) => onItemClick(item, `shape-menu-${index}`)"
        />
      </example-section>

      <example-section title="Sizes">
        <vk-menu
          v-for="(size, index) in sizeOptions.general"
          :key="`size-menu-${index}`"
          :items="generateMenuItems(sizeOptions.general, size.label)"
          :size="size.value"
          :active="activeItemsList[`size-menu-${index}`]"
          @item-click="(item: MenuItem) => onItemClick(item, `size-menu-${index}`)"
        />
      </example-section>

      <example-section title="Floating">
        <vk-menu
          :items="menuItems"
          :active="activeItem"
          floating
          @item-click="onClick"
        />
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section title="Menu Props">
          <vk-table
            :headers="propHeaders"
            :data="menuProps"
          />
        </example-section>

        <example-section title="Menu Items Interface">
          <vk-table
            :headers="propHeaders"
            :data="menuItemsInterface"
          />
        </example-section>

        <example-section title="Menu Emits">
          <vk-table
            :headers="emitHeaders"
            :data="menuEmits"
          />
        </example-section>

        <example-section title="Menu Slots">
          <vk-table
            :headers="slotHeaders"
            :data="menuSlots"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
