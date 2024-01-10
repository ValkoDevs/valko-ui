import { tv } from 'tailwind-variants'
import { TabsProps } from './interfaces'
import { computed } from 'vue'

const useStyle = (props: TabsProps) => {
  const tab = tv({
    slots: {
      container: [
        'w-full',
        'flex',
        'overflow-x-auto'
      ],
      group: [
        'w-fit',
        'flex',
        'flex-col'
      ],
      list: [
        'tab-list',
        'p-2',
        'w-fit',
        'max-w-full',
        'h-fit',
        'flex',
        'justify-start',
        'relative',
        'transition-colors',
        'duration-200',
        'ease-out'
      ],
      tab: [
        'w-fit',
        'h-fit',
        'tracking-wider',
        'font-semibold',
        'text-nowrap',
        'whitespace-nowrap',
        'ring-0',
        'outline-none',
        'z-20',
        'flex',
        'items-center',
        'transition',
        'duration-200',
        'disabled:text-gray-400',
        'disabled:cursor-not-allowed',
        'dark:disabled:text-gray-500'
      ],
      content: [
        'w-full'
      ],
      cursor: [
        'shadow-lg',
        'absolute',
        'inset-0',
        'z-10',
        'transition-all',
        'duration-200'
      ],
      leftIcon: [
        'mr-1'
      ],
      rightIcon: [
        'ml-1'
      ]
    },
    variants: {
      type: {
        filled: {
          list: [
            'bg-light-3',
            'dark:bg-dark-3'
          ]
        },
        outlined: {
          list: [
            'border-2',
            'border-light-5',
            'dark:border-dark-1'
          ]
        },
        ghost: {
          list: [
            'bg-transparent'
          ],
          tab: [
            'bg-transparent'
          ]
        }
      },
      shape: {
        underline: {
          list: [
            'p-0'
          ],
          cursor: [
            'border-b-2',
            'shadow-none'
          ]
        },
        rounded: {
          list: [
            'rounded-full'
          ],
          tab: [
            'data-[headlessui-state=selected]:text-white',
            'rounded-full'
          ],
          cursor: [
            'rounded-full'
          ]
        },
        square: {
          tab: [
            'data-[headlessui-state=selected]:text-white'
          ]
        },
        soft: {
          list: [
            'rounded-lg'
          ],
          tab: [
            'rounded-lg',
            'data-[headlessui-state=selected]:text-white'
          ],
          cursor: [
            'rounded-lg'
          ]
        }
      },
      size: {
        xs: {
          tab: [
            'p-1.5',
            'text-xs'
          ]
        },
        sm: {
          tab: [
            'p-2',
            'text-sm'
          ]
        },
        md: {
          tab: [
            'p-3',
            'text-base'
          ]
        },
        lg: {
          tab: [
            'p-4',
            'text-lg'
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
      grow: {
        true: {
          group: [
            'w-auto',
            'h-auto',
            'grow'
          ],
          list: [
            'w-auto',
            'h-auto',
            'grow'
          ]
        }
      },
      vertical: {
        true: {
          list: [
            'flex-col'
          ],
          tab: [
            'w-full',
            'justify-center'
          ]
        }
      }
    },
    compoundVariants: [
      //color & underline
      {
        color: 'primary',
        shape: 'underline',
        class: {
          cursor: [
            'border-primary-500'
          ]
        }
      },
      {
        color: 'secondary',
        shape: 'underline',
        class: {
          cursor: [
            'border-secondary-500'
          ]
        }
      },
      {
        color: 'success',
        shape: 'underline',
        class: {
          cursor: [
            'border-success-500'
          ]
        }
      },
      {
        color: 'info',
        shape: 'underline',
        class: {
          cursor: [
            'border-info-500'
          ]
        }
      },
      {
        color: 'warning',
        shape: 'underline',
        class: {
          cursor: [
            'border-warning-500'
          ]
        }
      },
      {
        color: 'error',
        shape: 'underline',
        class: {
          cursor: [
            'border-error-500'
          ]
        }
      },
      //color rounded square & soft
      {
        color: 'primary',
        shape: ['rounded', 'square', 'soft'],
        class: {
          cursor: [
            'bg-primary-500'
          ]
        }
      },
      {
        color: 'secondary',
        shape: ['rounded', 'square', 'soft'],
        class: {
          cursor: [
            'bg-secondary-500'
          ]
        }
      },
      {
        color: 'success',
        shape: ['rounded', 'square', 'soft'],
        class: {
          cursor: [
            'bg-success-500'
          ]
        }
      },
      {
        color: 'info',
        shape: ['rounded', 'square', 'soft'],
        class: {
          cursor: [
            'bg-info-500'
          ]
        }
      },
      {
        color: 'warning',
        shape: ['rounded', 'square', 'soft'],
        class: {
          cursor: [
            'bg-warning-500'
          ]
        }
      },
      {
        color: 'error',
        shape: ['rounded', 'square', 'soft'],
        class: {
          cursor: [
            'bg-error-500'
          ]
        }
      },
      // vertical & underline
      {
        shape: 'underline',
        vertical: true,
        class: {
          cursor: [
            'border-b-0',
            'border-l-2'
          ]
        }
      },
      // vertical & rounded
      {
        shape: 'rounded',
        vertical: true,
        class: {
          list: [
            'rounded-3xl'
          ]
        }
      },
      // vertical content
      {
        vertical: true,
        class: {
          group: [
            'flex-row'
          ]
        }
      }
    ]
  })
  return computed(() => {
    const slots = tab({
      color: props.variant,
      size: props.size,
      shape: props.shape,
      type: props.type,
      grow: props.grow,
      vertical: props.vertical
    })
    return {
      container: slots.container(),
      group: slots.group(),
      list: slots.list(),
      tab: slots.tab(),
      content: slots.content(),
      cursor: slots.cursor(),
      leftIcon: slots.leftIcon(),
      rightIcon: slots.rightIcon()
    }
  })
}

export default useStyle
