import { h } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { CalendarDate } from '@internationalized/date'
import type { DateValue } from '@internationalized/date'
import { CalendarRoot } from 'reka-ui'
import VkCalendarDayView from '#valkoui/components/CalendarDayView.vue'
import useDateAdapter from '#valkoui/composables/useDateAdapter'
import type { CalendarAdapter } from '#valkoui/types/Calendar'

const modelValue = new CalendarDate(2024, 10, 15)
const october = new CalendarDate(2024, 10, 1)

const mountDayView = (options: {
  adapter: CalendarAdapter
  modelValue?: DateValue
  placeholder?: DateValue
  onUpdateModelValue?: (date: DateValue | undefined) => void
  onChangeMonth?: (operation: 1 | -1) => void
  onViewChange?: (view: string) => void
  attachTo?: HTMLElement
}) => mount({
  components: { VkCalendarDayView },
  setup() {
    return () => h(CalendarRoot, {
      modelValue: options.modelValue ?? modelValue,
      placeholder: options.placeholder ?? october,
      isDateDisabled: options.adapter.isDateDisabled,
      'onUpdate:modelValue': options.onUpdateModelValue
    }, {
      default: ({ grid, weekDays }: { grid: { value: DateValue, rows: DateValue[][] }[], weekDays: string[] }) => h(VkCalendarDayView, {
        modelValue: options.modelValue ?? modelValue,
        adapter: options.adapter,
        grid: grid[0],
        weekDays,
        onChangeMonth: options.onChangeMonth,
        onViewChange: options.onViewChange
      })
    })
  }
}, { attachTo: options.attachTo })

const dayButtons = (wrapper: VueWrapper) =>
  wrapper.findAll('.vk-calendar__grid-button').filter(btn => !isNaN(Number(btn.text())))

describe('CalendarDayView Component', () => {
  describe('Rendering', () => {
    it('should render the component', () => {
      const [, , adapter] = useDateAdapter({})
      adapter.onPlaceholderChange(october)
      const wrapper = mountDayView({ adapter })

      expect(wrapper.exists()).toBe(true)
    })

    it.each([
      ['February 2023', new CalendarDate(2023, 2, 1), 28],
      ['February 2024', new CalendarDate(2024, 2, 1), 29],
      ['April 2024', new CalendarDate(2024, 4, 1), 30],
      ['January 2024', new CalendarDate(2024, 1, 1), 31]
    ])('renders %i day cells for %s', (_label, placeholder, days) => {
      const [, , adapter] = useDateAdapter({})
      adapter.onPlaceholderChange(placeholder)
      const wrapper = mountDayView({ adapter, placeholder })

      expect(dayButtons(wrapper).length).toBe(days)
    })

    it('should render outside-view days as hidden placeholders', () => {
      const [, , adapter] = useDateAdapter({})
      adapter.onPlaceholderChange(october)
      const wrapper = mountDayView({ adapter })

      // October 2024: 2 leading (Sep 29-30) + 2 trailing (Nov 1-2) outside-view cells
      expect(wrapper.findAll('[role="gridcell"]').length).toBe(35)
      expect(wrapper.findAll('[data-reka-calendar-cell-trigger]').length).toBe(31)
    })
  })

  describe('Selection styling', () => {
    it('should grid button render with correct variant if selected', () => {
      const [, , adapter] = useDateAdapter({})
      adapter.onPlaceholderChange(october)
      const wrapper = mountDayView({ adapter })

      const selectedDayButton = dayButtons(wrapper).find(btn => btn.text() === '15')!

      expect(selectedDayButton.classes()).toContain('bg-primary')
    })

    it('should grid button render with correct variant if not selected', () => {
      const [, , adapter] = useDateAdapter({})
      adapter.onPlaceholderChange(october)
      const wrapper = mountDayView({ adapter })

      const unselectedDayButton = dayButtons(wrapper).find(btn => btn.text() === '10')!

      expect(unselectedDayButton.classes()).not.toContain('bg-primary')
      expect(unselectedDayButton.classes()).toContain('text-on-surface')
    })
  })

  describe('isArrowDisabled', () => {
    it('should disable previous month arrow if min date is reached', () => {
      const [, , adapter] = useDateAdapter({ minDate: new CalendarDate(2024, 10, 1) })
      adapter.onPlaceholderChange(october)
      const wrapper = mountDayView({ adapter })

      const isDisabled = wrapper.findAll('.vk-calendar__arrows').at(0)?.attributes('aria-disabled') === 'true'

      expect(isDisabled).toBe(true)
    })

    it('should disable next month arrow if max date is reached', () => {
      const [, , adapter] = useDateAdapter({ maxDate: new CalendarDate(2024, 10, 30) })
      adapter.onPlaceholderChange(october)
      const wrapper = mountDayView({ adapter })

      const isDisabled = wrapper.findAll('.vk-calendar__arrows').at(1)?.attributes('aria-disabled') === 'true'

      expect(isDisabled).toBe(true)
    })
  })

  describe('isDateDisabled and disable weekends', () => {
    it('should disable weekend days if disableWeekends is true', () => {
      const [, , adapter] = useDateAdapter({ disableWeekends: true })
      adapter.onPlaceholderChange(october)
      const wrapper = mountDayView({ adapter })

      const weekendDayButtons = dayButtons(wrapper).filter(btn => {
        const day = Number(btn.text())
        const date = new Date(2024, 9, day)
        const dayOfWeek = date.getDay()
        return dayOfWeek === 0 || dayOfWeek === 6
      })

      weekendDayButtons.forEach(btn => {
        expect(btn.attributes('aria-disabled')).toBe('true')
      })
    })

    it('should disable days included in disabledDates', () => {
      const [, , adapter] = useDateAdapter({ disabledDates: [new CalendarDate(2024, 10, 17)] })
      adapter.onPlaceholderChange(october)
      const wrapper = mountDayView({ adapter })

      const disabledButton = dayButtons(wrapper).find(btn => btn.text() === '17')!

      expect(disabledButton.attributes('aria-disabled')).toBe('true')
    })
  })

  describe('onArrowClick', () => {
    it('should emit changeMonth with -1 when previous arrow is clicked', async () => {
      const [, , adapter] = useDateAdapter({})
      adapter.onPlaceholderChange(october)
      const onChangeMonth = vi.fn()
      const wrapper = mountDayView({ adapter, onChangeMonth })

      await wrapper.findAll('.vk-calendar__arrows').at(0)?.trigger('click')

      expect(onChangeMonth).toHaveBeenCalledWith(-1)
    })

    it('should emit changeMonth with 1 when next arrow is clicked', async () => {
      const [, , adapter] = useDateAdapter({})
      adapter.onPlaceholderChange(october)
      const onChangeMonth = vi.fn()
      const wrapper = mountDayView({ adapter, onChangeMonth })

      await wrapper.findAll('.vk-calendar__arrows').at(1)?.trigger('click')

      expect(onChangeMonth).toHaveBeenCalledWith(1)
    })
  })

  describe('Keyboard', () => {
    it('should move focus to the next day cell when ArrowRight is pressed', async () => {
      const [, , adapter] = useDateAdapter({})
      adapter.onPlaceholderChange(october)
      const wrapper = mountDayView({ adapter, attachTo: document.body })

      const buttons = dayButtons(wrapper)
      const firstButton = buttons[0].element as HTMLElement
      firstButton.focus()

      expect(document.activeElement).toBe(firstButton)

      await buttons[0].trigger('keydown', { key: 'ArrowRight', code: 'ArrowRight' })

      expect(document.activeElement).toBe(buttons[1].element)

      wrapper.unmount()
    })
  })

  describe('Emits', () => {
    it('should emit viewChange when period button is clicked', async () => {
      const [, , adapter] = useDateAdapter({})
      adapter.onPlaceholderChange(october)
      const onViewChange = vi.fn()
      const wrapper = mountDayView({ adapter, onViewChange })

      await wrapper.find('.vk-calendar__period-button').trigger('click')

      expect(onViewChange).toHaveBeenCalledWith('months')
    })

    it('should emit update:modelValue on the root when a day is clicked', async () => {
      const [, , adapter] = useDateAdapter({})
      adapter.onPlaceholderChange(october)
      const onUpdateModelValue = vi.fn()
      const wrapper = mountDayView({ adapter, onUpdateModelValue })

      await dayButtons(wrapper).find(btn => btn.text() === '20')?.trigger('click')

      expect(onUpdateModelValue).toHaveBeenCalledWith(new CalendarDate(2024, 10, 20))
    })
  })
})
