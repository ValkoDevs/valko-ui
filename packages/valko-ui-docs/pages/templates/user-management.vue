<!-- eslint-disable no-useless-escape -->
<script setup lang="ts">
import type { TableHeader, TableItem } from '#valkoui'

const employeeHeaders: TableHeader[] = [
  { key: 'name', field: 'name', label: 'Name' },
  { key: 'email', field: 'email', label: 'Email' },
  { key: 'company', field: 'company', label: 'Company' },
  { key: 'sales', field: 'sales', label: 'Sales' },
  { key: 'last-log', field: 'last-log', label: 'Last Login' },
  { key: 'status', field: 'status', label: 'Status' },
  { key: 'actions', field: 'actions', label: 'Actions' }
]

const employeeData = reactive<TableItem[]>([
  {
    key: 'employee-01',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    company: 'Tech Innovations Inc.',
    sales: 120,
    'last-log': '24/05/10',
    status: 'active'
  },
  {
    key: 'employee-02',
    name: 'John Doe',
    email: 'john.doe@example.com',
    company: 'Global Solutions Ltd.',
    sales: 85,
    'last-log': '24/03/09',
    status: 'inactive'
  },
  {
    key: 'employee-03',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    company: 'Creative Dynamics Co.',
    sales: 145,
    'last-log': '24/04/11',
    status: 'active'
  },
  {
    key: 'employee-04',
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    company: 'Retail Masters Corp.',
    sales: 67,
    'last-log': '24/12/12',
    status: 'inactive'
  },
  {
    key: 'employee-05',
    name: 'Sophia Martinez',
    email: 'sophia.martinez@example.com',
    company: 'Marketing Hub LLC',
    sales: 200,
    'last-log': '24/11/10',
    status: 'active'
  },
  {
    key: 'employee-06',
    name: 'Daniel Lee',
    email: 'daniel.lee@example.com',
    company: 'Tech Innovations Inc.',
    sales: 90,
    'last-log': '24/03/05',
    status: 'inactive'
  },
  {
    key: 'employee-07',
    name: 'Olivia Wilson',
    email: 'olivia.wilson@example.com',
    company: 'Creative Dynamics Co.',
    sales: 180,
    'last-log': '24/09/08',
    status: 'active'
  },
  {
    key: 'employee-08',
    name: 'James Taylor',
    email: 'james.taylor@example.com',
    company: 'Retail Masters Corp.',
    sales: 220,
    'last-log': '24/02/04',
    status: 'active'
  },
  {
    key: 'employee-09',
    name: 'Chloe Harris',
    email: 'chloe.harris@example.com',
    company: 'Global Solutions Ltd.',
    sales: 130,
    'last-log': '24/05/05',
    status: 'inactive'
  }
])

const templateCode = `
<template>
  <div class="maw-w-screen-xl h-full mx-auto px-10 mt-5">
    <vk-navbar
      color="neutral"
      shape="square"
      flat
      class="justify-between"
    >
      <h1 class="text-xl font-bold">
        User Management
      </h1>

      <vk-button>
        Add User
      </vk-button>
    </vk-navbar>
    <vk-table
      :headers="employeeHeaders"
      :data="employeeData"
      variant="outlined"
      striped
      class="mt-5"
    >
      <template #cell-status="{ item }">
        <vk-tag
          :text="\`\${item.status}\`"
          :color="item.status === 'active' ? 'success' : 'error'"
          variant="ghost"
        />
      </template>

      <template #cell-actions="{ item }">
        <div class="flex gap-2">
          <vk-button
            color="info"
            variant="link"
            condensed
            class="size-6"
          >
            <vk-icon name="edit" />
          </vk-button>

          <vk-button
            v-if="item.status === 'inactive'"
            color="success"
            variant="link"
            condensed
            class="size-6"
          >
            <vk-icon name="check" />
          </vk-button>

          <vk-button
            v-if="item.status === 'active'"
            color="warning"
            variant="link"
            condensed
            class="size-6"
          >
            <vk-icon name="x" />
          </vk-button>

          <vk-button
            color="error"
            variant="link"
            condensed
            class="size-6"
          >
            <vk-icon name="trash" />
          </vk-button>
        </div>
      </template>
    </vk-table>
  </div>
</template>
`

const scriptCode = `
<script setup lang="ts">
import type { TableHeader, TableItem } from '#valkoui'

const employeeHeaders: TableHeader[] = [
  { key: 'name', field: 'name', label: 'Name' },
  { key: 'email', field: 'email', label: 'Email' },
  { key: 'company', field: 'company', label: 'Company' },
  { key: 'sales', field: 'sales', label: 'Sales' },
  { key: 'last-log', field: 'last-log', label: 'Last Login' },
  { key: 'status', field: 'status', label: 'Status' },
  { key: 'actions', field: 'actions', label: 'Actions' }
]

const employeeData = reactive<TableItem[]>([
  {
    key: 'employee-01',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    company: 'Tech Innovations Inc.',
    sales: 120,
    'last-log': '24/05/10',
    status: 'active'
  },
  {
    key: 'employee-02',
    name: 'John Doe',
    email: 'john.doe@example.com',
    company: 'Global Solutions Ltd.',
    sales: 85,
    'last-log': '24/03/09',
    status: 'inactive'
  },
  {
    key: 'employee-03',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    company: 'Creative Dynamics Co.',
    sales: 145,
    'last-log': '24/04/11',
    status: 'active'
  },
  {
    key: 'employee-04',
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    company: 'Retail Masters Corp.',
    sales: 67,
    'last-log': '24/12/12',
    status: 'inactive'
  },
  {
    key: 'employee-05',
    name: 'Sophia Martinez',
    email: 'sophia.martinez@example.com',
    company: 'Marketing Hub LLC',
    sales: 200,
    'last-log': '24/11/10',
    status: 'active'
  },
  {
    key: 'employee-06',
    name: 'Daniel Lee',
    email: 'daniel.lee@example.com',
    company: 'Tech Innovations Inc.',
    sales: 90,
    'last-log': '24/03/05',
    status: 'inactive'
  },
  {
    key: 'employee-07',
    name: 'Olivia Wilson',
    email: 'olivia.wilson@example.com',
    company: 'Creative Dynamics Co.',
    sales: 180,
    'last-log': '24/09/08',
    status: 'active'
  },
  {
    key: 'employee-08',
    name: 'James Taylor',
    email: 'james.taylor@example.com',
    company: 'Retail Masters Corp.',
    sales: 220,
    'last-log': '24/02/04',
    status: 'active'
  },
  {
    key: 'employee-09',
    name: 'Chloe Harris',
    email: 'chloe.harris@example.com',
    company: 'Global Solutions Ltd.',
    sales: 130,
    'last-log': '24/05/05',
    status: 'inactive'
  }
])
<\/script>
`
</script>

<template>
  <page-template>
    <template #example>
      <div class="maw-w-screen-xl h-full mx-auto px-10 mt-5">
        <vk-navbar
          color="neutral"
          shape="square"
          flat
          class="justify-between"
        >
          <h1 class="text-xl font-bold">
            User Management
          </h1>

          <vk-button>
            Add User
          </vk-button>
        </vk-navbar>
        <vk-table
          :headers="employeeHeaders"
          :data="employeeData"
          variant="outlined"
          striped
          class="mt-5"
        >
          <template #cell-status="{ item }">
            <vk-tag
              :text="`${item.status}`"
              :color="item.status === 'active' ? 'success' : 'error'"
              variant="ghost"
            />
          </template>

          <template #cell-actions="{ item }">
            <div class="flex gap-2">
              <vk-button
                color="info"
                variant="link"
                condensed
                class="size-6"
              >
                <vk-icon name="edit" />
              </vk-button>

              <vk-button
                v-if="item.status === 'inactive'"
                color="success"
                variant="link"
                condensed
                class="size-6"
              >
                <vk-icon name="check" />
              </vk-button>

              <vk-button
                v-if="item.status === 'active'"
                color="warning"
                variant="link"
                condensed
                class="size-6"
              >
                <vk-icon name="x" />
              </vk-button>

              <vk-button
                color="error"
                variant="link"
                condensed
                class="size-6"
              >
                <vk-icon name="trash" />
              </vk-button>
            </div>
          </template>
        </vk-table>
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
