import { tv, type TV } from 'tailwind-variants'

export default tv({
  base: [
    'vk-cardheader',
    'px-4',
    'pt-4',
    'mb-4',
    'min-h-10',
    'h-fit',
    'self-start',
    'border-light-4',
    'font-bold',
    'text-lg',
    'text-left',
    'z-30',
    'group-data-[layout=vertical]:order-1',
    'group-data-[layout=horizontal]:order-2',
    'group-data-[layout=horizontal]:[grid-column:_2]',
    'group-data-[layout=cover]:order-1',
    'dark:border-dark-1'
  ]
}) as unknown as ReturnType<TV>
