import { tv } from 'tailwind-variants'
import { ProgressbarProps } from './interfaces'
import { computed } from 'vue'

const useStyle = (props: ProgressbarProps) => {
  const progressbar = tv({
    slots: {
      container: [
        'vk-progressbar__container',
        'w-full',
        'overflow-hidden',
        'relative',
        'transition-width',
        'ease-in-out'
      ],
      progress: [
        'w-full',
        'h-full',
        'overflow-hidden',
        'absolute',
        'transition-all',
        'z-20'
      ],
      content: [
        'w-full',
        'font-medium',
        'align-middle',
        'flex',
        'justify-center',
        'absolute',
        'z-30'
      ],
      buffer: [
        'vk-progressbar__buffer',
        'w-full',
        'h-full',
        'absolute',
        'z-10',
        'transition-all',
        'bg-light-4',
        'dark:bg-dark-2'
      ]
    },
    variants: {
      variant: {
        filled: {
          container: [
            'bg-light-3',
            'dark:bg-dark-1'
          ]
        },
        ghost: {
          container: [
            'bg-transparent'
          ],
          buffer: [
            'bg-light-5/[.15]',
            'dark:bg-dark-1/[.15]'
          ]
        },
        outlined: {
          container: [
            'border-2',
            'border-light-5',
            'dark:border-dark-1'
          ]
        }
      },
      shape: {
        line: {
          content: [
            'hidden'
          ]
        },
        rounded: {
          container: [
            'rounded-full'
          ]
        },
        square: {
          container: [
            'rounded-none'
          ]
        },
        soft: {
          container: [
            'rounded-lg'
          ]
        }
      },
      color: {
        primary: {
          progress: [
            'bg-primary-500'
          ]
        },
        secondary: {
          progress: [
            'bg-secondary-500'
          ]
        },
        success: {
          progress: [
            'bg-success-500'
          ]
        },
        info: {
          progress: [
            'bg-info-500'
          ]
        },
        warning: {
          progress: [
            'bg-warning-500'
          ]
        },
        error: {
          progress: [
            'bg-error-500'
          ]
        },
        light: {
          progress: [
            'bg-light-1'
          ],
          content: [
            'text-dark-5'
          ]
        },
        dark: {
          progress: [
            'bg-dark-5'
          ],
          content: [
            'text-light-5'
          ]
        }
      },
      size: {
        xs: {
          container: [
            'h-4'
          ],
          content: [
            'h-4',
            'text-xs'
          ]
        },
        sm: {
          container: [
            'h-5'
          ],
          content: [
            'h-5',
            'text-sm'
          ]
        },
        md: {
          container: [
            'h-6'
          ],
          content: [
            'h-6',
            'text-base'
          ]
        },
        lg: {
          container: [
            'h-7'
          ],
          content: [
            'h-7',
            'text-lg'
          ]
        }
      },
      striped:{
        true: {
          progress: [
            'bg-contain',
            'bg-repeat',
            'bg-blend-multiply',
            'animate-cicle'
          ]
        }
      },
      indeterminate: {
        true: {
          progress: [
            'animate-progress',
            'origin-left-right'
          ]
        },
        false: {
          progress: [
            'origin-right'
          ]
        }
      }
    },
    compoundVariants: [
      {
        variant: 'ghost',
        color: 'primary',
        class: {
          progress: [
            'bg-primary-500/[.15]'
          ],
          buffer: [
            'border-primary-500/[.15]'
          ],
          content: [
            'text-primary-500'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'secondary',
        class: {
          progress: [
            'bg-secondary-500/[.15]'
          ],
          buffer: [
            'border-secondary-500/[.15]'
          ],
          content: [
            'text-secondary-500'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'success',
        class: {
          progress: [
            'bg-success-500/[.15]'
          ],
          buffer: [
            'border-success-500/[.15]'
          ],
          content: [
            'text-success-500'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'info',
        class: {
          progress: [
            'bg-info-500/[.15]'
          ],
          buffer: [
            'border-info-500/[.15]'
          ],
          content: [
            'text-info-500'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'warning',
        class: {
          progress: [
            'bg-warning-500/[.15]'
          ],
          buffer: [
            'border-warning-500/[.15]'
          ],
          content: [
            'text-warning-500'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'error',
        class: {
          progress: [
            'bg-error-500/[.15]'
          ],
          buffer: [
            'border-error-500/[.15]'
          ],
          content: [
            'text-error-500'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'light',
        class: {
          progress: [
            'bg-light-1/[.15]'
          ],
          buffer: [
            'border-light-1/[.15]'
          ],
          content: [
            'text-light-1'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'dark',
        class: {
          progress: [
            'bg-dark-5/[.15]'
          ],
          buffer: [
            'border-dark-5/[.15]'
          ],
          content: [
            'text-dark-5'
          ]
        }
      },
      // striped size
      {
        size: 'xs',
        striped: true,
        class: {
          progress: [
            'h-8'
          ]
        }
      },
      {
        size: 'sm',
        striped: true,
        class: {
          progress: [
            'h-10'
          ]
        }
      },
      {
        size: 'md',
        striped: true,
        class: {
          progress: [
            'h-12'
          ]
        }
      },
      {
        size: 'lg',
        striped: true,
        class: {
          progress: [
            'h-14'
          ]
        }
      },
      // line & size
      {
        shape: 'line',
        size: 'xs',
        class: {
          container: [
            'h-1'
          ]
        }
      },
      {
        shape: 'line',
        size: 'sm',
        class: {
          container: [
            'h-1.5'
          ]
        }
      },
      {
        shape: 'line',
        size: 'md',
        class: {
          container: [
            'h-2'
          ]
        }
      },
      {
        shape: 'line',
        size: 'lg',
        class: {
          container: [
            'h-2.5'
          ]
        }
      },
      // outlined & size
      {
        variant: 'outlined',
        size: 'xs',
        class: {
          content: [
            'leading-[calc(1rem_-_4px)]'
          ]
        }
      },
      {
        variant: 'outlined',
        size: 'sm',
        class: {
          content: [
            'leading-[calc(1.25rem_-_4px)]'
          ]
        }
      },
      {
        variant: 'outlined',
        size: 'md',
        class: {
          content: [
            'leading-[calc(1.50rem_-_4px)]'
          ]
        }
      },
      {
        variant: 'outlined',
        size: 'lg',
        class: {
          content: [
            'leading-[calc(2rem_-_4px)]'
          ]
        }
      }
    ]
  })

  return computed(() => {
    const slots = progressbar({
      color: props.color,
      variant: props.variant,
      shape: props.shape,
      size: props.size,
      striped: props.striped,
      indeterminate: props.indeterminate
    })

    return {
      container: slots.container(),
      progress: slots.progress(),
      content: slots.content(),
      buffer: slots.buffer()
    }
  })
}

export default useStyle
