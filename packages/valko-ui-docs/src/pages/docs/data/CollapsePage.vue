<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import separatorOptions from '@/data/separatorOptions'
import sizeOptions from '@/data/sizeOptions'
import variantOptions from '@/data/variantOptions'
import propHeaders from '@/data/propHeaders'
import shapeOptions from '@/data/shapeOptions'

const form = ref({
  variant: 'filled',
  size: 'md',
  separator: 'line',
  shape: 'soft',
  compact: false,
  multiple: false
})

const apiData = [
  {
    prop: 'variant',
    required: false,
    description: 'The variant of the Collapse.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'separator',
    required: false,
    description: 'The separator of the Collapse.',
    values: 'line, split, none',
    default: 'line'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Collapse.',
    values: 'xs, sm, md, lg',
    default: 'md'
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
</script>

<template>
  <doc-section
    title="Collapse"
    description="Collapse display a list of high-level options that can expand/collapse to reveal more information."
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
        placeholder="Separator"
        size="sm"
        :options="separatorOptions"
        v-model="form.separator"
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
        <div class="grow gap-4 grid grid-cols-2">
          <vk-collapse
            v-for="variant in variantOptions"
            :variant="variant.value"
            size="sm"
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
          <vk-collapse
            :compact="true"
            size="sm"
          >
            <vk-collapse-item
              left-icon="user-circle"
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
          <vk-collapse
            :multiple="true"
            size="sm"
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
            size="sm"
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
        title="Shapes"
        justify="evenly"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-collapse
            v-for="shape in shapeOptions"
            size="sm"
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
    </template>

    <template #api>
      <vk-data-table
        :headers="propHeaders"
        :data="apiData"
      />
    </template>
  </doc-section>
</template>
