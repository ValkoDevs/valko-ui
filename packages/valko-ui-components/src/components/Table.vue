<script setup lang="ts">
import { computed } from 'vue'
import type { TableProps, TableItem } from '#valkoui/types/Table'
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

const { container, table, thead, th, tr, td, noDataMessage, body, tableFooter } = styles(props)

const items = computed<TableItem[]>(() => props.data.map((item, index) => ({
  ...item,
  key: item.key || index
})))

const headers = computed(() => props.headers)
</script>

<template>
  <div :class="container({ class: styleSlots?.container })">
    <table
      :class="table({ class: styleSlots?.table })"
      role="table"
    >
      <thead
        :class="thead({ class: styleSlots?.thead })"
        role="rowgroup"
      >
        <tr
          :class="tr({ class: styleSlots?.tr })"
          role="row"
        >
          <th
            v-for="header in headers"
            :key="header.key"
            :class="th({ class: styleSlots?.th })"
            role="columnheader"
            scope="col"
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
      <tbody
        :class="body({ class: styleSlots?.body })"
        role="rowgroup"
      >
        <tr
          v-for="(item, index) in items"
          :key="item.key"
          role="row"
          :class="tr({ class: styleSlots?.tr })"
          :data-key="item.key"
          :data-row-events="rowEvents"
          :tabindex="rowEvents ? 0 : undefined"
          :aria-selected="!!selection && rowEvents && (
            Array.isArray(selection)
              ? selection.some(row => row?.key === item.key)
              : selection?.key === item.key
          )"
          :data-selected="!!selection && rowEvents && (
            Array.isArray(selection)
              ? selection.some(row => row?.key === item.key)
              : selection?.key === item.key
          )"
          @click="rowEvents && emit('onRowClick', item)"
        >
          <td
            v-for="{ field } in headers"
            :key="`cell-${field}`"
            role="cell"
            :class="td({ class: styleSlots?.td })"
          >
            <slot
              :name="`cell-${field}`"
              :item="item"
              :row-index="index"
              :key="item.key"
            >
              {{ item[field] }}
            </slot>
          </td>
        </tr>
        <tr
          v-if="items.length === 0"
          :class="tr({ class: styleSlots?.tr })"
        >
          <td
            :colspan="headers.length"
            :class="noDataMessage({ class: styleSlots?.noDataMessage })"
          >
            <slot name="no-data-message">
              No items found.
            </slot>
          </td>
        </tr>
      </tbody>
      <tfoot
        v-if="$slots['table-footer']"
        :class="tableFooter({ class: styleSlots?.tableFooter })"
      >
        <slot name="table-footer" />
      </tfoot>
    </table>
  </div>
</template>
