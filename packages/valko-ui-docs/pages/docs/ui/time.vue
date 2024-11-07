<script setup lang="ts">
import type { TimeProps, TableItem, SelectOption } from '#valkoui'

const form = reactive<Partial<TimeProps>>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  format: 'HH:mm:ss',
  minTime: 1730710858,
  maxTime: 1730739658,
  disabledTimes: undefined,
  minuteStep: 1,
  okButtonLabel: 'OK'
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

const timeProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Time.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Time.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Time.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Time.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'formatProp',
    prop: 'format',
    required: false,
    description: 'The format of the time to be displayed.',
    values: 'string',
    default: 'HH:mm:ss'
  },
  {
    key: 'okButtonLabelProp',
    prop: 'okButtonLabel',
    required: false,
    description: 'The label of the default OK button on the time selector.',
    values: 'string',
    default: 'OK'
  },
  {
    key: 'minuteStepProp',
    prop: 'minuteStep',
    required: false,
    description: 'The steps for the minutes.',
    values: '1 | 5 | 10 | 15 | 20 | 30',
    default: '1'
  },
  {
    key: 'localeProp',
    prop: 'locale',
    required: false,
    description: 'Defines the language and regional format to use in the time picker, affecting the display of time formats.',
    values: 'string',
    default: ''
  },
  {
    key: 'minTimeProp',
    prop: 'minTime',
    required: false,
    description: 'The minimum selectable time.',
    values: 'number',
    default: ''
  },
  {
    key: 'maxTimeProp',
    prop: 'maxTime',
    required: false,
    description: 'The maximum selectable time.',
    values: 'number',
    default: ''
  },
  {
    key: 'disabledTimesProp',
    prop: 'disabledTimes',
    required: false,
    description: 'An array of specific times to disable.',
    values: 'number[]',
    default: ''
  },
  {
    key: 'modelValueProp',
    prop: 'modelValue',
    required: false,
    description: 'The currently selected time as a Unix timestamp.',
    values: 'EpochTimeStamp',
    default: ''
  },
  {
    key: 'adapterProp',
    prop: 'adapter',
    required: true,
    description: 'A composable that provides methods and computed properties for managing time selection and formatting. We provide a useTimeAdapter for the component.',
    values: 'TimeAdapterInterface',
    default: ''
  }
]

const timeAdapterInterface: TableItem[] = [
  {
    key: 'formattedTimeProp',
    prop: 'formattedTime',
    required: true,
    description: 'The selected and displayed time as formatted objects.',
    values: 'ComputedRef<{ selected: FormattedTime, display: FormattedTime }>',
    default: ''
  },
  {
    key: 'setDisplayUnitProp',
    prop: 'setDisplayUnit',
    required: true,
    description: 'Sets a specific time unit (hours, minutes, seconds) for display.',
    values: '(unit: "h" | "m" | "s", value: number) => void',
    default: ''
  },
  {
    key: 'onSelectAMPMProp',
    prop: 'onSelectAMPM',
    required: true,
    description: 'Handles AM/PM selection.',
    values: '(period: "AM" | "PM") => void',
    default: ''
  },
  {
    key: 'onSelectTimeProp',
    prop: 'onSelectTime',
    required: true,
    description: 'Sets the selected time and confirms selection.',
    values: '() => void',
    default: ''
  },
  {
    key: 'isTimeDisabledProp',
    prop: 'isTimeDisabled',
    required: true,
    description: 'Checks if a time (hours and optional minutes) is disabled based on `minTime`, `maxTime`, or `disabledTimes`.',
    values: '(hours: number, minutes?: number) => boolean | undefined',
    default: ''
  },
  {
    key: 'periodProp',
    prop: 'period',
    required: true,
    description: 'Current time period, either AM or PM.',
    values: 'Ref<"AM" | "PM">',
    default: ''
  }
]

const timeAdapterResult: TableItem[] = [
  {
    key: 'timeAdapterResult',
    prop: 'TimeAdapterResult',
    required: true,
    description: 'The return type result of the Time Adapter containing the model, parsed model, and an object with the methods, properties required.',
    values: '[Ref<EpochTimeStamp>, ComputedRef<string>, TimeAdapterInterface]',
    default: ''
  }
]

const formattedTimeProps: TableItem[] = [
  {
    key: 'hoursProp',
    prop: 'hours',
    required: true,
    description: 'Hour part of the formatted time.',
    values: 'number',
    default: '0'
  },
  {
    key: 'minutesProp',
    prop: 'minutes',
    required: true,
    description: 'Minute part of the formatted time.',
    values: 'number',
    default: '0'
  },
  {
    key: 'secondsProp',
    prop: 'seconds',
    required: true,
    description: 'Second part of the formatted time.',
    values: 'number',
    default: '0'
  },
  {
    key: 'objProp',
    prop: 'obj',
    required: true,
    description: 'Date object representing the formatted time.',
    values: 'Date',
    default: 'new Date()'
  }
]

const timeAdapterProps: TableItem[] = [
  {
    key: 'formatProp',
    prop: 'format',
    required: false,
    description: 'The format of the selected time, following hour-minute-second format.',
    values: 'string',
    default: 'HH:mm:ss'
  },
  {
    key: 'localeProp',
    prop: 'locale',
    required: false,
    description: 'Defines the language and regional format to use in the time display.',
    values: 'string',
    default: ''
  },
  {
    key: 'minTimeProp',
    prop: 'minTime',
    required: false,
    description: 'The minimum selectable time represented as a timestamp or Date object.',
    values: 'number',
    default: ''
  },
  {
    key: 'maxTimeProp',
    prop: 'maxTime',
    required: false,
    description: 'The maximum selectable time represented as a timestamp or Date object.',
    values: 'number',
    default: ''
  },
  {
    key: 'disabledTimesProp',
    prop: 'disabledTimes',
    required: false,
    description: 'An array of specific times to disable, represented as timestamps or Date objects.',
    values: 'number[]',
    default: ''
  }
]

const timeFormats: TableItem[] = [
  {
    key: 'HH',
    prop: 'HH',
    required: true,
    description: 'Hour in 24-hour format, padded with leading zero (00 to 23).',
    values: 'string',
    default: ''
  },
  {
    key: 'H',
    prop: 'H',
    required: true,
    description: 'Hour in 24-hour format without padding (0 to 23).',
    values: 'number',
    default: ''
  },
  {
    key: 'hh',
    prop: 'hh',
    required: true,
    description: 'Hour in 12-hour format, padded with leading zero (01 to 12).',
    values: 'string',
    default: ''
  },
  {
    key: 'h',
    prop: 'h',
    required: true,
    description: 'Hour in 12-hour format without padding (1 to 12).',
    values: 'number',
    default: ''
  },
  {
    key: 'mm',
    prop: 'mm',
    required: true,
    description: 'Minutes, padded with leading zero (00 to 59).',
    values: 'string',
    default: ''
  },
  {
    key: 'm',
    prop: 'm',
    required: true,
    description: 'Minutes without padding (0 to 59).',
    values: 'number',
    default: ''
  },
  {
    key: 'ss',
    prop: 'ss',
    required: true,
    description: 'Seconds, padded with leading zero (00 to 59).',
    values: 'string',
    default: ''
  },
  {
    key: 's',
    prop: 's',
    required: true,
    description: 'Seconds without padding (0 to 59).',
    values: 'number',
    default: ''
  },
  {
    key: 'A',
    prop: 'A',
    required: true,
    description: 'Uppercase AM or PM based on the time.',
    values: 'AM | PM',
    default: ''
  },
  {
    key: 'a',
    prop: 'a',
    required: true,
    description: 'Lowercase am or pm based on the time.',
    values: 'am | pm',
    default: ''
  }
]

watch(disabledRef, (newVal) => form.disabledTimes = newVal ? [1730721658, 1730725258] : undefined)

const [ model, parsedModel, adapter ] = useTimeAdapter(form)
</script>

<template>
  <doc-section
    title="Time"
    description="A versatile and customizable time selection component that enables users to select and view times in various formats and styles. It supports 12-hour and 24-hour time formats, AM/PM indicators, and additional constraints such as minimum and maximum time limits, as well as disabled times. This component is designed to adapt to different visual styles and functional requirements, making it ideal for a wide range of time-related user inputs."
  >
    <template #playground-view>
      <div class="w-full flex justify-center items-center flex-col gap-4">
        <strong class="">Selected Time: {{ parsedModel }}</strong>
        <vk-time
          v-model="model"
          :format="form.format"
          :adapter="adapter"
          :size="form.size"
          :variant="form.variant"
          :color="form.color"
          :shape="form.shape"
          :min-time="form.minTime"
          :max-time="form.maxTime"
          :disabled-times="disabledRef ? form.disabledTimes : undefined"
          :minute-step="form.minuteStep"
          :ok-button-label="form.okButtonLabel"
        />
      </div>
    </template>
    <template #playground-options>
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
        v-model="disabledRef"
        label="Disabled Times"
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
          class="w-1/4 flex flex-col gap-4"
        >
          <span>{{ color.label }}</span>
          <vk-time
            :adapter="adapter"
            :color="color.value"
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
          class="flex flex-col gap-4"
        >
          <span>{{ variant.label }}</span>
          <vk-time
            :adapter="adapter"
            :variant="variant.value"
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
          class="flex flex-col gap-4"
        >
          <span>{{ shape.label }}</span>
          <vk-time
            :adapter="adapter"
            :shape="shape.value"
          />
        </div>
      </example-section>

      <example-section
        title="Sizes"
        justify="start"
        wrap
        gap
      >
        <div
          v-for="size in sizeOptions.general"
          :key="size.value"
          class="flex flex-col gap-4"
        >
          <span>{{ size.label }}</span>
          <vk-time
            :adapter="adapter"
            :size="size.value"
          />
        </div>
      </example-section>

      <example-section
        title="Min & Max Times"
        gap
      >
        <div class="flex flex-col gap-4">
          <span>Min</span>
          <vk-time
            :adapter="adapter"
            :min-time="1730710858"
          />
        </div>
        <div class="flex flex-col gap-4">
          <span>Max</span>
          <vk-time
            :adapter="adapter"
            :max-time="1730739658"
          />
        </div>
      </example-section>

      <example-section
        title="Disabled Times"
      >
        <vk-time
          :adapter="adapter"
          :disabled-times="form.disabledTimes"
        />
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Time Props"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="timeProps"
          />
        </example-section>

        <example-section
          title="Time Adapter Props"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="timeAdapterProps"
          />
        </example-section>

        <example-section
          title="Time Adapter Interface"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="timeAdapterInterface"
          />
        </example-section>

        <example-section
          title="Time Adapter Result Type"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="timeAdapterResult"
          />
        </example-section>

        <example-section
          title="FormattedTime Interface"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="formattedTimeProps"
          />
        </example-section>

        <example-section
          title="Available Time Formats"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="timeFormats"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
