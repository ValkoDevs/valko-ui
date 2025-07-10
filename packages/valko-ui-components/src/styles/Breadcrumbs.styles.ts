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
      'text-on-surface-variant',
      'data-[active=true]:cursor-default',
      'data-[disabled=true]:text-disabled',
      'data-[disabled=true]:opacity-50',
      'data-[disabled=true]:cursor-not-allowed'
    ],
    ol: [
      'flex',
      'items-center',
      'gap-2'
    ],
    li: [
      'inline-flex',
      'items-center',
      'gap-1'
    ],
    separator: [
      'mx-1',
      'text-on-surface'
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
          'bg-surface-container-low'
        ]
      },
      outlined: {
        container: [
          'py-[calc(0.5rem_-_2px)]',
          'px-[calc(1rem_-_2px)]',
          'border-2',
          'border-outlined'
        ]
      },
      ghost: {
        container: [
          'bg-surface-container-low/[.5]'
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
          'hover:text-on-primary-container',
          'data-[active=true]:text-primary'
        ]
      },
      secondary: {
        a: [
          'hover:text-on-secondary-container',
          'data-[active=true]:text-secondary'
        ]
      },
      positive: {
        a: [
          'hover:text-on-positive-container',
          'data-[active=true]:text-positive'
        ]
      },
      accent: {
        a: [
          'hover:text-on-accent-container',
          'data-[active=true]:text-accent'
        ]
      },
      warning: {
        a: [
          'hover:text-on-warning-container',
          'data-[active=true]:text-warning'
        ]
      },
      negative: {
        a: [
          'hover:text-on-negative-container',
          'data-[active=true]:text-negative'
        ]
      },
      surface: {
        a: [
          'hover:text-outlined',
          'data-[active=true]:text-on-surface'
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
  }
}) as unknown as ReturnType<TV>
