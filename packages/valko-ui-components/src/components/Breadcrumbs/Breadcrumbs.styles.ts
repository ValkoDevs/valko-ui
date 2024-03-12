import { computed } from 'vue'
import { tv } from 'tailwind-variants'
import { BreadcrumbsProps } from '#valkoui/types'

const styles = tv({
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
          'bg-transparent'
        ]
      }
    },
    color: {
      primary: {
        a: [
          'text-primary-500'
        ]
      },
      secondary: {
        a: [
          'text-secondary-500'
        ]
      },
      success: {
        a: [
          'text-success-500'
        ]
      },
      info: {
        a: [
          'text-info-500'
        ]
      },
      warning: {
        a: [
          'text-warning-500'
        ]
      },
      error: {
        a: [
          'text-error-500'
        ]
      },
      light: {
        a: [
          'text-light-1'
        ]
      },
      dark: {
        a: [
          'text-dark-5'
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
    // flat & variant
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
})

export const useStyle = (props: BreadcrumbsProps) => computed(() => {
  const slots = styles(props)
  type Slot = keyof typeof slots

  const keys = Object.keys(slots) as Slot[]

  return keys.reduce((acc, key) => ({
    ...acc,
    [key]: slots[key]()
  }), {}) as Record<Slot, string>
})
