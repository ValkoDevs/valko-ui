import { tv } from 'tailwind-variants'

const exampleSection = tv({
  slots: {
    section: [
      'w-full',
      'mt-10',
      'overflow-visible',
      'relative'
    ],
    slotContainer: [
      'w-full',
      'px-4',
      'py-8',
      'bg-surface-container-lowest',
      'rounded-b-lg',
      'gap-4',
      'grid',
      'grid-cols-1',
      'relative',
      'overflow-visible'
    ],
    title: [
      'text-xl',
      'pl-3',
      'pt-3',
      'bg-surface-container-lowest',
      'rounded-t-lg'
    ],
    codeContainer: [
      'w-full',
      'p-4',
      'bg-surface-container-lowest',
      'rounded-b-lg'
    ]
  }
})

export default exampleSection
export type ExampleSectionSlots = typeof exampleSection.slots
