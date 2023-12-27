import { tv } from 'tailwind-variants'
import { SelectProps } from './interfaces'
import { computed } from 'vue'

const useStyle = (props: SelectProps) => {
  const input = tv({
    slots: {
      container: [
        'w-full', 
        'vk-select-container'
      ],
      field: [
        'w-full',
        'relative'
      ],
      select: [
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
        'rounded-lg',
        'bg-white',
        'shadow-lg',
        'overflow-auto',
        'whitespace-nowrap',
        'max-h-48',
        'transition-max-height duration-300 ease-out',
        'data-[helper=true]:-mt-6',
        'dark:bg-dark-3',
        'select-none'
      ],
      item: [
        'rounded-lg',
        'p-2',
        'mb-1',
        'cursor-pointer',
        'hover:bg-gray-100',
        'dark:text-white',
        'dark:bg-dark-3',
        'dark:hover:bg-dark-1',
        'data-[selected=true]:text-primary-500',
        'data-[selected=true]:dark:text-primary-500',
        'data-[selected=true]:bg-primary-500/[.15]',
        'data-[selected=true]:dark:bg-primary-500/[.15]'
      ],
    },
    variants: {
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
        },
      }
    }
  })

  return computed(() => {
    const slots = input({
      size: props.size,
    })

    return {
      select: slots.select(),
      dropdown: slots.dropdown(),
      item: slots.item(),
      container: slots.container(),
      field: slots.field(),
    }
  })
}

export default useStyle
