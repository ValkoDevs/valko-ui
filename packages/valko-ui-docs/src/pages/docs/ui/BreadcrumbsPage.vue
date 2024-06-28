<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import colorOptions from '@/data/colorOptions'
import variantOptionsExtended from '@/data/variantOptionsExtended'
import shapeOptions from '@/data/shapeOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import emitHeaders from '@/data/emitHeaders'
import { useNotification } from '@valko-ui/components'

const form = ref({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  separator: '>',
  flat: false
})

const crumbs = [
  { key: 'home', title: 'Home', onClick: () => useNotification({ text: 'Home' }) },
  { key: 'music', title: 'Music', onClick: () => useNotification({ text: 'Music' }) },
  { key: 'artist', title: 'Artist', onClick: () => useNotification({ text: 'Artist' }) },
  { key: 'album', title: 'Album', onClick: () => useNotification({ text: 'Album' }) },
  { key: 'song', title: 'Song' }
]

const crumbsDisabled = [
  { key: 'home', title: 'Home', disabled: true  },
  { key: 'music', title: 'Music' },
  { key: 'artist', title: 'Artist', disabled: true  },
  { key: 'album', title: 'Album' },
  { key: 'song', title: 'Song', disabled: true }
]

const crumbsIcons = [
  { key: 'home', title: 'Home', leftIcon: 'home' },
  { key: 'music', title: 'Music', rightIcon: 'file-music' },
  { key: 'artist', title: 'Artist', leftIcon: 'user' },
  { key: 'album', title: 'Album', rightIcon: 'playlist' },
  { key: 'song', title: 'Song', leftIcon: 'music' }
]

const breadcrumbsProps = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Breadcrumbs.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'primary'
  },
  {
    prop: 'variant',
    required: false,
    description: 'The variant of the Breadcrumbs.',
    values: 'filled, outlined, ghost, link',
    default: 'filled'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Breadcrumbs.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Breadcrumbs.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'crumbs',
    required: true,
    description: 'The list of Crumbs.',
    values: 'Crumb[]',
    default: '[]'
  },
  {
    prop: 'separator',
    required: false,
    description: 'The separator for the Breadcrumbs. Up to 2 character or an icon if passed the name.',
    values: 'string',
    default: '>'
  },
  {
    prop: 'flat',
    required: false,
    description: 'Wether the Breadcrumbs has a shadow or not.',
    values: 'true, false',
    default: 'false'
  }
]

const crumbInterface = [
  {
    prop: 'key',
    required: true,
    description: 'The key of the Crumb',
    values: 'string',
    default: ''
  },
  {
    prop: 'title',
    required: true,
    description: 'The title for the Crumb',
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
    description: 'Wheter the Crumb is disabled or not',
    values: 'true, false',
    default: ''
  },
  {
    prop: 'onClick',
    required: true,
    description: 'The function for the Crumb',
    values: '() => void',
    default: ''
  }
]

const breadcrumbsEmits = [
  {
    event: 'crumbClick',
    description: 'Emitted when a breadcrumb is clicked.',
    values: 'Crumb',
    type: 'Crumb => void'
  }
]
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
        placeholder="Color"
        size="sm"
        :options="colorOptions"
        v-model="form.color"
      />
      <vk-select
        placeholder="Variant"
        size="sm"
        :options="variantOptionsExtended"
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
      <vk-input
        label="Separator"
        v-model="form.separator"
      />
      <vk-checkbox
        label="Flat"
        v-model="form.flat"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        gap
      >
        <div class="flex flex-wrap gap-4">
          <div
            v-for="color in colorOptions"
            :key="color.value"
            class="flex flex-col gap-1"
          >
            <span>{{ color.label }}</span>
            <vk-breadcrumbs
              :color="color.value"
              :crumbs="crumbs"
            />
          </div>
        </div>
      </example-section>

      <example-section
        title="Variants"
        gap
      >
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="variant in variantOptionsExtended"
            :key="variant.value"
            class="flex flex-col gap-1"
          >
            <span>{{ variant.label }}</span>
            <vk-breadcrumbs
              :variant="variant.value"
              :crumbs="crumbs"
            />
          </div>
        </div>
      </example-section>

      <example-section
        title="Shapes"
        gap
      >
        <div class="flex flex-wrap gap-4">
          <div
            v-for="shape in shapeOptions"
            :key="shape.value"
            class="flex flex-col gap-1"
          >
            <span>{{ shape.label }}</span>
            <vk-breadcrumbs
              :shape="shape.value"
              :crumbs="crumbs"
            />
          </div>
        </div>
      </example-section>

      <example-section
        title="Sizes"
        gap
      >
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="size in sizeOptions"
            :key="size.value"
            class="flex flex-col gap-1"
          >
            <span>{{ size.label }}</span>
            <vk-breadcrumbs
              :size="size.value"
              :crumbs="crumbs"
            />
          </div>
        </div>
      </example-section>

      <example-section
        title="Flat"
      >
        <vk-breadcrumbs
          flat
          :crumbs="crumbs"
        />
      </example-section>

      <example-section
        title="Disabled Crumbs"
      >
        <vk-breadcrumbs
          :crumbs="crumbsDisabled"
        />
      </example-section>

      <example-section
        title="Crumbs with icons"
      >
        <vk-breadcrumbs
          :crumbs="crumbsIcons"
        />
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Breadcrumbs Props"
          gap
          wrap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="breadcrumbsProps"
          />
        </example-section>

        <example-section
          title="Crumb Interface"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="crumbInterface"
          />
        </example-section>

        <example-section
          title="Breadcrumbs Emits"
          gap
        >
          <vk-data-table
            :headers="emitHeaders"
            :data="breadcrumbsEmits"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
