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
      'w-full',
      'h-full',
      'p-6',
      'bg-white',
      'shadow-lg',
      'text-left',
      'overflow-hidden',
      'absolute',
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
    sizes: {
      xs: {},
      sm: {},
      md: {},
      lg: {}
    },
    placement: {
      bottom: {
        panel: [
          'right-0',
          'bottom-0'
        ]
      },
      top: {
        panel: [
          'right-0',
          'top-0'
        ]
      },
      left: {
        panel: [
          'left-0'
        ]
      },
      right: {
        panel: [
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
  },
  compoundVariants: [
    // sizes
    {
      placement: ['top', 'bottom'],
      size: 'xs',
      class: {
        panel: [
          'max-h-[14rem]'
        ]
      }
    },
    {
      placement: ['top', 'bottom'],
      size: 'sm',
      class: {
        panel: [
          'max-h-[18rem]'
        ]
      }
    },
    {
      placement: ['top', 'bottom'],
      size: 'md',
      class: {
        panel: [
          'max-h-[22rem]'
        ]
      }
    },
    {
      placement: ['top', 'bottom'],
      size: 'lg',
      class: {
        panel: [
          'max-h-[26rem]'
        ]
      }
    },
    {
      placement: ['left', 'right'],
      size: 'xs',
      class: {
        panel: [
          'max-w-xs'
        ]
      }
    },
    {
      placement: ['left', 'right'],
      size: 'sm',
      class: {
        panel: [
          'max-w-lg'
        ]
      }
    },
    {
      placement: ['left', 'right'],
      size: 'md',
      class: {
        panel: [
          'max-w-xl'
        ]
      }
    },
    {
      placement: ['left', 'right'],
      size: 'lg',
      class: {
        panel: [
          'max-w-2xl'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>