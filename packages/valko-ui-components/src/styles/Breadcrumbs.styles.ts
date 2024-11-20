import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-breadcrumbs',
      'py-2',
      'px-4',
      'shadow-light-4',
      'flex',
      'dark:shadow-dark-5'
    ],
    a: [
      'vk-breadcrumbs__a',
      'cursor-pointer',
      'font-semibold',
      'flex',
      'justify-around',
      'items-center',
      'data-[disabled=true]:text-gray-400',
      'data-[disabled=true]:cursor-not-allowed'
    ],
    separator: [
      'mx-1'
    ],
    iconLeft: [
      'mr-1'
    ],
    iconRight: [
      'ml-1'
    ]
  },
  variants: {
    variant: {
      filled: {
        container: [
          'bg-light-3',
          'dark:bg-dark-3'
        ]
      },
      outlined: {
        container: [
          'py-[calc(0.5rem_-_2px)]',
          'px-[calc(1rem_-_2px)]',
          'border-2',
          'border-light-5',
          'dark:border-dark-1'
        ]
      },
      ghost: {
        container: [
          'bg-light-3/[.50]',
          'dark:bg-dark-3/[.50]'
        ]
      },
      link: {
        container: [
          'bg-transparent'
        ]
      }
    },
    color: {
      primary: {
        a: [
          'text-primary-500',
          'hover:text-primary-600'
        ]
      },
      neutral: {
        a: [
          'text-dark-1',
          'hover:text-dark-3',
          'dark:text-light-3',
          'dark:hover:text-light-5'
        ]
      },
      success: {
        a: [
          'text-success-500',
          'hover:text-success-600'
        ]
      },
      info: {
        a: [
          'text-info-500',
          'hover:text-info-600'
        ]
      },
      warning: {
        a: [
          'text-warning-500',
          'hover:text-warning-600'
        ]
      },
      error: {
        a: [
          'text-error-500',
          'hover:text-error-600'
        ]
      }
    },
    size: {
      xs: {
        container: [
          'text-xs'
        ]
      },
      sm: {
        container: [
          'text-sm'
        ]
      },
      md: {
        container: [
          'text-base'
        ]
      },
      lg: {
        container: [
          'text-lg'
        ]
      }
    },
    shape: {
      rounded: {
        container: [
          'rounded-full'
        ]
      },
      soft: {
        container: [
          'rounded-lg'
        ]
      },
      square: {
        container: [
          'rounded-none'
        ]
      }
    },
    flat: {
      true: {}
    }
  },
  compoundVariants: [
    // flat & variants
    {
      variant: ['filled', 'outlined'],
      flat: false,
      class: {
        container: [
          'shadow-sm'
        ]
      }
    },
    {
      variant: ['filled', 'outlined'],
      flat: true,
      class: {
        container: [
          'shadow-none'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
