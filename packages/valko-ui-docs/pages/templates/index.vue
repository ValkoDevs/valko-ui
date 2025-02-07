<script setup lang="ts">
const templates = [
  { key: 1, name: 'Top Navbar', image: '/assets/templates/top-navbar.webp', link: '/templates/top-nav', tags: ['layout'] },
  { key: 2, name: 'Left Menu', image: '/assets/templates/left-menu.webp', link: '/templates/left-menu', tags: ['layout'] },
  { key: 3, name: 'Left Menu & Top Navbar', image: '/assets/templates/left-menu-top-navbar.webp', link: '/templates/left-menu-top-nav', tags: ['layout'] },
  { key: 4, name: 'Vertical Navbar', image: '/assets/templates/vertical-navbar.webp', link: '/templates/vertical-nav', tags: ['layout'] },
  { key: 5, name: 'Vertical Navbar & Menu', image: '/assets/templates/vertical-navbar-menu.webp', link: '/templates/vertical-nav-menu', tags: ['layout'] },
  { key: 6, name: 'DataTable', image: '/assets/templates/datatable.webp', link: '/templates/datatable', tags: ['data'] },
  { key: 7, name: 'Profile', image: '/assets/templates/profile.webp', link: '/templates/profile', tags: ['forms', 'data'] },
  { key: 8, name: 'Payment', image: '/assets/templates/payment.webp', link: '/templates/payment', tags: ['forms'] },
  { key: 9, name: 'Address', image: '/assets/templates/address.webp', link: '/templates/address', tags: ['forms'] },
  { key: 10, name: 'Login', image: '/assets/templates/login.webp', link: '/templates/login', tags: ['forms'] },
  { key: 11, name: 'Signup', image: '/assets/templates/signup.webp', link: '/templates/signup', tags: ['forms'] },
  { key: 12, name: 'Product List Page', image: '/assets/templates/product-list-page.webp', link: '/templates/product-list-page', tags: ['e-commerce'] },
  { key: 13, name: 'Product Detail Page', image: '/assets/templates/product-detail-page.webp', link: '/templates/product-detail-page', tags: ['e-commerce'] },
  { key: 14, name: 'Pricing', image: '/assets/templates/pricing.webp', link: '/templates/pricing', tags: ['data'] },
  { key: 15, name: 'Settings', image: '/assets/templates/settings.webp', link: '/templates/settings', tags: ['forms'] },
  { key: 16, name: 'Dashboard', image: '/assets/templates/dashboard.webp', link: '/templates/dashboard', tags: ['data'] },
  { key: 17, name: 'Filters Horizontal', image: '/assets/templates/filters-horizontal.webp', link: '/templates/filters-horizontal', tags: ['filters'] },
  { key: 17, name: 'Filters Vertical', image: '/assets/templates/filters-vertical.webp', link: '/templates/filters-vertical', tags: ['filters'] },
  { key: 18, name: 'User Management', image: '/assets/templates/user-management.webp', link: '/templates/user-management', tags: ['data'] },
  { key: 19, name: 'User Edit', image: '/assets/templates/user-edit.webp', link: '/templates/user-edit', tags: ['data'] }
]

const categorizedTemplates = computed(() =>
  Object.fromEntries(
    [...new Set(templates.flatMap(template => template.tags))].map(tag => [
      tag,
      templates.filter(template => template.tags.includes(tag))
    ])
  )
)

const navigate = (url: string) => navigateTo(url)
</script>

<template>
  <div class="w-full max-w-screen-xl mx-auto px-4">
    <h1 class="text-4xl my-4">
      Templates
    </h1>
    <p class="text-lg">
      A collection of templates to speed up development.
    </p>

    <vk-divider
      color="neutral"
      size="xs"
      class="mb-16 mt-8"
    />

    <div
      v-for="(templatesGroup, category) in categorizedTemplates"
      :key="category"
      class="flex flex-col gap-4 mb-16"
    >
      <h2 class="text-2xl capitalize font-semibold">
        {{ category }}
      </h2>

      <vk-divider
        color="neutral"
        size="xs"
      />

      <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
        <vk-card
          v-for="template in templatesGroup"
          :key="template.key"
          layout="cover"
          is-pressable
          size="md"
          @click="navigate(template.link)"
        >
          <vk-card-header class="justify-center">
            {{ template.name }}
          </vk-card-header>
          <vk-card-image>
            <img
              class="object-cover object-center size-full"
              :src="template.image"
            >
          </vk-card-image>
        </vk-card>
      </div>
    </div>
  </div>
</template>
