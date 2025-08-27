import { tv } from 'tailwind-variants'

export default tv({
  base: [
    'vk-divider',
    'border-0'
  ],
  variants: {
    color: {
      primary: [],
      secondary: [],
      positive: [],
      accent: [],
      warning: [],
      negative: [],
      surface: []
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
        'mx-2'
      ]
    }
  },
  compoundVariants: [
    // filled & color
    {
      variant: 'filled',
      color: 'primary',
      class: [
        'bg-primary'
      ]
    },
    {
      variant: 'filled',
      color: 'secondary',
      class: [
        'bg-secondary'
      ]
    },
    {
      variant: 'filled',
      color: 'positive',
      class: [
        'bg-positive'
      ]
    },
    {
      variant: 'filled',
      color: 'accent',
      class: [
        'bg-accent'
      ]
    },
    {
      variant: 'filled',
      color: 'warning',
      class: [
        'bg-warning'
      ]
    },
    {
      variant: 'filled',
      color: 'negative',
      class: [
        'bg-negative'
      ]
    },
    {
      variant: 'filled',
      color: 'surface',
      class: [
        'bg-surface-container-highest'
      ]
    },
    // outlined & color
    {
      variant: 'outlined',
      color: 'primary',
      class: [
        'border-primary'
      ]
    },
    {
      variant: 'outlined',
      color: 'secondary',
      class: [
        'border-secondary'
      ]
    },
    {
      variant: 'outlined',
      color: 'positive',
      class: [
        'border-positive'
      ]
    },
    {
      variant: 'outlined',
      color: 'accent',
      class: [
        'border-accent'
      ]
    },
    {
      variant: 'outlined',
      color: 'warning',
      class: [
        'border-warning'
      ]
    },
    {
      variant: 'outlined',
      color: 'negative',
      class: [
        'border-negative'
      ]
    },
    {
      variant: 'outlined',
      color: 'surface',
      class: [
        'border-outlined'
      ]
    },
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      class: [
        'bg-primary-container'
      ]
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: [
        'bg-secondary-container'
      ]
    },
    {
      variant: 'ghost',
      color: 'positive',
      class: [
        'bg-positive-container'
      ]
    },
    {
      variant: 'ghost',
      color: 'accent',
      class: [
        'bg-accent-container'
      ]
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: [
        'bg-warning-container'
      ]
    },
    {
      variant: 'ghost',
      color: 'negative',
      class: [
        'bg-negative-container'
      ]
    },
    {
      variant: 'ghost',
      color: 'surface',
      class: [
        'bg-surface-container-highest/[.5]'
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
})
