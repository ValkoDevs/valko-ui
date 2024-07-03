import { tv, type TV } from 'tailwind-variants'

export default tv({
  base: [
    'vk-cardheader',
    'p-4',
    'border-light-4',
    'dark:border-dark-1'
  ]
}) as unknown as ReturnType<TV>
