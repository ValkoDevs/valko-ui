import { tv, type TV } from 'tailwind-variants'

export default tv({
  base: [
    'w-full',
    'flex',
    'flex-col',
    'md:flex-row',
    'flex-wrap',
    'gap-4'
  ]
}) as unknown as ReturnType<TV>
