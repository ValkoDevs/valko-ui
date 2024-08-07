import { tv, type TV } from 'tailwind-variants'

export default tv({
  base: [
    'vk-navbar',
    'w-full',
    'px-4',
    'flex',
    'justify-items-center',
    'items-center',
    'shadow-lg',
    'shadow-light-4',
    'dark:shadow-dark-5',
    'shrink-0'
  ],
  variants: {
    variant: {
      filled: [
        'filter-none',
        'text-light-1'
      ],
      outlined: [
        'bg-transparent',
        'backdrop-blur-lg',
        'border-b'
      ],
      ghost: [
        'backdrop-blur-lg'
      ],
      gradient: [
        'bg-gradient-to-br',
        'filter-none',
        'text-light-1'
      ]
    },
    color: {
      primary: [],
      neutral: [
        'text-dark-1',
        'dark:text-light-1'
      ],
      success: [],
      error: [],
      warning: [],
      info: []
    },
    size: {
      xs: [
        'h-10'
      ],
      sm: [
        'h-12'
      ],
      md: [
        'h-14'
      ],
      lg: [
        'h-16'
      ]
    },
    shape: {
      rounded: [
        'rounded-b-2xl'
      ],
      square: [
        'rounded-none'
      ],
      soft: [
        'rounded-b-lg'
      ]
    },
    fixed: {
      true: [
        'sticky',
        'top-0',
        'left-0',
        'right-0',
        'z-50'
      ]
    },
    floating: {
      true: [
        'm-2',
        'w-[calc(100%_-_1rem)]'
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
      color: 'primary',
      variant: 'filled',
      class: [
        'bg-primary-500'
      ]
    },
    {
      color: 'neutral',
      variant: 'filled',
      class: [
        'bg-light-3',
        'dark:bg-dark-3'
      ]
    },
    {
      color: 'success',
      variant: 'filled',
      class: [
        'bg-success-500'
      ]
    },
    {
      color: 'info',
      variant: 'filled',
      class: [
        'bg-info-500'
      ]
    },
    {
      color: 'warning',
      variant: 'filled',
      class: [
        'bg-warning-500'
      ]
    },
    {
      color: 'error',
      variant: 'filled',
      class: [
        'bg-error-500'
      ]
    },
    // outlined & color
    {
      color: 'primary',
      variant: 'outlined',
      class: [
        'bg-transparent',
        'border-primary-500'
      ]
    },
    {
      color: 'neutral',
      variant: 'outlined',
      class: [
        'bg-transparent',
        'border-light-4',
        'dark:border-dark-2'
      ]
    },
    {
      color: 'success',
      variant: 'outlined',
      class: [
        'bg-transparent',
        'border-success-500'
      ]
    },
    {
      color: 'info',
      variant: 'outlined',
      class: [
        'bg-transparent',
        'border-info-500'
      ]
    },
    {
      color: 'warning',
      variant: 'outlined',
      class: [
        'bg-transparent',
        'border-warning-500'
      ]
    },
    {
      color: 'error',
      variant: 'outlined',
      class: [
        'bg-transparent',
        'border-error-500'
      ]
    },
    // ghost & color
    {
      color: 'primary',
      variant: 'ghost',
      class: [
        'bg-primary-500/[.15]'
      ]
    },
    {
      color: 'neutral',
      variant: 'ghost',
      class: [
        'bg-light-4/[.3]',
        'dark:bg-dark-3/[.3]'
      ]
    },
    {
      color: 'success',
      variant: 'ghost',
      class: [
        'bg-success-500/[.15]'
      ]
    },
    {
      color: 'info',
      variant: 'ghost',
      class: [
        'bg-info-500/[.15]'
      ]
    },
    {
      color: 'warning',
      variant: 'ghost',
      class: [
        'bg-warning-500/[.15]'
      ]
    },
    {
      color: 'error',
      variant: 'ghost',
      class: [
        'bg-error-500/[.15]'
      ]
    },
    // gradient & color
    {
      variant: 'gradient',
      color: 'primary',
      class: [
        'from-primary-500',
        'to-primary-900'
      ]
    },
    {
      variant: 'gradient',
      color: 'neutral',
      class: [
        'from-light-1',
        'to-light-5',
        'dark:from-dark-1',
        'dark:to-dark-5'
      ]
    },
    {
      variant: 'gradient',
      color: 'success',
      class: [
        'from-success-500',
        'to-success-900'
      ]
    },
    {
      variant: 'gradient',
      color: 'info',
      class: [
        'from-info-500',
        'to-info-900'
      ]
    },
    {
      variant: 'gradient',
      color: 'warning',
      class: [
        'from-warning-500',
        'to-warning-900'
      ]
    },
    {
      variant: 'gradient',
      color: 'error',
      class: [
        'from-error-500',
        'to-error-900'
      ]
    },
    // floating & variant
    {
      floating: true,
      variant: 'outlined',
      class: [
        'border'
      ]
    },
    // floating & shape
    {
      floating: true,
      shape: 'rounded',
      class: [
        'rounded-full'
      ]
    },
    {
      floating: true,
      shape: 'soft',
      class: [
        'rounded-2xl'
      ]
    }
  ]
}) as unknown as ReturnType<TV>
