import type { OverlayStackEntry } from '#valkoui/types/OverlayStack.ts'

const stack: OverlayStackEntry[] = []
let detachListeners: (() => void) | null = null

const ownerForPath = (path: EventTarget[]) => {
  for (let i = stack.length - 1; i >= 0; i--) {
    const root = stack[i].rootRef.value
    if (root !== null && path.includes(root)) return stack[i]
  }
  return null
}

const handleClick = (event: MouseEvent) => {
  const path = event.composedPath?.() ?? []
  const target = ownerForPath(path) ?? stack[stack.length - 1]
  const panel = target?.panelRef.value
  if (!target || (panel !== null && path.includes(panel))) return
  target.close()
}

const handleKeydown = (event: Event) => {
  if ((event as KeyboardEvent).key !== 'Escape') return
  const topmost = stack[stack.length - 1]
  if (!topmost) return
  event.preventDefault()
  topmost.close()
  event.stopImmediatePropagation()
}

const attachListeners = () => {
  if (detachListeners || typeof document === 'undefined') return
  document.addEventListener('click', handleClick, true)
  window.addEventListener('keydown', handleKeydown, true)
  detachListeners = () => {
    document.removeEventListener('click', handleClick, true)
    window.removeEventListener('keydown', handleKeydown, true)
    detachListeners = null
  }
}

const useOverlayStack = () => {
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

  const closeOthers = () => {
    for (const entry of [...stack]) entry.close()
  }

  return { register, unregister, closeOthers }
}

export default useOverlayStack
