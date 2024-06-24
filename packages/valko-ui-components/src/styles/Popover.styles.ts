import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    popover: [
      'vk-popover',
      'relative'
    ],
    panel: [
      'vk-popover__panel',
      'p-2',
      'mt-3',
      'bg-light-3',
      'shadow-md',
      'absolute',
      'left-1/2',
      'z-10',
      'transform',
      '-translate-x-1/2',
      'dark:bg-dark-3'
    ]
  },
  variants: {
    flat: {
      true: {
        panel: [
          'shadow-none'
        ]
      }
    },
    shape: {
      rounded: {
        panel: [
          'rounded-2xl'
        ]
      },
      soft: {
        panel: [
          'rounded-lg'
        ]
      },
      square: {
        panel: [
          'rounded-none'
        ]
      }
    }
  }
}) as unknown as ReturnType<TV>
