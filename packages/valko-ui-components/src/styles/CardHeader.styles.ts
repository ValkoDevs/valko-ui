import { tv } from 'tailwind-variants'

const cardHeader = tv({
  base: [
    'vk-card__header',
    'h-fit',
    'px-4',
    'py-2',
    'min-h-10',
    'flex',
    'self-start',
    'items-center',
    'font-bold',
    'text-lg',
    'text-left',
    'z-30',
    'group-data-[layout=vertical]:order-1',
    'group-data-[layout=horizontal]:group-data-[card-image=true]:order-2',
    'group-data-[layout=horizontal]:group-data-[card-image=false]:order-1',
    'group-data-[layout=cover]:order-1'
  ]
})

export default cardHeader
export type CardHeaderSlots = typeof cardHeader.base
