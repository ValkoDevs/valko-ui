<script setup lang="ts">
import {ref} from 'vue'
import DocSection from '../../../components/DocSection'
import ExampleSection from '../../../components/ExampleSection'

const currentPage = ref(1)
const totalPages = ref(20)
const paginationFlat = ref(false)
const paginationDisabled = ref(false)

const variants = [
  {value:'primary', label:'Primary'},
  {value:'secondary', label:'Secondary'},
  {value:'success', label:'Success'},
  {value:'info', label:'Info'},
  {value:'warning', label:'Warning'},
  {value:'error', label:'Error'}
]

const sizes = [
  {value:'xs', label:'Extra Small'},
  {value:'sm', label:'Small'},
  {value:'md', label:'Medium'},
  {value:'lg', label:'Large'}
]

const form = ref({
  options_variants: 'primary',
  options_sizes: 'md',
})

const apiHeaders = [
  {
    key: 'prop',
    label: 'Property'
  },
  {
    key: 'required',
    label: 'Required'
  },
  {
    key: 'description',
    label: 'Description'
  },
  {
    key: 'values',
    label: 'Values'
  },
  {
    key: 'default',
    label: 'Default'
  }
]

const apiData = [
  {
    prop: 'variant',
    required: false,
    description: 'The pagination color theme.',
    values: 'primary, secondary, error, warning, info, success',
    default: 'primary'
  },
  {
    prop: 'size',
    required: false,
    description: 'The pagination size.',
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
  },
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
          :variant="form.options_variants"
          :size="form.options_sizes"
          :current-page="currentPage"
          :pages="totalPages"
          :flat="paginationFlat"
          :disabled="paginationDisabled"
          v-model="currentPage"
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
                kind="outlined"
                label="Total Pages"
                size="sm"
                v-model="totalPages"
              />
            </div>
            <div class="flex mb-1">
              <vk-select
                type="outlined"
                placeholder="Variant"
                size="sm"
                :options="variants"
                v-model="form.options_variants"
              />
            </div>
            <div class="flex mb-1">
              <vk-select
                type="outlined"
                placeholder="Sizes"
                size="sm"
                :options="sizes"
                v-model="form.options_sizes"
              />
            </div>
            <div>
              <vk-checkbox
                v-model="paginationFlat"
                label="Flat"
              />
            </div>
            <div>
              <vk-checkbox
                v-model="paginationDisabled"
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
            v-for="variant in variants"
            :key="variant.value"
            class="flex flex-col items-start"
          >
            <span class="mb-3"> {{ variant.label }}</span>
            <vk-pagination
              :variant="variant.value"
              :pages="totalPages"
              v-model="currentPage"
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
            v-for="size in sizes"
            :key="size.value"
          >
            <span class="mb-3"> {{ size.label }}</span>
            <vk-pagination
              :size="size.value"
              :pages="totalPages"
              v-model="currentPage"
            />
          </div>
        </div>
      </example-section>
    </template>

    <template #api>
      <vk-data-table
        :headers="apiHeaders"
        :data="apiData"
      />
    </template>
  </doc-section>
</template>
