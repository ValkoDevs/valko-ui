<script setup lang="ts">

const isOpen = ref(false)

const [ model, parsedModel, adapter ] = useDateAdapter({ format: 'YYYY-MM' })

const templateSnippet = `<script setup lang="ts">
const isOpen = ref(false)

const [ model, parsedModel, adapter ] = useDateAdapter({ format: 'YYYY-MM' })
<\u002Fscript>

<template>
  <div class="w-full flex flex-col max-w-lg mx-auto gap-4 p-6 rounded-lg bg-light-300 dark:bg-dark-800/[.8] shadow mt-10">
    <div class="flex justify-between">
      <h1 class="text-xl font-semibold">
        Add Payment Method
      </h1>
      <vk-icon
        name="credit-card"
        class="text-2xl"
      />
    </div>
    <div class="grid grid-cols-1 gap-4">
      <vk-input label="Cardholder Name" />
      <vk-input
        label="Card Number"
        type="number"
      />
      <vk-datepicker
        v-model="model"
        :parsed-model="parsedModel"
        :adapter="adapter"
        :is-open="isOpen"
        label="Expiration Date"
        @open="() => isOpen = true"
        @close="() => isOpen = false"
      />
      <vk-input
        label="CVV"
        type="number"
      />
    </div>
    <vk-button
      label="Add Card"
    >
      Add Card
    </vk-button>
  </div>
</template>
`
</script>

<template>
  <page-template>
    <template #example>
      <div class="w-full flex flex-col max-w-lg mx-auto gap-4 p-6 rounded-lg bg-light-300 dark:bg-dark-800/[.8] shadow mt-10">
        <div class="flex justify-between">
          <h1 class="text-xl font-semibold">
            Add Payment Method
          </h1>
          <vk-icon
            name="credit-card"
            class="text-2xl"
          />
        </div>
        <div class="grid grid-cols-1 gap-4">
          <vk-input label="Cardholder Name" />
          <vk-input
            label="Card Number"
            type="number"
          />
          <vk-datepicker
            v-model="model"
            :parsed-model="parsedModel"
            :adapter="adapter"
            :is-open="isOpen"
            label="Expiration Date"
            @open="() => isOpen = true"
            @close="() => isOpen = false"
          />
          <vk-input
            label="CVV"
            type="number"
          />
        </div>
        <vk-button
          label="Add Card"
        >
          Add Card
        </vk-button>
      </div>
    </template>

    <template #code>
      <code-block :code="templateSnippet" />
    </template>
  </page-template>
</template>


