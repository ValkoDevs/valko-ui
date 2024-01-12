import { tv } from 'tailwind-variants'
import { CollapseProps } from './interfaces'
import { computed } from 'vue'

const useStyle = (props: CollapseProps) => {
  const collapse = tv({
    base: [
      'vk-collapse',
      'w-full',
      'px-3',
      'grid',
      'grid-cols-1',
      'rounded-md',
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
          'bg-transparent'
        ],
        none: [
          'gap-0'
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
  return computed(() => {
    return collapse({
      variant: props.variant,
      separator: props.separator
    })
  })
}

export default useStyle
