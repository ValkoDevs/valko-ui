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
      'bg-white',
      'shadow-lg',
      'shadow-light-300',
      'overflow-auto',
      'whitespace-nowrap',
      'max-h-48',
      'select-none',
      'dark:bg-dark-800',
      'dark:shadow-dark-950',
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
      'dark:text-white',
      'dark:bg-dark-800',
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
          'data-[variant=filled]:hover:bg-primary-500',
          'data-[variant=filled]:data-[selected=true]:bg-primary-500',
          'data-[variant=filled]:data-[selected=true]:dark:bg-primary-500',
          //outlined
          'data-[variant=outlined]:hover:border-primary-500',
          'data-[variant=outlined]:hover:text-primary-500',
          'data-[variant=outlined]:data-[selected=true]:text-primary-500',
          'data-[variant=outlined]:data-[selected=true]:border-primary-500',
          //ghost
          'data-[variant=ghost]:hover:bg-primary-500/[.15]',
          'data-[variant=ghost]:hover:text-primary-500',
          'data-[variant=ghost]:data-[selected=true]:text-primary-500',
          'data-[variant=ghost]:data-[selected=true]:bg-primary-500/[.15]',
          'data-[variant=ghost]:data-[selected=true]:dark:bg-primary-500/[.15]'
        ]
      },
      neutral: {
        item: [
          //filled
          'data-[variant=filled]:data-[selected=true]:bg-light-200',
          'data-[variant=filled]:hover:bg-light-200',
          'data-[variant=filled]:hover:text-dark-600',
          'data-[variant=filled]:data-[selected=true]:text-dark-600',
          //filled dark
          'data-[variant=filled]:data-[selected=true]:dark:bg-dark-700',
          'data-[variant=filled]:hover:dark:bg-dark-700',
          'data-[variant=filled]:hover:dark:text-light-200',
          'data-[variant=filled]:data-[selected=true]:dark:text-light-200',
          //outlined
          'data-[variant=outlined]:hover:border-light-300',
          'data-[variant=outlined]:hover:text-dark-600',
          'data-[variant=outlined]:data-[selected=true]:text-dark-600',
          'data-[variant=outlined]:data-[selected=true]:border-light-300',
          //outlined dark
          'data-[variant=outlined]:hover:dark:border-dark-700',
          'data-[variant=outlined]:hover:dark:text-light-200',
          'data-[variant=outlined]:data-[selected=true]:dark:text-light-200',
          'data-[variant=outlined]:data-[selected=true]:dark:border-dark-700',
          //ghost
          'data-[variant=ghost]:hover:bg-light-300/[.4]',
          'data-[variant=ghost]:hover:text-dark-600',
          'data-[variant=ghost]:data-[selected=true]:text-dark-600',
          'data-[variant=ghost]:data-[selected=true]:bg-light-300/[.4]',
          //ghost dark
          'data-[variant=ghost]:hover:dark:bg-dark-700/[.4]',
          'data-[variant=ghost]:hover:dark:text-light-200',
          'data-[variant=ghost]:data-[selected=true]:dark:text-light-200',
          'data-[variant=ghost]:data-[selected=true]:dark:bg-dark-700/[.4]'
        ]
      },
      success: {
        item: [
          //filled
          'data-[variant=filled]:hover:bg-success-500',
          'data-[variant=filled]:data-[selected=true]:bg-success-500',
          'data-[variant=filled]:data-[selected=true]:dark:bg-success-500',
          //outlined
          'data-[variant=outlined]:hover:border-success-500',
          'data-[variant=outlined]:hover:text-success-500',
          'data-[variant=outlined]:data-[selected=true]:text-success-500',
          'data-[variant=outlined]:data-[selected=true]:border-success-500',
          //ghost
          'data-[variant=ghost]:hover:bg-success-500/[.15]',
          'data-[variant=ghost]:hover:text-success-500',
          'data-[variant=ghost]:data-[selected=true]:text-success-500',
          'data-[variant=ghost]:data-[selected=true]:bg-success-500/[.15]',
          'data-[variant=ghost]:data-[selected=true]:dark:bg-success-500/[.15]'
        ]
      },
      info: {
        item: [
          //filled
          'data-[variant=filled]:hover:bg-info-500',
          'data-[variant=filled]:data-[selected=true]:bg-info-500',
          'data-[variant=filled]:data-[selected=true]:dark:bg-info-500',
          //outlined
          'data-[variant=outlined]:hover:border-info-500',
          'data-[variant=outlined]:hover:text-info-500',
          'data-[variant=outlined]:hover:border-info-500',
          'data-[variant=outlined]:data-[selected=true]:border-info-500',
          //ghost
          'data-[variant=ghost]:hover:bg-info-500/[.15]',
          'data-[variant=ghost]:hover:text-info-500',
          'data-[variant=ghost]:data-[selected=true]:text-info-500',
          'data-[variant=ghost]:data-[selected=true]:bg-info-500/[.15]',
          'data-[variant=ghost]:data-[selected=true]:dark:bg-info-500/[.15]'
        ]
      },
      warning: {
        item: [
          //filled
          'data-[variant=filled]:hover:bg-warning-500',
          'data-[variant=filled]:data-[selected=true]:bg-warning-500',
          'data-[variant=filled]:data-[selected=true]:dark:bg-warning-500',
          //outlined
          'data-[variant=outlined]:hover:border-warning-500',
          'data-[variant=outlined]:hover:text-warning-500',
          'data-[variant=outlined]:data-[selected=true]:text-warning-500',
          'data-[variant=outlined]:data-[selected=true]:border-warning-500',
          //ghost
          'data-[variant=ghost]:hover:bg-warning-500/[.15]',
          'data-[variant=ghost]:hover:text-warning-500',
          'data-[variant=ghost]:data-[selected=true]:text-warning-500',
          'data-[variant=ghost]:data-[selected=true]:bg-warning-500/[.15]',
          'data-[variant=ghost]:data-[selected=true]:dark:bg-warning-500/[.15]'
        ]
      },
      error: {
        item: [
          //filled
          'data-[variant=filled]:hover:bg-error-500',
          'data-[variant=filled]:data-[selected=true]:bg-error-500',
          'data-[variant=filled]:data-[selected=true]:dark:bg-error-500',
          //outlined
          'data-[variant=outlined]:hover:border-error-500',
          'data-[variant=outlined]:hover:text-error-500',
          'data-[variant=outlined]:data-[selected=true]:text-error-500',
          'data-[variant=outlined]:data-[selected=true]:border-error-500',
          //ghost
          'data-[variant=ghost]:hover:bg-error-500/[.15]',
          'data-[variant=ghost]:hover:text-error-500',
          'data-[variant=ghost]:data-[selected=true]:text-error-500',
          'data-[variant=ghost]:data-[selected=true]:bg-error-500/[.15]',
          'data-[variant=ghost]:data-[selected=true]:dark:bg-error-500/[.15]'
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
