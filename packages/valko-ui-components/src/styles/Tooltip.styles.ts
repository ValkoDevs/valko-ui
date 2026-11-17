import { tv } from 'tailwind-variants'

const tooltip = tv({
  slots: {
    container: [
      'vk-tooltip'
    ],
    tip: [
      'vk-tooltip_tip',
      'w-fit',
      'h-fit',
      'p-2',
      'max-w-xs',
      'truncate',
      'bg-surface-container-highest',
      'z-40',
      'data-[state=delayed-open]:animate-vk-popover-in',
      'data-[state=instant-open]:animate-vk-popover-in',
      'data-[state=closed]:animate-vk-popover-out'
    ]
  },
  variants: {
    elevated: {
      false: {
        tip: [
          'shadow-el2'
        ]
      },
      true: {
        tip: [
          'shadow-el3'
        ]
      }
    },
    shape: {
      rounded: {
        tip: [
          'rounded-2xl'
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
    }
  }
})

export default tooltip
export type TooltipSlots = typeof tooltip.slots
