import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    title: [
      'text-4xl',
      'font-bold'
    ],
    subtitle: [
      'text-2xl'
    ],
    divider: [
      'mb-4',
      'mt-1',
      'w-full',
      'border-light-4',
      'dark:border-dark-1'
    ],
    section: [
      'w-full',
      'mb-16'
    ],
    container: [
      'flex',
      'w-full',
      'flex-col',
      'justify-start',
      'items-start',
      'py-5'
    ],
    playground: [
      'flex',
      'flex-col',
      'gap-4',
      'md:flex-row',
      'items-stretch'
    ],
    playgroundView: [
      'flex',
      'w-full',
      'md:w-auto',
      'md:grow',
      'justify-center',
      'items-center',
      'border',
      'border-light-4',
      'dark:border-dark-1',
      'rounded'
    ],
    playgroundForm: [
      'w-full',
      'md:w-64',
      'shrink-0',
      'flex',
      'flex-col',
      'gap-4',
      'justify-start',
      'items-stretch'
    ]
  }
}) as unknown as ReturnType<TV>
