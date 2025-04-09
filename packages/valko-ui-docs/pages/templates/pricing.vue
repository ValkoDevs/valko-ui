<script setup lang="ts">
import type { TableItem, TableHeader } from '#valkoui'

const headers: TableHeader[] = [
  { key: 'props', field: 'props', label: '' },
  { key: 'basic', field: 'basic', label: 'Basic' },
  { key: 'pro', field: 'pro', label: 'Pro' },
  { key: 'premium', field: 'premium', label: 'Premium' }
]

const data: TableItem[] = [
  {
    key: 'prop-01',
    props: 'Public',
    basic: '✓',
    pro: '✓',
    premium: '✓'
  },
  {
    key: 'prop-02',
    props: 'Private',
    basic: '',
    pro: '✓',
    premium: '✓'
  },
  {
    key: 'prop-03',
    props: 'Permissions',
    basic: '✓',
    pro: '✓',
    premium: '✓'
  },
  {
    key: 'prop-04',
    props: 'Sharing',
    basic: '',
    pro: '✓',
    premium: '✓'
  },
  {
    key: 'prop-05',
    props: 'Unlimited members',
    basic: '',
    pro: '',
    premium: '✓'
  },
  {
    key: 'prop-06',
    props: 'Extra security',
    basic: '',
    pro: '',
    premium: '✓'
  }
]

const templateSnippet = `<script setup lang="ts">
import type { TableItem, TableHeader } from '#valkoui'

const headers: TableHeader[] = [
  { key: 'props', field: 'props', label: '' },
  { key: 'basic', field: 'basic', label: 'Basic' },
  { key: 'pro', field: 'pro', label: 'Pro' },
  { key: 'premium', field: 'premium', label: 'Premium' }
]

const data: TableItem[] = [
  {
    key: 'prop-01',
    props: 'Public',
    basic: '✓',
    pro: '✓',
    premium: '✓'
  },
  {
    key: 'prop-02',
    props: 'Private',
    basic: '',
    pro: '✓',
    premium: '✓'
  },
  {
    key: 'prop-03',
    props: 'Permissions',
    basic: '✓',
    pro: '✓',
    premium: '✓'
  },
  {
    key: 'prop-04',
    props: 'Sharing',
    basic: '',
    pro: '✓',
    premium: '✓'
  },
  {
    key: 'prop-05',
    props: 'Unlimited members',
    basic: '',
    pro: '',
    premium: '✓'
  },
  {
    key: 'prop-06',
    props: 'Extra security',
    basic: '',
    pro: '',
    premium: '✓'
  }
]
<\u002Fscript>

<template>
  <div class="flex flex-col gap-4">
    <vk-navbar
      color="neutral"
      flat
      class="flex gap-4 justify-between"
    >
      <h1 class="text-xl font-bold">
        Pricing Examples
      </h1>
      <div class="flex gap-4">
        <vk-button
          variant="link"
          color="neutral"
        >
          Features
        </vk-button>
        <vk-button
          variant="link"
          color="neutral"
        >
          Enterprise
        </vk-button>
        <vk-button
          variant="link"
          color="neutral"
        >
          Support
        </vk-button>
        <vk-button
          variant="link"
        >
          Pricing
        </vk-button>
      </div>
    </vk-navbar>

    <div class="flex justify-center gap-12 py-4">
      <vk-card class="w-80">
        <vk-card-header class="justify-center bg-neutral-700 text-light-200">
          Basic
        </vk-card-header>
        <vk-card-body>
          <p class="text-center ">
            Perfect for personal use
          </p>
          <div class="my-4 text-center">
            <span class="text-3xl font-bold ">$19</span>
            <span class=" text-sm">/month</span>
          </div>
          <ul class="space-y-2 ">
            <li><vk-icon name="database" /> 5 GB Storage</li>
            <li><vk-icon name="message-chatbot" /> Basic Support</li>
            <li><vk-icon name="user" /> 1 User</li>
          </ul>
        </vk-card-body>
        <vk-card-footer class="justify-center">
          <vk-button variant="outlined">
            Choose Plan
          </vk-button>
        </vk-card-footer>
      </vk-card>

      <vk-card
        class="scale-105 shadow-primary-600 shadow-md border-2 border-primary-600"
        size="lg"
      >
        <vk-card-header class="justify-center bg-gradient-to-br from-primary-500 to-primary-700 text-light-200 gap-4">
          Pro
        </vk-card-header>
        <vk-tag
          text="Most Popular"
          variant="ghost"
          color="primary"
          shape="square"
          class="w-full p-3 order-2"
        />
        <vk-card-body>
          <p class="text-center">
            For growing businesses
          </p>
          <div class="my-4 text-center">
            <span class="text-3xl font-bold">$49</span>
            <span class="text-sm">/month</span>
          </div>
          <ul class="space-y-2">
            <li><vk-icon name="database" /> 50 GB Storage</li>
            <li><vk-icon name="message-chatbot" /> Priority Support</li>
            <li><vk-icon name="user" /> 5 User</li>
            <li><vk-icon name="badge-tm" /> Custom Branding</li>
          </ul>
        </vk-card-body>
        <vk-card-footer class="justify-center">
          <vk-button variant="gradient">
            Choose Plan
          </vk-button>
        </vk-card-footer>
      </vk-card>

      <vk-card class="w-80">
        <vk-card-header class="justify-center bg-neutral-700 text-light-200">
          Premium
        </vk-card-header>
        <vk-card-body>
          <p class="text-center ">
            For professionals and teams
          </p>
          <div class="my-4 text-center">
            <span class="text-3xl font-bold ">$99</span>
            <span class=" text-sm">/month</span>
          </div>
          <ul class="space-y-2 ">
            <li><vk-icon name="database" /> 200 GB Storage</li>
            <li><vk-icon name="message-chatbot" /> 24/7 Support</li>
            <li><vk-icon name="user" /> Unlimited Users</li>
            <li><vk-icon name="tool" /> Advanced Features</li>
          </ul>
        </vk-card-body>
        <vk-card-footer class="justify-center">
          <vk-button variant="outlined">
            Choose Plan
          </vk-button>
        </vk-card-footer>
      </vk-card>
    </div>

    <div class="flex flex-col mx-20">
      <h3 class="text-lg font-semibold">
        Compare Plans
      </h3>
      <vk-table
        :headers
        :data
        striped
      />
    </div>
  </div>
</template>
`
</script>

<template>
  <page-template>
    <template #example>
      <div class="flex flex-col gap-4">
        <vk-navbar
          color="neutral"
          flat
          class="flex gap-4 justify-between"
        >
          <h1 class="text-xl font-bold">
            Pricing Examples
          </h1>
          <div class="flex gap-4">
            <vk-button
              variant="link"
              color="neutral"
            >
              Features
            </vk-button>
            <vk-button
              variant="link"
              color="neutral"
            >
              Enterprise
            </vk-button>
            <vk-button
              variant="link"
              color="neutral"
            >
              Support
            </vk-button>
            <vk-button
              variant="link"
            >
              Pricing
            </vk-button>
          </div>
        </vk-navbar>

        <div class="flex justify-center gap-12 py-4">
          <vk-card class="w-80">
            <vk-card-header class="justify-center bg-neutral-700 text-light-200">
              Basic
            </vk-card-header>
            <vk-card-body>
              <p class="text-center ">
                Perfect for personal use
              </p>
              <div class="my-4 text-center">
                <span class="text-3xl font-bold ">$19</span>
                <span class=" text-sm">/month</span>
              </div>
              <ul class="space-y-2 ">
                <li><vk-icon name="database" /> 5 GB Storage</li>
                <li><vk-icon name="message-chatbot" /> Basic Support</li>
                <li><vk-icon name="user" /> 1 User</li>
              </ul>
            </vk-card-body>
            <vk-card-footer class="justify-center">
              <vk-button variant="outlined">
                Choose Plan
              </vk-button>
            </vk-card-footer>
          </vk-card>

          <vk-card
            class="scale-105 shadow-primary-600 shadow-md border-2 border-primary-600"
            size="lg"
          >
            <vk-card-header class="justify-center bg-gradient-to-br from-primary-500 to-primary-700 text-light-200 gap-4">
              Pro
            </vk-card-header>
            <vk-tag
              text="Most Popular"
              variant="ghost"
              color="primary"
              shape="square"
              class="w-full p-3 order-2"
            />
            <vk-card-body>
              <p class="text-center">
                For growing businesses
              </p>
              <div class="my-4 text-center">
                <span class="text-3xl font-bold">$49</span>
                <span class="text-sm">/month</span>
              </div>
              <ul class="space-y-2">
                <li><vk-icon name="database" /> 50 GB Storage</li>
                <li><vk-icon name="message-chatbot" /> Priority Support</li>
                <li><vk-icon name="user" /> 5 User</li>
                <li><vk-icon name="badge-tm" /> Custom Branding</li>
              </ul>
            </vk-card-body>
            <vk-card-footer class="justify-center">
              <vk-button variant="gradient">
                Choose Plan
              </vk-button>
            </vk-card-footer>
          </vk-card>

          <vk-card class="w-80">
            <vk-card-header class="justify-center bg-neutral-700 text-light-200">
              Premium
            </vk-card-header>
            <vk-card-body>
              <p class="text-center ">
                For professionals and teams
              </p>
              <div class="my-4 text-center">
                <span class="text-3xl font-bold ">$99</span>
                <span class=" text-sm">/month</span>
              </div>
              <ul class="space-y-2 ">
                <li><vk-icon name="database" /> 200 GB Storage</li>
                <li><vk-icon name="message-chatbot" /> 24/7 Support</li>
                <li><vk-icon name="user" /> Unlimited Users</li>
                <li><vk-icon name="tool" /> Advanced Features</li>
              </ul>
            </vk-card-body>
            <vk-card-footer class="justify-center">
              <vk-button variant="outlined">
                Choose Plan
              </vk-button>
            </vk-card-footer>
          </vk-card>
        </div>

        <div class="flex flex-col mx-20">
          <h3 class="text-lg font-semibold">
            Compare Plans
          </h3>
          <vk-table
            :headers
            :data
            striped
          />
        </div>
      </div>
    </template>

    <template #code>
      <code-block :code="templateSnippet" />
    </template>
  </page-template>
</template>
