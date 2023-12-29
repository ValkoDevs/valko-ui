<script setup lang="ts">
import {ref} from 'vue'
import DocSection from '../../../components/DocSection'
import ExampleSection from '../../../components/ExampleSection'

const inpDisabled = ref(false)
const inpFlat = ref(false)
const inpRounded = ref(false)
const inpReadonly = ref(false)
const inpValue = ref('')
const labelValue = ref('Label')
const helperValue = ref('Helpertext')
const exampleReadonly = ref('Example readonly text')

const variants = [
  {value:'primary', label:'Primary'},
  {value:'secondary', label:'Secondary'},
  {value:'success', label:'Success'},
  {value:'info', label:'Info'},
  {value:'warning', label:'Warning'},
  {value:'error', label:'Error'}
]

const kinds = [
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

const types = [
  {value:'text', label:'Text'},
  {value:'email', label:'Email'},
  {value:'password', label:'Password'},
  {value:'date', label:'Date'}
]

const form = ref({
  variants: 'primary',
  kinds: 'filled',
  sizes: 'md',
  types: 'text'
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
    description: 'The color variant of the Input.',
    values: 'primary, secondary, error, warning, info, success',
    default: 'primary'
  },
  {
    prop: 'kind',
    required: false,
    description: 'The kind of the Input.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'type',
    required: false,
    description: 'The type of the Input.',
    values: 'text, email, password, date',
    default: 'text'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Input.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'disabled',
    required: false,
    description: 'Whether the Input is disabled or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'rounded',
    required: false,
    description: 'Whether the Input is rounded or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'modelValue',
    required: false,
    description: 'The v-model for the Input',
    values: 'string',
    default: 'false'
  },
  {
    prop: 'readonly',
    required: false,
    description: 'Wheter the Input is readonly or not',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'label',
    required: false,
    description: 'The label for the Input',
    values: 'string',
    default: 'false'
  },
  {
    prop: 'helpertext',
    required: false,
    description: 'A hint for the Input',
    values: 'string',
    default: 'false'
  },
  {
    prop: 'iconLeft',
    required: false,
    description: 'A icon on the left side for the Input',
    values: 'string',
    default: ''
  },
  {
    prop: 'iconRight',
    required: false,
    description: 'A icon on the right side for the Input',
    values: 'string',
    default: ''
  }
]
</script>

<template>
  <doc-section
    title="Input Component"
    description="The input component allows our users to build complex forms quickly, it has different variations of styles and a range of versatile colors with a subtle animation."
  >
    <template #playground-view>
      <div class="w-full flex px-2">
        <vk-input
          :variant="form.variants"
          :kind="form.kinds"
          :size="form.sizes"
          :disabled="inpDisabled"
          :readonly="inpReadonly"
          :flat="inpFlat"
          :rounded="inpRounded"
          :type="form.types"
          v-model="inpValue"
          :label="labelValue"
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
                placeholder="Kind"
                size="sm"
                :options="kinds"
                v-model="form.kinds"
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
            <div class="flex mb-1">
              <vk-select
                type="outlined"
                placeholder="Types"
                size="sm"
                :options="types"
                v-model="form.types"
              />
            </div>
            <div class="flex">
              <vk-checkbox
                label="Disabled"
                v-model="inpDisabled"
              />
            </div>
            <div class="flex">
              <vk-checkbox
                label="Rounded"
                v-model="inpRounded"
              />
            </div>
            <div class="flex">
              <vk-checkbox
                label="Readonly"
                v-model="inpReadonly"
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
          <vk-input
            v-for="variant in variants"
            :key="variant.value"
            :variant="variant.value"
            :label="variant.label"
          />
        </div>
      </example-section>

      <example-section
        title="Kinds"
        justify="start"
        align="start"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-input
            v-for="kind in kinds"
            :key="kind.value"
            :kind="kind.value"
            :label="kind.label"
          />
          <vk-input
            disabled
            label="Disabled"
          />
          <vk-input
            rounded
            kind="outlined"
            label="Rounded"
          />
          <vk-input
            readonly
            label="Readonly"
            v-model="exampleReadonly"
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
          <vk-input
            v-for="type in types"
            :key="type.value"
            :type="type.value"
            :label="type.label"
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
          <vk-input
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
