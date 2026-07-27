<script setup lang="ts">
import type { DateTimePickerProps, SelectOption } from '#valkoui'

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
  },
  {
    key: 'HH',
    format: 'HH',
    description: 'Hour in 24-hour format, padded with leading zero (00 to 23).',
    example: '12:00'
  },
  {
    key: 'H',
    format: 'H',
    description: 'Hour in 24-hour format without padding (0 to 23).',
    example: '12'
  },
  {
    key: 'hh',
    format: 'hh',
    description: 'Hour in 12-hour format, padded with leading zero (01 to 12).',
    example: '01:00'
  },
  {
    key: 'h',
    format: 'h',
    description: 'Hour in 12-hour format without padding (1 to 12).',
    example: '1'
  },
  {
    key: 'mm',
    format: 'mm',
    description: 'Minutes, padded with leading zero (00 to 59).',
    example: '01'
  },
  {
    key: 'm',
    format: 'm',
    description: 'Minutes without padding (0 to 59).',
    example: '1'
  },
  {
    key: 'ss',
    format: 'ss',
    description: 'Seconds, padded with leading zero (00 to 59).',
    example: '01'
  },
  {
    key: 's',
    format: 's',
    description: 'Seconds without padding (0 to 59).',
    example: '1'
  },
  {
    key: 'A',
    format: 'A',
    description: 'Uppercase AM or PM based on the time.',
    example: 'AM | PM'
  },
  {
    key: 'a',
    format: 'a',
    description: 'Lowercase am or pm based on the time.',
    example: 'am | pm'
  }
]

const dateTimePickerProps: PropData[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the DateTimePicker.',
    values: 'primary, secondary, negative, warning, accent, positive, surface',
    default: 'primary',
    apiType: 'custom-string'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the DateTimePicker.',
    values: 'filled, outlined, ghost',
    default: 'filled',
    apiType: 'custom-string'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the DateTimePicker dropdown.',
    values: 'rounded, square, soft',
    default: 'soft',
    apiType: 'custom-string'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the DateTimePicker.',
    values: 'xs, sm, md, lg',
    default: 'md',
    apiType: 'custom-string'
  },
  {
    key: 'isOpenProp',
    prop: 'isOpen',
    required: false,
    description: 'Controls whether the DateTimePicker is visible. When omitted, the component manages its own open state internally (uncontrolled mode). When provided, the component becomes controlled and the state must be updated through the update:isOpen event.',
    values: 'boolean',
    default: 'undefined',
    apiType: 'primitive'
  },
  {
    key: 'adapterProp',
    prop: 'adapter',
    required: true,
    description: 'The combined adapter providing both date and time selection logic, containing a date (CalendarAdapter) and time (TimeAdapterInterface) sub-adapter.',
    values: 'DateTimeAdapter',
    default: '',
    apiType: 'object'
  },
  {
    key: 'controlsProp',
    prop: 'controls',
    required: true,
    description: 'Controls object providing commitSelection and resetSelection methods for managing the pending date and time state.',
    values: 'DateTimeControls',
    default: '',
    apiType: 'object'
  },
  {
    key: 'modelValueProp',
    prop: 'modelValue',
    required: true,
    description: 'The currently selected date and time, represented as an Epoch timestamp.',
    values: 'EpochTimeStamp',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'displayValueProp',
    prop: 'displayValue',
    required: true,
    description: 'The formatted string representation of the selected date and time, shown in the input field.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'isOpenProp',
    prop: 'isOpen',
    required: false,
    description: 'Controls whether the DateTimePicker dropdown is visible. When omitted, the component manages its own open/close state (uncontrolled mode). When provided, the consumer must manage the state via open/close events (controlled mode).',
    values: 'boolean',
    default: 'undefined',
    apiType: 'primitive'
  },
  {
    key: 'labelProp',
    prop: 'label',
    required: false,
    description: 'The label text displayed above the input field.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'formatProp',
    prop: 'format',
    required: false,
    description: 'The format of the selected date and time display.',
    values: 'string',
    default: 'YYYY-MM-DD HH:mm',
    apiType: 'primitive'
  },
  {
    key: 'localeProp',
    prop: 'locale',
    required: false,
    description: 'Defines the language and regional format to use, affecting the display of weekdays and month names.',
    values: 'string',
    default: 'en-US',
    apiType: 'primitive'
  },
  {
    key: 'okButtonLabelProp',
    prop: 'okButtonLabel',
    required: false,
    description: 'The label for the confirmation button in the time picker.',
    values: 'string',
    default: 'OK',
    apiType: 'primitive'
  },
  {
    key: 'backButtonLabelProp',
    prop: 'backButtonLabel',
    required: false,
    description: 'The label for the back button displayed on the time selection step, allowing the user to return to date selection.',
    values: 'string',
    default: 'Back',
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
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'maxDateProp',
    prop: 'maxDate',
    required: false,
    description: 'The maximum selectable date as an Epoch timestamp.',
    values: 'EpochTimeStamp',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'minTimeProp',
    prop: 'minTime',
    required: false,
    description: 'The minimum selectable time as an Epoch timestamp.',
    values: 'EpochTimeStamp',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'maxTimeProp',
    prop: 'maxTime',
    required: false,
    description: 'The maximum selectable time as an Epoch timestamp.',
    values: 'EpochTimeStamp',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'disabledTimesProp',
    prop: 'disabledTimes',
    required: false,
    description: 'An array of specific times to disable.',
    values: 'EpochTimeStamp[]',
    default: '[]',
    apiType: 'primitive'
  },
  {
    key: 'minuteStepProp',
    prop: 'minuteStep',
    required: false,
    description: 'The step interval for minute selection.',
    values: '1, 5, 10, 15, 20, 30',
    default: '1',
    apiType: 'primitive'
  },
  {
    key: 'ariaLabelProp',
    prop: 'ariaLabel',
    required: false,
    description: 'Defines a string value that labels the DateTimePicker for assistive technologies.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'ariaLabelledbyProp',
    prop: 'ariaLabelledBy',
    required: false,
    description: 'Identifies the element(s) that labels the DateTimePicker.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'ariaDescribedbyProp',
    prop: 'ariaDescribedBy',
    required: false,
    description: 'Identifies the element(s) that describe the DateTimePicker.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'ariaInvalidProp',
    prop: 'ariaInvalid',
    required: false,
    description: 'Indicates that the current value of the DateTimePicker is invalid.',
    values: 'true, false',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'ariaRequiredProp',
    prop: 'ariaRequired',
    required: false,
    description: 'Indicates that user input is required on the DateTimePicker.',
    values: 'true, false',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'styleSlotsProps',
    prop: 'styleSlots',
    required: false,
    description: 'Custom styles for different parts of the DateTimePicker component.',
    values: 'DateTimePickerSlots',
    default: '',
    apiType: 'custom-type'
  }
]

const styleSlotsInterface: PropData[] = [
  {
    key: 'dateSection',
    prop: 'dateSection',
    required: false,
    description: 'Container wrapping the Calendar component.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'timeSection',
    prop: 'timeSection',
    required: false,
    description: 'Container wrapping the Time component.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'backButton',
    prop: 'backButton',
    required: false,
    description: 'The back button element itself.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  }
]

const dateTimePickerEmits: EmitData[] = [
  {
    key: 'updateModelValueEmit',
    event: 'update:modelValue',
    description: 'Emitted when the value is updated, typically when the user selects a date or confirms the time.',
    values: 'EpochTimeStamp',
    type: '(value: EpochTimeStamp) => void',
    apiType: 'event'
  },
  {
    key: 'openEmit',
    event: 'open',
    description: 'Emitted when the input is clicked or focused, indicating that the DateTimePicker should open.',
    values: '',
    type: '() => void',
    apiType: 'event'
  },
  {
    key: 'closeEmit',
    event: 'close',
    description: 'Emitted when a click outside the root component is detected or when the user confirms the selection.',
    values: '',
    type: '() => void',
    apiType: 'event'
  }
]

const adapterResultProps: PropData[] = [
  {
    key: 'adapterResult',
    prop: 'DateTimeAdapterResult',
    required: true,
    description: 'The return type of useDateTimeAdapter containing the model, display value, combined adapter, and controls.',
    values: '{ model: Ref<EpochTimeStamp>, displayValue: Ref<string>, adapter: DateTimeAdapter, controls: DateTimeControls }',
    default: '',
    apiType: 'object'
  }
]

const { model, displayValue, adapter, controls } = useDateTimeAdapter(form)

const generateSnippet = snippetGeneratorFactory('vk-date-time-picker')

const scriptCode = `
<script setup lang="ts">
import { useDateTimeAdapter } from '#valkoui'

const { model, displayValue, adapter, controls } = useDateTimeAdapter({ format: 'YYYY-MM-DD HH:mm' })
<\u002Fscript>
`

const extraProps = `v-model="model"
:display-value="displayValue"
:adapter="adapter"
:controls="controls"
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
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value), extraProps})}`" />
        </template>
      </example-section>
    </template>

    <template #api>
      <api-table
        name="DateTimePicker"
        :tables="[
          { title: 'Props', headers: 'props', data: dateTimePickerProps },
          { title: 'Style Slots Interface', headers: 'props', data: styleSlotsInterface },
          { title: 'Emits', headers: 'emits', data: dateTimePickerEmits },
          { title: 'Adapter Result Type', headers: 'props', data: adapterResultProps },
          { title: 'Available Formats', headers: 'format', data: formats }
        ]"
      />
    </template>
  </doc-section>
</template>
