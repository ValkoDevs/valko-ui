import { tv } from 'tailwind-variants'

const skeleton = tv({
  slots: {
    container: [
      'vk-skeleton',
      'animate-pulse',
      'bg-gradient-to-br',
      'from-surface-container-low',
      'to-surface-container-highest'
    ]
  },
  variants: {
    shape: {
      rounded: {
        container: [
          'rounded-full'
        ]
      },
      square: {
        container: [
          'rounded-none'
        ]
      },
      soft: {
        container: [
          'rounded-lg'
        ]
      }
    }
  }
})

export default skeleton
export type SkeletonSlots = typeof skeleton.slots
