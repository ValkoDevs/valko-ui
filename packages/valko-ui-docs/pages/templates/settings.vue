<!-- eslint-disable no-useless-escape -->
<script setup lang="ts">
import { ref } from 'vue'
import type { MenuItem } from '#valkoui'

const form = reactive({
  radio: 'theme-val',
  checkboxs: {
    sms: false,
    push: false,
    email: false,
    profile: false,
    search: false,
    compact: false
  }
})

const menuItems: MenuItem[] = [
  { key: 'account', group: 'General', text: 'Account' },
  { key: 'privacy', group: 'General', text: 'Privacy' },
  { key: 'notifications', group: 'General', text: 'Notifications' },
  { key: 'security', group: 'Security', text: 'Security' },
  { key: 'billing', group: 'Account', text: 'Billing' },
  { key: 'appearance', group: 'Preferences', text: 'Appearance' }
]

const radios = [
  { label: 'Light Theme', value: 'light' },
  { label: 'Dark Theme', value: 'dark' }
]

const activeItem = ref('account')

const onItemClick = (item: MenuItem) => activeItem.value = `${item.key}`

const templateSnippet = `<script setup lang="ts">
import { ref } from 'vue'
import type { MenuItem } from '#valkoui'

const form = reactive({
  radio: 'theme-val',
  checkboxs: {
    sms: false,
    push: false,
    email: false,
    profile: false,
    search: false,
    compact: false
  }
})

const menuItems: MenuItem[] = [
  { key: 'account', group: 'General', text: 'Account' },
  { key: 'privacy', group: 'General', text: 'Privacy' },
  { key: 'notifications', group: 'General', text: 'Notifications' },
  { key: 'security', group: 'Security', text: 'Security' },
  { key: 'billing', group: 'Account', text: 'Billing' },
  { key: 'appearance', group: 'Preferences', text: 'Appearance' }
]

const radios = [
  { label: 'Light Theme', value: 'light' },
  { label: 'Dark Theme', value: 'dark' }
]

const activeItem = ref('account')

const onItemClick = (item: MenuItem) => activeItem.value = \`\${item.key}\`
<\/script>

<template>
  <div class="max-w-screen-xl mx-auto mt-10 bg-light-4 dark:bg-dark-3/[.8] flex rounded-lg shadow">
    <aside class="w-1/5 border-r-2 border-light-4">
      <vk-menu
        :items="menuItems"
        :active="activeItem"
        floating
        variant="outlined"
        @item-click="onItemClick"
      />
    </aside>

    <main class="w-4/5 p-6">
      <div
        v-if="activeItem === 'account'"
        class="flex flex-col gap-4 h-full"
      >
        <h2 class="text-xl font-semibold">
          Account Settings
        </h2>
        <vk-input
          label="Username"
        />
        <vk-input
          label="Email Address"
          type="email"
        />
        <vk-button class="w-1/5 mt-auto">
          Save Changes
        </vk-button>
      </div>

      <div
        v-if="activeItem === 'privacy'"
        class="flex flex-col gap-4 h-full"
      >
        <h2 class="text-xl font-semibold">
          Privacy Settings
        </h2>
        <vk-checkbox
          v-model="form.checkboxs.profile"
          label="Make my profile public"
        />
        <vk-checkbox
          v-model="form.checkboxs.search"
          label="Allow search engines to index my profile"
        />
        <vk-button class="mt-auto w-1/5">
          Save Changes
        </vk-button>
      </div>

      <div
        v-if="activeItem === 'notifications'"
        class="flex flex-col gap-4 h-full"
      >
        <h2 class="text-xl font-semibold mb-4">
          Notification Settings
        </h2>
        <vk-checkbox
          v-model="form.checkboxs.email"
          label="Email Notifications"
        />
        <vk-checkbox
          v-model="form.checkboxs.push"
          label="Push Notifications"
        />
        <vk-checkbox
          v-model="form.checkboxs.sms"
          label="SMS Notifications"
        />
        <vk-button class="w-1/5 mt-auto">
          Save Changes
        </vk-button>
      </div>

      <div
        v-if="activeItem === 'security'"
        class="flex flex-col gap-4 h-full"
      >
        <h2 class="text-xl font-semibold mb-4">
          Security Settings
        </h2>
        <vk-input
          label="Current Password"
          type="password"
        />
        <vk-input
          label="New Password"
          type="password"
        />
        <vk-button class="w-1/5 mt-auto">
          Update Password
        </vk-button>
      </div>

      <div
        v-if="activeItem === 'billing'"
        class="flex flex-col gap-4 h-full"
      >
        <h2 class="text-xl font-semibold mb-4">
          Billing
        </h2>
        <vk-input
          label="Credit Card Number"
        />
        <vk-input
          label="Billing Address"
        />
        <vk-button class="w-1/5 mt-auto">
          Save Billing Info
        </vk-button>
      </div>

      <div
        v-if="activeItem === 'appearance'"
        class="flex flex-col gap-4 h-full"
      >
        <h2 class="text-xl font-semibold mb-4">
          Appearance
        </h2>
        <vk-radio
          v-for="radio in radios"
          :key="radio.value"
          v-model="form.radio"
          :label="radio.label"
          :value="radio.value"
          name="theme-radio"
        />
        <vk-checkbox
          v-model="form.checkboxs.compact"
          label="Enable Compact Mode"
        />
        <vk-button class="w-1/5 mt-auto">
          Apply Changes
        </vk-button>
      </div>
    </main>
  </div>
</template>
`
</script>

<template>
  <page-template>
    <template #example>
      <div class="max-w-screen-xl mx-auto mt-10 bg-light-4 dark:bg-dark-3/[.8] flex rounded-lg shadow">
        <aside class="w-1/5 border-r-2 border-light-4">
          <vk-menu
            :items="menuItems"
            :active="activeItem"
            floating
            variant="outlined"
            @item-click="onItemClick"
          />
        </aside>

        <main class="w-4/5 p-6">
          <div
            v-if="activeItem === 'account'"
            class="flex flex-col gap-4 h-full"
          >
            <h2 class="text-xl font-semibold">
              Account Settings
            </h2>
            <vk-input
              label="Username"
            />
            <vk-input
              label="Email Address"
              type="email"
            />
            <vk-button class="w-1/5 mt-auto">
              Save Changes
            </vk-button>
          </div>

          <div
            v-if="activeItem === 'privacy'"
            class="flex flex-col gap-4 h-full"
          >
            <h2 class="text-xl font-semibold">
              Privacy Settings
            </h2>
            <vk-checkbox
              v-model="form.checkboxs.profile"
              label="Make my profile public"
            />
            <vk-checkbox
              v-model="form.checkboxs.search"
              label="Allow search engines to index my profile"
            />
            <vk-button class="mt-auto w-1/5">
              Save Changes
            </vk-button>
          </div>

          <div
            v-if="activeItem === 'notifications'"
            class="flex flex-col gap-4 h-full"
          >
            <h2 class="text-xl font-semibold mb-4">
              Notification Settings
            </h2>
            <vk-checkbox
              v-model="form.checkboxs.email"
              label="Email Notifications"
            />
            <vk-checkbox
              v-model="form.checkboxs.push"
              label="Push Notifications"
            />
            <vk-checkbox
              v-model="form.checkboxs.sms"
              label="SMS Notifications"
            />
            <vk-button class="w-1/5 mt-auto">
              Save Changes
            </vk-button>
          </div>

          <div
            v-if="activeItem === 'security'"
            class="flex flex-col gap-4 h-full"
          >
            <h2 class="text-xl font-semibold mb-4">
              Security Settings
            </h2>
            <vk-input
              label="Current Password"
              type="password"
            />
            <vk-input
              label="New Password"
              type="password"
            />
            <vk-button class="w-1/5 mt-auto">
              Update Password
            </vk-button>
          </div>

          <div
            v-if="activeItem === 'billing'"
            class="flex flex-col gap-4 h-full"
          >
            <h2 class="text-xl font-semibold mb-4">
              Billing
            </h2>
            <vk-input
              label="Credit Card Number"
            />
            <vk-input
              label="Billing Address"
            />
            <vk-button class="w-1/5 mt-auto">
              Save Billing Info
            </vk-button>
          </div>

          <div
            v-if="activeItem === 'appearance'"
            class="flex flex-col gap-4 h-full"
          >
            <h2 class="text-xl font-semibold mb-4">
              Appearance
            </h2>
            <vk-radio
              v-for="radio in radios"
              :key="radio.value"
              v-model="form.radio"
              :label="radio.label"
              :value="radio.value"
              name="theme-radio"
            />
            <vk-checkbox
              v-model="form.checkboxs.compact"
              label="Enable Compact Mode"
            />
            <vk-button class="w-1/5 mt-auto">
              Apply Changes
            </vk-button>
          </div>
        </main>
      </div>
    </template>

    <template #code>
      <code-block :code="templateSnippet" />
    </template>
  </page-template>
</template>
