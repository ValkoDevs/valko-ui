<script setup lang="ts">
import type { SelectOption } from '#valkoui'

const form = reactive({
  city: '',
  contry: '',
  state: ''
})

const countries: SelectOption[] = [
  { label: 'United States', value: 'us' },
  { label: 'Canada', value: 'ca' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Germany', value: 'de' },
  { label: 'Australia', value: 'au' }
]

const cities: SelectOption[] = [
  { label: 'New York', value: 'new_york' },
  { label: 'Los Angeles', value: 'los_angeles' },
  { label: 'London', value: 'london' },
  { label: 'Toronto', value: 'toronto' },
  { label: 'Berlin', value: 'berlin' }
]

const states: SelectOption[] = [
  { label: 'California', value: 'ca' },
  { label: 'New York', value: 'ny' },
  { label: 'Texas', value: 'tx' },
  { label: 'Ontario', value: 'on' },
  { label: 'Berlin', value: 'berlin' }
]

const templateSnippet = `<script setup lang="ts">
import type { SelectOption } from '#valkoui'

const form = reactive({
  city: '',
  contry: '',
  state: ''
})

const countries: SelectOption[] = [
  { label: 'United States', value: 'us' },
  { label: 'Canada', value: 'ca' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Germany', value: 'de' },
  { label: 'Australia', value: 'au' }
]

const cities: SelectOption[] = [
  { label: 'New York', value: 'new_york' },
  { label: 'Los Angeles', value: 'los_angeles' },
  { label: 'London', value: 'london' },
  { label: 'Toronto', value: 'toronto' },
  { label: 'Berlin', value: 'berlin' }
]

const states: SelectOption[] = [
  { label: 'California', value: 'ca' },
  { label: 'New York', value: 'ny' },
  { label: 'Texas', value: 'tx' },
  { label: 'Ontario', value: 'on' },
  { label: 'Berlin', value: 'berlin' }
]
<\u002Fscript>

<template>
  <div class="flex flex-col gap-4 w-full max-w-lg mx-auto p-6 rounded-lg bg-light-4 dark:bg-dark-3/[.8] shadow mt-5">
    <div class="flex justify-between">
      <h1 class="text-xl font-semibold">
        Billing Address
      </h1>
      <vk-icon
        name="map-pin"
        class="text-2xl"
      />
    </div>

    <div class="grid grid-cols-1 gap-6">
      <vk-input
        variant="outlined"
        label="Full Name"
      />
      <vk-input
        variant="outlined"
        label="Address Line 1"
      />
      <vk-input
        variant="outlined"
        label="Address Line 2"
      />
      <vk-select
        v-model="form.city"
        variant="outlined"
        label="City"
        :options="cities"
      />
      <vk-select
        v-model="form.state"
        variant="outlined"
        label="State"
        :options="states"
      />
      <vk-input
        variant="outlined"
        label="Postal Code"
        type="number"
      />
      <vk-select
        v-model="form.contry"
        variant="outlined"
        label="Country"
        :options="countries"
      />
      <vk-input
        variant="outlined"
        label="Phone Number"
        type="number"
      />
    </div>

    <vk-button
      variant="outlined"
      flat
    >
      Save Address
    </vk-button>
  </div>
</template>
`
</script>

<template>
  <page-template>
    <template #example>
      <div class="flex flex-col gap-4 w-full max-w-lg mx-auto p-6 rounded-lg bg-light-4 dark:bg-dark-3/[.8] shadow mt-5">
        <div class="flex justify-between">
          <h1 class="text-xl font-semibold">
            Billing Address
          </h1>
          <vk-icon
            name="map-pin"
            class="text-2xl"
          />
        </div>

        <div class="grid grid-cols-1 gap-6">
          <vk-input
            variant="outlined"
            label="Full Name"
          />
          <vk-input
            variant="outlined"
            label="Address Line 1"
          />
          <vk-input
            variant="outlined"
            label="Address Line 2"
          />
          <vk-select
            v-model="form.city"
            variant="outlined"
            label="City"
            :options="cities"
          />
          <vk-select
            v-model="form.state"
            variant="outlined"
            label="State"
            :options="states"
          />
          <vk-input
            variant="outlined"
            label="Postal Code"
            type="number"
          />
          <vk-select
            v-model="form.contry"
            variant="outlined"
            label="Country"
            :options="countries"
          />
          <vk-input
            variant="outlined"
            label="Phone Number"
            type="number"
          />
        </div>

        <vk-button
          variant="outlined"
          flat
        >
          Save Address
        </vk-button>
      </div>
    </template>

    <template #code>
      <code-block :code="templateSnippet" />
    </template>
  </page-template>
</template>
