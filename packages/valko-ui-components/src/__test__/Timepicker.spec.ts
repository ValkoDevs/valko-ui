import { ref, computed, toValue, nextTick } from 'vue'
import { VueWrapper, DOMWrapper, mount, flushPromises } from '@vue/test-utils'
import VkTimepicker from '#valkoui/components/Timepicker.vue'
import type { TimeAdapterResult } from '#valkoui/types/Time'

const { useTimeAdapter } = vi.hoisted(() => ({
  useTimeAdapter: vi.fn(() => ([
    ref(1728987010),
    computed(() => '10:10:10'),
    {
      formattedTime: computed(() => ({
        selected: {
          hours: 10,
          minutes: 10,
          seconds: 10,
          obj: new Date(1728987010)
        },
        display: {
          hours: 10,
          minutes: 10,
          seconds: 10,
          obj: new Date(1728987010)
        }
      })),
      setDisplayUnit: vi.fn(),
      onSelectAMPM: vi.fn(),
      onSelectTime: vi.fn(),
      isTimeDisabled: vi.fn(),
      period: ref('AM')
    }
  ] as TimeAdapterResult))
}))

vi.mock('#valkoui/composables/useTimeAdapter.ts', async (importOriginal) => ({
  ...await importOriginal(),
  default: useTimeAdapter
}))

const [ model, parModel, adapter ] = useTimeAdapter()
const modelValue = toValue(model)
const parsedModel = toValue(parModel)

// The timepicker panel is portaled to document.body by Reka's Popover portal,
// so panel nodes must be looked up outside the wrapper element.
const contentEl = () => document.querySelector<HTMLElement>('.vk-timepicker__content')

let wrapper: VueWrapper

const mountTimepicker = (props: Record<string, unknown>) => {
  wrapper = mount(VkTimepicker, {
    attachTo: document.body,
    props: {
      modelValue,
      parsedModel,
      adapter,
      ...props
    }
  })
  return wrapper
}

describe('Time component', () => {
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkTimepicker, {
          props: {
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })
      })

      it('should render', () => {
        expect(wrapper.find('.vk-timepicker').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.vk-input__label').classes()).toContain('peer-focus:text-primary')
      })

      it('should be size md', () => {
        expect(wrapper.find('.vk-input__input').classes()).toContain('text-base')
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.vk-input__input').classes()).toContain('bg-surface-container-highest')
      })

      it('should be shape soft', async () => {
        await flushPromises()

        expect(contentEl()?.className).toContain('rounded-lg')
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            color: 'primary',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__label').classes()).toContain('peer-focus:text-primary')
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            color: 'secondary',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__label').classes()).toContain('peer-focus:text-secondary')
      })

      it('should be color positive when props.color is positive', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            color: 'positive',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__label').classes()).toContain('peer-focus:text-positive')
      })

      it('should be color accent when props.color is accent', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            color: 'accent',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__label').classes()).toContain('peer-focus:text-accent')
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            color: 'warning',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__label').classes()).toContain('peer-focus:text-warning')
      })

      it('should be color negative when props.color is negative', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            color: 'negative',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__label').classes()).toContain('peer-focus:text-negative')
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', async () => {
        mountTimepicker({ shape: 'rounded', isOpen: true })
        await flushPromises()

        expect(contentEl()?.className).toContain('rounded-2xl')
      })

      it('should be soft when props.shape is soft', async () => {
        mountTimepicker({ shape: 'soft', isOpen: true })
        await flushPromises()

        const input = wrapper.find('.vk-timepicker__input')
        await input.trigger('focusin')
        expect(contentEl()?.className).toContain('rounded-lg')
      })

      it('should be square when props.shape is square', async () => {
        mountTimepicker({ shape: 'square', isOpen: true })
        await flushPromises()

        const input = wrapper.find('.vk-timepicker__input')
        await input.trigger('focusin')
        expect(contentEl()?.className).toContain('rounded-none')
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            size: 'xs',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__input').classes()).toContain('text-xs')
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            size: 'sm',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__input').classes()).toContain('text-sm')
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            size: 'md',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__input').classes()).toContain('text-base')
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            size: 'lg',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__input').classes()).toContain('text-lg')
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            variant: 'filled',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__input').classes()).toContain('border-b-2')
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            variant: 'outlined',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__input').classes()).toContain('border-2')
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            variant: 'ghost',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__input').classes()).toContain('bg-transparent')
      })
    })

    describe('When format prop changes', () => {
      it('should render hour, minute and second segments for a 24-hour format', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            format: 'HH:mm:ss',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('[data-reka-time-field-segment="hour"]').exists()).toBe(true)
        expect(wrapper.find('[data-reka-time-field-segment="minute"]').exists()).toBe(true)
        expect(wrapper.find('[data-reka-time-field-segment="second"]').exists()).toBe(true)
        expect(wrapper.find('[data-reka-time-field-segment="dayPeriod"]').exists()).toBe(false)
      })

      it('should render the day period segment for a 12-hour format', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            format: 'hh:mm A',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('[data-reka-time-field-segment="dayPeriod"]').exists()).toBe(true)
      })

      it('should omit the seconds segment when the format has no seconds', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            format: 'HH:mm',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('[data-reka-time-field-segment="second"]').exists()).toBe(false)
      })

      it('should display the model time in the field segments', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            format: 'HH:mm:ss',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        const date = new Date(modelValue)

        expect(wrapper.find('[data-reka-time-field-segment="hour"]').text()).toBe(String(date.getHours()).padStart(2, '0'))
        expect(wrapper.find('[data-reka-time-field-segment="minute"]').text()).toBe(String(date.getMinutes()).padStart(2, '0'))
        expect(wrapper.find('[data-reka-time-field-segment="second"]').text()).toBe(String(date.getSeconds()).padStart(2, '0'))
      })
    })
  })

  describe('Methods & Listeners', () => {
    it('should render the panel inside the document body when open', async () => {
      mountTimepicker({ isOpen: true })
      await flushPromises()

      const content = contentEl()
      expect(content).toBeTruthy()
      expect(wrapper.element.contains(content as HTMLElement)).toBe(false)
    })

    it('should not render the panel when closed', () => {
      mountTimepicker({ isOpen: false })

      expect(contentEl()).toBeFalsy()
    })

    it('should not have document-level listeners after unmount', () => {
      const removeSpy = vi.spyOn(document, 'removeEventListener')
      const wrapper = mount(VkTimepicker, {
        props: {
          isOpen: true,
          modelValue,
          parsedModel,
          adapter
        }
      })

      wrapper.unmount()
      expect(removeSpy).not.toHaveBeenCalledWith('mousedown', expect.any(Function), true)
      removeSpy.mockRestore()
    })

    it('should expose a consumer aria-label on the field group', () => {
      mountTimepicker({
        isOpen: true,
        label: 'Meeting time',
        ariaLabel: 'Meeting time'
      })

      expect(wrapper.find('.vk-timepicker__input').attributes('aria-label')).toBe('Meeting time')
    })

    it('should associate the visible label with the field group', () => {
      mountTimepicker({
        isOpen: true,
        label: 'Meeting time'
      })

      const field = wrapper.find('.vk-timepicker__input')
      const labelId = field.attributes('aria-labelledby')
      expect(labelId).toBeTruthy()
      expect(wrapper.find(`#${labelId}`).text()).toContain('Meeting time')
    })

    it('should show invalid styling when the model is outside min/max', async () => {
      const minTime = 32400 // 09:00:00
      mountTimepicker({
        isOpen: true,
        minTime,
        maxTime: 61200, // 17:00:00
        modelValue: new Date(2024, 0, 1, 3, 0, 0).getTime() // 03:00 local, below min
      })
      await flushPromises()

      const invalidRoot = wrapper.find('[role="group"]')
      expect(invalidRoot.attributes('data-invalid')).toBeDefined()

      const input = wrapper.find('.vk-timepicker__input')
      expect(input.classes()).toContain('group-data-[invalid]:border-negative')
      expect(input.classes()).toContain('group-data-[invalid]:text-negative')
    })

    it('should emit close on Escape', async () => {
      mountTimepicker({ isOpen: true })
      await flushPromises()
      await flushPromises()

      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }))
      await nextTick()
      await nextTick()

      expect(wrapper.emitted()).toHaveProperty('close')
    })
  })

  describe('Emits', () => {
    it('should emit open event', async () => {
      const wrapper = mount(VkTimepicker, {
        props: {
          modelValue,
          isOpen: true,
          parsedModel,
          adapter
        }
      })

      const input = wrapper.find('.vk-timepicker__input')
      await input.trigger('focusin')

      expect(wrapper.emitted()).toHaveProperty('open')
    })

    it('should emit onSelect event', async () => {
      mountTimepicker({ isOpen: true })
      await flushPromises()

      await new DOMWrapper(document.querySelector('.vk-time__ok-button') as HTMLElement).trigger('click')

      expect(wrapper.emitted()).toHaveProperty('onSelect')
    })

    it('should emit close event', async () => {
      mountTimepicker({ isOpen: true })
      await flushPromises()

      await new DOMWrapper(document.querySelector('.vk-time__ok-button') as HTMLElement).trigger('click')

      expect(wrapper.emitted()).toHaveProperty('close')
    })

    it('should emit close when a click occurs outside the root component', async () => {
      mountTimepicker({ isOpen: true })
      await flushPromises()
      await flushPromises()

      document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }))
      await nextTick()
      await nextTick()

      expect(wrapper.emitted()).toHaveProperty('close')
    })
  })

  afterEach(() => {
    wrapper?.unmount()
    document.body.innerHTML = ''
  })
})
