<script setup lang="ts">
import type { NavbarProps, TableItem } from '#valkoui'

const form = ref<NavbarProps>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  floating: false,
  fixed: false,
  flat: false
})

const navbarProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Navbar.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'neutral'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Navbar.',
    values: 'filled, outlined, ghost, gradient',
    default: 'filled'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Navbar.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Navbar.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'flatProp',
    prop: 'flat',
    required: false,
    description: 'Displays a shadow for the Navbar.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'fixedProp',
    prop: 'fixed',
    required: false,
    description: 'Determines if the Navbar is fixed to the top of the page.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'floatingProp',
    prop: 'floating',
    required: false,
    description: 'Determines if the Navbar is floating.',
    values: 'true, false',
    default: 'false'
  }
]

const navbarSlots: TableItem[] = [
  {
    key: 'defaultSlot',
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
        v-model="form.color"
        label="Color"
        size="sm"
        :options="colorOptions"
      />
      <vk-select
        v-model="form.variant"
        label="Variant"
        size="sm"
        :options="variantOptions.withGradient"
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
      <vk-checkbox
        v-model="form.floating"
        label="Floating"
      />
      <vk-checkbox
        v-model="form.fixed"
        label="Fixed"
      />
      <vk-checkbox
        v-model="form.flat"
        label="Flat"
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
          v-for="variant in variantOptions.withGradient"
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
          v-for="shape in shapeOptions.general"
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
            v-for="size in sizeOptions.general"
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
        <div class="w-full z-20">
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
          <vk-table
            :headers="propHeaders"
            :data="navbarProps"
          />
        </example-section>

        <example-section
          title="Navbar Slots"
          gap
        >
          <vk-table
            :headers="slotHeaders"
            :data="navbarSlots"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
