<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '../../../components/DocSection'
import ExampleSection from '../../../components/ExampleSection'
import variantOptions from '@/data/variantOptions'
import colorOptions from '@/data/colorOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import shapeOptions from '@/data/shapeOptions'
import slotHeaders from '@/data/slotHeaders'

const form = ref({
  color: 'primary',
  variant: 'filled',
  size: 'md',
  title: '',
  shape: 'soft',
  floating: false,
  fixed: false,
  flat: false
})

const colors = [
  ...colorOptions,
  { value: 'neutral', label: 'Neutral' }
]

const tabs = [
  { key: 'home', title: 'Home' },
  { key: 'doc', title: 'Docs' },
  { key: 'blog', title: 'Blog' }
]

const apiData = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Navbar.',
    values: 'primary, secondary, error, warning, info, success, light, dark, neutral',
    default: 'neutral'
  },
  {
    prop: 'variant',
    required: false,
    description: 'The variant of the Navbar.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Navbar.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'flat',
    required: false,
    description: 'Displays a shadow for the Navbar.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Navbar.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    prop: 'fixed',
    required: false,
    description: 'Determines if the Navbar is fixed to the top of the page.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'floating',
    required: false,
    description: 'Determines if the Navbar is floating.',
    values: 'true, false',
    default: 'false'
  }
]

const slotsData = [
  {
    name: 'default',
    description: 'Slot for the main content of the Navbar.',
    example: '<template #default>\n  <p>This is the main content of the Navbar.</p>\n</template>'
  }
]
</script>

<template>
  <doc-section
    title="Navbar"
    description="A visual navigation component that provides links and other navigation-related information to the user."
  >
    <template #playground-view>
      <div class="w-full flex justify-center p-4">
        <vk-navbar
          :color="form.color"
          :variant="form.variant"
          :shape="form.shape"
          :size="form.size"
          :floating="form.floating"
          :fixed="form.fixed"
          :flat="form.flat"
        >
          <div class="w-full flex justify-between items-center">
            <vk-icon
              name="home"
              :size="form.size"
            />
            <div>
              <vk-tabs
                :tabs="tabs"
                shape="line"
                variant="ghost"
                color="dark"
              />
            </div>
            <vk-avatar
              size="xs"
              shape="rounded"
              class="mr-2"
              :color="form.color"
              flat
            />
          </div>
        </vk-navbar>
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
        placeholder="Color"
        size="sm"
        :options="colors"
        v-model="form.color"
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
      <vk-checkbox
        label="Fixed"
        v-model="form.fixed"
      />
      <vk-checkbox
        label="Flat"
        v-model="form.flat"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        justify="around"
        gap
      />
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Navbar Props"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="apiData"
          />
        </example-section>

        <example-section
          title="Navbar Slots"
          gap
        >
          <vk-data-table
            :headers="slotHeaders"
            :data="slotsData"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
