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

const s = computed(() => styles(props))

const items = computed<TableItem[]>(() => props.data.map((item, index) => ({
  ...item,
  key: item.key || index
})))

const headers = computed(() => props.headers)

const handleRowKeydown = (event: KeyboardEvent, item: TableItem) => {
  if (!props.rowEvents) return
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    emit('onRowClick', item)
  }
}
</script>

<template>
  <div :class="s.container({ class: styleSlots?.container })">
    <table
      :class="s.table({ class: styleSlots?.table })"
    >
      <thead
        :class="s.thead({ class: styleSlots?.thead })"
      >
        <tr
          :class="s.tr({ class: styleSlots?.tr })"
        >
          <th
            v-for="header in headers"
            :key="header.key"
            :class="s.th({ class: styleSlots?.th })"
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
        :class="s.body({ class: styleSlots?.body })"
      >
        <tr
          v-for="(item, index) in items"
          :key="item.key"
          :class="s.tr({ class: styleSlots?.tr })"
          :data-key="item.key"
          :data-row-events="rowEvents"
          :tabindex="rowEvents ? 0 : undefined"
          :aria-selected="!!selection && rowEvents && (
            Array.isArray(selection)
              ? selection.some((row: TableItem) => row?.key === item.key)
              : selection?.key === item.key
          )"
          :data-selected="!!selection && rowEvents && (
            Array.isArray(selection)
              ? selection.some((row: TableItem) => row?.key === item.key)
              : selection?.key === item.key
          )"
          @click="rowEvents && emit('onRowClick', item)"
          @keydown="handleRowKeydown($event, item)"
        >
          <td
            v-for="{ field } in headers"
            :key="`cell-${field}`"
            :class="s.td({ class: styleSlots?.td })"
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
          :class="s.tr({ class: styleSlots?.tr })"
        >
          <td
            :colspan="headers.length"
            :class="s.noDataMessage({ class: styleSlots?.noDataMessage })"
          >
            <slot name="no-data-message">
              No items found.
            </slot>
          </td>
        </tr>
      </tbody>
      <tfoot
        v-if="$slots['table-footer']"
        :class="s.tableFooter({ class: styleSlots?.tableFooter })"
      >
        <slot name="table-footer" />
      </tfoot>
    </table>
  </div>
</template>
