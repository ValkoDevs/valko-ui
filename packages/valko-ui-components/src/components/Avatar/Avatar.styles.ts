import { computed } from 'vue'
import { tv } from 'tailwind-variants'
import { AvatarProps } from '#valkoui/types'

const styles = tv({
  slots: {
    container: [
      'vk-avatar',
      'inline-flex',
      'justify-center',
      'items-center',
      'font-bold',
      'select-none',
      'shadow-lg',
      'shadow-light-4',
      'overflow-hidden',
      'dark:shadow-dark-5'
    ],
    img: [
      'w-full',
      'h-full',
      'object-cover'
    ],
    span: [
      'w-full',
      'h-full',
      'shrink-0'
    ]
  },
  variants: {
    variant: {
      filled: {
        container: [
          'text-white'
        ]
      },
      outlined: {
        container: [
          'border-2'
        ]
      },
      ghost: {
        container: [
          'shadow-none'
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
    size: {
      xs: {
        container: [
          'text-xl',
          'h-10',
          'w-10'
        ],
        img: [
          'h-10',
          'w-10'
        ]
      },
      sm: {
        container: [
          'text-3xl',
          'h-14',
          'w-14'
        ],
        img: [
          'h-14',
          'w-14'
        ]
      },
      md: {
        container: [
          'text-5xl',
          'h-20',
          'w-20'
        ],
        img: [
          'h-20',
          'w-20'
        ]
      },
      lg: {
        container: [
          'text-6xl',
          'h-24',
          'w-24'
        ],
        img: [
          'h-24',
          'w-24'
        ]
      }
    },
    shape: {
      rounded: {
        container: [
          'rounded-full'
        ],
        img: [
          'rounded-full'
        ]
      },
      soft: {
        container: [
          'rounded-lg'
        ],
        img: [
          'rounded-lg'
        ]
      },
      square: {
        container: [
          'rounded-none'
        ],
        img: [
          'rounded-none'
        ]
      }
    },
    flat: {
      true: {
        container: [
          'shadow-none'
        ]
      }
    }
  },
  compoundVariants: [
    // filled & color
    {
      variant: 'filled',
      color: 'primary',
      class: {
        container: [
          'bg-primary-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      class: {
        container: [
          'bg-secondary-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'success',
      class: {
        container: [
          'bg-success-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'info',
      class: {
        container: [
          'bg-info-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      class: {
        container: [
          'bg-warning-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'error',
      class: {
        container: [
          'bg-error-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'light',
      class: {
        container: [
          'bg-light-1',
          'text-black'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'dark',
      class: {
        container: [
          'bg-dark-5'
        ]
      }
    },
    // outlined & color
    {
      variant: 'outlined',
      color: 'primary',
      class: {
        container: [
          'border-primary-500',
          'text-primary-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'secondary',
      class: {
        container: [
          'border-secondary-500',
          'text-secondary-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'success',
      class: {
        container: [
          'border-success-500',
          'text-success-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'info',
      class: {
        container: [
          'border-info-500',
          'text-info-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      class: {
        container: [
          'border-warning-500',
          'text-warning-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'error',
      class: {
        container: [
          'border-error-500',
          'text-error-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'light',
      class: {
        container: [
          'border-light-1',
          'text-light-1'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'dark',
      class: {
        container: [
          'border-dark-5',
          'text-dark-5'
        ]
      }
    },
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      class: {
        container: [
          'bg-primary-500/[.20]',
          'text-primary-500'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: {
        container: [
          'bg-secondary-500/[.20]',
          'text-secondary-500'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      class: {
        container: [
          'bg-success-500/[.20]',
          'text-success-500'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'info',
      class: {
        container: [
          'bg-info-500/[.20]',
          'text-info-500'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        container: [
          'bg-warning-500/[.20]',
          'text-warning-500'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'error',
      class: {
        container: [
          'bg-error-500/[.20]',
          'text-error-500'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'light',
      class: {
        container: [
          'bg-light-1/[.20]',
          'text-light-1'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'dark',
      class: {
        container: [
          'bg-dark-5/[.20]',
          'text-dark-5'
        ]
      }
    }
  ]
})

export const useStyle = (props: AvatarProps) => computed(() => {
  const slots = styles(props)
  type Slot = keyof typeof slots

  const keys = Object.keys(slots) as Slot[]

  return keys.reduce((acc, key) => ({
    ...acc,
    [key]: slots[key]()
  }), {}) as Record<Slot, string>
})
