import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-drawer__container',
      'h-screen',
      'w-screen',
      'overflow-y-auto',
      'overflow-x-auto',
      'fixed',
      'inset-0',
      'flex'
    ],
    backdrop: [
      'vk-drawer__backdrop',
      'fixed',
      'inset-0'
    ],
    dialog: [
      'relative',
      'z-50'
    ],
    content: [
      'p-4',
      'min-h-full',
      'text-center',
      'flex',
      'items-center',
      'justify-center'
    ],
    panel: [
      'vk-drawer__panel',
      'absolute',
      'max-w-full',
      'max-h-full',
      'p-6',
      'bg-white',
      'shadow-lg',
      'text-left',
      'overflow-hidden',
      'flex',
      'flex-col',
      'justify-start',
      'align-middle',
      'gap-4',
      'dark:bg-dark-3'
    ],
    panelChild: [
      'flex',
      'w-full',
      'justify-between',
      'items-center'
    ],
    title: [
      'vk-drawer__title',
      'leading-6',
      'text-lg',
      'font-medium'
    ],
    closeButton: [
      'text-black',
      'dark:text-white',
      'justify-self-end'
    ],
    closeIcon: [
      'p-1'
    ]
  },
  variants: {
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
    backdrop: {
      blur: {
        backdrop: [
          'backdrop-blur-sm'
        ]
      },
      opaque: {
        backdrop: [
          'bg-light-5/80',
          'dark:bg-dark-1/80'
        ]
      },
      transparent: {
        backdrop: [
          'bg-transparent'
        ]
      }
    },
    placement: {
      bottom: {
        panel: [
          'w-full',
          'h-96',
          'right-0',
          'bottom-0'
        ]
      },
      top: {
        panel: [
          'w-full',
          'h-96',
          'right-0',
          'top-0'
        ]
      },
      left: {
        panel: [
          'h-full',
          'w-96',
          'left-0'
        ]
      },
      right: {
        panel: [
          'h-full',
          'w-96',
          'right-0'
        ]
      }
    },
    flat: {
      true: {
        panel: [
          'shadow-none'
        ]
      }
    }
  }
}) as unknown as ReturnType<TV>
