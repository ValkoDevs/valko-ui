<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '../../../components/DocSection'
import ExampleSection from '../../../components/ExampleSection'

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

const separators = [
  {value:'line', label:'Line'},
  {value:'split', label:'Split'},
  {value:'none', label:'None'},
]

const form = ref({
  types: 'filled',
  sizes: 'md',
  compact: false,
  multiple: false,
  separators: 'line'
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
    prop: 'type',
    required: false,
    description: 'The type of the Collapse.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'separator',
    required: false,
    description: 'The separator of the Collapse.',
    values: 'line, split, none',
    default: 'line'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Collapse.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'compact',
    required: false,
    description: 'Whether all Collapse items should be smaller.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'multiple',
    required: false,
    description: 'Allow multiple items to be expanded at the same time.',
    values: 'true, false',
    default: 'false'
  }
]
</script>

<template>
  <doc-section
    title="Collapse"
    description="Collapse display a list of high-level options that can expand/collapse to reveal more information."
  >
    <template #playground-view>
      <div class="w-full flex justify-center p-4">
        <vk-collapse
          :type="form.types"
          :size="form.sizes"
          :separator="form.separators"
          :compact="form.compact"
          :multiple="form.multiple"
        >
          <vk-collapse-item
            left-icon="user-circle"
            title="Playground-Example 1"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </vk-collapse-item>
          <vk-collapse-item
            title="Playground-Example 2"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </vk-collapse-item>
          <vk-collapse-item
            title="Playground-Example 3"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </vk-collapse-item>
        </vk-collapse>
      </div>
    </template>
    <template #playground-options>
      <div class="flex">
        <div class="w-1/2 px-4">
          <form action="">
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
                placeholder="Separator"
                size="sm"
                :options="separators"
                v-model="form.separators"
              />
            </div>
            <div class="flex mb-1">
              <vk-select
                type="outlined"
                size="sm"
                placeholder="Sizes"
                :options="sizes"
                v-model="form.sizes"
              />
            </div>
            <div class="flex mb-1">
              <vk-checkbox 
                label="Compact"
                v-model="form.compact"
              />
            </div>
            <div class="flex mb-1">
              <vk-checkbox 
                label="Multiple"
                v-model="form.multiple"
              />
            </div>
          </form>
        </div>
      </div>
    </template>

    <template #examples>
      <example-section
        title="Types"
        justify="evenly"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-collapse
            v-for="type in types"
            :type="type.value"
            size="sm"
            :key="type.value"
          >
            <vk-collapse-item
              :title="`${type.label}-Example Item 1`"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </vk-collapse-item>
            <vk-collapse-item
              :title="`${type.label}-Example Item 2`"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </vk-collapse-item>
            <vk-collapse-item
              :title="`${type.label}-Example Item 3`"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </vk-collapse-item>
          </vk-collapse>
          <vk-collapse
            :compact="true"
            size="sm"
          >
            <vk-collapse-item
              left-icon="user-circle"
              title="Compact-Example Item 1"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </vk-collapse-item>
            <vk-collapse-item
              title="Compact-Example Item 2"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </vk-collapse-item>
            <vk-collapse-item
              title="Compact-Example Item 3"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </vk-collapse-item>
          </vk-collapse>
          <vk-collapse
            :multiple="true"
            size="sm"
          >
            <vk-collapse-item
              left-icon="user-circle"
              title="Multiple-Example Item 1"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </vk-collapse-item>
            <vk-collapse-item
              title="Multiple-Example Item 2"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </vk-collapse-item>
            <vk-collapse-item
              title="Multiple-Example Item 3"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </vk-collapse-item>
          </vk-collapse>
        </div>
      </example-section>

      <example-section
        title="Separators"
        justify="evenly"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-collapse
            v-for="separator in separators"
            size="sm"
            :separator="separator.value"
            :key="separator.value"
          >
            <vk-collapse-item
              :title="`${separator.label}-Example Item 1`"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </vk-collapse-item>
            <vk-collapse-item
              :title="`${separator.label}-Example Item 2`"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </vk-collapse-item>
            <vk-collapse-item
              :title="`${separator.label}-Example Item 3`"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </vk-collapse-item>
          </vk-collapse>
        </div>
      </example-section>

      <example-section
        title="Sizes"
        justify="evenly"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-collapse
            v-for="size in sizes"
            :size="size.value"
            :key="size.value"
          >
            <vk-collapse-item
              :title="`${size.label}-Example Item 1`"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </vk-collapse-item>
            <vk-collapse-item
              :title="`${size.label}-Example Item 2`"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </vk-collapse-item>
            <vk-collapse-item
              :title="`${size.label}-Example Item 3`"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </vk-collapse-item>
          </vk-collapse>
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
