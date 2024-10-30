import { tv, type TV } from 'tailwind-variants'

export default tv({
  base: [
    'w-full',
    'flex'
  ],
  variants: {
    wrap: {
      true: 'flex-wrap'
    },
    gap: {
      true: 'gap-4'
    },
    direction: {
      row: 'flex-row',
      col: 'flex-col'
    },
    justify: {
      normal: 'justify-normal',
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
      stretch: 'justify-stretch'
    },
    align: {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      baseline: 'items-baseline',
      stretch: 'items-stretch'
    }
  }
}) as unknown as ReturnType<TV>
