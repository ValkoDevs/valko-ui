<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import colorOptions from '@/data/colorOptions'
import variantWithGradient from '@/data/variantWithGradient'
import shapeOptions from '@/data/shapeOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import { useNotification } from '@valko-ui/components'
import { NotificationProps } from '@valko-ui/components'
import { Color, Variant, Shape, Size } from '@valko-ui/components'

const form = ref({
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
}) as NotificationProps

const variants = [
  ...variantWithGradient,
  { value: 'line', label: 'Line' }
]

const positionOptions = [
  { value: 'right', label: 'Right' },
  { value: 'left', label: 'Left' }
]

const gravityOptions = [
  { value: 'top', label: 'Top' },
  { value: 'bottom', label: 'Bottom' }
]

const notificationProps = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Notification.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'primary'
  },
  {
    prop: 'variant',
    required: false,
    description: 'The variant of the Notification.',
    values: 'filled, outlined, ghost, line, gradient',
    default: 'filled'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Notification.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Notification.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'text',
    required: true,
    description: 'Message to be displayed in the Notification.',
    values: 'string',
    default: ''
  },
  {
    prop: 'duration',
    required: false,
    description: 'Duration for which the Notification should be displayed. -1 for permanent Notification.',
    values: 'number',
    default: '3000'
  },
  {
    prop: 'destination',
    required: false,
    description: 'URL to which the browser should be navigated on click of the Notification.',
    values: 'string',
    default: ''
  },
  {
    prop: 'newWindow',
    required: false,
    description: 'Decides whether the destination should be opened in a new window or not.',
    values: 'boolean',
    default: 'false'
  },
  {
    prop: 'close',
    required: false,
    description: 'To show the close icon or not.',
    values: 'boolean',
    default: 'false'
  },
  {
    prop: 'gravity',
    required: false,
    description: 'To show the Notification from top or bottom.',
    values: 'top, bottom',
    default: 'top'
  },
  {
    prop: 'position',
    required: false,
    description: 'To show the Notification on left or right.',
    values: 'left, right',
    default: 'right'
  },
  {
    prop: 'stopOnFocus',
    required: false,
    description: 'To stop timer when hovered over the Notification (Only if duration is set).',
    values: 'boolean',
    default: 'false'
  },
  {
    prop: 'offset',
    required: false,
    description: 'Ability to add some offset to axis.',
    values: '{y: number, x: number}',
    default: 'undefined'
  },
  {
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
        placeholder="Color"
        size="sm"
        :options="colorOptions"
        v-model="form.color"
      />
      <vk-select
        placeholder="Variant"
        size="sm"
        :options="variants"
        v-model="form.variant"
      />
      <vk-select
        placeholder="Shape"
        size="sm"
        :options="shapeOptions"
        v-model="form.shape"
      />
      <vk-select
        placeholder="Size"
        size="sm"
        :options="sizeOptions"
        v-model="form.size"
      />
      <vk-select
        placeholder="Gravity"
        size="sm"
        :options="gravityOptions"
        v-model="form.gravity"
      />
      <vk-select
        placeholder="Position"
        size="sm"
        :options="positionOptions"
        v-model="form.position"
      />
      <vk-input
        label="Text"
        v-model="form.text"
      />
      <vk-input
        label="Duration"
        type="number"
        v-model="form.duration"
      />
      <vk-checkbox
        label="Flat"
        v-model="form.flat"
      />
      <vk-checkbox
        label="Close"
        v-model="form.close"
      />
      <vk-checkbox
        label="Stop on focus"
        v-model="form.stopOnFocus"
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
          class="flex flex-col"
        >
          <span>{{ color.label }}</span>
          <vk-button
            :color="color.value"
            class="mt-4"
            @click="createNotification({ text: color.label, color: color.value as Color })"
          >
            Click Me
          </vk-button>
        </div>
      </example-section>

      <example-section
        title="Variants"
        justify="start"
        wrap
        gap
      >
        <div
          v-for="variant in variantWithGradient"
          :key="variant.value"
          class="flex flex-col"
        >
          <span>{{ variant.label }}</span>
          <vk-button
            :variant="variant.value"
            class="mt-4"
            @click="createNotification({ text: variant.label, variant: variant.value as Variant })"
          >
            Click Me
          </vk-button>
        </div>
        <div class="flex flex-col">
          <span>Line</span>
          <vk-button
            class="mt-4"
            @click="createNotification({ text: 'Line', variant: 'line' as Variant })"
          >
            Click Me
          </vk-button>
        </div>
      </example-section>

      <example-section
        title="Shapes"
        justify="start"
        wrap
        gap
      >
        <div
          v-for="shape in shapeOptions"
          :key="shape.value"
          class="flex flex-col"
        >
          <span>{{ shape.label }}</span>
          <vk-button
            :shape="shape.value"
            class="mt-4"
            @click="createNotification({ text: shape.label, shape: shape.value as Shape })"
          >
            Click Me
          </vk-button>
        </div>
      </example-section>

      <example-section
        title="Sizes"
        justify="start"
        wrap
        gap
      >
        <div
          v-for="size in sizeOptions"
          :key="size.value"
          class="flex flex-col"
        >
          <span>{{ size.label }}</span>
          <vk-button
            :size="size.value"
            class="mt-4"
            @click="createNotification({ text: size.label, size: size.value as Size })"
          >
            Click Me
          </vk-button>
        </div>
      </example-section>

      <example-section
        title="Gravity"
        justify="start"
        wrap
        gap
      >
        <div
          v-for="gravity in gravityOptions"
          :key="gravity.value"
          class="flex flex-col"
        >
          <span>{{ gravity.label }}</span>
          <vk-button
            :gravity="gravity.value"
            class="mt-4"
            @click="createNotification({ text: gravity.label, gravity: gravity.value as any })"
          >
            Click Me
          </vk-button>
        </div>
      </example-section>

      <example-section
        title="Position"
        justify="start"
        wrap
        gap
      >
        <div
          v-for="position in positionOptions"
          :key="position.value"
          class="flex flex-col"
        >
          <span>{{ position.label }}</span>
          <vk-button
            :position="position.value"
            class="mt-4"
            @click="createNotification({ text: position.label, position: position.value as any })"
          >
            Click Me
          </vk-button>
        </div>
      </example-section>

      <example-section
        title="Flat"
        justify="start"
        wrap
        gap
      >
        <vk-button
          flat
          class="mt-4"
          @click="createNotification({ text: 'Flat', flat: true })"
        >
          Click Me
        </vk-button>
      </example-section>

      <example-section
        title="Close"
        justify="start"
        wrap
        gap
      >
        <vk-button
          close
          class="mt-4"
          @click="createNotification({ text: 'Close', close: true })"
        >
          Click Me
        </vk-button>
      </example-section>

      <example-section
        title="Stop on Focus"
        justify="start"
        wrap
        gap
      >
        <vk-button
          close
          class="mt-4"
          @click="createNotification({ text: 'Stop on Focus', stopOnFocus: true })"
        >
          Click Me
        </vk-button>
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Notification Props"
        >
          <vk-table
            :headers="propHeaders"
            :data="notificationProps"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
