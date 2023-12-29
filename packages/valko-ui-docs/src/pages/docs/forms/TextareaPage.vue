<script setup lang="ts">
import {ref} from 'vue'
import DocSection from '../../../components/DocSection'
import ExampleSection from '../../../components/ExampleSection'

const textareaDisabled = ref(false)
const textareaReadonly = ref(false)
const textareaValue = ref('')
const labelValue = ref('Label')
const helperValue = ref('Helpertext')
const textareaCounter = ref(null)
const exampleReadonly = ref('Example readonly text')

const variants = [
  {value:'primary', label:'Primary'},
  {value:'secondary', label:'Secondary'},
  {value:'success', label:'Success'},
  {value:'info', label:'Info'},
  {value:'warning', label:'Warning'},
  {value:'error', label:'Error'}
]

const types = [
  {value:'filled', label:'Filled'},
  {value:'outlined', label:'Outlined'},
  {value:'ghost', label:'Ghost'}
]

const sizes = [
  {value:'xs', label:'Extra Small'},
  {value:'sm', label:'Small'},
  {value:'md', label:'Medium'},
  {value:'lg', label:'Large'}
]

const form = ref({
  variants: 'primary',
  types: 'filled',
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
    description: 'The color variant of the Textarea.',
    values: 'primary, secondary, error, warning, info, success',
    default: 'primary'
  },
  {
    prop: 'type',
    required: false,
    description: 'The type of the Textarea.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Textarea.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'disabled',
    required: false,
    description: 'Whether the Textarea is disabled or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'modelValue',
    required: false,
    description: 'The v-model for the Textarea',
    values: 'string',
    default: 'false'
  },
  {
    prop: 'readonly',
    required: false,
    description: 'Wheter the Textarea is readonly or not',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'label',
    required: false,
    description: 'The label for the Textarea',
    values: 'string',
    default: 'false'
  },
  {
    prop: 'helpertext',
    required: false,
    description: 'A hint for the Textarea',
    values: 'string',
    default: 'false'
  },
]
</script>

<template>
  <doc-section
    title="Textarea"
    description="Textarea component is a multi-line Input which allows you to write large texts."
  >
    <template #playground-view>
      <div class="w-full p-4">
        <vk-textarea
          :variant="form.variants"
          :size="form.sizes"
          :disabled="textareaDisabled"
          :readonly="textareaReadonly"
          :type="form.types"
          v-model="textareaValue"
          :label="labelValue"
          :maxlength="textareaCounter"
          :helpertext="helperValue"
        />
      </div>
    </template>

    <template #playground-options>
      <div class="flex">
        <div class="w-1/2 px-4">
          <form action="">
            <div class="flex mb-1">
              <vk-input 
                kind="outlined" 
                label="Label"
                size="sm"
                v-model="labelValue"
              />
            </div>
            <div class="flex mb-1">
              <vk-input 
                kind="outlined" 
                label="Helpertext"
                size="sm"
                v-model="helperValue"
              />
            </div>
            <div class="flex mb-1">
              <vk-input 
                kind="outlined" 
                label="Counter"
                type="number"
                size="sm"
                v-model="textareaCounter"
              />
            </div>
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
                placeholder="Type"
                size="sm"
                :options="types"
                v-model="form.types"
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
            <div class="flex">
              <vk-checkbox
                label="Disabled"
                v-model="textareaDisabled"
              />
            </div>
            <div class="flex">
              <vk-checkbox
                label="Readonly"
                v-model="textareaReadonly"
              />
            </div>
          </form>
        </div>
      </div>
    </template>

    <template #examples>
      <example-section
        title="Colors"
        justify="around"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-textarea
            v-for="variant in variants"
            :key="variant.value"
            :variant="variant.value"
            :label="variant.label"
          />
        </div>
      </example-section>

      <example-section
        title="Types"
        justify="start"
        align="start"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-textarea 
            v-for="type in types"
            :key="type.value"
            :type="type.value"
            :label="type.label"
          />
          <vk-textarea
            disabled
            label="Disabled"
          />
          <vk-textarea
            readonly
            label="Readonly"
            v-model="exampleReadonly"
          />
        </div>
      </example-section>

      <example-section
        title="Sizes"
        justify="start"
        align="start"
        gap
      >
        <div class="w-full grid grid-cols-2 gap-4 items-start">
          <vk-textarea
            v-for="size in sizes"
            :key="size.value"
            :size="size.value"
            :label="size.label"
          />
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