<script setup lang="ts">
const filters = reactive({
  price: [0, 10000],
  categories: {
    electronics: false,
    'home-appliances': false,
    gaming: false,
    wearables: false,
    audio: false
  },
  rating: ref(0),
  availability: '',
  currentPage: 1
})

const toggleRating = (selectedRating: number) => {
  if (filters.rating === selectedRating) filters.rating = 0
  else filters.rating = selectedRating
}

const templateSnippet = `<script setup lang="ts">
const filters = reactive({
  price: [0, 10000],
  categories: {
    electronics: false,
    'home-appliances': false,
    gaming: false,
    wearables: false,
    audio: false
  },
  rating: ref(0),
  availability: '',
  currentPage: 1
})

const toggleRating = (selectedRating: number) => {
  if (filters.rating === selectedRating) filters.rating = 0
  else filters.rating = selectedRating
}
<\u002Fscript>

<template>
  <aside class="hidden lg:flex bg-surface-container w-[25vw] flex-col gap-4 p-10">
      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-bold text-center">
          Filters
        </h2>
        <vk-divider
          color="surface"
          size="sm"
        />
        <h3 class="text-xl font-semibold">
          Price
        </h3>
        Min: $ {{ filters.price[0] }} - Max: $ {{ filters.price[1] }}
        <vk-range
          v-model="filters.price"
          :is-double="true"
          :step="100"
          :max="10000"
        />
        <vk-divider
          color="surface"
          size="xs"
        />
      </div>
      <div class="flex flex-col gap-4">
        <h3 class="text-xl font-semibold">
          Category
        </h3>
        <div class="flex flex-col gap-2">
          <vk-checkbox
            v-model="filters.categories.electronics"
            label="Electronics"
          />
          <vk-checkbox
            v-model="filters.categories['home-appliances']"
            label="Home Appliances"
          />
          <vk-checkbox
            v-model="filters.categories.audio"
            label="Audio"
          />
          <vk-checkbox
            v-model="filters.categories.wearables"
            label="Wearables"
          />
          <vk-checkbox
            v-model="filters.categories.gaming"
            label="Gaming"
          />
        </div>
        <vk-divider
          color="surface"
          size="xs"
        />
      </div>

      <div class="flex flex-col gap-4">
        <h3 class="text-xl font-semibold">
          Rating
        </h3>
        <div class="flex gap-4 items-center">
          <vk-icon
            v-for="i in 5"
            :key="i"
            name="star"
            :class="\`cursor-pointer transition-colors duration-300 hover:text-yellow-500 \${i <= filters.rating ? 'text-yellow-500' : ''}\`"
            @click="toggleRating(i)"
          />
        </div>
        <vk-divider
          color="surface"
          size="xs"
        />
      </div>

      <div class="flex flex-col gap-4">
        <h3 class="text-xl font-semibold">
          Availability
        </h3>
        <vk-radio
          v-model="filters.availability"
          name="availability"
          value="in-stock"
          label="In Stock"
        />
        <vk-radio
          v-model="filters.availability"
          name="availability"
          value="out-of-stock"
          label="Out of Stock"
        />
        <vk-divider
          color="surface"
          size="xs"
        />
      </div>

      <div class="mt-4">
        <vk-button
          color="surface"
          variant="outlined"
        >
          Reset Filters
        </vk-button>
      </div>
    </aside>
</template>
`
</script>

<template>
  <page-template>
    <template #example>
      <aside class="hidden lg:flex bg-surface-container w-[25vw] flex-col gap-4 p-10">
        <div class="flex flex-col gap-4">
          <h2 class="text-2xl font-bold text-center">
            Filters
          </h2>
          <vk-divider
            color="surface"
            size="sm"
          />
          <h3 class="text-xl font-semibold">
            Price
          </h3>
          Min: $ {{ filters.price[0] }} - Max: $ {{ filters.price[1] }}
          <vk-range
            v-model="filters.price"
            :is-double="true"
            :step="100"
            :max="10000"
          />
          <vk-divider
            color="surface"
            size="xs"
          />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-xl font-semibold">
            Category
          </h3>
          <div class="flex flex-col gap-2">
            <vk-checkbox
              v-model="filters.categories.electronics"
              label="Electronics"
            />
            <vk-checkbox
              v-model="filters.categories['home-appliances']"
              label="Home Appliances"
            />
            <vk-checkbox
              v-model="filters.categories.audio"
              label="Audio"
            />
            <vk-checkbox
              v-model="filters.categories.wearables"
              label="Wearables"
            />
            <vk-checkbox
              v-model="filters.categories.gaming"
              label="Gaming"
            />
          </div>
          <vk-divider
            color="surface"
            size="xs"
          />
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="text-xl font-semibold">
            Rating
          </h3>
          <div class="flex gap-4 items-center">
            <vk-icon
              v-for="i in 5"
              :key="i"
              name="star"
              :class="`cursor-pointer transition-colors duration-300 hover:text-yellow-500 ${i <= filters.rating ? 'text-yellow-500' : ''}`"
              @click="toggleRating(i)"
            />
          </div>
          <vk-divider
            color="surface"
            size="xs"
          />
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="text-xl font-semibold">
            Availability
          </h3>
          <vk-radio
            v-model="filters.availability"
            name="availability"
            value="in-stock"
            label="In Stock"
          />
          <vk-radio
            v-model="filters.availability"
            name="availability"
            value="out-of-stock"
            label="Out of Stock"
          />
          <vk-divider
            color="surface"
            size="xs"
          />
        </div>

        <div class="mt-4">
          <vk-button
            color="surface"
            variant="outlined"
          >
            Reset Filters
          </vk-button>
        </div>
      </aside>
    </template>

    <template #code>
      <code-block :code="templateSnippet" />
    </template>
  </page-template>
</template>
