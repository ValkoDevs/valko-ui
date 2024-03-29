<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import variantOptions from '@/data/variantOptions'
import shapeOptions from '@/data/shapeOptions'
import sizeOptions from '@/data/sizeOptions'
import separatorOptions from '@/data/separatorOptions'
import propHeaders from '@/data/propHeaders'
import slotHeaders from '@/data/slotHeaders'

const form = ref({
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  separator: 'line',
  compact: false,
  multiple: false
})

const collapseProps = [
  {
    prop: 'variant',
    required: false,
    description: 'The variant of the Collapse.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Collapse.',
    values: 'soft, rounded, square',
    default: 'soft'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Collapse.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'separator',
    required: false,
    description: 'The separator of the Collapse.',
    values: 'line, split, none',
    default: 'line'
  },
  {
    prop: 'compact',
    required: false,
    description: 'Whether all Collapse items should be smaller.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'multiple',
    required: false,
    description: 'Allow multiple items to be expanded at the same time.',
    values: 'true, false',
    default: 'false'
  }
]

const collapseSlots = [
  {
    name: 'default',
    description: 'Slot for containing VkCollapseItem components. This slot is used to wrap VkCollapseItem components inside VkCollapse.',
    example: '<template #default>\n  <!-- Your VkCollapseItem components go here -->\n</template>'
  }
]

const itemSlots = [
  {
    name: 'title',
    description: 'Slot for the title content of the collapse item. This slot is typically used to provide a custom title for the collapse item.',
    example: '<template #title>\n  <!-- Your custom title content goes here -->\n</template>'
  },
  {
    name: 'default',
    description: 'Slot for the main content of the collapse item. This slot is typically used to include additional content inside the collapse item.',
    example: '<template #default>\n  <!-- Your main content goes here -->\n</template>'
  }
]
</script>

<template>
  <doc-section
    title="Collapse"
    description="Interactive element that hides or reveals additional content with a single click. Collapses are often used to manage large amounts of content or to create expandable sections within a page."
  >
    <template #playground-view>
      <div class="w-full flex justify-center p-4">
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
      </div>
    </template>
    <template #playground-options>
      <vk-select
        placeholder="Variant"
        size="sm"
        :options="variantOptions"
        v-model="form.variant"
      />
      <vk-select
        placeholder="Shape"
        size="sm"
        :options="shapeOptions"
        v-model="form.shape"
      />
      <vk-select
        size="sm"
        placeholder="Size"
        :options="sizeOptions"
        v-model="form.size"
      />
      <vk-select
        placeholder="Separator"
        size="sm"
        :options="separatorOptions"
        v-model="form.separator"
      />
      <vk-checkbox
        label="Compact"
        v-model="form.compact"
      />
      <vk-checkbox
        label="Multiple"
        v-model="form.multiple"
      />
    </template>

    <template #examples>
      <example-section
        title="Variants"
        justify="evenly"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2 items-start">
          <vk-collapse
            v-for="variant in variantOptions"
            :variant="variant.value"
            :key="variant.value"
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
        </div>
      </example-section>

      <example-section
        title="Shapes"
        justify="evenly"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-collapse
            v-for="shape in shapeOptions"
            :shape="shape.value"
            :key="shape.value"
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
        </div>
      </example-section>

      <example-section
        title="Sizes"
        justify="evenly"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-collapse
            v-for="size in sizeOptions"
            :size="size.value"
            :key="size.value"
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
        </div>
      </example-section>

      <example-section
        title="Separators"
        justify="evenly"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-collapse
            v-for="separator in separatorOptions"
            :separator="separator.value"
            :key="separator.value"
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
        </div>
      </example-section>

      <example-section
        title="Multiple"
      >
        <vk-collapse
          :multiple="true"
        >
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
      </example-section>

      <example-section
        title="Compact"
      >
        <vk-collapse
          :compact="true"
        >
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
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Collapse Props"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="collapseProps"
          />
        </example-section>

        <example-section
          title="Collapse Slots"
          gap
        >
          <vk-data-table
            :headers="slotHeaders"
            :data="collapseSlots"
          />
        </example-section>

        <example-section
          title="Collapse Items Slots"
          gap
        >
          <vk-data-table
            :headers="slotHeaders"
            :data="itemSlots"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
