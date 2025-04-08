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
        'bg-light-200',
        'dark:bg-dark-800'
      ],
      ghost: [
        'bg-transparent'
      ],
      outlined: [
        'border-2',
        'border-light-400',
        'dark:border-dark-600'
      ]
    },
    separator: {
      line: [
        'divide-y-2',
        'divide-light-400',
        'dark:divide-dark-600'
      ],
      split: [
        'p-0',
        'gap-2',
        'bg-transparent',
        'dark:bg-transparent'
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
