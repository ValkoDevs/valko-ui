import { computed } from 'vue'
import { tv } from 'tailwind-variants'
import { NavbarProps } from '#valkoui/types'

const styles = tv({
  base: [
    'vk-navbar',
    'w-full',
    'px-4',
    'flex',
    'justify-items-center',
    'items-center',
    'shadow-lg',
    'shrink-0'
  ],
  variants: {
    color: {
      primary: [],
      secondary: [],
      success: [],
      error: [],
      warning: [],
      info: [],
      light: [],
      dark: [],
      neutral: []
    },
    size: {
      xs: [
        'h-8'
      ],
      sm: [
        'h-12'
      ],
      md: [
        'h-16'
      ],
      lg: [
        'h-20'
      ]
    },
    shape: {
      rounded: [
        'rounded-b-full'
      ],
      square: [
        'rounded-none'
      ],
      soft: [
        'rounded-b-2xl'
      ]
    },
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
    // color & variant
    {
      color: 'primary',
      variant: 'filled',
      class: [
        'bg-primary-500'
      ]
    },
    {
      color: 'primary',
      variant: 'outlined',
      class: [
        'bg-transparent',
        'border-primary-500'
      ]
    },
    {
      color: 'primary',
      variant: 'ghost',
      class: [
        'bg-primary-500/[.15]'
      ]
    },
    {
      color: 'secondary',
      variant: 'filled',
      class: [
        'bg-secondary-500'
      ]
    },
    {
      color: 'secondary',
      variant: 'outlined',
      class: [
        'bg-transparent',
        'border-secondary-500'
      ]
    },
    {
      color: 'secondary',
      variant: 'ghost',
      class: [
        'bg-secondary-500/[.15]',
        'text-secondary-500'
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
      color: 'success',
      variant: 'outlined',
      class: [
        'bg-transparent',
        'border-success-500'
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
      color: 'error',
      variant: 'filled',
      class: [
        'bg-error-500'
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
    {
      color: 'error',
      variant: 'ghost',
      class: [
        'bg-error-500/[.15]'
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
      color: 'warning',
      variant: 'outlined',
      class: [
        'bg-transparent',
        'border-warning-500'
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
      color: 'info',
      variant: 'filled',
      class: [
        'bg-info-500'
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
      color: 'info',
      variant: 'ghost',
      class: [
        'bg-info-500/[.15]'
      ]
    },
    {
      color: 'light',
      variant: 'filled',
      class: [
        'bg-white'
      ]
    },
    {
      color: 'light',
      variant: 'outlined',
      class: [
        'bg-transparent',
        'border-white'
      ]
    },
    {
      color: 'light',
      variant: 'ghost',
      class: [
        'bg-white/[.15]'
      ]
    },
    {
      color: 'dark',
      variant: 'filled',
      class: [
        'bg-black'
      ]
    },
    {
      color: 'dark',
      variant: 'outlined',
      class: [
        'bg-transparent',
        'border-black'
      ]
    },
    {
      color: 'dark',
      variant: 'ghost',
      class: [
        'bg-black/[.15]'
      ]
    },
    {
      color: 'neutral',
      variant: 'filled',
      class: [
        'bg-light-1',
        'dark:bg-dark-3'
      ]
    },
    {
      color: 'neutral',
      variant: 'outlined',
      class: [
        'bg-transparent',
        'border-light-4',
        'dark:border-dark-1'
      ]
    },
    {
      color: 'neutral',
      variant: 'ghost',
      class: [
        'bg-light-1/[.15]',
        'dark:bg-dark-3/[.15]'
      ]
    }
  ]
})

export const useStyle = (props: NavbarProps) => computed(() => styles(props))
