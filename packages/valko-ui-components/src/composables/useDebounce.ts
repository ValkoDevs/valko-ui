const useDebounce = (callback: () => unknown, timeout: number) => {
  let timer: NodeJS.Timeout

  return () => {
    if (timer) clearTimeout(timer)

    return new Promise((resolve) => {
      timer = setTimeout(() => resolve(callback()), timeout)
    })
  }
}

export default useDebounce
