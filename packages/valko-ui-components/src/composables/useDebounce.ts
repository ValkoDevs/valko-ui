const useDebounce = <T = unknown>(callback: () => T, timeout: number): () => Promise<T> => {
  let timer: ReturnType<typeof setTimeout> | undefined

  return () => {
    if (timer !== undefined) clearTimeout(timer)

    return new Promise((resolve) => {
      timer = setTimeout(() => resolve(callback()), timeout)
    })
  }
}

export default useDebounce
