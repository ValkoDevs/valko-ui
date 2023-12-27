<script setup lang="ts">
import {ref} from 'vue'

const selectVariant = ref('primary')
const selectType = ref('filled')
const selectSize = ref('md')
const selectDisabled = ref(false)
const selectFlat = ref(false)
const selectRounded = ref(false)
const selectReadonly = ref(false)
const selectMultiple = ref(false)
const selectHelper = ref('Helpertext')

const people = [
  {value: 1, label: 'Wade Cooper'},
  {value: 2, label: 'Arlene Mccoy'},
  {value: 3, label: 'Devon Webb'},
  {value: 4, label: 'Tom Cook'}
]
 
const form = ref({
  person_id: null,
})
</script>
 
<template>
  <div class="container">
    <h1>Select</h1>
    <hr>
    <section class="w-full">
      Select Component
    </section>

    <section class="w-full">
      <h2>Playground</h2>
      <hr>
      <div class="flex">
        <div class="w-1/2 flex flex-row justify-center items-center border border-light-4 dark:border-dark-1 rounded px-10">
          <vk-select
            placeholder="Select Person"
            :helpertext="selectHelper"
            v-model="form.person_id"
            :options="people"
            :type="selectType"
            :variant="selectVariant"
            :readonly="selectReadonly"
            :rounded="selectRounded"
            :disabled="selectDisabled"
            :flat="selectFlat"
            :size="selectSize"
            :multiple="selectMultiple"
          />
        </div>
        <div class="w-1/2 px-4">
          <form action="">
            <div class="flex mb-5">
              <vk-input 
                kind="outlined" 
                label="Helpertext"
                v-model="selectHelper"
              />
            </div>
            <div class="flex mb-1">
              <label
                for="cb-inp-variant"
                class="mr-2"
              >Variant: </label>
              <select
                name="cb-inp-variant"
                v-model="selectVariant"
              >
                <option value="primary">
                  Primary
                </option>
                <option value="secondary">
                  Secondary
                </option>
                <option value="success">
                  Success
                </option>
                <option value="info">
                  Info
                </option>
                <option value="warning">
                  Warning
                </option>
                <option value="error">
                  Error
                </option>
              </select>
            </div>
            <div class="flex mb-1">
              <label
                for="cb-inp-kind"
                class="mr-2"
              >Type: </label>
              <select
                name="cb-inp-kind"
                v-model="selectType"
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
            <div class="flex mb-1">
              <label
                for="cb-inp-size"
                class="mr-2"
              >Size: </label>
              <select
                name="cb-inp-size"
                v-model="selectSize"
              >
                <option value="xs">
                  xs
                </option>
                <option value="sm">
                  sm
                </option>
                <option value="md">
                  md
                </option>
                <option value="lg">
                  lg
                </option>
              </select>
            </div>
            <div class="flex">
              <input
                name="cb-inp-multiple"
                type="checkbox"
                v-model="selectMultiple"
              >
              <label
                for="cb-inp-multiple"
                class="mr-2"
              >Multiple: </label>
            </div>
            <div class="flex">
              <input
                name="cb-inp-disabled"
                type="checkbox"
                v-model="selectDisabled"
              >
              <label
                for="cb-inp-disabled"
                class="mr-2"
              >Disabled: </label>
            </div>
            <div class="flex">
              <input
                name="cb-inp-flat"
                type="checkbox"
                v-model="selectFlat"
              >
              <label
                for="cb-inp-flat"
                class="mr-2"
              >Flat: </label>
            </div>
            <div class="flex">
              <input
                name="cb-inp-rounded"
                type="checkbox"
                v-model="selectRounded"
              >
              <label
                for="cb-inp-rounded"
                class="mr-2"
              >Rounded: </label>
            </div>
            <div class="flex">
              <input
                name="cb-inp-readonly"
                type="checkbox"
                v-model="selectReadonly"
              >
              <label
                for="cb-inp-readonly"
                class="mr-2"
              >Readonly: </label>
            </div>
          </form>
        </div>
      </div>
    </section>

    <section class="w-full">
      <h2>Colors</h2>
      <hr>
      <div class="flex justify-between items-center" />
    </section>
    <br>
    <section class="w-full">
      <h2>Types</h2>
      <hr>
      <div class="flex justify-between items-center" />
    </section>

    <section class="w-full">
      <h2>Sizes</h2>
      <hr>
      <div class="flex justify-between items-center" />
    </section>

    <section class="w-full">
      <h2>API</h2>
      <hr>
      <div class="flex justify-between items-center">
        table with props, possible values, default values, and description
      </div>
    </section>
  </div>
</template>

<style lang="postcss" scoped>
h1 {
  @apply text-4xl font-bold;
}
h2 {
  @apply text-2xl;
}

hr {
  @apply mb-4 mt-1 w-full border-light-4 dark:border-dark-1;
}

section {
  @apply mb-16;
}
.container {
  @apply
  flex
  flex-col
  justify-start
  items-start
  px-10
  py-5;
}
</style>