<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import shapeOptions from '@/data/shapeOptions'

const form = ref({
  size: 'md',
  shape: 'soft',
  backdrop: 'opaque',
  title: 'Modal',
  flat: false,
  closable: true,
  isOpen: false,
  rounded: false,
  soft: false,
  square: false,
  xs: false,
  sm: false,
  md: false,
  lg: false,
  full: false,
  opaque: false,
  blur: false,
  transparent: false
} as Record<string, string | boolean>)

const sizes = [...sizeOptions, {
  value: 'full', label: 'Full'
}]

const backdropOptions = [
  { value: 'opaque', label: 'Opaque' },
  { value: 'blur', label: 'Blur' },
  { value: 'transparent', label: 'Transparent' }
]

const apiData = [
  {
    prop: 'isOpen',
    required: true,
    description: 'Wheter the Modal is open or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Modal.',
    values: 'xs, sm, md, lg, full',
    default: 'md'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Modal.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    prop: 'title',
    required: false,
    description: 'The title of the Modal',
    values: 'string',
    default: 'Modal'
  },
  {
    prop: 'backdrop',
    required: false,
    description: 'The background backdrop displayed behind the Modal',
    values: 'opaque, blur, transparent',
    default: 'opaque'
  },
  {
    prop: 'closable',
    required: false,
    description: 'Displays a close button on the Modal',
    values: 'true, false',
    default: 'true'
  },
  {
    prop: 'flat',
    required: false,
    description: 'Wheter the Modal has a shadow or not',
    values: 'true, false',
    default: 'false'
  }
]
</script>

<template>
  <doc-section
    title="Modal Component"
    description="The Modal component isplays a dialog with a custom content that requires attention or provides additional information."
  >
    <template #playground-view>
      <vk-button @click="() => {form.isOpen = true}">
        Open Modal
      </vk-button>
      <vk-modal
        :is-open="form.isOpen"
        :size="form.size"
        :flat="form.flat"
        :shape="form.shape"
        :backdrop="form.backdrop"
        :title="form.title"
        :closable="form.closable"
        @close="() => {form.isOpen = false}"
      >
        <template #default>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
        </template>
      </vk-modal>
    </template>

    <template #playground-options>
      <vk-input
        label="Title"
        v-model="form.title"
      />
      <vk-select
        placeholder="Size"
        size="sm"
        :options="sizes"
        v-model="form.size"
      />
      <vk-select
        placeholder="Shape"
        size="sm"
        :options="shapeOptions"
        v-model="form.shape"
      />
      <vk-select
        placeholder="Backdrop"
        size="sm"
        :options="backdropOptions"
        v-model="form.backdrop"
      />
      <vk-checkbox
        v-model="form.flat"
        label="Flat"
      />
      <vk-checkbox
        v-model="form.closable"
        label="Closable"
      />
    </template>

    <template #examples>
      <example-section
        title="Shapes"
        gap
      >
        <div
          v-for="shape in shapeOptions"
          :key="shape.value"
        >
          <vk-button @click="() => {form[shape.value] = true}">
            Open {{ shape.label }}
          </vk-button>
          <vk-modal
            :shape="shape.value"
            :is-open="form[shape.value]"
            :title="shape.label"
            @close="() => {form[shape.value] = false}"
          >
            <template #default>
              {{ shape.label }} Body - Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
            </template>
          </vk-modal>
        </div>
      </example-section>

      <example-section
        title="Backdrops"
        gap
      >
        <div
          v-for="backdrop in backdropOptions"
          :key="backdrop.value"
        >
          <vk-button @click="() => {form[backdrop.value] = true}">
            Open {{ backdrop.label }}
          </vk-button>
          <vk-modal
            :backdrop="backdrop.value"
            :is-open="form[backdrop.value]"
            :title="backdrop.label"
            @close="() => {form[backdrop.value] = false}"
          >
            <template #default>
              {{ backdrop.label }} Body - Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
            </template>
          </vk-modal>
        </div>
      </example-section>

      <example-section
        title="Sizes"
        gap
      >
        <div
          v-for="size in sizes"
          :key="size.value"
        >
          <vk-button @click="() => {form[size.value] = true}">
            Open {{ size.label }}
          </vk-button>
          <vk-modal
            :size="size.value"
            :is-open="form[size.value]"
            :title="size.label"
            @close="() => {form[size.value] = false}"
          >
            <template #default>
              {{ size.label }} Body - Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam inventore repellendus blanditiis voluptas incidunt libero sint excepturi quaerat, esse saepe alias doloremque ab quisquam vel voluptate facilis quia. Illo.
            </template>
          </vk-modal>
        </div>
      </example-section>
    </template>

    <template #api>
      <vk-data-table
        :headers="propHeaders"
        :data="apiData"
      />
    </template>
  </doc-section>
</template>
