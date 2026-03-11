<script setup lang="ts">
import type { DatepickerProps, SelectOption } from '#valkoui'

const form = ref<Partial<DatepickerProps>>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  format: 'YYYY-MM-DD',
  modelValue: 0,
  disabledDates: undefined,
  minDate: undefined,
  maxDate: undefined,
  disableWeekends: false,
  locale: 'en-US',
  label: 'Date',
  isOpen: false
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

const formats: FormatData[] = [
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

const datepickerProps: PropData[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Calendar.',
    values: 'primary, secondary, negative, warning, accent, positive, surface',
    default: 'primary',
    apiType: 'custom-string'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Calendar.',
    values: 'filled, outlined, ghost',
    default: 'filled',
    apiType: 'custom-string'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Calendar.',
    values: 'rounded, square, soft',
    default: 'soft',
    apiType: 'custom-string'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Calendar.',
    values: 'xs, sm, md, lg',
    default: 'md',
    apiType: 'custom-string'
  },
  {
    key: 'adapterProp',
    prop: 'adapter',
    required: true,
    description: 'As default we provide an adapter composable that uses native JS Date to provide the dates for the calendar.',
    values: 'CalendarAdapter',
    default: '',
    apiType: 'custom-type'
  },
  {
    key: 'modelValueProp',
    prop: 'modelValue',
    required: true,
    description: 'The currently selected date, represented as an Epoch timestamp.',
    values: 'EpochTimeStamp',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'localeProp',
    prop: 'locale',
    required: false,
    description: 'Defines the language and regional format to use in the calendar, affecting the display of weekdays, month names, etc.',
    values: 'string',
    default: 'en-US',
    apiType: 'primitive'
  },
  {
    key: 'formatProp',
    prop: 'format',
    required: false,
    description: 'The format of the selected date, following day-month-year, etc.',
    values: 'string',
    default: 'YYYY-MM-DD',
    apiType: 'primitive'
  },
  {
    key: 'disabledDatesProp',
    prop: 'disabledDates',
    required: false,
    description: 'An array of specific dates to disable.',
    values: 'EpochTimeStamp[]',
    default: '[]',
    apiType: 'primitive'
  },
  {
    key: 'disableWeekendsProp',
    prop: 'disableWeekends',
    required: false,
    description: 'Allows to disable all weekends (sunday, saturday).',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'minDateProp',
    prop: 'minDate',
    required: false,
    description: 'The minimum selectable date as an Epoch timestamp.',
    values: 'EpochTimeStamp',
    default: '[]',
    apiType: 'primitive'
  },
  {
    key: 'maxDateProp',
    prop: 'maxDate',
    required: false,
    description: 'The maximum selectable date as an Epoch timestamp.',
    values: 'EpochTimeStamp',
    default: '[]',
    apiType: 'primitive'
  },
  {
    key: 'ariaLabelProp',
    prop: 'ariaLabel',
    required: false,
    description: 'Defines a string value that labels the datepicker for assistive technologies.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'ariaLabelledbyProp',
    prop: 'ariaLabelledBy',
    required: false,
    description: 'Identifies the element(s) that labels the datepicker.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'ariaDescribedbyProp',
    prop: 'ariaDescribedBy',
    required: false,
    description: 'Identifies the element(s) that describe the datepicker.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'ariaInvalidProp',
    prop: 'ariaInvalid',
    required: false,
    description: 'Indicates that the current value of the datepicker is invalid.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'ariaRequiredProp',
    prop: 'ariaRequired',
    required: false,
    description: 'Indicates that user input is required on the datepicker.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'styleSlotsProps',
    prop: 'styleSlots',
    required: false,
    description: 'Custom styles for different parts of the Datepicker component.',
    values: 'DatepickerSlots',
    default: '',
    apiType: 'custom-type'
  }
]

const styleSlotsInterface: PropData[] = [
  {
    key: 'container',
    prop: 'container',
    required: false,
    description: 'Root container for the datepicker.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'content',
    prop: 'content',
    required: false,
    description: 'Dropdown/calendar content container.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  }
]

const datepickerEmits: EmitData[] = [
  {
    key: 'updateModelValueEmit',
    event: 'update:modelValue',
    description: 'Emitted when the value of the input is updated, typically when the user selects a date.',
    values: 'string | Date',
    type: '(value: string | Date) => void',
    apiType: 'primitive'
  },
  {
    key: 'openEmit',
    event: 'open',
    description: 'Emitted when the input is clicked or focused, indicating that the datepicker should open.',
    values: '',
    type: '() => void',
    apiType: 'function'
  },
  {
    key: 'closeEmit',
    event: 'close',
    description: 'Emitted when a click outside the root component is detected, or when the user closes the datepicker.',
    values: '',
    type: '() => void',
    apiType: 'function'
  }
]

const calendarAdapterProps: PropData[] = [
  {
    key: 'formattedDatesProp',
    prop: 'formattedDates',
    required: true,
    description: 'Provides the currently selected, displayed, minimum, and maximum dates in a formatted structure.',
    values:'ComputedRef<{\n selected: FormattedDate,\n display: FormattedDate,\n min?: FormattedDate,\n max?: FormattedDate\n}>',
    default: '',
    apiType: 'object'
  },
  {
    key: 'disabledDatesProp',
    prop: 'disabledDates',
    required: true,
    description: 'An array of disabled dates represented as timestamps.',
    values: 'ComputedRef<number[]>',
    default: '[]',
    apiType: 'object'
  },
  {
    key: 'onSelectDayProp',
    prop: 'onSelectDay',
    required: true,
    description: 'Function to handle day selection. Receives the selected day as a parameter and returns the updated timestamp.',
    values: '(day: number) => number',
    default: '',
    apiType: 'function'
  },
  {
    key: 'onSelectMonthProp',
    prop: 'onSelectMonth',
    required: true,
    description: 'Function to handle month selection. Receives the selected month as a parameter and returns the updated timestamp.',
    values: '(month: number) => number',
    default: '',
    apiType: 'function'
  },
  {
    key: 'onSelectYearProp',
    prop: 'onSelectYear',
    required: true,
    description: 'Function to handle year selection. Receives the selected year as a parameter and returns the updated timestamp.',
    values: '(year: number) => number',
    default: '',
    apiType: 'function'
  },
  {
    key: 'getWeekdaysMethod',
    prop: 'getWeekdays',
    required: true,
    description: 'Returns an array of localized names for the weekdays based on the current locale.',
    values: '() => string[]',
    default: '',
    apiType: 'function'
  },
  {
    key: 'getMonthsMethod',
    prop: 'getMonths',
    required: true,
    description: 'Returns an array of localized names for the months based on the current locale.',
    values: '() => string[]',
    default: '',
    apiType: 'function'
  }
]

const adapterResultProps: PropData[] = [
  {
    key: 'adapterResult',
    prop: 'AdapterResult',
    required: true,
    description: 'The return type result of the Adapter containing the model, parsed model, and adapter methods.',
    values: '[\n Ref<EpochTimeStamp>,\n ComputedRef<string>,\n CalendarAdapter\n]',
    default: '',
    apiType: 'object'
  }
]

const formattedDatesProps: PropData[] = [
  {
    key: 'selectedProp',
    prop: 'selected',
    required: true,
    description: 'The currently selected date, formatted as a `FormattedDate` object.',
    values: 'FormattedDate',
    default: '',
    apiType: 'custom-type'
  },
  {
    key: 'displayProp',
    prop: 'display',
    required: true,
    description: 'The date that is currently being displayed on the calendar, formatted as a `FormattedDate` object.',
    values: 'FormattedDate',
    default: '',
    apiType: 'custom-type'
  },
  {
    key: 'minProp',
    prop: 'min',
    required: false,
    description: 'The minimum date allowed for selection, formatted as a `FormattedDate` object.',
    values: 'FormattedDate',
    default: '',
    apiType: 'custom-type'
  },
  {
    key: 'maxProp',
    prop: 'max',
    required: false,
    description: 'The maximum date allowed for selection, formatted as a `FormattedDate` object.',
    values: 'FormattedDate',
    default: '',
    apiType: 'custom-type'
  }
]

const formattedDateProps: PropData[] = [
  {
    key: 'dayProp',
    prop: 'day',
    required: true,
    description: 'The day of the month (1-31 depending on the month).',
    values: 'number',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'monthProp',
    prop: 'month',
    required: true,
    description: 'The month of the year. (0-based index, 0 = January).',
    values: 'number',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'yearProp',
    prop: 'year',
    required: true,
    description: 'The year in full (e.g., 2024).',
    values: 'number',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'lastDayOfMonthProp',
    prop: 'lastDayOfMonth',
    required: true,
    description: 'The last day of the month (28-31 depending on the month).',
    values: 'number',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'firstWeekDayProp',
    prop: 'firstWeekDay',
    required: true,
    description: 'The day of the week the month starts on (0-based index, 0 = Sunday, 6 = Saturday).',
    values: 'DayOfWeek',
    default: '',
    apiType: 'custom-type'
  },
  {
    key: 'objProp',
    prop: 'obj',
    required: true,
    description: 'The raw JavaScript Date object.',
    values: 'T (defaults to any).',
    default: '',
    apiType: 'custom-type'
  }
]

const dayOfWeekProp: PropData[] = [
  {
    key: 'dayOfWeekProp',
    prop: 'DayOfWeek',
    required: true,
    description: 'Represents the day of the week as a number. 0 for Sunday, 1 for Monday, and so on until 6 for Saturday.',
    values: '0 | 1 | 2 | 3 | 4 | 5 | 6',
    default: '',
    apiType: 'custom-number'
  }
]

const [ minModel, minParsedModel, minAdapter ] = useDateAdapter({ minDate: 1736953200000 })
const [ maxModel, maxParsedModel, maxAdapter] = useDateAdapter({ maxDate: 1736953200000 })
const [ disabledModel, disabledParsedModel, disabledAdapter ] = useDateAdapter({ disabledDates: [
  1705320000000,
  1710936000000,
  1717545600000,
  1723420800000,
  1736953200000,
  1900249200000,
  2215004400000
] })
const [ model, parsedModel, adapter ] = useDateAdapter(form)

const datePickerStates = reactive<Record<string, boolean>>({})

const generateSnippet = snippetGeneratorFactory('vk-datepicker')

const scriptCode = `
<script setup lang="ts">
import { useDateAdapter } from '#valkoui'

const datePickerStates = reactive<Record<string, boolean>>({})

const [ model, parsedModel, adapter ] = useDateAdapter({ format: 'YYYY-MM-DD' })
<\u002Fscript>
`

const extraProps = `v-model="model"
:parsed-model="parsedModel"
:adapter="adapter"
:is-open="datePickerStates['datepickerId']"
@open="() => datePickerStates['datepickerId'] = true"
@close="() => datePickerStates['datepickerId'] = false"
`

const minmaxSnippet = `<script setup lang="ts">
import { useDateAdapter } from '#valkoui'

const datePickerStates = reactive<Record<string, boolean>>({})

const [ minModel, minParsedModel, minAdapter ] = useDateAdapter({ minDate: 1736953200000 })
const [ maxModel, maxParsedModel, maxAdapter] = useDateAdapter({ maxDate: 1736953200000 })
<\u002Fscript>

<template>
  <vk-datepicker
    v-model="minModel"
    label="Min Date"
    :adapter="minAdapter"
    :parsed-model="minParsedModel"
    :is-open="datePickerStates['minDate']"
    @open="() => datePickerStates['minDate'] = true"
    @close="() => datePickerStates['minDate'] = false"
  />

  <vk-datepicker
    v-model="maxModel"
    label="Max Date"
    :adapter="maxAdapter"
    :parsed-model="maxParsedModel"
    :is-open="datePickerStates['maxDate']"
    @open="() => datePickerStates['maxDate'] = true"
    @close="() => datePickerStates['maxDate'] = false"
  />
</template>
`

const disabledSnippet = `<script setup lang="ts">
import { useDateAdapter } from '#valkoui'

const isOpen = ref(false)

const [ disabledModel, disabledParsedModel, disabledAdapter ] = useDateAdapter({ disabledDates: [
  1705320000000,
  1710936000000,
  1717545600000,
  1723420800000,
  1736953200000,
  1900249200000,
  2215004400000
] })
<\u002Fscript>

<template>
  <vk-datepicker
    v-model="disabledModel"
    label="Disabled Dates"
    :adapter="disabledAdapter"
    :parsed-model="disabledParsedModel"
    :is-open="isOpen"
    @open="() => isOpen = true"
    @close="() => isOpen = false"
  />
</template>
`

const styles = {
  colors: {
    slotContainer: [
      'sm:grid-cols-2',
      'md:grid-cols-3',
      'lg:grid-cols-6'
    ]
  },
  variants: {
    slotContainer: [
      'sm:grid-cols-2',
      'md:grid-cols-3'
    ]
  },
  shapes: {
    slotContainer: [
      'sm:grid-cols-2',
      'md:grid-cols-3'
    ]
  },
  sizes: {
    slotContainer: [
      'sm:grid-cols-2',
      'md:grid-cols-3',
      'lg:grid-cols-4'
    ]
  },
  dates: {
    slotContainer: [
      'md:grid-cols-2'
    ]
  }
}
</script>

<template>
  <doc-section
    title="Datepicker"
    description="The Datepicker component is a customizable and versatile component. It provides options to customize the appearance with different themes, shapes, and sizes. The component also supports disabled dates, minimum and maximum selectable dates, and custom date formatting. With the ability to adapt to different locales using custom labels for weekdays and months."
  >
    <template #playground-view>
      <vk-datepicker
        v-model="model"
        :label="form.label"
        :parsed-model="parsedModel"
        :adapter="adapter"
        :color="form.color"
        :variant="form.variant"
        :size="form.size"
        :shape="form.shape"
        :format="form.format"
        :disable-weekends="form.disableWeekends"
        :is-open="form.isOpen!"
        @open="() => form.isOpen = true"
        @close="() => form.isOpen = false"
      />
    </template>
    <template #playground-options>
      <vk-input
        v-model="form.label"
        label="Label"
      />
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
      <vk-input
        v-model="form.minDate"
        type="number"
        size="sm"
        label="Min Date"
      />
      <vk-input
        v-model="form.maxDate"
        type="number"
        size="sm"
        label="Max Date"
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
        <vk-datepicker
          v-for="color in colorOptions.withSurface"
          :key="color.value"
          v-model="model"
          :label="color.label"
          class="mt-2"
          :adapter="adapter"
          :color="color.value"
          :parsed-model="parsedModel"
          :is-open="datePickerStates[color.value] ?? false"
          @open="() => datePickerStates[color.value] = true"
          @close="() => datePickerStates[color.value] = false"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('color', { values: colorOptions.withSurface.map(o => o.value), extraProps})}`" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        :style-slots="styles.variants"
      >
        <vk-datepicker
          v-for="variant in variantOptions.general"
          :key="variant.value"
          v-model="model"
          :label="variant.label"
          class="mt-2"
          :adapter="adapter"
          :variant="variant.value"
          :parsed-model="parsedModel"
          :is-open="datePickerStates[variant.value] ?? false"
          @open="() => datePickerStates[variant.value] = true"
          @close="() => datePickerStates[variant.value] = false"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('variant', { values: variantOptions.general.map(o => o.value), extraProps})}`" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        :style-slots="styles.shapes"
      >
        <vk-datepicker
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          v-model="model"
          :label="shape.label"
          class="mt-2"
          :adapter="adapter"
          :shape="shape.value"
          :parsed-model="parsedModel"
          :is-open="datePickerStates[shape.value] ?? false"
          @open="() => datePickerStates[shape.value] = true"
          @close="() => datePickerStates[shape.value] = false"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value), extraProps})}`" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        :style-slots="styles.sizes"
      >
        <vk-datepicker
          v-for="size in sizeOptions.general"
          :key="size.value"
          v-model="model"
          :label="size.label"
          class="mt-2"
          :adapter="adapter"
          :size="size.value"
          :parsed-model="parsedModel"
          :is-open="datePickerStates[size.value] ?? false"
          @open="() => datePickerStates[size.value] = true"
          @close="() => datePickerStates[size.value] = false"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value), extraProps})}`" />
        </template>
      </example-section>

      <example-section title="MinMax Dates">
        <vk-datepicker
          v-model="minModel"
          label="Min Date"
          :adapter="minAdapter"
          :parsed-model="minParsedModel"
          :is-open="datePickerStates['minDate'] ?? false"
          @open="() => datePickerStates['minDate'] = true"
          @close="() => datePickerStates['minDate'] = false"
        />

        <vk-datepicker
          v-model="maxModel"
          label="Max Date"
          :adapter="maxAdapter"
          :parsed-model="maxParsedModel"
          :is-open="datePickerStates['maxDate'] ?? false"
          @open="() => datePickerStates['maxDate'] = true"
          @close="() => datePickerStates['maxDate'] = false"
        />

        <template #code>
          <code-block :code="minmaxSnippet" />
        </template>
      </example-section>

      <example-section title="Disable Weekends">
        <vk-datepicker
          v-model="model"
          label="Disable Weekends"
          :adapter="adapter"
          :parsed-model="parsedModel"
          disable-weekends
          :is-open="datePickerStates['disable-weekends'] ?? false"
          @open="() => datePickerStates['disable-weekends'] = true"
          @close="() => datePickerStates['disable-weekends'] = false"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<boolean>('disable-weekends', { values: [true], extraProps})}`" />
        </template>
      </example-section>

      <example-section
        title="Disabled Dates"
        :style-slots="styles.dates"
      >
        <vk-datepicker
          v-model="disabledModel"
          label="Disabled Dates"
          :adapter="disabledAdapter"
          :parsed-model="disabledParsedModel"
          :is-open="datePickerStates['disabled'] ?? false"
          @open="() => datePickerStates['disabled'] = true"
          @close="() => datePickerStates['disabled'] = false"
        />

        <div class="flex flex-col">
          <strong class="wrap-break-words">The following dates are disabled in this example:</strong>
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
          <code-block :code="disabledSnippet" />
        </template>
      </example-section>
    </template>

    <template #api>
      <api-table
        name="Datepicker"
        :tables="[
          { title: 'Props', data: datepickerProps, headers: 'props' },
          { title: 'Emits', data: datepickerEmits, headers: 'emits' },
          { title: 'Style Slots', data: styleSlotsInterface , headers: 'interface' },
          { title: 'Calendar Adapter', data: calendarAdapterProps , headers: 'interface' },
          { title: 'Adapter Result Type', data: adapterResultProps , headers: 'interface' },
          { title: 'Formatted Dates', data: formattedDatesProps , headers: 'interface' },
          { title: 'Formatted Date Type', data: formattedDateProps , headers: 'interface' },
          { title: 'Day Of Week Type', data: dayOfWeekProp , headers: 'interface' },
          { title: 'Available Formats', data: formats, headers: 'format' }
        ]"
      />
    </template>
  </doc-section>
</template>
