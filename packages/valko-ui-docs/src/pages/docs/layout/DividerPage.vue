<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '../../../components/DocSection'
import ExampleSection from '../../../components/ExampleSection'
import propHeaders from '@/data/propHeaders'

const form = ref({
  direction: 'vertical'
})

const directionOptions = [
  { value: 'vertical', label: 'Vertical' },
  { value: 'horizontal', label: 'Horizontal' }
]

const dividerProps = [
  {
    prop: 'direction',
    required: false,
    description: 'The direction of the Divider.',
    values: 'vertical, horizontal',
    default: 'vertical'
  }
]
</script>

<template>
  <doc-section
    title="Divider"
    description="Visual element used to separate or divide content within a user interface. Its primary purpose is to provide a clear and organized visual structure to the content, facilitating readability and comprehension. Dividers are especially useful in designs that contain distinct sections or blocks of information, helping to delineate them clearly and concisely."
  >
    <template #playground-view>
      <div :class="`w-full flex ${form.direction === 'vertical' ? 'flex-row' : 'flex-col'} justify-center p-4`">
        Artist
        <vk-divider
          :direction="form.direction"
        />
        Album
        <vk-divider
          :direction="form.direction"
        />
        Song
      </div>
    </template>
    <template #playground-options>
      <vk-select
        placeholder="Direction"
        size="sm"
        :options="directionOptions"
        v-model="form.direction"
      />
    </template>

    <template #examples>
      <example-section
        title="Direction"
        justify="start"
        gap
      >
        <div class="flex gap-20">
          <div>
            <span>Vertical</span>
            <div class="flex mt-6">
              Artist
              <vk-divider />
              Album
              <vk-divider />
              Song
            </div>
          </div>

          <div>
            <span>Horizontal</span>
            <div class="mt-6">
              Artist
              <vk-divider direction="horizontal" />
              Album
              <vk-divider direction="horizontal" />
              Song
            </div>
          </div>
        </div>
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Divider Props"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="dividerProps"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
