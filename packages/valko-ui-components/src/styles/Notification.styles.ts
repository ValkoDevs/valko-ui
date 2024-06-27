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
      neutral: {},
      success: {},
      info: {},
      warning: {},
      error: {}
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
      color: 'neutral',
      class: {
        notification: [
          'bg-light-4',
          'text-dark-1',
          'dark:bg-dark-3',
          'dark:text-light-3'
        ],
        progressbar: [
          'bg-dark-1',
          'dark:bg-light-3'
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
      color: 'neutral',
      class: {
        notification: [
          'border-light-4',
          'text-dark-1',
          'dark:border-dark-2',
          'dark:text-light-3'
        ],
        progressbar: [
          'bg-light-4',
          'dark:bg-dark-2'
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
      color: 'neutral',
      class: {
        notification: [
          'bg-light-4/[.20]',
          'text-dark-1',
          'dark:bg-dark-2/[.20]',
          'dark:text-light-3'
        ],
        progressbar: [
          'bg-light-4/[.40]',
          'dark:bg-dark-2/[.40]'
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
      color: 'neutral',
      class: {
        progressbar: [
          'bg-light-4',
          'dark:bg-dark-2'
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
    }
  ]
}) as unknown as ReturnType<TV>
