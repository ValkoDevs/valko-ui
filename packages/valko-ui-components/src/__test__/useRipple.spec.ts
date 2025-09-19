import { ref } from 'vue'
import useRipple from '../composables/useRipple'

describe('useRipple composable', () => {
  let element: HTMLElement
  let rippleHandler: (event: MouseEvent | TouchEvent) => void

  beforeEach(() => {
    element = document.createElement('div')
    element.style.position = 'relative'
    document.body.appendChild(element)
    rippleHandler = useRipple(ref(element))
  })

  afterEach(() => {
    document.body.removeChild(element)
  })

  it('should create a ripple container on click', () => {
    const event = new MouseEvent('click', {
      clientX: 50,
      clientY: 50
    })

    rippleHandler(event)

    expect(element.querySelector('.vk-ripple__container')).not.toBeNull()
  })

  it('should create a ripple element inside the container', () => {
    const event = new MouseEvent('click', {
      clientX: 50,
      clientY: 50
    })

    rippleHandler(event)

    expect(element.querySelector('.vk-ripple__ripple')).not.toBeNull()
  })

  it('should add correct class to ripple', () => {
    const event = new MouseEvent('click', {
      clientX: 50,
      clientY: 50
    })

    rippleHandler(event)
    const ripple = element.querySelector('.vk-ripple__ripple')

    expect(ripple?.className).toContain('animate-ripple')
  })

  it('should create a ripple container on touch', () => {
    const touch = {
      clientX: 50,
      clientY: 50
    } as Touch

    const event = new TouchEvent('touchstart', { touches: [touch] })
    rippleHandler(event)

    expect(element.querySelector('.vk-ripple__container')).not.toBeNull()
  })

  it('should create a ripple element inside the container on touch', () => {
    const touch = {
      clientX: 50,
      clientY: 50
    } as Touch

    const event = new TouchEvent('touchstart', { touches: [touch] })
    rippleHandler(event)

    expect(element.querySelector('.vk-ripple__ripple')).not.toBeNull()
  })

  it('should remove the ripple container after animation ends', () => {
    const event = new MouseEvent('click', {
      clientX: 50,
      clientY: 50
    })

    rippleHandler(event)
    const container = element.querySelector('.vk-ripple__container')
    expect(container).not.toBeNull()


    const ripple = container?.querySelector('.vk-ripple__ripple')
    ripple?.dispatchEvent(new Event('animationend'))

    expect(element.querySelector('.vk-ripple__container')).toBeNull()
  })

  it('should do nothing if element is null', () => {
    const nullHandler = useRipple(ref(null))
    const event = new MouseEvent('click', {
      clientX: 50,
      clientY: 50
    })

    expect(() => nullHandler(event)).not.toThrow()
  })

  it('should not create a ripple if touches.length > 1', () => {
    const touch1 = {
      clientX: 50,
      clientY: 50
    } as Touch

    const touch2 = {
      clientX: 60,
      clientY: 60
    } as Touch

    const event = new TouchEvent('touchstart', { touches: [touch1, touch2] })
    rippleHandler(event)

    expect(element.querySelector('.vk-ripple__container')).toBeNull()
  })
})
