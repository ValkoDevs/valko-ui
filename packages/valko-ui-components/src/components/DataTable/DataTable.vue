<script lang="ts" setup>
import { DataTableProps } from '@/components/DataTable/interfaces'
import useStyle from './DataTable.styles'

const props = withDefaults(defineProps<DataTableProps>(), {
  color: 'secondary',
  variant: 'filled',
  size: 'md',
  sortBy: null,
  sortDir: 'asc',
  records: 20,
  page: 1,
  selectable: 'single',
  selectionType: 'row',
  rounded: false,
  striped: false,
  loading: false,
  shadow: false
})

defineOptions({ name: 'VkDataTable' })

const classes = useStyle(props)
</script>

<template>
  <table
    :class="classes.table"
  >
    <thead :class="classes.thead">
      <tr>
        <th
          v-if="selectable !== 'none' && selectionType === 'check'"
          :class="classes.th"
        >
          <vk-checkbox
            v-if="selectable === 'multiple'"
          />
        </th>
        <th
          v-for="header in headers"
          :key="header.key"
          :class="classes.th"
        >
          {{ header.label }}
        </th>
        <slot name="actions-header" />
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in data"
        :key="item.key"
        :class="classes.tr"
      >
        <td v-if="selectable !== 'none' && selectionType === 'check'">
          <vk-checkbox
            v-if="selectable === 'multiple'"
            :name="item.key"
          />
        </td>
        <td
          v-for="{ key } in headers"
          :key="key"
          :class="classes.td"
        >
          {{ item[key] }}
        </td>
        <slot
          name="actions"
          :key="item.key"
        />
      </tr>
    </tbody>
  </table>
</template>
