import { tv } from 'tailwind-variants'

const drawer = tv({
  slots: {
    container: [
      'vk-drawer__container'
    ],
    backdrop: [
      'vk-drawer__backdrop',
      'fixed',
      'inset-0',
      'data-[state=open]:animate-vk-fade-in',
      'data-[state=closed]:animate-vk-fade-out'
    ],
    dialog: [
      'vk-drawer__dialog',
      'fixed',
      'w-full',
      'h-full',
      'z-50',
      'group/vk-dialog',
      // Keeps Reka's Presence mounted while the panel plays its leave animation.
      'data-[state=closed]:animate-vk-drawer-dialog-leave'
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
      'bg-surface-container-high',
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
    slotContainer:[
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
      'text-on-surface',
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
          'bg-state-scrim'
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
          'bottom-0',
          'group-data-[state=open]/vk-dialog:animate-vk-drawer-in-bottom',
          'group-data-[state=closed]/vk-dialog:animate-vk-drawer-out-bottom'
        ],
        dialog: [
          'bottom-0',
          'left-0'
        ]
      },
      top: {
        panel: [
          'right-0',
          'top-0',
          'group-data-[state=open]/vk-dialog:animate-vk-drawer-in-top',
          'group-data-[state=closed]/vk-dialog:animate-vk-drawer-out-top'
        ],
        dialog: [
          'top-0',
          'left-0'
        ]
      },
      left: {
        panel: [
          'left-0',
          'group-data-[state=open]/vk-dialog:animate-vk-drawer-in-left',
          'group-data-[state=closed]/vk-dialog:animate-vk-drawer-out-left'
        ],
        dialog: [
          'left-0',
          'top-0'
        ]
      },
      right: {
        panel: [
          'right-0',
          'group-data-[state=open]/vk-dialog:animate-vk-drawer-in-right',
          'group-data-[state=closed]/vk-dialog:animate-vk-drawer-out-right'
        ],
        dialog: [
          'right-0',
          'top-0'
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
        dialog: [
          'max-h-[25%]',
          'md:max-h-[14rem]'
        ]
      }
    },
    {
      placement: ['top', 'bottom'],
      size: 'sm',
      class: {
        dialog: [
          'max-h-[50%]',
          'md:max-h-[18rem]'
        ]
      }
    },
    {
      placement: ['top', 'bottom'],
      size: 'md',
      class: {
        dialog: [
          'max-h-[75%]',
          'md:max-h-[22rem]'
        ]
      }
    },
    {
      placement: ['top', 'bottom'],
      size: 'lg',
      class: {
        dialog: [
          'max-h-full',
          'md:max-h-[26rem]'
        ]
      }
    },
    {
      placement: ['left', 'right'],
      size: 'xs',
      class: {
        dialog: [
          'max-w-[25%]',
          'md:max-w-xs'
        ]
      }
    },
    {
      placement: ['left', 'right'],
      size: 'sm',
      class: {
        dialog: [
          'max-w-[50%]',
          'md:max-w-lg'
        ]
      }
    },
    {
      placement: ['left', 'right'],
      size: 'md',
      class: {
        dialog: [
          'max-w-[75%]',
          'md:max-w-xl'
        ]
      }
    },
    {
      placement: ['left', 'right'],
      size: 'lg',
      class: {
        dialog: [
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
    },
    // sizes & shadow
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

export default drawer
export type DrawerSlots = typeof drawer.slots
