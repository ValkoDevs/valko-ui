import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-tooltip',
      'relative'
    ],
    tip: [
      'vk-tooltip_tip',
      'p-2',
      'w-fit',
      'h-fit',
      'max-w-xs',
      'shadow-md',
      'truncate',
      'origin-center',
      'transform',
      'absolute',
      'bg-light-3',
      'text-dark-5',
      'shadow-dark-3',
      'dark:text-light-1',
      'dark:bg-dark-3'
    ],
    mouseover: [
      'vk-tooltip_mouseover'
    ]
  },
  variants: {
    size: {
      xs: {
        tip: [
          'text-xs'
        ]
      },
      sm: {
        tip: [
          'text-sm'
        ]
      },
      md: {
        tip: [
          'text-base'
        ]
      },
      lg: {
        tip: [
          'text-lg'
        ]
      }
    },
    shape: {
      rounded: {
        tip: [
          'rounded-full'
        ]
      },
      soft: {
        tip: [
          'rounded-lg'
        ]
      },
      square: {
        tip: [
          'rounded-none'
        ]
      }
    },
    placement: {
      top: {
        tip: [
          'mb-1',
          'bottom-full',
          'left-1/2',
          '-translate-x-1/2'
        ]
      },
      bottom: {
        tip: [
          'mt-1',
          'top-full',
          'left-1/2',
          '-translate-x-1/2'
        ]
      },
      left: {
        tip: [
          'mr-1',
          'right-full',
          'top-1/2',
          '-translate-y-1/2'
        ]
      },
      right: {
        tip: [
          'ml-1',
          'left-full',
          'top-1/2',
          '-translate-y-1/2'
        ]
      }
    },
    flat: {
      true: {
        tip: [
          'shadow-none'
        ]
      }
    }
  }
}) as unknown as ReturnType<TV>
