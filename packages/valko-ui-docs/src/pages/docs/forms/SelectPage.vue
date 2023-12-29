<script setup lang="ts">
import {Ref, ref} from 'vue'
import DocSection from '../../../components/DocSection'
import ExampleSection from '../../../components/ExampleSection'

const selectDisabled = ref(false)
const selectFlat = ref(false)
const selectRounded = ref(false)
const selectReadonly = ref(false)
const selectMultiple = ref(false)
const selectHelper = ref('Helpertext')
const selectLabel = ref('Label')
const exampleReadonly = ref(1)

const people = [
  {value: 1, label: 'Wade Cooper'},
  {value: 2, label: 'Arlene Mccoy'},
  {value: 3, label: 'Devon Webb'},
  {value: 4, label: 'Tom Cook'}
]

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
 
const form: Ref<Record<string, string>> = ref({
  playground: '',
  primary: '',
  secondary: '',
  error: '',
  success: '',
  warning: '',
  info: '',
  filled: '',
  outlined: '',
  ghost: '',
  rounded: '',
  xs: '',
  sm: '',
  md: '',
  lg: '',
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
    description: 'The color variant of the Select.',
    values: 'primary, secondary, error, warning, info, success',
    default: 'primary'
  },
  {
    prop: 'type',
    required: false,
    description: 'The type of the Select.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Select.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'disabled',
    required: false,
    description: 'Whether the Select is disabled or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'rounded',
    required: false,
    description: 'Whether the Select is rounded or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'multiple',
    required: false,
    description: 'Wheter the Select is enabled to choose multiple options',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'options',
    required: false,
    description: 'An array of options for the Select',
    values: 'array',
    default: 'false'
  },
  {
    prop: 'modelValue',
    required: false,
    description: 'The v-model for the Select',
    values: 'string, number, Array<string | number>',
    default: 'false'
  },
  {
    prop: 'readonly',
    required: false,
    description: 'Wheter the Select is readonly or not',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'placeholder',
    required: false,
    description: 'The placeholder for the Select',
    values: 'string',
    default: 'false'
  },
  {
    prop: 'helpertext',
    required: false,
    description: 'A hint for the Select',
    values: 'string',
    default: 'false'
  },
  {
    prop: 'iconLeft',
    required: false,
    description: 'A icon on the left side for the Select',
    values: 'string',
    default: ''
  },
  {
    prop: 'iconRight',
    required: false,
    description: 'A icon on the right side for the Select',
    values: 'string',
    default: 'chevron-down'
  }
]
</script>
 
<template>
  <doc-section
    title="Select Component"
    description="Selects are used to choose between many options either one or several enabling a more dynamic form"
  >
    <template #playground-view>
      <div class="w-full flex px-2">
        <vk-select
          :placeholder="selectLabel"
          :helpertext="selectHelper"
          v-model="form.playground"
          :options="people"
          :type="form.types"
          :variant="form.variants"
          :readonly="selectReadonly"
          :rounded="selectRounded"
          :disabled="selectDisabled"
          :flat="selectFlat"
          :size="form.sizes"
          :multiple="selectMultiple"
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
                v-model="selectLabel"
              />
            </div>
            <div class="flex mb-1">
              <vk-input 
                kind="outlined" 
                label="Helpertext"
                size="sm"
                v-model="selectHelper"
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
                placeholder="Sizes"
                size="sm"
                :options="sizes"
                v-model="form.sizes"
              />
            </div>
            <div class="flex">
              <vk-checkbox
                label="Multiple"
                v-model="selectMultiple"
              />
            </div>
            <div class="flex">
              <vk-checkbox
                label="Disabled"
                v-model="selectDisabled"
              />
            </div>
            <div class="flex">
              <vk-checkbox
                label="Rounded"
                v-model="selectRounded"
              />
            </div>
            <div class="flex">
              <vk-checkbox
                label="Readonly"
                v-model="selectReadonly"
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
          <vk-select
            v-for="variant in variants"
            :key="variant.value"
            :variant="variant.value"
            :placeholder="variant.label"
            :options="people"
            v-model="form[variant.value]"
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
          <vk-select
            v-for="type in types"
            :key="type.value"
            :type="type.value"
            :placeholder="type.label"
            :options="people"
            v-model="form[type.value]"
          />
          <vk-select
            disabled
            placeholder="Disabled"
          />
          <vk-select
            type="outlined"
            :options="people"
            rounded
            v-model="form.rounded"
            placeholder="Rounded"
          />
          <vk-select
            readonly
            :options="people"
            placeholder="Readonly"
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
        <div class="grow gap-4 grid grid-cols-2 items-end">
          <vk-select
            v-for="size in sizes"
            :key="size.value"
            :size="size.value"
            :placeholder="size.label"
            :options="people"
            v-model="form[size.value]"
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
