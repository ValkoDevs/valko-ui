import { tv } from 'tailwind-variants'

const collapse = tv({
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
})

export default collapse
export type CollapseSlots = typeof collapse.base
