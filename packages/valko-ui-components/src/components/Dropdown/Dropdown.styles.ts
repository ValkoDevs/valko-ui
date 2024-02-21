import { tv } from 'tailwind-variants'
import { DropdownProps } from './interfaces'
import { computed } from 'vue'

const useStyle = (props: DropdownProps) => {
  const dropdown = tv({
    slots: {
      container: [
        'vk-dropdown__container'
      ],
      dropdown: [
        'w-full',
        'relative'
      ],
      button: [
        'vk-dropdown__button',
        'w-full',
        'flex',
        'items-center'
      ],
      icon: [
        'ml-2',
        'block',
        'transition-transform',
        'duration-200',
        'ease-out',
        'data-[open=true]:rotate-180'
      ],
      itemsMenu: [
        'p-2',
        'mt-2',
        'bg-white',
        'shadow-lg',
        'z-10',
        'absolute',
        'right-0',
        'origin-top-right',
        'dark:bg-dark-3'
      ],
      itemsButton: [
        'vk-dropdown__item-button',
        'w-full',
        'p-2',
        'mb-1',
        'flex',
        'items-center',
        'data-[shape=rounded]:rounded-full',
        'data-[shape=soft]:rounded-lg',
        'data-[shape=square]:rounded-none',
        'data-[disabled=true]:text-gray-400',
        'data-[disabled=true]:bg-gray-200',
        'data-[disabled=true]:border-transparent'
      ],
      itemsIcon: [
        'mr-2'
      ]
    },
    variants: {
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
      size: {
        xs: {
          itemsButton: [
            'text-xs'
          ],
          itemsMenu: [
            'w-44'
          ]
        },
        sm: {
          itemsButton: [
            'text-sm'
          ],
          itemsMenu: [
            'w-52'
          ]
        },
        md: {
          itemsButton: [
            'text-base'
          ],
          itemsMenu: [
            'w-56'
          ]
        },
        lg: {
          itemsButton: [
            'text-lg'
          ],
          itemsMenu: [
            'w-60'
          ]
        }
      },
      variant: {
        filled: {
          button: [
            'text-white',
            'dark:text-black'
          ],
          itemsButton: [
            'data-[active=true]:text-white'
          ]
        },
        outlined: {
          itemsButton: [
            'border-2',
            'border-transparent'
          ]
        },
        ghost: {}
      },
      shape: {
        rounded: {
          itemsMenu: [
            'rounded-2xl'
          ]
        },
        soft: {
          itemsMenu: [
            'rounded-lg'
          ]
        },
        square: {
          itemsMenu: [
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
        class: {
          itemsButton: [
            'data-[active=true]:bg-primary-500',
            'data-[active=true]:dark:bg-primary-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'secondary',
        class: {
          itemsButton: [
            'data-[active=true]:bg-secondary-500',
            'data-[active=true]:dark:bg-secondary-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'success',
        class: {
          itemsButton: [
            'data-[active=true]:bg-success-500',
            'data-[active=true]:dark:bg-success-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'info',
        class: {
          itemsButton: [
            'data-[active=true]:bg-info-500',
            'data-[active=true]:dark:bg-info-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'warning',
        class: {
          itemsButton: [
            'data-[active=true]:bg-warning-500',
            'data-[active=true]:dark:bg-warning-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'error',
        class: {
          itemsButton: [
            'data-[active=true]:bg-error-500',
            'data-[active=true]:dark:bg-error-500'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'light',
        class: {
          itemsButton: [
            'data-[active=true]:text-black',
            'data-[active=true]:bg-light-1',
            'data-[active=true]:dark:bg-light-1'
          ]
        }
      },
      {
        variant: 'filled',
        color: 'dark',
        class: {
          itemsButton: [
            'data-[active=true]:bg-dark-5',
            'data-[active=true]:dark:bg-dark-5'
          ]
        }
      },
      // outlined & color
      {
        variant: 'outlined',
        color: 'primary',
        class: {
          itemsButton: [
            'data-[active=true]:text-primary-500',
            'data-[active=true]:border-primary-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'secondary',
        class: {
          itemsButton: [
            'data-[active=true]:text-secondary-500',
            'data-[active=true]:border-secondary-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'success',
        class: {
          itemsButton: [
            'data-[active=true]:text-success-500',
            'data-[active=true]:border-success-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'info',
        class: {
          itemsButton: [
            'data-[active=true]:text-info-500',
            'data-[active=true]:border-info-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'warning',
        class: {
          itemsButton: [
            'data-[active=true]:text-warning-500',
            'data-[active=true]:border-warning-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'error',
        class: {
          itemsButton: [
            'data-[active=true]:text-error-500',
            'data-[active=true]:border-error-500'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'light',
        class: {
          itemsButton: [
            'data-[active=true]:text-light-1',
            'data-[active=true]:border-light-1'
          ]
        }
      },
      {
        variant: 'outlined',
        color: 'dark',
        class: {
          itemsButton: [
            'data-[active=true]:text-dark-5',
            'data-[active=true]:border-dark-5'
          ]
        }
      },
      // ghost & color
      {
        variant: 'ghost',
        color: 'primary',
        class: {
          itemsButton: [
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
          itemsButton: [
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
          itemsButton: [
            'data-[active=true]:text-success-500',
            'data-[active=true]:bg-success-500/[.15]',
            'data-[active=true]:dark:bg-success-500/[.15]'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'info',
        class: {
          itemsButton: [
            'data-[active=true]:text-info-500',
            'data-[active=true]:bg-info-500/[.15]',
            'data-[active=true]:dark:bg-info-500/[.15]'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'warning',
        class: {
          itemsButton: [
            'data-[active=true]:text-warning-500',
            'data-[active=true]:bg-warning-500/[.15]',
            'data-[active=true]:dark:bg-warning-500/[.15]'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'error',
        class: {
          itemsButton: [
            'data-[active=true]:text-error-500',
            'data-[active=true]:bg-error-500/[.15]',
            'data-[active=true]:dark:bg-error-500/[.15]'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'light',
        class: {
          itemsButton: [
            'data-[active=true]:text-light-1',
            'data-[active=true]:bg-light-1/[.15]',
            'data-[active=true]:dark:bg-light-1/[.15]'
          ]
        }
      },
      {
        variant: 'ghost',
        color: 'dark',
        class: {
          itemsButton: [
            'data-[active=true]:text-dark-5',
            'data-[active=true]:bg-dark-5/[.15]',
            'data-[active=true]:dark:bg-dark-5/[.15]'
          ]
        }
      }
    ]
  })

  return computed(() => {
    const slots = dropdown({
      variant: props.variant,
      color: props.color,
      size: props.size,
      shape: props.shape
    })

    return {
      container: slots.container(),
      dropdown: slots.dropdown(),
      button: slots.button(),
      icon: slots.icon(),
      itemsMenu: slots.itemsMenu(),
      itemsButton: slots.itemsButton(),
      itemsIcon: slots.itemsIcon()
    }
  })
}

export default useStyle
