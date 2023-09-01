<script setup lang="ts">
import { ref, watch } from 'vue'

const cbVariant = ref('primary')
const cbType = ref('filled')
const cbSize = ref('md')
const cbDisabled = ref(false)
const cbFlat = ref(false)
const cbRounded = ref(false)
const checked = ref<boolean | null>(false)
const cbErrorText = ref(false)
const cbLabelPosition = ref(false)
const cbIndeterminate = ref(false)
const cbReadOnly = ref(false)

/* 
* This two watch functions control the indeterminate checkbox
* in the documentation page so it is sincronized 
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
  if (newReadOnly) {
    if (newChecked !== true) {
      checked.value = true
    }
  }
})
</script>

<template>
  <div class="container">
    <h1>Checkbox</h1>
    <hr>
    <section class="w-full">
      The checkbox component provides users the ability to choose between two distinct values. These are very similar to a switch and can be used in complex forms and checklists
    </section>

    <section class="w-full">
      <h2>Playground</h2>
      <hr>
      <div class="flex">
        <div class="w-1/2 flex justify-center items-center border border-light-4 dark:border-dark-1 rounded">
          <vk-checkbox
            :variant="cbVariant"
            :type="cbType"
            :size="cbSize"
            :error-text="cbErrorText"
            :disabled="cbDisabled"
            :flat="cbFlat"
            :rounded="cbRounded"
            :label-position="cbLabelPosition"
            :read-only="cbReadOnly"
            :indeterminate="cbIndeterminate"
            v-model="checked"
            label="Checkbox"
          >
            Primary
          </vk-checkbox>
        </div>
        <div class="w-1/2 px-4">
          <form action="">
            <div class="flex">
              <label
                for="cb-checkbox-variant"
                class="mr-2"
              >Variant: </label>
              <select
                name="cb-checkbox-variant"
                v-model="cbVariant"
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
                for="cb-checkbox-type"
                class="mr-2"
              >Type: </label>
              <select
                name="cb-checkbox-type"
                v-model="cbType"
              >
                <option value="filled">
                  Filled
                </option>
                <option value="outlined">
                  Outlined
                </option>
              </select>
            </div>
            <div class="flex">
              <label
                for="cb-checkbox-size"
                class="mr-2"
              >Size: </label>
              <select
                name="cb-checkbox-size"
                v-model="cbSize"
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
            <div class="flex">
              <label
                for="cb-checkbox-size"
                class="mr-2"
              >Label Position: </label>
              <select
                name="cb-checkbox-label-position"
                v-model="cbLabelPosition"
              >
                <option value="false">
                  Right
                </option>
                <option value="true">
                  Left
                </option>
              </select>
            </div>
            <div class="flex">
              <input
                name="cb-checkbox-disabled"
                type="checkbox"
                v-model="cbDisabled"
              >
              <label
                for="cb-checkbox-disabled"
                class="mr-2"
              >Disabled: </label>
            </div>
            <div class="flex">
              <input
                name="cb-checkbox-flat"
                type="checkbox"
                v-model="cbFlat"
              >
              <label
                for="cb-checkbox-flat"
                class="mr-2"
              >Flat: </label>
            </div>
            <div class="flex">
              <input
                name="cb-checkbox-rounded"
                type="checkbox"
                v-model="cbRounded"
              >
              <label
                for="cb-checkbox-rounded"
                class="mr-2"
              >Rounded: </label>
            </div>
            <div class="flex">
              <input
                name="cb-checkbox-read-only"
                type="checkbox"
                v-model="cbReadOnly"
              >
              <label
                for="cb-checkbox-rounded"
                class="mr-2"
              >Read only: </label>
            </div>
            <div class="flex">
              <input
                name="cb-checkbox-error-text"
                type="checkbox"
                v-model="cbErrorText"
              >
              <label
                for="cb-checkbox-rounded"
                class="mr-2"
              >Error Text: </label>
            </div>

            <div class="flex">
              <input
                name="cb-checkbox-indeterminate"
                type="checkbox"
                v-model="cbIndeterminate"
              >
              <label
                for="cb-checkbox-rounded"
                class="mr-2"
              >Indeterminate </label>
            </div>
          </form>
        </div>
      </div>
    </section>

    <section class="w-full">
      <h2>Colors</h2>
      <hr>
      <div class="flex justify-between items-center">
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
    </section>
    <br>
    <section class="w-full">
      <h2>Types</h2>
      <hr>
      <div class="flex gap-4 flex-col">
        <vk-checkbox
          :model-value="true"
          label="Error"
          error-text
        />      
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
        <vk-checkbox 
          :model-value="null"
          label="Indeterminate"
          indeterminate
          read-only
        />
        <vk-checkbox 
          label="Rounded"
          :model-value="true"
          rounded 
        />
      </div>
    </section>

    <section class="w-full">
      <h2>Sizes</h2>
      <hr>
      <div class="flex justify-between items-center">
        <vk-checkbox
          :model-value="true"
          label="Extra Small" 
          size="xs" 
        />
        <vk-checkbox
          :model-value="true"
          label="Small" 
          size="sm" 
        />
        <vk-checkbox
          :model-value="true"
          label="Medium" 
          size="md" 
        />
        <vk-checkbox
          :model-value="true"
          label="Large" 
          size="lg"
        />
      </div>
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
