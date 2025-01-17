<script setup lang="ts">
const filtersOpen = ref(false)
const isMd = ref(false)

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

const products = [
  {
    name: 'Wireless Headphones',
    image: '/assets/product.jpg',
    price: '99.99',
    description: 'High-quality wireless headphones with noise cancellation.',
    features: ['Bluetooth 5.0', '20 hours battery life', 'Built-in microphone']
  },
  {
    name: 'Smartwatch',
    image: '/assets/product.jpg',
    price: '199.99',
    description: 'Stay connected and track your fitness with this sleek smartwatch.',
    features: ['Heart rate monitor', 'GPS tracking', 'Water-resistant']
  },
  {
    name: 'Gaming Laptop',
    image: '/assets/product.jpg',
    price: '1499.99',
    description: 'High-performance gaming laptop with the latest GPU and CPU.',
    features: ['16GB RAM', '512GB SSD', 'RTX 3080 graphics']
  },
  {
    name: 'Portable Speaker',
    image: '/assets/product.jpg',
    price: '59.99',
    description: 'Compact and powerful portable speaker for outdoor use.',
    features: ['Water-resistant', '10 hours battery life', 'Bluetooth connectivity']
  },
  {
    name: '4K TV',
    image: '/assets/product.jpg',
    price: '799.99',
    description: 'Ultra-high-definition 4K TV with smart features and voice control.',
    features: ['HDR support', 'Voice assistant', 'Wi-Fi enabled']
  },
  {
    name: 'Smartphone',
    image: '/assets/product.jpg',
    price: '899.99',
    description: 'Latest smartphone with a high-resolution camera and fast processor.',
    features: ['108MP camera', '5G connectivity', '6.5-inch OLED display']
  },
  {
    name: 'Electric Toothbrush',
    image: '/assets/product.jpg',
    price: '49.99',
    description: 'Advanced electric toothbrush with 3 modes and long battery life.',
    features: ['3 brushing modes', 'Waterproof', '2-week battery life']
  },
  {
    name: 'VR Headset',
    image: '/assets/product.jpg',
    price: '299.99',
    description: 'Immerse yourself in virtual reality with this high-quality headset.',
    features: ['1080p resolution', 'Comfortable fit', 'Wide field of view']
  },
  {
    name: 'Bluetooth Earbuds',
    image: '/assets/product.jpg',
    price: '59.99',
    description: 'Compact and comfortable wireless earbuds for everyday use.',
    features: ['Noise-cancellation', '4 hours battery life', 'Sweat-resistant']
  },
  {
    name: 'Action Camera',
    image: '/assets/product.jpg',
    price: '129.99',
    description: 'Capture your adventures with this waterproof action camera.',
    features: ['4K video recording', 'Waterproof up to 10m', 'Wide-angle lens']
  }
]

const exploreCategories = [
  {
    title: 'Explore Gaming Accessories',
    image: '/assets/product.jpg',
    buttonText: 'View Gaming Accessories'
  },
  {
    title: 'Discover Home Appliances',
    image: '/assets/product.jpg',
    buttonText: 'Explore Appliances'
  }
]

const favIcons = ref(new Set())

const toggleRating = (selectedRating: number) => {
  if (filters.rating === selectedRating) filters.rating = 0
  else filters.rating = selectedRating
}

const toggleFav = (index: number) => {
  if (favIcons.value.has(index)) favIcons.value.delete(index)
  else favIcons.value.add(index)
}

const toggleFilters = () => filtersOpen.value = !filtersOpen.value

const updateIsMd = () => {
  isMd.value = window.matchMedia('(min-width: 768px)').matches
}

const toggleCategory = (category: keyof typeof filters.categories) => filters.categories[category] = !filters.categories[category]

const templateSnippet = `<script setup lang="ts">
const filtersOpen = ref(false)
const isMd = ref(false)

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

const products = [
  {
    name: 'Wireless Headphones',
    image: '/assets/product.jpg',
    price: '99.99',
    description: 'High-quality wireless headphones with noise cancellation.',
    features: ['Bluetooth 5.0', '20 hours battery life', 'Built-in microphone']
  },
  {
    name: 'Smartwatch',
    image: '/assets/product.jpg',
    price: '199.99',
    description: 'Stay connected and track your fitness with this sleek smartwatch.',
    features: ['Heart rate monitor', 'GPS tracking', 'Water-resistant']
  },
  {
    name: 'Gaming Laptop',
    image: '/assets/product.jpg',
    price: '1499.99',
    description: 'High-performance gaming laptop with the latest GPU and CPU.',
    features: ['16GB RAM', '512GB SSD', 'RTX 3080 graphics']
  },
  {
    name: 'Portable Speaker',
    image: '/assets/product.jpg',
    price: '59.99',
    description: 'Compact and powerful portable speaker for outdoor use.',
    features: ['Water-resistant', '10 hours battery life', 'Bluetooth connectivity']
  },
  {
    name: '4K TV',
    image: '/assets/product.jpg',
    price: '799.99',
    description: 'Ultra-high-definition 4K TV with smart features and voice control.',
    features: ['HDR support', 'Voice assistant', 'Wi-Fi enabled']
  },
  {
    name: 'Smartphone',
    image: '/assets/product.jpg',
    price: '899.99',
    description: 'Latest smartphone with a high-resolution camera and fast processor.',
    features: ['108MP camera', '5G connectivity', '6.5-inch OLED display']
  },
  {
    name: 'Electric Toothbrush',
    image: '/assets/product.jpg',
    price: '49.99',
    description: 'Advanced electric toothbrush with 3 modes and long battery life.',
    features: ['3 brushing modes', 'Waterproof', '2-week battery life']
  },
  {
    name: 'VR Headset',
    image: '/assets/product.jpg',
    price: '299.99',
    description: 'Immerse yourself in virtual reality with this high-quality headset.',
    features: ['1080p resolution', 'Comfortable fit', 'Wide field of view']
  },
  {
    name: 'Bluetooth Earbuds',
    image: '/assets/product.jpg',
    price: '59.99',
    description: 'Compact and comfortable wireless earbuds for everyday use.',
    features: ['Noise-cancellation', '4 hours battery life', 'Sweat-resistant']
  },
  {
    name: 'Action Camera',
    image: '/assets/product.jpg',
    price: '129.99',
    description: 'Capture your adventures with this waterproof action camera.',
    features: ['4K video recording', 'Waterproof up to 10m', 'Wide-angle lens']
  }
]

const exploreCategories = [
  {
    title: 'Explore Gaming Accessories',
    image: '/assets/product.jpg',
    buttonText: 'View Gaming Accessories'
  },
  {
    title: 'Discover Home Appliances',
    image: '/assets/product.jpg',
    buttonText: 'Explore Appliances'
  }
]

const favIcons = ref(new Set())

const toggleRating = (selectedRating: number) => {
  if (filters.rating === selectedRating) filters.rating = 0
  else filters.rating = selectedRating
}

const toggleFav = (index: number) => {
  if (favIcons.value.has(index)) favIcons.value.delete(index)
  else favIcons.value.add(index)
}

const toggleFilters = () => filtersOpen.value = !filtersOpen.value

const updateIsMd = () => {
  isMd.value = window.matchMedia('(min-width: 768px)').matches
}

const toggleCategory = (category: keyof typeof filters.categories) => filters.categories[category] = !filters.categories[category]
onMounted(() => {
  updateIsMd()
  window.addEventListener('resize', updateIsMd)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMd)
})
<\u002Fscript>

<template>
  <div class="flex mt-10 mb-10 gap-5 px-10 lg:px-5 relative">
    <vk-drawer
      :is-open="filtersOpen"
      shape="soft"
      placement="left"
      class="w-2/5"
      title="Filters"
      @close="toggleFilters"
    >
      <aside class="w-full flex flex-col gap-4">
        <div class="flex flex-col gap-4">
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
        </div>
        <vk-divider
          color="neutral"
          size="xs"
        />
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
        </div>
        <vk-divider
          color="neutral"
          size="xs"
        />
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
        </div>
        <vk-divider
          color="neutral"
          size="xs"
        />
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
        </div>
        <vk-divider
          color="neutral"
          size="xs"
        />
        <div>
          <vk-button
            color="neutral"
            variant="outlined"
          >
            Reset Filters
          </vk-button>
        </div>
      </aside>
    </vk-drawer>

    <aside class="hidden lg:block bg-light-2 dark:bg-dark-3/[.4] w-[25vw] flex flex-col gap-4 p-10 rounded-lg">
      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-bold text-center">
          Filters
        </h2>
        <vk-divider
          color="neutral"
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
          color="neutral"
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
          color="neutral"
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
          color="neutral"
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
          color="neutral"
          size="xs"
        />
      </div>

      <div class="mt-4">
        <vk-button
          color="neutral"
          variant="outlined"
        >
          Reset Filters
        </vk-button>
      </div>
    </aside>

    <main class="grid gap-10 bg-light-2 dark:bg-dark-3/[.4] p-4 rounded-lg w-full">
      <div class="lg:hidden bg-light-4 dark:bg-dark-2 flex flex-wrap justify-around items-center h-fit gap-4 p-2 rounded-lg">
        <vk-tag
          v-for="(isActive, category) in filters.categories"
          :key="category"
          :text="category"
          :color="isActive ? 'primary' : 'neutral'"
          variant="outlined"
          is-pressable
          @click="toggleCategory(category)"
        />
        <vk-button
          variant="link"
          shape="rounded"
          color="neutral"
          condensed
          size="lg"
          class="size-10"
          @click="toggleFilters"
        >
          <vk-icon
            name="adjustments-horizontal"
            class="text-2xl"
          />
        </vk-button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full justify-items-center">
        <vk-card
          v-for="(product, index) in products"
          :key="\`\${product.name}-\${index}\`"
          :size="isMd ? 'md' : 'sm'"
          flat
          is-pressable
        >
          <vk-card-header>
            {{ product.name }}
          </vk-card-header>
          <vk-card-image
            :src="product.image"
            :alt="\`\${product.name} Image\`"
          />
          <vk-card-body>
            <div class="flex flex-col gap-4">
              <p class="text-sm">
                {{ product.description }}
              </p>
              <div class="flex gap-4 justify-between flex-wrap">
                <vk-tag
                  v-for="tag in product.features"
                  :key="tag"
                  :text="tag"
                  variant="outlined"
                  color="neutral"
                />
              </div>
              <p class="font-bold text-lg text-left">
                $ {{ product.price }}
              </p>
            </div>
          </vk-card-body>
          <vk-card-footer>
            <div class="flex justify-between items-center w-full">
              <vk-button
                :size="isMd ? 'md' : 'sm'"
              >
                Add to cart
              </vk-button>
              <vk-icon
                name="heart"
                :class="\`\text-2xl hover:text-error-500 \${favIcons.has(index) ? 'text-error-500' : ''}\`"
                @click="toggleFav(index)"
              />
            </div>
          </vk-card-footer>
        </vk-card>
      </div>

      <vk-pagination
        v-model="filters.currentPage"
        :pages="10"
        :size="isMd ? 'md' : 'sm'"
        class="mx-auto"
      />

      <div class="flex flex-col gap-4 w-full">
        <vk-card
          v-for="(category, index) in exploreCategories"
          :key="index"
          size="full"
          layout="cover"
          flat
        >
          <vk-card-image
            :src="category.image"
            :alt="\`\${category.title} Image\`"
            class="w-1/3 h-32 object-cover"
          />
          <vk-card-header>
            {{ category.title }}
          </vk-card-header>
          <vk-card-footer>
            <vk-button
              variant="outlined"
            >
              {{ category.buttonText }}
            </vk-button>
          </vk-card-footer>
        </vk-card>
      </div>
    </main>
  </div>
</template>
`

onMounted(() => {
  updateIsMd()
  window.addEventListener('resize', updateIsMd)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMd)
})
</script>

<template>
  <page-template>
    <template #example>
      <div class="flex mt-10 mb-10 gap-5 px-10 lg:px-5 relative">
        <vk-drawer
          :is-open="filtersOpen"
          shape="soft"
          placement="left"
          class="w-2/5"
          title="Filters"
          @close="toggleFilters"
        >
          <aside class="w-full flex flex-col gap-4">
            <div class="flex flex-col gap-4">
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
            </div>
            <vk-divider
              color="neutral"
              size="xs"
            />
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
            </div>
            <vk-divider
              color="neutral"
              size="xs"
            />
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
            </div>
            <vk-divider
              color="neutral"
              size="xs"
            />
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
            </div>
            <vk-divider
              color="neutral"
              size="xs"
            />
            <div>
              <vk-button
                color="neutral"
                variant="outlined"
              >
                Reset Filters
              </vk-button>
            </div>
          </aside>
        </vk-drawer>

        <aside class="hidden lg:flex bg-light-2 dark:bg-dark-3/[.4] w-[25vw] flex-col gap-4 p-10 rounded-lg">
          <div class="flex flex-col gap-4">
            <h2 class="text-2xl font-bold text-center">
              Filters
            </h2>
            <vk-divider
              color="neutral"
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
              color="neutral"
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
              color="neutral"
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
              color="neutral"
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
              color="neutral"
              size="xs"
            />
          </div>

          <div class="mt-4">
            <vk-button
              color="neutral"
              variant="outlined"
            >
              Reset Filters
            </vk-button>
          </div>
        </aside>

        <main class="grid gap-10 w-full">
          <div class="lg:hidden bg-light-4 dark:bg-dark-3/[.4] flex flex-wrap justify-around items-center h-fit gap-4 p-2 rounded-lg">
            <vk-tag
              v-for="(isActive, category) in filters.categories"
              :key="category"
              :text="category"
              :color="isActive ? 'primary' : 'neutral'"
              variant="outlined"
              is-pressable
              @click="toggleCategory(category)"
            />
            <vk-button
              variant="link"
              shape="rounded"
              color="neutral"
              condensed
              size="lg"
              class="size-10"
              @click="toggleFilters"
            >
              <vk-icon
                name="adjustments-horizontal"
                class="text-2xl"
              />
            </vk-button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full justify-items-center">
            <vk-card
              v-for="(product, index) in products"
              :key="`${product.name}-${index}`"
              :size="isMd ? 'md' : 'sm'"
              flat
              is-pressable
            >
              <vk-card-header>
                {{ product.name }}
              </vk-card-header>
              <vk-card-image
                :src="product.image"
                :alt="`${product.name} Image`"
              />
              <vk-card-body>
                <div class="flex flex-col gap-4">
                  <p class="text-sm">
                    {{ product.description }}
                  </p>
                  <div class="flex gap-4 justify-between flex-wrap">
                    <vk-tag
                      v-for="tag in product.features"
                      :key="tag"
                      :text="tag"
                      variant="outlined"
                      color="neutral"
                    />
                  </div>
                  <p class="font-bold text-lg text-left">
                    $ {{ product.price }}
                  </p>
                </div>
              </vk-card-body>
              <vk-card-footer>
                <div class="flex justify-between items-center w-full">
                  <vk-button
                    :size="isMd ? 'md' : 'sm'"
                  >
                    Add to cart
                  </vk-button>
                  <vk-icon
                    name="heart"
                    :class="`text-2xl hover:text-error-500 ${favIcons.has(index) ? 'text-error-500' : ''}`"
                    @click="toggleFav(index)"
                  />
                </div>
              </vk-card-footer>
            </vk-card>
          </div>

          <vk-pagination
            v-model="filters.currentPage"
            :pages="10"
            :size="isMd ? 'md' : 'sm'"
            class="mx-auto"
          />

          <div class="flex flex-col gap-4 w-full">
            <vk-card
              v-for="(category, index) in exploreCategories"
              :key="index"
              size="full"
              layout="cover"
              flat
            >
              <vk-card-image
                :src="category.image"
                :alt="`${category.title} Image`"
                class="w-1/3 h-32 object-cover"
              />
              <vk-card-header>
                {{ category.title }}
              </vk-card-header>
              <vk-card-footer>
                <vk-button
                  variant="outlined"
                >
                  {{ category.buttonText }}
                </vk-button>
              </vk-card-footer>
            </vk-card>
          </div>
        </main>
      </div>
    </template>

    <template #code>
      <code-block :code="templateSnippet" />
    </template>
  </page-template>
</template>
