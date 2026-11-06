import type { OverlayStackEntry } from '#valkoui/types/OverlayStack.ts'

const stack: OverlayStackEntry[] = []
let nextId = 1
let detachListeners: (() => void) | null = null

const topmostEntry = () => stack[stack.length - 1]

const ownerForPath = (path: EventTarget[]) => {
  for (let i = stack.length - 1; i >= 0; i--) {
    const root = stack[i].rootRef.value
    if (root !== null && path.includes(root)) return stack[i]
  }
  return null
}

const handleClick = (event: MouseEvent) => {
  const path = event.composedPath?.() ?? []
  const owner = ownerForPath(path)
  const target = owner ?? topmostEntry()
  if (!target) return
  const panel = target.panelRef.value
  if (panel !== null && path.includes(panel)) return
  target.close()
}

const handleKeydown = (event: Event) => {
  if ((event as KeyboardEvent).key !== 'Escape') return
  const topmost = topmostEntry()
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
  const register = (entry: Omit<OverlayStackEntry, 'id'>) => {
    const id = nextId++
    stack.push({ id, rootRef: entry.rootRef, panelRef: entry.panelRef, close: entry.close })
    attachListeners()
    return id
  }

  const unregister = (id: number) => {
    const index = stack.findIndex(entry => entry.id === id)
    if (index === -1) return
    stack.splice(index, 1)
    if (!stack.length) detachListeners?.()
  }

  const closeOthers = (exceptId?: number) => {
    for (const entry of [...stack].reverse()) {
      if (entry.id !== exceptId) entry.close()
    }
  }

  return { register, unregister, closeOthers }
}

export default useOverlayStack
