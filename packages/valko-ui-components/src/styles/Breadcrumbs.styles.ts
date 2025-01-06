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
          'hover:text-primary-600',
          'data-[active=true]:text-primary-600/[.5]'
        ]
      },
      neutral: {
        a: [
          'text-dark-1',
          'hover:text-dark-3',
          'data-[active=true]:text-dark-4',
          'dark:text-light-3',
          'dark:hover:text-light-5',
          'dark:data-[active=true]:text-light-1'
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
