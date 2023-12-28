<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '../../../components/DocSection'
import ExampleSection from '../../../components/ExampleSection'

const btnVariant = ref('primary')
const btnType = ref('filled')
const btnSize = ref('md')
const btnDisabled = ref(false)
const btnFlat = ref(false)
const btnRounded = ref(false)
const btnBlock = ref(false)

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
        :variant="btnVariant"
        :type="btnType"
        :size="btnSize"
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
        <label
          for="cb-btn-variant"
          class="mr-2"
        >Variant: </label>
        <select
          name="cb-btn-variant"
          v-model="btnVariant"
        >
          <option value="primary">
            Primary
          </option>
          <option value="secondary">
            Secondary
          </option>
          <option value="error">
            Error
          </option>
          <option value="warning">
            Warning
          </option>
          <option value="info">
            Info
          </option>
          <option value="success">
            Success
          </option>
        </select>
      </div>
      <div class="flex">
        <label
          for="cb-btn-type"
          class="mr-2"
        >Type: </label>
        <select
          name="cb-btn-type"
          v-model="btnType"
        >
          <option value="filled">
            Filled
          </option>
          <option value="outlined">
            Outlined
          </option>
          <option value="ghost">
            Ghost
          </option>
        </select>
      </div>
      <div class="flex">
        <label
          for="cb-btn-size"
          class="mr-2"
        >Size: </label>
        <select
          name="cb-btn-size"
          v-model="btnSize"
        >
          <option value="xs">
            xs
          </option>
          <option value="sm">
            sm
          </option>
          <option value="md">
            md
          </option><option value="lg">
            lg
          </option>
        </select>
      </div>
      <vk-checkbox
        v-model="btnDisabled"
        label="Disabled"
      />
      <vk-checkbox
        v-model="btnFlat"
        label="Flat"
      />
      <vk-checkbox
        v-model="btnRounded"
        label="Rounded"
      />
      <vk-checkbox
        v-model="btnBlock"
        label="Block"
      />
    </template>

    <template #examples>
      <example-section title="Color">
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

      <example-section title="Types">
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

      <example-section title="Sizes">
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