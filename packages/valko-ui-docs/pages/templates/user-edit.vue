<script setup lang="ts">
import type { Tab } from '#valkoui'

const tabs: Tab[] = [
  { key: 'user-accent', title: 'User accent' },
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

const templateSnippet = `<script setup lang="ts">
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
<\u002Fscript>

<template>
  <div class="max-w-screen-xl mx-auto bg-light-100 dark:bg-dark-800/[.8] rounded-lg mt-10">
    <vk-tabs
      :tabs
      grow
      variant="ghost"
      shape="line"
    >
      <template #user-accent
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
            class="flex justify-between items-center p-4 shadow rounded-lg bg-light-50 dark:bg-dark-700"
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
                  :color="value === 0 ? 'negative' : 'secondary'"
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
                  :color="value === 1 ? 'warning' : 'secondary'"
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
                  :color="value === 2 ? 'positive' : 'secondary'"
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
        color="secondary"
      >
        Cancel
      </vk-button>
    </div>
  </div>
</template>
`
</script>

<template>
  <page-template>
    <template #example>
      <div class="max-w-screen-xl mx-auto bg-light-100 dark:bg-dark-800/[.8] rounded-lg mt-10">
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
                class="flex justify-between items-center p-4 shadow rounded-lg bg-light-50 dark:bg-dark-700"
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
                      :color="value === 0 ? 'negative' : 'secondary'"
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
                      :color="value === 1 ? 'warning' : 'secondary'"
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
                      :color="value === 2 ? 'positive' : 'secondary'"
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
            color="secondary"
          >
            Cancel
          </vk-button>
        </div>
      </div>
    </template>

    <template #code>
      <code-block :code="templateSnippet" />
    </template>
  </page-template>
</template>
