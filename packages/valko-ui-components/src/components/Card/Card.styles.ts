import { computed } from 'vue'
import { tv } from 'tailwind-variants'
import { CardProps } from '#valkoui/types'

const styles = tv({
  base: [
    'vk-card',
    'w-fit',
    'flex',
    'items-stretch',
    'shadow-md',
    'overflow-hidden',
    'group'
  ],
  variants: {
    variant: {
      filled: [
        'bg-light-3',
        'dark:bg-dark-3'
      ],
      outlined: [
        'border-2',
        'border-light-5',
        'dark:border-dark-1'
      ],
      ghost: [
        'shadow-none'
      ]
    },
    shape: {
      rounded: [
        'rounded-2xl'
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
        'w-48'
      ],
      sm: [
        'w-64'
      ],
      md: [
        'w-80'
      ],
      lg: [
        'w-96'
      ],
      full: [
        'w-full'
      ]
    },
    direction: {
      row: [
        'flex-row'
      ],
      col: [
        'flex-col'
      ],
      'row-reverse': [
        'flex-row-reverse'
      ],
      'col-reverse': [
        'flex-col-reverse'
      ]
    },
    disabled: {
      true: []
    },
    flat: {
      true: [
        'shadow-none'
      ]
    }
  }
})

export const useStyle = (props: CardProps) => computed(() => styles(props))
