import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-breadcrumbs',
      'w-fit',
      'flex',
      'flex-wrap',
      'transition-colors',
      'duration-200'
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
          'bg-surface-container'
        ]
      },
      outlined: {
        container: [
          'py-[calc(0.5rem_-_2px)]',
          'px-[calc(1rem_-_2px)]',
          'border-2',
          'border-light-400',
          'dark:border-dark-600'
        ]
      },
      ghost: {
        container: [
          'bg-surface-container/[.5]'
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
          'hover:text-primary'
        ]
      },
      secondary: {
        a: [
          'hover:text-secondary'
        ]
      },
      positive: {
        a: [
          'hover:text-positive'
        ]
      },
      accent: {
        a: [
          'hover:text-accent'
        ]
      },
      warning: {
        a: [
          'hover:text-warning'
        ]
      },
      negative: {
        a: [
          'hover:text-negative'
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
