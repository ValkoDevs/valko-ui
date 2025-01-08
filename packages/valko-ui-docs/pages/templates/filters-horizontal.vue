<!-- eslint-disable no-useless-escape -->
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
<\/script>

<template>
  <aside class="flex gap-6 p-6 rounded-lg h-[15vh] items-start bg-light-2 dark:bg-dark-3/[.4]">
    <div class="flex flex-col gap-2 w-fit">
      <h3 class="text-sm font-semibold mb-2">
        Price
      </h3>
      <div>
        <p class="text-xs">
          Min: $ {{ filters.price[0] }} - Max: $ {{ filters.price[1] }}
        </p>
        <vk-range
          v-model="filters.price"
          :is-double="true"
          :step="100"
          :max="10000"
          class="w-36"
        />
      </div>
    </div>

    <vk-divider
      color="neutral"
      size="xs"
      direction="vertical"
    />

    <div class="flex flex-col gap-2 w-fit">
      <h3 class="text-sm font-semibold mb-2">
        Category
      </h3>
      <div>
        <div class="flex gap-2 flex-wrap">
          <vk-checkbox
            v-model="filters.categories.electronics"
            label="Electronics"
            class="text-xs"
          />
          <vk-checkbox
            v-model="filters.categories['home-appliances']"
            label="Home Appliances"
            class="text-xs"
          />
          <vk-checkbox
            v-model="filters.categories.audio"
            label="Audio"
            class="text-xs"
          />
          <vk-checkbox
            v-model="filters.categories.wearables"
            label="Wearables"
            class="text-xs"
          />
          <vk-checkbox
            v-model="filters.categories.gaming"
            label="Gaming"
            class="text-xs"
          />
        </div>
      </div>
    </div>

    <vk-divider
      color="neutral"
      size="xs"
      direction="vertical"
    />

    <div class="flex flex-col gap-2 w-fit">
      <h3 class="text-sm font-semibold mb-2">
        Rating
      </h3>
      <div>
        <div class="flex gap-2 items-center">
          <vk-icon
            v-for="i in 5"
            :key="i"
            name="star"
            :class="\`cursor-pointer transition-colors duration-300 hover:text-yellow-500 \${i <= filters.rating ? 'text-yellow-500' : ''}\`"
            @click="toggleRating(i)"
          />
        </div>
      </div>
    </div>

    <vk-divider
      color="neutral"
      size="xs"
      direction="vertical"
    />

    <div class="flex flex-col gap-2 w-fit">
      <h3 class="text-sm font-semibold mb-2">
        Availability
      </h3>
      <div>
        <vk-radio
          v-model="filters.availability"
          name="availability"
          value="in-stock"
          label="In Stock"
          class="text-xs"
        />
        <vk-radio
          v-model="filters.availability"
          name="availability"
          value="out-of-stock"
          label="Out of Stock"
          class="text-xs"
        />
      </div>
    </div>

    <vk-divider
      color="neutral"
      size="xs"
      direction="vertical"
    />

    <vk-button
      color="neutral"
      variant="outlined"
      class="text-xs"
    >
      Reset Filters
    </vk-button>
  </aside>
</template>
`
</script>

<template>
  <page-template>
    <template #example>
      <aside class="flex gap-6 p-6 rounded-lg h-[15vh] items-start bg-light-2 dark:bg-dark-3/[.4]">
        <div class="flex flex-col gap-2 w-fit">
          <h3 class="text-sm font-semibold mb-2">
            Price
          </h3>
          <div>
            <p class="text-xs">
              Min: $ {{ filters.price[0] }} - Max: $ {{ filters.price[1] }}
            </p>
            <vk-range
              v-model="filters.price"
              :is-double="true"
              :step="100"
              :max="10000"
              class="w-36"
            />
          </div>
        </div>

        <vk-divider
          color="neutral"
          size="xs"
          direction="vertical"
        />

        <div class="flex flex-col gap-2 w-fit">
          <h3 class="text-sm font-semibold mb-2">
            Category
          </h3>
          <div>
            <div class="flex gap-2 flex-wrap">
              <vk-checkbox
                v-model="filters.categories.electronics"
                label="Electronics"
                class="text-xs"
              />
              <vk-checkbox
                v-model="filters.categories['home-appliances']"
                label="Home Appliances"
                class="text-xs"
              />
              <vk-checkbox
                v-model="filters.categories.audio"
                label="Audio"
                class="text-xs"
              />
              <vk-checkbox
                v-model="filters.categories.wearables"
                label="Wearables"
                class="text-xs"
              />
              <vk-checkbox
                v-model="filters.categories.gaming"
                label="Gaming"
                class="text-xs"
              />
            </div>
          </div>
        </div>

        <vk-divider
          color="neutral"
          size="xs"
          direction="vertical"
        />

        <div class="flex flex-col gap-2 w-fit">
          <h3 class="text-sm font-semibold mb-2">
            Rating
          </h3>
          <div>
            <div class="flex gap-2 items-center">
              <vk-icon
                v-for="i in 5"
                :key="i"
                name="star"
                :class="`cursor-pointer transition-colors duration-300 hover:text-yellow-500 ${i <= filters.rating ? 'text-yellow-500' : ''}`"
                @click="toggleRating(i)"
              />
            </div>
          </div>
        </div>

        <vk-divider
          color="neutral"
          size="xs"
          direction="vertical"
        />

        <div class="flex flex-col gap-2 w-fit">
          <h3 class="text-sm font-semibold mb-2">
            Availability
          </h3>
          <div>
            <vk-radio
              v-model="filters.availability"
              name="availability"
              value="in-stock"
              label="In Stock"
              class="text-xs"
            />
            <vk-radio
              v-model="filters.availability"
              name="availability"
              value="out-of-stock"
              label="Out of Stock"
              class="text-xs"
            />
          </div>
        </div>

        <vk-divider
          color="neutral"
          size="xs"
          direction="vertical"
        />

        <vk-button
          color="neutral"
          variant="outlined"
          class="text-xs"
        >
          Reset Filters
        </vk-button>
      </aside>
    </template>

    <template #code>
      <code-block :code="templateSnippet" />
    </template>
  </page-template>
</template>
