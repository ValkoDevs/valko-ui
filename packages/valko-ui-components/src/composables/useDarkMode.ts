import { onMounted, onUnmounted, ref, Ref } from 'vue'

const useDarkMode = () => {
  const target: Ref<HTMLElement | null> = ref(null)
  const isDarkMode = ref(false)
  let observer: MutationObserver

  const checkTheme = () => {
    isDarkMode.value = !!target.value?.classList.contains('dark')
  }

  onMounted(() => {
    target.value = document.querySelector('html')
    checkTheme()
    observer = new MutationObserver(checkTheme)

    observer.observe(target.value as HTMLElement, {
      attributes: true
    })
  })

  onUnmounted(() => {
    observer && observer.disconnect()
  })
  return isDarkMode
}

export default useDarkMode
