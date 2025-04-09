<script setup lang="ts">
import type { Tab } from '#valkoui'

const tabs: Tab[] = [
  { key: 'account-settings', title: 'Account Settings' },
  { key: 'company-settings', title: 'Company Settings' },
  { key: 'documents', title: 'Documents' },
  { key: 'billing', title: 'Billing' },
  { key: 'notifications', title: 'Notifications' }
]

const profileStats = [
  { label: 'Applied Opportunities', value: 24 },
  { label: 'Accepted Offers', value: 8 },
  { label: 'Current Projects', value: 3 }
]

const templateSnippet = `<script setup lang="ts">
import type { Tab } from '#valkoui'

const tabs: Tab[] = [
  { key: 'account-settings', title: 'Account Settings' },
  { key: 'company-settings', title: 'Company Settings' },
  { key: 'documents', title: 'Documents' },
  { key: 'billing', title: 'Billing' },
  { key: 'notifications', title: 'Notifications' }
]

const profileStats = [
  { label: 'Applied Opportunities', value: 24 },
  { label: 'Accepted Offers', value: 8 },
  { label: 'Current Projects', value: 3 }
]
<\u002Fscript>

<template>
  <div class="relative h-full max-w-screen-xl mx-auto w-full">
    <div class="flex flex-row gap-8 py-8">
      <div class="w-1/3 flex flex-col items-center shadow-lg rounded-lg p-6 bg-light-300 dark:bg-dark-800/[.8]">
        <vk-avatar
          src="/assets/avatar.jpg"
          size="lg"
          class="mb-4"
          variant="ghost"
          shape="rounded"
        />
        <h3 class="text-lg font-semibold mb-1">
          Marie Poole
        </h3>
        <span class="text-sm text-dark-600 dark:text-light-400">Microsoft Inc.</span>

        <div class="mt-6 w-full flex flex-col gap-4">
          <div
            v-for="stat in profileStats"
            :key="stat.label"
            class="flex justify-between items-center bg-light-200 dark:bg-dark-800 rounded-md p-2"
          >
            <span class="text-sm">{{ stat.label }}</span>
            <span class="text-sm font-semibold">{{ stat.value }}</span>
          </div>
        </div>

        <vk-button
          class="mt-6 w-full"
          variant="outlined"
          color="neutral"
          flat
        >
          View LinkedIn Profile
        </vk-button>
      </div>

      <div class="w-fit shadow-lg rounded-lg p-6 bg-light-300 dark:bg-dark-800/[.8]">
        <vk-tabs
          :tabs
          shape="line"
          variant="ghost"
          color="primary"
        >
          <template #account-settings>
            <form class="flex flex-col gap-4 pt-4">
              <div class="grid grid-cols-2 gap-4">
                <vk-input
                  label="First Name"
                  variant="outlined"
                  color="neutral"
                />
                <vk-input
                  label="Last Name"
                  variant="outlined"
                  color="neutral"
                />
                <vk-input
                  label="Email"
                  variant="outlined"
                  color="neutral"
                />
                <vk-input
                  label="Phone Number"
                  variant="outlined"
                  color="neutral"
                />
                <vk-input
                  label="Address"
                  variant="outlined"
                  color="neutral"
                />
                <vk-input
                  label="City"
                  variant="outlined"
                  color="neutral"
                />
                <vk-input
                  label="State"
                  variant="outlined"
                  color="neutral"
                />
                <vk-input
                  label="Zip Code"
                  variant="outlined"
                  color="neutral"
                />
              </div>
              <div class="flex gap-4">
                <vk-button class="w-1/2">
                  Save Changes
                </vk-button>
                <vk-button
                  class="w-1/2"
                  color="neutral"
                  variant="outlined"
                >
                  Cancel
                </vk-button>
              </div>
            </form>
          </template>

          <template #company-settings>
            <p class="mt-4">
              Placeholder content for Company Settings.
            </p>
          </template>

          <template #documents>
            <p class="mt-4">
              Placeholder content for Documents.
            </p>
          </template>

          <template #billing>
            <p class="mt-4">
              Placeholder content for Billing.
            </p>
          </template>

          <template #notifications>
            <p class="mt-4">
              Placeholder content for Notifications.
            </p>
          </template>
        </vk-tabs>
      </div>
    </div>
  </div>
</template>
`
</script>

<template>
  <page-template>
    <template #example>
      <div class="relative h-full max-w-screen-xl mx-auto w-full">
        <div class="flex flex-row gap-8 py-8">
          <div class="w-1/3 flex flex-col items-center shadow-lg rounded-lg p-6 bg-light-300 dark:bg-dark-800/[.8]">
            <vk-avatar
              src="/assets/avatar.jpg"
              size="lg"
              class="mb-4"
              variant="ghost"
              shape="rounded"
            />
            <h3 class="text-lg font-semibold mb-1">
              Marie Poole
            </h3>
            <span class="text-sm text-dark-600 dark:text-light-400">Microsoft Inc.</span>

            <div class="mt-6 w-full flex flex-col gap-4">
              <div
                v-for="stat in profileStats"
                :key="stat.label"
                class="flex justify-between items-center bg-light-200 dark:bg-dark-800 rounded-md p-2"
              >
                <span class="text-sm">{{ stat.label }}</span>
                <span class="text-sm font-semibold">{{ stat.value }}</span>
              </div>
            </div>

            <vk-button
              class="mt-6 w-full"
              variant="outlined"
              color="neutral"
              flat
            >
              View LinkedIn Profile
            </vk-button>
          </div>

          <div class="w-fit shadow-lg rounded-lg p-6 bg-light-300 dark:bg-dark-800/[.8]">
            <vk-tabs
              :tabs
              shape="line"
              variant="ghost"
              color="primary"
            >
              <template #account-settings>
                <form class="flex flex-col gap-4 pt-4">
                  <div class="grid grid-cols-2 gap-4">
                    <vk-input
                      label="First Name"
                      variant="outlined"
                      color="neutral"
                    />
                    <vk-input
                      label="Last Name"
                      variant="outlined"
                      color="neutral"
                    />
                    <vk-input
                      label="Email"
                      variant="outlined"
                      color="neutral"
                    />
                    <vk-input
                      label="Phone Number"
                      variant="outlined"
                      color="neutral"
                    />
                    <vk-input
                      label="Address"
                      variant="outlined"
                      color="neutral"
                    />
                    <vk-input
                      label="City"
                      variant="outlined"
                      color="neutral"
                    />
                    <vk-input
                      label="State"
                      variant="outlined"
                      color="neutral"
                    />
                    <vk-input
                      label="Zip Code"
                      variant="outlined"
                      color="neutral"
                    />
                  </div>
                  <div class="flex gap-4">
                    <vk-button class="w-1/2">
                      Save Changes
                    </vk-button>
                    <vk-button
                      class="w-1/2"
                      color="neutral"
                      variant="outlined"
                    >
                      Cancel
                    </vk-button>
                  </div>
                </form>
              </template>

              <template #company-settings>
                <p class="mt-4">
                  Placeholder content for Company Settings.
                </p>
              </template>

              <template #documents>
                <p class="mt-4">
                  Placeholder content for Documents.
                </p>
              </template>

              <template #billing>
                <p class="mt-4">
                  Placeholder content for Billing.
                </p>
              </template>

              <template #notifications>
                <p class="mt-4">
                  Placeholder content for Notifications.
                </p>
              </template>
            </vk-tabs>
          </div>
        </div>
      </div>
    </template>

    <template #code>
      <code-block :code="templateSnippet" />
    </template>
  </page-template>
</template>
