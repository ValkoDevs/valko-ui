import { ref } from 'vue'
import useRipple from '../composables/useRipple'

describe('useRipple composable', () => {
  let element: HTMLElement
  let rippleHandler: (event: MouseEvent) => void

  beforeEach(() => {
    element = document.createElement('div')
    element.style.position = 'relative'
    document.body.appendChild(element)
    rippleHandler = useRipple(ref(element))
  })

  afterEach(() => {
    document.body.removeChild(element)
  })

  it('should create a ripple element on click', () => {
    const event = new MouseEvent('click', {
      clientX: 50,
      clientY: 50
    })
    rippleHandler(event)

    expect(element.querySelector('span')).not.toBeNull()
  })

  it('should add correct class to ripple', () => {
    const event = new MouseEvent('click', {
      clientX: 50,
      clientY: 50
    })

    rippleHandler(event)
    const ripple = element.querySelector('span')

    expect(ripple?.className).toContain('animate-ripple')
  })

  it('should remove the ripple after animation ends', () => {
    const event = new MouseEvent('click', {
      clientX: 50,
      clientY: 50
    })

    rippleHandler(event)
    const ripple = element.querySelector('span')
    ripple?.dispatchEvent(new Event('animationend'))

    expect(element.querySelector('span')).toBeNull()
  })

  it('should do nothing if element is null', () => {
    const nullHandler = useRipple(ref(null))
    const event = new MouseEvent('click', {
      clientX: 50,
      clientY: 50
    })

    expect(() => nullHandler(event)).not.toThrow()
  })
})
