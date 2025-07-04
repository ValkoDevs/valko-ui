<script setup lang="ts">
import type { TabsProps, TableItem, Tab } from '#valkoui'

const tabs: Tab[] = [
  { key: 'photos', title: 'Photos' },
  { key: 'videos', title: 'Videos' },
  { key: 'favorite', title: 'Favorite' },
  { key: 'trending', title: 'Trending' },
  { key: 'friends', title: 'Friends' }
]

const tabWithIcon: Tab[] = [
  { key: 'withIconPhotos', title: 'Photos', leftIcon: 'photo' },
  { key: 'withIconVideos', title: 'Videos', rightIcon: 'movie' },
  { key: 'withIconFavorite', title: 'Favorite', leftIcon: 'heart' },
  { key: 'withIconTrending', title: 'Trending', leftIcon: 'flame', rightIcon: 'flame' },
  { key: 'withIconFriends', title: 'Friends', rightIcon: 'friends' }
]

const tabDisabled: Tab[] = [
  { key: 'withDisabledPhotos', title: 'Photos', disabled: true },
  { key: 'withDisabledVideos', title: 'Videos' },
  { key: 'withDisabledFavorite', title: 'Favorite', disabled: true },
  { key: 'withDisabledTrending', title: 'Trending' },
  { key: 'withDisabledFriends', title: 'Friends' }
]

const form = ref<Partial<TabsProps>>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  grow: false,
  vertical: false
})

const icons = ref(false)

const tabsProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Tabs.',
    values: 'primary, secondary, negative, warning, accent, positive',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The type of the Tabs',
    values: 'filled, outlined, ghost, gradient',
    default: 'filled'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The Tabs shape.',
    values: 'line, rounded, soft, square',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The Tabs size.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'modelValueProp',
    prop: 'modelValue',
    required: false,
    description: 'Represents the controlled value for the selected tab index. If provided, the component becomes a controlled component and uses this value to manage the selected tab externally. A numeric value indicating the active tab index is expected. If not provided, the component will manage the selected tab index internally.',
    values: 'number',
    default: 'undefined'
  },
  {
    key: 'growProp',
    prop: 'grow',
    required: false,
    description: 'Allow the Tabs to grow to fill any available space',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'tabsProp',
    prop: 'tabs',
    required: true,
    description: 'The list of tabs',
    values: 'Tab[]',
    default: '[]'
  },
  {
    key: 'verticalProp',
    prop: 'vertical',
    required: false,
    description: 'Wheter the Tabs displays vertically or not',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'defaultIndexProp',
    prop: 'defaultIndex',
    required: false,
    description: 'The default selected tab',
    values: 'number',
    default: '0'
  }
]

const tabInterface: TableItem[] = [
  {
    key: 'keyInterfaceProp',
    prop: 'key',
    required: true,
    description: 'The key of the Tab who grants the name for the content panel',
    values: 'string | number',
    default: ''
  },
  {
    key: 'titleInterfaceProp',
    prop: 'title',
    required: true,
    description: 'The title for the Tab',
    values: 'string',
    default: ''
  },
  {
    key: 'leftIconInterfaceProp',
    prop: 'leftIcon',
    required: false,
    description: 'The name of the icon to display on the left side of the title',
    values: 'string',
    default: ''
  },
  {
    key: 'rightIconInterfaceProp',
    prop: 'rightIcon',
    required: false,
    description: 'The name of the icon to display on the right side of the title',
    values: 'string',
    default: ''
  },
  {
    key: 'disabledInterfaceProp',
    prop: 'disabled',
    required: false,
    description: 'Wheter the Tab is disabled or not',
    values: 'true, false',
    default: ''
  }
]

const tabsSlots: TableItem[] = [
  {
    key: 'tabKeySlot',
    name: '[key: Tab["key"]]',
    description: 'Slot for content associated with a specific tab. Each tab in the `VkTabs` component should have a corresponding slot with a unique name matching the `key` prop of the tab.',
    example: '<template #tab1>\n  <!-- Content for tab 1 -->\n</template>\n<template #tab2>\n  <!-- Content for tab 2 -->\n</template>\n<!-- Add more templates for additional tabs as needed -->'
  }
]

const tabsEmits: TableItem[] = [
  {
    key: 'tabClickEmit',
    event: 'tabClick',
    description: 'Emitted when a tab is clicked. This event notifies the parent component about the tab change.',
    values: 'number',
    type: '(index: number) => void'
  },
  {
    key: 'updateModelValueEmit',
    event: 'update:modelValue',
    description: 'Emitted when the selected tab index changes. This event allows the parent to control the selected tab index.',
    values: 'number',
    type: '(value: number) => void'
  }
]

const scriptNoIcons = `
<script setup lang="ts">
import type { Tab } from '#valkoui'

const tabs: Tab[] = [
  { key: 'photos', title: 'Photos' },
  { key: 'videos', title: 'Videos' },
  { key: 'favorite', title: 'Favorite' },
  { key: 'trending', title: 'Trending' },
  { key: 'friends', title: 'Friends' }
]
<\u002Fscript>
`

const scriptIcons = `
<script setup lang="ts">
import type { Tab } from '#valkoui'

const tabs: Tab[] = [
  { key: 'photos', title: 'Photos', leftIcon: 'photo' },
  { key: 'videos', title: 'Videos', rightIcon: 'movie' },
  { key: 'favorite', title: 'Favorite', leftIcon: 'heart' },
  { key: 'trending', title: 'Trending', leftIcon: 'flame', rightIcon: 'flame' },
  { key: 'friends', title: 'Friends', rightIcon: 'friends' }
]
<\u002Fscript>
`

const scriptDisabled = `
<script setup lang="ts">
import type { Tab } from '#valkoui'

const tabs: Tab[] = [
  { key: 'photos', title: 'Photos', disabled: true },
  { key: 'videos', title: 'Videos' },
  { key: 'favorite', title: 'Favorite', disabled: true },
  { key: 'trending', title: 'Trending' },
  { key: 'friends', title: 'Friends' }
]
<\u002Fscript>
`

const generateSnippet = snippetGeneratorFactory('vk-tabs')

const extraProps = ':tabs="tabs"'
</script>

<template>
  <doc-section
    title="Tabs"
    description=" Organization of content into tabs for easier navigation. Tabs allow users to switch between different sections of content within the same page or interface, improving the organization and usability of the interface."
  >
    <template #playground-view>
      <vk-tabs
        :color="form.color"
        :shape="form.shape"
        :variant="form.variant"
        :size="form.size"
        :tabs="icons ? tabWithIcon : tabs"
        :grow="form.grow"
        :vertical="form.vertical"
      />
    </template>

    <template #playground-options>
      <vk-select
        v-model="form.color"
        type="outlined"
        label="Color"
        size="sm"
        :options="colorOptions.general"
      />
      <vk-select
        v-model="form.variant"
        type="outlined"
        label="Variant"
        size="sm"
        :options="variantOptions.withGradient"
      />
      <vk-select
        v-model="form.shape"
        type="outlined"
        label="Shape"
        size="sm"
        :options="shapeOptions.withLine"
      />
      <vk-select
        v-model="form.size"
        type="outlined"
        label="Size"
        size="sm"
        :options="sizeOptions.general"
      />
      <vk-checkbox
        v-model="form.grow"
        label="Grow"
      />
      <vk-checkbox
        v-model="form.vertical"
        label="Vertical"
      />
      <vk-checkbox
        v-model="icons"
        label="With Icons"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        classes="md:grid-cols-2"
      >
        <div
          v-for="color in colorOptions.general"
          :key="color.value"
        >
          <span> {{ color.label }} </span>
          <vk-tabs
            :color="color.value"
            :tabs="tabs"
          />
        </div>

        <template #code>
          <code-block :code="`${scriptNoIcons}\n${generateSnippet<string>('color', { values: colorOptions.general.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        classes="md:grid-cols-2"
      >
        <div
          v-for="variant in variantOptions.withGradient"
          :key="variant.value"
        >
          <span> {{ variant.label }} </span>
          <vk-tabs
            :variant="variant.value"
            :tabs="tabs"
          />
        </div>

        <template #code>
          <code-block :code="`${scriptNoIcons}\n${generateSnippet<string>('variant', { values: variantOptions.withGradient.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        classes="md:grid-cols-2"
      >
        <div
          v-for="shape in shapeOptions.withLine"
          :key="shape.value"
          class="flex flex-col items-around"
        >
          <span> {{ shape.label }} </span>
          <vk-tabs
            :shape="shape.value"
            :tabs="tabs"
          />
        </div>

        <template #code>
          <code-block :code="`${scriptNoIcons}\n${generateSnippet<string>('shape', { values: shapeOptions.withLine.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        classes="md:grid-cols-2"
      >
        <div
          v-for="size in sizeOptions.general"
          :key="size.value"
        >
          <span> {{ size.label }} </span>
          <vk-tabs
            :size="size.value"
            :tabs="tabs"
          />
        </div>

        <template #code>
          <code-block :code="`${scriptNoIcons}\n${generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section title="Grow">
        <vk-tabs
          grow
          :tabs="tabs"
        />

        <template #code>
          <code-block :code="`${scriptNoIcons}\n${generateSnippet<boolean>('grow', { values: [true], extraProps })}`" />
        </template>
      </example-section>

      <example-section title="With Icons">
        <vk-tabs
          :tabs="tabWithIcon"
        />

        <template #code>
          <code-block :code="`${scriptIcons}\n${generateSnippet<string>(':tabs', { values: ['tabs'] })}`" />
        </template>
      </example-section>

      <example-section title="Disabled">
        <vk-tabs
          :tabs="tabDisabled"
        />

        <template #code>
          <code-block :code="`${scriptDisabled}\n${generateSnippet<string>(':tabs', { values: ['tabs'] })}`" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Tabs Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="tabsProps"
      />

      <h3>Tabs Slots</h3>
      <vk-table
        :headers="slotHeaders"
        :data="tabsSlots"
      />

      <h3>Tabs Emits</h3>
      <vk-table
        :headers="emitHeaders"
        :data="tabsEmits"
      />

      <h3>Tab Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="tabInterface"
      />
    </template>
  </doc-section>
</template>
