import { computed } from 'vue'
import { tv } from 'tailwind-variants'
import { CollapseProps } from '#valkoui/types'

const styles = tv({
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
        'bg-light-3',
        'dark:bg-dark-3'
      ],
      ghost: [
        'bg-transparent'
      ],
      outlined: [
        'border-2',
        'border-light-5',
        'dark:border-dark-1'
      ]
    },
    separator: {
      line: [
        'divide-y-2',
        'divide-light-5',
        'dark:divide-dark-1'
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
})

export const useStyle = (props: CollapseProps) => computed(() => styles(props))
