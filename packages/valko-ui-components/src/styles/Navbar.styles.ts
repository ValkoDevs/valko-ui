import { tv, type TV } from 'tailwind-variants'

export default tv({
  base: [
    'vk-navbar',
    'flex',
    'justify-items-center',
    'items-center',
    'shadow-lg'
  ],
  variants: {
    variant: {
      filled: [
        'filter-none',
        'text-white'
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
      secondary: [],
      positive: [],
      negative: [],
      warning: [],
      accent: []
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
        'bg-primary'
      ]
    },
    {
      color: 'secondary',
      variant: 'filled',
      class: [
        'bg-secondary'
      ]
    },
    {
      color: 'positive',
      variant: 'filled',
      class: [
        'bg-positive'
      ]
    },
    {
      color: 'accent',
      variant: 'filled',
      class: [
        'bg-accent'
      ]
    },
    {
      color: 'warning',
      variant: 'filled',
      class: [
        'bg-warning'
      ]
    },
    {
      color: 'negative',
      variant: 'filled',
      class: [
        'bg-negative'
      ]
    },
    // outlined & color
    {
      color: 'primary',
      variant: 'outlined',
      class: [
        'bg-transparent',
        'border-primary'
      ]
    },
    {
      color: 'secondary',
      variant: 'outlined',
      class: [
        'bg-transparent',
        'border-secondary'
      ]
    },
    {
      color: 'positive',
      variant: 'outlined',
      class: [
        'bg-transparent',
        'border-positive'
      ]
    },
    {
      color: 'accent',
      variant: 'outlined',
      class: [
        'bg-transparent',
        'border-accent'
      ]
    },
    {
      color: 'warning',
      variant: 'outlined',
      class: [
        'bg-transparent',
        'border-warning'
      ]
    },
    {
      color: 'negative',
      variant: 'outlined',
      class: [
        'bg-transparent',
        'border-negative'
      ]
    },
    // ghost & color
    {
      color: 'primary',
      variant: 'ghost',
      class: [
        'bg-primary-container'
      ]
    },
    {
      color: 'secondary',
      variant: 'ghost',
      class: [
        'bg-secondary-container'
      ]
    },
    {
      color: 'positive',
      variant: 'ghost',
      class: [
        'bg-positive-container'
      ]
    },
    {
      color: 'accent',
      variant: 'ghost',
      class: [
        'bg-accent-container'
      ]
    },
    {
      color: 'warning',
      variant: 'ghost',
      class: [
        'bg-warning-container'
      ]
    },
    {
      color: 'negative',
      variant: 'ghost',
      class: [
        'bg-negative-container'
      ]
    },
    // gradient & color
    {
      variant: 'gradient',
      color: 'primary',
      class: [
        'from-primary-gradient-start',
        'to-primary-gradient-end'
      ]
    },
    {
      variant: 'gradient',
      color: 'secondary',
      class: [
        'from-secondary-gradient-start',
        'to-secondary-gradient-end'
      ]
    },
    {
      variant: 'gradient',
      color: 'positive',
      class: [
        'from-positive-gradient-start',
        'to-positive-gradient-end'
      ]
    },
    {
      variant: 'gradient',
      color: 'accent',
      class: [
        'from-accent-gradient-start',
        'to-accent-gradient-end'
      ]
    },
    {
      variant: 'gradient',
      color: 'warning',
      class: [
        'from-warning-gradient-start',
        'to-warning-gradient-end'
      ]
    },
    {
      variant: 'gradient',
      color: 'negative',
      class: [
        'from-negative-gradient-start',
        'to-negative-gradient-end'
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
