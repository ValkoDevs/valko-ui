const useDebounce = <T = unknown>(callback: () => T, timeout: number): () => Promise<T> => {
  let timer: ReturnType<typeof setTimeout> | undefined

  return () => {
    if (timer) clearTimeout(timer)

    return new Promise((resolve) => {
      timer = setTimeout(() => resolve(callback()), timeout)
    })
  }
}

export default useDebounce
