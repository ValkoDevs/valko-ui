<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '../../../components/DocSection'
import ExampleSection from '../../../components/ExampleSection'

const btnDisabled = ref(false)
const btnFlat = ref(false)
const btnRounded = ref(false)
const btnBlock = ref(false)

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
    description: 'The color variant of the button.',
    values: 'primary, secondary, error, warning, info, success',
    default: 'primary'
  },
  {
    prop: 'type',
    required: false,
    description: 'The type of the button.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the button.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'disabled',
    required: false,
    description: 'Whether the button is disabled or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'flat',
    required: false,
    description: 'Whether the button has a shadow or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'rounded',
    required: false,
    description: 'Whether the button is rounded or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'block',
    required: false,
    description: 'Whether the button width is equal to it\'s container.',
    values: 'true, false',
    default: 'false'
  }
]
</script>

<template>
  <doc-section
    title="Button"
    description="Buttons are used to initialize an action, either in the background or foreground of an experience."
  >
    <template #playground-view>
      <vk-button
        :variant="form.options_variants"
        :type="form.options_types"
        :size="form.options_sizes"
        :disabled="btnDisabled"
        :flat="btnFlat"
        :rounded="btnRounded"
        :block="btnBlock"
      >
        Primary
      </vk-button>
    </template>

    <template #playground-options>
      <div class="flex">
        <div class="w-1/2 px-4">
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
          <div>
            <vk-checkbox
              v-model="btnDisabled"
              label="Disabled"
            />
          </div>
          <div>
            <vk-checkbox
              v-model="btnFlat"
              label="Flat"
            />
          </div>
          <div>
            <vk-checkbox
              v-model="btnRounded"
              label="Rounded"
            />
          </div>
          <div>
            <vk-checkbox
              v-model="btnBlock"
              label="Block"
            />
          </div>
        </div>
      </div>
    </template>

    <template #examples>
      <example-section
        title="Color"
        gap
      >
        <vk-button variant="primary">
          Primary
        </vk-button>
        <vk-button variant="secondary">
          Secondary
        </vk-button>
        <vk-button variant="error">
          Error
        </vk-button>
        <vk-button variant="success">
          Success
        </vk-button>
        <vk-button variant="warning">
          Warning
        </vk-button>
        <vk-button variant="info">
          Info
        </vk-button>
      </example-section>

      <example-section 
        title="Types"
        gap
        wrap
      >
        <vk-button flat>
          Flat
        </vk-button>
        <vk-button rounded>
          Rounded
        </vk-button>
        <vk-button type="outlined">
          Outlined
        </vk-button>
        <vk-button type="ghost">
          Ghost
        </vk-button>
        <vk-button disabled>
          Disabled
        </vk-button>
        <vk-button block>
          Block
        </vk-button>
      </example-section>

      <example-section 
        title="Sizes"
        gap
      >
        <vk-button size="xs">
          Extra Small
        </vk-button>
        <vk-button size="sm">
          Small
        </vk-button>
        <vk-button size="md">
          Medium
        </vk-button>
        <vk-button size="lg">
          Large
        </vk-button>
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