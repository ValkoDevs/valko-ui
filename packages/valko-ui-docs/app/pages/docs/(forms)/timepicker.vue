<script setup lang="ts">
import type { TableItem, TimepickerProps, SelectOption } from '#valkoui'

const form = reactive<Partial<TimepickerProps>>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  format: 'HH:mm:ss',
  minTime: 1730710858,
  maxTime: 1730739658,
  disabledTimes: undefined,
  minuteStep: 1,
  okButtonLabel: 'OK',
  label: 'Time',
  isOpen: false
})

const disabledRef = ref(false)

const steps: SelectOption[] = [
  { value: 1, label: '1' },
  { value: 5, label: '5' },
  { value: 10, label: '10' },
  { value: 15, label: '15' },
  { value: 20, label: '20' },
  { value: 30, label: '30' }
]

const timeFormats: TableItem[] = [
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

const timepickerProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Time.',
    values: 'primary, secondary, negative, warning, accent, positive',
    default: 'primary',
    apiType: ApiTypeCategory.CUSTOM_STRING
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Time.',
    values: 'filled, outlined, ghost',
    default: 'filled',
    apiType: ApiTypeCategory.CUSTOM_STRING
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Time.',
    values: 'rounded, square, soft',
    default: 'soft',
    apiType: ApiTypeCategory.CUSTOM_STRING
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Time.',
    values: 'xs, sm, md, lg',
    default: 'md',
    apiType: ApiTypeCategory.CUSTOM_STRING
  },
  {
    key: 'labelProp',
    prop: 'label',
    required: false,
    description: 'The label for the input.',
    values: 'string',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'okButtonLabelProp',
    prop: 'okButtonLabel',
    required: false,
    description: 'The text displayed in the OK button.',
    values: 'string',
    default: 'OK',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'parsedModelProp',
    prop: 'parsedModel',
    required: false,
    description: 'The display model for the input.',
    values: 'string',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'formatProp',
    prop: 'format',
    required: false,
    description: 'The format of the time to be displayed.',
    values: 'string',
    default: 'HH:mm:ss',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'okButtonLabelProp',
    prop: 'okButtonLabel',
    required: false,
    description: 'The label of the default OK button on the time selector.',
    values: 'string',
    default: 'OK',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'minuteStepProp',
    prop: 'minuteStep',
    required: false,
    description: 'The steps for the minutes.',
    values: '1 | 5 | 10 | 15 | 20 | 30',
    default: '1',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'localeProp',
    prop: 'locale',
    required: false,
    description: 'Defines the language and regional format to use in the time picker, affecting the display of time formats.',
    values: 'string',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'minTimeProp',
    prop: 'minTime',
    required: false,
    description: 'The minimum selectable time.',
    values: 'number',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'maxTimeProp',
    prop: 'maxTime',
    required: false,
    description: 'The maximum selectable time.',
    values: 'number',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'disabledTimesProp',
    prop: 'disabledTimes',
    required: false,
    description: 'An array of specific times to disable.',
    values: 'number[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'modelValueProp',
    prop: 'modelValue',
    required: false,
    description: 'The currently selected time as a Unix timestamp.',
    values: 'EpochTimeStamp',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'adapterProp',
    prop: 'adapter',
    required: true,
    description: 'A composable that provides methods and computed properties for managing time selection and formatting. We provide a useTimeAdapter for the component.',
    values: 'TimeAdapterInterface',
    default: '',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  },
  {
    key: 'ariaLabelProp',
    prop: 'ariaLabel',
    required: false,
    description: 'Defines a string label for assistive technologies.',
    values: 'string',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'ariaLabelledbyProp',
    prop: 'ariaLabelledBy',
    required: false,
    description: 'References the ID of the element that labels the timepicker.',
    values: 'string',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'ariaDescribedbyProp',
    prop: 'ariaDescribedBy',
    required: false,
    description: 'References the ID of the element that describes the timepicker.',
    values: 'string',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'ariaInvalidProp',
    prop: 'ariaInvalid',
    required: false,
    description: 'Indicates whether the value entered in the timepicker is invalid.',
    values: 'boolean',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'ariaRequiredProp',
    prop: 'ariaRequired',
    required: false,
    description: 'Indicates whether the timepicker is required.',
    values: 'boolean',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'styleSlotsProp',
    prop: 'styleSlots',
    required: false,
    description: 'Customizes style slots for the timepicker.',
    values: 'TimeSlots',
    default: '',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  }
]

const styleSlotsInterface: TableItem[] = [
  {
    key: 'container',
    prop: 'container',
    description: 'Root container for the timepicker component.',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'input',
    prop: 'input',
    description: 'Styles for the input field that triggers the timepicker.',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'content',
    prop: 'content',
    description: 'Container for the timepicker dropdown/popup content.',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  }
]

const timepickerEmits: TableItem[] = [
  {
    key: 'onSelectEmit',
    event: 'onSelect',
    description: 'Emitted when the OK button is clicked.',
    values: 'string | Date',
    type: '(value: string | Date) => void',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'openEmit',
    event: 'open',
    description: 'Emitted when the input is clicked or focused, indicating that the timepicker should open.',
    values: '',
    type: '() => void',
    apiType: ApiTypeCategory.FUNCTION
  },
  {
    key: 'closeEmit',
    event: 'close',
    description: 'Emitted when a click outside the root component is detected, or when the OK button is clicked.',
    values: '',
    type: '() => void',
    apiType: ApiTypeCategory.FUNCTION
  }
]

const timeAdapterInterface: TableItem[] = [
  {
    key: 'formattedTimeProp',
    prop: 'formattedTime',
    required: true,
    description: 'The selected and displayed time as formatted objects.',
    values: 'ComputedRef<{ selected: FormattedTime, display: FormattedTime }>',
    default: '',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  },
  {
    key: 'setDisplayUnitProp',
    prop: 'setDisplayUnit',
    required: true,
    description: 'Sets a specific time unit (hours, minutes, seconds) for display.',
    values: '(unit: "h" | "m" | "s", value: number) => void',
    default: '',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  },
  {
    key: 'onSelectAMPMProp',
    prop: 'onSelectAMPM',
    required: true,
    description: 'Handles AM/PM selection.',
    values: '(period: "AM" | "PM") => void',
    default: '',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  },
  {
    key: 'onSelectTimeProp',
    prop: 'onSelectTime',
    required: true,
    description: 'Sets the selected time and confirms selection.',
    values: '() => void',
    default: '',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  },
  {
    key: 'isTimeDisabledProp',
    prop: 'isTimeDisabled',
    required: true,
    description: 'Checks if a time (hours and optional minutes) is disabled based on `minTime`, `maxTime`, or `disabledTimes`.',
    values: '(hours: number, minutes?: number) => boolean | undefined',
    default: '',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  },
  {
    key: 'periodProp',
    prop: 'period',
    required: true,
    description: 'Current time period, either AM or PM.',
    values: 'Ref<"AM" | "PM">',
    default: '',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  }
]

const timeAdapterResult: TableItem[] = [
  {
    key: 'timeAdapterResult',
    prop: 'TimeAdapterResult',
    required: true,
    description: 'The return type result of the Time Adapter containing the model, parsed model, and an object with the methods, properties required.',
    values: '[Ref<EpochTimeStamp>, ComputedRef<string>, TimeAdapterInterface]',
    default: '',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  }
]

const formattedTimeProps: TableItem[] = [
  {
    key: 'hoursProp',
    prop: 'hours',
    required: true,
    description: 'Hour part of the formatted time.',
    values: 'number',
    default: '0',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'minutesProp',
    prop: 'minutes',
    required: true,
    description: 'Minute part of the formatted time.',
    values: 'number',
    default: '0',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'secondsProp',
    prop: 'seconds',
    required: true,
    description: 'Second part of the formatted time.',
    values: 'number',
    default: '0',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'objProp',
    prop: 'obj',
    required: true,
    description: 'Date object representing the formatted time.',
    values: 'Date',
    default: 'new Date()',
    apiType: ApiTypeCategory.PRIMITIVE
  }
]

const timeAdapterProps: TableItem[] = [
  {
    key: 'formatProp',
    prop: 'format',
    required: false,
    description: 'The format of the selected time, following hour-minute-second format.',
    values: 'string',
    default: 'HH:mm:ss',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'localeProp',
    prop: 'locale',
    required: false,
    description: 'Defines the language and regional format to use in the time display.',
    values: 'string',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'minTimeProp',
    prop: 'minTime',
    required: false,
    description: 'The minimum selectable time represented as a timestamp or Date object.',
    values: 'number',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'maxTimeProp',
    prop: 'maxTime',
    required: false,
    description: 'The maximum selectable time represented as a timestamp or Date object.',
    values: 'number',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'disabledTimesProp',
    prop: 'disabledTimes',
    required: false,
    description: 'An array of specific times to disable, represented as timestamps or Date objects.',
    values: 'number[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  }
]

watch(disabledRef, (newVal) => form.disabledTimes = newVal ? [1730721658, 1730725258] : undefined)

const [ model, parsedModel, adapter ] = useTimeAdapter(form)

const timepickerStates = reactive<Record<string, boolean>>({})

const generateSnippet = snippetGeneratorFactory('vk-timepicker')

const scriptCode = `
<script setup lang="ts">
import { useTimeAdapter } from '#valkoui'

const [ model, parsedModel, adapter ] = useTimeAdapter({ format: 'HH:mm:ss' })
<\u002Fscript>
`

const extraProps = 'v-model="model" :parsed-model="parsedModel" :adapter="adapter"'

const minmaxSnippet = `
${scriptCode}

<template>
  <vk-timepicker
    min-time="1730710858"
    ${extraProps.split(' ').join('\n    ')}
  />

  <vk-timepicker
    max-time="1730739658"
    ${extraProps.split(' ').join('\n    ')}
  />
</template>
`

const disabledTimesSnippet = `
${scriptCode}

<template>
  <vk-timepicker
    "disabled-times="[1730721658, 1730725258]"
    ${extraProps.split(' ').join('\n    ')}
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
  default: {
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
  minmax: {
    slotContainer: [
      'sm:grid-cols-2'
    ]
  }
}
</script>

<template>
  <doc-section
    title="Timepicker"
    description="A user-friendly and customizable time picker component designed for easy time selection within user interfaces. It offers a clean input experience, allowing users to choose times in both 12-hour and 24-hour formats. The component supports various constraints, including minimum and maximum time limits, as well as the ability to disable specific times, ensuring users can make precise selections according to their needs. Its flexible design and integration capabilities make it ideal for a variety of applications, providing a seamless and intuitive time input solution."
  >
    <template #playground-view>
      <vk-timepicker
        v-model="model"
        :label="form.label"
        :parsed-model="parsedModel"
        :adapter="adapter"
        :color="form.color"
        :variant="form.variant"
        :size="form.size"
        :shape="form.shape"
        :format="form.format"
        :max-time="form.maxTime"
        :min-time="form.minTime"
        :disabled-times="disabledRef ? form.disabledTimes : undefined"
        :minute-step="form.minuteStep"
        :is-open="form.isOpen!"
        :ok-button-label="form.okButtonLabel"
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
        label="Ok button label"
      />
      <vk-input
        v-model="form.minTime"
        size="sm"
        type="number"
        label="Min"
      />
      <vk-input
        v-model="form.maxTime"
        size="sm"
        type="number"
        label="Max"
      />
      <vk-select
        v-model="form.minuteStep"
        label="Steps in minutes"
        size="sm"
        :options="steps"
      />
      <vk-select
        v-model="form.color"
        label="Color"
        size="sm"
        :options="colorOptions.general"
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
        v-model="disabledRef"
        label="Disabled Times"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        :style-slots="styles.colors"
      >
        <vk-timepicker
          v-for="color in colorOptions.general"
          :key="color.value"
          :label="color.label"
          :adapter="adapter"
          :parsed-model="parsedModel"
          :color="color.value"
          :is-open="timepickerStates[color.value] ?? false"
          @open="() => timepickerStates[color.value] = true"
          @close="() => timepickerStates[color.value] = false"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('color', { values: colorOptions.general.map(o => o.value), extraProps})}`" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        :style-slots="styles.default"
      >
        <vk-timepicker
          v-for="variant in variantOptions.general"
          :key="variant.value"
          :adapter="adapter"
          :parsed-model="parsedModel"
          :variant="variant.value"
          :is-open="timepickerStates[variant.value] ?? false"
          :label="variant.label"
          @open="() => timepickerStates[variant.value] = true"
          @close="() => timepickerStates[variant.value] = false"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('variant', { values: variantOptions.general.map(o => o.value), extraProps})}`" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        :style-slots="styles.default"
      >
        <vk-timepicker
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          :label="shape.label"
          :adapter="adapter"
          :parsed-model="parsedModel"
          :shape="shape.value"
          :is-open="timepickerStates[shape.value] ?? false"
          @open="() => timepickerStates[shape.value] = true"
          @close="() => timepickerStates[shape.value] = false"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value), extraProps})}`" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        :style-slots="styles.sizes"
      >
        <vk-timepicker
          v-for="size in sizeOptions.general"
          :key="size.value"
          :label="size.label"
          :adapter="adapter"
          :parsed-model="parsedModel"
          :size="size.value"
          :is-open="timepickerStates[size.value] ?? false"
          @open="() => timepickerStates[size.value] = true"
          @close="() => timepickerStates[size.value] = false"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value), extraProps})}`" />
        </template>
      </example-section>

      <example-section
        title="Min & Max Times"
        :style-slots="styles.minmax"
      >
        <vk-timepicker
          label="Min"
          :adapter="adapter"
          :parsed-model="parsedModel"
          :min-time="1730710858"
          :is-open="timepickerStates['min'] ?? false"
          @open="() => timepickerStates['min'] = true"
          @close="() => timepickerStates['min'] = false"
        />
        <vk-timepicker
          label="Max"
          :adapter="adapter"
          :parsed-model="parsedModel"
          :max-time="1730739658"
          :is-open="timepickerStates['max'] ?? false"
          @open="() => timepickerStates['max'] = true"
          @close="() => timepickerStates['max'] = false"
        />

        <template #code>
          <code-block :code="minmaxSnippet" />
        </template>
      </example-section>

      <example-section title="Disabled Times">
        <vk-timepicker
          label="Disabled Times"
          :adapter="adapter"
          :parsed-model="parsedModel"
          :disabled-times="form.disabledTimes"
          :is-open="timepickerStates['disabledTimes'] ?? false"
          @open="() => timepickerStates['disabledTimes'] = true"
          @close="() => timepickerStates['disabledTimes'] = false"
        />

        <template #code>
          <code-block :code="disabledTimesSnippet" />
        </template>
      </example-section>
    </template>

    <template #api>
      <api-table
        name="Timepicker"
        :tables="[
          { title: 'Props', data: timepickerProps, headers: 'props' },
          { title: 'Emits', data: timepickerEmits, headers: 'emits' },
          { title: 'Style Slots', data: styleSlotsInterface, headers: 'interface' },
          { title: 'Time Adapter', data: timeAdapterInterface, headers: 'interface' },
          { title: 'Time Adapter Result Type', data: timeAdapterResult, headers: 'interface' },
          { title: 'Formatted Time Type', data: formattedTimeProps, headers: 'interface' },
          { title: 'Time Adapter Props', data: timeAdapterProps, headers: 'interface' },
          { title: 'Available Formats', data: timeFormats, headers: 'format' }
        ]"
      />
    </template>
  </doc-section>
</template>
