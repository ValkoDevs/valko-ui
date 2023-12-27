import { tv } from 'tailwind-variants'
import { ExampleSectionProps } from './interfaces'
import { computed } from 'vue'

const useStyle = (props: ExampleSectionProps) => {
  const section = tv({
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
  })

  return computed(() => section(props))
}

export default useStyle
