import { tv } from 'tailwind-variants'

const breadcrumbs = tv({
  slots: {
    nav: [
      'vk-breadcrumbs',
      'w-fit',
      'flex',
      'flex-wrap',
      'transition-colors',
      'duration-200'
    ],
    link: [
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
    list: [
      'flex',
      'items-center',
      'gap-2'
    ],
    listItem: [
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
        nav: [
          'bg-surface-container-low'
        ]
      },
      outlined: {
        nav: [
          'py-[calc(0.5rem_-_2px)]',
          'px-[calc(1rem_-_2px)]',
          'border-2',
          'border-outlined'
        ]
      },
      ghost: {
        nav: [
          'bg-surface-container-low/[.5]'
        ]
      },
      link: {
        nav: [
          'bg-transparent'
        ]
      }
    },
    color: {
      primary: {
        link: [
          'hover:text-on-primary-container',
          'data-[active=true]:text-primary'
        ]
      },
      secondary: {
        link: [
          'hover:text-on-secondary-container',
          'data-[active=true]:text-secondary'
        ]
      },
      positive: {
        link: [
          'hover:text-on-positive-container',
          'data-[active=true]:text-positive'
        ]
      },
      accent: {
        link: [
          'hover:text-on-accent-container',
          'data-[active=true]:text-accent'
        ]
      },
      warning: {
        link: [
          'hover:text-on-warning-container',
          'data-[active=true]:text-warning'
        ]
      },
      negative: {
        link: [
          'hover:text-on-negative-container',
          'data-[active=true]:text-negative'
        ]
      },
      surface: {
        link: [
          'hover:text-outlined',
          'data-[active=true]:text-on-surface'
        ]
      }
    },
    size: {
      xs: {
        nav: [
          'text-xs'
        ]
      },
      sm: {
        nav: [
          'text-sm'
        ]
      },
      md: {
        nav: [
          'text-base'
        ]
      },
      lg: {
        nav: [
          'text-lg'
        ]
      }
    },
    shape: {
      rounded: {
        nav: [
          'rounded-full'
        ]
      },
      soft: {
        nav: [
          'rounded-lg'
        ]
      },
      square: {
        nav: [
          'rounded-none'
        ]
      }
    },
    condensed: {
      true: {
        nav: [
          'p-0'
        ]
      },
      false: {
        nav: [
          'py-2',
          'px-4'
        ]
      }
    }
  }
})

export default breadcrumbs
export type BreadcrumbsSlots = typeof breadcrumbs.slots
