<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '../../../components/DocSection'
import ExampleSection from '../../../components/ExampleSection'
import colorOptions from '@/data/colorOptions'
import variantOptions from '@/data/variantOptions'
import shapeOptions from '@/data/shapeOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import slotHeaders from '@/data/slotHeaders'

const form = ref({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  title: '',
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

const navbarProps = [
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
    prop: 'shape',
    required: false,
    description: 'The shape of the Navbar.',
    values: 'rounded, square, soft',
    default: 'soft'
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

const navbarSlots = [
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
              name="brand-vite"
              :size="form.size"
              :class="`${form.color === 'light' ? 'text-black' : (form.color === 'neutral' ? 'text-black' : (form.variant === 'filled' ? 'text-white' : 'text-black'))}`"
            />
            <div>
              <vk-tabs
                :tabs="tabs"
                shape="line"
                variant="ghost"
                :size="form.size"
                :class="`${form.color === 'light' ? 'text-black' : (form.color === 'neutral' ? 'text-black' : (form.variant === 'filled' ? 'text-white' : form.color))}`"
                :color="`${form.color === 'light' ? 'dark' : (form.color === 'neutral' ? 'dark' : (form.variant === 'filled' ? 'light' : form.color))}`"
              />
            </div>
            <vk-avatar
              size="xs"
              shape="rounded"
              :color="`${form.variant === 'filled' ? 'light' : (form.color === 'neutral' ? 'dark' : (form.color === 'light' ? 'dark' : form.color))}`"
              flat
            />
          </div>
        </vk-navbar>
      </div>
    </template>
    <template #playground-options>
      <vk-select
        placeholder="Color"
        size="sm"
        :options="colors"
        v-model="form.color"
      />
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
        justify="start"
        wrap
        gap
      >
        <div class="grid grid-cols-3 gap-10">
          <div
            v-for="color in colors"
            :key="color.value"
            class="w-full"
          >
            <span>{{ color.label }}</span>
            <vk-navbar
              :color="color.value"
              class="mt-4"
            >
              <div class="w-full flex justify-between items-center">
                <vk-icon
                  name="brand-vite"
                  size="md"
                  :class="`${color.value === 'light' ? 'text-black' : (color.value === 'neutral' ? 'text-black' : 'text-white')}`"
                />
                <div>
                  <vk-tabs
                    :tabs="tabs"
                    shape="line"
                    variant="ghost"
                    :class="`${color.value === 'dark' ? 'text-white' : 'text-black'}`"
                    :color="`${color.value === 'dark' ? 'secondary' : (color.value === 'light' ? 'dark' : (color.value === 'neutral' ? 'dark' : 'light'))}`"
                  />
                </div>
                <vk-avatar
                  size="xs"
                  shape="rounded"
                  :color="`${color.value === 'light' ? 'dark' : (color.value === 'neutral' ? 'dark' : 'light')}`"
                  flat
                />
              </div>
            </vk-navbar>
          </div>
        </div>
      </example-section>

      <example-section
        title="Variants"
        justify="start"
        wrap
        gap
      >
        <div
          v-for="variant in variantOptions"
          :key="variant.value"
          class="w-full"
        >
          <span>{{ variant.label }}</span>
          <vk-navbar
            :variant="variant.value"
            class="mt-4"
          >
            <div class="w-full flex justify-between items-center">
              <vk-icon
                name="brand-vite"
                size="md"
                :class="`${variant.value === 'filled' ? 'text-white' : 'text-black'}`"
              />
              <div>
                <vk-tabs
                  :tabs="tabs"
                  shape="line"
                  :class="`${variant.value === 'filled' ? 'text-white' : 'text-black'}`"
                  :color="`${variant.value === 'filled' ? 'light' : 'primary'}`"
                  variant="ghost"
                />
              </div>
              <vk-avatar
                size="xs"
                shape="rounded"
                :color="`${variant.value === 'filled' ? 'light' : 'primary'}`"
                flat
              />
            </div>
          </vk-navbar>
        </div>
      </example-section>

      <example-section
        title="Shapes"
        justify="start"
        wrap
        gap
      >
        <div
          v-for="shape in shapeOptions"
          :key="shape.value"
          class="w-full"
        >
          <span>{{ shape.label }}</span>
          <vk-navbar
            :shape="shape.value"
            class="mt-4"
          >
            <div class="w-full flex justify-between items-center">
              <vk-icon
                name="brand-vite"
                size="md"
                class="text-white"
              />
              <div>
                <vk-tabs
                  :tabs="tabs"
                  shape="line"
                  variant="ghost"
                  class="text-white"
                  color="light"
                />
              </div>
              <vk-avatar
                size="xs"
                shape="rounded"
                color="light"
                flat
              />
            </div>
          </vk-navbar>
        </div>
      </example-section>

      <example-section
        title="Sizes"
        justify="start"
        wrap
        gap
      >
        <div
          v-for="size in sizeOptions"
          :key="size.value"
          class="w-full"
        >
          <span>{{ size.label }}</span>
          <vk-navbar
            :size="size.value"
            class="mt-4"
          >
            <div class="w-full flex justify-between items-center">
              <vk-icon
                name="brand-vite"
                size="md"
                class="text-white"
              />
              <div>
                <vk-tabs
                  :tabs="tabs"
                  shape="line"
                  variant="ghost"
                  class="text-white"
                  color="light"
                />
              </div>
              <vk-avatar
                size="xs"
                shape="rounded"
                color="light"
                flat
              />
            </div>
          </vk-navbar>
        </div>
      </example-section>

      <example-section
        title="Floating"
        justify="start"
        wrap
        gap
      >
        <div class="w-full">
          <span>Floating</span>
          <vk-navbar
            class="mt-4"
            floating
          >
            <div class="w-full flex justify-between items-center">
              <vk-icon
                name="brand-vite"
                size="md"
                class="text-white"
              />
              <div>
                <vk-tabs
                  :tabs="tabs"
                  shape="line"
                  variant="ghost"
                  class="text-white"
                  color="light"
                />
              </div>
              <vk-avatar
                size="xs"
                shape="rounded"
                color="light"
                flat
              />
            </div>
          </vk-navbar>
        </div>
      </example-section>

      <example-section
        title="Flat"
        justify="start"
        wrap
        gap
      >
        <div class="w-full">
          <span>Flat</span>
          <vk-navbar
            class="mt-4"
            flat
          >
            <div class="w-full flex justify-between items-center">
              <vk-icon
                name="brand-vite"
                size="md"
                class="text-white"
              />
              <div>
                <vk-tabs
                  :tabs="tabs"
                  shape="line"
                  variant="ghost"
                  class="text-white"
                  color="light"
                />
              </div>
              <vk-avatar
                size="xs"
                shape="rounded"
                color="light"
                flat
              />
            </div>
          </vk-navbar>
        </div>
      </example-section>

      <example-section
        title="Fixed"
        justify="start"
        wrap
        gap
      >
        <div class="w-full">
          <span>Fixed</span>
          <vk-navbar
            class="mt-4"
            fixed
          >
            <div class="w-full flex justify-between items-center">
              <vk-icon
                name="brand-vite"
                size="md"
                class="text-white"
              />
              <div>
                <vk-tabs
                  :tabs="tabs"
                  shape="line"
                  variant="ghost"
                  class="text-white"
                  color="light"
                />
              </div>
              <vk-avatar
                size="xs"
                shape="rounded"
                color="light"
                flat
              />
            </div>
          </vk-navbar>
        </div>
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Navbar Props"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="navbarProps"
          />
        </example-section>

        <example-section
          title="Navbar Slots"
          gap
        >
          <vk-data-table
            :headers="slotHeaders"
            :data="navbarSlots"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
