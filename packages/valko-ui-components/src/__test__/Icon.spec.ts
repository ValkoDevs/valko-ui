import { VueWrapper, mount } from '@vue/test-utils'
import VkIcon from '#valkoui/components/Icon.vue'

describe('Icon component', () => {
  let wrapper: VueWrapper
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkIcon, {
          props: {
            name: 'home'
          }
        })
      })

      it('should render', () => {
        expect(wrapper.find('i.ti').exists()).toBe(true)
      })

      it('should have home icon', () => {
        expect(wrapper.find('i.ti.ti-home').exists()).toBe(true)
      })
    })

    describe('Should show custom icon when props.name is set', () => {
      it('should be bulb icon', () => {
        wrapper = mount(VkIcon, {
          props: {
            name: 'bulb-filled'
          }
        })

        expect(wrapper.find('i.ti.ti-bulb-filled').exists()).toBe(true)
      })
    })
  })
})
