import { type Ref, watchEffect, ref } from 'vue'

const useImage = (src?: string) => {
  const verifiedSrc: Ref<string | null> = ref(null)
  const img: HTMLImageElement = new Image()

  watchEffect(async () => {
    img.src = src ?? ''

    try {
      await img.decode()
      verifiedSrc.value = src || null
    } catch {
      verifiedSrc.value = null
    }
  })

  return {
    img,
    verifiedSrc
  }
}

export default useImage
