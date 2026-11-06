import { onBeforeUnmount, watch } from 'vue'
import type { OverlayStackEntry } from '#valkoui/types/OverlayStack.ts'

const stack: OverlayStackEntry[] = []
let detachListeners: (() => void) | null = null

const topmostEntry = () => stack[stack.length - 1]

const containingOverlay = (path: EventTarget[]) =>
  [...stack].reverse().find(entry => {
    const root = entry.rootRef.value
    return root !== null && path.includes(root)
  })

const handleClick = (event: MouseEvent) => {
  const path = event.composedPath()
  const target = containingOverlay(path) ?? topmostEntry()
  if (!target) return
  const panel = target.panelRef.value
  if (panel && path.includes(panel)) return
  target.close()
}

const handleEscape = (event: KeyboardEvent) => {
  if (event.key !== 'Escape') return
  const topmost = topmostEntry()
  if (!topmost) return
  event.preventDefault()
  topmost.close()
  event.stopImmediatePropagation()
}

const attachListeners = () => {
  if (detachListeners || typeof document === 'undefined') return
  document.addEventListener('click', handleClick, { capture: true })
  window.addEventListener('keydown', handleEscape, { capture: true })
  detachListeners = () => {
    document.removeEventListener('click', handleClick, { capture: true })
    window.removeEventListener('keydown', handleEscape, { capture: true })
    detachListeners = null
  }
}

const register = (entry: OverlayStackEntry) => {
  stack.push(entry)
  attachListeners()
  return entry
}

const unregister = (entry: OverlayStackEntry) => {
  const index = stack.indexOf(entry)
  if (index === -1) return
  stack.splice(index, 1)
  if (!stack.length) detachListeners?.()
}

const closeAll = () => {
  for (const entry of [...stack]) entry.close()
}

export interface StackableOverlayOptions {
  isOpen: () => boolean
  rootRef: OverlayStackEntry['rootRef']
  panelRef: OverlayStackEntry['panelRef']
  close: () => void
  stackable?: () => boolean
}

const useOverlayStack = ({ isOpen, stackable = () => false, rootRef, panelRef, close }: StackableOverlayOptions) => {
  let entry: OverlayStackEntry | null = null

  watch(isOpen, (open) => {
    if (open) {
      if (!stackable()) closeAll()
      entry = register({ rootRef, panelRef, close })
    } else if (entry !== null) {
      unregister(entry)
      entry = null
    }
  }, { immediate: true })

  onBeforeUnmount(() => {
    if (entry === null) return
    unregister(entry)
    entry = null
  })
}

export { useOverlayStack, register, unregister, closeAll }
export default useOverlayStack
