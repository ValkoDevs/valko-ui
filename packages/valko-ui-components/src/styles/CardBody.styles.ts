import { tv } from 'tailwind-variants'

export default tv({
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
