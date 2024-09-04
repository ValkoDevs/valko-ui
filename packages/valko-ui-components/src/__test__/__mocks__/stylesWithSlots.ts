import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: 'mock-container-class',
    content: 'mock-content-class',
    title: 'mock-title-class',
    button: 'mock-button-class',
    span: 'mock-span-class',
    rightIcon: 'mock-rightIcon-class',
    leftIcon: 'mock-leftIcon-class'
  },
  variants: {
    variant: {
      filled: {
        title: ['mock-filled-title-class'],
        leftIcon: ['mock-filled-leftIcon-class'],
        rightIcon: ['mock-filled-rightIcon-class'],
        span: ['mock-filled-span-class']
      }
    }
  }
}) as unknown as ReturnType<TV>
