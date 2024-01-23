import { tv } from 'tailwind-variants'
import { MenuProps } from './interfaces'
import { computed } from 'vue'

const useStyle = (props: MenuProps) => {
  const baseMenu = tv({
    slots: {
      group: [
        'font-bold',
        'px-2'
      ],
      menu: [
        'w-full',
        'mb-4'
      ],
      item: [
        'w-full'
      ],
      content: [
        'flex',
        'py-2.5',
        'px-4',
        'transition-color',
        'duration-200',
        'hover:bg-light-3',
        'hover:dark:bg-dark-3'
      ]
    },
    variants: {
      color: {
        primary: {},
        secondary: {},
        success: {},
        error: {},
        warning: {},
        info: {},
        light: {},
        dark: {}
      },
      variant: {
        filled: {},
        outlined: {
          content: [
            'border-2',
            'border-transparent',
            'data-[active=true]:bg-transparent',
            'data-[active=true]:dark:-transparent'
          ]
        },
        ghost: {}
      },
      size: {
        xs: {
          content: [
            'text-xs'
          ]
        },
        sm: {
          content: [
            'text-sm'
          ]
        },
        md: {
          content: [
            'text-base'
          ]
        },
        lg: {
          content: [
            'text-lg'
          ]
        }
      },
      shape: {
        rounded: {
          content: [
            'rounded-full'
          ]
        },
        square: {
          content: [
            'rounded-none'
          ]
        },
        soft: {
          content: [
            'rounded-lg'
          ]
        }
      },
      floating: {
        true: {
          item: [
            'px-2',
            'py-0.5'
          ],
          content: [
            'px-4',
            'py-2'
          ]
        }
      }
    },
    compoundVariants: [
      // variant=filled && colors
      {
        variant: 'filled',
        color: 'primary',
        class: {
          content: [
            'data-[active=true]:text-light-1',
            'data-[active=true]:bg-primary-500',
            'data-[active=true]:dark:bg-primary-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'secondary',
        class: {
          content: [
            'data-[active=true]:text-light-1',
            'data-[active=true]:bg-secondary-500',
            'data-[active=true]:dark:bg-secondary-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'success',
        class: {
          content: [
            'data-[active=true]:text-light-1',
            'data-[active=true]:bg-success-500',
            'data-[active=true]:dark:bg-success-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'error',
        class: {
          content: [
            'data-[active=true]:text-light-1',
            'data-[active=true]:bg-error-500',
            'data-[active=true]:dark:bg-error-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'warning',
        class: {
          content: [
            'data-[active=true]:text-light-1',
            'data-[active=true]:bg-warning-500',
            'data-[active=true]:dark:bg-warning-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'info',
        class: {
          content: [
            'data-[active=true]:text-light-1',
            'data-[active=true]:bg-info-500',
            'data-[active=true]:dark:bg-info-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'light',
        class: {
          content: [
            'data-[active=true]:text-dark-5',
            'data-[active=true]:bg-light-1',
            'data-[active=true]:dark:bg-dark-1'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'dark',
        class: {
          content: [
            'data-[active=true]:text-light-1',
            'data-[active=true]:bg-dark-1',
            'data-[active=true]:dark:bg-light-1'
          ]
        }
      },

      // variant=outlined && colors
      {
        variant: 'outlined',
        color: 'primary',
        class: {
          content: [
            'data-[active=true]:text-primary-500',
            'data-[active=true]:border-primary-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'secondary',
        class: {
          content: [
            'data-[active=true]:text-secondary-500',
            'data-[active=true]:border-secondary-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'success',
        class: {
          content: [
            'data-[active=true]:text-success-500',
            'data-[active=true]:border-success-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'error',
        class: {
          content: [
            'data-[active=true]:text-error-500',
            'data-[active=true]:border-error-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'warning',
        class: {
          content: [
            'data-[active=true]:text-warning-500',
            'data-[active=true]:border-warning-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'info',
        class: {
          content: [
            'data-[active=true]:text-info-500',
            'data-[active=true]:border-info-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'light',
        class: {
          content: [
            'data-[active=true]:text-dark-5',
            'data-[active=true]:border-light-1',
            'data-[active=true]:dark:border-dark-1'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'dark',
        class: {
          content: [
            'data-[active=true]:text-light-1',
            'data-[active=true]:border-dark-1',
            'data-[active=true]:dark:border-light-1'
          ]
        }
      },

      // variant=ghost && colors
      {
        variant: 'ghost',
        color: 'primary',
        class: {
          content: [
            'data-[active=true]:text-primary-500',
            'data-[active=true]:bg-primary-500/[.15]',
            'data-[active=true]:dark:bg-primary-500/[.15]'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'secondary',
        class: {
          content: [
            'data-[active=true]:text-secondary-500',
            'data-[active=true]:bg-secondary-500/[.15]',
            'data-[active=true]:dark:bg-secondary-500/[.15]'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'success',
        class: {
          content: [
            'data-[active=true]:text-success-500',
            'data-[active=true]:bg-success-500/[.15]',
            'data-[active=true]:dark:bg-success-500/[.15]'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'error',
        class: {
          content: [
            'data-[active=true]:text-error-500',
            'data-[active=true]:bg-error-500/[.15]',
            'data-[active=true]:dark:bg-error-500/[.15]'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'warning',
        class: {
          content: [
            'data-[active=true]:text-warning-500',
            'data-[active=true]:bg-warning-500/[.15]',
            'data-[active=true]:dark:bg-warning-500/[.15]'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'info',
        class: {
          content: [
            'data-[active=true]:text-info-500',
            'data-[active=true]:bg-info-500/[.15]',
            'data-[active=true]:dark:bg-info-500/[.15]'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'light',
        class: {
          content: [
            'data-[active=true]:text-dark-5',
            'data-[active=true]:bg-light-1/[.15]',
            'data-[active=true]:dark:bg-light-1/[.15]'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'dark',
        class: {
          content: [
            'data-[active=true]:text-light-1',
            'data-[active=true]:bg-dark-1/[.15]',
            'data-[active=true]:dark:bg-dark-1/[.15]'
          ]
        }
      }
    ]
  })

  return computed(() => {
    const slots = baseMenu({
      color: props.color,
      size: props.size,
      variant: props.variant,
      shape: props.shape,
      floating: props.floating
    })

    return {
      group: slots.group(),
      menu: slots.menu(),
      item: slots.item(),
      content: slots.content()
    }
  })
}

export default useStyle
