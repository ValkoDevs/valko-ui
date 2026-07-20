import { tv } from 'tailwind-variants'

const rating = tv({
  slots: {
    container: [
      'vk-rating',
      'flex',
      'gap-2'
    ],
    iconContainer: [
      'group',
      'relative',
      'inline-flex',
      'cursor-pointer'
    ],
    iconBase: [
      'vk-rating_icon',
      'text-on-surface',
      'group-hover:scale-130',
      'transition-transform',
      'duration-200',
      'ease-in-out'
    ],
    iconOverlay: [
      'absolute',
      'left-0',
      'top-0',
      'overflow-hidden',
      'pointer-events-none',
      'whitespace-nowrap',
      'group-hover:scale-130',
      'opacity-100',
      'transition-[width,transform,color,opacity]',
      'group-data-[hovering=true]:opacity-75',
      'duration-200',
      'ease-in-out'
    ]
  },
  variants: {
    size: {
      xs: {
        iconBase: [
          'text-xs'
        ],
        iconOverlay: [
          'text-xs'
        ]
      },
      sm: {
        iconBase: [
          'text-sm'
        ],
        iconOverlay: [
          'text-sm'
        ]
      },
      md: {
        iconBase: [
          'text-base'
        ],
        iconOverlay: [
          'text-base'
        ]
      },
      lg: {
        iconBase: [
          'text-lg'
        ],
        iconOverlay: [
          'text-lg'
        ]
      }
    },
    color: {
      primary: {
        iconBase: [
          'group-hover:text-on-primary-container'
        ],
        iconOverlay: [
          'text-primary',
          'group-data-[hovering=true]:text-on-primary-container'
        ]
      },
      secondary: {
        iconBase: [
          'group-hover:text-on-secondary-container'
        ],
        iconOverlay: [
          'text-secondary',
          'group-data-[hovering=true]:text-on-secondary-container'
        ]
      },
      positive: {
        iconBase: [
          'group-hover:text-on-positive-container'
        ],
        iconOverlay: [
          'text-positive',
          'group-data-[hovering=true]:text-on-positive-container'
        ]
      },
      warning: {
        iconBase: [
          'group-hover:text-on-warning-container'
        ],
        iconOverlay: [
          'text-warning',
          'group-data-[hovering=true]:text-warning-container'
        ]
      },
      negative: {
        iconBase: [
          'group-hover:text-on-negative-container'
        ],
        iconOverlay: [
          'text-negative',
          'group-data-[hovering=true]:text-on-negative-container'
        ]
      },
      accent: {
        iconBase: [
          'group-hover:text-on-accent-container'
        ],
        iconOverlay: [
          'text-accent',
          'group-data-[hovering=true]:text-on-accent-container'
        ]
      }
    },
    disabled: {
      true: {
        iconContainer: [
          'opacity-50',
          'cursor-not-allowed'
        ]
      },
      false: {}
    },
    animate: {
      true: {
        iconOverlay: [
          'animate-pop'
        ]
      }
    }
  }
})

export default rating
export type RatingSlots = typeof rating.slots
