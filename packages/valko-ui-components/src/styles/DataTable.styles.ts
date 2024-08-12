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
      'cursor-pointer',
      'text-dark-1',
      'dark:text-light-5'
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
      'ml-auto'
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
          'data-[active=true]:text-dark-5',
          'hover:text-dark-5',
          'dark:data-[active=true]:text-light-1',
          'dark:hover:text-light-1'
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
