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
    dropdown: [
      'vk-select__dropdown',
      'z-40',
      'p-2',
      'origin-top',
      'bg-surface-container',
      'shadow-el2',
      'whitespace-nowrap',
      'max-h-48',
      'select-none',
      'w-(--reka-select-trigger-width)',
      'data-[helper=true]:-mt-6',
      'data-[shape=rounded]:rounded-lg',
      'data-[shape=soft]:rounded-b-lg',
      'data-[shape=square]:rounded-none',
      'data-[state=open]:animate-vk-select-in',
      'data-[state=closed]:animate-vk-select-out'
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
    icon: [
      'block',
      'transition-transform',
      'duration-200',
      'ease-out',
      'data-[open=true]:rotate-180',
      'cursor-pointer'
    ]
  },
  variants: {
    color: {
      primary: {
        item: [
          //filled
          'data-[variant=filled]:hover:bg-primary',
          'data-[variant=filled]:hover:text-on-primary',
          'data-[variant=filled]:data-[state=checked]:bg-primary',
          'data-[variant=filled]:data-[state=checked]:text-on-primary',
          'data-[variant=filled]:data-[highlighted]:bg-primary',
          'data-[variant=filled]:data-[highlighted]:text-on-primary',
          //outlined
          'data-[variant=outlined]:hover:border-primary',
          'data-[variant=outlined]:hover:text-primary',
          'data-[variant=outlined]:data-[state=checked]:text-primary',
          'data-[variant=outlined]:data-[state=checked]:border-primary',
          'data-[variant=outlined]:data-[highlighted]:text-primary',
          'data-[variant=outlined]:data-[highlighted]:border-primary',
          //ghost
          'data-[variant=ghost]:hover:bg-primary-container',
          'data-[variant=ghost]:hover:text-on-primary-container',
          'data-[variant=ghost]:data-[state=checked]:text-on-primary-container',
          'data-[variant=ghost]:data-[state=checked]:bg-primary-container',
          'data-[variant=ghost]:data-[highlighted]:bg-primary-container',
          'data-[variant=ghost]:data-[highlighted]:text-on-primary-container'
        ]
      },
      secondary: {
        item: [
          //filled
          'data-[variant=filled]:hover:bg-secondary',
          'data-[variant=filled]:hover:text-on-secondary',
          'data-[variant=filled]:data-[state=checked]:bg-secondary',
          'data-[variant=filled]:data-[state=checked]:text-on-secondary',
          'data-[variant=filled]:data-[highlighted]:bg-secondary',
          'data-[variant=filled]:data-[highlighted]:text-on-secondary',
          //outlined
          'data-[variant=outlined]:hover:border-secondary',
          'data-[variant=outlined]:hover:text-secondary',
          'data-[variant=outlined]:data-[state=checked]:text-secondary',
          'data-[variant=outlined]:data-[state=checked]:border-secondary',
          'data-[variant=outlined]:data-[highlighted]:text-secondary',
          'data-[variant=outlined]:data-[highlighted]:border-secondary',
          //ghost
          'data-[variant=ghost]:hover:bg-secondary-container',
          'data-[variant=ghost]:hover:text-on-secondary-container',
          'data-[variant=ghost]:data-[state=checked]:text-on-secondary-container',
          'data-[variant=ghost]:data-[state=checked]:bg-secondary-container',
          'data-[variant=ghost]:data-[highlighted]:text-on-secondary-container',
          'data-[variant=ghost]:data-[highlighted]:bg-secondary-container'
        ]
      },
      positive: {
        item: [
          //filled
          'data-[variant=filled]:hover:bg-positive',
          'data-[variant=filled]:hover:text-on-positive',
          'data-[variant=filled]:data-[state=checked]:bg-positive',
          'data-[variant=filled]:data-[state=checked]:text-on-positive',
          'data-[variant=filled]:data-[highlighted]:bg-positive',
          'data-[variant=filled]:data-[highlighted]:text-on-positive',
          //outlined
          'data-[variant=outlined]:hover:border-positive',
          'data-[variant=outlined]:hover:text-positive',
          'data-[variant=outlined]:data-[state=checked]:text-positive',
          'data-[variant=outlined]:data-[state=checked]:border-positive',
          'data-[variant=outlined]:data-[highlighted]:text-positive',
          'data-[variant=outlined]:data-[highlighted]:border-positive',
          //ghost
          'data-[variant=ghost]:hover:bg-positive-container',
          'data-[variant=ghost]:hover:text-on-positive-container',
          'data-[variant=ghost]:data-[state=checked]:text-on-positive-container',
          'data-[variant=ghost]:data-[state=checked]:bg-positive-container',
          'data-[variant=ghost]:data-[highlighted]:text-on-positive-container',
          'data-[variant=ghost]:data-[highlighted]:bg-positive-container'
        ]
      },
      accent: {
        item: [
          //filled
          'data-[variant=filled]:hover:bg-accent',
          'data-[variant=filled]:hover:text-on-accent',
          'data-[variant=filled]:data-[state=checked]:bg-accent',
          'data-[variant=filled]:data-[state=checked]:text-on-accent',
          'data-[variant=filled]:data-[highlighted]:bg-accent',
          'data-[variant=filled]:data-[highlighted]:text-on-accent',
          //outlined
          'data-[variant=outlined]:hover:border-accent',
          'data-[variant=outlined]:hover:text-accent',
          'data-[variant=outlined]:data-[state=checked]:text-accent',
          'data-[variant=outlined]:data-[state=checked]:border-accent',
          'data-[variant=outlined]:data-[highlighted]:text-accent',
          'data-[variant=outlined]:data-[highlighted]:border-accent',
          //ghost
          'data-[variant=ghost]:hover:bg-accent-container',
          'data-[variant=ghost]:hover:text-on-accent-container',
          'data-[variant=ghost]:data-[state=checked]:text-on-accent-container',
          'data-[variant=ghost]:data-[state=checked]:bg-accent-container',
          'data-[variant=ghost]:data-[highlighted]:text-on-accent-container',
          'data-[variant=ghost]:data-[highlighted]:bg-accent-container'
        ]
      },
      warning: {
        item: [
          //filled
          'data-[variant=filled]:hover:bg-warning',
          'data-[variant=filled]:hover:text-on-warning',
          'data-[variant=filled]:data-[state=checked]:bg-warning',
          'data-[variant=filled]:data-[state=checked]:text-on-warning',
          'data-[variant=filled]:data-[highlighted]:bg-warning',
          'data-[variant=filled]:data-[highlighted]:text-on-warning',
          //outlined
          'data-[variant=outlined]:hover:border-warning',
          'data-[variant=outlined]:hover:text-warning',
          'data-[variant=outlined]:data-[state=checked]:text-warning',
          'data-[variant=outlined]:data-[state=checked]:border-warning',
          'data-[variant=outlined]:data-[highlighted]:text-warning',
          'data-[variant=outlined]:data-[highlighted]:border-warning',
          //ghost
          'data-[variant=ghost]:hover:bg-warning-container',
          'data-[variant=ghost]:hover:text-on-warning-container',
          'data-[variant=ghost]:data-[state=checked]:text-on-warning-container',
          'data-[variant=ghost]:data-[state=checked]:bg-warning-container',
          'data-[variant=ghost]:data-[highlighted]:text-on-warning-container',
          'data-[variant=ghost]:data-[highlighted]:bg-warning-container'
        ]
      },
      negative: {
        item: [
          //filled
          'data-[variant=filled]:hover:bg-negative',
          'data-[variant=filled]:hover:text-on-negative',
          'data-[variant=filled]:data-[state=checked]:bg-negative',
          'data-[variant=filled]:data-[state=checked]:text-on-negative',
          'data-[variant=filled]:data-[highlighted]:bg-negative',
          'data-[variant=filled]:data-[highlighted]:text-on-negative',
          //outlined
          'data-[variant=outlined]:hover:border-negative',
          'data-[variant=outlined]:hover:text-negative',
          'data-[variant=outlined]:data-[state=checked]:text-negative',
          'data-[variant=outlined]:data-[state=checked]:border-negative',
          'data-[variant=outlined]:data-[highlighted]:text-negative',
          'data-[variant=outlined]:data-[highlighted]:border-negative',
          //ghost
          'data-[variant=ghost]:hover:bg-negative-container',
          'data-[variant=ghost]:hover:text-on-negative-container',
          'data-[variant=ghost]:data-[state=checked]:text-on-negative-container',
          'data-[variant=ghost]:data-[state=checked]:bg-negative-container',
          'data-[variant=ghost]:data-[highlighted]:text-on-negative-container',
          'data-[variant=ghost]:data-[highlighted]:bg-negative-container'
        ]
      }
    },
    size: {
      xs: {
        item: [
          'text-xs'
        ]
      },
      sm: {
        item: [
          'text-sm'
        ]
      },
      md: {
        item: [
          'text-md'
        ]
      },
      lg: {
        item: [
          'text-lg'
        ]
      }
    }
  }
})

export default select
export type SelectSlots = typeof select.slots
