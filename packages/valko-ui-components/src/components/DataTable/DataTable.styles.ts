import { computed } from 'vue'
import { tv } from 'tailwind-variants'
import { DataTableProps } from '#valkoui/types'

const styles = tv({
  slots: {
    table: [
      'vk-data-table',
      'w-full',
      'dark:border-dark-3',
      'rounded'
    ],
    thead: [
      'border-b',
      'border-light-3',
      'dark:border-dark-3'
    ],
    th: [
      'px-4',
      'py-2',
      'text-dark-1',
      'dark:text-light-1'
    ],
    tr: [
      'border-b',
      'border-light-3',
      'dark:border-dark-3'
    ],
    td: [
      'px-4',
      'py-2',
      'text-left',
      'text-dark-1',
      'dark:text-light-1'
    ]
  }
})

export const useStyle = (props: DataTableProps) => computed(() => {
  const slots = styles(props)
  type Slot = keyof typeof slots

  const keys = Object.keys(slots) as Slot[]

  return keys.reduce((acc, key) => ({
    ...acc,
    [key]: slots[key]()
  }), {}) as Record<Slot, string>
})
