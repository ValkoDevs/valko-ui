import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-checkbox',
      'w-fit',
      'flex',
      'flex-col',
      'gap-1'
    ],
    checkbox: [
      'vk-checkbox__checkbox',
      'border-2',
      'border-light-400',
      'shadow-lg',
      'shadow-light-300',
      'relative',
      'flex',
      'items-center',
      'justify-center',
      'dark:border-dark-600',
      'dark:shadow-dark-950'
    ],
    checkboxContainer: [
      'vk-checkbox__container',
      'w-fit',
      'flex',
      'justify-center',
      'items-center',
      'gap-1',
      'cursor-pointer'
    ],
    input: [
      'hidden'
    ],
    helpertext: [
      'vk-checkbox__helpertext',
      'break-normal',
      'text-gray-500'
    ],
    label: [
      'cursor-pointer'
    ],
    icon: [
      'text-light-50'
    ]
  },
  variants: {
    size: {
      xs: {
        checkbox: [
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
        checkbox: [
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
          'text-xs'
        ]
      },
      md: {
        checkbox: [
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
          'text-sm'
        ]
      },
      lg: {
        checkbox: [
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
          'text-base'
        ]
      }
    },
    variant: {
      filled: {},
      outlined: {},
      ghost: {
        checkbox: [
          'shadow-none',
          'border-0',
          'bg-light-400/[.15]',
          'dark:bg-dark-600/[.15]'
        ]
      }
    },
    color: {
      primary: {},
      neutral: {
        helpertext: [
          'text-dark-600',
          'dark:text-light-200'
        ]
      },
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
      }
    },
    disabled: {
      true: {
        checkbox: [
          'bg-gray-600',
          'text-gray-600',
          'opacity-50',
          'cursor-not-allowed',
          'data-[checked=true]:border-gray-600',
          'data-[checked=true]:bg-gray-600'
        ]
      }
    },
    labelPosition: {
      left: {
        container: [
          'flex-row-reverse',
          'justify-end'
        ],
        label: [
          'mr-2'
        ]
      },
      right: {
        label: [
          'ml-2'
        ]
      }
    },
    shape: {
      rounded: {
        checkbox: [
          'rounded-full'
        ]
      },
      soft: {
        checkbox: [
          'rounded'
        ]
      },
      square: {
        checkbox: [
          'rounded-none'
        ]
      }
    },
    flat: {
      true: {
        checkbox: [
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
      disabled: false,
      class: {
        checkbox: [
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
      color: 'neutral',
      disabled: false,
      class: {
        checkbox: [
          'data-[checked=true]:bg-dark-900',
          'data-[checked=true]:border-dark-900',
          'data-[indeterminate=true]:border-dark-900',
          'data-[indeterminate=true]:bg-dark-900',
          'dark:data-[checked=true]:bg-light-200',
          'dark:data-[checked=true]:border-light-200',
          'dark:data-[indeterminate=true]:border-light-200',
          'dark:data-[indeterminate=true]:bg-light-200'
        ],
        icon: [
          'text-light-50',
          'dark:text-dark-800'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'success',
      disabled: false,
      class: {
        checkbox: [
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
        checkbox: [
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
        checkbox: [
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
        checkbox: [
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
    // outlined & color
    {
      variant: 'outlined',
      color: 'primary',
      disabled: false,
      class: {
        checkbox: [
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
      color: 'neutral',
      disabled: false,
      class: {
        checkbox: [
          'data-[checked=true]:border-dark-900',
          'data-[indeterminate=true]:border-dark-900',
          'dark:data-[checked=true]:border-light-200',
          'dark:data-[indeterminate=true]:border-light-200'
        ],
        icon: [
          'text-dark-600',
          'dark:text-light-200'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'success',
      disabled: false,
      class: {
        checkbox: [
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
        checkbox: [
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
        checkbox: [
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
        checkbox: [
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
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      disabled: false,
      class: {
        checkbox: [
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
      color: 'neutral',
      disabled: false,
      class: {
        checkbox: [
          'data-[checked=true]:bg-light-300/[.15]',
          'data-[indeterminate=true]:bg-light-300/[.15]',
          'dark:data-[checked=true]:bg-dark-800/[.15]',
          'dark:data-[indeterminate=true]:bg-dark-800/[.15]'
        ],
        icon: [
          'text-dark-600',
          'dark:text-light-200'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      disabled: false,
      class: {
        checkbox: [
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
        checkbox: [
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
        checkbox: [
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
        checkbox: [
          'data-[checked=true]:bg-error-500/[.15]',
          'data-[indeterminate=true]:bg-error-500/[.15]',
          'dark:data-[checked=true]:bg-error-500/[.15]',
          'dark:data-[indeterminate=true]:bg-error-500/[.15]'
        ],
        icon: [
          'text-error-500'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
