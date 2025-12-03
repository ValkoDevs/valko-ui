import { tv } from 'tailwind-variants'

const select = tv({
  slots: {
    container: [
      'vk-select__container',
      'w-full',
      'bg-inherit'
    ],
    field: [
      'w-full',
      'relative',
      'bg-inherit'
    ],
    select: [
      'vk-select__field',
      'w-full',
      'relative',
      'outline-none',
      'focus:ring-0'
    ],
    dropdown: [
      'vk-select__dropdown',
      'absolute',
      'w-full',
      'z-40',
      'mt-1',
      'p-2',
      'bg-surface-container',
      'shadow-el2',
      'overflow-auto',
      'whitespace-nowrap',
      'max-h-48',
      'select-none',
      'data-[helper=true]:-mt-6',
      'data-[shape=rounded]:rounded-lg',
      'data-[shape=soft]:rounded-b-lg',
      'data-[shape=square]:rounded-none'
    ],
    item: [
      'vk-select__item',
      'p-2',
      'mb-1',
      'border-2',
      'border-transparent',
      'cursor-pointer',
      'text-on-surface-container',
      'data-[shape=rounded]:rounded-full',
      'data-[shape=soft]:rounded-lg',
      'data-[shape=square]:rounded-none'
    ],
    chevronIcon: [
      'absolute',
      'right-2',
      'top-1/2',
      '-translate-y-1/2',
      'transition-transform',
      'duration-200',
      'ease-out',
      'data-[open=true]:rotate-180',
      'cursor-pointer'
    ],
    rightIcon: [],
    clearIcon: []
  },
  variants: {
    color: {
      primary: {
        item: [
          //filled
          'data-[variant=filled]:hover:bg-primary',
          'data-[variant=filled]:hover:text-on-primary',
          'data-[variant=filled]:data-[selected=true]:bg-primary',
          'data-[variant=filled]:data-[selected=true]:text-on-primary',
          'data-[variant=filled]:data-[highlighted=true]:bg-primary',
          'data-[variant=filled]:data-[highlighted=true]:text-on-primary',
          //outlined
          'data-[variant=outlined]:hover:border-primary',
          'data-[variant=outlined]:hover:text-primary',
          'data-[variant=outlined]:data-[selected=true]:text-primary',
          'data-[variant=outlined]:data-[selected=true]:border-primary',
          'data-[variant=outlined]:data-[highlighted=true]:text-primary',
          'data-[variant=outlined]:data-[highlighted=true]:border-primary',
          //ghost
          'data-[variant=ghost]:hover:bg-primary-container',
          'data-[variant=ghost]:hover:text-on-primary-container',
          'data-[variant=ghost]:data-[selected=true]:text-on-primary-container',
          'data-[variant=ghost]:data-[selected=true]:bg-primary-container',
          'data-[variant=ghost]:data-[highlighted=true]:bg-primary-container',
          'data-[variant=ghost]:data-[highlighted=true]:text-on-primary-container'
        ]
      },
      secondary: {
        item: [
          //filled
          'data-[variant=filled]:hover:bg-secondary',
          'data-[variant=filled]:hover:text-on-secondary',
          'data-[variant=filled]:data-[selected=true]:bg-secondary',
          'data-[variant=filled]:data-[selected=true]:text-on-secondary',
          'data-[variant=filled]:data-[highlighted=true]:bg-secondary',
          'data-[variant=filled]:data-[highlighted=true]:text-on-secondary',
          //outlined
          'data-[variant=outlined]:hover:border-secondary',
          'data-[variant=outlined]:hover:text-secondary',
          'data-[variant=outlined]:data-[selected=true]:text-secondary',
          'data-[variant=outlined]:data-[selected=true]:border-secondary',
          'data-[variant=outlined]:data-[highlighted=true]:text-secondary',
          'data-[variant=outlined]:data-[highlighted=true]:border-secondary',
          //ghost
          'data-[variant=ghost]:hover:bg-secondary-container',
          'data-[variant=ghost]:hover:text-on-secondary-container',
          'data-[variant=ghost]:data-[selected=true]:text-on-secondary-container',
          'data-[variant=ghost]:data-[selected=true]:bg-secondary-container',
          'data-[variant=ghost]:data-[highlighted=true]:text-on-secondary-container',
          'data-[variant=ghost]:data-[highlighted=true]:bg-secondary-container'
        ]
      },
      positive: {
        item: [
          //filled
          'data-[variant=filled]:hover:bg-positive',
          'data-[variant=filled]:hover:text-on-positive',
          'data-[variant=filled]:data-[selected=true]:bg-positive',
          'data-[variant=filled]:data-[selected=true]:text-on-positive',
          'data-[variant=filled]:data-[highlighted=true]:bg-positive',
          'data-[variant=filled]:data-[highlighted=true]:text-on-positive',
          //outlined
          'data-[variant=outlined]:hover:border-positive',
          'data-[variant=outlined]:hover:text-positive',
          'data-[variant=outlined]:data-[selected=true]:text-positive',
          'data-[variant=outlined]:data-[selected=true]:border-positive',
          'data-[variant=outlined]:data-[highlighted=true]:text-positive',
          'data-[variant=outlined]:data-[highlighted=true]:border-positive',
          //ghost
          'data-[variant=ghost]:hover:bg-positive-container',
          'data-[variant=ghost]:hover:text-on-positive-container',
          'data-[variant=ghost]:data-[selected=true]:text-on-positive-container',
          'data-[variant=ghost]:data-[selected=true]:bg-positive-container',
          'data-[variant=ghost]:data-[highlighted=true]:text-on-positive-container',
          'data-[variant=ghost]:data-[highlighted=true]:bg-positive-container'
        ]
      },
      accent: {
        item: [
          //filled
          'data-[variant=filled]:hover:bg-accent',
          'data-[variant=filled]:hover:text-on-accent',
          'data-[variant=filled]:data-[selected=true]:bg-accent',
          'data-[variant=filled]:data-[selected=true]:text-on-accent',
          'data-[variant=filled]:data-[highlighted=true]:bg-accent',
          'data-[variant=filled]:data-[highlighted=true]:text-on-accent',
          //outlined
          'data-[variant=outlined]:hover:border-accent',
          'data-[variant=outlined]:hover:text-accent',
          'data-[variant=outlined]:data-[selected=true]:text-accent',
          'data-[variant=outlined]:data-[selected=true]:border-accent',
          'data-[variant=outlined]:data-[highlighted=true]:text-accent',
          'data-[variant=outlined]:data-[highlighted=true]:border-accent',
          //ghost
          'data-[variant=ghost]:hover:bg-accent-container',
          'data-[variant=ghost]:hover:text-on-accent-container',
          'data-[variant=ghost]:data-[selected=true]:text-on-accent-container',
          'data-[variant=ghost]:data-[selected=true]:bg-accent-container',
          'data-[variant=ghost]:data-[highlighted=true]:text-on-accent-container',
          'data-[variant=ghost]:data-[highlighted=true]:bg-accent-container'
        ]
      },
      warning: {
        item: [
          //filled
          'data-[variant=filled]:hover:bg-warning',
          'data-[variant=filled]:hover:text-on-warning',
          'data-[variant=filled]:data-[selected=true]:bg-warning',
          'data-[variant=filled]:data-[selected=true]:text-on-warning',
          'data-[variant=filled]:data-[highlighted=true]:bg-warning',
          'data-[variant=filled]:data-[highlighted=true]:text-on-warning',
          //outlined
          'data-[variant=outlined]:hover:border-warning',
          'data-[variant=outlined]:hover:text-warning',
          'data-[variant=outlined]:data-[selected=true]:text-warning',
          'data-[variant=outlined]:data-[selected=true]:border-warning',
          'data-[variant=outlined]:data-[highlighted=true]:text-warning',
          'data-[variant=outlined]:data-[highlighted=true]:border-warning',
          //ghost
          'data-[variant=ghost]:hover:bg-warning-container',
          'data-[variant=ghost]:hover:text-on-warning-container',
          'data-[variant=ghost]:data-[selected=true]:text-on-warning-container',
          'data-[variant=ghost]:data-[selected=true]:bg-warning-container',
          'data-[variant=ghost]:data-[highlighted=true]:text-on-warning-container',
          'data-[variant=ghost]:data-[highlighted=true]:bg-warning-container'
        ]
      },
      negative: {
        item: [
          //filled
          'data-[variant=filled]:hover:bg-negative',
          'data-[variant=filled]:hover:text-on-negative',
          'data-[variant=filled]:data-[selected=true]:bg-negative',
          'data-[variant=filled]:data-[selected=true]:text-on-negative',
          'data-[variant=filled]:data-[highlighted=true]:bg-negative',
          'data-[variant=filled]:data-[highlighted=true]:text-on-negative',
          //outlined
          'data-[variant=outlined]:hover:border-negative',
          'data-[variant=outlined]:hover:text-negative',
          'data-[variant=outlined]:data-[selected=true]:text-negative',
          'data-[variant=outlined]:data-[selected=true]:border-negative',
          'data-[variant=outlined]:data-[highlighted=true]:text-negative',
          'data-[variant=outlined]:data-[highlighted=true]:border-negative',
          //ghost
          'data-[variant=ghost]:hover:bg-negative-container',
          'data-[variant=ghost]:hover:text-on-negative-container',
          'data-[variant=ghost]:data-[selected=true]:text-on-negative-container',
          'data-[variant=ghost]:data-[selected=true]:bg-negative-container',
          'data-[variant=ghost]:data-[highlighted=true]:text-on-negative-container',
          'data-[variant=ghost]:data-[highlighted=true]:bg-negative-container'
        ]
      }
    },
    size: {
      xs: {
        item: [
          'text-xs'
        ],
        chevronIcon: [
          'text-base'
        ]
      },
      sm: {
        item: [
          'text-sm'
        ],
        chevronIcon: [
          'text-xl'
        ]
      },
      md: {
        item: [
          'text-md'
        ],
        chevronIcon: [
          'text-2xl'
        ]
      },
      lg: {
        item: [
          'text-lg'
        ],
        chevronIcon: [
          'text-[28px]'
        ]
      }
    }
  },
  compoundVariants: [
    {
      shape: ['soft', 'square'],
      size: 'xs',
      class: {
        rightIcon: [
          'right-7'
        ],
        clearIcon: [
          'right-7',
          'data-[right-icon=true]:right-13'
        ]
      }
    },
    {
      shape: ['soft', 'square'],
      size: 'sm',
      class: {
        rightIcon: [
          'right-7.5'
        ],
        clearIcon: [
          'right-7.5',
          'data-[right-icon=true]:right-14.5'
        ]
      }
    },
    {
      shape: ['soft', 'square'],
      size: 'md',
      class: {
        rightIcon: [
          'right-8'
        ],
        clearIcon: [
          'right-8',
          'data-[right-icon=true]:right-16'
        ]
      }
    },
    {
      shape: ['soft', 'square'],
      size: 'lg',
      class: {
        rightIcon: [
          'right-8.5'
        ],
        clearIcon: [
          'right-8.5',
          'data-[right-icon=true]:right-17.5'
        ]
      }
    },
    {
      shape: 'rounded',
      size: 'xs',
      class: {
        rightIcon: [
          'right-9'
        ],
        clearIcon: [
          'right-9',
          'data-[right-icon=true]:right-15'
        ]
      }
    },
    {
      shape: 'rounded',
      size: 'sm',
      class: {
        rightIcon: [
          'right-9.5'
        ],
        clearIcon: [
          'right-9.5',
          'data-[right-icon=true]:right-16.5'
        ]
      }
    },
    {
      shape: 'rounded',
      size: 'md',
      class: {
        rightIcon: [
          'right-10'
        ],
        clearIcon: [
          'right-10',
          'data-[right-icon=true]:right-18'
        ]
      }
    },
    {
      shape: 'rounded',
      size: 'lg',
      class: {
        rightIcon: [
          'right-10.5'
        ],
        clearIcon: [
          'right-10.5',
          'data-[right-icon=true]:right-19.5'
        ]
      }
    }
  ]
})

export default select
export type SelectSlots = typeof select.slots
