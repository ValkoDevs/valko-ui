<script setup lang="ts">
import { ref } from 'vue'

const spVariant = ref('primary')
const spSize = ref('md')
</script>

<template>
  <div class="container">
    <h1>Spinner</h1>
    <hr>
    <section class="w-full">
      A Spinner is a user interface element that signifies the loading or processing of a web page, component, or input. It consists of a spinning animation that indicates an action is taking place in the background, such as data loading or processing operation. This visual animation is an effective tool for keeping users 
      informed and preventing the perception that an application or website is inactive during waiting times.
    </section>

    <section class="w-full">
      <h2>Playground</h2>
      <hr>
      <div class="flex">
        <div class="w-1/2 flex justify-center items-center border border-light-4 dark:border-dark-1 rounded">
          <vk-spinner
            :variant="spVariant"
            :size="spSize"
          />
        </div>
        <div class="w-1/2 px-4">
          <form action="">
            <div class="flex">
              <label
                for="sp-spinner-variant"
                class="mr-2"
              >Variant: </label>
              <select
                name="sp-spinner-variant"
                v-model="spVariant"
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
                for="sp-spinner-size"
                class="mr-2"
              >Size: </label>
              <select
                name="sp-spinner-size"
                v-model="spSize"
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
          </form>
        </div>
      </div>
    </section>
    <section class="w-full">
      <h2>Colors</h2>
      <hr>
      <div class="flex flex-wrap gap-4 justify-center">
        <div class="w-1/3">
          <vk-spinner variant="primary" />
        </div>
        <div class="w-1/3">
          <vk-spinner variant="secondary" />
        </div>
        <div class="w-1/3">
          <vk-spinner variant="error" />
        </div>
        <div class="w-1/3">
          <vk-spinner variant="success" />
        </div>
        <div class="w-1/3">
          <vk-spinner variant="warning" />
        </div>
        <div class="w-1/3">
          <vk-spinner variant="info" />
        </div>
      </div>
    </section>
    <br>
    <section class="w-full">
      <h2>Sizes</h2>
      <hr>
      <div class="flex flex-wrap gap-4 justify-center">
        <div class="w-1/3">
          <vk-spinner size="xs" />
        </div>
        <div class="w-1/3">
          <vk-spinner size="md" />
        </div>
        <div class="w-1/3">
          <vk-spinner size="sm" />
        </div>
        <div class="w-1/3">
          <vk-spinner size="lg" />
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
