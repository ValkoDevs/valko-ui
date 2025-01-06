import { tv, type TV } from 'tailwind-variants'

export default tv({
  base: [
    'vk-card__body',
    'px-4',
    'my-4',
    'overflow-y-auto',
    'text-left',
    'z-30',
    'grow',
    'order-3',
    'group-data-[layout=horizontal]:[grid-column:_2]'
  ]
}) as unknown as ReturnType<TV>
