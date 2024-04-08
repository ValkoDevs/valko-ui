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

const cardProps = [
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
    prop: 'isPressable',
    required: false,
    description: 'Wether the Card allows to be clicked.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'flat',
    required: false,
    description: 'Displays a shadow for the Card.',
    values: 'true, false',
    default: 'false'
  }
]

const cardEmits = [
  {
    event: 'close',
    type: '() => void',
    values: '',
    description: 'Emitted when the alert is closed by the user.'
  }
]

const cardSlots = [
  {
    name: 'default',
    description: 'Slot for the main content of the alert.',
    example: '<template #default>\n  <p>This is the main content of the alert.</p>\n</template>'
  }
]

const onClick = () => {
  alert('Pressed')
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
        >
          <vk-card-image
            src="https://picsum.photos/id/237/200"
            class="text-white"
            height="15rem"
          />
          <vk-card-body>
            <h2 class="font-semibold">
              My Dog
            </h2>
            <p>Pana's name is Roberto</p>
          </vk-card-body>
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
        title="Variants"
        justify="start"
        gap
      >
        <vk-card
          v-for="variant in variantOptions"
          :key="variant.value"
          :variant="variant.value"
        >
          <vk-card-image
            src="https://picsum.photos/id/237/200"
            class="text-white"
            height="15rem"
          />
          <vk-card-body>
            <h2 class="font-bold">
              {{ variant.label }}
            </h2>
            <h3 class="font-semibold">
              My Dog
            </h3>
            <p>Pana's name is Roberto</p>
          </vk-card-body>
        </vk-card>
      </example-section>

      <example-section
        title="Shapes"
        justify="start"
        gap
      >
        <vk-card
          v-for="shape in shapeOptions"
          :key="shape.value"
          :shape="shape.value"
        >
          <vk-card-image
            src="https://picsum.photos/id/237/200"
            class="text-white"
            height="15rem"
          />
          <vk-card-body>
            <h2 class="font-bold">
              {{ shape.label }}
            </h2>
            <h3 class="font-semibold">
              My Dog
            </h3>
            <p>Pana's name is Roberto</p>
          </vk-card-body>
        </vk-card>
      </example-section>

      <example-section
        title="Sizes"
        justify="around"
        wrap
        gap
      >
        <vk-card
          v-for="size in sizes"
          :key="size.value"
          :size="size.value"
        >
          <vk-card-image
            src="https://picsum.photos/id/237/200"
            class="text-white"
            height="15rem"
          />
          <vk-card-body>
            <h2 class="font-bold">
              {{ size.label }}
            </h2>
            <h3 class="font-semibold">
              My Dog
            </h3>
            <p>Pana's name is Roberto</p>
          </vk-card-body>
        </vk-card>
      </example-section>

      <example-section
        title="Pressable"
        justify="start"
        gap
      >
        <vk-card
          is-pressable
        >
          <vk-card-image
            src="https://picsum.photos/id/237/200"
            class="text-white"
            height="15rem"
          />
          <vk-card-body>
            <h2 class="font-bold">
              Pressable
            </h2>
            <h3 class="font-semibold">
              My Dog
            </h3>
            <p>Pana's name is Roberto</p>
          </vk-card-body>
        </vk-card>
      </example-section>

      <example-section
        title="Flat"
        justify="start"
        gap
      >
        <vk-card
          flat
        >
          <vk-card-image
            src="https://picsum.photos/id/237/200"
            class="text-white"
            height="15rem"
          />
          <vk-card-body>
            <h2 class="font-bold">
              Flat
            </h2>
            <h3 class="font-semibold">
              My Dog
            </h3>
            <p>Pana's name is Roberto</p>
          </vk-card-body>
        </vk-card>
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Card Props"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="cardProps"
          />
        </example-section>

        <example-section
          title="Card Emits"
          gap
        >
          <vk-data-table
            :headers="emitHeaders"
            :data="cardEmits"
          />
        </example-section>

        <example-section
          title="Card Slots"
          gap
        >
          <vk-data-table
            :headers="slotHeaders"
            :data="cardSlots"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
