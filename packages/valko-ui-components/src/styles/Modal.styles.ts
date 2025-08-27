import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-modal__container',
      'overflow-y-auto',
      'fixed',
      'inset-0'
    ],
    backdrop: [
      'vk-modal__backdrop',
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
      'vk-modal__panel',
      'w-full',
      'p-6',
      'bg-surface-container-high',
      'text-left',
      'overflow-hidden',
      'flex',
      'flex-col',
      'justify-start',
      'align-middle',
      'gap-4',
      'transition-all',
      'transform'
    ],
    panelChild: [
      'vk-modal__panel-child',
      'flex',
      'w-full',
      'justify-between',
      'items-center'
    ],
    title: [
      'vk-modal__title',
      'leading-6',
      'text-lg',
      'font-medium'
    ],
    closeButton: [
      'text-on-surface',
      'justify-self-end'
    ],
    closeIcon: [
      'p-1'
    ]
  },
  variants: {
    size: {
      xs: {
        panel: [
          'max-w-xs'
        ]
      },
      sm: {
        panel: [
          'max-w-lg'
        ]
      },
      md: {
        panel: [
          'max-w-3xl'
        ]
      },
      lg: {
        panel: [
          'max-w-7xl'
        ]
      },
      full: {
        panel: [
          'h-screen',
          'max-w-full',
          'max-h-full'
        ],
        content: [
          'p-0'
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
    backdrop: {
      blur: {
        backdrop: [
          'backdrop-blur-sm'
        ]
      },
      opaque: {
        backdrop: [
          'bg-state-scrim'
        ]
      },
      transparent: {
        backdrop: [
          'bg-transparent'
        ]
      }
    }
  },
  compoundVariants: [
    {
      size: ['xs', 'sm', 'md', 'lg'],
      class: {
        panel: [
          'shadow-el3'
        ]
      }
    }
  ]
})
