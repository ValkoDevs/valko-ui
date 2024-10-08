<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { MenuItem } from '@valko-ui/components'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import colorOptions from '@/data/colorOptions'
import variantWithGradient from '@/data/variantWithGradient'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import shapeOptions from '@/data/shapeOptions'
import emitHeaders from '@/data/emitHeaders'
import slotHeaders from '@/data/slotHeaders'

const form = ref({
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  floating: false
})

const variants = [
  ...variantWithGradient,
  { value: 'link', label: 'Link' },
  { value: 'line', label: 'Line' }
]

const menuItems: MenuItem[] = [
  { key: 'button', group: 'Forms', text: 'Button' },
  { key: 'input', group: 'Forms',  text:'Input' },
  { key: 'checkbox', group: 'Forms', text: 'Checkbox' }
]

const menuProps = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Menu.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'primary'
  },
  {
    prop: 'variant',
    required: false,
    description: 'The variant of the Menu.',
    values: 'filled, outlined, ghost, link, line, gradient',
    default: 'filled'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Menu buttons.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Menu.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'floating',
    required: false,
    description: 'Changes the padding of the Menu.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'active',
    required: true,
    description: 'The active element of the Menu.',
    values: 'null, string, number',
    default: 'null'
  },
  {
    prop: 'items',
    required: true,
    description: 'The Menu items.',
    values: 'MenuItem[]',
    default: '[]'
  }
]

const menuItemsInterface = [
  {
    prop: 'key',
    required: true,
    description: 'The key of the Item.',
    values: 'string | number',
    default: ''
  },
  {
    prop: 'text',
    required: true,
    description: 'The displayed name of the Item.',
    values: 'string',
    default: ''
  },
  {
    prop: 'group',
    required: false,
    description: 'The displayed name of the wrapper for the Items.',
    values: 'string',
    default: ''
  },
  {
    prop: 'icon',
    required: false,
    description: 'The icon name for the Menu item.',
    values: 'string',
    default: ''
  },
  {
    prop: 'disabled',
    required: false,
    description: 'Wheter the Item is disabled or not.',
    values: 'true, false',
    default: ''
  },
  {
    prop: 'active',
    required: false,
    description: 'Wheter the Item is active or not.',
    values: 'true, false',
    default: ''
  },
  {
    prop: 'onClick',
    required: false,
    description: 'Emit for the Item.',
    values: '() => void',
    default: ''
  }
]

const menuEmits = [
  {
    event: 'itemClick',
    description: 'Emitted when an item in the Menu is clicked.',
    values: 'Item',
    type: '(item: MenuItem) => void'
  }
]

const menuSlots = [
  {
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


  variants.forEach((_, index) => {
    const firstItemKey = variants[0].value
    const menuKey = `variant-menu-${index}`
    activeItemsList.value[menuKey] = firstItemKey
    const menuItem = menuItems.find(item => item.key === firstItemKey)
    if (menuItem) {
      menuItem.active = true
    }
  })

  shapeOptions.forEach((_, index) => {
    const firstItemKey = shapeOptions[0].value
    const menuKey = `shape-menu-${index}`
    activeItemsList.value[menuKey] = firstItemKey
    const menuItem = menuItems.find(item => item.key === firstItemKey)
    if (menuItem) {
      menuItem.active = true
    }
  })

  sizeOptions.forEach((_, index) => {
    const firstItemKey = sizeOptions[0].value
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
        placeholder="Color"
        size="sm"
        :options="colorOptions"
        v-model="form.color"
      />
      <vk-select
        placeholder="Variant"
        size="sm"
        :options="variants"
        v-model="form.variant"
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
      <vk-checkbox
        label="Floating"
        v-model="form.floating"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        justify="start"
        gap
      >
        <vk-menu
          v-for="(color, index) in colorOptions"
          :key="`color-menu-${index}`"
          :items="generateMenuItems(colorOptions, color.label)"
          :color="color.value"
          :active="activeItemsList[`color-menu-${index}`]"
          @item-click="(item: MenuItem) => onItemClick(item, `color-menu-${index}`)"
        />
      </example-section>

      <example-section
        title="Variants"
        justify="start"
        gap
      >
        <vk-menu
          v-for="(variant, index) in variants"
          :key="`variant-menu-${index}`"
          :items="generateMenuItems(variants, variant.label)"
          :variant="variant.value"
          :active="activeItemsList[`variant-menu-${index}`]"
          @item-click="(item: MenuItem) => onItemClick(item, `variant-menu-${index}`)"
        />
      </example-section>

      <example-section
        title="Shapes"
        justify="start"
        gap
      >
        <vk-menu
          v-for="(shape, index) in shapeOptions"
          :key="`shape-menu-${index}`"
          :items="generateMenuItems(shapeOptions, shape.label)"
          :shape="shape.value"
          :active="activeItemsList[`shape-menu-${index}`]"
          @item-click="(item: MenuItem) => onItemClick(item, `shape-menu-${index}`)"
        />
      </example-section>

      <example-section
        title="Sizes"
        justify="start"
        gap
      >
        <vk-menu
          v-for="(size, index) in sizeOptions"
          :key="`size-menu-${index}`"
          :items="generateMenuItems(sizeOptions, size.label)"
          :size="size.value"
          :active="activeItemsList[`size-menu-${index}`]"
          @item-click="(item: MenuItem) => onItemClick(item, `size-menu-${index}`)"
        />
      </example-section>

      <example-section
        title="Floating"
        justify="start"
        gap
      >
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
        <example-section
          title="Menu Props"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="menuProps"
          />
        </example-section>

        <example-section
          title="Menu Items Interface"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="menuItemsInterface"
          />
        </example-section>

        <example-section
          title="Menu Emits"
          gap
        >
          <vk-table
            :headers="emitHeaders"
            :data="menuEmits"
          />
        </example-section>

        <example-section
          title="Menu Slots"
          gap
        >
          <vk-table
            :headers="slotHeaders"
            :data="menuSlots"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
