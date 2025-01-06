<!-- eslint-disable no-useless-escape -->
<script setup lang="ts">
import type { TableItem, Crumb, BreadcrumbsProps } from '#valkoui'
import { useNotification } from '#valkoui'

const form = ref<Partial<BreadcrumbsProps>>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  separator: '>',
  flat: false
})

const crumbs: Crumb[] = [
  { key: 'home', title: 'Home', onClick: () => useNotification({ text: 'Home' }) },
  { key: 'music', title: 'Music', onClick: () => useNotification({ text: 'Music' }) },
  { key: 'artist', title: 'Artist', onClick: () => useNotification({ text: 'Artist' }) },
  { key: 'album', title: 'Album', onClick: () => useNotification({ text: 'Album' }) },
  { key: 'song', title: 'Song' }
]

const crumbsDisabled: Crumb[] = [
  { key: 'home', title: 'Home', disabled: true  },
  { key: 'music', title: 'Music' },
  { key: 'artist', title: 'Artist', disabled: true  },
  { key: 'album', title: 'Album' },
  { key: 'song', title: 'Song', disabled: true }
]

const crumbsIcons: Crumb[] = [
  { key: 'home', title: 'Home', leftIcon: 'home' },
  { key: 'music', title: 'Music', rightIcon: 'file-music' },
  { key: 'artist', title: 'Artist', leftIcon: 'user' },
  { key: 'album', title: 'Album', rightIcon: 'playlist' },
  { key: 'song', title: 'Song', leftIcon: 'music' }
]

const breadcrumbsProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Breadcrumbs.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Breadcrumbs.',
    values: 'filled, outlined, ghost, link',
    default: 'filled'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Breadcrumbs.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Breadcrumbs.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Breadcrumbs.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Breadcrumbs.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'crumbsProp',
    prop: 'crumbs',
    required: true,
    description: 'The list of Crumbs.',
    values: 'Crumb[]',
    default: '[]'
  },
  {
    key: 'separatorProp',
    prop: 'separator',
    required: false,
    description: 'The separator for the Breadcrumbs. Up to 2 character or an icon if passed the name.',
    values: 'string',
    default: '>'
  },
  {
    key: 'flatProp',
    prop: 'flat',
    required: false,
    description: 'Wether the Breadcrumbs has a shadow or not.',
    values: 'true, false',
    default: 'false'
  }
]

const crumbInterface: TableItem[] = [
  {
    key: 'keyCrumb',
    prop: 'key',
    required: true,
    description: 'The key of the Crumb',
    values: 'string',
    default: ''
  },
  {
    key: 'titleCrumb',
    prop: 'title',
    required: true,
    description: 'The title for the Crumb',
    values: 'string',
    default: ''
  },
  {
    key: 'leftIconCrumb',
    prop: 'leftIcon',
    required: false,
    description: 'The name of the icon to display on the left side of the title',
    values: 'string',
    default: ''
  },
  {
    key: 'rightIconCrumb',
    prop: 'rightIcon',
    required: false,
    description: 'The name of the icon to display on the right side of the title',
    values: 'string',
    default: ''
  },
  {
    key: 'disabledCrumb',
    prop: 'disabled',
    required: false,
    description: 'Wheter the Crumb is disabled or not',
    values: 'true, false',
    default: ''
  },
  {
    key: 'onClickCrumb',
    prop: 'onClick',
    required: true,
    description: 'The function for the Crumb',
    values: '() => void',
    default: ''
  }
]

const breadcrumbsEmits: TableItem[] = [
  {
    key: 'crumbClickEmit',
    event: 'crumbClick',
    description: 'Emitted when a breadcrumb is clicked.',
    values: 'Crumb',
    type: 'Crumb => void'
  }
]

const { defaultSnippet, booleanSnippet } = useCodeSnippet('vk-breadcrumbs')

const scriptCode = `
<script setup lang="ts">
import type { Crumb } from '#valkoui'

const crumbs: Crumb[] = [
  { key: 'home', title: 'Home' },
  { key: 'music', title: 'Music' },
  { key: 'artist', title: 'Artist' },
  { key: 'album', title: 'Album' },
  { key: 'song', title: 'Song' }
]
<\/script>
`

const disabledScript = `
<script setup lang="ts">
import type { Crumb } from '#valkoui'

const crumbs: Crumb[] = [
  { key: 'home', title: 'Home', disabled: true },
  { key: 'music', title: 'Music' },
  { key: 'artist', title: 'Artist', disabled: true },
  { key: 'album', title: 'Album' },
  { key: 'song', title: 'Song', disabled: true }
]
<\/script>
`

const iconScript = `
<script setup lang="ts">
import type { Crumb } from '#valkoui'

const crumbs: Crumb[] = [
  { key: 'home', title: 'Home', leftIcon: 'home' },
  { key: 'music', title: 'Music', rightIcon: 'file-music' },
  { key: 'artist', title: 'Artist', leftIcon: 'user' },
  { key: 'album', title: 'Album', rightIcon: 'playlist' },
  { key: 'song', title: 'Song', leftIcon: 'music' }
]
<\/script>
`
</script>

<template>
  <doc-section
    title="Breadcrumbs"
    description="Visual navigation that displays the hierarchy of the current location within a website. Breadcrumbs help users understand their current location within a website's structure and provide a way to navigate back to previous pages."
  >
    <template #playground-view>
      <vk-breadcrumbs
        :size="form.size"
        :shape="form.shape"
        :color="form.color"
        :variant="form.variant"
        :crumbs="crumbs"
        :separator="form.separator"
        :flat="form.flat"
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
        :options="variantOptions.withLink"
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
      <vk-input
        v-model="form.separator"
        label="Separator"
      />
      <vk-checkbox
        v-model="form.flat"
        label="Flat"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        classes="sm:grid-cols-2 md:grid-cols-3"
      >
        <div
          v-for="color in colorOptions"
          :key="color.value"
          class="flex flex-col gap-2 items-center justify-center"
        >
          <span>{{ color.label }}</span>
          <vk-breadcrumbs
            :color="color.value"
            :crumbs="crumbs"
          />
        </div>

        <template #code>
          <code-block
            :code="`${scriptCode}\n${defaultSnippet('color', colorOptions, ' :crumbs=&quot;crumbs&quot;')}`"
            :copy="`${scriptCode}\n${defaultSnippet('color', colorOptions, ' :crumbs=&quot;crumbs&quot;')}`"
          />
        </template>
      </example-section>

      <example-section
        title="Variants"
        classes="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="variant in variantOptions.withLink"
          :key="variant.value"
          class="flex flex-col gap-2 items-center justify-center"
        >
          <span>{{ variant.label }}</span>
          <vk-breadcrumbs
            :variant="variant.value"
            :crumbs="crumbs"
          />
        </div>

        <template #code>
          <code-block
            :code="`${scriptCode}\n${defaultSnippet('variant', variantOptions.withLink, ' :crumbs=&quot;crumbs&quot;')}`"
            :copy="`${scriptCode}\n${defaultSnippet('variant', variantOptions.withLink, ' :crumbs=&quot;crumbs&quot;')}`"
          />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        classes="sm:grid-cols-2 md:grid-cols-3"
      >
        <div
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          class="flex flex-col gap-2 items-center justify-center"
        >
          <span>{{ shape.label }}</span>
          <vk-breadcrumbs
            :shape="shape.value"
            :crumbs="crumbs"
          />
        </div>

        <template #code>
          <code-block
            :code="`${scriptCode}\n${defaultSnippet('shape', shapeOptions.general, ' :crumbs=&quot;crumbs&quot;')}`"
            :copy="`${scriptCode}\n${defaultSnippet('shape', shapeOptions.general, ' :crumbs=&quot;crumbs&quot;')}`"
          />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        classes="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="size in sizeOptions.general"
          :key="size.value"
          class="flex flex-col gap-2 items-center justify-center"
        >
          <span>{{ size.label }}</span>
          <vk-breadcrumbs
            :size="size.value"
            :crumbs="crumbs"
          />
        </div>

        <template #code>
          <code-block
            :code="`${scriptCode}\n${defaultSnippet('size', sizeOptions.general, ' :crumbs=&quot;crumbs&quot;')}`"
            :copy="`${scriptCode}\n${defaultSnippet('size', sizeOptions.general, ' :crumbs=&quot;crumbs&quot;')}`"
          />
        </template>
      </example-section>

      <example-section title="Flat">
        <vk-breadcrumbs
          flat
          :crumbs="crumbs"
        />

        <template #code>
          <code-block
            :code="`${scriptCode}${booleanSnippet('flat', ' :crumbs=&quot;crumbs&quot;')}`"
            :copy="`${scriptCode}${booleanSnippet('flat', ' :crumbs=&quot;crumbs&quot;')}`"
          />
        </template>
      </example-section>

      <example-section title="Disabled Crumbs">
        <vk-breadcrumbs :crumbs="crumbsDisabled" />

        <template #code>
          <code-block
            :code="`${disabledScript}${booleanSnippet(':crumbs=&quot;crumbs&quot;')}`"
            :copy="`${disabledScript}${booleanSnippet(':crumbs=&quot;crumbs&quot;')}`"
          />
        </template>
      </example-section>

      <example-section title="Crumbs with icons">
        <vk-breadcrumbs :crumbs="crumbsIcons" />

        <template #code>
          <code-block
            :code="`${iconScript}${booleanSnippet(':crumbs=&quot;crumbs&quot;')}`"
            :copy="`${iconScript}${booleanSnippet(':crumbs=&quot;crumbs&quot;')}`"
          />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Breadcrumbs Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="breadcrumbsProps"
      />

      <h3>Crumb Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="crumbInterface"
      />

      <h3>Breadcrumbs Emits</h3>
      <vk-table
        :headers="emitHeaders"
        :data="breadcrumbsEmits"
      />
    </template>
  </doc-section>
</template>
