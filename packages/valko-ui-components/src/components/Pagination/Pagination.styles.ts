import { tv } from 'tailwind-variants'
import { PaginationProps } from './interfaces'
import { computed } from 'vue'

const useStyle = (props: PaginationProps) => {
  const pagination = tv({
    slots: {
      nav: [
        'inline-flex',
        '-space-x-px',
        'rounded-md', 
        'shadow-sm'
      ],
      button: [
        'flex',
        'justify-center', 
        'items-center'
      ],
      arrows: [
        'flex',
        'justify-center', 
        'items-center'
      ]
    },
    variants: {
      color: {
        primary: {},
        secondary: {},
        success: {},
        info: {},
        warning: {},
        error: {}
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
            'h-9', 
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
        },
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
      color: props.variant,
      flat: props.flat
    })

    return {
      nav: slots.nav(),
      button: slots.button(),
      arrows: slots.arrows()
    }
  })
}

export default useStyle
