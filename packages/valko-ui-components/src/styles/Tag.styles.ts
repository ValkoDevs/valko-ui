import { tv } from 'tailwind-variants'

const tag = tv({
  slots: {
    container: [
      'vk-tag',
      'w-fit',
      'flex',
      'justify-between',
      'items-center',
      'shadow-el1'
    ],
    icons: [
      'mx-1'
    ],
    content: [
      'mx-1',
      'font-semibold',
      'tracking-wider'
    ],
    closeButton: [
      'vk-tag__closable',
      'ml-1',
      'flex',
      'items-center'
    ],
    contentContainer: [
      'w-full',
      'flex',
      'gap-1',
      'justify-center',
      'items-center'
    ],
    closeIcon: [
      'vk-tag__close-icon'
    ]
  },
  variants: {
    variant: {
      filled: {},
      ghost: {
        container: [
          'vk-tag__ghost'
        ]
      },
      outlined: {
        container: [
          'border-2'
        ]
      },
      gradient: {
        container: [
          'bg-gradient-to-br'
        ]
      }
    },
    shape: {
      rounded: {
        container: [
          'rounded-full'
        ]
      },
      square: {
        container: [
          'rounded-none'
        ]
      },
      soft: {
        container: [
          'rounded-lg'
        ]
      }
    },
    size: {
      xs: {
        container: [
          'text-[0.6321875rem]',
          'leading-[0.6321875rem]',
          'p-[0.180625rem]'
        ]
      },
      sm: {
        container: [
          'text-[0.74375rem]',
          'leading-[0.74375rem]',
          'p-[0.2125rem]'
        ]
      },
      md: {
        container: [
          'text-sm',
          'leading-[0.875rem]',
          'p-1'
        ]
      },
      lg: {
        container: [
          'text-[1.00625rem]',
          'leading-[1.00625rem]',
          'p-[0.2875rem]'
        ]
      }
    },
    color: {
      primary: {},
      secondary: {},
      positive: {},
      accent: {},
      warning: {},
      negative: {},
      surface: {}
    },
    disabled: {
      true: {}
    },
    isPressable: {
      true: {
        container: [
          'cursor-pointer'
        ]
      }
    }
  },
  compoundVariants: [
    //filled & color
    {
      variant: 'filled',
      color: 'primary',
      disabled: false,
      class: {
        container: [
          'bg-primary',
          'text-on-primary'
        ],
        closeIcon: [
          'text-on-primary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      disabled: false,
      class: {
        container: [
          'bg-secondary',
          'text-on-secondary'
        ],
        closeIcon: [
          'text-on-secondary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'positive',
      disabled: false,
      class: {
        container: [
          'bg-positive',
          'text-on-positive'
        ],
        closeIcon: [
          'text-on-positive'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'accent',
      disabled: false,
      class: {
        container: [
          'bg-accent',
          'text-on-accent'
        ],
        closeIcon: [
          'text-on-accent'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      disabled: false,
      class: {
        container: [
          'bg-warning',
          'text-on-warning'
        ],
        closeIcon: [
          'text-on-warning'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'negative',
      disabled: false,
      class: {
        container: [
          'bg-negative',
          'text-on-negative'
        ],
        closeIcon: [
          'text-on-negative'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'surface',
      disabled: false,
      class: {
        container: [
          'bg-surface-container-highest',
          'text-on-surface'
        ],
        closeIcon: [
          'text-on-surface'
        ]
      }
    },
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      disabled: false,
      class: {
        container: [
          'text-on-primary-container',
          'bg-primary-container'
        ],
        closeIcon: [
          'text-on-primary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      disabled: false,
      class: {
        container: [
          'text-on-secondary-container',
          'bg-secondary-container'
        ],
        closeIcon: [
          'text-on-secondary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'positive',
      disabled: false,
      class: {
        container: [
          'text-on-positive-container',
          'bg-positive-container'
        ],
        closeIcon: [
          'text-on-positive-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'accent',
      disabled: false,
      class: {
        container: [
          'text-on-accent-container',
          'bg-accent-container'
        ],
        closeIcon: [
          'text-on-accent-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      disabled: false,
      class: {
        container: [
          'text-on-warning-container',
          'bg-warning-container'
        ],
        closeIcon: [
          'text-on-warning-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'negative',
      disabled: false,
      class: {
        container: [
          'text-on-negative-container',
          'bg-negative-container'
        ],
        closeIcon: [
          'text-on-negative-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'surface',
      disabled: false,
      class: {
        container: [
          'text-on-surface-variant',
          'bg-surface-container-highest/[.5]'
        ],
        closeIcon: [
          'text-on-surface-variant'
        ]
      }
    },
    // outlined & color
    {
      variant: 'outlined',
      color: 'primary',
      disabled: false,
      class: {
        container: [
          'text-primary',
          'border-primary'
        ],
        closeIcon: [
          'text-primary'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'secondary',
      disabled: false,
      class: {
        container: [
          'border-secondary',
          'text-secondary'
        ],
        closeIcon: [
          'text-secondary'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'positive',
      disabled: false,
      class: {
        container: [
          'text-positive',
          'border-positive'
        ],
        closeIcon: [
          'text-positive'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'accent',
      disabled: false,
      class: {
        container: [
          'text-accent',
          'border-accent'
        ],
        closeIcon: [
          'text-accent'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      disabled: false,
      class: {
        container: [
          'text-warning',
          'border-warning'
        ],
        closeIcon: [
          'text-warning'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'negative',
      disabled: false,
      class: {
        container: [
          'text-negative',
          'border-negative'
        ],
        closeIcon: [
          'text-negative'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'surface',
      disabled: false,
      class: {
        container: [
          'border-outlined',
          'text-on-surface-variant'
        ],
        closeIcon: [
          'text-on-surface-variant'
        ]
      }
    },
    // gradient & color
    {
      variant: 'gradient',
      color: 'primary',
      class: {
        container: [
          'from-primary-gradient-start',
          'to-primary-gradient-end',
          'text-on-primary'
        ],
        closeIcon: [
          'text-on-primary'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'secondary',
      class: {
        container: [
          'from-secondary-gradient-start',
          'to-secondary-gradient-end',
          'text-on-secondary'
        ],
        closeIcon: [
          'text-on-secondary'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'positive',
      class: {
        container: [
          'from-positive-gradient-start',
          'to-positive-gradient-end',
          'text-on-positive'
        ],
        closeIcon: [
          'text-on-positive'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'accent',
      class: {
        container: [
          'from-accent-gradient-start',
          'to-accent-gradient-end',
          'text-on-accent'
        ],
        closeIcon: [
          'text-on-accent'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'warning',
      class: {
        container: [
          'from-warning-gradient-start',
          'to-warning-gradient-end',
          'text-on-warning'
        ],
        closeIcon: [
          'text-on-warning'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'negative',
      class: {
        container: [
          'from-negative-gradient-start',
          'to-negative-gradient-end',
          'text-on-negative'
        ],
        closeIcon: [
          'text-on-negative'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'surface',
      class: {
        container: [
          'from-surface-container',
          'to-surface-container-highest',
          'text-on-surface'
        ],
        closeIcon: [
          'text-on-surface'
        ]
      }
    },
    // disabled & variant
    {
      variant: 'filled',
      disabled: true,
      class: {
        container: [
          'bg-disabled',
          'opacity-50',
          'cursor-not-allowed'
        ]
      }
    },
    {
      variant: 'ghost',
      disabled: true,
      class: {
        container: [
          'text-on-disabled',
          'hover:bg-transparent',
          'active:bg-transparent',
          'opacity-50',
          'cursor-not-allowed'
        ]
      }
    },
    {
      variant: 'outlined',
      disabled: true,
      class: {
        container: [
          'text-on-disabled',
          'hover:bg-transparent',
          'active:bg-transparent',
          'opacity-50',
          'border-disabled',
          'cursor-not-allowed'
        ]
      }
    },
    // disabled & closable
    {
      disabled: true,
      class: {
        closeButton: [
          'cursor-not-allowed'
        ]
      }
    },
    // outlined & size
    {
      variant: 'outlined',
      size: 'xs',
      class: {
        container: [
          'p-[calc(0.180625rem_-_2px)]'
        ]
      }
    },
    {
      variant: 'outlined',
      size: 'sm',
      class: {
        container: [
          'p-[calc(0.2125rem_-_2px)]'
        ]
      }
    },
    {
      variant: 'outlined',
      size: 'md',
      class: {
        container: [
          'p-[calc(0.25rem_-_2px)]'
        ]
      }
    },
    {
      variant: 'outlined',
      size: 'lg',
      class: {
        container: [
          'p-[calc(0.2875rem_-_2px)]'
        ]
      }
    },
    // isPressable & filled
    {
      variant: 'filled',
      color: 'primary',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-primary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-secondary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'positive',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-positive'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'accent',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-accent'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-warning'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'negative',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-negative'
        ]
      }
    },
    // isPressable & ghost
    {
      variant: 'ghost',
      color: 'primary',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-primary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-secondary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'positive',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-positive-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'accent',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-accent-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-warning-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'negative',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-negative-container'
        ]
      }
    },
    // isPressable & outlined
    {
      variant: 'outlined',
      color: 'primary',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-primary'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'secondary',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-secondary'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'positive',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-positive'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'accent',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-accent'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-warning'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'negative',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-negative'
        ]
      }
    }
  ]
})

export default tag
export type TagSlots = typeof tag.slots
