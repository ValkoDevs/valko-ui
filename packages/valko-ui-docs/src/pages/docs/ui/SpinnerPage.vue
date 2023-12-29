<script setup lang="ts">
import {ref} from 'vue'
import DocSection from '../../../components/DocSection'
import ExampleSection from '../../../components/ExampleSection'

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
  variants: 'primary',
  sizes: 'md' 
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
    description: 'The color variant of the Spinner.',
    values: 'primary, secondary, error, warning, info, success',
    default: 'primary'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Spinner.',
    values: 'xs, sm, md, lg',
    default: 'md'
  }
]
</script>

<template>
  <doc-section
    title="Spinner"
    description="Spinner desc"
  >
    <template #playground-view>
      <div class="w-full flex justify-center items-center">
        <vk-spinner
          :variant="form.variants"
          :size="form.sizes"
        />
      </div>
    </template>

    <template #playground-options>
      <div class="flex">
        <div class="w-1/2 px-4">
          <form action="">
            <div class="flex mb-1">
              <vk-select
                type="outlined"
                placeholder="Variant"
                size="sm"
                :options="variants"
                v-model="form.variants"
              />
            </div>
            <div class="flex mb-1">
              <vk-select
                type="outlined"
                placeholder="Size"
                size="sm"
                :options="sizes"
                v-model="form.sizes"
              />
            </div>
          </form>
        </div>
      </div>
    </template>

    <template #examples>
      <example-section
        title="Colors"
        justify="start"
        gap
      >
        <div class="gap-x-12 gap-y-4 grid grid-cols-2">
          <div
            v-for="variant in variants"
            :key="variant.value"
            class="flex gap-2 items-center"
          >
            <vk-spinner 
              :variant="variant.value"
            /> {{ variant.label }}
          </div>
        </div>
      </example-section>

      <example-section
        title="Sizes"
        justify="start"
        align="start"
        gap
      >
        <div class="gap-x-12 gap-y-4 grid grid-cols-2">
          <div
            v-for="size in sizes"
            :key="size.value"
            class="flex gap-2 items-center"
          >
            <vk-spinner 
              :size="size.value"
            /> {{ size.label }}
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
