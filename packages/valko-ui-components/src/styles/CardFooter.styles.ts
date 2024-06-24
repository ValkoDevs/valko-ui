import { tv, type TV } from 'tailwind-variants'

export default tv({
  base: [
    'vk-cardfooter',
    'p-4',
    'group-data-[direction=col]:border-t-2',
    'group-data-[direction=col-reverse]:border-b-2',
    'border-light-4',
    'dark:border-dark-1'
  ]
}) as unknown as ReturnType<TV>
