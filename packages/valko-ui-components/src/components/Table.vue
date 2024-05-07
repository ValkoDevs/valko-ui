<script lang="ts" setup>
import { ref } from 'vue'
import type { TableProps } from '#valkoui/types/Table'
import type { SlotStyles } from '#valkoui/types/common'
import useStyle from '#valkoui/composables/useStyle.ts'
import styles from '#valkoui/styles/Tabs.styles.ts'
import VkCheckbox from './Checkbox.vue'
import VkRadio from './Radio.vue'

defineOptions({ name: 'VkTable' })

const props = withDefaults(defineProps<TableProps>(), {
  color: 'neutral',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  sortDir: 'asc',
  selectable: 'single',
  selectionType: 'row',
  layout: 'auto',
  sortBy: null,
  striped: false,
  loading: false,
  flat: false
})

const classes = useStyle<TableProps, SlotStyles>(props, styles)

const checkboxRef = ref(false)
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
            label="Select All"
            v-model="checkboxRef"
          />
          <span v-if="selectable === 'single'">Single</span>
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
    <tbody :class="classes.body">
      <tr
        v-for="item in data"
        :key="item.key"
        :class="classes.tr"
      >
        <td v-if="selectable !== 'none' && selectionType === 'check'">
          <vk-checkbox
            v-if="selectable === 'multiple'"
            :name="item.key"
            :indeterminate="checkboxRef"
            :variant="variant"
            :color="color === 'neutral' ? 'dark' : color"
          />
          <vk-radio
            v-if="selectable === 'single'"
            :name="item.key"
            :variant="variant"
            :color="color === 'neutral' ? 'dark' : color"
            :value="item.key"
            :label="item.key"
            v-model="item.key"
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
