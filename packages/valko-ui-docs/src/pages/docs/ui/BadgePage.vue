<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import colorOptions from '@/data/colorOptions'
import shapeOptions from '@/data/shapeOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import slotHeaders from '@/data/slotHeaders'

const form = ref({
  color: 'primary',
  shape: 'soft',
  size: 'md',
  placement: 'top-right',
  content: 'new',
  outlined: false,
  flat: false,
  hidden: false,
  dot: false
})

const placementOptions = [
  { value: 'top-right', label: 'Top Right' },
  { value: 'bottom-right', label: 'Bottom Right' },
  { value: 'top-left', label: 'Top Left' },
  { value: 'bottom-left', label: 'Bottom Left' }
]

const src = 'https://randomuser.me/api/portraits/women/12.jpg'

const badgeProps = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Badge.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'primary'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Badge.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Badge.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'placement',
    required: false,
    description: 'The placement of the Badge.',
    values: 'top-right | top-left | bottom-right | bottom-left',
    default: 'top-right'
  },
  {
    prop: 'content',
    required: false,
    description: 'The content displayed inside of the Badge.',
    values: 'number | string',
    default: ''
  },
  {
    prop: 'outlined',
    required: false,
    description: 'Displays an outline for the Badge.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'flat',
    required: false,
    description: 'Displays a shadow for the Badge.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'dot',
    required: false,
    description: 'If true the Badge will have smaller dimensions and not display content inside.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'hidden',
    required: false,
    description: 'If true the Badge will be hidden.',
    values: 'true, false',
    default: 'false'
  }
]

const badgeSlots = [
  {
    name: 'default',
    description: 'Slot for additional content to be placed inside the badge. This slot is typically used to include custom elements like icons, text, or other components.',
    example: '<template #default>\n  <!-- Your custom content goes here -->\n</template>'
  }
]

</script>

<template>
  <doc-section
    title="Badge"
    description="Visual element that displays additional information, such as notifications or states. Badges are typically used to indicate new or unread items, status indicators, or numeric counters."
  >
    <template #playground-view>
      <vk-badge
        :size="form.size"
        :shape="form.shape"
        :color="form.color"
        :placement="form.placement"
        :content="form.content"
        :outlined="form.outlined"
        :flat="form.flat"
        :hidden="form.hidden"
        :dot="form.dot"
      >
        <vk-avatar
          :src="src"
          color="secondary"
        />
      </vk-badge>
    </template>

    <template #playground-options>
      <vk-select
        placeholder="Color"
        size="sm"
        :options="colorOptions"
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
      <vk-input
        label="Content"
        v-model="form.content"
      />
      <vk-select
        placeholder="Placement"
        size="sm"
        :options="placementOptions"
        v-model="form.placement"
      />
      <vk-checkbox
        label="Outlined"
        v-model="form.outlined"
      />
      <vk-checkbox
        label="Flat"
        v-model="form.flat"
      />
      <vk-checkbox
        label="Hidden"
        v-model="form.hidden"
      />
      <vk-checkbox
        label="Dot"
        v-model="form.dot"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        gap
      >
        <div
          v-for="color in colorOptions"
          :key="color.value"
          class="flex flex-col items-center"
        >
          <span class="mb-2">{{ color.label }}</span>
          <vk-badge
            :color="color.value"
            content="new"
          >
            <vk-avatar
              :src="src"
              color="secondary"
            />
          </vk-badge>
        </div>
      </example-section>

      <example-section
        title="Shapes"
        gap
      >
        <div
          v-for="shape in shapeOptions"
          :key="shape.value"
          class="flex flex-col items-center"
        >
          <span class="mb-2">{{ shape.label }}</span>
          <vk-badge
            :shape="shape.value"
            content="new"
          >
            <vk-avatar
              :src="src"
              color="secondary"
            />
          </vk-badge>
        </div>
      </example-section>

      <example-section
        title="Sizes"
        gap
      >
        <div
          v-for="size in sizeOptions"
          :key="size.value"
          class="flex flex-col items-center"
        >
          <span class="mb-2">{{ size.label }}</span>
          <vk-badge
            :size="size.value"
            content="new"
          >
            <vk-avatar
              :src="src"
              color="secondary"
            />
          </vk-badge>
        </div>
      </example-section>

      <example-section
        title="Placements"
        gap
      >
        <div
          v-for="placement in placementOptions"
          :key="placement.value"
          class="flex flex-col items-center"
        >
          <span class="mb-2">{{ placement.label }}</span>
          <vk-badge
            :placement="placement.value"
            content="new"
          >
            <vk-avatar
              :src="src"
              color="secondary"
            />
          </vk-badge>
        </div>
      </example-section>

      <example-section
        title="Flat"
      >
        <vk-badge
          flat
          content="new"
        >
          <vk-avatar
            :src="src"
            color="secondary"
          />
        </vk-badge>
      </example-section>

      <example-section
        title="Outlined"
      >
        <vk-badge
          outlined
          content="new"
        >
          <vk-avatar
            :src="src"
            color="secondary"
          />
        </vk-badge>
      </example-section>

      <example-section
        title="Dot"
        gap
      >
        <div
          v-for="size in sizeOptions"
          :key="size.value"
          class="flex flex-col items-center"
        >
          <span class="mb-2">{{ size.label }}</span>
          <vk-badge
            :size="size.value"
            dot
          >
            <vk-avatar
              :src="src"
              color="secondary"
            />
          </vk-badge>
        </div>
      </example-section>

      <example-section
        title="Hidden"
      >
        <vk-badge
          hidden
        >
          <vk-avatar
            :src="src"
            color="secondary"
          />
        </vk-badge>
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Badge Props"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="badgeProps"
          />
        </example-section>

        <example-section
          title="Badge Slots"
          gap
        >
          <vk-data-table
            :headers="slotHeaders"
            :data="badgeSlots"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
