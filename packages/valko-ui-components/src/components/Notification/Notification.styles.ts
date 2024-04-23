import { computed } from 'vue'
import { tv } from 'tailwind-variants'
import { NotificationProps } from '#valkoui/types'

const styles = tv({
  base: [
    'vk-notification',
    'p-4',
    'shadow-md',
    'flex',
    'justify-between',
    '*:px-1',
    '*:self-start',
    '*:text-xs'
  ],
  variants: {
    variant: {
      filled: [
        'text-white'
      ],
      ghost: [
        'shadow-none'
      ],
      outlined: [
        'p-[calc(1rem_-_2px)]',
        'border-2'
      ]
    },
    color: {
      primary: [],
      secondary: [],
      success: [],
      info: [],
      warning: [],
      error: [],
      light: [],
      dark: []
    },
    size: {
      xs: [
        'w-40',
        'text-xs'
      ],
      sm: [
        'w-44',
        'text-sm'
      ],
      md: [
        'w-48',
        'text-base'
      ],
      lg: [
        'w-52',
        'text-lg'
      ]
    },
    shape: {
      rounded: [
        'rounded-full'
      ],
      soft: [
        'rounded-lg'
      ],
      square: [
        'rounded-none'
      ]
    },
    flat: {
      true: [
        'shadow-none'
      ]
    }
  },
  compoundVariants: [
    // filled & color
    {
      variant: 'filled',
      color: 'primary',
      class: [
        'bg-primary-500'
      ]
    },
    {
      variant: 'filled',
      color: 'secondary',
      class: [
        'bg-secondary-500'
      ]
    },
    {
      variant: 'filled',
      color: 'success',
      class: [
        'bg-success-500'
      ]
    },
    {
      variant: 'filled',
      color: 'info',
      class: [
        'bg-info-500'
      ]
    },
    {
      variant: 'filled',
      color: 'warning',
      class: [
        'bg-warning-500'
      ]
    },
    {
      variant: 'filled',
      color: 'error',
      class: [
        'bg-error-500'
      ]
    },
    {
      variant: 'filled',
      color: 'light',
      class: [
        'bg-light-1',
        'text-black'
      ]
    },
    {
      variant: 'filled',
      color: 'dark',
      class: [
        'bg-dark-5'
      ]
    },
    // outlined & color
    {
      variant: 'outlined',
      color: 'primary',
      class: [
        'border-primary-500',
        'text-primary-500'
      ]
    },
    {
      variant: 'outlined',
      color: 'secondary',
      class: [
        'border-secondary-500',
        'text-secondary-500'
      ]
    },
    {
      variant: 'outlined',
      color: 'success',
      class: [
        'border-success-500',
        'text-success-500'
      ]
    },
    {
      variant: 'outlined',
      color: 'info',
      class: [
        'border-info-500',
        'text-info-500'
      ]
    },
    {
      variant: 'outlined',
      color: 'warning',
      class: [
        'border-warning-500',
        'text-warning-500'
      ]
    },
    {
      variant: 'outlined',
      color: 'error',
      class: [
        'border-error-500',
        'text-error-500'
      ]
    },
    {
      variant: 'outlined',
      color: 'light',
      class: [
        'border-light-1',
        'text-light-1'
      ]
    },
    {
      variant: 'outlined',
      color: 'dark',
      class: [
        'border-dark-5',
        'text-dark-5'
      ]
    },
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      class: [
        'bg-primary-500/[.20]',
        'text-primary-500'
      ]
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: [
        'bg-secondary-500/[.20]',
        'text-secondary-500'
      ]
    },
    {
      variant: 'ghost',
      color: 'success',
      class: [
        'bg-success-500/[.20]',
        'text-success-500'
      ]
    },
    {
      variant: 'ghost',
      color: 'info',
      class: [
        'bg-info-500/[.20]',
        'text-info-500'
      ]
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: [
        'bg-warning-500/[.20]',
        'text-warning-500'
      ]
    },
    {
      variant: 'ghost',
      color: 'error',
      class: [
        'bg-error-500/[.20]',
        'text-error-500'
      ]
    },
    {
      variant: 'ghost',
      color: 'light',
      class: [
        'bg-light-1/[.20]',
        'text-light-500'
      ]
    },
    {
      variant: 'ghost',
      color: 'dark',
      class: [
        'bg-dark-5/[.20]',
        'text-dark-500'
      ]
    }
  ]
})

export const useStyle = (props: Omit<NotificationProps, 'className'>) => computed(() => styles(props))
