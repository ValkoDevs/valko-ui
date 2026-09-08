import VkCalendarMonthView from '#valkoui/components/CalendarMonthView.vue'
import { ref, computed, toValue } from 'vue'
import { VueWrapper, mount } from '@vue/test-utils'
import type { AdapterResult } from '#valkoui/types/Calendar'
import useGridKeyboardNav from '#valkoui/composables/useGridKeyboardNav.ts'

vi.mock('#valkoui/composables/useGridKeyboardNav.ts', () => ({
  default: vi.fn(() => vi.fn())
}))

const useGridKeyboardNavMock = vi.mocked(useGridKeyboardNav)

const { useDateAdapter } = vi.hoisted(() => ({
  useDateAdapter: vi.fn(() => ([
    ref(1729017518),
    computed(() => '2024-10-15'),
    {
      formattedDates: computed(() => ({
        selected: {
          day: 15,
          month: 9,
          year: 2024,
          lastDayOfMonth: 31,
          firstWeekDay: 2,
          obj: new Date(2024, 10, 15)
        },
        display: {
          day: 15,
          month: 9,
          year: 2024,
          lastDayOfMonth: 31,
          firstWeekDay: 2,
          obj: new Date(2024, 10, 15)
        }
      })),
      disabledDates: computed(() => [
        1705320000000,
        1710936000000,
        1717545600000,
        1723420800000,
        1736953200000,
        1900249200000,
        2215004400000
      ]),
      onSelectDay: vi.fn(() => 1728961200000),
      onSelectMonth: vi.fn(() => 1727751600000),
      onSelectYear: vi.fn(() => 1704078000000),
      getWeekdays: () => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      getMonths: () => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  ] as AdapterResult))
}))

vi.mock('#valkoui/composables/useDateAdapter.ts', () => ({
  default: useDateAdapter
}))

const [ model, , adapter ] = useDateAdapter()
const modelValue = toValue(model)

const baseProps = {
  modelValue,
  adapter,
  format: 'DD-MM-YYYY',
  selected: adapter.formattedDates.value.selected,
  display: adapter.formattedDates.value.display,
  monthNames: adapter.getMonths()
}

describe('CalendarMonthView Component', () => {
  describe('Rendering', () => {
    let wrapper: VueWrapper

    beforeEach(() => {
      wrapper = mount(VkCalendarMonthView, {
        props: {
          ...baseProps
        }
      })
    })

    it('should render the component', () => {
      expect(wrapper.exists()).toBe(true)
    })

    it('should render all month buttons', () => {
      expect(wrapper.findAll('.vk-calendar__grid-button')).toHaveLength(12)
    })
  })

  describe('Methods & Computed', () => {
    describe('isSelected', () => {
      let wrapper: VueWrapper

      beforeEach(() => {
        wrapper = mount(VkCalendarMonthView, {
          props: {
            ...baseProps
          }
        })
      })

      it('should render the selected month with the selected variant', () => {
        expect(
          wrapper.findAll('.vk-calendar__grid-button')[9]?.classes()
        ).toContain('bg-primary')
      })

      it('should render unselected months with the default variant', () => {
        expect(
          wrapper.findAll('.vk-calendar__grid-button')[0]?.classes()
        ).toContain('text-on-surface')
      })
    })

    describe('isMonthDisabled', () => {
      it('should disable months before the minimum month', () => {
        const wrapper = mount(VkCalendarMonthView, {
          props: {
            ...baseProps,
            min: {
              day: 1,
              month: 4,
              year: 2024,
              lastDayOfMonth: 30,
              firstWeekDay: 1,
              obj: new Date(2024, 4, 1)
            }
          }
        })

        expect(
          wrapper.findAll('.vk-calendar__grid-button')
            .slice(0, 4)
            .every(btn => btn.attributes('aria-disabled') === 'true')
        ).toBe(true)
      })

      it('should disable months after the maximum month', () => {
        const wrapper = mount(VkCalendarMonthView, {
          props: {
            ...baseProps,
            max: {
              day: 1,
              month: 7,
              year: 2024,
              lastDayOfMonth: 31,
              firstWeekDay: 1,
              obj: new Date(2024, 7, 1)
            }
          }
        })

        expect(
          wrapper.findAll('.vk-calendar__grid-button')
            .slice(8)
            .every(btn => btn.attributes('aria-disabled') === 'true')
        ).toBe(true)
      })
    })

    describe('onArrowClick', () => {
      let wrapper: VueWrapper

      beforeEach(() => {
        wrapper = mount(VkCalendarMonthView, {
          props: {
            ...baseProps
          }
        })
      })

      it('should emit the previous year', async () => {
        await wrapper.findAll('.vk-calendar__arrows')[0]?.trigger('click')

        expect(wrapper.emitted('changeYear')?.[0]).toEqual([2023])
      })

      it('should emit the next year', async () => {
        await wrapper.findAll('.vk-calendar__arrows')[1]?.trigger('click')

        expect(wrapper.emitted('changeYear')?.[0]).toEqual([2025])
      })
    })
  })

  describe('Emits', () => {
    let wrapper: VueWrapper

    beforeEach(() => {
      wrapper = mount(VkCalendarMonthView, {
        props: {
          ...baseProps
        }
      })
    })

    it('should emit selectMonth when a month is clicked', async () => {
      await wrapper.findAll('.vk-calendar__grid-button')[4]?.trigger('click')

      expect(wrapper.emitted('selectMonth')?.[0]).toEqual([4])
    })

    it('should emit viewChange when the period button is clicked', async () => {
      await wrapper.find('.vk-calendar__period-button').trigger('click')

      expect(wrapper.emitted('viewChange')?.[0]).toEqual(['years'])
    })
  })

  describe('Keyboard Navigation', () => {
    describe('useGridKeyboardNav', () => {
      beforeEach(() => {
        useGridKeyboardNavMock.mockClear()

        mount(VkCalendarMonthView, {
          props: {
            ...baseProps
          }
        })
      })

      it('should configure the keyboard navigation callbacks', () => {
        expect(useGridKeyboardNavMock).toHaveBeenCalledWith(
          expect.objectContaining({
            onMove: expect.any(Function),
            onSelect: expect.any(Function)
          })
        )
      })

      it('should provide the correct itemCount', () => {
        const config = useGridKeyboardNavMock.mock.calls[0][0]

        expect(toValue(config.itemCount)).toBe(baseProps.monthNames.length)
      })

      it('should provide the correct columnCount', () => {
        const config = useGridKeyboardNavMock.mock.calls[0][0]

        expect(toValue(config.columnCount)).toBe(3)
      })
    })

    describe('focusMonthByKeyboardIndex', () => {
      let wrapper: VueWrapper

      beforeEach(() => {
        useGridKeyboardNavMock.mockClear()

        wrapper = mount(VkCalendarMonthView, {
          props: {
            ...baseProps
          }
        })
      })

      it('should update the focused month when onMove is called', () => {
        const config = useGridKeyboardNavMock.mock.calls[0][0] as {
          onMove: (index: number) => void
        }

        config.onMove(3)

        expect(
          wrapper.findAll('.vk-calendar__grid-button')
            .find(btn => btn.attributes('tabindex') === '0')
        ).toBeDefined()
      })
    })

    describe('handleGridKeyDown', () => {
      let wrapper: VueWrapper

      beforeEach(() => {
        useGridKeyboardNavMock.mockClear()

        wrapper = mount(VkCalendarMonthView, {
          props: {
            ...baseProps
          }
        })
      })

      it('should emit selectMonth when onSelect is called with a valid index', () => {
        const config = useGridKeyboardNavMock.mock.calls[0][0] as {
          onSelect: (index: number) => void
        }

        config.onSelect(0)

        expect(wrapper.emitted()).toHaveProperty('selectMonth')
      })

      it('should not emit selectMonth when onSelect is called with an invalid index', () => {
        const config = useGridKeyboardNavMock.mock.calls[0][0] as {
          onSelect: (index: number) => void
        }

        config.onSelect(999)

        expect(wrapper.emitted('selectMonth')).toBeFalsy()
      })

      it('should attach the keyboard handler to month buttons', async () => {
        const mockHandler = vi.fn()

        useGridKeyboardNavMock.mockReturnValue(mockHandler)

        wrapper = mount(VkCalendarMonthView, {
          props: {
            ...baseProps
          }
        })

        await wrapper.find('.vk-calendar__grid-button').trigger('keydown', {
          key: 'ArrowDown'
        })

        expect(mockHandler).toHaveBeenCalled()
      })
    })

    describe('syncFocusedMonth', () => {
      it('should focus the first navigable month when the selected month is disabled', () => {
        const wrapper = mount(VkCalendarMonthView, {
          props: {
            ...baseProps,
            selected: {
              ...baseProps.selected,
              month: 9
            },
            min: {
              ...baseProps.selected,
              day: 1,
              month: 10
            }
          }
        })

        expect(
          wrapper.findAll('.vk-calendar__grid-button')
            .find(btn => btn.attributes('tabindex') === '0')
            ?.text()
        ).toBe('Nov')
      })

      it('should not focus any month when there are no navigable months', () => {
        const wrapper = mount(VkCalendarMonthView, {
          props: {
            ...baseProps,
            min: {
              ...baseProps.selected,
              day: 1,
              month: 11
            },
            max: {
              ...baseProps.selected,
              day: 1,
              month: 0
            }
          }
        })

        expect(
          wrapper.findAll('.vk-calendar__grid-button')
            .find(btn => btn.attributes('tabindex') === '0')
        ).toBeUndefined()
      })
    })

    describe('onMonthFocus', () => {
      let wrapper: VueWrapper

      beforeEach(() => {
        wrapper = mount(VkCalendarMonthView, {
          props: {
            ...baseProps
          }
        })
      })

      it('should update the focused month when a navigable month receives focus', async () => {
        await wrapper.findAll('.vk-calendar__grid-button')[5]?.trigger('focus')

        expect(
          wrapper.findAll('.vk-calendar__grid-button')
            .find(btn => btn.attributes('tabindex') === '0')
        ).toBeDefined()
      })
    })
  })
})
