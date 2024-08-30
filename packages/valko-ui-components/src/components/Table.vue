<script setup lang="ts">
import { computed } from 'vue'
import type { TableProps, TableItem } from '#valkoui/types/Table'
import type { SlotStyles } from '#valkoui/types/common'
import useStyle from '#valkoui/composables/useStyle.ts'
import styles from '#valkoui/styles/Table.styles.ts'

defineOptions({ name: 'VkTable' })

const props = withDefaults(defineProps<TableProps>(), {
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  striped: false,
  selection: undefined,
  rowEvents: false,
  data: () => []
})

const emit = defineEmits(['onRowClick'])

const classes = useStyle<TableProps, SlotStyles>(props, styles)

const items = computed<TableItem[]>(() => props.data.map((item, index) => ({
  ...item,
  key: item.key || index
})))

const headers = computed(() => props.headers)
</script>

<template>
  <table :class="classes.table">
    <thead :class="classes.thead">
      <tr :class="classes.htr">
        <th
          v-for="header in headers"
          :key="header.key"
          :class="classes.th"
        >
          <slot
            :name="`header-cell-${header.key}`"
            :key="header.key"
            :header="header"
          >
            {{ header.label }}
          </slot>
        </th>
      </tr>
    </thead>
    <tbody :class="classes.body">
      <tr
        v-for="(item, index) in items"
        :key="item.key"
        :class="classes.tr"
        :data-key="item.key"
        :data-row-events="rowEvents"
        :data-selected="!!selection && rowEvents && (
          Array.isArray(selection)
            ? selection.some(row => row?.key === item.key)
            : selection?.key === item.key
        )"
        @click="rowEvents ? emit('onRowClick', item) : undefined"
      >
        <td
          v-for="{ field } in headers"
          :key="`cell-${field}`"
          :class="[classes.td, index === items.length - 1 ? classes.shape : '']"
        >
          <slot
            :name="`cell-${field}-${item.key}`"
            :item="item"
            :key="item.key"
          >
            {{ item[field] }}
          </slot>
        </td>
      </tr>
      <tr
        v-if="items.length === 0"
        :class="classes.tr"
      >
        <td
          :colspan="headers.length"
          :class="classes.noDataMessage"
        >
          <slot name="no-data-message">
            No items found.
          </slot>
        </td>
      </tr>
    </tbody>
    <tfoot
      v-if="$slots['table-footer']"
      :class="classes.tableFooter"
    >
      <slot name="table-footer" />
    </tfoot>
  </table>
</template>
