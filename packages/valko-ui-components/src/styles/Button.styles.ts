import { tv, type TV } from 'tailwind-variants'

export default tv({
  base: [
    'vk-button__base',
    'font-semibold',
    'tracking-wider',
    'focus:outline-none',
    'focus:ring-2',
    'ring-inset',
    'shadow-md',
    'transition',
    'duration-150',
    'shadow-light-4',
    'dark:shadow-dark-3',
    'focus:outline-none',
    'active:shadow-none'
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
    size: {
      xs: [
        'px-2',
        'py-2',
        'text-xs'
      ],
      sm: [
        'px-3',
        'py-2.5',
        'text-sm'
      ],
      md: [
        'px-4',
        'py-2.5',
        'text-base'
      ],
      lg: [
        'px-5',
        'py-3',
        'text-lg'
      ]
    },
    variant: {
      filled: [
        'text-white'
      ],
      ghost: [
        'shadow-none'
      ],
      outlined: [
        'border-2'
      ],
      link: [
        'bg-transparent',
        'shadow-none'
      ]
    },
    block: {
      true: [
        'w-full'
      ]
    },
    flat: {
      true: [
        'shadow-none'
      ]
    },
    disabled: {
      true: {}
    },
    condensed: {
      true: [
        'px-0',
        'py-0'
      ]
    },
    shape: {
      rounded: [
        'rounded-full'
      ],
      soft: [
        'rounded'
      ],
      square: [
        'rounded-none'
      ]
    }
  },
  compoundVariants: [
    //filled & color
    {
      variant: 'filled',
      color: 'primary',
      disabled: false,
      class: [
        'bg-primary-600',
        'focus:ring-primary-700',
        'hover:bg-primary-500',
        'active:bg-primary-700'
      ]
    },
    {
      variant: 'filled',
      color: 'secondary',
      disabled: false,
      class: [
        'bg-secondary-600',
        'focus:ring-secondary-700',
        'hover:bg-secondary-500',
        'active:bg-secondary-700'
      ]
    },
    {
      variant: 'filled',
      color: 'success',
      disabled: false,
      class: [
        'bg-success-600',
        'focus:ring-success-700',
        'hover:bg-success-500',
        'active:bg-success-700'
      ]
    },
    {
      variant: 'filled',
      color: 'info',
      disabled: false,
      class: [
        'bg-info-600',
        'focus:ring-info-700',
        'hover:bg-info-500',
        'active:bg-info-700'
      ]
    },
    {
      variant: 'filled',
      color: 'warning',
      disabled: false,
      class: [
        'bg-warning-600',
        'focus:ring-warning-700',
        'hover:bg-warning-500',
        'active:bg-warning-700'
      ]
    },
    {
      variant: 'filled',
      color: 'error',
      disabled: false,
      class: [
        'bg-error-600',
        'focus:ring-error-700',
        'hover:bg-error-500',
        'active:bg-error-700'
      ]
    },
    {
      variant: 'filled',
      color: 'light',
      disabled: false,
      class: [
        'bg-light-2',
        'focus:ring-light-1',
        'hover:bg-light-3',
        'active:bg-light-1',
        'text-black'
      ]
    },
    {
      variant: 'filled',
      color: 'dark',
      disabled: false,
      class: [
        'bg-dark-4',
        'focus:ring-dark-5',
        'hover:bg-dark-3',
        'active:bg-dark-5'
      ]
    },
    {
      variant: 'filled',
      color: 'neutral',
      disabled: false,
      class: [
        'bg-dark-3',
        'focus:ring-dark-4',
        'hover:bg-dark-2',
        'active:bg-dark-4',
        'text-light-1',
        'dark:bg-light-3',
        'dark:focus:ring-light-2',
        'dark:hover:bg-light-4',
        'dark:active:bg-light-2',
        'dark:text-dark-5'
      ]
    },
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      disabled: false,
      class: [
        'text-primary-600',
        'bg-primary-500/[.15]',
        'focus:ring-primary-500/[.30]',
        'hover:bg-primary-500/[.25]',
        'active:bg-primary-500/[.30]'
      ]
    },
    {
      variant: 'ghost',
      color: 'secondary',
      disabled: false,
      class: [
        'text-secondary-600',
        'bg-secondary-500/[.15]',
        'focus:ring-secondary-500/[.30]',
        'hover:bg-secondary-500/[.25]',
        'active:bg-secondary-500/[.30]'
      ]
    },
    {
      variant: 'ghost',
      color: 'success',
      disabled: false,
      class: [
        'text-success-600',
        'bg-success-500/[.15]',
        'focus:ring-success-500/[.30]',
        'hover:bg-success-500/[.25]',
        'active:bg-success-500/[.30]'
      ]
    },
    {
      variant: 'ghost',
      color: 'info',
      disabled: false,
      class: [
        'text-info-600',
        'bg-info-500/[.15]',
        'focus:ring-info-500/[.30]',
        'hover:bg-info-500/[.25]',
        'active:bg-info-500/[.30]'
      ]
    },
    {
      variant: 'ghost',
      color: 'warning',
      disabled: false,
      class: [
        'text-warning-600',
        'bg-warning-500/[.15]',
        'focus:ring-warning-500/[.30]',
        'hover:bg-warning-500/[.25]',
        'active:bg-warning-500/[.30]'
      ]
    },
    {
      variant: 'ghost',
      color: 'error',
      disabled: false,
      class: [
        'text-error-600',
        'bg-error-500/[.15]',
        'focus:ring-error-500/[.30]',
        'hover:bg-error-500/[.25]',
        'active:bg-error-500/[.30]'
      ]
    },
    {
      variant: 'ghost',
      color: 'light',
      disabled: false,
      class: [
        'text-light-1',
        'bg-light-1/[.15]',
        'focus:ring-light-1/[.30]',
        'hover:bg-light-1/[.25]',
        'active:bg-light-1/[.30]'
      ]
    },
    {
      variant: 'ghost',
      color: 'dark',
      disabled: false,
      class: [
        'text-dark-5',
        'bg-dark-5/[.15]',
        'focus:ring-dark-5/[.30]',
        'hover:bg-dark-5/[.25]',
        'active:bg-dark-5/[.30]'
      ]
    },
    {
      variant: 'ghost',
      color: 'neutral',
      disabled: false,
      class: [
        'text-dark-5',
        'bg-dark-5/[.15]',
        'focus:ring-dark-5/[.30]',
        'hover:bg-dark-5/[.25]',
        'active:bg-dark-5/[.30]',
        'dark:text-light-5',
        'dark:bg-light-5/[.15]',
        'dark:focus:ring-light-5/[.30]',
        'dark:hover:bg-light-5/[.25]',
        'dark:active:bg-light-5/[.30]'
      ]
    },
    // link & color
    {
      variant: 'link',
      color: 'primary',
      disabled: false,
      class: [
        'text-primary-600',
        'focus:ring-primary-400/20',
        'hover:bg-primary-300/20',
        'active:bg-primary-400/20'
      ]
    },
    {
      variant: 'link',
      color: 'secondary',
      disabled: false,
      class: [
        'text-secondary-600',
        'focus:ring-secondary-400/20',
        'hover:bg-secondary-300/20',
        'active:bg-secondary-400/20'
      ]
    },
    {
      variant: 'link',
      color: 'success',
      disabled: false,
      class: [
        'text-success-600',
        'focus:ring-success-400/20',
        'hover:bg-success-300/20',
        'active:bg-success-400/20'
      ]
    },
    {
      variant: 'link',
      color: 'info',
      disabled: false,
      class: [
        'text-info-600',
        'focus:ring-info-400/20',
        'hover:bg-info-300/20',
        'active:bg-info-400/20'
      ]
    },
    {
      variant: 'link',
      color: 'warning',
      disabled: false,
      class: [
        'text-warning-600',
        'focus:ring-warning-400/20',
        'hover:bg-warning-300/20',
        'active:bg-warning-400/20'
      ]
    },
    {
      variant: 'link',
      color: 'error',
      disabled: false,
      class: [
        'text-error-600',
        'focus:ring-error-400/20',
        'hover:bg-error-300/20',
        'active:bg-error-400/20'
      ]
    },
    {
      variant: 'link',
      color: 'light',
      disabled: false,
      class: [
        'text-light-1',
        'focus:ring-light-2/20',
        'hover:bg-light-1/20',
        'active:bg-light-1/20'
      ]
    },
    {
      variant: 'link',
      color: 'dark',
      disabled: false,
      class: [
        'text-dark-5',
        'focus:ring-dark-4/20',
        'hover:bg-dark-5/20',
        'active:bg-dark-4/20'
      ]
    },
    {
      variant: 'link',
      color: 'neutral',
      disabled: false,
      class: [
        'text-dark-5',
        'focus:ring-dark-4/20',
        'hover:bg-dark-5/20',
        'active:bg-dark-4/20',
        'dark:text-light-5',
        'dark:focus:ring-light-4/20',
        'dark:hover:bg-light-5/20',
        'dark:active:bg-light-4/20'
      ]
    },
    // outlined & color
    {
      variant: 'outlined',
      color: 'primary',
      disabled: false,
      class: [
        'text-primary-600',
        'focus:ring-primary-400/20',
        'hover:bg-primary-300/20',
        'active:bg-primary-400/20',
        'border-primary-600'
      ]
    },
    {
      variant: 'outlined',
      color: 'secondary',
      disabled: false,
      class: [
        'text-secondary-600',
        'focus:ring-secondary-400/20',
        'hover:bg-secondary-300/20',
        'active:bg-secondary-400/20',
        'border-secondary-600'
      ]
    },
    {
      variant: 'outlined',
      color: 'success',
      disabled: false,
      class: [
        'text-success-600',
        'focus:ring-success-400/20',
        'hover:bg-success-300/20',
        'active:bg-success-400/20',
        'border-success-600'
      ]
    },
    {
      variant: 'outlined',
      color: 'info',
      disabled: false,
      class: [
        'text-info-600',
        'focus:ring-info-400/20',
        'hover:bg-info-300/20',
        'active:bg-info-400/20',
        'border-info-600'
      ]
    },
    {
      variant: 'outlined',
      color: 'warning',
      disabled: false,
      class: [
        'text-warning-600',
        'focus:ring-warning-400/20',
        'hover:bg-warning-300/20',
        'active:bg-warning-400/20',
        'border-warning-600'
      ]
    },
    {
      variant: 'outlined',
      color: 'error',
      disabled: false,
      class: [
        'text-error-600',
        'focus:ring-error-400/20',
        'hover:bg-error-300/20',
        'active:bg-error-400/20',
        'border-error-600'
      ]
    },
    {
      variant: 'outlined',
      color: 'light',
      disabled: false,
      class: [
        'text-light-1',
        'focus:ring-light-2/20',
        'hover:bg-light-1/20',
        'active:bg-light-2/20',
        'border-light-1'
      ]
    },
    {
      variant: 'outlined',
      color: 'dark',
      disabled: false,
      class: [
        'text-dark-5',
        'focus:ring-dark-4/20',
        'hover:bg-dark-5/20',
        'active:bg-dark-4/20',
        'border-dark-5'
      ]
    },
    {
      variant: 'outlined',
      color: 'neutral',
      disabled: false,
      class: [
        'text-dark-5',
        'focus:ring-dark-4/20',
        'hover:bg-dark-5/20',
        'active:bg-dark-4/20',
        'border-dark-5',
        'dark:text-light-5',
        'dark:focus:ring-light-4/20',
        'dark:hover:bg-light-5/20',
        'dark:active:bg-light-4/20',
        'dark:border-light-5'
      ]
    },
    // disabled & variant
    {
      variant: 'filled',
      disabled: true,
      class: [
        'bg-gray-600',
        'opacity-50',
        'cursor-not-allowed'
      ]
    },
    {
      variant: 'ghost',
      disabled: true,
      class: [
        'text-gray-600',
        'focus:ring-none',
        'hover:bg-transparent',
        'active:bg-transparent',
        'opacity-50',
        'cursor-not-allowed'
      ]
    },
    {
      variant: 'outlined',
      disabled: true,
      class: [
        'text-gray-600',
        'focus:ring-none',
        'hover:bg-transparent',
        'active:bg-transparent',
        'opacity-50',
        'cursor-not-allowed',
        'border-gray-600'
      ]
    },
    // outlined & size
    {
      size: 'xs',
      variant: 'outlined',
      condensed: false,
      class: [
        'px-[calc(0.5rem_-_2px)]',
        'py-[calc(0.5rem_-_2px)]'
      ]
    },
    {
      size: 'sm',
      variant: 'outlined',
      condensed: false,
      class: [
        'px-[calc(0.75rem_-_2px)]',
        'py-[calc(0.625rem_-_2px)]'
      ]
    },
    {
      size: 'md',
      variant: 'outlined',
      condensed: false,
      class: [
        'px-[calc(1rem_-_2px)]',
        'py-[calc(0.625rem_-_2px)]'
      ]
    },
    {
      size: 'lg',
      variant: 'outlined',
      condensed: false,
      class: [
        'px-[calc(1.25rem_-_2px)]',
        'py-[calc(0.75rem_-_2px)]'
      ]
    }
  ]
}) as unknown as ReturnType<TV>
