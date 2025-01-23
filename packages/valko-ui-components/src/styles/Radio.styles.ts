import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-radio',
      'w-fit',
      'flex',
      'flex-col',
      'gap-1'
    ],
    radioContainer: [
      'vk-radio__radio-container',
      'w-fit',
      'flex',
      'justify-center',
      'items-center',
      'gap-1',
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
      'vk-radio__helpertext',
      'break-normal',
      'text-gray-500'
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
          'text-xs'
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
          'text-sm'
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
          'text-base'
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
      neutral: {},
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
      color: 'neutral',
      disabled: false,
      class: {
        radio: [
          'data-[checked=true]:bg-dark-4',
          'data-[checked=true]:border-dark-4',
          'data-[indeterminate=true]:border-dark-4',
          'data-[indeterminate=true]:bg-dark-4',
          'dark:data-[checked=true]:bg-light-3',
          'dark:data-[checked=true]:border-light-3',
          'dark:data-[indeterminate=true]:border-light-3',
          'dark:data-[indeterminate=true]:bg-light-3'
        ],
        icon: [
          'text-light-1',
          'dark:text-dark-3'
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
      color: 'neutral',
      disabled: false,
      class: {
        radio: [
          'data-[checked=true]:border-dark-4',
          'data-[indeterminate=true]:border-dark-4',
          'dark:data-[checked=true]:border-light-3',
          'dark:data-[indeterminate=true]:border-light-3'
        ],
        icon: [
          'text-dark-1',
          'dark:text-light-3'
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
      color: 'neutral',
      disabled: false,
      class: {
        radio: [
          'data-[checked=true]:bg-dark-5/[.5]',
          'data-[indeterminate=true]:bg-dark-5/[.5]',
          'dark:data-[checked=true]:bg-light-5/[.5]',
          'dark:data-[indeterminate=true]:bg-light-5/[.5]'
        ],
        icon: [
          'text-dark-1',
          'dark:text-light-3'
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
    }
  ]
}) as unknown as ReturnType<TV>
