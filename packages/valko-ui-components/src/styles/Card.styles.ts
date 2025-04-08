import { tv, type TV } from 'tailwind-variants'

export default tv({
  base: [
    'vk-card',
    'min-h-48',
    'min-w-48',
    'overflow-hidden',
    'grid',
    'shadow-lg',
    'group'
  ],
  variants: {
    variant: {
      filled: [
        'bg-light-100',
        'dark:bg-dark-800'
      ],
      outlined: [
        'border-2',
        'border-light-400',
        'dark:border-dark-600'
      ],
      ghost: [
        'bg-light-200/[.5]',
        'dark:bg-dark-800/[.5]',
        'backdrop-blur-lg',
        'shadow-none'
      ]
    },
    shape: {
      rounded: [
        'rounded-3xl'
      ],
      square: [
        'rounded-none'
      ],
      soft: [
        'rounded-lg'
      ]
    },
    size: {
      xs: [],
      sm: [],
      md: [],
      lg: [],
      full: []
    },
    layout: {
      vertical: [
        'grid-cols-1'
      ],
      horizontal: [
        'data-[card-image=true]:grid-cols-[auto_auto]',
        'data-[card-image=false]:grid-cols-[1fr]',
        'grid-rows-[auto_1fr_auto]'
      ],
      cover: [
        'grid-cols-1',
        'content-end',
        'relative'
      ]
    },
    disabled: {
      true: []
    },
    flat: {
      true: [
        'shadow-none'
      ]
    },
    isPressable: {
      true: [
        'transition-all',
        'duration-200',
        'ease-in-out',
        'active:shadow-none',
        'active:scale-95',
        'cursor-pointer'
      ]
    }
  },
  compoundVariants: [
    {
      layout: ['vertical', 'cover'],
      size: 'xs',
      class: [
        'w-48'
      ]
    },
    {
      layout: ['vertical', 'cover'],
      size: 'sm',
      class: [
        'w-64'
      ]
    },
    {
      layout: ['vertical', 'cover'],
      size: 'md',
      class: [
        'w-80'
      ]
    },
    {
      layout: ['vertical', 'cover'],
      size: 'lg',
      class: [
        'w-96'
      ]
    },
    {
      layout: ['vertical', 'cover', 'horizontal'],
      size: 'full',
      class: [
        'w-full',
        'h-full'
      ]
    },
    {
      layout: 'horizontal',
      size: 'xs',
      class: [
        'h-48'
      ]
    },
    {
      layout: 'horizontal',
      size: 'sm',
      class: [
        'h-64'
      ]
    },
    {
      layout: 'horizontal',
      size: 'md',
      class: [
        'h-80'
      ]
    },
    {
      layout: 'horizontal',
      size: 'lg',
      class: [
        'h-96'
      ]
    },
    {
      layout: 'cover',
      variant: 'filled',
      class: [
        'data-[layout=cover]:data-[card-image=true]:text-light-200',
        'data-[layout=cover]:data-[card-image=false]:text-dark-800',
        'dark:data-[layout=cover]:data-[card-image=true]:text-light-200',
        'dark:data-[layout=cover]:data-[card-image=false]:text-light-200'
      ]
    }
  ]
}) as unknown as ReturnType<TV>
