import { tv } from 'tailwind-variants'
import { DataTableProps } from './interfaces'
import { computed } from 'vue'

const useStyle = (props: DataTableProps) => {
  const table = tv({
    slots: {
      table: [
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

  return computed(() => {
    const slots = table({
      ...props
    })

    return {
      table: slots.table(),
      thead: slots.thead(),
      tr: slots.tr(),
      th: slots.th(),
      td: slots.td()
    }
  })
}

export default useStyle
