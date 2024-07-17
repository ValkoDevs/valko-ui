import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-cardimage',
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
    img: [
      'w-full',
      'h-full',
      'object-cover',
      'object-center'
    ],
    gradient: [
      'bg-gradient-to-b',
      'from-transparent',
      'to-black',
      'absolute',
      'inset-0',
      'group-data-[layout=cover]:block',
      'hidden'
    ]
  }
}) as unknown as ReturnType<TV>
