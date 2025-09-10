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
      'truncate'
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
    }
  }
})

export default tooltip
export type TooltipSlots = typeof tooltip.slots
