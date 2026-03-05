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
    format: 'YY',
    description: 'Two-digit year (e.g., 18 for 2018)',
    example: '18'
  },
  {
    key: 'YYYY',
    format: 'YYYY',
    description: 'Four-digit year (e.g., 2018)',
    example: '2018'
  },
  {
    key: 'M',
    format: 'M',
    description: 'The month, beginning at 1 (1 = January)',
    example: '1-12'
  },
  {
    key: 'MM',
    format: 'MM',
    description: 'The month, 2-digits (e.g., 01 for January)',
    example: '01-12'
  },
  {
    key: 'MMM',
    format: 'MMM',
    description: 'Abbreviated month name (e.g., Jan for January)',
    example: 'Jan-Dec'
  },
  {
    key: 'MMMM',
    format: 'MMMM',
    description: 'Full month name (e.g., January)',
    example: 'January-December'
  },
  {
    key: 'D',
    format: 'D',
    description: 'Day of the month (1-31)',
    example: '1-31'
  },
  {
    key: 'DD',
    format: 'DD',
    description: 'Day of the month, 2-digits (e.g., 01 for the 1st)',
    example: '01-31'
  },
  {
    key: 'd',
    format: 'd',
    description: 'Day of the week, with Sunday as 0 (0-6)',
    example: '0-6'
  },
  {
    key: 'dd',
    format: 'dd',
    description: 'Minimum name of the day of the week (e.g., Su for Sunday)',
    example: 'Su-Sa'
  },
  {
    key: 'ddd',
    format: 'ddd',
    description: 'Short name of the day of the week (e.g., Sun for Sunday)',
    example: 'Sun-Sat'
  },
  {
    key: 'dddd',
    format: 'dddd',
    description: 'Full name of the day of the week (e.g., Sunday)',
    example: 'Sunday-Saturday'
  }
]

const calendarProp: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Calendar.',
    values: 'primary, secondary, negative, warning, accent, positive, surface',
    default: 'primary',
    apiType: ApiTypeCategory.CUSTOM_STRING
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Calendar.',
    values: 'filled, outlined, ghost',
    default: 'filled',
    apiType: ApiTypeCategory.CUSTOM_STRING
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Calendar.',
    values: 'rounded, square, soft',
    default: 'soft',
    apiType: ApiTypeCategory.CUSTOM_STRING
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Calendar.',
    values: 'xs, sm, md, lg',
    default: 'md',
    apiType: ApiTypeCategory.CUSTOM_STRING
  },
  {
    key: 'adapterProp',
    prop: 'adapter',
    required: true,
    description: 'As default we provide an adapter composable that uses native JS Date to provide the dates for the calendar.',
    values: 'CalendarAdapter',
    default: '',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  },
  {
    key: 'modelValueProp',
    prop: 'modelValue',
    required: true,
    description: 'The currently selected date, represented as an Epoch timestamp.',
    values: 'EpochTimeStamp',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'localeProp',
    prop: 'locale',
    required: false,
    description: 'Defines the language and regional format to use in the calendar, affecting the display of weekdays, month names, etc.',
    values: 'string',
    default: 'en-US',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'formatProp',
    prop: 'format',
    required: false,
    description: 'The format of the selected date, following day-month-year, etc.',
    values: 'string',
    default: 'YYYY-MM-DD',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'disabledDatesProp',
    prop: 'disabledDates',
    required: false,
    description: 'An array of specific dates to disable.',
    values: 'EpochTimeStamp[]',
    default: '[]',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'disableWeekendsProp',
    prop: 'disableWeekends',
    required: false,
    description: 'Allows to disable all weekends (sunday, saturday).',
    values: 'boolean',
    default: 'false',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'minDateProp',
    prop: 'minDate',
    required: false,
    description: 'The minimum selectable date as an Epoch timestamp.',
    values: 'EpochTimeStamp',
    default: '[]',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'maxDateProp',
    prop: 'maxDate',
    required: false,
    description: 'The maximum selectable date as an Epoch timestamp.',
    values: 'EpochTimeStamp',
    default: '[]',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'styleSlotsProp',
    prop: 'styleSlots',
    required: false,
    description: 'Customizes style slots for Calendar.',
    values: 'CalendarSlots',
    default: '{}',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  }
]

const calendarAdapterProps: TableItem[] = [
  {
    key: 'formattedDatesProp',
    prop: 'formattedDates',
    required: true,
    description: 'Provides the currently selected, displayed, minimum, and maximum dates in a formatted structure.',
    values: 'ComputedRef<{ selected: FormattedDate, display: FormattedDate, min?: FormattedDate, max?: FormattedDate }>',
    default: '',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  },
  {
    key: 'disabledDatesProp',
    prop: 'disabledDates',
    required: true,
    description: 'An array of disabled dates represented as timestamps.',
    values: 'ComputedRef<number[]>',
    default: '[]',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  },
  {
    key: 'onSelectDayProp',
    prop: 'onSelectDay',
    required: true,
    description: 'Function to handle day selection. Receives the selected day as a parameter and returns the updated timestamp.',
    values: '(day: number) => number',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'onSelectMonthProp',
    prop: 'onSelectMonth',
    required: true,
    description: 'Function to handle month selection. Receives the selected month as a parameter and returns the updated timestamp.',
    values: '(month: number) => number',
    default: '',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  },
  {
    key: 'onSelectYearProp',
    prop: 'onSelectYear',
    required: true,
    description: 'Function to handle year selection. Receives the selected year as a parameter and returns the updated timestamp.',
    values: '(year: number) => number',
    default: '',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  },
  {
    key: 'getWeekdaysMethod',
    prop: 'getWeekdays',
    required: true,
    description: 'Returns an array of localized names for the weekdays based on the current locale.',
    values: '() => string[]',
    default: '',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  },
  {
    key: 'getMonthsMethod',
    prop: 'getMonths',
    required: true,
    description: 'Returns an array of localized names for the months based on the current locale.',
    values: '() => string[]',
    default: '',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  }
]

const adapterResultProps: TableItem[] = [
  {
    key: 'adapterResult',
    prop: 'AdapterResult',
    required: true,
    description: 'The return type result of the Adapter containing the model, parsed model, and adapter methods.',
    values: '[Ref<EpochTimeStamp>, ComputedRef<string>, CalendarAdapter]',
    default: '',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  }
]

const formattedDatesProps: TableItem[] = [
  {
    key: 'selectedProp',
    prop: 'selected',
    required: true,
    description: 'The currently selected date, formatted as a `FormattedDate` object.',
    values: 'FormattedDate',
    default: '',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  },
  {
    key: 'displayProp',
    prop: 'display',
    required: true,
    description: 'The date that is currently being displayed on the calendar, formatted as a `FormattedDate` object.',
    values: 'FormattedDate',
    default: '',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  },
  {
    key: 'minProp',
    prop: 'min',
    required: false,
    description: 'The minimum date allowed for selection, formatted as a `FormattedDate` object.',
    values: 'FormattedDate',
    default: '',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  },
  {
    key: 'maxProp',
    prop: 'max',
    required: false,
    description: 'The maximum date allowed for selection, formatted as a `FormattedDate` object.',
    values: 'FormattedDate',
    default: '',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  }
]

const formattedDateProps: TableItem[] = [
  {
    key: 'dayProp',
    prop: 'day',
    required: true,
    description: 'The day of the month (1-31 depending on the month).',
    values: 'number',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'monthProp',
    prop: 'month',
    required: true,
    description: 'The month of the year. (0-based index, 0 = January).',
    values: 'number',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'yearProp',
    prop: 'year',
    required: true,
    description: 'The year in full (e.g., 2024).',
    values: 'number',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'lastDayOfMonthProp',
    prop: 'lastDayOfMonth',
    required: true,
    description: 'The last day of the month (28-31 depending on the month).',
    values: 'number',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'firstWeekDayProp',
    prop: 'firstWeekDay',
    required: true,
    description: 'The day of the week the month starts on (0-based index, 0 = Sunday, 6 = Saturday).',
    values: 'DayOfWeek',
    default: '',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  },
  {
    key: 'objProp',
    prop: 'obj',
    required: true,
    description: 'The raw JavaScript Date object.',
    values: 'T (defaults to any).',
    default: '',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  }
]

const dayOfWeekProp: TableItem[] = [
  {
    key: 'dayOfWeekProp',
    prop: 'DayOfWeek',
    required: true,
    description: 'Represents the day of the week as a number. 0 for Sunday, 1 for Monday, and so on until 6 for Saturday.',
    values: '0 | 1 | 2 | 3 | 4 | 5 | 6',
    default: '',
    apiType: ApiTypeCategory.CUSTOM_NUMBER
  }
]

const calendarEmits: TableItem[] = [
  {
    key: 'updateModelValueEmit',
    event: 'update:modelValue',
    description: 'Emitted when a date is selected or changed, usually to update the model with the selected date.',
    values: 'string | Date',
    type: '(value: string | Date) => void',
    apiType: ApiTypeCategory.EVENT
  },
  {
    key: 'finalizeSelectionEmit',
    event: 'finalizeSelection',
    description: 'Emitted when the final selection of a date is confirmed, completing the date selection process.',
    values: '',
    type: '() => void',
    apiType: ApiTypeCategory.EVENT
  }
]

const styleSlotsInterface = [
  {
    key: 'container',
    prop: 'container',
    description: 'Root container (does not manage the layout).',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'viewContainer',
    prop: 'viewContainer',
    description: 'Main container for all views (month, week, day) this manages the layout.',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'panel',
    prop: 'panel',
    description: 'Panel section of the Calendar (grid of days/months/years).',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'gridButton',
    prop: 'gridButton',
    description: 'The buttons on the grid panel (shared across all views).',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'hiddenGridButton',
    prop: 'hiddenGridButton',
    description: 'The hidden buttons on the grid panel (only present on day view).',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'weekdaySpan',
    prop: 'weekdaySpan',
    description: 'Span containing the weekdays (only present on day view).',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'headerContainer',
    prop: 'headerContainer',
    description: 'Main container for the header (contains the month/year navigation and title).',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'arrows',
    prop: 'arrows',
    description: 'Class shared for both navigation arrows.',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'periodButton',
    prop: 'periodButton',
    description: 'The main button that shows the current period (month/year).',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  }
]

const [ model, parsedModel, adapter ] = useDateAdapter(form)

const generateSnippet = snippetGeneratorFactory('vk-calendar')

const scriptCode = `<script setup lang="ts">
import { useDateAdapter } from '#valkoui'

const [ model, _, adapter ] = useDateAdapter({ format: 'YYYY-MM-DD' })
<\u002Fscript>
`

const extraProps = 'v-model="model" :adapter="adapter"'

const styles = {
  colors: {
    slotContainer: [
      'sm:grid-cols-2',
      'xl:grid-cols-3'
    ]
  },
  default: {
    slotContainer: [
      'sm:grid-cols-2',
      'md:grid-cols-3'
    ]
  },
  dates: {
    slotContainer: [
      'sm:grid-cols-2'
    ]
  }
}
</script>

<template>
  <doc-section
    title="Calendar"
    description="The Calendar component is a customizable and versatile date picker that allows users to select dates within a specific range. It provides options to customize the appearance with different themes, shapes, and sizes. The component also supports disabled dates, minimum and maximum selectable dates, and custom date formatting. With the ability to adapt to different locales using custom labels for weekdays and months, Calendar is a flexible tool for handling date selection in any application. It seamlessly integrates with CalendarAdapter for dynamic date management and offers full control over its behavior."
  >
    <template #playground-view>
      <div class="w-full flex justify-center items-center gap-4 flex-col">
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
        :options="colorOptions.withSurface"
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
        :style-slots="styles.colors"
      >
        <div
          v-for="color in colorOptions.withSurface"
          :key="color.value"
          class="flex flex-col gap-2 items-center justify-center md:items-start md:justify-start"
        >
          <span>{{ color.label }}</span>
          <vk-calendar
            v-model="model"
            :color="color.value"
            :adapter="adapter"
          />
        </div>

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('color', { values: colorOptions.withSurface.map(o => o.value), extraProps}) }`" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        :style-slots="styles.default"
      >
        <div
          v-for="variant in variantOptions.general"
          :key="variant.value"
          class="flex flex-col gap-2 items-center justify-center md:items-start md:justify-start"
        >
          <span>{{ variant.label }}</span>
          <vk-calendar
            v-model="model"
            :variant="variant.value"
            :adapter="adapter"
          />
        </div>

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('variant', { values: variantOptions.general.map(o => o.value), extraProps}) }`" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        :style-slots="styles.default"
      >
        <div
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          class="flex flex-col gap-2 items-center justify-center md:items-start md:justify-start"
        >
          <span>{{ shape.label }}</span>
          <vk-calendar
            v-model="model"
            :shape="shape.value"
            :adapter="adapter"
          />
        </div>

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value), extraProps}) }`" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        :style-slots="styles.default"
      >
        <div
          v-for="size in sizeOptions.general"
          :key="size.value"
          class="flex flex-col gap-2 items-center justify-center md:items-start md:justify-start"
        >
          <span>{{ size.label }}</span>
          <vk-calendar
            v-model="model"
            :size="size.value"
            :adapter="adapter"
          />
        </div>

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value), extraProps}) }`" />
        </template>
      </example-section>

      <example-section title="Disable Weekends">
        <vk-calendar
          v-model="model"
          :adapter="adapter"
          disable-weekends
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<boolean>('disable-weekends', { values: [true], extraProps}) }`" />
        </template>
      </example-section>

      <example-section
        title="Disabled Dates"
        :style-slots="styles.dates"
      >
        <vk-calendar
          v-model="model"
          :adapter="adapter"
          :disabled-dates="form.disabledDates"
        />
        <div class="flex flex-col">
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

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>(':disabled-dates', { values: ['[1705320000000, 1710936000000]'], extraProps })}`" />
        </template>
      </example-section>
    </template>

    <template #api>
      <api-table
        name="Calendar"
        :tables="[
          { title: 'Props', data: calendarProp, headers: 'props' },
          { title: 'Emits', data: calendarEmits, headers: 'emits' },
          { title: 'Style Slots', data: styleSlotsInterface, headers: 'interface' },
          { title: 'Calendar Adapter', data: calendarAdapterProps, headers: 'props' },
          { title: 'Adapter Result Type', data: adapterResultProps, headers: 'props' },
          { title: 'FormattedDates', data: formattedDatesProps, headers: 'props' },
          { title: 'FormattedDate Type', data: formattedDateProps, headers: 'props' },
          { title: 'DayOfWeek Type', data: dayOfWeekProp, headers: 'props' },
          { title: 'Available Formats', data: formats, headers: 'format' }
        ]"
      />
    </template>
  </doc-section>
</template>
