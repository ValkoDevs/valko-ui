import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-fullcalendar__container',
      'w-full',
      'h-full',
      'flex',
      'flex-col'
    ],
    header: [
      'vk-fullcalendar__header',
      'w-full',
      'flex',
      'items-center',
      'justify-between',
      'p-2',
      'border-b',
      'border-neutral-500'
    ],
    content: []
  },
  variants: {
    variant: {
      filled: {},
      ghost: {},
      outlined: {}
    },
    color: {
      primary: {},
      neutral: {},
      success: {},
      info: {},
      warning: {},
      error: {}
    },
    size: {
      xs: {},
      sm: {},
      md: {},
      lg: {}
    },
    flat: {},
    shape: {}
  },
  compoundVariants: []
}) as unknown as ReturnType<TV>
