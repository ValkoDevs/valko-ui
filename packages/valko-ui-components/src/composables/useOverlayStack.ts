import type { Ref } from 'vue'

interface OverlayEntry {
  id: number
  rootRef: Ref<HTMLElement | null>
  panelRef: Ref<HTMLElement | null>
  close: () => void
}

// Module-scoped registry shared by every open overlay. It is the single
// dismissal authority for Dialog-based overlays: Headless UI's per-dialog
// outside click and Escape handlers don't coordinate stacked instances (and
// its preventDefault skips the handlers of dialogs registered later), so the
// stack decides who closes and the components ignore the Dialog close event.
const stack: OverlayEntry[] = []
let nextId = 1
let detachListeners: (() => void) | null = null

const topmostEntry = () => stack[stack.length - 1]

// The topmost overlay the click belongs to: its own dialog (including the
// backdrop) when the click landed inside one, otherwise nothing.
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
  // Matches Headless UI's own Escape behavior of shielding the app while a
  // dialog is open; only the topmost overlay reacts.
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

export function useOverlayStack() {
  const register = (entry: { rootRef: Ref<HTMLElement | null>, panelRef: Ref<HTMLElement | null>, close: () => void }) => {
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

  // Single-active policy (stackable: false): opening an overlay closes the
  // ones already open, topmost first.
  const closeOthers = (exceptId?: number) => {
    for (const entry of [...stack].reverse()) {
      if (entry.id !== exceptId) entry.close()
    }
  }

  return { register, unregister, closeOthers }
}

export default useOverlayStack
