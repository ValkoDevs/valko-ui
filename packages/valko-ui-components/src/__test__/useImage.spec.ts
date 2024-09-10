import { nextTick } from 'vue'
import useImage from '#valkoui/composables/useImage.ts'

describe('useImage composable', () => {
  // it('should set verifiedSrc when image loads successfully', async () => {
  //   const { verifiedSrc } = useImage('example.url')

  //   await nextTick()

  //   expect(verifiedSrc.value).toBe('example.url')
  // })

  it('should set verifiedSrc to null when image fails to load', async () => {
    const { verifiedSrc } = useImage('')

    await nextTick()

    expect(verifiedSrc.value).toBe(null)
  })

  it('should handle undefined src gracefully', async () => {
    const { verifiedSrc } = useImage()

    await nextTick()

    expect(verifiedSrc.value).toBe(null)
  })
})
