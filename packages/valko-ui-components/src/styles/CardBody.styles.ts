import { tv } from 'tailwind-variants'

const cardBody = tv({
  base: [
    'vk-card__body',
    'px-4',
    'my-4',
    'overflow-y-auto',
    'text-left',
    'z-30',
    'grow',
    'group-data-[card-image=true]:order-3',
    'group-data-[card-image=false]:order-2'
  ]
})

export default cardBody
export type CardBodySlots = typeof cardBody.base
