import useDebounce from '#valkoui/composables/useDebounce'

describe('useDebounce composable', () => {
  vi.useFakeTimers()
  const callback = vi.fn()

  afterEach(() => {
    vi.clearAllTimers()
    vi.resetAllMocks()
  })

  it('should call the callback after the specified timeout', async () => {
    const debounce = useDebounce(callback, 1000)

    debounce()
    expect(callback).not.toHaveBeenCalled()
    vi.advanceTimersByTime(1000)
    await Promise.resolve()

    expect(callback).toHaveBeenCalled()
  })

  it('should cancel the previous call if called again before timeout', async () => {
    const debounce = useDebounce(callback, 3000)

    debounce()
    vi.advanceTimersByTime(500)
    debounce()
    vi.advanceTimersByTime(2500)
    expect(callback).not.toHaveBeenCalled()
    vi.advanceTimersByTime(500)
    await Promise.resolve()

    expect(callback).toHaveBeenCalledTimes(1)
  })
})
