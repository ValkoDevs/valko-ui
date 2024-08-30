import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import useDarkMode from '#valkoui/composables/useDarkMode'

describe('useDarkMode composable', () => {
  let htmlElement: HTMLElement

  beforeEach(() => {
    htmlElement = document.createElement('html')
    document.querySelector = vi.fn().mockReturnValue(htmlElement)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should initialize with dark mode off if no dark class is present', () => {
    const wrapper = mount({
      setup() {
        const isDarkMode = useDarkMode()
        return { isDarkMode }
      },
      template: '<div></div>'
    })

    expect(wrapper.vm.isDarkMode).toBe(false)
  })

  it('should initialize with dark mode on if dark class is present', async () => {
    htmlElement.classList.add('dark')
    const wrapper = mount({
      setup() {
        const isDarkMode = useDarkMode()
        return { isDarkMode }
      },
      template: '<div></div>'
    })

    await nextTick()

    expect(wrapper.vm.isDarkMode).toBe(true)
  })

  it('should update isDarkMode when dark class is added or removed', async () => {
    const wrapper = mount({
      setup() {
        const isDarkMode = useDarkMode()
        return { isDarkMode }
      },
      template: '<div></div>'
    })

    expect(wrapper.vm.isDarkMode).toBe(false)

    htmlElement.classList.add('dark')
    await nextTick()

    expect(wrapper.vm.isDarkMode).toBe(true)

    htmlElement.classList.remove('dark')
    await nextTick()

    expect(wrapper.vm.isDarkMode).toBe(false)
  })

  it('should disconnect the observer on unmounted', () => {
    const disconnectSpy = vi.fn()
    vi.spyOn(window, 'MutationObserver').mockImplementation(() => {
      return {
        observe: vi.fn(),
        disconnect: disconnectSpy,
        takeRecords: vi.fn()
      } as unknown as MutationObserver
    })

    const wrapper = mount({
      setup() {
        const isDarkMode = useDarkMode()
        return { isDarkMode }
      },
      template: '<div></div>'
    })

    wrapper.unmount()
    expect(disconnectSpy).toHaveBeenCalled()
  })
})
