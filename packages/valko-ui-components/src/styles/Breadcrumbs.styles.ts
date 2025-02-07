import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-breadcrumbs',
      'w-fit',
      'flex',
      'flex-wrap',
      'shadow-light-4',
      'transition-colors',
      'duration-200',
      'dark:shadow-dark-5'
    ],
    a: [
      'vk-breadcrumbs__a',
      'cursor-pointer',
      'flex',
      'justify-around',
      'items-center',
      'text-gray-500',
      'data-[active=true]:cursor-default',
      'data-[disabled=true]:text-gray-700',
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
          'hover:text-primary-600',
          'data-[active=true]:text-primary-500',
          'data-[active=true]:hover:text-primary-600'
        ]
      },
      neutral: {
        a: [
          'hover:text-dark-5',
          'data-[active=true]:text-dark-3',
          'data-[active=true]:hover:text-dark-5',
          'dark:hover:text-light-1',
          'dark:data-[active=true]:text-light-3',
          'dark:data-[active=true]:hover:text-light-1'
        ]
      },
      success: {
        a: [
          'hover:text-success-600',
          'data-[active=true]:text-success-500',
          'data-[active=true]:hover:text-success-600'
        ]
      },
      info: {
        a: [
          'hover:text-info-600',
          'data-[active=true]:text-info-500',
          'data-[active=true]:hover:text-info-600'
        ]
      },
      warning: {
        a: [
          'hover:text-warning-600',
          'data-[active=true]:text-warning-500',
          'data-[active=true]:hover:text-warning-600'
        ]
      },
      error: {
        a: [
          'hover:text-error-600',
          'data-[active=true]:text-error-500',
          'data-[active=true]:hover:text-error-600'
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
    },
    condensed: {
      true: {
        container: [
          'p-0'
        ]
      },
      false: {
        container: [
          'py-2',
          'px-4'
        ]
      }
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
