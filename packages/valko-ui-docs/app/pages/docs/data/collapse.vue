<script setup lang="ts">
import type { CollapseProps, TableItem } from '#valkoui'

definePageMeta({
  alias: ['/docs/collapse']
})

const form = ref<CollapseProps>({
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  separator: 'line',
  compact: false,
  multiple: false
})

const collapseProps: TableItem[] = [
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Collapse.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Collapse.',
    values: 'soft, rounded, square',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Collapse.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'separatorProp',
    prop: 'separator',
    required: false,
    description: 'The separator of the Collapse.',
    values: 'line, split, none',
    default: 'line'
  },
  {
    key: 'compactProp',
    prop: 'compact',
    required: false,
    description: 'Whether all Collapse items should be smaller.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'multipleProp',
    prop: 'multiple',
    required: false,
    description: 'Allow multiple items to be expanded at the same time.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'styleSlotsProps',
    prop: 'styleSlots',
    required: false,
    description: 'Root container.',
    values: 'string[]',
    default: ''
  }
]

const collapseSlots: TableItem[] = [
  {
    key: 'defaultSlot',
    name: 'default',
    description: 'Slot for containing VkCollapseItem components. This slot is used to wrap VkCollapseItem components inside VkCollapse.',
    example: '<template #default>\n  <!-- Your VkCollapseItem components go here -->\n</template>'
  }
]

const itemSlots: TableItem[] = [
  {
    key: 'itemTitleSlot',
    name: 'title',
    description: 'Slot for the title content of the collapse item. This slot is typically used to provide a custom title for the collapse item.',
    example: '<template #title>\n  <!-- Your custom title content goes here -->\n</template>'
  },
  {
    key: 'itemDefaultSlot',
    name: 'default',
    description: 'Slot for the main content of the collapse item. This slot is typically used to include additional content inside the collapse item.',
    example: '<template #default>\n  <!-- Your main content goes here -->\n</template>'
  }
]

const collapseItemProps: TableItem[] = [
  {
    key: 'title',
    prop: 'title',
    description: 'Title of the collapse item (this is replaced by the title slot).',
    values: 'string',
    default: ''
  },
  {
    key: 'styleSlots',
    prop: 'styleSlots',
    description: 'Custom styles for different parts of the Collapse Item.',
    values: 'CollapseItemSlots',
    default: ''
  }
]

const collapseItemStyleSlotsInterface: TableItem[] = [
  {
    key: 'collapseItem',
    prop: 'collapseItem',
    required: false,
    description: 'Root container of the Collapse Item.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'button',
    prop: 'button',
    required: false,
    description: 'Button element in the Collapse Item header (title & icon).',
    values: 'string[]',
    default: ''
  },
  {
    key: 'icon',
    prop: 'icon',
    required: false,
    description: 'Icon element in the Collapse Item header (this is replaced when the title slot is used).',
    values: 'string[]',
    default: ''
  },
  {
    key: 'panel',
    prop: 'panel',
    required: false,
    description: 'Panel container that holds the content of the Collapse Item.',
    values: 'string[]',
    default: ''
  }
]

const generateSnippet = snippetGeneratorFactory('vk-collapse')

const customSlot = '<vk-collapse-item title="example-item">\n      Lorem.\n    </vk-collapse-item>'
</script>

<template>
  <doc-section
    title="Collapse"
    description="Interactive element that hides or reveals additional content with a single click. Collapses are often used to manage large amounts of content or to create expandable sections within a page."
  >
    <template #playground-view>
      <vk-collapse
        :variant="form.variant"
        :size="form.size"
        :separator="form.separator"
        :compact="form.compact"
        :multiple="form.multiple"
        :shape="form.shape"
      >
        <vk-collapse-item
          left-icon="user-circle"
          title="Playground-Example 1"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </vk-collapse-item>
        <vk-collapse-item
          title="Playground-Example 2"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </vk-collapse-item>
        <vk-collapse-item
          title="Playground-Example 3"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </vk-collapse-item>
      </vk-collapse>
    </template>

    <template #playground-options>
      <vk-select
        v-model="form.variant"
        label="Variant"
        size="sm"
        :options="variantOptions.general"
      />
      <vk-select
        v-model="form.shape"
        label="Shape"
        size="sm"
        :options="shapeOptions.general"
      />
      <vk-select
        v-model="form.size"
        size="sm"
        label="Size"
        :options="sizeOptions.general"
      />
      <vk-select
        v-model="form.separator"
        label="Separator"
        size="sm"
        :options="separatorOptions"
      />
      <vk-checkbox
        v-model="form.compact"
        label="Compact"
      />
      <vk-checkbox
        v-model="form.multiple"
        label="Multiple"
      />
    </template>

    <template #examples>
      <example-section title="Variants">
        <vk-collapse
          v-for="variant in variantOptions.general"
          :key="variant.value"
          :variant="variant.value"
        >
          <vk-collapse-item
            :title="`${variant.label}-Example Item 1`"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </vk-collapse-item>
          <vk-collapse-item
            :title="`${variant.label}-Example Item 2`"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </vk-collapse-item>
          <vk-collapse-item
            :title="`${variant.label}-Example Item 3`"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </vk-collapse-item>
        </vk-collapse>

        <template #code>
          <code-block :code="generateSnippet<string>('variant', { values: variantOptions.general.map(o => o.value), customSlot })" />
        </template>
      </example-section>

      <example-section title="Shapes">
        <vk-collapse
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          :shape="shape.value"
        >
          <vk-collapse-item
            :title="`${shape.label}-Example Item 1`"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </vk-collapse-item>
          <vk-collapse-item
            :title="`${shape.label}-Example Item 2`"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </vk-collapse-item>
          <vk-collapse-item
            :title="`${shape.label}-Example Item 3`"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </vk-collapse-item>
        </vk-collapse>

        <template #code>
          <code-block :code="generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value), customSlot })" />
        </template>
      </example-section>

      <example-section title="Sizes">
        <vk-collapse
          v-for="size in sizeOptions.general"
          :key="size.value"
          :size="size.value"
        >
          <vk-collapse-item
            :title="`${size.label}-Example Item 1`"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </vk-collapse-item>
          <vk-collapse-item
            :title="`${size.label}-Example Item 2`"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </vk-collapse-item>
          <vk-collapse-item
            :title="`${size.label}-Example Item 3`"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </vk-collapse-item>
        </vk-collapse>

        <template #code>
          <code-block :code="generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value), customSlot })" />
        </template>
      </example-section>

      <example-section title="Separators">
        <vk-collapse
          v-for="separator in separatorOptions"
          :key="separator.value"
          :separator="separator.value"
        >
          <vk-collapse-item
            :title="`${separator.label}-Example Item 1`"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </vk-collapse-item>
          <vk-collapse-item
            :title="`${separator.label}-Example Item 2`"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </vk-collapse-item>
          <vk-collapse-item
            :title="`${separator.label}-Example Item 3`"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </vk-collapse-item>
        </vk-collapse>

        <template #code>
          <code-block :code="generateSnippet<string>('separator', { values: separatorOptions.map(o => o.value), customSlot })" />
        </template>
      </example-section>

      <example-section title="Multiple">
        <vk-collapse multiple>
          <vk-collapse-item
            left-icon="user-circle"
            title="Multiple-Example Item 1"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </vk-collapse-item>
          <vk-collapse-item
            title="Multiple-Example Item 2"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </vk-collapse-item>
          <vk-collapse-item
            title="Multiple-Example Item 3"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </vk-collapse-item>
        </vk-collapse>

        <template #code>
          <code-block :code="generateSnippet<boolean>('multiple', { values: [true], customSlot })" />
        </template>
      </example-section>

      <example-section title="Compact">
        <vk-collapse compact>
          <vk-collapse-item
            title="Compact-Example Item 1"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </vk-collapse-item>
          <vk-collapse-item
            title="Compact-Example Item 2"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </vk-collapse-item>
          <vk-collapse-item
            title="Compact-Example Item 3"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </vk-collapse-item>
        </vk-collapse>

        <template #code>
          <code-block :code="generateSnippet<boolean>('compact', { values: [true], customSlot })" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Collapse Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="collapseProps"
      />

      <h3 title="">
        Collapse Slots
      </h3>
      <vk-table
        :headers="slotHeaders"
        :data="collapseSlots"
      />

      <h3 title="">
        Collapse Items Slots
      </h3>
      <vk-table
        :headers="slotHeaders"
        :data="itemSlots"
      />

      <h3>Collapse Item Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="collapseItemProps"
      />

      <h3>Collapse Item Style Slots Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="collapseItemStyleSlotsInterface"
      />
    </template>
  </doc-section>
</template>
