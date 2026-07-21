import useDebounce from '#valkoui/composables/useDebounce'

describe('useDebounce composable', () => {
  vi.useFakeTimers()
  const callback = vi.fn(() => true)
  let debouncedFunction: () => Promise<boolean>

  beforeEach(() => {
    debouncedFunction = useDebounce(callback, 1000)
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.clearAllTimers()
  })

  it('should call the callback after the specified timeout', () => {
    debouncedFunction()
    vi.advanceTimersByTime(1000)
    expect(callback).toHaveBeenCalled()
  })

  it('should cancel the previous call if called again before timeout', () => {
    debouncedFunction()
    vi.advanceTimersByTime(500)
    debouncedFunction()
    vi.advanceTimersByTime(600)
    expect(callback).not.toHaveBeenCalled()
  })

  it('should return the callback result', async () => {
    const resultPromise = debouncedFunction()
    vi.advanceTimersByTime(1000)
    const result = await resultPromise
    expect(result).toEqual(true)
  })
})
