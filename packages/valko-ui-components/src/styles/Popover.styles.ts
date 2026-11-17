import { tv } from 'tailwind-variants'

const popover = tv({
  slots: {
    container: [
      'vk-popover',
      'w-auto',
      'h-auto',
      'relative'
    ],
    slotContainer: [
      'h-auto',
      'w-auto',
      'relative',
      'cursor-pointer'
    ],
    panel: [
      'vk-popover__panel',
      'h-auto',
      'w-auto',
      'bg-surface-container-highest',
      'z-40',
      'data-[text=true]:max-w-xs',
      'data-[text=true]:truncate',
      'data-[state=open]:animate-vk-popover-in',
      'data-[state=closed]:animate-vk-popover-out'
    ]
  },
  variants: {
    elevated: {
      false: {
        panel: [
          'shadow-el2'
        ]
      },
      true: {
        panel: [
          'shadow-el3'
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
    condensed: {
      false : {
        panel: [
          'p-4'
        ]
      }
    }
  }
})

export default popover
export type PopoverSlots = typeof popover.slots
