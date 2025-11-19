import { tv } from 'tailwind-variants'

const cardFooter = tv({
  base: [
    'vk-card__footer',
    'px-4',
    'pb-4',
    'mt-4',
    'min-h-10',
    'h-fit',
    'self-end',
    'text-left',
    'z-30',
    'flex',
    'group-data-[card-image=true]:order-4',
    'group-data-[card-image=false]:order-3'
  ]
})

export default cardFooter
export type CardFooterSlots = typeof cardFooter.base
