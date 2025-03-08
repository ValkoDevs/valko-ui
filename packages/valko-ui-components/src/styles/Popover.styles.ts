import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    popover: [
      'vk-popover',
      'w-fit',
      'h-fit',
      'relative'
    ],
    slotContainer: [
      'h-fit',
      'w-fit',
      'relative',
      'cursor-pointer'
    ],
    panel: [
      'vk-popover__panel',
      'h-fit',
      'w-fit',
      'bg-light-3',
      'shadow-md',
      'absolute',
      'z-40',
      'data-[text=true]:max-w-xs',
      'data-[text=true]:truncate',
      'data-[placement=bottom-start]:mt-1',
      'data-[placement=bottom-start]:top-full',
      'data-[placement=bottom-start]:left-0',
      'data-[placement=bottom-start]:origin-top-left',
      'data-[placement=bottom-end]:mt-1',
      'data-[placement=bottom-end]:top-full',
      'data-[placement=bottom-end]:right-0',
      'data-[placement=bottom-end]:origin-top-right',
      'data-[placement=top-start]:mb-1',
      'data-[placement=top-start]:bottom-full',
      'data-[placement=top-start]:left-0',
      'data-[placement=top-start]:origin-bottom-left',
      'data-[placement=top-end]:mb-1',
      'data-[placement=top-end]:bottom-full',
      'data-[placement=top-end]:right-0',
      'data-[placement=top-end]:origin-bottom-right',
      'data-[placement=left-start]:mr-1',
      'data-[placement=left-start]:right-full',
      'data-[placement=left-start]:top-0',
      'data-[placement=left-start]:origin-right',
      'data-[placement=left-end]:mr-1',
      'data-[placement=left-end]:right-full',
      'data-[placement=left-end]:bottom-0',
      'data-[placement=left-end]:origin-bottom-right',
      'data-[placement=right-start]:ml-1',
      'data-[placement=right-start]:left-full',
      'data-[placement=right-start]:top-0',
      'data-[placement=right-start]:origin-left',
      'data-[placement=right-end]:ml-1',
      'data-[placement=right-end]:left-full',
      'data-[placement=right-end]:bottom-0',
      'data-[placement=right-end]:origin-bottom-left',
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
    condensed: {
      false : {
        panel: [
          'p-4'
        ]
      }
    }
  }
}) as unknown as ReturnType<TV>
