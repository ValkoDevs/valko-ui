import { Ref, toValue } from 'vue'

const useRipple = (elementRef: Ref<HTMLElement | null> | HTMLElement | null) => {
  return (event: MouseEvent | TouchEvent) => {
    // Normalize event and target element
    let normalizedEvent: MouseEvent | Touch

    if (event instanceof TouchEvent) {
      if (event.touches.length !== 1) return
      normalizedEvent = event.touches[0]
    } else {
      normalizedEvent = event
    }

    const normalizedElement = toValue(elementRef)
    if (!normalizedElement) return

    // Create and configure ripple elements
    const rippleContainer = document.createElement('div')
    rippleContainer.className = 'vk-ripple__container absolute inset-0 overflow-hidden pointer-events-none'

    const ripple = document.createElement('span')
    ripple.className = 'vk-ripple__ripple absolute animate-ripple rounded-full events-none bg-state-ripple'

    const { left, top } = normalizedElement.getBoundingClientRect()
    const size = Math.max(normalizedElement.offsetWidth * 2.5, normalizedElement.offsetHeight * 2.5)

    const x = normalizedEvent.clientX - left - size / 2
    const y = normalizedEvent.clientY - top - size / 2

    Object.assign(ripple.style, {
      height: `${size}px`,
      width: `${size}px`,
      left: `${x}px`,
      top: `${y}px`
    })

    ripple.addEventListener('animationend', () => rippleContainer.remove())

    // Append ripple to the initial element
    normalizedElement.appendChild(rippleContainer)
    rippleContainer.appendChild(ripple)
  }
}

export default useRipple
