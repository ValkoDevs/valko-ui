<script setup lang="ts">
import type { Crumb, Tab, TableItem, TableHeader } from '#valkoui'

const crumbs: Crumb[] = [
  { key: 'dashboard', title: 'Dashboard' },
  { key: 'management', title: 'Management' },
  { key: 'employee0list', title: 'Employee List', active: true }
]

const tabs: Tab[] = [
  { key: 'employee-list', title: 'Employee List' },
  { key: 'product', title: 'Product' },
  { key: 'sales-result', title: 'Sales Result' }
]

const employeeHeaders: TableHeader[] = [
  { key: 'name', field: 'name', label: 'Name', filterable: true, sortable: true },
  { key: 'email', field: 'email', label: 'Email', filterable: true, sortable: true },
  { key: 'sales', field: 'sales', label: 'Sales', filterable: true, sortable: true },
  { key: 'date', field: 'date', label: 'Date', filterable: true, sortable: true },
  { key: 'status', field: 'status', label: 'Status', filterable: true, sortable: true },
  { key: 'company', field: 'company', label: 'Company', filterable: true, sortable: true }
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
    status: 'negative',
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
  },
  {
    key: 'employee-06',
    name: 'Daniel Lee',
    email: 'daniel.lee@example.com',
    sales: 90,
    date: '2024-03-17',
    status: 'inactive',
    company: 'Tech Innovations Inc.'
  },
  {
    key: 'employee-07',
    name: 'Olivia Wilson',
    email: 'olivia.wilson@example.com',
    sales: 180,
    date: '2023-11-05',
    status: 'pending',
    company: 'Creative Dynamics Co.'
  },
  {
    key: 'employee-08',
    name: 'James Taylor',
    email: 'james.taylor@example.com',
    sales: 220,
    date: '2024-07-21',
    status: 'active',
    company: 'Retail Masters Corp.'
  },
  {
    key: 'employee-09',
    name: 'Chloe Harris',
    email: 'chloe.harris@example.com',
    sales: 130,
    date: '2023-12-11',
    status: 'negative',
    company: 'Global Solutions Ltd.'
  },
  {
    key: 'employee-10',
    name: 'Ethan Clark',
    email: 'ethan.clark@example.com',
    sales: 75,
    date: '2024-09-30',
    status: 'active',
    company: 'Marketing Hub LLC'
  }
]

const table = useClientSideDataTable({
  headers: employeeHeaders,
  data: employeeData,
  selectionMode: 'none',
  pageSizeOptions: [2, 5, 10],
  draggable: false
})

const templateSnippet = `<script setup lang="ts">
import type { Crumb, Tab, TableItem, TableHeader } from '#valkoui'

const crumbs: Crumb[] = [
  { key: 'dashboard', title: 'Dashboard' },
  { key: 'management', title: 'Management' },
  { key: 'employee0list', title: 'Employee List', active: true }
]

const tabs: Tab[] = [
  { key: 'employee-list', title: 'Employee List' },
  { key: 'product', title: 'Product' },
  { key: 'sales-result', title: 'Sales Result' }
]

const employeeHeaders: TableHeader[] = [
  { key: 'name', field: 'name', label: 'Name', filterable: true, sortable: true },
  { key: 'email', field: 'email', label: 'Email', filterable: true, sortable: true },
  { key: 'sales', field: 'sales', label: 'Sales', filterable: true, sortable: true },
  { key: 'date', field: 'date', label: 'Date', filterable: true, sortable: true },
  { key: 'status', field: 'status', label: 'Status', filterable: true, sortable: true },
  { key: 'company', field: 'company', label: 'Company', filterable: true, sortable: true }
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
    status: 'negative',
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
  },
  {
    key: 'employee-06',
    name: 'Daniel Lee',
    email: 'daniel.lee@example.com',
    sales: 90,
    date: '2024-03-17',
    status: 'inactive',
    company: 'Tech Innovations Inc.'
  },
  {
    key: 'employee-07',
    name: 'Olivia Wilson',
    email: 'olivia.wilson@example.com',
    sales: 180,
    date: '2023-11-05',
    status: 'pending',
    company: 'Creative Dynamics Co.'
  },
  {
    key: 'employee-08',
    name: 'James Taylor',
    email: 'james.taylor@example.com',
    sales: 220,
    date: '2024-07-21',
    status: 'active',
    company: 'Retail Masters Corp.'
  },
  {
    key: 'employee-09',
    name: 'Chloe Harris',
    email: 'chloe.harris@example.com',
    sales: 130,
    date: '2023-12-11',
    status: 'negative',
    company: 'Global Solutions Ltd.'
  },
  {
    key: 'employee-10',
    name: 'Ethan Clark',
    email: 'ethan.clark@example.com',
    sales: 75,
    date: '2024-09-30',
    status: 'active',
    company: 'Marketing Hub LLC'
  }
]

const table = useClientSideDataTable({
  headers: employeeHeaders,
  data: employeeData,
  selectionMode: 'none',
  pageSizeOptions: [2, 5, 10],
  draggable: false
})
<\u002Fscript>

<template>
  <div class="mx-auto w-full h-full max-w-screen-xl pt-6 gap-4 flex flex-col justify-start">
    <vk-breadcrumbs
      :crumbs
      variant="link"
      condensed
    />
    <h1 class="text-2xl font-semibold">
      Employee
    </h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    <div class="flex items-start justify-between gap-2">
      <vk-tabs
        :tabs
        shape="line"
        variant="ghost"
      >
        <template #employee-list>
          <vk-data-table
            class="mt-5"
            striped
            label="Display"
            v-bind="table"
            :page="1"
            @on-sort="table.onSort"
            @on-filter="table.onFilter"
            @on-page-change="table.onPageChange"
            @on-limit-change="table.onLimitChange"
            @on-select="table.onSelect"
            @on-select-all="table.onSelectAll"
          />
        </template>

        <template #product>
          <p class="mt-5 max-w-screen-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </template>

        <template #sales-result>
          <p class="mt-5 max-w-screen-md ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </template>
      </vk-tabs>

      <vk-button
        variant="outlined"
      >
        Add Tab
      </vk-button>
    </div>
  </div>
</template>
`
</script>

<template>
  <page-template>
    <template #example>
      <div class="mx-auto w-full h-full max-w-screen-xl pt-6 gap-4 flex flex-col justify-start">
        <vk-breadcrumbs
          :crumbs
          variant="link"
          condensed
        />
        <h1 class="text-2xl font-semibold">
          Employee
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <div class="flex items-start justify-between gap-2">
          <vk-tabs
            :tabs
            shape="line"
            variant="ghost"
          >
            <template #employee-list-content>
              <vk-data-table
                class="mt-5"
                striped
                label="Display"
                v-bind="table"
                :page="1"
                @on-sort="table.onSort"
                @on-filter="table.onFilter"
                @on-page-change="table.onPageChange"
                @on-limit-change="table.onLimitChange"
                @on-select="table.onSelect"
                @on-select-all="table.onSelectAll"
              />
            </template>

            <template #product-content>
              <p class="mt-5 max-w-screen-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </template>

            <template #sales-result-content>
              <p class="mt-5 max-w-screen-md ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </template>
          </vk-tabs>

          <vk-button
            variant="outlined"
          >
            Add Tab
          </vk-button>
        </div>
      </div>
    </template>

    <template #code>
      <code-block :code="templateSnippet" />
    </template>
  </page-template>
</template>
