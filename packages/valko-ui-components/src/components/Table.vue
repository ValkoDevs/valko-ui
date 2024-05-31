<script setup lang="ts">
import { computed } from 'vue'
import type { TableProps, TableItem } from '#valkoui/types/Table'
import type { SlotStyles } from '#valkoui/types/common'
import useStyle from '#valkoui/composables/useStyle.ts'
import styles from '#valkoui/styles/Table.styles.ts'
import useDarkMode from '#valkoui/composables/useDarkMode.ts'
import { v4 as uuid } from 'uuid'

defineOptions({ name: 'VkTable' })

const props = withDefaults(defineProps<TableProps>(), {
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  striped: false,
  data: () => []
})

const classes = useStyle<TableProps, SlotStyles>(props, styles)

const isDarkMode = useDarkMode()

const stripColor = computed(() => {
  if (isDarkMode.value) {
    return 'odd:bg-dark-3 even:bg-dark-2'
  }
  return 'odd:bg-light-3 even:bg-light-4'
})

const items = computed<TableItem[]>(() => props.data.map((item) => ({
  ...item,
  key: item.key || uuid()
})))

const headers = computed(() => props.headers)
</script>

<template>
  <table :class="classes.table">
    <thead :class="classes.thead">
      <tr>
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
        :class="[classes.tr, striped ? stripColor : '']"
        :data-key="item.key"
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
    </tbody>
    <tfoot v-if="$slots['table-footer']">
      <slot name="table-footer" />
    </tfoot>
  </table>
</template>
