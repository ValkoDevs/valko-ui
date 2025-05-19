<script setup lang="ts">
const templateSnippet = `<template>
  <div class="w-full flex-flex-col gap-4 max-w-md mx-auto p-4 rounded-lg bg-light-300 dark:bg-dark-800/[.8] shadow mt-10">
    <h1 class="text-2xl font-semibold text-center mb-5">
      Login
    </h1>

    <form class="grid gap-4">
      <vk-input
        label="Email"
        type="email"
      />
      <vk-input
        label="Password"
        type="password"
      />
      <a
        href="#"
        class="text-primary hover:text-primary-600 mb-4 text-center"
      >
        Forgot your password?
      </a>
      <vk-button>
        Login
      </vk-button>

      <p class="text-sm text-center">
        Don't have an account?
        <a
          href="#"
          class="text-primary hover:text-primary-600"
        >
          Sign up
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
      <div class="w-full flex-flex-col gap-4 max-w-md mx-auto p-4 rounded-lg bg-light-300 dark:bg-dark-800/[.8] shadow mt-10">
        <h1 class="text-2xl font-semibold text-center mb-5">
          Login
        </h1>

        <form class="grid gap-4">
          <vk-input
            label="Email"
            type="email"
          />
          <vk-input
            label="Password"
            type="password"
          />
          <a
            href="#"
            class="text-primary hover:text-primary-600 mb-4 text-center"
          >
            Forgot your password?
          </a>
          <vk-button>
            Login
          </vk-button>

          <p class="text-sm text-center">
            Don't have an account?
            <a
              href="#"
              class="text-primary hover:text-primary-600"
            >
              Sign up
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
