<script setup lang="ts">
import type { TableItem, DateTimePickerProps, SelectOption } from '#valkoui'

const form = ref<Partial<DateTimePickerProps>>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  format: 'YYYY-MM-DD HH:mm',
  modelValue: 0,
  disabledDates: undefined,
  minDate: undefined,
  maxDate: undefined,
  minTime: undefined,
  maxTime: undefined,
  disableWeekends: false,
  locale: 'en-US',
  label: 'Date & Time',
  isOpen: false,
  okButtonLabel: 'OK',
  backButtonLabel: 'Back'
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
  },
  {
    key: 'H',
    prop: 'H',
    required: false,
    description: '24-hour format hour (0-23)',
    values: '0-23',
    default: ''
  },
  {
    key: 'HH',
    prop: 'HH',
    required: false,
    description: '24-hour format hour, 2-digits (e.g., 09)',
    values: '00-23',
    default: ''
  },
  {
    key: 'h',
    prop: 'h',
    required: false,
    description: '12-hour format hour (1-12)',
    values: '1-12',
    default: ''
  },
  {
    key: 'hh',
    prop: 'hh',
    required: false,
    description: '12-hour format hour, 2-digits (e.g., 09)',
    values: '01-12',
    default: ''
  },
  {
    key: 'm',
    prop: 'm',
    required: false,
    description: 'Minutes (0-59)',
    values: '0-59',
    default: ''
  },
  {
    key: 'mm',
    prop: 'mm',
    required: false,
    description: 'Minutes, 2-digits (e.g., 05)',
    values: '00-59',
    default: ''
  },
  {
    key: 's',
    prop: 's',
    required: false,
    description: 'Seconds (0-59)',
    values: '0-59',
    default: ''
  },
  {
    key: 'ss',
    prop: 'ss',
    required: false,
    description: 'Seconds, 2-digits (e.g., 05)',
    values: '00-59',
    default: ''
  },
  {
    key: 'A',
    prop: 'A',
    required: false,
    description: 'AM/PM meridiem (uppercase)',
    values: 'AM, PM',
    default: ''
  },
  {
    key: 'a',
    prop: 'a',
    required: false,
    description: 'am/pm meridiem (lowercase)',
    values: 'am, pm',
    default: ''
  }
]

const dateTimePickerProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the DateTimePicker.',
    values: 'primary, secondary, negative, warning, accent, positive, surface',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the DateTimePicker.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the DateTimePicker dropdown.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the DateTimePicker.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'adapterProp',
    prop: 'adapter',
    required: true,
    description: 'The combined adapter providing both date and time selection logic, containing a date (CalendarAdapter) and time (TimeAdapterInterface) sub-adapter.',
    values: 'DateTimeAdapter',
    default: ''
  },
  {
    key: 'controlsProp',
    prop: 'controls',
    required: true,
    description: 'Controls object providing commitSelection and resetSelection methods for managing the pending date and time state.',
    values: 'DateTimeControls',
    default: ''
  },
  {
    key: 'modelValueProp',
    prop: 'modelValue',
    required: true,
    description: 'The currently selected date and time, represented as an Epoch timestamp.',
    values: 'EpochTimeStamp',
    default: ''
  },
  {
    key: 'displayValueProp',
    prop: 'displayValue',
    required: true,
    description: 'The formatted string representation of the selected date and time, shown in the input field.',
    values: 'string',
    default: ''
  },
  {
    key: 'isOpenProp',
    prop: 'isOpen',
    required: true,
    description: 'Controls whether the DateTimePicker dropdown is visible.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'labelProp',
    prop: 'label',
    required: false,
    description: 'The label text displayed above the input field.',
    values: 'string',
    default: ''
  },
  {
    key: 'formatProp',
    prop: 'format',
    required: false,
    description: 'The format of the selected date and time display.',
    values: 'string',
    default: 'YYYY-MM-DD HH:mm'
  },
  {
    key: 'localeProp',
    prop: 'locale',
    required: false,
    description: 'Defines the language and regional format to use, affecting the display of weekdays and month names.',
    values: 'string',
    default: 'en-US'
  },
  {
    key: 'okButtonLabelProp',
    prop: 'okButtonLabel',
    required: false,
    description: 'The label for the confirmation button in the time picker.',
    values: 'string',
    default: 'OK'
  },
  {
    key: 'backButtonLabelProp',
    prop: 'backButtonLabel',
    required: false,
    description: 'The label for the back button displayed on the time selection step, allowing the user to return to date selection.',
    values: 'string',
    default: 'Back'
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
    default: ''
  },
  {
    key: 'maxDateProp',
    prop: 'maxDate',
    required: false,
    description: 'The maximum selectable date as an Epoch timestamp.',
    values: 'EpochTimeStamp',
    default: ''
  },
  {
    key: 'minTimeProp',
    prop: 'minTime',
    required: false,
    description: 'The minimum selectable time as an Epoch timestamp.',
    values: 'EpochTimeStamp',
    default: ''
  },
  {
    key: 'maxTimeProp',
    prop: 'maxTime',
    required: false,
    description: 'The maximum selectable time as an Epoch timestamp.',
    values: 'EpochTimeStamp',
    default: ''
  },
  {
    key: 'disabledTimesProp',
    prop: 'disabledTimes',
    required: false,
    description: 'An array of specific times to disable.',
    values: 'EpochTimeStamp[]',
    default: '[]'
  },
  {
    key: 'minuteStepProp',
    prop: 'minuteStep',
    required: false,
    description: 'The step interval for minute selection.',
    values: '1, 5, 10, 15, 20, 30',
    default: '1'
  },
  {
    key: 'ariaLabelProp',
    prop: 'ariaLabel',
    required: false,
    description: 'Defines a string value that labels the DateTimePicker for assistive technologies.',
    values: 'string',
    default: ''
  },
  {
    key: 'ariaLabelledbyProp',
    prop: 'ariaLabelledBy',
    required: false,
    description: 'Identifies the element(s) that labels the DateTimePicker.',
    values: 'string',
    default: ''
  },
  {
    key: 'ariaDescribedbyProp',
    prop: 'ariaDescribedBy',
    required: false,
    description: 'Identifies the element(s) that describe the DateTimePicker.',
    values: 'string',
    default: ''
  },
  {
    key: 'ariaInvalidProp',
    prop: 'ariaInvalid',
    required: false,
    description: 'Indicates that the current value of the DateTimePicker is invalid.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'ariaRequiredProp',
    prop: 'ariaRequired',
    required: false,
    description: 'Indicates that user input is required on the DateTimePicker.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'styleSlotsProps',
    prop: 'styleSlots',
    required: false,
    description: 'Custom styles for different parts of the DateTimePicker component.',
    values: 'DateTimePickerSlots',
    default: ''
  }
]

const styleSlotsInterface: TableItem[] = [
  {
    key: 'dateSection',
    prop: 'dateSection',
    required: false,
    description: 'Container wrapping the Calendar component.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'timeSection',
    prop: 'timeSection',
    required: false,
    description: 'Container wrapping the Time component.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'actions',
    prop: 'actions',
    required: false,
    description: 'Container for action buttons.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'backAction',
    prop: 'backAction',
    required: false,
    description: 'Container for the back button on the time selection step.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'backButton',
    prop: 'backButton',
    required: false,
    description: 'The back button element itself.',
    values: 'string[]',
    default: ''
  }
]

const dateTimePickerEmits: TableItem[] = [
  {
    key: 'updateModelValueEmit',
    event: 'update:modelValue',
    description: 'Emitted when the value is updated, typically when the user selects a date or confirms the time.',
    values: 'EpochTimeStamp',
    type: '(value: EpochTimeStamp) => void'
  },
  {
    key: 'openEmit',
    event: 'open',
    description: 'Emitted when the input is clicked or focused, indicating that the DateTimePicker should open.',
    values: '',
    type: '() => void'
  },
  {
    key: 'closeEmit',
    event: 'close',
    description: 'Emitted when a click outside the root component is detected or when the user confirms the selection.',
    values: '',
    type: '() => void'
  }
]

const adapterResultProps: TableItem[] = [
  {
    key: 'adapterResult',
    prop: 'DateTimeAdapterResult',
    required: true,
    description: 'The return type of useDateTimeAdapter containing the model, display value, combined adapter, and controls.',
    values: '{ model: Ref<EpochTimeStamp>, displayValue: Ref<string>, adapter: DateTimeAdapter, controls: DateTimeControls }',
    default: ''
  }
]

const { model, displayValue, adapter, controls } = useDateTimeAdapter(form)

const dateTimePickerStates = reactive<Record<string, boolean>>({})

const generateSnippet = snippetGeneratorFactory('vk-date-time-picker')

const scriptCode = `
<script setup lang="ts">
import { useDateTimeAdapter } from '#valkoui'

const dateTimePickerStates = reactive<Record<string, boolean>>({})

const { model, displayValue, adapter, controls } = useDateTimeAdapter({ format: 'YYYY-MM-DD HH:mm' })
<\u002Fscript>
`

const extraProps = `v-model="model"
:display-value="displayValue"
:adapter="adapter"
:controls="controls"
:is-open="dateTimePickerStates['dateTimePickerId']"
@open="() => dateTimePickerStates['dateTimePickerId'] = true"
@close="() => dateTimePickerStates['dateTimePickerId'] = false"
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
  }
}
</script>

<template>
  <doc-section
    title="DateTimePicker"
    description="The DateTimePicker component combines date and time selection into a single two-step picker. First, the user selects a date from the calendar. Upon selection, the view transitions to a time selector where the user picks the desired time and confirms with the OK button. A back button allows returning to the date selection to correct mistakes. The component provides options to customize appearance with different themes, shapes, and sizes, and supports disabled dates and times, min/max constraints, custom formatting, and locale-aware display."
  >
    <template #playground-view>
      <vk-date-time-picker
        v-model="model"
        :label="form.label"
        :display-value="displayValue"
        :adapter="adapter"
        :controls="controls"
        :color="form.color"
        :variant="form.variant"
        :size="form.size"
        :shape="form.shape"
        :format="form.format"
        :min-date="form.minDate"
        :max-date="form.maxDate"
        :min-time="form.minTime"
        :max-time="form.maxTime"
        :disable-weekends="form.disableWeekends"
        :ok-button-label="form.okButtonLabel"
        :back-button-label="form.backButtonLabel"
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
      <vk-input
        v-model="form.okButtonLabel"
        size="sm"
        label="OK Button Label"
      />
      <vk-input
        v-model="form.backButtonLabel"
        size="sm"
        label="Back Button Label"
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
      <vk-input
        v-model="form.minTime"
        type="number"
        size="sm"
        label="Min Time"
      />
      <vk-input
        v-model="form.maxTime"
        type="number"
        size="sm"
        label="Max Time"
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
        <vk-date-time-picker
          v-for="color in colorOptions.withSurface"
          :key="color.value"
          v-model="model"
          :label="color.label"
          class="mt-2"
          :adapter="adapter"
          :controls="controls"
          :color="color.value"
          :display-value="displayValue"
          :is-open="dateTimePickerStates[color.value] ?? false"
          @open="() => dateTimePickerStates[color.value] = true"
          @close="() => dateTimePickerStates[color.value] = false"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('color', { values: colorOptions.withSurface.map(o => o.value), extraProps})}`" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        :style-slots="styles.variants"
      >
        <vk-date-time-picker
          v-for="variant in variantOptions.general"
          :key="variant.value"
          v-model="model"
          :label="variant.label"
          class="mt-2"
          :adapter="adapter"
          :controls="controls"
          :variant="variant.value"
          :display-value="displayValue"
          :is-open="dateTimePickerStates[variant.value] ?? false"
          @open="() => dateTimePickerStates[variant.value] = true"
          @close="() => dateTimePickerStates[variant.value] = false"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('variant', { values: variantOptions.general.map(o => o.value), extraProps})}`" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        :style-slots="styles.shapes"
      >
        <vk-date-time-picker
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          v-model="model"
          :label="shape.label"
          class="mt-2"
          :adapter="adapter"
          :controls="controls"
          :shape="shape.value"
          :display-value="displayValue"
          :is-open="dateTimePickerStates[shape.value] ?? false"
          @open="() => dateTimePickerStates[shape.value] = true"
          @close="() => dateTimePickerStates[shape.value] = false"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value), extraProps})}`" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        :style-slots="styles.sizes"
      >
        <vk-date-time-picker
          v-for="size in sizeOptions.general"
          :key="size.value"
          v-model="model"
          :label="size.label"
          class="mt-2"
          :adapter="adapter"
          :controls="controls"
          :size="size.value"
          :display-value="displayValue"
          :is-open="dateTimePickerStates[size.value] ?? false"
          @open="() => dateTimePickerStates[size.value] = true"
          @close="() => dateTimePickerStates[size.value] = false"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value), extraProps})}`" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>DateTimePicker Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="dateTimePickerProps"
      />

      <h3>Style Slots Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="styleSlotsInterface"
      />

      <h3>DateTimePicker Emits</h3>
      <vk-table
        :headers="emitHeaders"
        :data="dateTimePickerEmits"
      />

      <h3>Adapter Result Type</h3>
      <vk-table
        :headers="propHeaders"
        :data="adapterResultProps"
      />

      <h3>Available Formats</h3>
      <vk-table
        :headers="propHeaders"
        :data="formats"
      />
    </template>
  </doc-section>
</template>
