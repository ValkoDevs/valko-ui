import { tv, type TV } from 'tailwind-variants'

export default tv({
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
      'text-dark-600',
      'dark:text-light-400'
    ],
    footer: [
      'flex',
      'justify-between',
      'items-center',
      'mt-2'
    ],
    footerNav: [
      'mr-auto'
    ],
    footerSelect: [
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
          'data-[active=true]:text-primary-500',
          'hover:text-primary-500',
          'dark:data-[active=true]:text-primary-500',
          'dark:hover:text-primary-500'
        ]
      },
      secondary: {
        headerUtilities: [
          'data-[active=true]:text-dark-950',
          'hover:text-dark-950',
          'dark:data-[active=true]:text-light-50',
          'dark:hover:text-light-50'
        ]
      },
      positive: {
        headerUtilities: [
          'data-[active=true]:text-positive',
          'hover:text-positive',
          'dark:data-[active=true]:text-positive',
          'dark:hover:text-positive'
        ]
      },
      accent: {
        headerUtilities: [
          'data-[active=true]:text-accent',
          'hover:text-accent',
          'dark:data-[active=true]:text-accent',
          'dark:hover:text-accent'
        ]
      },
      warning: {
        headerUtilities: [
          'data-[active=true]:text-warning',
          'hover:text-warning',
          'dark:data-[active=true]:text-warning',
          'dark:hover:text-warning'
        ]
      },
      negative: {
        headerUtilities: [
          'data-[active=true]:text-negative',
          'hover:text-negative',
          'dark:data-[active=true]:text-negative',
          'dark:hover:text-negative'
        ]
      }
    }
  }
}) as unknown as ReturnType<TV>
