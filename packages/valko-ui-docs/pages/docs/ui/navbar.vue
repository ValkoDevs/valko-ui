<script setup lang="ts">
import type { NavbarProps, TableItem } from '#valkoui'

const form = ref<NavbarProps>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  floating: false,
  fixed: false,
  flat: false,
  vertical: false
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
  },
  {
    key: 'verticalProp',
    prop: 'vertical',
    required: false,
    description: 'Determines if the Navbar is vertical or not.',
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

const generateSnippet = snippetGeneratorFactory('vk-navbar')

const customSlot = '<vk-icon name="brand-vue" />\n    <span class="font-semibold ml-4">Title</span>'
</script>

<template>
  <doc-section
    title="Navbar"
    description="A visual navigation component that provides links and other navigation-related information to the user."
  >
    <template #playground-view>
      <vk-navbar
        :color="form.color"
        :variant="form.variant"
        :shape="form.shape"
        :size="form.size"
        :floating="form.floating"
        :fixed="form.fixed"
        :flat="form.flat"
        :vertical="form.vertical"
      >
        <vk-icon
          name="brand-vue"
          :size="form.size"
        />
      </vk-navbar>
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
      <vk-checkbox
        v-model="form.vertical"
        label="Vertical"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        classes="sm:grid-cols-2 md:grid-cols-3"
      >
        <vk-navbar
          v-for="color in colorOptions"
          :key="color.value"
          :color="color.value"
        >
          <vk-icon
            name="brand-vue"
            size="md"
          />
          <span class="font-semibold ml-4">{{ color.label }}</span>
        </vk-navbar>

        <template #code>
          <code-block :code="generateSnippet<string>('color', { values: colorOptions.map(o => o.value), customSlot })" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        classes="sm:grid-cols-2"
      >
        <vk-navbar
          v-for="variant in variantOptions.withGradient"
          :key="variant.value"
          :variant="variant.value"
        >
          <vk-icon
            name="brand-vue"
            size="md"
          />
          <span class="font-semibold ml-4">{{ variant.label }}</span>
        </vk-navbar>

        <template #code>
          <code-block :code="generateSnippet<string>('variant', { values: variantOptions.withGradient.map(o => o.value), customSlot })" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        classes="sm:grid-cols-2 md:grid-cols-3"
      >
        <vk-navbar
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          :shape="shape.value"
        >
          <vk-icon
            name="brand-vue"
            size="md"
            class="text-white"
          />
          <span class="font-semibold ml-4">{{ shape.label }}</span>
        </vk-navbar>

        <template #code>
          <code-block :code="generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value), customSlot })" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        classes="sm:grid-cols-2"
      >
        <vk-navbar
          v-for="size in sizeOptions.general"
          :key="size.value"
          :size="size.value"
        >
          <vk-icon
            name="brand-vue"
            size="md"
            class="text-white"
          />
          <span class="font-semibold ml-4">{{ size.label }}</span>
        </vk-navbar>

        <template #code>
          <code-block :code="generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value), customSlot })" />
        </template>
      </example-section>

      <example-section title="Floating">
        <vk-navbar
          floating
        >
          <vk-icon
            name="brand-vue"
            size="md"
            class="text-white"
          />
          <span class="font-semibold ml-4">Floating</span>
        </vk-navbar>

        <template #code>
          <code-block :code="generateSnippet<boolean>('floating', { values: [true], customSlot })" />
        </template>
      </example-section>

      <example-section title="Flat">
        <vk-navbar
          flat
        >
          <vk-icon
            name="brand-vue"
            size="md"
            class="text-white"
          />
          <span class="font-semibold ml-4">Flat</span>
        </vk-navbar>

        <template #code>
          <code-block :code="generateSnippet<boolean>('flat', { values: [true], customSlot })" />
        </template>
      </example-section>

      <example-section title="Fixed">
        <div class="w-full z-20">
          <vk-navbar
            fixed
          >
            <vk-icon
              name="brand-vue"
              size="md"
              class="text-white"
            />
            <span class="font-semibold ml-4">Fixed</span>
          </vk-navbar>
        </div>

        <template #code>
          <code-block :code="generateSnippet<boolean>('fixed', { values: [true], customSlot })" />
        </template>
      </example-section>

      <example-section title="Vertical">
        <div class="h-56">
          <vk-navbar
            vertical
          >
            <vk-icon
              name="brand-vue"
              size="md"
              class="text-white"
            />
            <span class="font-semibold ml-4">Vertical</span>
          </vk-navbar>
        </div>

        <template #code>
          <code-block :code="generateSnippet<boolean>('vertical', { values: [true], customSlot })" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Navbar Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="navbarProps"
      />

      <h3>Navbar Slots</h3>
      <vk-table
        :headers="slotHeaders"
        :data="navbarSlots"
      />
    </template>
  </doc-section>
</template>
