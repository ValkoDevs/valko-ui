<script setup lang="ts">
import { ref } from 'vue'

const inpVariant = ref('primary')
const inpKind = ref('filled')
const inpSize = ref('md')
const inpDisabled = ref(false)
const inpFlat = ref(false)
const inpRounded = ref(false)
const inpReadonly = ref(false)
const inpType = ref('text')
const inpValue = ref('')
const labelValue = ref('Label')
const helperValue = ref('Helpertext')
</script>

<template>
  <div class="container">
    <h1>Input</h1>
    <hr>

    <section class="w-full">
      The input component allows our users to build complex forms quickly, it has different variations of styles and a range of versatile colors with a subtle animation.
    </section>

    <section class="w-full">
      <h2>Playground</h2>
      <hr>
      <div class="flex">
        <div class="w-1/2 flex justify-center items-center border border-light-4 dark:border-dark-1 rounded px-10">
          <vk-input
            :variant="inpVariant"
            :kind="inpKind"
            :size="inpSize"
            :disabled="inpDisabled"
            :readonly="inpReadonly"
            :flat="inpFlat"
            :rounded="inpRounded"
            :type="inpType"
            v-model="inpValue"
            :label="labelValue"
            :helpertext="helperValue"
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
          <div class="flex mb-5">
            <vk-input 
              kind="outlined" 
              label="Helpertext"
              v-model="helperValue"
            />
          </div>
          <form action="">
            <div class="flex mb-1">
              <label
                for="cb-inp-variant"
                class="mr-2"
              >Variant: </label>
              <select
                name="cb-inp-variant"
                v-model="inpVariant"
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
              >Kind: </label>
              <select
                name="cb-inp-kind"
                v-model="inpKind"
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
                v-model="inpSize"
              >
                <option value="xs">xs</option>
                <option value="sm">sm</option>
                <option value="md">md</option>
                <option value="lg">lg</option>
              </select>
            </div>
            <div class="flex mb-1">
              <label
                for="cb-inp-type"
                class="mr-2"
              >Type: </label>
              <select
                name="cb-inp-type"
                v-model="inpType"
              >
                <option value="text">
                  Text
                </option>
                <option value="email">
                  Email
                </option>
                <option value="password">
                  Password
                </option>
                <option value="date">
                  Date
                </option>
              </select>
            </div>
            <div class="flex">
              <input
                name="cb-inp-disabled"
                type="checkbox"
                v-model="inpDisabled"
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
                v-model="inpFlat"
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
                v-model="inpRounded"
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
                v-model="inpReadonly"
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
      <div class="flex justify-between items-center">
        <div class="mr-2">
          <vk-input 
            variant="primary"
            label="Primary"
          />
        </div>
        <div class="mr-2">
          <vk-input 
            variant="secondary"
            label="Secondary"
          />
        </div>
        <div class="mr-2">
          <vk-input 
            variant="success"
            label="Success"
          />
        </div>
        <div class="mr-2">
          <vk-input 
            variant="info"
            label="Info"
          />
        </div>
        <div class="mr-2">
          <vk-input 
            variant="warning"
            label="Warning"
          />
        </div>
        <div>
          <vk-input 
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
          <vk-input label="Filled"/>
        </div>
        <div class="mr-2">
          <vk-input 
            kind="outlined"
            label="Outlined"
          />
        </div>
        <div class="mr-2">
          <vk-input 
            kind="ghost"
            label="Ghost"
          />
        </div>
        <div class="mr-2">
          <vk-input 
            disabled
            label="Disabled"
          />
        </div>
        <div class="mr-2">
          <vk-input 
            flat
            label="Flat"
          />
        </div>
        <div>
          <vk-input 
            kind="outlined"
            rounded
            label="Rounded"
          />
        </div>
      </div>
    </section>

    <section class="w-full">
      <h2>Sizes</h2>
      <hr>
      <div class="flex justify-between items-center">
        <div class="w-full px-2">
          <vk-input 
            size="xs"
            label="Extra Small"
          />
        </div>
        <div class="w-full px-2">
          <vk-input 
            size="sm"
            label="Small"
          />
        </div>
        <div class="w-full px-2">
          <vk-input
            size="md"
            label="Medium"
          />
        </div>
        <div class="w-full px-2">
          <vk-input 
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

