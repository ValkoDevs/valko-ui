import { computed } from 'vue'
import { tv } from 'tailwind-variants'
import { TagProps } from '#valkoui/types'

const styles = tv({
  slots: {
    container: [
      'vk-tag',
      'flex',
      'justify-between',
      'items-center'
    ],
    icons: [
      'mx-1'
    ],
    content: [
      'mx-1',
      'font-semibold',
      'tracking-wider'
    ],
    closable: [
      'vk-tag__closable',
      'ml-1',
      'flex',
      'items-center'
    ]
  },
  variants: {
    variant: {
      filled: {
        container: [
          'text-white'
        ]
      },
      ghost: {
        container: [
          'shadow-none'
        ]
      },
      outlined: {
        container: [
          'border-2'
        ]
      }
    },
    shape: {
      rounded: {
        container: [
          'rounded-full'
        ]
      },
      square: {
        container: [
          'rounded-none'
        ]
      },
      soft: {
        container: [
          'rounded-lg'
        ]
      }
    },
    size: {
      xs: {
        container: [
          'text-[0.6321875rem]',
          'leading-[0.6321875rem]',
          'p-[0.180625rem]'
        ]
      },
      sm: {
        container: [
          'text-[0.74375rem]',
          'leading-[0.74375rem]',
          'p-[0.2125rem]'
        ]
      },
      md: {
        container: [
          'text-sm',
          'leading-[0.875rem]',
          'p-1'
        ]
      },
      lg: {
        container: [
          'text-[1.00625rem]',
          'leading-[1.00625rem]',
          'p-[0.2875rem]'
        ]
      }
    },
    color: {
      primary: {},
      secondary: {},
      success: {},
      info: {},
      warning: {},
      error: {},
      light: {},
      dark: {}
    },
    disabled: {
      true: {}
    },
    isPressable: {
      true: {
        container: [
          'cursor-pointer'
        ]
      }
    }
  },
  compoundVariants: [
    //filled & color
    {
      variant: 'filled',
      color: 'primary',
      disabled: false,
      class: {
        container: [
          'bg-primary-600',
          'focus:ring-primary-700',
          'hover:bg-primary-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      disabled: false,
      class: {
        container: [
          'bg-secondary-600',
          'focus:ring-secondary-700',
          'hover:bg-secondary-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'success',
      disabled: false,
      class: {
        container: [
          'bg-success-600',
          'focus:ring-success-700',
          'hover:bg-success-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'info',
      disabled: false,
      class: {
        container: [
          'bg-info-600',
          'focus:ring-info-700',
          'hover:bg-info-500',
          'active:bg-info-700'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      disabled: false,
      class: {
        container: [
          'bg-warning-600',
          'focus:ring-warning-700',
          'hover:bg-warning-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'error',
      disabled: false,
      class: {
        container: [
          'bg-error-600',
          'focus:ring-error-700',
          'hover:bg-error-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'light',
      disabled: false,
      class: {
        container: [
          'bg-light-2',
          'focus:ring-light-1',
          'hover:bg-light-3',
          'text-black'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'dark',
      disabled: false,
      class: {
        container: [
          'bg-dark-4',
          'focus:ring-dark-5',
          'hover:bg-dark-3'
        ]
      }
    },
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      disabled: false,
      class: {
        container: [
          'text-primary-600',
          'bg-primary-500/[.15]',
          'focus:ring-primary-500/[.30]',
          'hover:bg-primary-500/[.25]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      disabled: false,
      class: {
        container: [
          'text-secondary-600',
          'bg-secondary-500/[.15]',
          'focus:ring-secondary-500/[.30]',
          'hover:bg-secondary-500/[.25]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      disabled: false,
      class: {
        container: [
          'text-success-600',
          'bg-success-500/[.15]',
          'focus:ring-success-500/[.30]',
          'hover:bg-success-500/[.25]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'info',
      disabled: false,
      class: {
        container: [
          'text-info-600',
          'bg-info-500/[.15]',
          'focus:ring-info-500/[.30]',
          'hover:bg-info-500/[.25]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      disabled: false,
      class: {
        container: [
          'text-warning-600',
          'bg-warning-500/[.15]',
          'focus:ring-warning-500/[.30]',
          'hover:bg-warning-500/[.25]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'error',
      disabled: false,
      class: {
        container: [
          'text-error-600',
          'bg-error-500/[.15]',
          'focus:ring-error-500/[.30]',
          'hover:bg-error-500/[.25]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'light',
      disabled: false,
      class: {
        container: [
          'text-light-1',
          'bg-light-1/[.15]',
          'focus:ring-light-1/[.30]',
          'hover:bg-light-1/[.25]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'dark',
      disabled: false,
      class: {
        container: [
          'text-dark-5',
          'bg-dark-5/[.15]',
          'focus:ring-dark-5/[.30]',
          'hover:bg-dark-5/[.25]'
        ]
      }
    },
    // outlined & color
    {
      variant: 'outlined',
      color: 'primary',
      disabled: false,
      class: {
        container: [
          'text-primary-600',
          'focus:ring-primary-400/20',
          'hover:bg-primary-300/20',
          'border-primary-600'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'secondary',
      disabled: false,
      class: {
        container: [
          'text-secondary-600',
          'focus:ring-secondary-400/20',
          'hover:bg-secondary-300/20',
          'border-secondary-600'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'success',
      disabled: false,
      class: {
        container: [
          'text-success-600',
          'focus:ring-success-400/20',
          'hover:bg-success-300/20',
          'border-success-600'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'info',
      disabled: false,
      class: {
        container: [
          'text-info-600',
          'focus:ring-info-400/20',
          'hover:bg-info-300/20',
          'border-info-600'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      disabled: false,
      class: {
        container: [
          'text-warning-600',
          'focus:ring-warning-400/20',
          'hover:bg-warning-300/20',
          'border-warning-600'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'error',
      disabled: false,
      class: {
        container: [
          'text-error-600',
          'focus:ring-error-400/20',
          'hover:bg-error-300/20',
          'border-error-600'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'light',
      disabled: false,
      class: {
        container: [
          'text-light-1',
          'focus:ring-light-2/20',
          'hover:bg-light-1/20',
          'border-light-1'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'dark',
      disabled: false,
      class: {
        container: [
          'text-dark-5',
          'focus:ring-dark-4/20',
          'hover:bg-dark-5/20',
          'border-dark-5'
        ]
      }
    },
    // disabled & variant
    {
      variant: 'filled',
      disabled: true,
      class: {
        container: [
          'bg-gray-600',
          'opacity-50',
          'cursor-not-allowed'
        ]
      }
    },
    {
      variant: 'ghost',
      disabled: true,
      class: {
        container: [
          'text-gray-600',
          'hover:bg-transparent',
          'active:bg-transparent',
          'opacity-50',
          'cursor-not-allowed'
        ]
      }
    },
    {
      variant: 'outlined',
      disabled: true,
      class: {
        container: [
          'text-gray-600',
          'hover:bg-transparent',
          'active:bg-transparent',
          'opacity-50',
          'border-gray-600',
          'cursor-not-allowed'
        ]
      }
    },
    // disabled & closable
    {
      disabled: true,
      class: {
        closable: [
          'cursor-not-allowed'
        ]
      }
    },
    // outlined & size
    {
      variant: 'outlined',
      size: 'xs',
      class: {
        container: [
          'p-[calc(0.180625rem_-_2px)]'
        ]
      }
    },
    {
      variant: 'outlined',
      size: 'sm',
      class: {
        container: [
          'p-[calc(0.2125rem_-_2px)]'
        ]
      }
    },
    {
      variant: 'outlined',
      size: 'md',
      class: {
        container: [
          'p-[calc(0.25rem_-_2px)]'
        ]
      }
    },
    {
      variant: 'outlined',
      size: 'lg',
      class: {
        container: [
          'p-[calc(0.2875rem_-_2px)]'
        ]
      }
    }
  ]
})

export const useStyle = (props: TagProps) => computed(() => {
  const slots = styles(props)
  type Slot = keyof typeof slots

  const keys = Object.keys(slots) as Slot[]

  return keys.reduce((acc, key) => ({
    ...acc,
    [key]: slots[key]()
  }), {}) as Record<Slot, string>
})
