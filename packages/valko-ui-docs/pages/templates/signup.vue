<script setup lang="ts">
const templateSnippet = `<template>
  <div class="w-full max-w-md mx-auto p-8 rounded-lg bg-light-300 dark:bg-dark-800/[.8] shadow mt-10">
    <h1 class="text-2xl font-semibold mb-6 text-center">
      Sign Up
    </h1>

    <form class="grid gap-4">
      <vk-input label="Full Name" />
      <vk-input
        label="Email"
        type="email"
      />
      <vk-input
        label="Password"
        type="password"
      />
      <vk-input
        label="Confirm Password"
        type="password"
      />

      <vk-button>
        Sign Up
      </vk-button>

      <p class="text-sm text-center">
        Already have an account?
        <a
          href="#"
          class="text-primary-500 hover:text-primary-600"
        >
          Login
        </a>
      </p>
    </form>
  </div>
</template>
`
</script>

<template>
  <page-template>
    <template #example>
      <div class="w-full max-w-md mx-auto p-8 rounded-lg bg-light-300 dark:bg-dark-800/[.8] shadow mt-10">
        <h1 class="text-2xl font-semibold mb-6 text-center">
          Sign Up
        </h1>

        <form class="grid gap-4">
          <vk-input label="Full Name" />
          <vk-input
            label="Email"
            type="email"
          />
          <vk-input
            label="Password"
            type="password"
          />
          <vk-input
            label="Confirm Password"
            type="password"
          />

          <vk-button>
            Sign Up
          </vk-button>

          <p class="text-sm text-center">
            Already have an account?
            <a
              href="#"
              class="text-primary-500 hover:text-primary-600"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </template>

    <template #code>
      <code-block :code="templateSnippet" />
    </template>
  </page-template>
</template>
