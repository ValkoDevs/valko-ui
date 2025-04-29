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
      'p-2',
      'bg-surface-container',
      'shadow-lg',
      'text-left',
      'overflow-y-auto',
      'absolute',
      'grid',
      'data-[title=true]:grid-rows-[auto_1fr]',
      'data-[title=false]:grid-cols-[1fr_auto]',
      'gap-2',
      'group'
    ],
    panelChild: [
      'vk-drawer__panel-child',
      'flex',
      'w-full',
      'group-data-[title=true]:justify-between',
      'group-data-[title=true]:items-center',
      'group-data-[title=true]:row-start-1',
      'group-data-[title=true]:col-span-1',
      'group-data-[title=false]:items-start',
      'group-data-[title=false]:col-start-2',
      'group-data-[title=false]:row-span-1'
    ],
    slotContent:[
      'w-full',
      'group-data-[title=true]:row-start-2',
      'group-data-[title=false]:row-start-1',
      'group-data-[title=true]:col-span-1',
      'group-data-[title=false]:col-start-1',
      'group-data-[title=false]:col-span-1'
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
      rounded: {},
      soft: {},
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
          'bg-surface-container/[.8]'
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
          'max-h-[25%]',
          'md:max-h-[14rem]'
        ]
      }
    },
    {
      placement: ['top', 'bottom'],
      size: 'sm',
      class: {
        panel: [
          'max-h-[50%]',
          'md:max-h-[18rem]'
        ]
      }
    },
    {
      placement: ['top', 'bottom'],
      size: 'md',
      class: {
        panel: [
          'max-h-[75%]',
          'md:max-h-[22rem]'
        ]
      }
    },
    {
      placement: ['top', 'bottom'],
      size: 'lg',
      class: {
        panel: [
          'max-h-full',
          'md:max-h-[26rem]'
        ]
      }
    },
    {
      placement: ['left', 'right'],
      size: 'xs',
      class: {
        panel: [
          'max-w-[25%]',
          'md:max-w-xs'
        ]
      }
    },
    {
      placement: ['left', 'right'],
      size: 'sm',
      class: {
        panel: [
          'max-w-[50%]',
          'md:max-w-lg'
        ]
      }
    },
    {
      placement: ['left', 'right'],
      size: 'md',
      class: {
        panel: [
          'max-w-[75%]',
          'md:max-w-xl'
        ]
      }
    },
    {
      placement: ['left', 'right'],
      size: 'lg',
      class: {
        panel: [
          'max-w-full',
          'md:max-w-2xl'
        ]
      }
    },
    // shape soft & placement
    {
      placement: 'right',
      shape: 'soft',
      class: {
        panel: [
          'rounded-l-lg'
        ]
      }
    },
    {
      placement: 'left',
      shape: 'soft',
      class: {
        panel: [
          'rounded-r-lg'
        ]
      }
    },
    {
      placement: 'top',
      shape: 'soft',
      class: {
        panel: [
          'rounded-b-lg'
        ]
      }
    },
    {
      placement: 'bottom',
      shape: 'soft',
      class: {
        panel: [
          'rounded-t-lg'
        ]
      }
    },
    // shape rounded & placement
    {
      placement: 'right',
      shape: 'rounded',
      class: {
        panel: [
          'rounded-l-2xl'
        ]
      }
    },
    {
      placement: 'left',
      shape: 'rounded',
      class: {
        panel: [
          'rounded-r-2xl'
        ]
      }
    },
    {
      placement: 'top',
      shape: 'rounded',
      class: {
        panel: [
          'rounded-b-2xl'
        ]
      }
    },
    {
      placement: 'bottom',
      shape: 'rounded',
      class: {
        panel: [
          'rounded-t-2xl'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
