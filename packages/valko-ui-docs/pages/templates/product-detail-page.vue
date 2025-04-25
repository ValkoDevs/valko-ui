<script setup lang="ts">
import type { TableHeader } from '#valkoui'

const productHeaders: TableHeader[] = [
  { key: 'feature', field: 'feature', label: 'Feature', filterable: true, sortable: true },
  { key: 'detail', field: 'detail', label: 'Detail', filterable: true, sortable: true }
]

const product = reactive({
  name: 'Smartwatch',
  img: '/assets/product.webp',
  prices: {
    regular: 120.00,
    sale: 99.99
  },
  description: `
Introducing the SmartSync 360, a revolutionary smartwatch designed to enhance every aspect of your daily routine. Combining cutting-edge technology with sleek, timeless aesthetics, this watch isn't just a piece of wearable tech — it’s an extension of you. Whether you're working, working out, or relaxing, the SmartSync 360 seamlessly integrates into your lifestyle, offering a truly personalized experience.
Crafted for those who demand both style and functionality, the SmartSync 360 offers a perfect balance between advanced features and an elegant design. Its lightweight yet durable build ensures comfort all day long, whether you're attending meetings or pushing your limits during a workout. The vibrant AMOLED display ensures that you can effortlessly access accent at a glance, while the intuitive interface allows you to stay connected and in control.`,
  manufacturer: 'FitTech',
  shippingCost: 'Free Shipping',
  specifications: [
    { key: 'spec-01', feature: 'Battery Life', detail: '20 hours' },
    { key: 'spec-02', feature: 'Bluetooth Version', detail: '5.0' },
    { key: 'spec-03', feature: 'Weight', detail: '200g' },
    { key: 'spec-04', feature: 'Color', detail: 'Black' },
    { key: 'spec-05', feature: 'Warranty', detail: '1 year' }
  ],
  reviews: {
    average: 4,
    total: 123
  },
  relatedProducts: [
    { name: 'Gaming Headset', price: '49.99', image: '/assets/product.webp' },
    { name: 'Portable Speaker', price: '59.99', image: '/assets/product.webp' },
    { name: 'Noise Cancelling Earbuds', price: '79.99', image: '/assets/product.webp' }
  ]
})

const templateSnippet = `<script setup lang="ts">
import type { TableHeader } from '#valkoui'

const productHeaders: TableHeader[] = [
  { key: 'feature', field: 'feature', label: 'Feature', filterable: true, sortable: true },
  { key: 'detail', field: 'detail', label: 'Detail', filterable: true, sortable: true }
]

const product = reactive({
  name: 'Wireless Headphones',
  img: '/assets/product.webp',
  price: '99.99',
  description: 'High-quality wireless headphones with noise cancellation.',
  manufacturer: 'AudioTech',
  shippingCost: 'Free Shipping',
  specifications: [
    { key: 'spec-01', feature: 'Battery Life', detail: '20 hours' },
    { key: 'spec-02', feature: 'Bluetooth Version', detail: '5.0' },
    { key: 'spec-03', feature: 'Weight', detail: '200g' },
    { key: 'spec-04', feature: 'Color', detail: 'Black' },
    { key: 'spec-05', feature: 'Warranty', detail: '1 year' }
  ],
  reviews: {
    average: 4.5,
    total: 123
  },
  relatedProducts: [
    { name: 'Gaming Headset', price: '49.99', image: '/assets/product.webp' },
    { name: 'Portable Speaker', price: '59.99', image: '/assets/product.webp' },
    { name: 'Noise Cancelling Earbuds', price: '79.99', image: '/assets/product.webp' }
  ]
})
<\u002Fscript>

<template>
  <div class="flex flex-col gap-8 max-w-screen-xl mx-auto my-10">
    <div>
      <h1 class="text-4xl">
        {{ product.name }}
      </h1>
      <div class="flex items-stretch h-6">
        {{ product.manufacturer }}
        <vk-divider
          direction="vertical"
          color="secondary"
          size="xs"
        />
        <div>
          <vk-icon
            name="star"
            class="text-yellow-500"
          />
          <vk-icon
            name="star"
            class="text-yellow-500"
          />
          <vk-icon
            name="star"
            class="text-yellow-500"
          />
          <vk-icon
            name="star"
            class="text-yellow-500"
          />
          <vk-icon name="star" />
          {{ product.reviews.average }}
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-8">
      <div>
        <img
          :src="product.img"
          class="rounded-lg object-cover h-full w-full"
        >
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-xl font-semibold">
          Description
        </h2>
        <p>{{ product.description }}</p>

        <h2 class="text-xl font-semibold">
          Colors
        </h2>
        <div class="flex gap-4">
          <div class="size-8 bg-white rounded-lg ring ring-primary-500 ring-offset-4 ring-offset-dark-800 cursor-pointer" />
          <div class="size-8 bg-black rounded-lg cursor-pointer" />
          <div class="size-8 bg-teal-500 rounded-lg cursor-pointer" />
          <div class="size-8 bg-blue-500 rounded-lg cursor-pointer" />
        </div>

        <div class="my-4 flex items-center gap-2">
          <small class="text-lg line-through decoration-[3px] text-secondary">&nbsp;$ {{ product.prices.regular.toFixed(2) }}&nbsp;</small>
          <span class="text-3xl font-bold ">$ {{ product.prices.sale.toFixed(2) }}</span>
        </div>

        <div>
          <vk-button>
            Add to cart
          </vk-button>
        </div>
      </div>
    </div>

    <div class="gap-4 flex flex-col">
      <h2 class="text-xl font-semibold">
        Specifications
      </h2>
      <vk-table
        :headers="productHeaders"
        :data="product.specifications"
        striped
      />
    </div>

    <div class="flex flex-col gap-4">
      <h2 class="text-xl font-semibold">
        Related Products
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <vk-card
          v-for="(related, index) in product.relatedProducts"
          :key="index"
          is-pressable
        >
          <vk-card-image :src="related.image" />
          <vk-card-body>
            <p class="text-lg font-bold">
              {{ related.name }}
            </p>
            <p class="font-medium">
              $ {{ related.price }}
            </p>
          </vk-card-body>
        </vk-card>
      </div>
    </div>
  </div>
</template>
`
</script>

<template>
  <page-template>
    <template #example>
      <div class="flex flex-col gap-8 max-w-screen-xl mx-auto my-10">
        <div>
          <h1 class="text-4xl">
            {{ product.name }}
          </h1>
          <div class="flex items-stretch h-6">
            {{ product.manufacturer }}
            <vk-divider
              direction="vertical"
              color="secondary"
              size="xs"
            />
            <div>
              <vk-icon
                name="star"
                class="text-yellow-500"
              />
              <vk-icon
                name="star"
                class="text-yellow-500"
              />
              <vk-icon
                name="star"
                class="text-yellow-500"
              />
              <vk-icon
                name="star"
                class="text-yellow-500"
              />
              <vk-icon name="star" />
              {{ product.reviews.average }}
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-8">
          <div>
            <img
              :src="product.img"
              class="rounded-lg object-cover h-full w-full"
            >
          </div>

          <div class="flex flex-col gap-4">
            <h2 class="text-xl font-semibold">
              Description
            </h2>
            <p>{{ product.description }}</p>

            <h2 class="text-xl font-semibold">
              Colors
            </h2>
            <div class="flex gap-4">
              <div class="size-8 bg-white rounded-lg ring ring-primary-500 ring-offset-4 ring-offset-dark-800 cursor-pointer" />
              <div class="size-8 bg-black rounded-lg cursor-pointer" />
              <div class="size-8 bg-teal-500 rounded-lg cursor-pointer" />
              <div class="size-8 bg-blue-500 rounded-lg cursor-pointer" />
            </div>

            <div class="my-4 flex items-center gap-2">
              <small class="text-lg line-through decoration-[3px] text-secondary">&nbsp;$ {{ product.prices.regular.toFixed(2) }}&nbsp;</small>
              <span class="text-3xl font-bold ">$ {{ product.prices.sale.toFixed(2) }}</span>
            </div>

            <div>
              <vk-button>
                Add to cart
              </vk-button>
            </div>
          </div>
        </div>

        <div class="gap-4 flex flex-col">
          <h2 class="text-xl font-semibold">
            Specifications
          </h2>
          <vk-table
            :headers="productHeaders"
            :data="product.specifications"
            striped
          />
        </div>

        <div class="flex flex-col gap-4">
          <h2 class="text-xl font-semibold">
            Related Products
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <vk-card
              v-for="(related, index) in product.relatedProducts"
              :key="index"
              is-pressable
            >
              <vk-card-image :src="related.image" />
              <vk-card-body>
                <p class="text-lg font-bold">
                  {{ related.name }}
                </p>
                <p class="font-medium">
                  $ {{ related.price }}
                </p>
              </vk-card-body>
            </vk-card>
          </div>
        </div>
      </div>
    </template>

    <template #code>
      <code-block
        :code="templateSnippet"
        class="h-12 w-12"
      />
    </template>
  </page-template>
</template>
