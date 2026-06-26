import { tv } from 'tailwind-variants'

const apitable = tv({
  slots: {
    title: [
      'text-2xl'
    ],
    itemCell: [
      'font-mono',
      'text-accent',
      'font-semibold'
    ],
    required: [
      'flex',
      'items-center',
      'justify-center',
      'w-full',
      'h-full'
    ],
    description: [
      'text-on-surface-variant',
      'block',
      'whitespace-pre-line'
    ],
    values: [
      'font-mono',
      'text-sm',
      'bg-surface-container',
      'rounded-lg',
      'p-2',
      'w-full',
      'flex',
      'flex-wrap',
      'gap-1'
    ],
    example: [
      'font-mono',
      'text-sm',
      'bg-surface-container',
      'rounded-lg',
      'p-2',
      'w-full',
      'flex',
      'justify-center'
    ]
  }
})

export default apitable
