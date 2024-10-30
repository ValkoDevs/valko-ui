<script setup lang="ts">
import type { TableItem, CalendarProps, SelectOption } from '#valkoui'

const form = ref<Partial<CalendarProps>>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  format: 'dddd, DD/MM/YYYY',
  modelValue: 1728076036007,
  disabledDates: [
    1705320000000,
    1710936000000,
    1717545600000,
    1723420800000,
    1736953200000,
    1900249200000,
    2215004400000
  ],
  disableWeekends: false,
  locale: 'en-US'
})

const locales: SelectOption[] = [
  { value: 'en-US', label: 'English (United States)' },
  { value: 'es-AR', label: 'Español (Argentina)' },
  { value: 'fr-FR', label: 'Français (France)' },
  { value: 'de-DE', label: 'Deutsch (Germany)' },
  { value: 'it-IT', label: 'Italiano (Italy)' },
  { value: 'pt-BR', label: 'Português (Brazil)' },
  { value: 'zh-CN', label: '中文 (Chinese)' },
  { value: 'ja-JP', label: '日本語 (Japanese)' },
  { value: 'ru-RU', label: 'Русский (Russian)' },
  { value: 'ar-EG', label: 'العربية (Arabic)' }
]

const formats: TableItem[] = [
  {
    key: 'YY',
    prop: 'YY',
    required: false,
    description: 'Two-digit year (e.g., 18 for 2018)',
    values: '18',
    default: ''
  },
  {
    key: 'YYYY',
    prop: 'YYYY',
    required: false,
    description: 'Four-digit year (e.g., 2018)',
    values: '2018',
    default: ''
  },
  {
    key: 'M',
    prop: 'M',
    required: false,
    description: 'The month, beginning at 1 (1 = January)',
    values: '1-12',
    default: ''
  },
  {
    key: 'MM',
    prop: 'MM',
    required: false,
    description: 'The month, 2-digits (e.g., 01 for January)',
    values: '01-12',
    default: ''
  },
  {
    key: 'MMM',
    prop: 'MMM',
    required: false,
    description: 'Abbreviated month name (e.g., Jan for January)',
    values: 'Jan-Dec',
    default: ''
  },
  {
    key: 'MMMM',
    prop: 'MMMM',
    required: false,
    description: 'Full month name (e.g., January)',
    values: 'January-December',
    default: ''
  },
  {
    key: 'D',
    prop: 'D',
    required: false,
    description: 'Day of the month (1-31)',
    values: '1-31',
    default: ''
  },
  {
    key: 'DD',
    prop: 'DD',
    required: false,
    description: 'Day of the month, 2-digits (e.g., 01 for the 1st)',
    values: '01-31',
    default: ''
  },
  {
    key: 'd',
    prop: 'd',
    required: false,
    description: 'Day of the week, with Sunday as 0 (0-6)',
    values: '0-6',
    default: ''
  },
  {
    key: 'dd',
    prop: 'dd',
    required: false,
    description: 'Minimum name of the day of the week (e.g., Su for Sunday)',
    values: 'Su-Sa',
    default: ''
  },
  {
    key: 'ddd',
    prop: 'ddd',
    required: false,
    description: 'Short name of the day of the week (e.g., Sun for Sunday)',
    values: 'Sun-Sat',
    default: ''
  },
  {
    key: 'dddd',
    prop: 'dddd',
    required: false,
    description: 'Full name of the day of the week (e.g., Sunday)',
    values: 'Sunday-Saturday',
    default: ''
  }
]

const calendarProp: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Calendar.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Calendar.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Calendar.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Calendar.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'adapterProp',
    prop: 'adapter',
    required: true,
    description: 'As default we provide an adapter composable that uses native JS Date to provide the dates for the calendar.',
    values: 'CalendarAdapter',
    default: ''
  },
  {
    key: 'modelValueProp',
    prop: 'modelValue',
    required: true,
    description: 'The currently selected date, represented as an Epoch timestamp.',
    values: 'EpochTimeStamp',
    default: ''
  },
  {
    key: 'localeProp',
    prop: 'locale',
    required: false,
    description: 'Defines the language and regional format to use in the calendar, affecting the display of weekdays, month names, etc.',
    values: 'string',
    default: 'en-US'
  },
  {
    key: 'formatProp',
    prop: 'format',
    required: false,
    description: 'The format of the selected date, following day-month-year, etc.',
    values: 'string',
    default: 'YYYY-MM-DD'
  },
  {
    key: 'disabledDatesProp',
    prop: 'disabledDates',
    required: false,
    description: 'An array of specific dates to disable.',
    values: 'EpochTimeStamp[]',
    default: '[]'
  },
  {
    key: 'disableWeekendsProp',
    prop: 'disableWeekends',
    required: false,
    description: 'Allows to disable all weekends (sunday, saturday).',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'minDateProp',
    prop: 'minDate',
    required: false,
    description: 'The minimum selectable date as an Epoch timestamp.',
    values: 'EpochTimeStamp',
    default: '[]'
  },
  {
    key: 'maxDateProp',
    prop: 'maxDate',
    required: false,
    description: 'The maximum selectable date as an Epoch timestamp.',
    values: 'EpochTimeStamp',
    default: '[]'
  }
]

const calendarAdapterProps: TableItem[] = [
  {
    key: 'formattedDatesProp',
    prop: 'formattedDates',
    required: true,
    description: 'Provides the currently selected, displayed, minimum, and maximum dates in a formatted structure.',
    values: 'ComputedRef<{ selected: FormattedDate, display: FormattedDate, min?: FormattedDate, max?: FormattedDate }>',
    default: ''
  },
  {
    key: 'disabledDatesProp',
    prop: 'disabledDates',
    required: true,
    description: 'An array of disabled dates represented as timestamps.',
    values: 'ComputedRef<number[]>',
    default: '[]'
  },
  {
    key: 'onSelectDayProp',
    prop: 'onSelectDay',
    required: true,
    description: 'Function to handle day selection. Receives the selected day as a parameter and returns the updated timestamp.',
    values: '(day: number) => number',
    default: ''
  },
  {
    key: 'onSelectMonthProp',
    prop: 'onSelectMonth',
    required: true,
    description: 'Function to handle month selection. Receives the selected month as a parameter and returns the updated timestamp.',
    values: '(month: number) => number',
    default: ''
  },
  {
    key: 'onSelectYearProp',
    prop: 'onSelectYear',
    required: true,
    description: 'Function to handle year selection. Receives the selected year as a parameter and returns the updated timestamp.',
    values: '(year: number) => number',
    default: ''
  },
  {
    key: 'getWeekdaysMethod',
    prop: 'getWeekdays',
    required: true,
    description: 'Returns an array of localized names for the weekdays based on the current locale.',
    values: '() => string[]',
    default: ''
  },
  {
    key: 'getMonthsMethod',
    prop: 'getMonths',
    required: true,
    description: 'Returns an array of localized names for the months based on the current locale.',
    values: '() => string[]',
    default: ''
  }
]

const adapterResultProps: TableItem[] = [
  {
    key: 'adapterResult',
    prop: 'AdapterResult',
    required: true,
    description: 'The return type result of the Adapter containing the model, parsed model, and adapter methods.',
    values: '[Ref<EpochTimeStamp>, ComputedRef<string>, CalendarAdapter]',
    default: ''
  }
]

const formattedDatesProps: TableItem[] = [
  {
    key: 'selectedProp',
    prop: 'selected',
    required: true,
    description: 'The currently selected date, formatted as a `FormattedDate` object.',
    values: 'FormattedDate',
    default: ''
  },
  {
    key: 'displayProp',
    prop: 'display',
    required: true,
    description: 'The date that is currently being displayed on the calendar, formatted as a `FormattedDate` object.',
    values: 'FormattedDate',
    default: ''
  },
  {
    key: 'minProp',
    prop: 'min',
    required: false,
    description: 'The minimum date allowed for selection, formatted as a `FormattedDate` object.',
    values: 'FormattedDate',
    default: ''
  },
  {
    key: 'maxProp',
    prop: 'max',
    required: false,
    description: 'The maximum date allowed for selection, formatted as a `FormattedDate` object.',
    values: 'FormattedDate',
    default: ''
  }
]

const formattedDateProps: TableItem[] = [
  {
    key: 'dayProp',
    prop: 'day',
    required: true,
    description: 'The day of the month (1-31 depending on the month).',
    values: 'number',
    default: ''
  },
  {
    key: 'monthProp',
    prop: 'month',
    required: true,
    description: 'The month of the year. (0-based index, 0 = January).',
    values: 'number',
    default: ''
  },
  {
    key: 'yearProp',
    prop: 'year',
    required: true,
    description: 'The year in full (e.g., 2024).',
    values: 'number',
    default: ''
  },
  {
    key: 'lastDayOfMonthProp',
    prop: 'lastDayOfMonth',
    required: true,
    description: 'The last day of the month (28-31 depending on the month).',
    values: 'number',
    default: ''
  },
  {
    key: 'firstWeekDayProp',
    prop: 'firstWeekDay',
    required: true,
    description: 'The day of the week the month starts on (0-based index, 0 = Sunday, 6 = Saturday).',
    values: 'DayOfWeek',
    default: ''
  },
  {
    key: 'objProp',
    prop: 'obj',
    required: true,
    description: 'The raw JavaScript Date object.',
    values: 'T (defaults to any).',
    default: ''
  }
]

const dayOfWeekProp: TableItem[] = [
  {
    key: 'dayOfWeekProp',
    prop: 'DayOfWeek',
    required: true,
    description: 'Represents the day of the week as a number. 0 for Sunday, 1 for Monday, and so on until 6 for Saturday.',
    values: '0 | 1 | 2 | 3 | 4 | 5 | 6',
    default: ''
  }
]

const [ model, parsedModel, adapter ] = useDateAdapter(form)
</script>

<template>
  <doc-section
    title="Calendar"
    description="The Calendar component is a customizable and versatile date picker that allows users to select dates within a specific range. It provides options to customize the appearance with different themes, shapes, and sizes. The component also supports disabled dates, minimum and maximum selectable dates, and custom date formatting. With the ability to adapt to different locales using custom labels for weekdays and months, Calendar is a flexible tool for handling date selection in any application. It seamlessly integrates with CalendarAdapter for dynamic date management and offers full control over its behavior."
  >
    <template #playground-view>
      <div class="w-full flex justify-center items-center flex-col p-4">
        <strong>Selected Date: {{ parsedModel }}</strong>
        <vk-calendar
          v-model="model"
          :adapter="adapter"
          :color="form.color"
          :variant="form.variant"
          :size="form.size"
          :shape="form.shape"
          :format="form.format"
          :max-date="form.maxDate"
          :min-date="form.minDate"
          :disable-weekends="form.disableWeekends"
        />
      </div>
    </template>
    <template #playground-options>
      <vk-input
        v-model="form.format"
        size="sm"
        label="Format"
      />
      <vk-select
        v-model="form.locale"
        size="sm"
        label="Locale"
        :options="locales"
      />
      <vk-select
        v-model="form.color"
        label="Color"
        size="sm"
        :options="colorOptions"
      />
      <vk-select
        v-model="form.variant"
        label="Variant"
        size="sm"
        :options="variantOptions.general"
      />
      <vk-select
        v-model="form.shape"
        label="Shape"
        size="sm"
        :options="shapeOptions.general"
      />
      <vk-select
        v-model="form.size"
        label="Size"
        size="sm"
        :options="sizeOptions.general"
      />
      <vk-checkbox
        v-model="form.disableWeekends"
        label="Disable Weekends"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        justify="start"
        wrap
        gap
      >
        <div
          v-for="color in colorOptions"
          :key="color.value"
        >
          <span>{{ color.label }}</span>
          <vk-calendar
            v-model="model"
            :color="color.value"
            :adapter="adapter"
          />
        </div>
      </example-section>

      <example-section
        title="Variants"
        justify="start"
        wrap
        gap
      >
        <div
          v-for="variant in variantOptions.general"
          :key="variant.value"
        >
          <span>{{ variant.label }}</span>
          <vk-calendar
            v-model="model"
            :variant="variant.value"
            :adapter="adapter"
          />
        </div>
      </example-section>

      <example-section
        title="Shapes"
        justify="start"
        wrap
        gap
      >
        <div
          v-for="shape in shapeOptions.general"
          :key="shape.value"
        >
          <span>{{ shape.label }}</span>
          <vk-calendar
            v-model="model"
            :shape="shape.value"
            :adapter="adapter"
          />
        </div>
      </example-section>

      <example-section
        title="Sizes"
        justify="start"
        wrap
        gap
      >
        <div class="grid grid-cols-2">
          <div
            v-for="size in sizeOptions.general"
            :key="size.value"
          >
            <span>{{ size.label }}</span>
            <vk-calendar
              v-model="model"
              :size="size.value"
              :adapter="adapter"
            />
          </div>
        </div>
      </example-section>

      <example-section
        title="Disable Weekends"
      >
        <vk-calendar
          v-model="model"
          :adapter="adapter"
          disable-weekends
        />
      </example-section>

      <example-section
        title="Disabled Dates"
      >
        <vk-calendar
          v-model="model"
          :adapter="adapter"
          :disabled-dates="form.disabledDates"
        />
        <div class="ml-5 flex flex-col">
          <strong class="break-words">The following dates are disabled in this example:</strong>
          <ul class="list-disc list-inside mb-4">
            <li>2024-01-15</li>
            <li>2024-03-20</li>
            <li>2024-06-05</li>
            <li>2024-08-12</li>
            <li>2025-01-15</li>
            <li>2030-03-20</li>
            <li>2040-03-10</li>
          </ul>
        </div>
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Calendar Props"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="calendarProp"
          />
        </example-section>

        <example-section
          title="Calendar Adapter Interface"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="calendarAdapterProps"
          />
        </example-section>

        <example-section
          title="Adapter Result Type"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="adapterResultProps"
          />
        </example-section>

        <example-section
          title="FormattedDates Interface"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="formattedDatesProps"
          />
        </example-section>

        <example-section
          title="FormattedDate Type"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="formattedDateProps"
          />
        </example-section>

        <example-section
          title="DayOfWeek Type"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="dayOfWeekProp"
          />
        </example-section>

        <example-section
          title="Available Formats"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="formats"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
