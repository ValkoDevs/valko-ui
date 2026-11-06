import { ref } from 'vue'
import useOverlayStack from '#valkoui/composables/useOverlayStack.ts'
import type { OverlayStackEntry } from '#valkoui/types/OverlayStack.ts'

describe('useOverlayStack composable', () => {
  const stack = useOverlayStack()
  let entries: OverlayStackEntry[] = []

  const createEntry = (close: () => void = () => {}) => {
    const rootRef = ref<HTMLElement | null>(null)
    const panelRef = ref<HTMLElement | null>(null)
    const root = document.createElement('div')
    const panel = document.createElement('div')
    const child = document.createElement('button')
    panel.appendChild(child)
    root.appendChild(panel)
    document.body.appendChild(root)
    rootRef.value = root
    panelRef.value = panel
    const entry = stack.register({ rootRef, panelRef, close })
    entries.push(entry)
    return { entry, root, panel, child }
  }

  const clickOn = (target: Element) => {
    target.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }))
  }

  const pressEscape = () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
  }

  afterEach(() => {
    entries.forEach(entry => stack.unregister(entry))
    entries = []
    document.body.innerHTML = ''
  })

  it('closeAll closes every registered overlay', () => {
    const closeA = vi.fn()
    const closeB = vi.fn()
    createEntry(closeA)
    createEntry(closeB)

    stack.closeAll()

    expect(closeA).toHaveBeenCalledTimes(1)
    expect(closeB).toHaveBeenCalledTimes(1)
  })

  it('closes only the topmost overlay when clicking outside of them', () => {
    const closeA = vi.fn()
    const closeB = vi.fn()
    createEntry(closeA)
    createEntry(closeB)

    clickOn(document.body)

    expect(closeB).toHaveBeenCalledTimes(1)
    expect(closeA).not.toHaveBeenCalled()
  })

  it('keeps every overlay open when the click lands inside the topmost overlay', () => {
    const closeA = vi.fn()
    const closeB = vi.fn()
    createEntry(closeA)
    const b = createEntry(closeB)

    clickOn(b.child)

    expect(closeA).not.toHaveBeenCalled()
    expect(closeB).not.toHaveBeenCalled()
  })

  it('closes an overlay when its own backdrop is clicked', () => {
    const closeA = vi.fn()
    const closeB = vi.fn()
    createEntry(closeA)
    const b = createEntry(closeB)

    clickOn(b.root)

    expect(closeB).toHaveBeenCalledTimes(1)
    expect(closeA).not.toHaveBeenCalled()
  })

  it('closes only the topmost overlay when Escape is pressed', () => {
    const closeA = vi.fn()
    const closeB = vi.fn()
    createEntry(closeA)
    createEntry(closeB)

    pressEscape()

    expect(closeB).toHaveBeenCalledTimes(1)
    expect(closeA).not.toHaveBeenCalled()
  })

  it('stops reacting to clicks once the last overlay unregisters', () => {
    const closeA = vi.fn()
    const { entry } = createEntry(closeA)
    stack.unregister(entry)
    entries = []

    clickOn(document.body)

    expect(closeA).not.toHaveBeenCalled()
  })
})
