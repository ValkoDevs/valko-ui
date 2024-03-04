import { tv } from 'tailwind-variants'
import { SelectProps } from './interfaces'
import { computed } from 'vue'

const useStyle = (props: SelectProps) => {
  const input = tv({
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
        'focus:ring-0',
        'placeholder-shown:truncate'
      ],
      dropdown: [
        'absolute',
        'w-full',
        'z-10',
        'mt-1',
        'p-2',
        'bg-white',
        'shadow-lg',
        'shadow-light-4',
        'overflow-auto',
        'whitespace-nowrap',
        'max-h-48',
        'select-none',
        'dark:bg-dark-3',
        'dark:shadow-dark-5',
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
        'dark:bg-dark-3',
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
        'data-[open=true]:rotate-180'
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
        secondary: {
          item: [
            //filled
            'data-[variant=filled]:hover:bg-secondary-500',
            'data-[variant=filled]:data-[selected=true]:bg-secondary-500',
            'data-[variant=filled]:data-[selected=true]:dark:bg-secondary-500',
            //outlined
            'data-[variant=outlined]:hover:border-secondary-500',
            'data-[variant=outlined]:hover:text-secondary-500',
            'data-[variant=outlined]:data-[selected=true]:text-secondary-500',
            'data-[variant=outlined]:data-[selected=true]:border-secondary-500',
            //ghost
            'data-[variant=ghost]:hover:bg-secondary-500/[.15]',
            'data-[variant=ghost]:hover:text-secondary-500',
            'data-[variant=ghost]:data-[selected=true]:text-secondary-500',
            'data-[variant=ghost]:data-[selected=true]:bg-secondary-500/[.15]',
            'data-[variant=ghost]:data-[selected=true]:dark:bg-secondary-500/[.15]'
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
        },
        light: {
          item: [
            //filled
            'data-[variant=filled]:hover:bg-light-1',
            'data-[variant=filled]:data-[selected=true]:bg-light-1',
            'data-[variant=filled]:data-[selected=true]:dark:bg-light-1',
            //outlined
            'data-[variant=outlined]:hover:border-light-1',
            'data-[variant=outlined]:hover:text-light-1',
            'data-[variant=outlined]:data-[selected=true]:text-light-1',
            'data-[variant=outlined]:data-[selected=true]:border-light-1',
            //ghost
            'data-[variant=ghost]:hover:bg-light-1/[.15]',
            'data-[variant=ghost]:hover:text-light-1',
            'data-[variant=ghost]:data-[selected=true]:text-light-1',
            'data-[variant=ghost]:data-[selected=true]:bg-light-1/[.15]',
            'data-[variant=ghost]:data-[selected=true]:dark:bg-light-1/[.15]'
          ]
        },
        dark: {
          item: [
            //filled
            'data-[variant=filled]:hover:bg-dark-5',
            'data-[variant=filled]:data-[selected=true]:bg-dark-5',
            'data-[variant=filled]:data-[selected=true]:dark:bg-dark-5',
            //outlined
            'data-[variant=outlined]:hover:border-dark-5',
            'data-[variant=outlined]:hover:text-dark-5',
            'data-[variant=outlined]:data-[selected=true]:text-dark-5',
            'data-[variant=outlined]:data-[selected=true]:border-dark-5',
            //ghost
            'data-[variant=ghost]:hover:bg-dark-5/[.15]',
            'data-[variant=ghost]:hover:text-dark-5',
            'data-[variant=ghost]:data-[selected=true]:text-dark-5',
            'data-[variant=ghost]:data-[selected=true]:bg-dark-5/[.15]',
            'data-[variant=ghost]:data-[selected=true]:dark:bg-dark-5/[.15]'
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

  return computed(() => {
    const slots = input({
      size: props.size,
      color: props.color
    })

    return {
      select: slots.select(),
      dropdown: slots.dropdown(),
      item: slots.item(),
      container: slots.container(),
      field: slots.field(),
      icon: slots.icon()
    }
  })
}

export default useStyle
