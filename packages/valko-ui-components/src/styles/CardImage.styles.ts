import { tv } from 'tailwind-variants'

const cardImage = tv({
  slots: {
    container: [
      'vk-card__image',
      'min-h-48',
      'min-w-48',
      'w-full',
      'overflow-hidden',
      'relative',
      'grow',
      'group-data-[layout=vertical]:order-2',
      'group-data-[layout=horizontal]:order-1',
      'group-data-[layout=horizontal]:[grid-column:_1]',
      'group-data-[layout=horizontal]:[grid-row:_1_/_span_3]',
      'group-data-[layout=cover]:order-2',
      'group-data-[layout=cover]:absolute',
      'group-data-[layout=cover]:inset-0'
    ],
    imageTag: [
      'w-full',
      'h-full',
      'object-cover',
      'object-center'
    ],
    gradient: [
      'bg-gradient-to-b',
      'from-surface-bright',
      'to-surface-dim',
      'absolute',
      'inset-0',
      'group-data-[layout=cover]:block',
      'hidden',
      'opacity-50'
    ]
  }
})

export default cardImage
export type CardImageSlots = typeof cardImage.slots
