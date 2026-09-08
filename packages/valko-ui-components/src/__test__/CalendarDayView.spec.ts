import VkCalendarDayView from '#valkoui/components/CalendarDayView.vue'
import { ref, computed, toValue, nextTick } from 'vue'
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
      getMonths: () => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
  selectionType: 'day',
  format: 'DD-MM-YYYY',
  daysInMonth: adapter.formattedDates.value.display.lastDayOfMonth,
  startsOn: adapter.formattedDates.value.display.firstWeekDay,
  selected: adapter.formattedDates.value.selected,
  display: adapter.formattedDates.value.display,
  weekDays: adapter.getWeekdays(),
  monthNames: adapter.getMonths()
}

describe('CalendarDayView Component', () => {
  describe('Rendering', () => {
    let wrapper: VueWrapper

    beforeEach(() => {
      wrapper = mount(VkCalendarDayView, {
        props: {
          ...baseProps
        }
      })
    })

    it('should render the component', () => {
      expect(wrapper.exists()).toBe(true)
    })
  })

  describe('Computed Properties', () => {
    describe('gridCells', () => {
      it.each([28, 29, 30, 31])('should render %i day cells for a month with %i days', (days) => {
        const wrapper = mount(VkCalendarDayView, {
          props: {
            ...baseProps,
            daysInMonth: days,
            startsOn: 0
          }
        })

        const dayButtons = wrapper
          .findAll('.vk-calendar__grid-button')
          .filter(btn => !isNaN(Number(btn.text())))

        expect(dayButtons.length).toBe(days)
      })
    })

    describe('isSelected', () => {
      let wrapper: VueWrapper

      beforeEach(() => {
        wrapper = mount(VkCalendarDayView, {
          props: {
            ...baseProps
          }
        })
      })

      it('should render the selected day with the active color', () => {
        const selectedButton = wrapper
          .findAll('.vk-calendar__grid-button')
          .find(btn => btn.text() === '15')

        expect(selectedButton?.classes()).toContain('bg-primary')
      })

      it('should render unselected days without the active color', () => {
        const unselectedButton = wrapper
          .findAll('.vk-calendar__grid-button')
          .find(btn => btn.text() === '10')

        expect(unselectedButton?.classes()).not.toContain('bg-primary')
      })

      it('should render unselected days using the surface color', () => {
        const unselectedButton = wrapper
          .findAll('.vk-calendar__grid-button')
          .find(btn => btn.text() === '10')

        expect(unselectedButton?.classes()).toContain('text-on-surface')
      })
    })

    describe('isArrowDisabled', () => {
      it('should disable the previous month arrow when the minimum month is reached', () => {
        const wrapper = mount(VkCalendarDayView, {
          props: {
            ...baseProps,
            min: {
              day: 1,
              month: 9,
              year: 2024,
              lastDayOfMonth: 31,
              firstWeekDay: 2,
              obj: new Date(2024, 10, 1)
            }
          }
        })

        expect(
          wrapper.findAll('.vk-calendar__arrows').at(0)?.attributes('aria-disabled')
        ).toBe('true')
      })

      it('should disable the next month arrow when the maximum month is reached', () => {
        const wrapper = mount(VkCalendarDayView, {
          props: {
            ...baseProps,
            max: {
              day: 30,
              month: 9,
              year: 2024,
              lastDayOfMonth: 31,
              firstWeekDay: 2,
              obj: new Date(2024, 10, 30)
            }
          }
        })

        expect(
          wrapper.findAll('.vk-calendar__arrows').at(1)?.attributes('aria-disabled')
        ).toBe('true')
      })
    })

    describe('isWeekend', () => {
      it('should disable weekend days when disableWeekends is enabled', () => {
        const wrapper = mount(VkCalendarDayView, {
          props: {
            ...baseProps,
            disableWeekends: true
          }
        })

        const weekendButtons = wrapper
          .findAll('.vk-calendar__grid-button')
          .filter(btn => {
            const date = new Date(2024, 9, Number(btn.text()))
            return [0, 6].includes(date.getDay())
          })

        expect(
          weekendButtons.every(btn => btn.attributes('aria-disabled') === 'true')
        ).toBe(true)
      })
    })
  })

  describe('Methods', () => {
    describe('onArrowClick', () => {
      let wrapper: VueWrapper

      beforeEach(() => {
        wrapper = mount(VkCalendarDayView, {
          props: {
            ...baseProps
          }
        })
      })

      it('should emit the previous month when the left arrow is clicked', async () => {
        await wrapper.findAll('.vk-calendar__arrows').at(0)?.trigger('click')

        expect(wrapper.emitted('changeMonth')?.at(0)).toEqual([8])
      })

      it('should emit the next month when the right arrow is clicked', async () => {
        await wrapper.findAll('.vk-calendar__arrows').at(1)?.trigger('click')

        expect(wrapper.emitted('changeMonth')?.at(0)).toEqual([10])
      })
    })

    describe('syncFocusedCell', () => {
      it('should focus the first available day when the selected day is disabled', async () => {
        const wrapper = mount(VkCalendarDayView, {
          props: {
            ...baseProps,
            selected: {
              ...baseProps.selected,
              day: 15
            },
            disabledDays: [15]
          }
        })

        await nextTick()

        const focusedButton = wrapper
          .findAll('.vk-calendar__grid-button')
          .find(btn => btn.attributes('tabindex') === '0')

        expect(focusedButton?.text()).toBe('1')
      })

      it('should clear focus when no navigable days exist', async () => {
        const wrapper = mount(VkCalendarDayView, {
          props: {
            ...baseProps,
            disabledDays: Array.from({ length: 31 }, (_, i) => i + 1)
          }
        })

        await nextTick()

        expect(
          wrapper.findAll('.vk-calendar__grid-button')
            .some(btn => btn.attributes('tabindex') === '0')
        ).toBe(false)
      })
    })

    describe('onCellFocus', () => {
      let wrapper: VueWrapper

      beforeEach(() => {
        wrapper = mount(VkCalendarDayView, {
          props: {
            ...baseProps
          }
        })
      })

      it('should update the focused cell when a navigable day receives focus', async () => {
        const dayButtons = wrapper
          .findAll('.vk-calendar__grid-button')
          .filter(btn => !isNaN(Number(btn.text())))

        await dayButtons[5]?.trigger('focus')
        await nextTick()

        expect(
          wrapper.findAll('.vk-calendar__grid-button')
            .find(btn => btn.attributes('tabindex') === '0')
        ).toBeDefined()
      })
    })
  })

  describe('Emits', () => {
    let wrapper: VueWrapper

    beforeEach(() => {
      wrapper = mount(VkCalendarDayView, {
        props: {
          ...baseProps
        }
      })
    })

    it('should emit selectDay when a day is clicked', async () => {
      await wrapper.findAll('.vk-calendar__grid-button').at(14)?.trigger('click')

      expect(wrapper.emitted()).toHaveProperty('selectDay')
    })

    it('should emit viewChange when the period button is clicked', async () => {
      await wrapper.find('.vk-calendar__period-button').trigger('click')

      expect(wrapper.emitted()).toHaveProperty('viewChange')
    })
  })

  describe('Keyboard Navigation', () => {
    let wrapper: VueWrapper

    beforeEach(() => {
      useGridKeyboardNavMock.mockClear()

      wrapper = mount(VkCalendarDayView, {
        props: {
          ...baseProps
        }
      })
    })

    describe('useGridKeyboardNav', () => {
      it('should provide the required configuration', () => {
        expect(useGridKeyboardNavMock).toHaveBeenCalledWith(
          expect.objectContaining({
            currentIndex: expect.any(Object),
            itemCount: expect.any(Function),
            columnCount: expect.any(Function),
            onMove: expect.any(Function),
            onSelect: expect.any(Function)
          })
        )
      })

      it('should provide the correct itemCount', () => {
        const config = useGridKeyboardNavMock.mock.calls[0][0]

        expect(toValue(config.itemCount)).toBe(baseProps.daysInMonth)
      })

      it('should provide the correct columnCount', () => {
        const config = useGridKeyboardNavMock.mock.calls[0][0]

        expect(toValue(config.columnCount)).toBe(7)
      })
    })

    describe('focusCellByKeyboardIndex', () => {
      it('should update the focused cell when onMove is called', async () => {
        const config = useGridKeyboardNavMock.mock.calls[0][0] as {
          onMove: (index: number) => void
        }

        config.onMove(3)
        await nextTick()

        expect(
          wrapper.findAll('.vk-calendar__grid-button')
            .some(btn => btn.attributes('tabindex') === '0')
        ).toBe(true)
      })
    })

    describe('onSelect callback', () => {
      it('should emit selectDay for a valid keyboard index', () => {
        const config = useGridKeyboardNavMock.mock.calls[0][0] as {
          onSelect: (index: number) => void
        }

        config.onSelect(0)

        expect(wrapper.emitted()).toHaveProperty('selectDay')
      })

      it('should ignore an invalid keyboard index', () => {
        const config = useGridKeyboardNavMock.mock.calls[0][0] as {
          onSelect: (index: number) => void
        }

        config.onSelect(999)

        expect(wrapper.emitted('selectDay')).toBeFalsy()
      })
    })

    describe('handleGridKeyDown', () => {
      it('should attach the keyboard handler to grid buttons', async () => {
        const mockHandler = vi.fn()
        useGridKeyboardNavMock.mockReturnValue(mockHandler)

        wrapper = mount(VkCalendarDayView, {
          props: {
            ...baseProps
          }
        })

        const dayButton = wrapper.findAll('.vk-calendar__grid-button')
          .find(btn => !isNaN(Number(btn.text())))

        await dayButton?.trigger('keydown', { key: 'ArrowDown' })

        expect(mockHandler).toHaveBeenCalledTimes(1)
      })
    })

    describe('syncFocusedCell', () => {
      it('should focus the first navigable day when the selected day is disabled', async () => {
        wrapper = mount(VkCalendarDayView, {
          props: {
            ...baseProps,
            selected: {
              ...baseProps.selected,
              day: 15
            },
            disabledDays: [15]
          }
        })

        await nextTick()

        expect(
          wrapper.findAll('.vk-calendar__grid-button')
            .find(btn => btn.attributes('tabindex') === '0')
            ?.text()
        ).toBe('1')
      })

      it('should not focus any day when there are no navigable cells', async () => {
        wrapper = mount(VkCalendarDayView, {
          props: {
            ...baseProps,
            disabledDays: Array.from({ length: 31 }, (_, i) => i + 1)
          }
        })

        await nextTick()

        expect(
          wrapper.findAll('.vk-calendar__grid-button')
            .find(btn => btn.attributes('tabindex') === '0')
        ).toBeUndefined()
      })
    })

    describe('onCellFocus', () => {
      it('should update the focused cell when a navigable day receives focus', async () => {
        const dayButtons = wrapper.findAll('.vk-calendar__grid-button')
          .filter(btn => !isNaN(Number(btn.text())))

        await dayButtons[5]?.trigger('focus')
        await nextTick()

        expect(
          wrapper.findAll('.vk-calendar__grid-button')
            .some(btn => btn.attributes('tabindex') === '0')
        ).toBe(true)
      })

      it('should ignore focus events from disabled cells', async () => {
        wrapper = mount(VkCalendarDayView, {
          props: {
            ...baseProps,
            disabledDays: [15]
          }
        })

        const disabledButton = wrapper.findAll('.vk-calendar__grid-button')
          .find(btn => btn.text() === '15')

        await disabledButton?.trigger('focus')

        expect(
          wrapper.findAll('.vk-calendar__grid-button')
            .find(btn => btn.attributes('tabindex') === '0')
            ?.text()
        ).not.toBe('15')
      })
    })
  })
})
