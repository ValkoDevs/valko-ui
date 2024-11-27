<script setup lang="ts">
import type { NotificationProps, TableItem, VerticalAlign, HorizontalAlign, SelectOption } from '#valkoui'
import { useNotification } from '#valkoui'

const form = ref<NotificationProps>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  text: 'Notification Text',
  gravity: 'top',
  position: 'right',
  duration: 3000,
  flat: false,
  close: false,
  newWindow: false,
  destination: '',
  stopOnFocus: false
})

const positionOptions: SelectOption<HorizontalAlign>[] = [
  { value: 'right', label: 'Right' },
  { value: 'left', label: 'Left' }
]

const gravityOptions: SelectOption<VerticalAlign>[] = [
  { value: 'top', label: 'Top' },
  { value: 'bottom', label: 'Bottom' }
]

const notificationProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Notification.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Notification.',
    values: 'filled, outlined, ghost, line, gradient',
    default: 'filled'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Notification.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Notification.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'textProp',
    prop: 'text',
    required: true,
    description: 'Message to be displayed in the Notification.',
    values: 'string',
    default: ''
  },
  {
    key: 'durationProp',
    prop: 'duration',
    required: false,
    description: 'Duration for which the Notification should be displayed. -1 for permanent Notification.',
    values: 'number',
    default: '3000'
  },
  {
    key: 'destinationProp',
    prop: 'destination',
    required: false,
    description: 'URL to which the browser should be navigated on click of the Notification.',
    values: 'string',
    default: ''
  },
  {
    key: 'newWindowProp',
    prop: 'newWindow',
    required: false,
    description: 'Decides whether the destination should be opened in a new window or not.',
    values: 'boolean',
    default: 'false'
  },
  {
    key: 'closeProp',
    prop: 'close',
    required: false,
    description: 'To show the close icon or not.',
    values: 'boolean',
    default: 'false'
  },
  {
    key: 'gravityProp',
    prop: 'gravity',
    required: false,
    description: 'To show the Notification from top or bottom.',
    values: 'top, bottom',
    default: 'top'
  },
  {
    key: 'positionProp',
    prop: 'position',
    required: false,
    description: 'To show the Notification on left or right.',
    values: 'left, right',
    default: 'right'
  },
  {
    key: 'stopOnFocusProp',
    prop: 'stopOnFocus',
    required: false,
    description: 'To stop timer when hovered over the Notification (Only if duration is set).',
    values: 'boolean',
    default: 'false'
  },
  {
    key: 'offsetProp',
    prop: 'offset',
    required: false,
    description: 'Ability to add some offset to axis.',
    values: '{y: number, x: number}',
    default: 'undefined'
  },
  {
    key: 'onClickProp',
    prop: 'onClick',
    required: false,
    description: 'Invoked when the Notification is clicked.',
    values: '() => void',
    default: 'null'
  }
]

const createNotification = (props: NotificationProps) => {
  useNotification({
    text: props.text,
    color: props.color,
    variant: props.variant,
    shape: props.shape,
    size: props.size,
    gravity: props.gravity,
    position: props.position,
    flat: props.flat,
    close: props.close,
    newWindow: props.newWindow,
    destination: props.destination,
    offset: props.offset,
    stopOnFocus: props.stopOnFocus,
    duration: props.duration,
    onClick: props.onClick
  })
}
</script>

<template>
  <doc-section
    title="Notification"
    description="Versatile tool for displaying brief, timely messages to users. It serves to alert users to important information, such as successful actions, warnings, or errors, enhancing their awareness and interaction with the application. Unlike pop-up alerts that interrupt workflow, notifications are subtle, non-intrusive cues that seamlessly integrate into the user interface, providing a seamless user experience. With customizable options for appearance and behavior, the Notification component empowers developers to tailor notifications to suit the specific needs and aesthetics of their application."
  >
    <template #playground-view>
      <vk-button
        @click="createNotification({
          text: form.text,
          color: form.color,
          variant: form.variant,
          shape: form.shape,
          size: form.size,
          gravity: form.gravity,
          position: form.position,
          flat: form.flat,
          close: form.close,
          newWindow: form.newWindow,
          destination: form.destination,
          offset: form.offset,
          stopOnFocus: form.stopOnFocus,
          duration: form.duration
        })"
      >
        Click Me
      </vk-button>
    </template>
    <template #playground-options>
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
        :options="variantOptions.withGradientAndLine"
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
      <vk-select
        v-model="form.gravity"
        label="Gravity"
        size="sm"
        :options="gravityOptions"
      />
      <vk-select
        v-model="form.position"
        label="Position"
        size="sm"
        :options="positionOptions"
      />
      <vk-input
        v-model="form.text"
        label="Text"
      />
      <vk-input
        v-model="form.duration"
        label="Duration"
        type="number"
      />
      <vk-checkbox
        v-model="form.flat"
        label="Flat"
      />
      <vk-checkbox
        v-model="form.close"
        label="Close"
      />
      <vk-checkbox
        v-model="form.stopOnFocus"
        label="Stop on focus"
      />
    </template>

    <template #examples>
      <example-section title="Colors">
        <vk-button
          v-for="color in colorOptions"
          :key="color.value"
          :color="color.value"
          class="mt-4"
          @click="createNotification({ text: color.label, color: color.value })"
        >
          {{ color.label }}
        </vk-button>
      </example-section>

      <example-section title="Variants">
        <vk-button
          v-for="variant in variantOptions.withGradientAndLine"
          :key="variant.value"
          class="mt-4"
          @click="createNotification({ text: variant.label, variant: variant.value })"
        >
          {{ variant.label }}
        </vk-button>
      </example-section>

      <example-section title="Shapes">
        <vk-button
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          :shape="shape.value"
          class="mt-4"
          @click="createNotification({ text: shape.label, shape: shape.value })"
        >
          {{ shape.label }}
        </vk-button>
      </example-section>

      <example-section title="Sizes">
        <vk-button
          v-for="size in sizeOptions.general"
          :key="size.value"
          :size="size.value"
          class="mt-4"
          @click="createNotification({ text: size.label, size: size.value })"
        >
          {{ size.label }}
        </vk-button>
      </example-section>

      <example-section title="Gravity">
        <vk-button
          v-for="gravity in gravityOptions"
          :key="gravity.value"
          :gravity="gravity.value"
          class="mt-4"
          @click="createNotification({ text: gravity.label, gravity: gravity.value })"
        >
          {{ gravity.label }}
        </vk-button>
      </example-section>

      <example-section title="Position">
        <vk-button
          v-for="position in positionOptions"
          :key="position.value"
          :position="position.value"
          class="mt-4"
          @click="createNotification({ text: position.label, position: position.value })"
        >
          {{ position.label }}
        </vk-button>
      </example-section>

      <example-section title="Flat">
        <vk-button
          flat
          class="mt-4"
          @click="createNotification({ text: 'Flat', flat: true })"
        >
          Flat
        </vk-button>
      </example-section>

      <example-section title="Close">
        <vk-button
          close
          class="mt-4"
          @click="createNotification({ text: 'Close', close: true })"
        >
          Close
        </vk-button>
      </example-section>

      <example-section title="Stop on Focus">
        <vk-button
          close
          class="mt-4"
          @click="createNotification({ text: 'Stop on Focus', stopOnFocus: true })"
        >
          Stop on Focus
        </vk-button>
      </example-section>
    </template>

    <template #api>
      <example-section title="Notification Props">
        <vk-table
          :headers="propHeaders"
          :data="notificationProps"
        />
      </example-section>
    </template>
  </doc-section>
</template>
