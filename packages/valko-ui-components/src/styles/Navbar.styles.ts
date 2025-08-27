import { tv } from 'tailwind-variants'

export default tv({
  base: [
    'vk-navbar',
    'flex',
    'items-center'
  ],
  variants: {
    variant: {
      filled: [
        'filter-none'
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
        'filter-none'
      ]
    },
    color: {
      primary: [],
      secondary: [],
      positive: [],
      negative: [],
      warning: [],
      accent: [],
      surface: []
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
    floating: {
      true: [
        'm-2',
        'w-[calc(100%_-_1rem)]'
      ]
    },
    elevated: {
      true: [
        'shadow-el2'
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
    vertical: {
      false: [
        'w-full',
        'shrink-0',
        'px-4'
      ],
      true: [
        'h-full',
        'w-fit',
        'min-w-48',
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
        'bg-primary',
        'text-on-primary'
      ]
    },
    {
      color: 'secondary',
      variant: 'filled',
      class: [
        'bg-secondary',
        'text-on-secondary'
      ]
    },
    {
      color: 'positive',
      variant: 'filled',
      class: [
        'bg-positive',
        'text-on-positive'
      ]
    },
    {
      color: 'accent',
      variant: 'filled',
      class: [
        'bg-accent',
        'text-on-accent'
      ]
    },
    {
      color: 'warning',
      variant: 'filled',
      class: [
        'bg-warning',
        'text-on-warning'
      ]
    },
    {
      color: 'negative',
      variant: 'filled',
      class: [
        'bg-negative',
        'text-on-negative'
      ]
    },
    {
      color: 'surface',
      variant: 'filled',
      class: [
        'bg-surface-container-highest',
        'text-on-surface'
      ]
    },
    // outlined & color
    {
      color: 'primary',
      variant: 'outlined',
      class: [
        'border-primary'
      ]
    },
    {
      color: 'secondary',
      variant: 'outlined',
      class: [
        'border-secondary'
      ]
    },
    {
      color: 'positive',
      variant: 'outlined',
      class: [
        'border-positive'
      ]
    },
    {
      color: 'accent',
      variant: 'outlined',
      class: [
        'border-accent'
      ]
    },
    {
      color: 'warning',
      variant: 'outlined',
      class: [
        'border-warning'
      ]
    },
    {
      color: 'negative',
      variant: 'outlined',
      class: [
        'border-negative'
      ]
    },
    {
      color: 'surface',
      variant: 'outlined',
      class: [
        'border-outlined',
        'text-on-surface-variant'
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
    {
      color: 'surface',
      variant: 'ghost',
      class: [
        'bg-surface-container-highest/[.5]'
      ]
    },
    // gradient & color
    {
      variant: 'gradient',
      color: 'primary',
      class: [
        'from-primary-gradient-start',
        'to-primary-gradient-end',
        'text-on-primary'
      ]
    },
    {
      variant: 'gradient',
      color: 'secondary',
      class: [
        'from-secondary-gradient-start',
        'to-secondary-gradient-end',
        'text-on-secondary'
      ]
    },
    {
      variant: 'gradient',
      color: 'positive',
      class: [
        'from-positive-gradient-start',
        'to-positive-gradient-end',
        'text-on-positive'
      ]
    },
    {
      variant: 'gradient',
      color: 'accent',
      class: [
        'from-accent-gradient-start',
        'to-accent-gradient-end',
        'text-on-accent'
      ]
    },
    {
      variant: 'gradient',
      color: 'warning',
      class: [
        'from-warning-gradient-start',
        'to-warning-gradient-end',
        'text-on-warning'
      ]
    },
    {
      variant: 'gradient',
      color: 'negative',
      class: [
        'from-negative-gradient-start',
        'to-negative-gradient-end',
        'text-on-negative'
      ]
    },
    {
      variant: 'gradient',
      color: 'surface',
      class: [
        'from-surface-container',
        'to-surface-container-highest'
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
      floating: false,
      shape: 'rounded',
      class: [
        'rounded-b-2xl'
      ]
    },
    {
      vertical: false,
      floating: false,
      shape: 'soft',
      class: [
        'rounded-b-lg'
      ]
    },
    {
      vertical: true,
      floating: false,
      shape: 'rounded',
      class: [
        'rounded-r-2xl'
      ]
    },
    {
      vertical: true,
      floating: false,
      shape: 'soft',
      class: [
        'rounded-r-lg'
      ]
    }
  ]
})
