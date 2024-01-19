import { mount } from '@vue/test-utils'
import { VkAlert } from '.'

describe('Alert component', () => {
  it('should render', () => {
    const wrapper = mount(VkAlert, {
      props: {
        variant: 'filled',
        color: 'primary',
        size: 'md',
        icon: 'home',
        title: 'Alert title',
        closable: false,
        flat: true
      }
    })
    expect(wrapper.text()).toContain('Alert title')
  })

  it('should render without icon', () => {
    const wrapper = mount(VkAlert, {
      props: {
        variant: 'filled',
        color: 'primary',
        size: 'md',
        icon: null,
        title: 'Alert title',
        closable: false,
        flat: true
      }
    })
    expect(wrapper.text()).toContain('Alert title')
  })

  it('should close when clicked on close button', async () => {
    const wrapper = mount(VkAlert, {
      props: {
        variant: 'filled',
        color: 'primary',
        size: 'md',
        closable: true,
        flat: true
      }
    })

    wrapper.find('.vk-alert__close').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('close')
  })
})
