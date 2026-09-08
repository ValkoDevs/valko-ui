import VkCalendarYearView from '#valkoui/components/CalendarYearView.vue'
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
  format: 'DD-MM-YYYY',
  startsOn: adapter.formattedDates.value.display.year,
  selected: adapter.formattedDates.value.selected
}

describe('CalendarYearView Component', () => {
  describe('Rendering', () => {
    let wrapper: VueWrapper

    beforeEach(async () => {
      wrapper = mount(VkCalendarYearView, {
        props: {
          ...baseProps
        }
      })

      await nextTick()
    })

    it('should render the component', () => {
      expect(wrapper.exists()).toBe(true)
    })

    it('should render 20 year buttons', () => {
      expect(wrapper.findAll('.vk-calendar__grid-button')).toHaveLength(20)
    })

    describe('disabled years', () => {
      it('should disable years before minYear', async () => {
        const wrapper = mount(VkCalendarYearView, {
          props: {
            ...baseProps,
            minYear: 2015
          }
        })

        await nextTick()

        const disabledYears = wrapper
          .findAll('.vk-calendar__grid-button')
          .filter(button => button.attributes('aria-disabled') === 'true')

        expect(disabledYears).toHaveLength(5)
      })

      it('should disable years after maxYear', async () => {
        const wrapper = mount(VkCalendarYearView, {
          props: {
            ...baseProps,
            maxYear: 2025
          }
        })

        await nextTick()

        const disabledYears = wrapper
          .findAll('.vk-calendar__grid-button')
          .filter(button => button.attributes('aria-disabled') === 'true')

        expect(disabledYears).toHaveLength(4)
      })
    })
  })

  describe('Computed & Methods', () => {
    describe('yearList', () => {
      it('should render the correct year range', async () => {
        const wrapper = mount(VkCalendarYearView, {
          props: {
            ...baseProps
          }
        })

        await nextTick()

        const years = wrapper
          .findAll('.vk-calendar__grid-button')
          .map(button => button.text())

        expect(years).toEqual([
          '2010', '2011', '2012', '2013', '2014',
          '2015', '2016', '2017', '2018', '2019',
          '2020', '2021', '2022', '2023', '2024',
          '2025', '2026', '2027', '2028', '2029'
        ])
      })
    })

    describe('syncFocusedYear', () => {
      it('should focus the first navigable year when selected year is disabled', async () => {
        const wrapper = mount(VkCalendarYearView, {
          props: {
            ...baseProps,
            selected: {
              ...baseProps.selected,
              year: 2010
            },
            minYear: 2015
          }
        })

        await nextTick()

        const focusedButton = wrapper
          .findAll('.vk-calendar__grid-button')
          .find(button => button.attributes('tabindex') === '0')

        expect(focusedButton?.text()).toBe('2015')
      })

      it('should not focus any year when all years are disabled', async () => {
        const wrapper = mount(VkCalendarYearView, {
          props: {
            ...baseProps,
            minYear: 3000
          }
        })

        await nextTick()

        const focusedButton = wrapper
          .findAll('.vk-calendar__grid-button')
          .find(button => button.attributes('tabindex') === '0')

        expect(focusedButton).toBeUndefined()
      })
    })

    describe('onYearFocus', () => {
      it('should update focused index when a navigable year receives focus', async () => {
        const wrapper = mount(VkCalendarYearView, {
          props: {
            ...baseProps
          }
        })

        await nextTick()

        await wrapper
          .findAll('.vk-calendar__grid-button')[5]
          ?.trigger('focus')

        await nextTick()

        expect(
          wrapper.findAll('.vk-calendar__grid-button')
            .find(button => button.attributes('tabindex') === '0')
            ?.text()
        ).toBe('2015')
      })

      it('should keep the current focused index when year has no keyboard index', async () => {
        const wrapper = mount(VkCalendarYearView, {
          props: {
            ...baseProps,
            minYear: 2015
          }
        })

        await nextTick()

        const focusedBefore = wrapper
          .findAll('.vk-calendar__grid-button')
          .find(btn => btn.attributes('tabindex') === '0')
          ?.text()

        const disabledYearButton = wrapper
          .findAllComponents({ name: 'VkButton' })
          .find(button => button.text() === '2010')

        await disabledYearButton?.vm.$emit('focus')

        await nextTick()

        const focusedAfter = wrapper
          .findAll('.vk-calendar__grid-button')
          .find(btn => btn.attributes('tabindex') === '0')
          ?.text()

        expect(focusedAfter).toBe(focusedBefore)
      })
    })

    describe('Arrow Buttons', () => {
      it('should jump back 20 years when previous arrow is clicked', async () => {
        const wrapper = mount(VkCalendarYearView, {
          props: {
            ...baseProps
          }
        })

        await nextTick()

        await wrapper
          .findAll('.vk-calendar__arrows')
          .at(0)
          ?.trigger('click')

        expect(
          wrapper.find('.vk-calendar__period-button').text()
        ).toBe('1990 - 2009')
      })

      it('should jump forward 20 years when next arrow is clicked', async () => {
        const wrapper = mount(VkCalendarYearView, {
          props: {
            ...baseProps
          }
        })

        await nextTick()

        await wrapper
          .findAll('.vk-calendar__arrows')
          .at(1)
          ?.trigger('click')

        expect(
          wrapper.find('.vk-calendar__period-button').text()
        ).toBe('2030 - 2049')
      })
    })
  })

  describe('Emits', () => {
    let wrapper: VueWrapper

    beforeEach(async () => {
      wrapper = mount(VkCalendarYearView, {
        props: {
          ...baseProps
        }
      })

      await nextTick()
    })

    it('should emit selectYear when a year button is clicked', async () => {
      await wrapper
        .findAll('.vk-calendar__grid-button')
        .at(0)
        ?.trigger('click')

      expect(wrapper.emitted('selectYear')?.[0]).toEqual([2010])
    })
  })

  describe('Keyboard Navigation', () => {
    let wrapper: VueWrapper

    beforeEach(() => {
      useGridKeyboardNavMock.mockClear()

      wrapper = mount(VkCalendarYearView, {
        props: {
          ...baseProps
        }
      })
    })

    describe('useGridKeyboardNav configuration', () => {
      it('should configure keyboard navigation callbacks', () => {
        expect(useGridKeyboardNavMock).toHaveBeenCalledWith(
          expect.objectContaining({
            onMove: expect.any(Function),
            onSelect: expect.any(Function)
          })
        )
      })

      it('should provide the correct itemCount', () => {
        const config = useGridKeyboardNavMock.mock.calls[0][0]

        expect(toValue(config.itemCount)).toBe(20)
      })

      it('should provide the correct columnCount', () => {
        const config = useGridKeyboardNavMock.mock.calls[0][0]

        expect(toValue(config.columnCount)).toBe(4)
      })
    })

    describe('focusYearByKeyboardIndex', () => {
      it('should update the focused year when keyboard navigation moves', async () => {
        const config = useGridKeyboardNavMock.mock.calls[0][0] as {
          onMove: (index: number) => void
        }

        config.onMove(3)
        await nextTick()

        expect(
          wrapper.findAll('.vk-calendar__grid-button')
            .find(btn => btn.attributes('tabindex') === '0')
        ).toBeDefined()
      })
    })

    describe('syncFocusedYear', () => {
      it('should focus the first navigable year when selected year is disabled', async () => {
        wrapper = mount(VkCalendarYearView, {
          props: {
            ...baseProps,
            selected: {
              ...baseProps.selected,
              year: 2010
            },
            minYear: 2015
          }
        })

        await nextTick()

        expect(
          wrapper.findAll('.vk-calendar__grid-button')
            .find(btn => btn.attributes('tabindex') === '0')
            ?.text()
        ).toBe('2015')
      })

      it('should not focus any year when all years are disabled', async () => {
        wrapper = mount(VkCalendarYearView, {
          props: {
            ...baseProps,
            minYear: 3000
          }
        })

        await nextTick()

        expect(
          wrapper.findAll('.vk-calendar__grid-button')
            .some(btn => btn.attributes('tabindex') === '0')
        ).toBe(false)
      })
    })

    describe('onYearFocus', () => {
      it('should update focused index when a navigable year receives focus', async () => {
        const yearButtons = wrapper.findAll('.vk-calendar__grid-button')

        await yearButtons[5]?.trigger('focus')
        await nextTick()

        expect(
          yearButtons.find(btn => btn.attributes('tabindex') === '0')
        ).toBeDefined()
      })

      it('should ignore disabled years without a keyboard index', async () => {
        wrapper = mount(VkCalendarYearView, {
          props: {
            ...baseProps,
            minYear: 2015
          }
        })

        const disabledYear = wrapper
          .findAll('.vk-calendar__grid-button')
          .find(btn => btn.text() === '2010')

        await disabledYear?.trigger('focus')

        expect(
          wrapper.findAll('.vk-calendar__grid-button')
            .find(btn => btn.attributes('tabindex') === '0')
            ?.text()
        ).not.toBe('2010')
      })
    })

    describe('useGridKeyboardNav handlers', () => {
      it('should emit selectYear when onSelect receives a valid index', () => {
        const config = useGridKeyboardNavMock.mock.calls[0][0] as {
          onSelect: (index: number) => void
        }

        config.onSelect(0)

        expect(wrapper.emitted('selectYear')).toBeTruthy()
      })

      it('should not emit selectYear when onSelect receives an invalid index', () => {
        const config = useGridKeyboardNavMock.mock.calls[0][0] as {
          onSelect: (index: number) => void
        }

        config.onSelect(999)

        expect(wrapper.emitted('selectYear')).toBeFalsy()
      })

      it('should attach the keyboard handler to year buttons', async () => {
        const mockHandler = vi.fn()

        useGridKeyboardNavMock.mockReturnValue(mockHandler)

        wrapper = mount(VkCalendarYearView, {
          props: {
            ...baseProps
          }
        })

        await wrapper.find('.vk-calendar__grid-button')
          .trigger('keydown', { key: 'ArrowDown' })

        expect(mockHandler).toHaveBeenCalled()
      })
    })
  })
})
