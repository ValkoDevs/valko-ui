import { tv } from 'tailwind-variants'
import { AlertProps } from './interfaces'
import { computed } from 'vue'

const useStyle = (props: AlertProps) => {
  const alert = tv({
    slots: {
      container: [
        'w-full',
        'p-4',
        'rounded-lg',
        'gap-4',
        'flex',
        'justify-between',
        'items-stretch'
      ],
      content: [
        'grow'
      ],
      title: [
        'font-bold'
      ],
      leftIcon: [],
      button: [
        'flex',
        'flex-col',
        'justify-start'
      ],
      rightIcon: [
        'vk-alert__close'
      ],
      span: [
        'font-medium'
      ]
    },
    variants: {
      variant: {
        filled: {
          container: [
            'bg-light-5'
          ],
          title: [
            'text-white'
          ],
          leftIcon: [
            'text-white'
          ],
          rightIcon: [
            'text-white'
          ],
          span: [
            'text-white'
          ]
        },
        ghost: {},
        outlined: {
          container: [
            'p-[calc(1rem_-_2px)]',
            'border-2'
          ]
        }
      },
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
          title: [
            'text-sm'
          ],
          leftIcon: [
            'text-lg'
          ],
          span: [
            'text-xs'
          ]
        },
        sm: {
          title: [
            'text-base'
          ],
          leftIcon: [
            'text-xl'
          ],
          span: [
            'text-sm'
          ]
        },
        md: {
          title: [
            'text-lg'
          ],
          leftIcon: [
            'text-2xl'
          ],
          span: [
            'text-base'
          ]
        },
        lg: {
          title: [
            'text-xl'
          ],
          leftIcon: [
            'text-3xl'
          ],
          span: [
            'text-lg'
          ]
        }
      },
      flat: {
        true: {
          container: [
            'shadow-lg'
          ]
        }
      }
    },
    compoundVariants: [
      // filled & color
      {
        variant: 'filled',
        color: 'primary',
        class: {
          container: [
            'bg-primary-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'secondary',
        class: {
          container: [
            'bg-secondary-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'success',
        class: {
          container: [
            'bg-success-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'info',
        class: {
          container: [
            'bg-info-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'warning',
        class: {
          container: [
            'bg-warning-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'error',
        class: {
          container: [
            'bg-error-500'
          ]
        }
      },
      // outlined & color
      {
        variant: 'outlined',
        color: 'primary',
        class: {
          container: [
            'border-primary-500'
          ],
          title: [
            'text-primary-500'
          ],
          span: [
            'text-primary-500'
          ],
          leftIcon: [
            'text-primary-500'
          ],
          rightIcon: [
            'text-primary-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'secondary',
        class: {
          container: [
            'border-secondary-500'
          ],
          title: [
            'text-secondary-500'
          ],
          span: [
            'text-secondary-500'
          ],
          leftIcon: [
            'text-secondary-500'
          ],
          rightIcon: [
            'text-secondary-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'success',
        class: {
          container: [
            'border-success-500'
          ],
          title: [
            'text-success-500'
          ],
          span: [
            'text-success-500'
          ],
          leftIcon: [
            'text-success-500'
          ],
          rightIcon: [
            'text-success-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'info',
        class: {
          container: [
            'border-info-500'
          ],
          title: [
            'text-info-500'
          ],
          span: [
            'text-info-500'
          ],
          leftIcon: [
            'text-info-500'
          ],
          rightIcon: [
            'text-info-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'warning',
        class: {
          container: [
            'border-warning-500'
          ],
          title: [
            'text-warning-500'
          ],
          span: [
            'text-warning-500'
          ],
          leftIcon: [
            'text-warning-500'
          ],
          rightIcon: [
            'text-warning-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'error',
        class: {
          container: [
            'border-error-500'
          ],
          title: [
            'text-error-500'
          ],
          span: [
            'text-error-500'
          ],
          leftIcon: [
            'text-error-500'
          ],
          rightIcon: [
            'text-error-500'
          ]
        }
      },
      // ghost & color
      {
        variant: 'ghost',
        color: 'primary',
        class: {
          container: [
            'bg-primary-500/[.20]'
          ],
          title: [
            'text-primary-500'
          ],
          span: [
            'text-primary-500'
          ],
          leftIcon: [
            'text-primary-500'
          ],
          rightIcon: [
            'text-primary-500'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'secondary',
        class: {
          container: [
            'bg-secondary-500/[.20]'
          ],
          title: [
            'text-secondary-500'
          ],
          span: [
            'text-secondary-500'
          ],
          leftIcon: [
            'text-secondary-500'
          ],
          rightIcon: [
            'text-secondary-500'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'success',
        class: {
          container: [
            'bg-success-500/[.20]'
          ],
          title: [
            'text-success-500'
          ],
          span: [
            'text-success-500'
          ],
          leftIcon: [
            'text-success-500'
          ],
          rightIcon: [
            'text-success-500'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'info',
        class: {
          container: [
            'bg-info-500/[.20]'
          ],
          title: [
            'text-info-500'
          ],
          span: [
            'text-info-500'
          ],
          leftIcon: [
            'text-info-500'
          ],
          rightIcon: [
            'text-info-500'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'warning',
        class: {
          container: [
            'bg-warning-500/[.20]'
          ],
          title: [
            'text-warning-500'
          ],
          span: [
            'text-warning-500'
          ],
          leftIcon: [
            'text-warning-500'
          ],
          rightIcon: [
            'text-warning-500'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'error',
        class: {
          container: [
            'bg-error-500/[.20]'
          ],
          title: [
            'text-error-500'
          ],
          span: [
            'text-error-500'
          ],
          leftIcon: [
            'text-error-500'
          ],
          rightIcon: [
            'text-error-500'
          ]
        }
      }
    ]
  })

  return computed(() => {
    const slots = alert({
      color: props.color,
      size: props.size,
      variant: props.variant,
      flat: props.flat
    })

    return {
      container: slots.container(),
      leftIcon: slots.leftIcon(),
      rightIcon: slots.rightIcon(),
      content: slots.content(),
      button: slots.button(),
      title: slots.title(),
      span: slots.span()
    }
  })
}

export default useStyle
