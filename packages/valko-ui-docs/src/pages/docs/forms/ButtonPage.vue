<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '../../../components/DocSection'
import ExampleSection from '../../../components/ExampleSection'

const btnDisabled = ref(false)
const btnFlat = ref(false)
const btnRounded = ref(false)
const btnBlock = ref(false)
const btnCondensed = ref(false)

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
        :variant="form.variants"
        :type="form.types"
        :size="form.sizes"
        :disabled="btnDisabled"
        :flat="btnFlat"
        :rounded="btnRounded"
        :block="btnBlock"
        :condensed="btnCondensed"
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
          <div>
            <vk-checkbox
              v-model="btnDisabled"
              label="Disabled"
            />
          </div>
          <div>
            <vk-checkbox
              v-model="btnCondensed"
              label="Condensed"
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
        <vk-button
          v-for="variant in variants"
          :key="variant.value"
          :variant="variant.value"
        >
          {{ variant.label }}
        </vk-button>
      </example-section>

      <example-section 
        title="Types"
        gap
        wrap
      >
        <vk-button
          v-for="type in types"
          :key="type.value"
          :type="type.value"
        >
          {{ type.label }}
        </vk-button>
        <vk-button flat>
          Flat
        </vk-button>
        <vk-button disabled>
          Disabled
        </vk-button>
        <vk-button rounded>
          Rounded
        </vk-button>
        <vk-button block>
          Block
        </vk-button>
      </example-section>

      <example-section 
        title="Sizes"
        gap
      >
        <vk-button
          v-for="size in sizes"
          :key="size.value"
          :size="size.value"
        >
          {{ size.label }}
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