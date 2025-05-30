import { tv, type TV } from 'tailwind-variants'

export default tv({
  base: [
    'vk-collapse',
    'w-full',
    'px-3',
    'grid',
    'grid-cols-1',
    'group'
  ],
  variants: {
    variant: {
      filled: [
        'bg-surface-container'
      ],
      ghost: [
        'bg-transparent'
      ],
      outlined: [
        'border-2',
        'border-outlined'
      ]
    },
    separator: {
      line: [
        'divide-y-2',
        'divide-outlined'
      ],
      split: [
        'p-0',
        'gap-2',
        'bg-transparent'
      ],
      none: [
        'gap-0'
      ]
    },
    shape: {
      rounded: [
        'rounded-2xl'
      ],
      soft: [
        'rounded-lg'
      ],
      square: [
        'rounded-none'
      ]
    }
  },
  compoundVariants: [
    {
      variant: 'outlined',
      separator: 'split',
      class: [
        'border-0'
      ]
    }
  ]
}) as unknown as ReturnType<TV>
