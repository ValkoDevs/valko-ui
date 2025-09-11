import { Ref, toValue } from 'vue'

const useRipple = (elementRef: Ref<HTMLElement | null> | HTMLElement | null) => {
  return (event: MouseEvent) => {
    const normalizedElement = toValue(elementRef)
    if (!normalizedElement) return

    const ripple = document.createElement('span')
    ripple.className = 'absolute animate-ripple rounded-full events-none bg-current/[.5] z-20'

    const { left, top } = normalizedElement.getBoundingClientRect()
    const size = Math.max(normalizedElement.offsetWidth, normalizedElement.offsetHeight)

    const x = event.clientX - left - size / 2
    const y = event.clientY - top - size / 2

    Object.assign(ripple.style, {
      width: `${size}px`,
      height: `${size}px`,
      left: `${x}px`,
      top: `${y}px`
    })

    ripple.addEventListener('animationend', () => ripple.remove())
    normalizedElement.appendChild(ripple)
  }
}

export default useRipple
