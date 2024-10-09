<script setup lang="ts">
import { type Ref, ref, computed, onMounted, onUnmounted, watch } from 'vue'
import type { DatepickerProps, viewType } from '#valkoui/types/Datepicker'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Datepicker.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkInput from './Input.vue'
import VkButton from './Button.vue'
import VkIcon from './Icon.vue'
import VkPopover from './Popover.vue'
import dayjs from 'dayjs'

defineOptions({ name: 'VkDatepicker' })

const props = withDefaults(defineProps<DatepickerProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft'
})

const classes = useStyle<DatepickerProps, SlotStyles>(props, styles)

// variable declarations
const isOpen = ref(false)
const dateFormat = 'DD-MM-YYYY'
const currentDate = ref(dayjs().format(dateFormat))
const currentMonth = ref(dayjs().month())
const currentYear = ref(dayjs().year())
const currentView: Ref<viewType> = ref('days')
const viewDisplay = ref<string>('')
const yearsList = ref<Array<number>>([])
const filteredDaysList = ref<Array<number>>([])
const leadingEmptyDays = ref<number>(0)
const trailingEMptyDays = ref<number>(0)

const toggleCalendar = () => {
  isOpen.value = !isOpen.value
}

// Main functions to handle the date selection in the views
const onDateSelect = (day: number | null) => {
  if (day === null) return

  const date = dayjs().year(currentYear.value).month(currentMonth.value).date(day)

  currentDate.value = date.format(dateFormat)
  currentMonth.value = date.month()
  currentYear.value = date.year()

  updateDisplay()
  isOpen.value = false
}

const setMonth = (month: number) => {
  currentMonth.value = month
  currentView.value = 'days'
}

const setYear = (year: number) => {
  currentYear.value = year
  currentView.value = 'months'
}

// Handler for displayed text in the main action button
const updateDisplay = () => {
  if (currentView.value === 'days') viewDisplay.value = `${monthNames[currentMonth.value]} ${currentYear.value}`
  if (currentView.value === 'months') viewDisplay.value = `${currentYear.value}`

  if (currentView.value === 'years') {
    const startYear = Math.floor(currentYear.value / 10) * 10
    const endYear = startYear + 9
    viewDisplay.value = `${startYear} - ${endYear}`
  }
}

// Handler for view change
const changeView = () => {
  if (currentView.value === 'days') return currentView.value = 'months'
  if (currentView.value === 'months') return currentView.value = 'years'
  if (currentView.value === 'years') return currentView.value = 'days'
}

// Nagivation arrows actions
const nagivateViewMap = (direction: number) => {
  const actionsMap: Record<viewType, () => void> = {
    days: () => {
      currentMonth.value += direction

      if (currentMonth.value < 0) {
        currentMonth.value = 11
        currentYear.value -= 1
      }

      if (currentMonth.value > 11) {
        currentMonth.value = 0
        currentYear.value += 1
      }
    },
    months: () => currentYear.value += direction,
    years: () => currentYear.value += direction * 10
  }

  actionsMap[currentView.value]()
}

const onPrev = () => nagivateViewMap(-1)
const onNext = () => nagivateViewMap(1)

// Calculate the days in the current month
const updateDaysInMonth = () => {
  filteredDaysList.value = Array.from({ length: dayjs(`${currentYear.value}-${currentMonth.value + 1}`).daysInMonth() }, (_, i) => i + 1)
}

// Calculate leading and trailing empty days for grid alignment
const updateEmptyDays = () => {
  const firstDayOfMonth = dayjs(`${currentYear.value}-${currentMonth.value + 1}-01`).day()
  const lastDayOfMonth = dayjs(`${currentYear.value}-${currentMonth.value + 1}-${filteredDaysList.value.length}`).day()

  leadingEmptyDays.value = firstDayOfMonth
  trailingEMptyDays.value = 6 - lastDayOfMonth
}

// Custom arrays for the months and week days names
const monthNames = Array.from({ length: 12 }, (_, i) => dayjs().month(i).format('MMM'))
const weekDaysNames = Array.from({ length: 7 }, (_, i) => dayjs().day(i).format('ddd'))

const updateYearsList = () => {
  const startYear = Math.floor(currentYear.value / 10) * 10
  yearsList.value = Array.from({ length: 10 }, (_, i) => startYear + i)
}

// Function to toggle the calendar when outside click is detected
const handleClickOutside = (event: MouseEvent) => {
  const calendar = document.querySelector('.vk-datepicker__calendar')
  const input = document.querySelector('.vk-datepicker__input')

  if (calendar && !calendar.contains(event.target as Node) &&
      input && !input.contains(event.target as Node)) {
    isOpen.value = false
  }
}

// Function given to each view button (the ones in the grid) based on the current view
const handleButtonClick = (day: number) => {
  switch(currentView.value) {
    case 'days': onDateSelect(day)
      break
    case 'months': setMonth(day)
      break
    case 'years': setYear(day)
      break
  }
}

// Switch to select the array to form the grid buttons based on the current view
const viewButtons = computed(() => {
  switch (currentView.value) {
    case 'days':
      return filteredDaysList.value
    case 'months':
      return monthNames
    case 'years':
      return yearsList.value
    default:
      return []
  }
})

watch([currentYear, currentMonth, currentView], () => {
  updateDisplay()
  updateYearsList()
  updateDaysInMonth()
  updateEmptyDays()
})

onMounted(() => {
  updateDisplay()
  updateYearsList()
  updateDaysInMonth()
  updateEmptyDays()
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <VkPopover
    :is-open="isOpen"
    :flat="flat"
    :shape="shape"
    placement="bottom"
  >
    <template #default>
      <VkInput
        v-model="currentDate"
        label="Date"
        clearable
        :size="size"
        :color="color"
        :variant="variant"
        :shape="shape"
        :class="classes.dateInput"
        @focus="toggleCalendar"
      >
        <template #rightIcon>
          <VkIcon name="calendar" />
        </template>
      </VkInput>
    </template>

    <template #popover-content>
      <div :class="classes.container">
        <div
          :data-view="currentView"
          :class="classes.actionsBar"
        >
          <VkButton
            :size="size"
            :color="color"
            variant="link"
            :shape="shape"
            :class="classes.arrows"
            :data-view="currentView"
            flat
            @click="onPrev"
          >
            <VkIcon name="chevron-left" />
          </VkButton>

          <VkButton
            :size="size"
            :color="color"
            variant="link"
            :shape="shape"
            :class="classes.mainButton"
            :data-view="currentView"
            flat
            @click="changeView"
          >
            {{ viewDisplay }}
          </VkButton>

          <VkButton
            :color="color"
            :size="size"
            variant="link"
            :shape="shape"
            :class="classes.arrows"
            :data-view="currentView"
            flat
            @click="onNext"
          >
            <VkIcon name="chevron-right" />
          </VkButton>
        </div>

        <div
          :data-view="currentView"
          :class="classes.views"
        >
          <template v-if="currentView === 'days'">
            <span
              v-for="(dayName, index) in weekDaysNames"
              :key="`${dayName}-${index}`"
              :class="classes.weekDaysSpan"
            >
              {{ dayName }}
            </span>

            <span
              v-for="n in leadingEmptyDays"
              :key="`leading-empty-${n}`"
              :class="classes.hiddenDay"
            />
          </template>

          <vk-button
            v-for="(day, index) in viewButtons"
            :key="`view-button-${index}`"
            :class="classes.viewsButton"
            :size="size"
            :color="color"
            variant="link"
            :shape="shape"
            :data-view="currentView"
            flat
            @click="handleButtonClick(currentView === 'months' ? index : +(day))"
          >
            {{ day }}
          </vk-button>

          <template v-if="currentView === 'days'">
            <span
              v-for="n in trailingEMptyDays"
              :key="`trailing-empty-${n}`"
              :class="classes.hiddenDay"
            />
          </template>
        </div>
      </div>
    </template>
  </VkPopover>
</template>
