import { tv } from 'tailwind-variants'
import { RadioProps } from './interfaces'
import { computed } from 'vue'

const useStyle = (props: RadioProps) => {
  const radio = tv({
    slots: {
      container: [
        'vk-radio__container',
        'w-full',
        'flex',
        'justify-start',
        'items-center',
        'cursor-pointer'
      ],
      radio: [
        'vk-radio__radio',
        'shadow-lg',
        'shadow-light-4',
        'border-2',
        'border-light-5',
        'relative',
        'flex',
        'items-center',
        'justify-center',
        'dark:border-dark-1',
        'dark:shadow-dark-5'
      ],
      input: [
        'hidden'
      ],
      helpertext: [
        'w-full',
        'origin-top-left',
        'transition-all',
        'duration-200',
        'break-words',
        'break-before-all',
        'inline-block',
        'scale-[.8]'
      ],
      label: [
        'cursor-pointer'
      ],
      icon: [
        'vk-radio__icon',
        'text-white'
      ]
    },
    variants: {
      size: {
        xs: {
          radio: [
            'w-3.5',
            'h-3.5'
          ],
          label: [
            'text-xs'
          ],
          icon: [
            'text-xs'
          ],
          helpertext: [
            'text-xs'
          ]
        },
        sm: {
          radio: [
            'w-4',
            'h-4'
          ],
          label: [
            'text-sm'
          ],
          icon: [
            'text-sm'
          ],
          helpertext: [
            'text-sm'
          ]
        },
        md: {
          radio: [
            'w-5',
            'h-5'
          ],
          label: [
            'text-base'
          ],
          icon: [
            'text-base'
          ],
          helpertext: [
            'text-base'
          ]
        },
        lg: {
          radio: [
            'w-6',
            'h-6'
          ],
          label: [
            'text-lg'
          ],
          icon: [
            'text-lg'
          ],
          helpertext: [
            'text-lg'
          ]
        }
      },
      variant: {
        filled: {},
        outlined: {},
        ghost: {
          radio: [
            'border-0',
            'bg-light-5/[.15]',
            'shadow-none',
            'dark:bg-dark-1/[.15]'
          ]
        }
      },
      color: {
        primary: {},
        secondary: {},
        success: {
          helpertext: [
            'text-success-500'
          ]
        },
        info: {
          helpertext: [
            'text-info-500'
          ]
        },
        warning: {
          helpertext: [
            'text-warning-500'
          ]
        },
        error: {
          helpertext: [
            'text-error-500'
          ]
        },
        light: {
          helpertext: [
            'text-white'
          ]
        },
        dark: {
          helpertext: [
            'text-black'
          ]
        }
      },
      disabled: {
        true: {
          radio: [
            'bg-gray-600',
            'border-gray-600',
            'opacity-50',
            'cursor-not-allowed',
            'data-[checked=true]:border-gray-600',
            'data-[checked=true]:bg-gray-600'
          ],
          icon: [
            'text-gray-600'
          ]
        }
      },
      position: {
        true: {
          container: [
            'flex-row-reverse',
            'justify-end'
          ],
          label: [
            'mr-2'
          ]
        },
        false: {
          label: [
            'ml-2'
          ]
        }
      },
      shape: {
        soft: {
          radio: [
            'rounded'
          ]
        },
        rounded: {
          radio: [
            'rounded-full'
          ]
        },
        square: {
          radio: [
            'rounded-none'
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
          radio: [
            'data-[checked=true]:bg-primary-500',
            'data-[checked=true]:border-primary-500',
            'data-[indeterminate=true]:border-primary-500',
            'data-[indeterminate=true]:bg-primary-500',
            'dark:data-[checked=true]:bg-primary-500',
            'dark:data-[checked=true]:border-primary-500',
            'dark:data-[indeterminate=true]:border-primary-500',
            'dark:data-[indeterminate=true]:bg-primary-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'secondary',
        disabled: false,
        class: {
          radio: [
            'data-[checked=true]:bg-secondary-500',
            'data-[checked=true]:border-secondary-500',
            'data-[indeterminate=true]:border-secondary-500',
            'data-[indeterminate=true]:bg-secondary-500',
            'dark:data-[checked=true]:bg-secondary-500',
            'dark:data-[checked=true]:border-secondary-500',
            'dark:data-[indeterminate=true]:border-secondary-500',
            'dark:data-[indeterminate=true]:bg-secondary-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'success',
        disabled: false,
        class: {
          radio: [
            'data-[checked=true]:bg-success-500',
            'data-[checked=true]:border-success-500',
            'data-[indeterminate=true]:border-success-500',
            'data-[indeterminate=true]:bg-success-500',
            'dark:data-[checked=true]:bg-success-500',
            'dark:data-[checked=true]:border-success-500',
            'dark:data-[indeterminate=true]:border-success-500',
            'dark:data-[indeterminate=true]:bg-success-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'info',
        disabled: false,
        class: {
          radio: [
            'data-[checked=true]:bg-info-500',
            'data-[checked=true]:border-info-500',
            'data-[indeterminate=true]:border-info-500',
            'data-[indeterminate=true]:bg-info-500',
            'dark:data-[checked=true]:bg-info-500',
            'dark:data-[checked=true]:border-info-500',
            'dark:data-[indeterminate=true]:border-info-500',
            'dark:data-[indeterminate=true]:bg-info-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'warning',
        disabled: false,
        class: {
          radio: [
            'data-[checked=true]:bg-warning-500',
            'data-[checked=true]:border-warning-500',
            'data-[indeterminate=true]:border-warning-500',
            'data-[indeterminate=true]:bg-warning-500',
            'dark:data-[checked=true]:bg-warning-500',
            'dark:data-[checked=true]:border-warning-500',
            'dark:data-[indeterminate=true]:border-warning-500',
            'dark:data-[indeterminate=true]:bg-warning-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'error',
        disabled: false,
        class: {
          radio: [
            'data-[checked=true]:bg-error-500',
            'data-[checked=true]:border-error-500',
            'data-[indeterminate=true]:border-error-500',
            'data-[indeterminate=true]:bg-error-500',
            'dark:data-[checked=true]:bg-error-500',
            'dark:data-[checked=true]:border-error-500',
            'dark:data-[indeterminate=true]:border-error-500',
            'dark:data-[indeterminate=true]:bg-error-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'light',
        disabled: false,
        class: {
          radio: [
            'data-[checked=true]:bg-light-1',
            'data-[checked=true]:border-light-1',
            'data-[indeterminate=true]:border-light-1',
            'data-[indeterminate=true]:bg-light-1',
            'dark:data-[checked=true]:bg-light-1',
            'dark:data-[checked=true]:border-light-1',
            'dark:data-[indeterminate=true]:border-light-1',
            'dark:data-[indeterminate=true]:bg-light-1'
          ],
          icon: [
            'text-dark-5'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'dark',
        disabled: false,
        class: {
          radio: [
            'data-[checked=true]:bg-dark-5',
            'data-[checked=true]:border-dark-5',
            'data-[indeterminate=true]:border-dark-5',
            'data-[indeterminate=true]:bg-dark-5',
            'dark:data-[checked=true]:bg-dark-5',
            'dark:data-[checked=true]:border-dark-5',
            'dark:data-[indeterminate=true]:border-dark-5',
            'dark:data-[indeterminate=true]:bg-dark-5'
          ],
          icon: [
            'text-light-1'
          ]
        }
      },
      // outlined & color
      {
        variant: 'outlined',
        color: 'primary',
        disabled: false,
        class: {
          radio: [
            'data-[checked=true]:border-primary-500',
            'data-[indeterminate=true]:border-primary-500',
            'dark:data-[checked=true]:border-primary-500',
            'dark:data-[indeterminate=true]:border-primary-500'
          ],
          icon: [
            'text-primary-500',
            'dark:text-primary-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'secondary',
        disabled: false,
        class: {
          radio: [
            'data-[checked=true]:border-secondary-500',
            'data-[indeterminate=true]:border-secondary-500',
            'dark:data-[checked=true]:border-secondary-500',
            'dark:data-[indeterminate=true]:border-secondary-500'
          ],
          icon: [
            'text-secondary-500',
            'dark:text-secondary-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'success',
        disabled: false,
        class: {
          radio: [
            'data-[checked=true]:border-success-500',
            'data-[indeterminate=true]:border-success-500',
            'dark:data-[checked=true]:border-success-500',
            'dark:data-[indeterminate=true]:border-success-500'
          ],
          icon: [
            'text-success-500',
            'dark:text-success-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'info',
        disabled: false,
        class: {
          radio: [
            'data-[checked=true]:border-info-500',
            'data-[indeterminate=true]:border-info-500',
            'dark:data-[checked=true]:border-info-500',
            'dark:data-[indeterminate=true]:border-info-500'
          ],
          icon: [
            'text-info-500',
            'dark:text-info-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'warning',
        disabled: false,
        class: {
          radio: [
            'data-[checked=true]:border-warning-500',
            'data-[indeterminate=true]:border-warning-500',
            'dark:data-[checked=true]:border-warning-500',
            'dark:data-[indeterminate=true]:border-warning-500'
          ],
          icon: [
            'text-warning-500',
            'dark:text-warning-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'error',
        disabled: false,
        class: {
          radio: [
            'data-[checked=true]:border-error-500',
            'data-[indeterminate=true]:border-error-500',
            'dark:data-[checked=true]:border-error-500',
            'dark:data-[indeterminate=true]:border-error-500'
          ],
          icon: [
            'text-error-500',
            'dark:text-error-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'light',
        disabled: false,
        class: {
          radio: [
            'data-[checked=true]:border-light-1',
            'data-[indeterminate=true]:border-light-1',
            'dark:data-[checked=true]:border-light-1',
            'dark:data-[indeterminate=true]:border-light-1'
          ],
          icon: [
            'text-light-1',
            'dark:text-light-1'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'dark',
        disabled: false,
        class: {
          radio: [
            'data-[checked=true]:border-dark-5',
            'data-[indeterminate=true]:border-dark-5',
            'dark:data-[checked=true]:border-dark-5',
            'dark:data-[indeterminate=true]:border-dark-5'
          ],
          icon: [
            'text-dark-5',
            'dark:text-dark-5'
          ]
        }
      },
      // ghost & color
      {
        variant: 'ghost',
        color: 'primary',
        disabled: false,
        class: {
          radio: [
            'data-[checked=true]:bg-primary-500/[.15]',
            'data-[indeterminate=true]:bg-primary-500/[.15]',
            'dark:data-[checked=true]:bg-primary-500/[.15]',
            'dark:data-[indeterminate=true]:bg-primary-500/[.15]'
          ],
          icon: [
            'text-primary-500'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'secondary',
        disabled: false,
        class: {
          radio: [
            'data-[checked=true]:bg-secondary-500/[.15]',
            'data-[indeterminate=true]:bg-secondary-500/[.15]',
            'dark:data-[checked=true]:bg-secondary-500/[.15]',
            'dark:data-[indeterminate=true]:bg-secondary-500/[.15]'
          ],
          icon: [
            'text-secondary-500'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'success',
        disabled: false,
        class: {
          radio: [
            'data-[checked=true]:bg-success-500/[.15]',
            'data-[indeterminate=true]:bg-success-500/[.15]',
            'dark:data-[checked=true]:bg-success-500/[.15]',
            'dark:data-[indeterminate=true]:bg-success-500/[.15]'
          ],
          icon: [
            'text-success-500'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'info',
        disabled: false,
        class: {
          radio: [
            'data-[checked=true]:bg-info-500/[.15]',
            'data-[indeterminate=true]:bg-info-500/[.15]',
            'dark:data-[checked=true]:bg-info-500/[.15]',
            'dark:data-[indeterminate=true]:bg-info-500/[.15]'
          ],
          icon: [
            'text-info-500'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'warning',
        disabled: false,
        class: {
          radio: [
            'data-[checked=true]:bg-warning-500/[.15]',
            'data-[indeterminate=true]:bg-warning-500/[.15]',
            'dark:data-[checked=true]:bg-warning-500/[.15]',
            'dark:data-[indeterminate=true]:bg-warning-500/[.15]'
          ],
          icon: [
            'text-warning-500'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'error',
        disabled: false,
        class: {
          radio: [
            'data-[checked=true]:bg-error-500/[.15]',
            'data-[indeterminate=true]:bg-error-500/[.15]',
            'dark:data-[checked=true]:bg-error-500/[.15]',
            'dark:data-[indeterminate=true]:bg-error-500/[.15]'
          ],
          icon: [
            'text-error-500'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'light',
        disabled: false,
        class: {
          radio: [
            'data-[checked=true]:bg-light-1/[.15]',
            'data-[indeterminate=true]:bg-light-1/[.15]',
            'dark:data-[checked=true]:bg-light-1/[.15]',
            'dark:data-[indeterminate=true]:bg-light-1/[.15]'
          ],
          icon: [
            'text-light-1'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'dark',
        disabled: false,
        class: {
          radio: [
            'data-[checked=true]:bg-dark-5/[.15]',
            'data-[indeterminate=true]:bg-dark-5/[.15]',
            'dark:data-[checked=true]:bg-dark-5/[.15]',
            'dark:data-[indeterminate=true]:bg-dark-5/[.15]'
          ],
          icon: [
            'text-dark-5'
          ]
        }
      }
    ]
  })

  return computed(() => {
    const slots = radio({
      color: props.color,
      size: props.size,
      disabled: props.disabled,
      variant: props.variant,
      position: props.position,
      shape: props.shape
    })
    return {
      container: slots.container(),
      radio: slots.radio(),
      input: slots.input(),
      helpertext: slots.helpertext(),
      label: slots.label(),
      icon: slots.icon()
    }
  })
}

export default useStyle
