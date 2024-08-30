import useDebounce from '#valkoui/composables/useDebounce'

describe('useDebounce composable', () => {
  vi.useFakeTimers()

  it('should call the callback after the specified timeout', async () => {
    const callback = vi.fn()
    const debounce = useDebounce(callback, 1000)

    debounce()

    expect(callback).not.toHaveBeenCalled()

    vi.advanceTimersByTime(1000)

    expect(callback).toHaveBeenCalled()
  })

  it('should cancel the previous call if called again before timeout', async () => {
    const callback = vi.fn()
    const debounce = useDebounce(callback, 1000)

    debounce()
    debounce()

    vi.advanceTimersByTime(500)

    expect(callback).not.toHaveBeenCalled()

    vi.advanceTimersByTime(500)

    expect(callback).toHaveBeenCalledTimes(1)
  })

  afterEach(() => {
    vi.clearAllTimers()
  })
})
