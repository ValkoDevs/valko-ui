import { type TV, tv } from 'tailwind-variants'

export default tv({
  slots: {
    notification: [
      'vk-notification',
      'shadow-md',
      'overflow-hidden'
    ],
    container: [
      'w-full',
      'flex',
      'justify-start',
      'items-start'
    ],
    content: [
      'w-full',
      'p-3',
      'break-words',
      'flex',
      'justify-start',
      'items-start'
    ],
    progressbar: [
      'absolute',
      'bottom-0',
      'left-0',
      'transition-all',
      'duration-100'
    ],
    icon: [
      'ti',
      'ti-x',
      'p-2',
      'text-xs'
    ]
  },
  variants: {
    variant: {
      filled: {
        notification: [
          'text-white'
        ],
        progressbar: [
          'bg-light-1'
        ]
      },
      ghost: {
        notification: [
          'shadow-none',
          'backdrop-blur'
        ]
      },
      outlined: {
        notification: [
          'border-2',
          'bg-light-1',
          'dark:bg-dark-3'
        ],
        content: [
          'p-[calc(0.75rem_-_2px)]'
        ]
      },
      line: {
        notification: [
          'bg-light-3',
          'dark:bg-dark-3'
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
    size: {
      xs: {
        notification: [
          'w-40'
        ],
        content: [
          'text-xs'
        ],
        progressbar: [
          'h-0.5'
        ]
      },
      sm: {
        notification: [
          'w-44'
        ],
        content: [
          'text-sm'
        ],
        progressbar: [
          'h-0.5'
        ]
      },
      md: {
        notification: [
          'w-48'
        ],
        content: [
          'text-base'
        ],
        progressbar: [
          'h-[3px]'
        ]
      },
      lg: {
        notification: [
          'w-52'
        ],
        content: [
          'text-lg'
        ],
        progressbar: [
          'h-1'
        ]
      }
    },
    shape: {
      rounded: {
        notification: [
          'rounded-full'
        ]
      },
      soft: {
        notification: [
          'rounded-lg'
        ]
      },
      square: {
        notification: [
          'rounded-none'
        ]
      }
    },
    flat: {
      true: {
        notification: [
          'shadow-none'
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
        notification: [
          'bg-primary-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      class: {
        notification: [
          'bg-secondary-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'success',
      class: {
        notification: [
          'bg-success-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'info',
      class: {
        notification: [
          'bg-info-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      class: {
        notification: [
          'bg-warning-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'error',
      class: {
        notification: [
          'bg-error-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'light',
      class: {
        notification: [
          'bg-light-1',
          'text-black'
        ],
        progressbar: [
          'bg-dark-3'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'dark',
      class: {
        notification: [
          'bg-dark-5'
        ]
      }
    },
    // outlined & color
    {
      variant: 'outlined',
      color: 'primary',
      class: {
        notification: [
          'border-primary-500',
          'text-primary-500'
        ],
        progressbar: [
          'bg-primary-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'secondary',
      class: {
        notification: [
          'border-secondary-500',
          'text-secondary-500'
        ],
        progressbar: [
          'bg-secondary-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'success',
      class: {
        notification: [
          'border-success-500',
          'text-success-500'
        ],
        progressbar: [
          'bg-success-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'info',
      class: {
        notification: [
          'border-info-500',
          'text-info-500'
        ],
        progressbar: [
          'bg-info-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      class: {
        notification: [
          'border-warning-500',
          'text-warning-500'
        ],
        progressbar: [
          'bg-warning-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'error',
      class: {
        notification: [
          'border-error-500',
          'text-error-500'
        ],
        progressbar: [
          'bg-error-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'light',
      class: {
        notification: [
          'border-light-1',
          'text-light-1'
        ],
        progressbar: [
          'bg-light-1'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'dark',
      class: {
        notification: [
          'border-dark-5',
          'text-dark-5'
        ],
        progressbar: [
          'bg-dark-5'
        ]
      }
    },
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      class: {
        notification: [
          'bg-primary-500/[.20]',
          'text-primary-500'
        ],
        progressbar: [
          'bg-primary-500/[.40]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: {
        notification: [
          'bg-secondary-500/[.20]',
          'text-secondary-500'
        ],
        progressbar: [
          'bg-secondary-500/[.40]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      class: {
        notification: [
          'bg-success-500/[.20]',
          'text-success-500'
        ],
        progressbar: [
          'bg-success-500/[.40]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'info',
      class: {
        notification: [
          'bg-info-500/[.20]',
          'text-info-500'
        ],
        progressbar: [
          'bg-info-500/[.40]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        notification: [
          'bg-warning-500/[.20]',
          'text-warning-500'
        ],
        progressbar: [
          'bg-warning-500/[.40]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'error',
      class: {
        notification: [
          'bg-error-500/[.20]',
          'text-error-500'
        ],
        progressbar: [
          'bg-error-500/[.40]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'light',
      class: {
        notification: [
          'bg-light-1/[.20]',
          'text-light-1'
        ],
        progressbar: [
          'bg-light-1/[.40]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'dark',
      class: {
        notification: [
          'bg-dark-5/[.20]',
          'text-dark-1'
        ],
        progressbar: [
          'bg-dark-5/[.40]'
        ]
      }
    },
    // line & color
    {
      variant: 'line',
      color: 'primary',
      class: {
        progressbar: [
          'bg-primary-500'
        ]
      }
    },
    {
      variant: 'line',
      color: 'secondary',
      class: {
        progressbar: [
          'bg-secondary-500'
        ]
      }
    },
    {
      variant: 'line',
      color: 'success',
      class: {
        progressbar: [
          'bg-success-500'
        ]
      }
    },
    {
      variant: 'line',
      color: 'info',
      class: {
        progressbar: [
          'bg-info-500'
        ]
      }
    },
    {
      variant: 'line',
      color: 'warning',
      class: {
        progressbar: [
          'bg-warning-500'
        ]
      }
    },
    {
      variant: 'line',
      color: 'error',
      class: {
        progressbar: [
          'bg-error-500'
        ]
      }
    },
    {
      variant: 'line',
      color: 'light',
      class: {
        progressbar: [
          'bg-light-1'
        ]
      }
    },
    {
      variant: 'line',
      color: 'dark',
      class: {
        progressbar: [
          'bg-dark-5'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
