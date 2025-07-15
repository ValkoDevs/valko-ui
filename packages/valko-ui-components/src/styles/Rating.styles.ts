import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-rating',
      'flex',
      'gap-2'
    ],
    icon: [
      'vk-rating__icon',
      'cursor-pointer',
      'transition-colors',
      'duration-150',
      'ease-in-out',
      'relative',
      'overflow-hidden'
    ],
    iconHalf: [
      'vk-rating__icon-half',
      'absolute',
      'top-0',
      'left-0',
      'h-full',
      'w-1/2',
      'overflow-hidden',
      'pointer-events-none'
    ]
  },
  variants: {
    color: {
      primary: {
        icon: [
          'data-[active=true]:text-primary',
          'data-[hover=true]:text-primary',
          'data-[half=true]:text-primary'
        ]
      },
      secondary: {
        icon: [
          'data-[active=true]:text-secondary',
          'data-[hover=true]:text-secondary',
          'data-[half=true]:text-secondary'
        ]
      },
      accent: {
        icon: [
          'data-[active=true]:text-accent',
          'data-[hover=true]:text-accent',
          'data-[half=true]:text-accent'
        ]
      },
      positive: {
        icon: [
          'data-[active=true]:text-positive',
          'data-[hover=true]:text-positive',
          'data-[half=true]:text-positive'
        ]
      },
      negative: {
        icon: [
          'data-[active=true]:text-negative',
          'data-[hover=true]:text-negative',
          'data-[half=true]:text-negative'
        ]
      }
    },
    size: {
      xs: {
        icon: [
          'text-sm'
        ]
      },
      sm: {
        icon: [
          'text-base'
        ]
      },
      md: {
        icon: [
          'text-xl'
        ]
      },
      lg: {
        icon: [
          'text-2xl'
        ]
      }
    },
    disabled: {}
  },
  compoundVariants: []
}) as unknown as ReturnType<TV>
