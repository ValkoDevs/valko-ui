import { tv } from 'tailwind-variants'
import { PaginationProps } from './interfaces'
import { computed } from 'vue'

const useStyle = (props: PaginationProps) => {
  const pagination = tv({
    slots: {
      nav: [
        'vk-pagination__nav',
        'p-2',
        'inline-flex',
        '-space-x-px',
        'shadow-sm'
      ],
      button: [
        'vk-pagination__button',
        'flex',
        'justify-center',
        'items-center'
      ],
      arrows: [
        'vk-pagination__arrows',
        'flex',
        'justify-center',
        'items-center'
      ]
    },
    variants: {
      variant: {
        filled: {
          nav: [
            'bg-light-3',
            'dark:bg-dark-3'
          ]
        },
        outlined: {
          nav: [
            'border-2',
            'border-light-3',
            'dark:border-dark-3'
          ]
        },
        ghost: {
          nav: [
            'bg-transparent'
          ]
        }
      },
      shape: {
        rounded: {
          nav: [
            'rounded-full'
          ]
        },
        soft: {
          nav: [
            'rounded-lg'
          ]
        },
        square: {}
      },
      size: {
        xs: {
          button: [
            'w-6',
            'h-6'
          ],
          arrows: [
            'w-6',
            'h-6'
          ]
        },
        sm: {
          button: [
            'w-7',
            'h-7'
          ],
          arrows: [
            'w-7',
            'h-7',
            'p-0.5'
          ]
        },
        md: {
          button: [
            'w-9',
            'h-9'
          ],
          arrows: [
            'w-9',
            'h-9',
            'p-1'
          ]
        },
        lg: {
          button: [
            'w-11',
            'h-11'
          ],
          arrows: [
            'w-11',
            'h-11',
            'p-1.5'
          ]
        }
      },
      flat: {
        true: {
          nav: [
            'shadow-none'
          ]
        }
      }
    }
  })

  return computed(() => {
    const slots = pagination({
      size: props.size,
      flat: props.flat,
      variant: props.variant,
      shape: props.shape
    })

    return {
      nav: slots.nav(),
      button: slots.button(),
      arrows: slots.arrows()
    }
  })
}

export default useStyle
