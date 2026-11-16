import { ref, computed, toValue, nextTick } from 'vue'
import { CalendarDate, getLocalTimeZone } from '@internationalized/date'
import { VueWrapper, DOMWrapper, mount, flushPromises } from '@vue/test-utils'
import VkDatepicker from '#valkoui/components/Datepicker.vue'
import type { AdapterResult } from '#valkoui/types/Calendar'
import type { DatepickerProps } from '#valkoui/types/Datepicker'

const { useDateAdapter } = vi.hoisted(() => ({
  useDateAdapter: vi.fn(() => {
    const selected = new CalendarDate(2024, 10, 15)

    const format = (date: CalendarDate) => ({
      day: date.day,
      month: date.month - 1,
      year: date.year,
      lastDayOfMonth: date.set({ day: 1 }).add({ months: 1 }).set({ day: 1 }).subtract({ days: 1 }).day,
      firstWeekDay: date.toDate(getLocalTimeZone()).getDay(),
      obj: date
    })

    return [
      ref(selected),
      computed(() => '2024-10-15'),
      {
        formattedDates: computed(() => ({
          selected: format(selected),
          display: format(selected)
        })),
        isDateDisabled: () => false,
        onSelectDay: () => selected,
        onSelectMonth: () => selected,
        onSelectYear: () => selected,
        onPlaceholderChange: () => {},
        getWeekdays: () => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        getMonths: () => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }
    ] as unknown as AdapterResult
  })
}))

vi.mock('#valkoui/composables/useDateAdapter.ts', () => ({
  default: useDateAdapter
}))

const [ model, parsedModelValue, adapter ] = useDateAdapter()
const modelValue = toValue(model)
const parsedModel = toValue(parsedModelValue)

// The datepicker panel is portaled to document.body by Reka's Popover portal,
// so panel nodes must be looked up outside the wrapper element.
const contentEl = () => document.querySelector<HTMLElement>('.vk-datepicker__content')
const gridButtons = () =>
  Array.from(document.querySelectorAll<HTMLElement>('.vk-calendar__grid-button'))
    .map(el => new DOMWrapper(el))

describe('Datepicker component', () => {
  let wrapper: VueWrapper

  const mountDatepicker = (props: Record<string, unknown> & Pick<DatepickerProps, 'isOpen'>) => {
    wrapper = mount(VkDatepicker, {
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

  afterEach(() => {
    wrapper?.unmount()
    document.body.innerHTML = ''
  })

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        mountDatepicker({ isOpen: true })
      })

      it('should render', () => {
        expect(wrapper.find('.vk-datepicker').exists()).toBe(true)
      })

      it('should be color primary', async () => {
        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('focus:border-primary')
      })

      it('should be size md', () => {
        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('text-base')
      })

      it('should be variant filled', () => {
        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('bg-surface-container-highest')
      })

      it('should be shape soft', () => {
        expect(contentEl()?.className).toContain('rounded-lg')
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', async () => {
        mountDatepicker({
          isOpen: true,
          color: 'primary'
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('focus:border-primary')
      })

      it('should be color secondary when props.color is secondary', () => {
        mountDatepicker({
          isOpen: true,
          color: 'secondary'
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('focus:border-secondary')
      })

      it('should be color positive when props.color is positive', () => {
        mountDatepicker({
          isOpen: true,
          color: 'positive'
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('focus:border-positive')
      })

      it('should be color accent when props.color is accent', () => {
        mountDatepicker({
          isOpen: true,
          color: 'accent'
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('focus:border-accent')
      })

      it('should be color warning when props.color is warning', () => {
        mountDatepicker({
          isOpen: true,
          color: 'warning'
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('focus:border-warning')
      })

      it('should be color negative when props.color is negative', () => {
        mountDatepicker({
          isOpen: true,
          color: 'negative'
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('focus:border-negative')
      })

      it('should be color surface when props.color is surface', () => {
        mountDatepicker({
          isOpen: true,
          color: 'surface'
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('focus:border-on-surface')
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', async () => {
        mountDatepicker({
          isOpen: true,
          shape: 'rounded'
        })
        await flushPromises()

        expect(contentEl()?.className).toContain('rounded-2xl')
      })

      it('should be soft when props.shape is soft', async () => {
        mountDatepicker({
          isOpen: true,
          shape: 'soft'
        })
        await flushPromises()

        expect(contentEl()?.className).toContain('rounded-lg')
      })

      it('should be square when props.shape is square', async () => {
        mountDatepicker({
          isOpen: true,
          shape: 'square'
        })
        await flushPromises()

        expect(contentEl()?.className).toContain('rounded-none')
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        mountDatepicker({
          isOpen: true,
          size: 'xs'
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('text-xs')
      })

      it('should be sm when props.size is sm', () => {
        mountDatepicker({
          isOpen: true,
          size: 'sm'
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('text-sm')
      })

      it('should be md when props.size is md', () => {
        mountDatepicker({
          isOpen: true,
          size: 'md'
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('text-base')
      })

      it('should be lg when props.size is lg', () => {
        mountDatepicker({
          isOpen: true,
          size: 'lg'
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('text-lg')
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        mountDatepicker({
          isOpen: true,
          variant: 'filled'
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('bg-surface-container-highest')
      })

      it('should be outlined when props.variant is outlined', () => {
        mountDatepicker({
          isOpen: true,
          variant: 'outlined'
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('border-2')
      })

      it('should be ghost when props.variant is ghost', () => {
        mountDatepicker({
          isOpen: true,
          variant: 'ghost'
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('bg-transparent')
      })
    })
  })

  describe('Methods & Listeners', () => {
    it('should render the panel inside the document body when open', async () => {
      mountDatepicker({ isOpen: true })
      await flushPromises()

      const content = contentEl()
      expect(content).toBeTruthy()
      expect(wrapper.element.contains(content as HTMLElement)).toBe(false)
    })

    it('should not render the panel when closed', () => {
      mountDatepicker({ isOpen: false })

      expect(contentEl()).toBeFalsy()
    })
  })

  describe('Emits', () => {
    it('should emit update:modelValue event', async () => {
      mountDatepicker({ isOpen: true })
      await flushPromises()

      await gridButtons()[14]?.trigger('click')

      expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    })

    it('should emit open when the input is focused', async () => {
      mountDatepicker({ isOpen: false })

      await wrapper.findAll('.vk-input__input').at(0)?.trigger('focus')

      expect(wrapper.emitted()).toHaveProperty('open')
    })

    it('should emit close when a click occurs outside the root component', async () => {
      mountDatepicker({ isOpen: true })
      await flushPromises()
      await flushPromises()

      document.body.dispatchEvent(new MouseEvent('pointerdown', { bubbles: true }))
      await nextTick()

      expect(wrapper.emitted()).toHaveProperty('close')
    })

    it('should emit close when a date is selected', async () => {
      mountDatepicker({ isOpen: true })
      await flushPromises()

      await gridButtons()[0]?.trigger('click')

      expect(wrapper.emitted()).toHaveProperty('close')
    })
  })
})
