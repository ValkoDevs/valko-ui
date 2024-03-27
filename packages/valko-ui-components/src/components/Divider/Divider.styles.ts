import { tv } from 'tailwind-variants'
import { DividerProps } from '#valkoui/types'
import { computed } from 'vue'

const divider = tv({
  base: [
    'vk-divider',
    'border-1',
    'border-dark-1',
    'dark:border-light-5'
  ],
  variants: {
    direction: {
      horizontal: [
        'w-full',
        'my-2',
        'border-t'
      ],
      vertical: [
        'mx-2',
        'border-l'
      ]
    }
  }
})

export const useStyle = (props: DividerProps) => computed(() => divider(props))
