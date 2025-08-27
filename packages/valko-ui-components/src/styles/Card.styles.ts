import { tv } from 'tailwind-variants'

export default tv({
  base: [
    'vk-card',
    'overflow-hidden',
    'grid',
    'group'
  ],
  variants: {
    variant: {
      filled: [
        'bg-surface-container-highest'
      ],
      outlined: [
        'border-2',
        'border-outlined'
      ],
      ghost: [
        'bg-surface-container-highest/[.5]',
        'backdrop-blur-lg'
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
      xs: [
        'text-xs'
      ],
      sm: [
        'text-sm'
      ],
      md: [
        'text-base'
      ],
      lg: [
        'text-lg'
      ]
    },
    layout: {
      vertical: [
        'grid-cols-1',
        'h-full'
      ],
      horizontal: [
        'data-[card-image=true]:grid-cols-[auto_auto]',
        'data-[card-image=false]:grid-cols-[1fr]',
        'grid-rows-[auto_1fr_auto]',
        'w-full'
      ],
      cover: [
        'grid-cols-1',
        'content-end',
        'relative',
        'text-on-surface'
      ]
    },
    disabled: {
      true: []
    },
    elevated: {
      true: [
        'shadow-el1'
      ]
    },
    isPressable: {
      true: [
        'transition-all',
        'duration-200',
        'ease-in-out',
        'active:scale-95',
        'cursor-pointer'
      ]
    }
  },
  compoundVariants: [
    // elevated & bg
    {
      elevated: true,
      variant: 'filled',
      class: [
        'bg-surface-container-low'
      ]
    },
    {
      elevated: true,
      variant: 'ghost',
      class: [
        'bg-surface-container-low/[.5]'
      ]
    }
  ]
})
