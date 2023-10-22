<script setup lang="ts">
import { ref } from 'vue'

const tareaVariant = ref('primary')
const tareaSize = ref('md')
const tareaDisabled = ref(false)
const tareaFlat = ref(false)
const tareaRounded = ref(false)
const tareaReadonly = ref(false)
const tareaType = ref('filled')
const tareaValue = ref('')
const labelValue = ref('Label')
const tareaMaxlength = ref(undefined)
</script>

<template>
  <div class="container">
    <h1>Textarea</h1>
    <hr>

    <section class="w-full">
      The textarea component similar to our input is a extesion of the same styles and elegancy.
    </section>

    <section class="w-full">
      <h2>Playground</h2>
      <hr>
      <div class="flex">
        <div class="w-1/2 flex justify-center items-center border border-light-4 dark:border-dark-1 rounded p-10">
          <vk-textarea
            :variant="tareaVariant"
            :size="tareaSize"
            :disabled="tareaDisabled"
            :readonly="tareaReadonly"
            :flat="tareaFlat"
            :rounded="tareaRounded"
            :type="tareaType"
            v-model="tareaValue"
            :label="labelValue"
            :rows="1"
            :maxlength="tareaMaxlength"
          />
        </div>
        <div class="w-1/2 px-4">
          <div class="flex mb-5">
            <vk-input
              kind="outlined"
              label="Label"
              v-model="labelValue"
            />
          </div>
          <form action="">
            <div class="flex mb-1">
              <label
                for="cb-tarea-variant"
                class="mr-2"
              >Variant: </label>
              <select
                name="cb-tarea-variant"
                v-model="tareaVariant"
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
                for="cb-tarea-type"
                class="mr-2"
              >Type: </label>
              <select
                name="cb-tarea-type"
                v-model="tareaType"
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
                for="cb-tarea-size"
                class="mr-2"
              >Size: </label>
              <select
                name="cb-tarea-size"
                v-model="tareaSize"
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
            <div class="flex mb-1">
              <label
                for="cb-tarea-maxlength"
                class="mr-2"
              >Example Maxlength: </label>
              <select
                name="cb-tarea-size"
                v-model="tareaMaxlength"
              >
                <option :value="undefined">
                  None
                </option>
                <option value="25">
                  25
                </option>
                <option value="50">
                  50
                </option>
                <option value="100">
                  100
                </option>
              </select>
            </div>
            <div>
              <vk-checkbox 
                label="Disabled"
                v-model="tareaDisabled"
              />
            </div>
            <div>
              <vk-checkbox 
                label="Flat"
                v-model="tareaFlat"
              />
            </div>
            <div>
              <vk-checkbox 
                label="Readonly"
                v-model="tareaReadonly"
              />
            </div>
          </form>
        </div>
      </div>
    </section>

    <section class="w-full">
      <h2>Colors</h2>
      <hr>
      <div class="flex justify-between items-center">
        <div class="mr-2">
          <vk-textarea 
            variant="primary"
            label="Primary"
          />
        </div>
        <div class="mr-2">
          <vk-textarea 
            variant="secondary"
            label="Secondary"
          />
        </div>
        <div class="mr-2">
          <vk-textarea 
            variant="success"
            label="Success"
          />
        </div>
        <div class="mr-2">
          <vk-textarea 
            variant="info"
            label="Info"
          />
        </div>
        <div class="mr-2">
          <vk-textarea 
            variant="warning"
            label="Warning"
          />
        </div>
        <div>
          <vk-textarea 
            variant="error"
            label="Error"
          />
        </div>
      </div>
    </section>
    <br>
    <section class="w-full">
      <h2>Types</h2>
      <hr>
      <div class="flex justify-between items-center">
        <div class="mr-2">
          <vk-textarea label="Filled" />
        </div>
        <div class="mr-2">
          <vk-textarea 
            type="outlined"
            label="Outlined"
          />
        </div>
        <div class="mr-2">
          <vk-textarea 
            type="ghost"
            label="Ghost"
          />
        </div>
        <div class="mr-2">
          <vk-textarea 
            disabled
            label="Disabled"
          />
        </div>
        <div class="mr-2">
          <vk-textarea 
            flat
            label="Flat"
          />
        </div>
      </div>
    </section>

    <section class="w-full">
      <h2>Sizes</h2>
      <hr>
      <div class="flex justify-between items-center">
        <div class="w-full px-2">
          <vk-textarea 
            size="xs"
            label="Extra Small"
          />
        </div>
        <div class="w-full px-2">
          <vk-textarea 
            size="sm"
            label="Small"
          />
        </div>
        <div class="w-full px-2">
          <vk-textarea 
            size="md"
            label="Medium"
          />
        </div>
        <div class="w-full px-2">
          <vk-textarea 
            size="lg"
            label="Large"
          />
        </div>
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

