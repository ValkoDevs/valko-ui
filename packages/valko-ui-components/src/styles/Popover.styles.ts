import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      ''
    ]
  },
  variants: {
    variant: {
      filled: {},
      ghost: {},
      outlined: {}
    },
    color: {
      primary: {},
      secondary: {},
      success: {},
      info: {},
      warning: {},
      error: {},
      light: {},
      dark: {}
    },
    size: {
      xs: {},
      sm: {},
      md: {},
      lg: {}
    },
    flat: {
      true: {}
    },
    shape: {
      rounded: {},
      soft: {},
      square: {}
    }
  }
}) as unknown as ReturnType<TV>
