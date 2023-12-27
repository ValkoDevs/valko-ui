import { tv } from 'tailwind-variants'
import { MenuProps } from './interfaces'
import { computed } from 'vue'

const useStyle = (props: MenuProps) => {
  const baseMenu = tv({
    slots: {
      group: [
        'font-bold',
        'px-2'
      ],
      menu: [
        'w-full',
        'mb-4'
      ],
      item: [
        'w-full',
      ],
      content: [
        'flex',
        'py-2.5',
        'px-4',
        'transition',
        'hover:bg-light-3',
        'hover:dark:bg-dark-3',
        'data-[active=true]:text-primary-500',
        'data-[active=true]:bg-primary-500/[.15]',
        'data-[active=true]:dark:bg-primary-500/[.15]',
      ]
    },
    variants: {
      rounded: {
        true: {
          content: [
            'rounded-full'
          ]
        }
      },
      floating: {
        true: {
          item: [
            'px-2',
            'py-0.5'
          ],
          content: [
            'px-4',
            'py-2'
          ]
        }
      }
    }
  })

  return computed(() => {
    const slots = baseMenu({
      rounded: props.rounded,
      floating: props.floating,
    })

    return {
      group: slots.group(),
      menu: slots.menu(),
      item: slots.item(),
      content: slots.content(),
    }
  })
}

export default useStyle