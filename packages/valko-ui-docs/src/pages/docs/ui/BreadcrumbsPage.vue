<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import sizeOptions from '@/data/sizeOptions'
import colorOptions from '@/data/colorOptions'
import propHeaders from '@/data/propHeaders'
import shapeOptions from '@/data/shapeOptions'
import variantOptions from '@/data/variantOptions'
import emitHeaders from '@/data/emitHeaders'

const form = ref({
  size: 'md',
  shape: 'soft',
  color: 'primary',
  variant: 'filled',
  separator: '>',
  flat: false
})

const crumbs = [
  { key: 'home', title: 'Home', onClick: () => alert('Home') },
  { key: 'music', title: 'Music', onClick: () => alert('Music') },
  { key: 'artist', title: 'Artist', onClick: () => alert('Artist') },
  { key: 'album', title: 'Album', onClick: () => alert('Album') },
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

const crumbPropsData = [
  {
    prop: 'size',
    required: false,
    description: 'The size of the Breadcrumbs.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Breadcrumbs.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Breadcrumbs.',
    values: 'primary, secondary, error, warning, info, success, light, dark',
    default: 'primary'
  },
  {
    prop: 'variant',
    required: false,
    description: 'The variant of the Breadcrumbs.',
    values: 'filled, outlined, ghost',
    default: 'filled'
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
    description: 'The separator for the Breadcrumbs.',
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

const crumbEmitsData = [
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
      <vk-input
        label="Separator"
        v-model="form.separator"
      />
      <vk-select
        placeholder="Color"
        size="sm"
        :options="colorOptions"
        v-model="form.color"
      />
      <vk-select
        placeholder="Variant"
        size="sm"
        :options="variantOptions"
        v-model="form.variant"
      />
      <vk-select
        placeholder="Size"
        size="sm"
        :options="sizeOptions"
        v-model="form.size"
      />
      <vk-select
        placeholder="Shape"
        size="sm"
        :options="shapeOptions"
        v-model="form.shape"
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
        <div class="flex flex-wrap gap-4">
          <div
            v-for="variant in variantOptions"
            :key="variant.value"
            class="flex flex-col gap-1"
          >
            <span>{{ variant.label }}</span>
            <vk-breadcrumbs
              :variant="variant.value"
              :crumbs="crumbs"
            />
          </div>
          <div class="flex flex-col">
            <span>Flat</span>
            <vk-breadcrumbs
              :crumbs="crumbs"
              flat="true"
            />
          </div>
          <div class="flex flex-col">
            <span>Disabled Crumbs</span>
            <vk-breadcrumbs
              :crumbs="crumbsDisabled"
            />
          </div>
          <div class="flex flex-col">
            <span>Crumbs With Icons</span>
            <vk-breadcrumbs
              :crumbs="crumbsIcons"
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
        <div class="flex flex-wrap gap-4">
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
            :data="crumbPropsData"
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
            :data="crumbEmitsData"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
