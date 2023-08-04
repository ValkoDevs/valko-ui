<script setup lang="ts">
import { ref } from 'vue'

const btnVariant = ref('primary')
const btnType = ref('filled')
const btnSize = ref('md')
const btnDisabled = ref(false)
const btnFlat = ref(false)
const btnRounded = ref(false)
const btnBlock = ref(false)
</script>

<template>
  <div class="container">
    <h1>Button</h1>
    <hr>

    <section class="w-full">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, eveniet! Accusantium repellat aliquam vel at natus, temporibus sapiente, quo optio officia nulla nihil repellendus mollitia neque, modi quisquam nesciunt! Fugiat!
    </section>

    <section class="w-full">
      <h2>Playground</h2>
      <hr>
      <div class="flex">
        <div class="w-1/2 flex justify-center items-center border border-light-4 dark:border-dark-1 rounded">
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
        </div>
        <div class="w-1/2 px-4">
          <form action="">
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
            <div class="flex">
              <input
                name="cb-btn-disabled"
                type="checkbox"
                v-model="btnDisabled"
              >
              <label
                for="cb-btn-disabled"
                class="mr-2"
              >Disabled: </label>
            </div>
            <div class="flex">
              <input
                name="cb-btn-flat"
                type="checkbox"
                v-model="btnFlat"
              >
              <label
                for="cb-btn-flat"
                class="mr-2"
              >Flat: </label>
            </div>
            <div class="flex">
              <input
                name="cb-btn-rounded"
                type="checkbox"
                v-model="btnRounded"
              >
              <label
                for="cb-btn-rounded"
                class="mr-2"
              >Rounded: </label>
            </div>
            <div class="flex">
              <input
                name="cb-btn-block"
                type="checkbox"
                v-model="btnBlock"
              >
              <label
                for="cb-btn-block"
                class="mr-2"
              >Block: </label>
            </div>
          </form>
        </div>
      </div>
    </section>

    <section class="w-full">
      <h2>Colors</h2>
      <hr>
      <div class="flex justify-between items-center">
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
      </div>
    </section>
    <br>
    <section class="w-full">
      <h2>Types</h2>
      <hr>
      <div class="flex justify-between items-center">
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
      </div>
      <div class="w-full mt-4">
        <vk-button block>
          Block
        </vk-button>
      </div>
    </section>

    <section class="w-full">
      <h2>Sizes</h2>
      <hr>
      <div class="flex justify-between items-center">
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
