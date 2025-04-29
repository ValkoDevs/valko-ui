import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-select__container',
      'w-full'
    ],
    field: [
      'w-full',
      'relative'
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
      'shadow-lg',
      'overflow-auto',
      'whitespace-nowrap',
      'max-h-48',
      'select-none',
      'data-[helper=true]:-mt-6',
      'data-[shape=rounded]:rounded-lg',
      'data-[shape=soft]:rounded-b-lg',
      'data-[shape=square]:rounded-none',
      'data-[variant=ghost]:shadow-none'
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
      'data-[shape=square]:rounded-none',
      'data-[variant=filled]:hover:text-white',
      'data-[variant=filled]:data-[selected=true]:text-white'
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
          'data-[variant=filled]:data-[selected=true]:bg-primary',
          'data-[variant=filled]:data-[selected=true]:text-on-primary',
          //outlined
          'data-[variant=outlined]:hover:border-primary',
          'data-[variant=outlined]:hover:text-primary',
          'data-[variant=outlined]:data-[selected=true]:text-primary',
          'data-[variant=outlined]:data-[selected=true]:border-primary',
          //ghost
          'data-[variant=ghost]:hover:bg-primary',
          'data-[variant=ghost]:hover:text-primary',
          'data-[variant=ghost]:data-[selected=true]:text-primary',
          'data-[variant=ghost]:data-[selected=true]:bg-primary'
        ]
      },
      secondary: {
        item: [
          //filled
          'data-[variant=filled]:data-[selected=true]:bg-secondary',
          'data-[variant=filled]:hover:bg-secondary',
          'data-[variant=filled]:hover:text-secondary',
          'data-[variant=filled]:data-[selected=true]:text-on-secondary',
          //outlined
          'data-[variant=outlined]:hover:border-secondary',
          'data-[variant=outlined]:hover:text-secondary',
          'data-[variant=outlined]:data-[selected=true]:text-secondary',
          'data-[variant=outlined]:data-[selected=true]:border-secondary',
          //ghost
          'data-[variant=ghost]:hover:bg-secondary-container',
          'data-[variant=ghost]:hover:text-on-secondary-container',
          'data-[variant=ghost]:data-[selected=true]:text-secondary',
          'data-[variant=ghost]:data-[selected=true]:bg-light-secondary'
        ]
      },
      positive: {
        item: [
          //filled
          'data-[variant=filled]:hover:bg-positive',
          'data-[variant=filled]:data-[selected=true]:bg-positive',
          //outlined
          'data-[variant=outlined]:hover:border-positive',
          'data-[variant=outlined]:hover:text-positive',
          'data-[variant=outlined]:data-[selected=true]:text-positive',
          'data-[variant=outlined]:data-[selected=true]:border-positive',
          //ghost
          'data-[variant=ghost]:hover:bg-positive',
          'data-[variant=ghost]:hover:text-positive',
          'data-[variant=ghost]:data-[selected=true]:text-positive',
          'data-[variant=ghost]:data-[selected=true]:bg-positive'
        ]
      },
      accent: {
        item: [
          //filled
          'data-[variant=filled]:hover:bg-accent',
          'data-[variant=filled]:data-[selected=true]:bg-accent',
          //outlined
          'data-[variant=outlined]:hover:border-accent',
          'data-[variant=outlined]:hover:text-accent',
          'data-[variant=outlined]:hover:border-accent',
          'data-[variant=outlined]:data-[selected=true]:border-accent',
          //ghost
          'data-[variant=ghost]:hover:bg-accent',
          'data-[variant=ghost]:hover:text-accent',
          'data-[variant=ghost]:data-[selected=true]:text-accent',
          'data-[variant=ghost]:data-[selected=true]:bg-accent'
        ]
      },
      warning: {
        item: [
          //filled
          'data-[variant=filled]:hover:bg-warning',
          'data-[variant=filled]:data-[selected=true]:bg-warning',
          //outlined
          'data-[variant=outlined]:hover:border-warning',
          'data-[variant=outlined]:hover:text-warning',
          'data-[variant=outlined]:data-[selected=true]:text-warning',
          'data-[variant=outlined]:data-[selected=true]:border-warning',
          //ghost
          'data-[variant=ghost]:hover:bg-warning',
          'data-[variant=ghost]:hover:text-warning',
          'data-[variant=ghost]:data-[selected=true]:text-warning',
          'data-[variant=ghost]:data-[selected=true]:bg-warning'
        ]
      },
      negative: {
        item: [
          //filled
          'data-[variant=filled]:hover:bg-negative',
          'data-[variant=filled]:data-[selected=true]:bg-negative',
          //outlined
          'data-[variant=outlined]:hover:border-negative',
          'data-[variant=outlined]:hover:text-negative',
          'data-[variant=outlined]:data-[selected=true]:text-negative',
          'data-[variant=outlined]:data-[selected=true]:border-negative',
          //ghost
          'data-[variant=ghost]:hover:bg-negative',
          'data-[variant=ghost]:hover:text-negative',
          'data-[variant=ghost]:data-[selected=true]:text-negative',
          'data-[variant=ghost]:data-[selected=true]:bg-negative'
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
}) as unknown as ReturnType<TV>
