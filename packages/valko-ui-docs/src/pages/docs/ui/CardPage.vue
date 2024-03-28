<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '../../../components/DocSection'
import ExampleSection from '../../../components/ExampleSection'
import variantOptions from '@/data/variantOptions'
import shapeOptions from '@/data/shapeOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import emitHeaders from '@/data/emitHeaders'
import slotHeaders from '@/data/slotHeaders'

const form = ref({
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  direction: 'col',
  pressable: false,
  flat: false
})

const directionOptions = [
  { value: 'row', label: 'Row' },
  { value: 'col', label: 'Column' },
  { value: 'row-reverse', label: 'Row Reverse' },
  { value: 'col-reverse', label: 'Column Reverse' }
]

const sizes = [
  ...sizeOptions,
  { value: 'full', label: 'Full' }
]

const apiData = [
  {
    prop: 'variant',
    required: false,
    description: 'The variant of the Card.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Card.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Card.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'flat',
    required: false,
    description: 'Displays a shadow for the Card.',
    values: 'true, false',
    default: 'false'
  }
]

const emitData = [
  {
    event: 'close',
    type: '() => void',
    values: '',
    description: 'Emitted when the alert is closed by the user.'
  }
]

const slotData = [
  {
    name: 'default',
    description: 'Slot for the main content of the alert.',
    example: '<template #default>\n  <p>This is the main content of the alert.</p>\n</template>'
  }
]

const onClick = () => {
  console.log('Pressed')
}
</script>

<template>
  <doc-section
    title="Card"
    description=""
  >
    <template #playground-view>
      <div class="w-full flex justify-center p-4">
        <vk-card
          :is-pressable="form.pressable"
          :variant="form.variant"
          :shape="form.shape"
          :size="form.size"
          :direction="form.direction"
          :flat="form.flat"
          @click="onClick"
          class="w-64 h-64"
        >
          <vk-card-header>Hello Header</vk-card-header>
          <vk-card-image
            src="https://picsum.photos/200"
            class="text-white"
          >
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam in fugit consectetur, quos sit culpa atque odio officia sapiente enim assumenda dolorem ipsa odit. Commodi iure laborum veritatis aut laudantium.</p>
          </vk-card-image>
          <vk-card-body>Hello Body</vk-card-body>
          <vk-card-footer>Hello Footer</vk-card-footer>
        </vk-card>
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
        placeholder="Shape"
        size="sm"
        :options="shapeOptions"
        v-model="form.shape"
      />
      <vk-select
        placeholder="Size"
        size="sm"
        :options="sizes"
        v-model="form.size"
      />
      <vk-select
        placeholder="Direction"
        size="sm"
        :options="directionOptions"
        v-model="form.direction"
      />
      <vk-checkbox
        label="Pressable"
        v-model="form.pressable"
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
          title="Card Props"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="apiData"
          />
        </example-section>

        <example-section
          title="Card Emits"
          gap
        >
          <vk-data-table
            :headers="emitHeaders"
            :data="emitData"
          />
        </example-section>

        <example-section
          title="Card Slots"
          gap
        >
          <vk-data-table
            :headers="slotHeaders"
            :data="slotData"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
