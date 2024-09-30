import { VueWrapper, mount } from '@vue/test-utils'
import VkCardImage from '#valkoui/components/CardImage.vue'

const { useImage } = vi.hoisted(() => ({
  useImage: vi.fn((src) => ({
    img: new Image(),
    verifiedSrc: src
  }))
}))

vi.mock('#valkoui/composables/useImage.ts', () => ({
  default: useImage
}))

describe('CardImage component', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(VkCardImage, {
      props: {
        src: 'exampleSrc'
      }
    })
  })

  describe('Default props', () => {
    it('should render', () => {
      expect(wrapper.find('.vk-cardimage').exists()).toBe(true)
    })

    it('should be height auto & width 100%', () => {
      expect(wrapper.attributes().style).toBe('width: 100%; height: auto;')
    })

    it('should have an alt', () => {
      expect(wrapper.find('img').attributes('alt')).toBe('card-image')
    })
  })

  describe('When src prop changes', () => {
    it('should have the correct src', () => {
      expect(wrapper.find('img').attributes('src')).toBe('exampleSrc')
    })

    it('should have called useImage when initialized', () => {
      expect(useImage).toHaveBeenCalledWith('exampleSrc')
    })
  })

  describe('When width prop changes', () => {
    it('should be the given width', () => {
      wrapper = mount(VkCardImage, {
        props: {
          src: 'exampleSrc',
          width: '50'
        }
      })

      expect(wrapper.attributes().style).toBe('height: auto;')
    })
  })

  describe('When height prop changes', () => {
    it('should be the given height', () => {
      wrapper = mount(VkCardImage, {
        props: {
          src: 'exampleSrc',
          height: '100'
        }
      })

      expect(wrapper.attributes().style).toBe('width: 100%;')
    })
  })

  describe('When alt prop changes', () => {
    it('should be the given alt', () => {
      wrapper = mount(VkCardImage, {
        props: {
          src: 'exampleSrc',
          alt: 'exampleAlt'
        }
      })

      expect(wrapper.find('img').attributes('alt')).toBe('exampleAlt')
    })
  })

  describe('When verifiedSrc is null', () => {
    it('should not render the img element', () => {
      useImage.mockReturnValue({ img: new Image(), verifiedSrc: null })

      const wrapper = mount(VkCardImage, {
        props: {
          src: 'exampleSrc'
        }
      })

      expect(wrapper.find('img').exists()).toBe(false)
    })
  })
})
