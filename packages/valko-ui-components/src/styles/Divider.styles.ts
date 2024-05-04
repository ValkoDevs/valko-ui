import { tv, type TV } from 'tailwind-variants'

export default tv({
  base: [
    'vk-divider',
    'border-0'
  ],
  variants: {
    color: {
      primary: [],
      secondary: [],
      success: [],
      info: [],
      warning: [],
      error: [],
      light: [],
      dark: [],
      neutral: []
    },
    variant: {
      filled: [
        'vk-filled'
      ],
      outlined: [
        'border'
      ],
      ghost: [
        'vk-ghost'
      ]
    },
    shape: {
      rounded: [
        'rounded-full'
      ],
      square: [
        'rounded-none'
      ],
      soft: [
        'rounded'
      ]
    },
    size: {
      xs: [],
      sm: [],
      md: [],
      lg: []
    },
    direction: {
      horizontal: [
        'w-full',
        'my-2'
      ],
      vertical: [
        'h-full',
        'mx-2',
        'rotate-180'
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
        'bg-light-1'
      ]
    },
    {
      variant: 'filled',
      color: 'dark',
      class: [
        'bg-dark-5'
      ]
    },
    {
      variant: 'filled',
      color: 'neutral',
      class: [
        'bg-light-4',
        'dark:bg-dark-1'
      ]
    },
    // outlined & color
    {
      variant: 'outlined',
      color: 'primary',
      class: [
        'border-primary-500'
      ]
    },
    {
      variant: 'outlined',
      color: 'secondary',
      class: [
        'border-secondary-500'
      ]
    },
    {
      variant: 'outlined',
      color: 'success',
      class: [
        'border-success-500'
      ]
    },
    {
      variant: 'outlined',
      color: 'info',
      class: [
        'border-info-500'
      ]
    },
    {
      variant: 'outlined',
      color: 'warning',
      class: [
        'border-warning-500'
      ]
    },
    {
      variant: 'outlined',
      color: 'error',
      class: [
        'border-error-500'
      ]
    },
    {
      variant: 'outlined',
      color: 'light',
      class: [
        'border-light-1'
      ]
    },
    {
      variant: 'outlined',
      color: 'dark',
      class: [
        'border-dark-5'
      ]
    },
    {
      variant: 'outlined',
      color: 'neutral',
      class: [
        'border-light-4',
        'dark:border-dark-1'
      ]
    },
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      class: [
        'bg-primary-500/[.5]'
      ]
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: [
        'bg-secondary-500/[.5]'
      ]
    },
    {
      variant: 'ghost',
      color: 'success',
      class: [
        'bg-success-500/[.5]'
      ]
    },
    {
      variant: 'ghost',
      color: 'info',
      class: [
        'bg-info-500/[.5]'
      ]
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: [
        'bg-warning-500/[.5]'
      ]
    },
    {
      variant: 'ghost',
      color: 'error',
      class: [
        'bg-error-500/[.5]'
      ]
    },
    {
      variant: 'ghost',
      color: 'light',
      class: [
        'bg-light-1/[.5]'
      ]
    },
    {
      variant: 'ghost',
      color: 'dark',
      class: [
        'bg-dark-5/[.5]'
      ]
    },
    {
      variant: 'ghost',
      color: 'neutral',
      class: [
        'bg-light-4/[.5]',
        'dark:bg-dark-1/[.5]'
      ]
    },
    // vertical & size
    {
      direction: 'vertical',
      size: 'xs',
      class: [
        'w-px'
      ]
    },
    {
      direction: 'vertical',
      size: 'sm',
      class: [
        'w-0.5'
      ]
    },
    {
      direction: 'vertical',
      size: 'md',
      class: [
        'w-[3px]'
      ]
    },
    {
      direction: 'vertical',
      size: 'lg',
      class: [
        'w-1'
      ]
    },
    // horizontal & size
    {
      direction: 'horizontal',
      size: 'xs',
      class: [
        'h-px'
      ]
    },
    {
      direction: 'horizontal',
      size: 'sm',
      class: [
        'h-0.5'
      ]
    },
    {
      direction: 'horizontal',
      size: 'md',
      class: [
        'h-[3px]'
      ]
    },
    {
      direction: 'horizontal',
      size: 'lg',
      class: [
        'h-1'
      ]
    }
  ]
}) as unknown as ReturnType<TV>
