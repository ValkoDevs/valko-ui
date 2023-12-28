<script setup lang="ts">
import {ref} from 'vue'
import DocSection from '../../../components/DocSection'
import ExampleSection from '../../../components/ExampleSection'

const selectDisabled = ref(false)
const selectFlat = ref(false)
const selectRounded = ref(false)
const selectReadonly = ref(false)
const selectMultiple = ref(false)
const selectHelper = ref('Helpertext')
const selectLabel = ref('Label')

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
  {value:'xs', label:'XS'},
  {value:'sm', label:'SM'},
  {value:'md', label:'MD'},
  {value:'lg', label:'LG'}
]
 
const form = ref({
  person_playground: null,
  person_primary: null,
  person_secondary: null,
  person_error: null,
  person_success: null,
  person_warning: null,
  person_info: null,
  person_filled: null,
  person_outlined: null,
  person_ghost: null,
  person_rounded: null,
  person_xs: null,
  person_sm: null,
  person_md: null,
  person_lg: null,
  options_variants: 'primary',
  options_types: 'filled',
  options_sizes: 'md'
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
          v-model="form.person_playground"
          :options="people"
          :type="form.options_types"
          :variant="form.options_variants"
          :readonly="selectReadonly"
          :rounded="selectRounded"
          :disabled="selectDisabled"
          :flat="selectFlat"
          :size="form.options_sizes"
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
                v-model="form.options_variants"
              />
            </div>
            <div class="flex mb-1">
              <vk-select
                type="outlined"
                placeholder="Type"
                size="sm"
                :options="types"
                v-model="form.options_types"
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
        <div class="grow gap-4 flex flex-col">
          <vk-select
            variant="primary"
            placeholder="Primary"
            :options="people"
            v-model="form.person_primary"
          />
          <vk-select
            variant="secondary"
            placeholder="Secondary"
            :options="people"
            v-model="form.person_secondary"
          />
          <vk-select
            variant="error"
            placeholder="Error"
            :options="people"
            v-model="form.person_error"
          />
        </div>
        <div class="grow gap-4 flex flex-col">
          <vk-select
            variant="success"
            placeholder="Success"
            :options="people"
            v-model="form.person_success"
          />
          <vk-select
            variant="warning"
            placeholder="Warning"
            :options="people"
            v-model="form.person_warning"
          />
          <vk-select
            variant="info"
            placeholder="Info"
            :options="people"
            v-model="form.person_info"
          />
        </div>
      </example-section>

      <example-section
        title="Types"
        justify="start"
        align="start"
        gap
      >
        <div class="grow gap-4 flex flex-col justify-items-start h-full">
          <vk-select
            type="filled"
            placeholder="Filled"
            :options="people"
            v-model="form.person_filled"
            class="mr-2"
          />
          <vk-select
            type="outlined"
            placeholder="Outlined"
            :options="people"
            v-model="form.person_outlined"
            class="mr-2"
          />
          <vk-select
            type="ghost"
            placeholder="Ghost"
            :options="people"
            v-model="form.person_ghost"
            class="mr-2"
          />
        </div>
        <div class="grow gap-4 flex flex-col items-start h-full">
          <vk-select
            disabled
            placeholder="Disabled"
            class="mr-2"
          />
          <vk-select
            rounded
            type="outlined"
            placeholder="Rounded"
            :options="people"
            v-model="form.person_rounded"
          />
        </div>
      </example-section>

      <example-section 
        title="Sizes"
        justify="start"
        align="start"
        gap
      >
        <div class="w-full grid grid-cols-2 gap-4 items-end">
          <vk-select
            size="xs"
            placeholder="Extra Small"
            :options="people"
            v-model="form.person_xs"
          />
          <vk-select
            size="sm"
            placeholder="Small"
            :options="people"
            v-model="form.person_sm"
          />
          <vk-select
            size="md"
            placeholder="Medium"
            :options="people"
            v-model="form.person_md"
          />
          <vk-select 
            size="lg"
            placeholder="Large"
            :options="people"
            v-model="form.person_lg"
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
