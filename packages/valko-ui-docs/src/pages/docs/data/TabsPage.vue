<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import colorOptions from '@/data/colorOptions'
import variantOptions from '@/data/variantOptions'
import shapeOptions from '@/data/shapeOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import slotHeaders from '@/data/slotHeaders'

const shapes = [
  ...shapeOptions,
  { value: 'line', label: 'Line' }
]

const colors = [
  ...colorOptions,
  { value: 'neutral', label: 'Neutral' }
]

const tabs = [
  { key: 'photos', title: 'Photos' },
  { key: 'videos', title: 'Videos' },
  { key: 'favorite', title: 'Favorite' },
  { key: 'trending', title: 'Trending' },
  { key: 'friends', title: 'Friends' }
]

const tabWithIcon = [
  { title: 'Photos', leftIcon: 'photo' },
  { title: 'Videos', rightIcon: 'movie' },
  { title: 'Favorite', leftIcon: 'heart' },
  { title: 'Trending', leftIcon: 'flame', rightIcon: 'flame' },
  { title: 'Friends', rightIcon: 'friends' }
]

const tabDisabled = [
  { title: 'Photos', disabled: true },
  { title: 'Videos' },
  { title: 'Favorite', disabled: true },
  { title: 'Trending' },
  { title: 'Friends' }
]

const form = ref({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  grow: false,
  vertical: false,
  icons: false
})

const tabsProps = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Tabs.',
    values: 'primary, secondary, error, warning, info, success, light, dark, neutral',
    default: 'primary'
  },
  {
    prop: 'variant',
    required: false,
    description: 'The type of the Tabs',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The Tabs shape.',
    values: 'line, rounded, soft, square',
    default: 'soft'
  },
  {
    prop: 'size',
    required: false,
    description: 'The Tabs size.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'grow',
    required: false,
    description: 'Allow the Tabs to grow to fill any available space',
    values: 'primary, secondary, error, warning, info, success',
    default: 'primary'
  },
  {
    prop: 'tabs',
    required: true,
    description: 'The list of tabs',
    values: 'Tab[]',
    default: '[]'
  },
  {
    prop: 'vertical',
    required: false,
    description: 'Wheter the Tabs displays vertically or not',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'defaultIndex',
    required: false,
    description: 'The default selected tab',
    values: 'number',
    default: '0'
  }
]

const tabInterface = [
  {
    prop: 'key',
    required: true,
    description: 'The key of the Tab who grants the name for the content panel',
    values: 'string | number',
    default: ''
  },
  {
    prop: 'title',
    required: true,
    description: 'The title for the Tab',
    values: 'string',
    default: ''
  },
  {
    prop: 'leftIcon',
    required: false,
    description: 'The name of the icon to display on the left side of the title',
    values: 'string',
    default: ''
  },
  {
    prop: 'rightIcon',
    required: false,
    description: 'The name of the icon to display on the right side of the title',
    values: 'string',
    default: ''
  },
  {
    prop: 'disabled',
    required: false,
    description: 'Wheter the Tab is disabled or not',
    values: 'true, false',
    default: ''
  }
]

const tabsSlots = [
  {
    name: '[key: Tab["key"]]',
    description: 'Slot for content associated with a specific tab. Each tab in the `VkTabs` component should have a corresponding slot with a unique name matching the `key` prop of the tab.',
    example: '<template #tab1>\n  <!-- Content for tab 1 -->\n</template>\n<template #tab2>\n  <!-- Content for tab 2 -->\n</template>\n<!-- Add more templates for additional tabs as needed -->'
  }
]
</script>

<template>
  <doc-section
    title="Tabs"
    description=" Organization of content into tabs for easier navigation. Tabs allow users to switch between different sections of content within the same page or interface, improving the organization and usability of the interface."
  >
    <template #playground-view>
      <div class="w-full flex justify-center items-center px-2">
        <vk-tabs
          :color="form.color"
          :shape="form.shape"
          :variant="form.variant"
          :size="form.size"
          :tabs="form.icons ? tabWithIcon : tabs"
          :grow="form.grow"
          :vertical="form.vertical"
        />
      </div>
    </template>

    <template #playground-options>
      <vk-select
        type="outlined"
        placeholder="Color"
        size="sm"
        :options="colors"
        v-model="form.color"
      />
      <vk-select
        type="outlined"
        placeholder="Variant"
        size="sm"
        :options="variantOptions"
        v-model="form.variant"
      />
      <vk-select
        type="outlined"
        placeholder="Shape"
        size="sm"
        :options="shapes"
        v-model="form.shape"
      />
      <vk-select
        type="outlined"
        placeholder="Size"
        size="sm"
        :options="sizeOptions"
        v-model="form.size"
      />
      <vk-checkbox
        label="Grow"
        v-model="form.grow"
      />
      <vk-checkbox
        label="Vertical"
        v-model="form.vertical"
      />
      <vk-checkbox
        label="With Icons"
        v-model="form.icons"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <div
            v-for="color in colors"
            :key="color.value"
          >
            <span> {{ color.label }} </span>
            <vk-tabs
              :color="color.value"
              :tabs="tabs"
            />
          </div>
        </div>
      </example-section>

      <example-section
        title="Variants"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <div
            v-for="variant in variantOptions"
            :key="variant.value"
          >
            <span> {{ variant.label }} </span>
            <vk-tabs
              :variant="variant.value"
              :tabs="tabs"
            />
          </div>
        </div>
      </example-section>

      <example-section
        title="Shapes"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <div
            v-for="shape in shapes"
            :key="shape.value"
            class="flex flex-col items-around"
          >
            <span> {{ shape.label }} </span>
            <vk-tabs
              :shape="shape.value"
              :tabs="tabs"
            />
          </div>
        </div>
      </example-section>

      <example-section
        title="Sizes"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <div
            v-for="size in sizeOptions"
            :key="size.value"
          >
            <span> {{ size.label }} </span>
            <vk-tabs
              :size="size.value"
              :tabs="tabs"
            />
          </div>
        </div>
      </example-section>

      <example-section
        title="Grow"
      >
        <vk-tabs
          grow
          :tabs="tabs"
        />
      </example-section>

      <example-section
        title="With Icons"
      >
        <vk-tabs
          :tabs="tabWithIcon"
        />
      </example-section>

      <example-section
        title="Disabled"
      >
        <vk-tabs
          :tabs="tabDisabled"
        />
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Tabs Props"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="tabsProps"
          />
        </example-section>

        <example-section
          title="Tabs Slots"
          gap
        >
          <vk-data-table
            :headers="slotHeaders"
            :data="tabsSlots"
          />
        </example-section>

        <example-section
          title="Tab Interface"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="tabInterface"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
