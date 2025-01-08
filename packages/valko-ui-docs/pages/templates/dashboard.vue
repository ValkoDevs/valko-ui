<!-- eslint-disable no-useless-escape -->
<script setup lang="ts">
import type { MenuItem, TableItem, TableHeader } from '#valkoui'

const menuItems: MenuItem[] = [
  { key: 'dashboard', group: 'Overview', text: 'Dashboard' },
  { key: 'analytics', group: 'Overview', text: 'Analytics' },
  { key: 'projects', group: 'Management', text: 'Projects' },
  { key: 'tasks', group: 'Management', text: 'Tasks' },
  { key: 'team', group: 'Users', text: 'Team' },
  { key: 'settings', group: 'Preferences', text: 'Settings' }
]

const employeeHeaders: TableHeader[] = [
  { key: 'name', field: 'name', label: 'Name' },
  { key: 'email', field: 'email', label: 'Email' },
  { key: 'sales', field: 'sales', label: 'Sales' },
  { key: 'date', field: 'date', label: 'Date' },
  { key: 'status', field: 'status', label: 'Status' },
  { key: 'company', field: 'company', label: 'Company' }
]

const employeeData: TableItem[] = [
  {
    key: 'employee-01',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    sales: 120,
    date: '2024-11-15',
    status: 'active',
    company: 'Tech Innovations Inc.'
  },
  {
    key: 'employee-02',
    name: 'John Doe',
    email: 'john.doe@example.com',
    sales: 85,
    date: '2023-09-08',
    status: 'inactive',
    company: 'Global Solutions Ltd.'
  },
  {
    key: 'employee-03',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    sales: 145,
    date: '2024-06-23',
    status: 'pending',
    company: 'Creative Dynamics Co.'
  },
  {
    key: 'employee-04',
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    sales: 67,
    date: '2023-10-30',
    status: 'error',
    company: 'Retail Masters Corp.'
  },
  {
    key: 'employee-05',
    name: 'Sophia Martinez',
    email: 'sophia.martinez@example.com',
    sales: 200,
    date: '2024-01-12',
    status: 'active',
    company: 'Marketing Hub LLC'
  }
]

const activeItem = ref('account')

const onItemClick = (item: MenuItem) => activeItem.value = `${item.key}`

const templateSnippet = `<script setup lang="ts">
import type { MenuItem, TableItem, TableHeader } from '#valkoui'

const menuItems: MenuItem[] = [
  { key: 'dashboard', group: 'Overview', text: 'Dashboard' },
  { key: 'analytics', group: 'Overview', text: 'Analytics' },
  { key: 'projects', group: 'Management', text: 'Projects' },
  { key: 'tasks', group: 'Management', text: 'Tasks' },
  { key: 'team', group: 'Users', text: 'Team' },
  { key: 'settings', group: 'Preferences', text: 'Settings' }
]

const employeeHeaders: TableHeader[] = [
  { key: 'name', field: 'name', label: 'Name' },
  { key: 'email', field: 'email', label: 'Email' },
  { key: 'sales', field: 'sales', label: 'Sales' },
  { key: 'date', field: 'date', label: 'Date' },
  { key: 'status', field: 'status', label: 'Status' },
  { key: 'company', field: 'company', label: 'Company' }
]

const employeeData: TableItem[] = [
  {
    key: 'employee-01',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    sales: 120,
    date: '2024-11-15',
    status: 'active',
    company: 'Tech Innovations Inc.'
  },
  {
    key: 'employee-02',
    name: 'John Doe',
    email: 'john.doe@example.com',
    sales: 85,
    date: '2023-09-08',
    status: 'inactive',
    company: 'Global Solutions Ltd.'
  },
  {
    key: 'employee-03',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    sales: 145,
    date: '2024-06-23',
    status: 'pending',
    company: 'Creative Dynamics Co.'
  },
  {
    key: 'employee-04',
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    sales: 67,
    date: '2023-10-30',
    status: 'error',
    company: 'Retail Masters Corp.'
  },
  {
    key: 'employee-05',
    name: 'Sophia Martinez',
    email: 'sophia.martinez@example.com',
    sales: 200,
    date: '2024-01-12',
    status: 'active',
    company: 'Marketing Hub LLC'
  }
]

const activeItem = ref('account')

const onItemClick = (item: MenuItem) => activeItem.value = \`\${item.key}\`
<\/script>

<template>
  <div class="flex h-full">
    <aside class="w-[10vw] border-r border-light-4 dark:border-dark-2 bg-light-3 dark:bg-dark-3/[.8]">
      <vk-menu
        :items="menuItems"
        :active="activeItem"
        floating
        @item-click="onItemClick"
      />
    </aside>

    <div class="flex-1 flex flex-col">
      <header class="p-4 border-b border-light-4 dark:border-dark-2 flex justify-between items-center bg-light-3 dark:bg-dark-3/[.8]">
        <h1 class="text-lg font-semibold">
          Dashboard
        </h1>
        <vk-button color="neutral">
          Profile
        </vk-button>
      </header>

      <main class="p-6 flex-1 overflow-auto space-y-6">
        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="p-4 shadow-md rounded flex flex-col items-center bg-light-2 dark:bg-dark-3/[.5]">
            <h3>
              Total Users
            </h3>
            <p class="text-2xl font-bold">
              1,234
            </p>
          </div>
          <div class="p-4 shadow-md rounded flex flex-col items-center bg-light-2 dark:bg-dark-3/[.5]">
            <h3>
              Sales
            </h3>
            <p class="text-2xl font-bold">
              $45,678
            </p>
          </div>
          <div class="p-4 shadow-md rounded flex flex-col items-center bg-light-2 dark:bg-dark-3/[.5]">
            <h3>
              Projects
            </h3>
            <p class="text-2xl font-bold">
              56
            </p>
          </div>
          <div class="p-4 shadow-md rounded flex flex-col items-center bg-light-2 dark:bg-dark-3/[.5]">
            <h3>
              Pending Tasks
            </h3>
            <p class="text-2xl font-bold">
              14
            </p>
          </div>
        </section>

        <section class="shadow-md">
          <vk-table
            :headers="employeeHeaders"
            :data="employeeData"
            striped
          />
        </section>

        <section class="p-6 shadow-md rounded bg-light-2 dark:bg-dark-3/[.5]">
          <h2 class="text-lg font-semibold mb-4">
            Analytics
          </h2>
          <div class="h-64 flex items-center justify-center">
            <p>
              [Mock Chart]
            </p>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
`
</script>

<template>
  <page-template>
    <template #example>
      <div class="flex h-full">
        <aside class="w-[10vw] border-r border-light-4 dark:border-dark-2 bg-light-3 dark:bg-dark-3/[.8]">
          <vk-menu
            :items="menuItems"
            :active="activeItem"
            floating
            @item-click="onItemClick"
          />
        </aside>

        <div class="flex-1 flex flex-col">
          <header class="p-4 border-b border-light-4 dark:border-dark-2 flex justify-between items-center bg-light-3 dark:bg-dark-3/[.8]">
            <h1 class="text-lg font-semibold">
              Dashboard
            </h1>
            <vk-button color="neutral">
              Profile
            </vk-button>
          </header>

          <main class="p-6 flex-1 overflow-auto space-y-6">
            <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="p-4 shadow-md rounded flex flex-col items-center bg-light-2 dark:bg-dark-3/[.5]">
                <h3>
                  Total Users
                </h3>
                <p class="text-2xl font-bold">
                  1,234
                </p>
              </div>
              <div class="p-4 shadow-md rounded flex flex-col items-center bg-light-2 dark:bg-dark-3/[.5]">
                <h3>
                  Sales
                </h3>
                <p class="text-2xl font-bold">
                  $45,678
                </p>
              </div>
              <div class="p-4 shadow-md rounded flex flex-col items-center bg-light-2 dark:bg-dark-3/[.5]">
                <h3>
                  Projects
                </h3>
                <p class="text-2xl font-bold">
                  56
                </p>
              </div>
              <div class="p-4 shadow-md rounded flex flex-col items-center bg-light-2 dark:bg-dark-3/[.5]">
                <h3>
                  Pending Tasks
                </h3>
                <p class="text-2xl font-bold">
                  14
                </p>
              </div>
            </section>

            <section class="shadow-md">
              <vk-table
                :headers="employeeHeaders"
                :data="employeeData"
                striped
              />
            </section>

            <section class="p-6 shadow-md rounded bg-light-2 dark:bg-dark-3/[.5]">
              <h2 class="text-lg font-semibold mb-4">
                Analytics
              </h2>
              <div class="h-64 flex items-center justify-center">
                <p>
                  [Mock Chart]
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </template>

    <template #code>
      <code-block :code="templateSnippet" />
    </template>
  </page-template>
</template>
