<script setup lang="ts">
const templates = [
  { key: 1, name: 'Top Navbar', image: '/assets/templates/top-navbar.png', link: '/templates/top-nav', tags: ['layout'] },
  { key: 2, name: 'Left Menu', image: '/assets/templates/left-menu.png', link: '/templates/left-menu', tags: ['layout'] },
  { key: 3, name: 'Left Menu & Top Navbar', image: '/assets/templates/left-menu-top-navbar.png', link: '/templates/left-menu-top-nav', tags: ['layout'] },
  { key: 4, name: 'Vertical Navbar', image: '/assets/templates/vertical-navbar.png', link: '/templates/vertical-nav', tags: ['layout'] },
  { key: 5, name: 'Vertical Navbar & Menu', image: '/assets/templates/vertical-navbar-menu.png', link: '/templates/vertical-nav-menu', tags: ['layout'] },
  { key: 6, name: 'DataTable', image: '/assets/templates/datatable.png', link: '/templates/datatable', tags: ['data'] },
  { key: 7, name: 'Profile', image: '/assets/templates/profile.png', link: '/templates/profile', tags: ['forms', 'data'] },
  { key: 8, name: 'Payment', image: '/assets/templates/payment.png', link: '/templates/payment', tags: ['forms'] },
  { key: 9, name: 'Address', image: '/assets/templates/address.png', link: '/templates/address', tags: ['forms'] },
  { key: 10, name: 'Login', image: '/assets/templates/login.png', link: '/templates/login', tags: ['forms'] },
  { key: 11, name: 'Signup', image: '/assets/templates/signup.png', link: '/templates/signup', tags: ['forms'] },
  { key: 12, name: 'Product List Page', image: '/assets/templates/product-list-page.png', link: '/templates/product-list-page', tags: ['e-commerce'] },
  { key: 13, name: 'Product Detail Page', image: '/assets/templates/product-detail-page.png', link: '/templates/product-detail-page', tags: ['e-commerce'] },
  { key: 14, name: 'Pricing', image: '/assets/templates/pricing.png', link: '/templates/pricing', tags: ['data'] },
  { key: 15, name: 'Settings', image: '/assets/templates/settings.png', link: '/templates/settings', tags: ['forms'] },
  { key: 16, name: 'Dashboard', image: '/assets/templates/dashboard.png', link: '/templates/dashboard', tags: ['data'] },
  { key: 17, name: 'Filters Horizontal', image: '/assets/templates/filters-horizontal.png', link: '/templates/filters-horizontal', tags: ['filters'] },
  { key: 17, name: 'Filters Vertical', image: '/assets/templates/filters-vertical.png', link: '/templates/filters-vertical', tags: ['filters'] },
  { key: 18, name: 'User Management', image: '/assets/templates/user-management.png', link: '/templates/user-management', tags: ['data'] },
  { key: 19, name: 'User Edit', image: '/assets/templates/user-edit.png', link: '/templates/user-edit', tags: ['data'] }
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
  <div class="w-full max-w-screen-xl mx-auto">
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

      <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center">
        <vk-card
          v-for="template in templatesGroup"
          :key="template.key"
          is-pressable
          size="sm"
          @click="navigate(template.link)"
        >
          <vk-card-header class="justify-center">
            {{ template.name }}
          </vk-card-header>
          <vk-card-image
            :src="template.image"
            height="200px"
            width="200px"
            class="max-w-full mx-auto mb-6 object-contain object-center border-2 dark:border-dark-1 rounded-lg"
          />
        </vk-card>
      </div>
    </div>
  </div>
</template>
