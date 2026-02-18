import { ref, computed, toValue } from 'vue'
import { DOMWrapper, VueWrapper, mount } from '@vue/test-utils'
import VkTime from '#valkoui/components/Time.vue'
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

vi.mock('#valkoui/composables/useTimeAdapter.ts', () => ({
  default: useTimeAdapter
}))

const [ model, , adapter ] = useTimeAdapter()
const modelValue = toValue(model)

describe('Time component', () => {
  let wrapper: VueWrapper

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkTime, {
          props: {
            modelValue,
            adapter
          }
        })
      })

      it('should render', () => {
        expect(wrapper.find('.vk-time').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('bg-primary')
      })

      it('should be size md', () => {
        expect(wrapper.find('.vk-time__unit-button').classes()).toContain('size-7')
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('bg-primary')
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('rounded-sm')
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkTime, {
          props: {
            color: 'primary',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('bg-primary')
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkTime, {
          props: {
            color: 'secondary',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('bg-secondary')
      })

      it('should be color positive when props.color is positive', () => {
        wrapper = mount(VkTime, {
          props: {
            color: 'positive',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('bg-positive')
      })

      it('should be color accent when props.color is accent', () => {
        wrapper = mount(VkTime, {
          props: {
            color: 'accent',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('bg-accent')
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkTime, {
          props: {
            color: 'warning',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('bg-warning')
      })

      it('should be color negative when props.color is negative', () => {
        wrapper = mount(VkTime, {
          props: {
            color: 'negative',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('bg-negative')
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkTime, {
          props: {
            shape: 'rounded',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('rounded-full')
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkTime, {
          props: {
            shape: 'soft',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('rounded-sm')
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkTime, {
          props: {
            shape: 'square',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('rounded-none')
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkTime, {
          props: {
            size: 'xs',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__unit-button').classes()).toContain('size-5')
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkTime, {
          props: {
            size: 'sm',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__unit-button').classes()).toContain('size-6')
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkTime, {
          props: {
            size: 'md',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__unit-button').classes()).toContain('size-7')
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkTime, {
          props: {
            size: 'lg',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__unit-button').classes()).toContain('size-8')
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkTime, {
          props: {
            variant: 'filled',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('bg-primary')
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkTime, {
          props: {
            variant: 'outlined',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('border-primary')
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkTime, {
          props: {
            variant: 'ghost',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('bg-primary-container')
      })
    })
  })

  describe('Methods', () => {
    describe('formatMap', () => {
      it('should render 12 hour buttons when format is 12-hour', () => {
        const wrapper = mount(VkTime, {
          props: {
            modelValue,
            adapter,
            format: 'hh:mm:ss'
          }
        })

        expect(wrapper.findAll('.vk-time__unit-button').length).toBeGreaterThanOrEqual(12)
      })

      it('should render 24 hour buttons when format is 24-hour', () => {
        const wrapper = mount(VkTime, {
          props: {
            modelValue,
            adapter,
            format: 'HH:mm:ss'
          }
        })

        expect(wrapper.findAll('.vk-time__unit-button').length).toBeGreaterThanOrEqual(24)
      })
    })

    describe('selectedTime', () => {
      describe('Using display values', () => {
        let buttons: DOMWrapper<Element>[]

        beforeEach(() => {
          const wrapper = mount(VkTime, {
            props: {
              modelValue,
              adapter,
              format: 'HH:mm:ss'
            }
          })

          buttons = wrapper.findAll('.vk-time__unit-button')
        })

        it('should highlight hour matching display values', () => {
          // hours: index 0-23
          const hourBtn = buttons[10]
          expect(hourBtn?.classes()).toContain('bg-primary')
        })

        it('should highlight minute matching display values', () => {
          // minutes: index 24-83
          const minuteBtn = buttons[24 + 10]
          expect(minuteBtn?.classes()).toContain('bg-primary')
        })

        it('should highlight second matching display values', () => {
          // seconds: index 84-143
          const secondBtn = buttons[84 + 10]
          expect(secondBtn?.classes()).toContain('bg-primary')
        })
      })

      describe('Fallback to selected values', () => {
        let buttons: DOMWrapper<Element>[]
        beforeEach(() => {

          const mockAdapter = {
            ...adapter,
            formattedTime: computed(() => ({
              selected: { hours: 1, minutes: 2, seconds: 3, obj: new Date() }
              // display intentionally omitted
            }))
          }
          const wrapper = mount(VkTime, {
            props: {
              modelValue,
              // @ts-expect-error: Intentionally omitting display to test fallback to selected in selectedTime
              adapter: mockAdapter
            }
          })

          buttons = wrapper.findAll('.vk-time__unit-button')
        })

        it('should highlight hour matching selected value', () => {
          expect(buttons[1]?.classes()).toContain('bg-primary')
        })

        it('should highlight minute matching selected value', () => {
          expect(buttons[24 + 2]?.classes()).toContain('bg-primary')
        })

        it('should highlight second matching selected value', () => {
          expect(buttons[84 + 3]?.classes()).toContain('bg-primary')
        })
      })
    })

    describe('formatHour', () => {
      it('should render 12 for hour 0 in 12-hour format', () => {
        const wrapper = mount(VkTime, {
          props: {
            modelValue,
            adapter,
            format: 'hh:mm:ss'
          }
        })

        const hourBtn = wrapper.findAll('.vk-time__unit-button').find(btn => btn.text() === '12')

        expect(hourBtn).toBeTruthy()
      })

      it('should render 0 for hour 0 in 24-hour format', () => {
        const wrapper = mount(VkTime, {
          props: {
            modelValue,
            adapter,
            format: 'HH:mm:ss'
          }
        })

        const hourBtn = wrapper.findAll('.vk-time__unit-button').find(btn => btn.text() === '00')

        expect(hourBtn).toBeTruthy()
      })
    })
  })

  describe('Adapter methods', () => {
    it('should call setDisplayUnit for hour button', async () => {
      const wrapper = mount(VkTime, {
        props: {
          modelValue,
          adapter
        }
      })

      const unitContainer = wrapper.findAll('.vk-time__unit-container').at(0)
      await unitContainer?.findAll('.vk-time__unit-button').at(1)?.trigger('click')

      expect(adapter.setDisplayUnit).toHaveBeenCalledWith('h', 1)
    })

    it('should call setDisplayUnit for minute button', async () => {
      const wrapper = mount(VkTime, {
        props: {
          modelValue,
          adapter
        }
      })

      const unitContainer = wrapper.findAll('.vk-time__unit-container').at(1)
      await unitContainer?.findAll('.vk-time__unit-button').at(2)?.trigger('click')

      expect(adapter.setDisplayUnit).toHaveBeenCalledWith('m', 2)
    })

    it('should call setDisplayUnit for second button', async () => {
      const wrapper = mount(VkTime, {
        props: {
          modelValue,
          adapter
        }
      })

      const unitContainer = wrapper.findAll('.vk-time__unit-container').at(2)
      await unitContainer?.findAll('.vk-time__unit-button').at(3)?.trigger('click')

      expect(adapter.setDisplayUnit).toHaveBeenCalledWith('s', 3)
    })
  })

  describe('Period buttons', () => {
    describe('when period is AM', () => {
      let wrapper: VueWrapper
      let amBtn: DOMWrapper<Element> | undefined
      let pmBtn: DOMWrapper<Element> | undefined

      beforeEach(() => {
        const amAdapter = {
          ...adapter,
          period: ref<'AM' | 'PM'>('AM'),
          formattedTime: computed(() => ({
            selected: { hours: 8, minutes: 0, seconds: 0, obj: new Date(1728950400 * 1000) },
            display: { hours: 8, minutes: 0, seconds: 0, obj: new Date(1728950400 * 1000) }
          }))
        }

        wrapper = mount(VkTime, {
          props: {
            modelValue,
            adapter: amAdapter,
            format: 'HH:mm:ss A'
          }
        })

        const periodBtns = wrapper.findAll('button').filter(btn => btn.text() === 'AM' || btn.text() === 'PM')
        amBtn = periodBtns.find(btn => btn.text() === 'AM')
        pmBtn = periodBtns.find(btn => btn.text() === 'PM')
      })

      it('should render AM as selected', () => {
        expect(amBtn?.classes()).toContain('bg-primary')
      })

      it('should render PM as unselected', () => {
        expect(pmBtn?.classes()).toContain('text-on-surface')
      })
    })

    describe('when period is PM', () => {
      let wrapper: VueWrapper
      let amBtn: DOMWrapper<Element> | undefined
      let pmBtn: DOMWrapper<Element> | undefined

      beforeEach(() => {
        const pmAdapter = {
          ...adapter,
          period: ref<'AM' | 'PM'>('PM'),
          formattedTime: computed(() => ({
            selected: { hours: 15, minutes: 0, seconds: 0, obj: new Date(1728990000 * 1000) },
            display: { hours: 15, minutes: 0, seconds: 0, obj: new Date(1728990000 * 1000) }
          }))
        }

        wrapper = mount(VkTime, {
          props: {
            modelValue,
            adapter: pmAdapter,
            format: 'HH:mm:ss A'
          }
        })

        const periodBtns = wrapper.findAll('button').filter(btn => btn.text() === 'AM' || btn.text() === 'PM')
        amBtn = periodBtns.find(btn => btn.text() === 'AM')
        pmBtn = periodBtns.find(btn => btn.text() === 'PM')
      })

      it('should render PM as selected', () => {
        expect(pmBtn?.classes()).toContain('bg-primary')
      })

      it('should render AM as unselected', () => {
        expect(amBtn?.classes()).toContain('text-on-surface')
      })
    })

    describe('onSelectAMPM', () => {
      it('should call onSelectAMPM when clicking AM button', async () => {
        const wrapper = mount(VkTime, {
          props: {
            modelValue,
            adapter,
            format: 'hh:mm:ss A'
          }
        })

        const amBtn = wrapper.findAll('button').find(btn => btn.text() === 'AM')

        if (amBtn) {
          await amBtn.trigger('click')
          expect(adapter.onSelectAMPM).toHaveBeenCalledWith('AM')
        }
      })

      it('should call onSelectAMPM when clicking PM button', async () => {
        const wrapper = mount(VkTime, {
          props: {
            modelValue,
            adapter,
            format: 'hh:mm:ss A'
          }
        })

        const pmBtn = wrapper.findAll('button').find(btn => btn.text() === 'PM')

        if (pmBtn) {
          await pmBtn.trigger('click')
          expect(adapter.onSelectAMPM).toHaveBeenCalledWith('PM')
        }
      })
    })
  })

  describe('Emits', () => {
    it('should emit onSelect event', async () => {
      const wrapper = mount(VkTime, {
        props: {
          modelValue,
          adapter
        }
      })

      const button = wrapper.find('.vk-time__ok-button')
      await button.trigger('click')

      expect(wrapper.emitted()).toHaveProperty('onSelect')
    })
  })
})
