import { tv } from 'tailwind-variants'

const dataTable = tv({
  slots: {
    table: [
      'vk-data-table',
      'w-full',
      'flex',
      'flex-col'
    ],
    headerContainer: [
      'flex',
      'gap-1',
      'items-center'
    ],
    headerLabel: [
      'mr-2',
      'self-center'
    ],
    headerUtilities: [
      'vk-data-table__utilities',
      'cursor-pointer',
      'text-on-surface'
    ],
    footer: [
      'flex',
      'justify-between',
      'items-center',
      'mt-2'
    ],
    pagination: [
      'mr-auto'
    ],
    select: [
      'vk-data-table__select',
      'ml-auto'
    ],
    dragIcon: [
      'p-4',
      'cursor-move'
    ]
  },
  variants: {
    color: {
      primary: {
        headerUtilities: [
          'data-[active=true]:text-primary',
          'hover:text-primary'
        ]
      },
      secondary: {
        headerUtilities: [
          'data-[active=true]:text-secondary',
          'hover:text-secondary'
        ]
      },
      positive: {
        headerUtilities: [
          'data-[active=true]:text-positive',
          'hover:text-positive'
        ]
      },
      accent: {
        headerUtilities: [
          'data-[active=true]:text-accent',
          'hover:text-accent'
        ]
      },
      warning: {
        headerUtilities: [
          'data-[active=true]:text-warning',
          'hover:text-warning'
        ]
      },
      negative: {
        headerUtilities: [
          'data-[active=true]:text-negative',
          'hover:text-negative'
        ]
      }
    }
  }
})

export default dataTable
export type DataTableSlots = typeof dataTable.slots
