import { tv } from 'tailwind-variants'
import { SwitchProps } from './interfaces'
import { computed } from 'vue'

const useStyle = (props: SwitchProps) => {
  const input = tv({
    slots: {
      container: [
        'vk-switch__container',
        'w-full',
        'flex',
        'justify-start',
        'items-center'
      ],
      switch: [
        'border-2',
        'shrink-0',
        'cursor-pointer',
        'flex',
        'items-center',
        'transition-all',
        'duration-200',
        'ease-in-out',
        'relative'
      ],
      thumb: [
        'inline-block',
        'shadow-lg',
        'ring-0',
        'pointer-events-none',
        'transition-all',
        'transform',
        'duration-200',
        'ease-in-out',
        'absolute',
        'data-[selected=false]:left-0',
        'data-[selected=true]:left-full',
        'data-[selected=true]:-translate-x-full'
      ],
      content: [
        'flex',
        'items-center'
      ],
      label: [
        'vk-switch__label'
      ]
    },
    variants: {
      size: {
        xs: {
          switch: [
            'h-[1.125rem]',
            'w-[2.075rem]'
          ],
          thumb: [
            'h-[0.875rem]',
            'w-[0.875rem]'
          ],
          label: [
            'text-xs'
          ]
        },
        sm: {
          switch: [
            'h-[1.75rem]',
            'w-[3.325rem]'
          ],
          thumb: [
            'h-[1.5rem]',
            'w-[1.5rem]'
          ],
          label: [
            'text-sm'
          ]
        },
        md: {
          switch: [
            'h-[2.375rem]',
            'w-[4.625rem]'
          ],
          thumb: [
            'h-[2.125rem]',
            'w-[2.125rem]'
          ],
          label: [
            'text-base'
          ]
        },
        lg: {
          switch: [
            'h-[3rem]',
            'w-[5.825rem]'
          ],
          thumb: [
            'h-[2.75rem]',
            'w-[2.75rem]'
          ],
          label: [
            'text-lg'
          ]
        }
      },
      variant: {
        filled: {
          switch: [
            'bg-light-4',
            'border-light-4',
            'dark:bg-dark-2',
            'dark:border-dark-2'
          ],
          thumb: [
            'bg-light-2',
            'dark:bg-dark-5'
          ]
        },
        outlined: {
          switch: [
            'border-light-5',
            'dark:border-dark-1'
          ],
          thumb: [
            'scale-[.9]',
            'bg-light-5',
            'dark:bg-dark-5'
          ]
        },
        ghost: {
          switch: [
            'border-transparent',
            'bg-light-5/[.15]',
            'dark:bg-dark-2/[.15]'
          ],
          thumb: [
            'bg-light-5/[.5]',
            'dark:bg-dark-5/[.5]'
          ]
        }
      },
      color: {
        primary: {},
        secondary: {},
        success: {},
        info: {},
        warning: {},
        error: {},
        light: {},
        dark: {}
      },
      shape: {
        rounded: {
          switch: [
            'rounded-full'
          ],
          thumb: [
            'rounded-full'
          ]
        },
        soft: {
          switch: [
            'rounded'
          ],
          thumb: [
            'rounded'
          ]
        },
        square: {
          switch: [
            'rounded-none'
          ],
          thumb: [
            'rounded-none'
          ]
        }
      },
      disabled: {
        true: {
          switch: [
            'pointer-events-none',
            'bg-gray-500/[.3]',
            'dark:bg-gray-500/[.3]'
          ],
          thumb: [
            'bg-gray-500/[.2]',
            'dark:bg-gray-500/[.2]'
          ]
        }
      },
      position: {
        true: {
          content: [
            'flex-row-reverse'
          ],
          label: [
            'ml-2'
          ]
        },
        false: {
          label: [
            'mr-2'
          ]
        }
      }
    },
    compoundVariants: [
      // filled & color
      {
        variant: 'filled',
        color: 'primary',
        disabled: false,
        class: {
          switch: [
            'data-[active=true]:bg-primary-500',
            'data-[active=true]:border-primary-500',
            'dark:data-[active=true]:bg-primary-500',
            'dark:data-[active=true]:border-primary-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'secondary',
        disabled: false,
        class: {
          switch: [
            'data-[active=true]:bg-secondary-500',
            'data-[active=true]:border-secondary-500',
            'dark:data-[active=true]:bg-secondary-500',
            'dark:data-[active=true]:border-secondary-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'success',
        disabled: false,
        class: {
          switch: [
            'data-[active=true]:bg-success-500',
            'data-[active=true]:border-success-500',
            'dark:data-[active=true]:bg-success-500',
            'dark:data-[active=true]:border-success-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'info',
        disabled: false,
        class: {
          switch: [
            'data-[active=true]:bg-info-500',
            'data-[active=true]:border-info-500',
            'dark:data-[active=true]:bg-info-500',
            'dark:data-[active=true]:border-info-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'warning',
        disabled: false,
        class: {
          switch: [
            'data-[active=true]:bg-warning-500',
            'data-[active=true]:border-warning-500',
            'dark:data-[active=true]:bg-warning-500',
            'dark:data-[active=true]:border-warning-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'error',
        disabled: false,
        class: {
          switch: [
            'data-[active=true]:bg-error-500',
            'data-[active=true]:border-error-500',
            'dark:data-[active=true]:bg-error-500',
            'dark:data-[active=true]:border-error-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'light',
        disabled: false,
        class: {
          switch: [
            'data-[active=true]:bg-light-1',
            'data-[active=true]:border-light-1',
            'dark:data-[active=true]:bg-light-1',
            'dark:data-[active=true]:border-light-1'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'dark',
        disabled: false,
        class: {
          switch: [
            'data-[active=true]:bg-dark-5',
            'data-[active=true]:border-dark-5',
            'dark:data-[active=true]:bg-dark-5',
            'dark:data-[active=true]:border-dark-5'
          ]
        }
      },
      // outlined & color
      {
        variant: 'outlined',
        color: 'primary',
        disabled: false,
        class: {
          switch: [
            'data-[active=true]:border-primary-500',
            'dark:data-[active=true]:border-primary-500'
          ],
          thumb: [
            'data-[selected=true]:bg-primary-500',
            'dark:data-[selected=true]:bg-primary-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'secondary',
        disabled: false,
        class: {
          switch: [
            'data-[active=true]:border-secondary-500',
            'dark:data-[active=true]:border-secondary-500'
          ],
          thumb: [
            'data-[selected=true]:bg-secondary-500',
            'dark:data-[selected=true]:bg-secondary-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'success',
        disabled: false,
        class: {
          switch: [
            'data-[active=true]:border-success-500',
            'dark:data-[active=true]:border-success-500'
          ],
          thumb: [
            'data-[selected=true]:bg-success-500',
            'dark:data-[selected=true]:bg-success-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'info',
        disabled: false,
        class: {
          switch: [
            'data-[active=true]:border-info-500',
            'dark:data-[active=true]:border-info-500'
          ],
          thumb: [
            'data-[selected=true]:bg-info-500',
            'dark:data-[selected=true]:bg-info-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'warning',
        disabled: false,
        class: {
          switch: [
            'data-[active=true]:border-warning-500',
            'dark:data-[active=true]:border-warning-500'
          ],
          thumb: [
            'data-[selected=true]:bg-warning-500',
            'dark:data-[selected=true]:bg-warning-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'error',
        disabled: false,
        class: {
          switch: [
            'data-[active=true]:border-error-500',
            'dark:data-[active=true]:border-error-500'
          ],
          thumb: [
            'data-[selected=true]:bg-error-500',
            'dark:data-[selected=true]:bg-error-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'light',
        disabled: false,
        class: {
          switch: [
            'data-[active=true]:border-light-1',
            'dark:data-[active=true]:border-light-1'
          ],
          thumb: [
            'data-[selected=true]:bg-light-1',
            'dark:data-[selected=true]:bg-light-1'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'dark',
        disabled: false,
        class: {
          switch: [
            'data-[active=true]:border-dark-5',
            'dark:data-[active=true]:border-light-5'
          ],
          thumb: [
            'data-[selected=true]:bg-dark-5',
            'dark:data-[selected=true]:bg-light-5'
          ]
        }
      },
      // ghost & color
      {
        variant: 'ghost',
        color: 'primary',
        disabled: false,
        class: {
          switch: [
            'data-[active=true]:bg-primary-500/[.15]',
            'dark:data-[active=true]:bg-primary-500/[.15]'
          ],
          thumb: [
            'data-[selected=true]:bg-primary-500/[.5]',
            'dark:data-[selected=true]:bg-primary-500/[.5]'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'secondary',
        disabled: false,
        class: {
          switch: [
            'data-[active=true]:bg-secondary-500/[.15]',
            'dark:data-[active=true]:bg-secondary-500/[.15]'
          ],
          thumb: [
            'data-[selected=true]:bg-secondary-500/[.5]',
            'dark:data-[selected=true]:bg-secondary-500/[.5]'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'success',
        disabled: false,
        class: {
          switch: [
            'data-[active=true]:bg-success-500/[.15]',
            'dark:data-[active=true]:bg-success-500/[.15]'
          ],
          thumb: [
            'data-[selected=true]:bg-success-500/[.5]',
            'dark:data-[selected=true]:bg-success-500/[.5]'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'info',
        disabled: false,
        class: {
          switch: [
            'data-[active=true]:bg-info-500/[.15]',
            'dark:data-[active=true]:bg-info-500/[.15]'
          ],
          thumb: [
            'data-[selected=true]:bg-info-500/[.5]',
            'dark:data-[selected=true]:bg-info-500/[.5]'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'warning',
        disabled: false,
        class: {
          switch: [
            'data-[active=true]:bg-warning-500/[.15]',
            'dark:data-[active=true]:bg-warning-500/[.15]'
          ],
          thumb: [
            'data-[selected=true]:bg-warning-500/[.5]',
            'dark:data-[selected=true]:bg-warning-500/[.5]'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'error',
        disabled: false,
        class: {
          switch: [
            'data-[active=true]:bg-error-500/[.15]',
            'dark:data-[active=true]:bg-error-500/[.15]'
          ],
          thumb: [
            'data-[selected=true]:bg-error-500/[.5]',
            'dark:data-[selected=true]:bg-error-500/[.5]'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'light',
        disabled: false,
        class: {
          switch: [
            'data-[active=true]:bg-light-1/[.15]',
            'dark:data-[active=true]:bg-light-1/[.15]'
          ],
          thumb: [
            'data-[selected=true]:bg-light-1/[.5]',
            'dark:data-[selected=true]:bg-light-1/[.5]'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'dark',
        disabled: false,
        class: {
          switch: [
            'data-[active=true]:bg-dark-5/[.15]',
            'dark:data-[active=true]:bg-dark-5/[.15]'
          ],
          thumb: [
            'data-[selected=true]:bg-dark-5/[.5]',
            'dark:data-[selected=true]:bg-dark-5/[.5]'
          ]
        }
      }
    ]
  })

  return computed(() => {
    const slots = input({
      color: props.color,
      size: props.size,
      variant: props.variant,
      shape: props.shape,
      disabled: props.disabled,
      position: props.position
    })
    return {
      container: slots.container(),
      switch: slots.switch(),
      thumb: slots.thumb(),
      content: slots.content(),
      label: slots.label()
    }
  })
}

export default useStyle
