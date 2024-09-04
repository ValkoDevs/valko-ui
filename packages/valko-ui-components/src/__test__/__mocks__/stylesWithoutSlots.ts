import { tv, type TV } from 'tailwind-variants'

export default tv({
  base: [
    'mock-base-class'
  ],
  variants: {
    variant: {
      filled: ['mock-filled-class'],
      outlined: ['mock-outlined-class'],
      ghost: ['mock-ghost-class']
    },
    size: {
      md: ['mock-md-size-class']
    }
  }
}) as unknown as ReturnType<TV>
