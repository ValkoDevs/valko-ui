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

const navbarProps = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Navbar.',
    values: 'primary, neutral, error, warning, info, success',
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
          <vk-icon
            name="brand-vite"
            :size="form.size"
          />
        </vk-navbar>
      </div>
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
        <div class="w-full grid grid-cols-3 gap-4">
          <div
            v-for="color in colorOptions"
            :key="color.value"
            class="w-full"
          >
            <vk-navbar
              :color="color.value"
            >
              <vk-icon
                name="brand-vite"
                size="md"
              />
              <span class="font-semibold ml-4">{{ color.label }}</span>
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
          <vk-navbar
            :variant="variant.value"
          >
            <vk-icon
              name="brand-vite"
              size="md"
            />
            <span class="font-semibold ml-4">{{ variant.label }}</span>
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
          <vk-navbar
            :shape="shape.value"
          >
            <vk-icon
              name="brand-vite"
              size="md"
              class="text-white"
            />
            <span class="font-semibold ml-4">{{ shape.label }}</span>
          </vk-navbar>
        </div>
      </example-section>

      <example-section
        title="Sizes"
        justify="start"
        gap
      >
        <div class="w-full grid grid-cols-2 gap-4">
          <div
            v-for="size in sizeOptions"
            :key="size.value"
          >
            <vk-navbar
              :size="size.value"
            >
              <vk-icon
                name="brand-vite"
                size="md"
                class="text-white"
              />
              <span class="font-semibold ml-4">{{ size.label }}</span>
            </vk-navbar>
          </div>
        </div>
      </example-section>

      <example-section
        title="Floating"
        justify="start"
        wrap
        gap
      >
        <div class="w-full">
          <vk-navbar
            floating
          >
            <vk-icon
              name="brand-vite"
              size="md"
              class="text-white"
            />
            <span class="font-semibold ml-4">Floating</span>
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
          <vk-navbar
            flat
          >
            <vk-icon
              name="brand-vite"
              size="md"
              class="text-white"
            />
            <span class="font-semibold ml-4">Flat</span>
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
          <vk-navbar
            fixed
          >
            <vk-icon
              name="brand-vite"
              size="md"
              class="text-white"
            />
            <span class="font-semibold ml-4">Fixed</span>
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
