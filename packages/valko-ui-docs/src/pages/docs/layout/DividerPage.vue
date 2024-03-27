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

const apiData = [
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
      <div class="w-full flex flex-row justify-center p-4">
        <vk-divider
          :direction="form.direction"
        />
        Artist
        <vk-divider
          :direction="form.direction"
        />
        Album
        <vk-divider
          :direction="form.direction"
        />
        Song
        <vk-divider
          :direction="form.direction"
        />
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
        justify="around"
        gap
      >
        <div class="flex">
          Direction
          <vk-divider />
          Is
          <vk-divider />
          Vertical
        </div>
        <div class="">
          Direction
          <vk-divider
            direction="horizontal"
          />
          Is
          <vk-divider
            direction="horizontal"
          />
          Horizontal
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
            :data="apiData"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
