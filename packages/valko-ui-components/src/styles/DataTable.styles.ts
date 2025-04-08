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
      neutral: {
        headerUtilities: [
          'data-[active=true]:text-dark-950',
          'hover:text-dark-950',
          'dark:data-[active=true]:text-light-50',
          'dark:hover:text-light-50'
        ]
      },
      success: {
        headerUtilities: [
          'data-[active=true]:text-success-500',
          'hover:text-success-500',
          'dark:data-[active=true]:text-success-500',
          'dark:hover:text-success-500'
        ]
      },
      info: {
        headerUtilities: [
          'data-[active=true]:text-info-500',
          'hover:text-info-500',
          'dark:data-[active=true]:text-info-500',
          'dark:hover:text-info-500'
        ]
      },
      warning: {
        headerUtilities: [
          'data-[active=true]:text-warning-500',
          'hover:text-warning-500',
          'dark:data-[active=true]:text-warning-500',
          'dark:hover:text-warning-500'
        ]
      },
      error: {
        headerUtilities: [
          'data-[active=true]:text-error-500',
          'hover:text-error-500',
          'dark:data-[active=true]:text-error-500',
          'dark:hover:text-error-500'
        ]
      }
    }
  }
}) as unknown as ReturnType<TV>
