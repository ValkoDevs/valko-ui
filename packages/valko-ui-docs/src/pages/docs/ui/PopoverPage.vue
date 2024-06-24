<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import shapeOptions from '@/data/shapeOptions'
import propHeaders from '@/data/propHeaders'
import slotHeaders from '@/data/slotHeaders'

const form = ref({
  shape: 'soft',
  isOpen: false,
  flat: false,
  rounded: false,
  soft: false,
  square: false
})

const popoverStates = ref(shapeOptions.map(() => false))

const togglePopover = (index: number) => {
  popoverStates.value[index] = !popoverStates.value[index]
}

const popoverProps = [
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Popover.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    prop: 'isOpen',
    required: false,
    description: 'The state of the Popover.',
    values: 'true, false',
    default: 'false'
  }
]

const popoverSlots = [
  {
    name: 'default',
    description: 'Slot for the component that will display the Popover.',
    example: '<template #default>\n  <vk-button>Click Me.</vk-button>\n</template>'
  },
  {
    name: 'popover-content',
    description: 'Slot for the main content of the Popover.',
    example: '<template #default>\n  <p>This is the main content of the Popover.</p>\n</template>'
  }
]
</script>

<template>
  <doc-section
    title="Popover"
    description="A versatile UI element designed to display additional content upon user interaction. It can be used for tooltips, dropdowns, or any contextual information that needs to be shown when a user interacts with a specific element on the page."
  >
    <template #playground-view>
      <div class="w-full flex justify-center p-4">
        <vk-popover
          :shape="form.shape"
          :is-open="form.isOpen"
          :flat="form.flat"
        >
          <template #default>
            <vk-button @click="() => { form.isOpen = !form.isOpen }">
              Click Me
            </vk-button>
          </template>

          <template #popover-content>
            <span>This is the popover</span>
            <div class="flex justify-start items-center w-40 p-2">
              <vk-button size="xs">
                <vk-icon name="home" />
                <span>Back to home</span>
              </vk-button>
            </div>
          </template>
        </vk-popover>
      </div>
    </template>
    <template #playground-options>
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
        title="Shapes"
        justify="around"
        gap
      >
        <vk-popover
          v-for="(shape, index) in shapeOptions"
          :key="shape.value"
          :shape="shape.value"
          :is-open="popoverStates[index]"
        >
          <template #default>
            <vk-button @click="togglePopover(index)">
              {{ shape.label }}
            </vk-button>
          </template>
          <template #popover-content>
            {{ shape.label }}
          </template>
        </vk-popover>
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Popover Props"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="popoverProps"
          />
        </example-section>

        <example-section
          title="Popover Slots"
          gap
        >
          <vk-data-table
            :headers="slotHeaders"
            :data="popoverSlots"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
