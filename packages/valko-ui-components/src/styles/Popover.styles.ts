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
      'bg-light-3',
      'shadow-md',
      'absolute',
      'z-10',
      'origin-center',
      'data-[text=true]:max-w-xs',
      'data-[text=true]:w-fit',
      'data-[text=true]:h-fit',
      'data-[text=true]:truncate',
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
    },
    placement: {
      top: {
        panel: [
          'mb-1',
          'bottom-full',
          'left-1/2',
          '-translate-x-1/2'
        ]
      },
      bottom: {
        panel: [
          'mt-1',
          'top-full',
          'left-1/2',
          '-translate-x-1/2'
        ]
      },
      left: {
        panel: [
          'mr-1',
          'right-full',
          'top-1/2',
          '-translate-y-1/2'
        ]
      },
      right: {
        panel: [
          'ml-1',
          'left-full',
          'top-1/2',
          '-translate-y-1/2'
        ]
      }
    }
  }
}) as unknown as ReturnType<TV>
