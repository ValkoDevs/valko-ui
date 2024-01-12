<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import sizeOptions from '@/data/sizeOptions'
import colorOptions from '@/data/colorOptions'
import propHeaders from '@/data/propHeaders'

const form = ref({
  color: 'primary',
  size: 'md',
  currentPage: ref(1),
  totalPages: ref(20),
  flat: ref(false),
  disabled: ref(false)
})

const apiData = [
  {
    prop: 'color',
    required: false,
    description: 'The Pagination color theme.',
    values: 'primary, secondary, error, warning, info, success',
    default: 'primary'
  },
  {
    prop: 'size',
    required: false,
    description: 'The Pagination size.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'pages',
    required: false,
    description: 'The total number of pages.',
    values: 'number',
    default: '1'
  },
  {
    prop: 'modelValue',
    required: false,
    description: 'The current page.',
    values: 'number',
    default: '1'
  }
]
</script>

<template>
  <doc-section
    title="Pagination Component"
    description="A simple but elegant pagination component"
  >
    <template #playground-view>
      <div class="w-full flex px-2 justify-center">
        <vk-pagination
          :color="form.color"
          :size="form.size"
          :current-page="form.currentPage"
          :pages="form.totalPages"
          :flat="form.flat"
          :disabled="form.disabled"
          v-model="form.currentPage"
        />
      </div>
    </template>

    <template #playground-options>
      <div class="flex">
        <div class="w-1/2 px-4">
          <form action="">
            <div class="flex mb-1">
              <vk-input
                type="number"
                label="Total Pages"
                size="sm"
                v-model="form.totalPages"
              />
            </div>
            <div class="flex mb-1">
              <vk-select
                placeholder="Color"
                size="sm"
                :options="colorOptions"
                v-model="form.color"
              />
            </div>
            <div class="flex mb-1">
              <vk-select
                placeholder="Size"
                size="sm"
                :options="sizeOptions"
                v-model="form.size"
              />
            </div>
            <div>
              <vk-checkbox
                v-model="form.flat"
                label="Flat"
              />
            </div>
            <div>
              <vk-checkbox
                v-model="form.disabled"
                label="Disabled"
              />
            </div>
          </form>
        </div>
      </div>
    </template>

    <template #examples>
      <example-section
        title="Colors"
        gap
      >
        <div class="gap-4 grid grid-cols-2">
          <div
            v-for="color in colorOptions"
            :key="color.value"
            class="flex flex-col items-start"
          >
            <span class="mb-3"> {{ color.label }}</span>
            <vk-pagination
              :color="color.value"
              :pages="form.totalPages"
              v-model="form.currentPage"
            />
          </div>
        </div>
      </example-section>

      <example-section
        title="Sizes"
        gap
      >
        <div class="gap-4 grid grid-cols-2">
          <div
            v-for="size in sizeOptions"
            :key="size.value"
          >
            <span class="mb-3"> {{ size.label }}</span>
            <vk-pagination
              :size="size.value"
              :pages="form.totalPages"
              v-model="form.currentPage"
            />
          </div>
        </div>
      </example-section>
    </template>

    <template #api>
      <vk-data-table
        :headers="propHeaders"
        :data="apiData"
      />
    </template>
  </doc-section>
</template>
