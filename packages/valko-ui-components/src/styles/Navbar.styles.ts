import { tv, type TV } from 'tailwind-variants'

export default tv({
  base: [
    'vk-navbar',
    'flex',
    'justify-items-center',
    'items-center',
    'shadow-lg',
    'shadow-light-300',
    'dark:shadow-dark-950'
  ],
  variants: {
    variant: {
      filled: [
        'filter-none',
        'text-light-50'
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
        'text-light-50'
      ]
    },
    color: {
      primary: [],
      neutral: [
        'text-dark-600',
        'dark:text-light-50'
      ],
      success: [],
      error: [],
      warning: [],
      info: []
    },
    size: {
      xs: [],
      sm: [],
      md: [],
      lg: []
    },
    shape: {
      rounded: [],
      square: [
        'rounded-none'
      ],
      soft: []
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
    },
    vertical: {
      false: [
        'w-full',
        'shrink-0',
        'px-4'
      ],
      true: [
        'h-full',
        'w-fit',
        'flex-col',
        'py-4'
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
        'bg-light-200',
        'dark:bg-dark-800'
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
        'border-light-300',
        'dark:border-dark-700'
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
        'bg-light-300/[.3]',
        'dark:bg-dark-800/[.3]'
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
        'from-light-50',
        'to-light-400',
        'dark:from-dark-600',
        'dark:to-dark-950'
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
    },
    // size & vertical
    {
      vertical: true,
      size: 'xs',
      class: [
        'min-w-10'
      ]
    },
    {
      vertical: true,
      size: 'sm',
      class: [
        'min-w-12'
      ]
    },
    {
      vertical: true,
      size: 'md',
      class: [
        'min-w-14'
      ]
    },
    {
      vertical: true,
      size: 'lg',
      class: [
        'min-w-16'
      ]
    },
    {
      vertical: false,
      size: 'xs',
      class: [
        'h-10'
      ]
    },
    {
      vertical: false,
      size: 'sm',
      class: [
        'h-12'
      ]
    },
    {
      vertical: false,
      size: 'md',
      class: [
        'h-14'
      ]
    },
    {
      vertical: false,
      size: 'lg',
      class: [
        'h-16'
      ]
    },
    // vertical & shape
    {
      vertical: false,
      shape: 'rounded',
      class: [
        'rounded-b-2xl'
      ]
    },
    {
      vertical: false,
      shape: 'soft',
      class: [
        'rounded-b-lg'
      ]
    },
    {
      vertical: true,
      shape: 'rounded',
      class: [
        'rounded-r-2xl'
      ]
    },
    {
      vertical: true,
      shape: 'soft',
      class: [
        'rounded-r-lg'
      ]
    }
  ]
}) as unknown as ReturnType<TV>
