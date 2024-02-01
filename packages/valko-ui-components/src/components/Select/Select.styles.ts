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
        'overflow-auto',
        'whitespace-nowrap',
        'max-h-48',
        'select-none',
        'dark:bg-dark-3',
        'data-[helper=true]:-mt-6',
        'data-[shape=rounded]:rounded-lg',
        'data-[shape=soft]:rounded-b-lg',
        'data-[shape=square]:rounded-none'
      ],
      item: [
        'vk-select__item',
        'p-2',
        'mb-1',
        'cursor-pointer',
        'hover:bg-gray-100',
        'dark:text-white',
        'dark:bg-dark-3',
        'dark:hover:bg-dark-1',
        'data-[shape=rounded]:rounded-full',
        'data-[shape=soft]:rounded-lg',
        'data-[shape=square]:rounded-none'
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
            'data-[selected=true]:text-primary-500',
            'data-[selected=true]:dark:text-primary-500',
            'data-[selected=true]:bg-primary-500/[.15]',
            'data-[selected=true]:dark:bg-primary-500/[.15]'
          ]
        },
        secondary: {
          item: [
            'data-[selected=true]:text-secondary-500',
            'data-[selected=true]:dark:text-secondary-500',
            'data-[selected=true]:bg-secondary-500/[.15]',
            'data-[selected=true]:dark:bg-secondary-500/[.15]'
          ]
        },
        success: {
          item: [
            'data-[selected=true]:text-success-500',
            'data-[selected=true]:dark:text-success-500',
            'data-[selected=true]:bg-success-500/[.15]',
            'data-[selected=true]:dark:bg-success-500/[.15]'
          ]
        },
        info: {
          item: [
            'data-[selected=true]:text-info-500',
            'data-[selected=true]:dark:text-info-500',
            'data-[selected=true]:bg-info-500/[.15]',
            'data-[selected=true]:dark:bg-info-500/[.15]'
          ]
        },
        warning: {
          item: [
            'data-[selected=true]:text-warning-500',
            'data-[selected=true]:dark:text-warning-500',
            'data-[selected=true]:bg-warning-500/[.15]',
            'data-[selected=true]:dark:bg-warning-500/[.15]'
          ]
        },
        error: {
          item: [
            'data-[selected=true]:text-error-500',
            'data-[selected=true]:dark:text-error-500',
            'data-[selected=true]:bg-error-500/[.15]',
            'data-[selected=true]:dark:bg-error-500/[.15]'
          ]
        },
        light: {
          item: [
            'data-[selected=true]:text-light-1',
            'data-[selected=true]:dark:text-light-1',
            'data-[selected=true]:bg-light-1/[.15]',
            'data-[selected=true]:dark:bg-light-1/[.15]'
          ]
        },
        dark: {
          item: [
            'data-[selected=true]:text-dark-5',
            'data-[selected=true]:dark:text-dark-5',
            'data-[selected=true]:bg-dark-5/[.15]',
            'data-[selected=true]:dark:bg-dark-5/[.15]'
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
