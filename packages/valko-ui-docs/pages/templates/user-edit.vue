<!-- eslint-disable no-useless-escape -->
<script setup lang="ts">
import type { Tab } from '#valkoui'

const tabs: Tab[] = [
  { key: 'user-info', title: 'User Info' },
  { key: 'permissions', title: 'Permissions' }
]

const user = ref({
  name: 'Alice Johnson',
  email: 'alice.johnson@example.com',
  company: 'Tech Innovations Inc.',
  sales: 120,
  'last-log': '24/05/10',
  status: 'active',
  permissions: {
    contacts: 2,
    dashboard: 1,
    reports: 1,
    settings: 0,
    admin: 0
  }
})

const templateCode = `
<template>
  <div class="max-w-screen-xl mx-auto bg-light-2 dark:bg-dark-3/[.8] rounded-lg mt-10">
    <vk-tabs
      :tabs
      grow
      variant="ghost"
      shape="line"
    >
      <template #user-info>
        <div class="grid grid-cols-2 gap-4 p-4">
          <div
            v-for="(_, key) in user"
            :key="key"
          >
            <vk-input
              v-if="key !== 'permissions'"
              v-model="user[key]"
              :label="key.charAt(0).toUpperCase() + key.slice(1)"
            />
          </div>
        </div>
      </template>

      <template #permissions>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <div
            v-for="(value, permissionKey) in user.permissions"
            :key="permissionKey"
            class="flex justify-between items-center p-4 shadow rounded-lg bg-light-1 dark:bg-dark-2"
          >
            <h2 class="text-lg capitalize">
              {{ permissionKey }}
            </h2>

            <div class="flex gap-2">
              <vk-tooltip content="None">
                <vk-button
                  variant="ghost"
                  condensed
                  shape="rounded"
                  class="size-8"
                  :color="value === 0 ? 'error' : 'neutral'"
                >
                  <vk-icon name="ban" />
                </vk-button>
              </vk-tooltip>

              <vk-tooltip content="Read">
                <vk-button
                  variant="ghost"
                  condensed
                  shape="rounded"
                  class="size-8"
                  :color="value === 1 ? 'warning' : 'neutral'"
                >
                  <vk-icon name="eye" />
                </vk-button>
              </vk-tooltip>

              <vk-tooltip content="Write">
                <vk-button
                  variant="ghost"
                  condensed
                  shape="rounded"
                  class="size-8"
                  :color="value === 2 ? 'success' : 'neutral'"
                >
                  <vk-icon name="pencil" />
                </vk-button>
              </vk-tooltip>
            </div>
          </div>
        </div>
      </template>
    </vk-tabs>

    <div class="flex gap-4 justify-end px-4 pb-4">
      <vk-button size="sm">
        Save Changes
      </vk-button>
      <vk-button
        variant="outlined"
        color="neutral"
      >
        Cancel
      </vk-button>
    </div>
  </div>
</template>
`

const scriptCode = `
<script setup lang="ts">
import type { Tab } from '#valkoui'

const tabs: Tab[] = [
  { key: 'user-info', title: 'User Info' },
  { key: 'permissions', title: 'Permissions' }
]

const user = ref({
  name: 'Alice Johnson',
  email: 'alice.johnson@example.com',
  company: 'Tech Innovations Inc.',
  sales: 120,
  'last-log': '24/05/10',
  status: 'active',
  permissions: {
    contacts: 2,
    dashboard: 1,
    reports: 1,
    settings: 0,
    admin: 0
  }
})
<\/script>
`
</script>

<template>
  <page-template>
    <template #example>
      <div class="max-w-screen-xl mx-auto bg-light-2 dark:bg-dark-3/[.8] rounded-lg mt-10">
        <vk-tabs
          :tabs
          grow
          variant="ghost"
          shape="line"
        >
          <template #user-info>
            <div class="grid grid-cols-2 gap-4 p-4">
              <div
                v-for="(_, key) in user"
                :key="key"
              >
                <vk-input
                  v-if="key !== 'permissions'"
                  v-model="user[key]"
                  :label="key.charAt(0).toUpperCase() + key.slice(1)"
                />
              </div>
            </div>
          </template>

          <template #permissions>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              <div
                v-for="(value, permissionKey) in user.permissions"
                :key="permissionKey"
                class="flex justify-between items-center p-4 shadow rounded-lg bg-light-1 dark:bg-dark-2"
              >
                <h2 class="text-lg capitalize">
                  {{ permissionKey }}
                </h2>

                <div class="flex gap-2">
                  <vk-tooltip content="None">
                    <vk-button
                      variant="ghost"
                      condensed
                      shape="rounded"
                      class="size-8"
                      :color="value === 0 ? 'error' : 'neutral'"
                    >
                      <vk-icon name="ban" />
                    </vk-button>
                  </vk-tooltip>

                  <vk-tooltip content="Read">
                    <vk-button
                      variant="ghost"
                      condensed
                      shape="rounded"
                      class="size-8"
                      :color="value === 1 ? 'warning' : 'neutral'"
                    >
                      <vk-icon name="eye" />
                    </vk-button>
                  </vk-tooltip>

                  <vk-tooltip content="Write">
                    <vk-button
                      variant="ghost"
                      condensed
                      shape="rounded"
                      class="size-8"
                      :color="value === 2 ? 'success' : 'neutral'"
                    >
                      <vk-icon name="pencil" />
                    </vk-button>
                  </vk-tooltip>
                </div>
              </div>
            </div>
          </template>
        </vk-tabs>

        <div class="flex gap-4 justify-end px-4 pb-4">
          <vk-button size="sm">
            Save Changes
          </vk-button>
          <vk-button
            variant="outlined"
            color="neutral"
          >
            Cancel
          </vk-button>
        </div>
      </div>
    </template>

    <template #code>
      <div class="px-4">
        <code-block
          :code="scriptCode"
          :copy="`${scriptCode}${templateCode}`"
          language="js"
        />

        <code-block :code="templateCode" />
      </div>
    </template>
  </page-template>
</template>
