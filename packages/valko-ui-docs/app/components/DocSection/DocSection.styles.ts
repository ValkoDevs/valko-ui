import { tv } from 'tailwind-variants'

const docSection = tv({
  slots: {
    title: [
      'text-4xl',
      'font-bold'
    ],
    subtitle: [
      'text-2xl'
    ],
    section: [
      'w-full',
      'mb-16',
      'relative',
      'overflow-visible'
    ],
    container: [
      'w-full',
      'flex',
      'flex-col',
      'justify-start',
      'items-start',
      'py-5',
      'relative',
      'overflow-visible'
    ],
    playground: [
      'flex',
      'flex-col',
      'gap-4',
      'md:flex-row',
      'items-stretch'
    ],
    playgroundView: [
      'w-full',
      'bg-surface-container-lowest',
      'p-2',
      'md:p-4',
      'lg:p-8',
      'flex',
      'md:w-auto',
      'md:grow',
      'justify-center',
      'items-center',
      'border',
      'border-outlined',
      'rounded',
      'overflow-x-auto'
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
    ],
    apiContainer: [
      'flex',
      'flex-col',
      'justify-around',
      'items-start',
      'gap-4',
      'text-xl'
    ]
  }
})

export default docSection
export type DocSectionSlots = typeof docSection.slots
