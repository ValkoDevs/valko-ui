<script setup lang="ts">
import { ref, watch } from 'vue'
import DocSection from '../../../components/DocSection'
import ExampleSection from '../../../components/ExampleSection'

const cbDisabled = ref(false)
const cbFlat = ref(false)
const cbRounded = ref(false)
const checked = ref<boolean | null>(false)
const cbErrorText = ref('')
const cbIndeterminate = ref(false)
const cbReadOnly = ref(false)
const labelValue = ref('Checkbox')

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
  {value:'outlined', label:'Outlined'}
]

const sizes = [
  {value:'xs', label:'XS'},
  {value:'sm', label:'SM'},
  {value:'md', label:'MD'},
  {value:'lg', label:'LG'}
]

const positions = [
  {value: false, label:'Right'},
  {value: true, label:'Left'},
]

const form = ref({
  options_variants: 'primary',
  options_types: 'filled',
  options_sizes: 'md',
  options_positions: false
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
    description: 'The color variant of the Checkbox.',
    values: 'primary, secondary, error, warning, info, success',
    default: 'primary'
  },
  {
    prop: 'type',
    required: false,
    description: 'The type of the Checkbox.',
    values: 'filled, outlined',
    default: 'filled'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Checkbox.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'disabled',
    required: false,
    description: 'Whether the Checkbox is disabled or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'rounded',
    required: false,
    description: 'Whether the Checkbox is rounded or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'modelValue',
    required: false,
    description: 'The v-model for the Checkbox',
    values: 'boolean | null',
    default: 'false'
  },
  {
    prop: 'readonly',
    required: false,
    description: 'Wheter the Checkbox is readonly or not',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'label',
    required: false,
    description: 'The label for the Checkbox',
    values: 'string',
    default: 'Checkbox'
  },
  {
    prop: 'errorText',
    required: false,
    description: 'Displays a error message under the Checkbox',
    values: 'string',
    default: ''
  },
  {
    prop: 'indeterminate',
    required: false,
    description: 'Checks all Checkbox children',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'labelPosition',
    required: false,
    description: 'Moves the label of the Checkbox to left or right',
    values: 'true, false',
    default: 'false'
  },
]

/* 
* This two watch functions control the indeterminate checkbox
* in the documentation page so it is synchronized 
* with the status of the checkbox in the sandbox
*/
watch(checked, () => {
  if (checked.value !== null) cbIndeterminate.value = false
})
watch(cbIndeterminate, () => {
  if (cbIndeterminate.value) checked.value = null
  else checked.value = true
})
watch([checked, cbReadOnly], ([newChecked, newReadOnly]) => {
  if (newReadOnly && newChecked !== true)  {
    checked.value = true
  }
})
</script>

<template>
  <doc-section
    title="Checkbox"
    description="The checkbox component provides users the ability to choose between two distinct values. These are very similar to a switch and can be used in complex forms and checklists"
  >
    <template #playground-view>
      <div class="w-full flex justify-center">
        <vk-checkbox
          :variant="form.options_variants"
          :type="form.options_types"
          :size="form.options_sizes"
          :error-text="cbErrorText"
          :disabled="cbDisabled"
          :flat="cbFlat"
          :rounded="cbRounded"
          :label-position="form.options_positions"
          :read-only="cbReadOnly"
          :indeterminate="cbIndeterminate"
          v-model="checked"
          :label="labelValue"
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
                label="Error Text"
                size="sm"
                v-model="cbErrorText"
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
            <div class="flex mb-1">
              <vk-select
                type="outlined"
                placeholder="Label Position"
                size="sm"
                :options="positions"
                v-model="form.options_positions"
              />
            </div>
            <div class="flex">
              <vk-checkbox
                label="Disabled"
                v-model="cbDisabled"
              />
            </div>
            <div class="flex">
              <vk-checkbox
                label="Rounded"
                v-model="cbRounded"
              />
            </div>
            <div class="flex">
              <vk-checkbox
                label="Flat"
                v-model="cbFlat"
              />
            </div>
            <div class="flex">
              <vk-checkbox
                label="Readonly"
                v-model="cbReadOnly"
              />
            </div>
            <div class="flex">
              <vk-checkbox
                label="Inderteminate"
                v-model="cbIndeterminate"
              />
            </div>
          </form>
        </div>
      </div>
    </template>

    <template #examples>
      <example-section
        title="Colors"
        justify="evenly"
        gap
      >
        <div class="grow gap-4 flex flex-col">
          <vk-checkbox
            :model-value="true"
            label="Primary" 
            variant="primary"
          />
          <vk-checkbox
            :model-value="true"
            label="Secondary" 
            variant="secondary" 
          />
          <vk-checkbox
            :model-value="true"
            label="Error" 
            variant="error" 
          />
        </div>
        <div class="grow gap-4 flex flex-col">
          <vk-checkbox
            :model-value="true"
            label="Success" 
            variant="success" 
          />
          <vk-checkbox
            :model-value="true"
            label="Warning" 
            variant="warning" 
          />
          <vk-checkbox
            :model-value="true"
            label="Info" 
            variant="info" 
          />
        </div>
      </example-section>

      <example-section
        title="Types"
        justify="center"
        align="start"
        gap
      >
        <div class="grow gap-4 flex flex-col">
          <vk-checkbox
            :model-value="true"
            label="Flat"
            flat
          />
          <vk-checkbox
            :model-value="true"
            label="Outlined"
            type="outlined"
          />
          <vk-checkbox
            :model-value="true"
            label="Disabled"
            disabled
          />
        </div>
        <div class="grow gap-4 flex flex-col">
          <vk-checkbox
            :model-value="null"
            label="Indeterminate"
            indeterminate
            read-only
          />
          <vk-checkbox
            :model-value="true"
            label="Error"
            error-text="Invalid Input"
          />
          <vk-checkbox
            label="Rounded"
            :model-value="true"
            rounded
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
          <vk-checkbox
            :model-value="true"
            label="Extra Small" 
            size="xs" 
          />
          <vk-checkbox
            :model-value="true"
            label="Medium" 
            size="md" 
          />
          <vk-checkbox
            :model-value="true"
            label="Small" 
            size="sm" 
          />
          <vk-checkbox
            :model-value="true"
            label="Large" 
            size="lg"
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
