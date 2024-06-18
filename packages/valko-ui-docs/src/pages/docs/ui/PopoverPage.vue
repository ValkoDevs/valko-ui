<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '../../../components/DocSection'
import ExampleSection from '../../../components/ExampleSection'
import colorOptions from '@/data/colorOptions'
import variantOptions from '@/data/variantOptions'
import shapeOptions from '@/data/shapeOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import emitHeaders from '@/data/emitHeaders'

const form = ref({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md'
})

const popoverProps = [
  {}
]

const popoverEmits = [
  {}
]

const items = [
  {
    key: 'item-01',
    name: 'Insights',
    description: 'Measure actions your users take',
    href: '##',
    icon: 'home'
  },
  {
    key: 'item-02',
    name: 'Automations',
    description: 'Create your own targeted content',
    href: '##',
    icon: 'home'
  },
  {
    key: 'item-03',
    name: 'Reports',
    description: 'Keep track of your growth',
    href: '##',
    icon: 'home'
  }
]
</script>

<template>
  <doc-section
    title="Popover"
    description=""
  >
    <template #playground-view>
      <div class="w-full flex justify-center p-4">
        <vk-popover
          :color="form.color"
          :variant="form.variant"
          :shape="form.shape"
          :size="form.size"
          :items="items"
        />
      </div>
    </template>
    <template #playground-options>
      <vk-select
        placeholder="Color"
        size="sm"
        :options="colorOptions"
        v-model="form.color"
      />
      <vk-select
        placeholder="Variant"
        size="sm"
        :options="variantOptions"
        v-model="form.variant"
      />
      <vk-select
        placeholder="Shape"
        size="sm"
        :options="shapeOptions"
        v-model="form.shape"
      />
      <vk-select
        placeholder="Size"
        size="sm"
        :options="sizeOptions"
        v-model="form.size"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        justify="around"
        gap
      />
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Popover Props"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="popoverProps"
          />
        </example-section>

        <example-section
          title="Popover Emits"
          gap
        >
          <vk-data-table
            :headers="emitHeaders"
            :data="popoverEmits"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
