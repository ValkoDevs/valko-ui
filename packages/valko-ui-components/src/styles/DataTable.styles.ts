import { tv } from 'tailwind-variants'

const dataTable = tv({
  slots: {
    table: [
      'vk-data-table',
      'w-full',
      'flex',
      'flex-col',
      'gap-4'
    ],
    headerContainer: [
      'flex',
      'gap-1',
      'items-center'
    ],
    headerCheckbox: [
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
      'gap-4',
      'items-center',
      'p-4'
    ],
    footerControls: [
      'flex',
      'justify-between',
      'gap-4'
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
    variant: {
      filled: {
        table: [
          'bg-surface-container-low'
        ]
      },
      outlined: [],
      ghost: []
    },
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
    },
    shape: {
      soft: {
        table: [
          'rounded-lg'
        ]
      },
      rounded: {
        table: [
          'rounded-xl'
        ]
      },
      square: {
        table: [
          'rounded-none'
        ]
      }
    }
  }
})

export default dataTable
export type DataTableSlots = typeof dataTable.slots
