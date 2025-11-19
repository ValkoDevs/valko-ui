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
      'absolute',
      'z-40',
      'data-[text=true]:max-w-xs',
      'data-[text=true]:truncate',
      // bottom placement
      'data-[placement=bottom-start]:mt-1',
      'data-[placement=bottom-start]:top-full',
      'data-[placement=bottom-start]:left-0',
      'data-[placement=bottom-start]:origin-top-left',
      'data-[placement=bottom-center]:mt-1',
      'data-[placement=bottom-center]:top-full',
      'data-[placement=bottom-center]:left-1/2',
      'data-[placement=bottom-center]:-translate-x-1/2',
      'data-[placement=bottom-center]:origin-top',
      'data-[placement=bottom-end]:mt-1',
      'data-[placement=bottom-end]:top-full',
      'data-[placement=bottom-end]:right-0',
      'data-[placement=bottom-end]:origin-top-right',
      // top placement
      'data-[placement=top-start]:mb-1',
      'data-[placement=top-start]:bottom-full',
      'data-[placement=top-start]:left-0',
      'data-[placement=top-start]:origin-bottom-left',
      'data-[placement=top-center]:mb-1',
      'data-[placement=top-center]:bottom-full',
      'data-[placement=top-center]:left-1/2',
      'data-[placement=top-center]:-translate-x-1/2',
      'data-[placement=top-center]:origin-bottom',
      'data-[placement=top-end]:mb-1',
      'data-[placement=top-end]:bottom-full',
      'data-[placement=top-end]:right-0',
      'data-[placement=top-end]:origin-bottom-right',
      // left placement
      'data-[placement=left-start]:mr-1',
      'data-[placement=left-start]:right-full',
      'data-[placement=left-start]:top-0',
      'data-[placement=left-start]:origin-right',
      'data-[placement=left-center]:mr-1',
      'data-[placement=left-center]:right-full',
      'data-[placement=left-center]:top-1/2',
      'data-[placement=left-center]:-translate-y-1/2',
      'data-[placement=left-center]:origin-right',
      'data-[placement=left-end]:mr-1',
      'data-[placement=left-end]:right-full',
      'data-[placement=left-end]:bottom-0',
      'data-[placement=left-end]:origin-bottom-right',
      // right placement
      'data-[placement=right-start]:ml-1',
      'data-[placement=right-start]:left-full',
      'data-[placement=right-start]:top-0',
      'data-[placement=right-start]:origin-left',
      'data-[placement=right-center]:ml-1',
      'data-[placement=right-center]:left-full',
      'data-[placement=right-center]:top-1/2',
      'data-[placement=right-center]:-translate-y-1/2',
      'data-[placement=right-center]:origin-left',
      'data-[placement=right-end]:ml-1',
      'data-[placement=right-end]:left-full',
      'data-[placement=right-end]:bottom-0',
      'data-[placement=right-end]:origin-bottom-left'
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
