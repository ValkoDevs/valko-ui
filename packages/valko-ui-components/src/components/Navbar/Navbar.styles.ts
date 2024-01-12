import { tv } from 'tailwind-variants'
import { NavbarProps } from './interfaces'
import { computed } from 'vue'

const useStyle = (props: NavbarProps) => {
  const baseNavbar = tv({
    base: [
      'w-full',
      'h-16',
      'min-h-16',
      'bg-light-1',
      'dark:bg-dark-3',
      'px-4',
      'flex',
      'justify-items-center',
      'items-center',
      'shadow-lg'
    ],
    variants: {
      fixed: {
        true: ['sticky', 'top-0', 'left-0', 'right-0', 'z-50']
      },
      rounded: {
        true: 'rounded-b-2xl'
      },
      floating: {
        true: ['m-2', 'shadow-xl']
      }
    }
  })

  return computed(() => {
    return baseNavbar({
      fixed: props.fixed,
      rounded: props.rounded,
      floating: props.floating
    })
  })
}

export default useStyle
