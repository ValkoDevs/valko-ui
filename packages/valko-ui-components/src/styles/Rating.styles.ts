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
      'vk-rating_icon'
    ],
    iconOverlay: [
      'absolute',
      'inset-0',
      'overflow-hidden',
      'pointer-events-none'
    ]
  },
  variants: {
    size: {
      xs: {
        iconBase: [
          'text-xs'
        ]
      },
      sm: {
        iconBase: [
          'text-sm'
        ]
      },
      md: {
        iconBase: [
          'text-base'
        ]
      },
      lg: {
        iconBase: [
          'text-lg'
        ]
      }
    },
    color: {
      primary: {
        iconBase: [
          'group-hover:text-on-primary'
        ],
        iconOverlay: [
          'text-primary'
        ]
      },
      secondary: {
        iconBase: [
          'group-hover:text-on-secondary'
        ],
        iconOverlay: [
          'text-secondary'
        ]
      },
      positive: {
        iconBase: [
          'group-hover:text-on-positive'
        ],
        iconOverlay: [
          'text-positive'
        ]
      },
      warning: {
        iconBase: [
          'group-hover:text-on-warning'
        ],
        iconOverlay: [
          'text-warning'
        ]
      },
      negative: {
        iconBase: [
          'group-hover:text-on-negative'
        ],
        iconOverlay: [
          'text-negative'
        ]
      },
      accent: {
        iconBase: [
          'group-hover:text-on-accent'
        ],
        iconOverlay: [
          'text-accent'
        ]
      },
      surface: {
        iconBase: [
          'group-hover:text-on-surface'
        ],
        iconOverlay: [
          'text-surface'
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
    }
  }
})

export default rating
export type RatingSlots = typeof rating.slots
