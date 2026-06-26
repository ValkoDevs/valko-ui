<script setup lang="ts">
import { useNotification, type NotificationProps, type VerticalAlign, type HorizontalAlign, type SelectOption } from '#valkoui'

const form = ref<NotificationProps>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  text: 'Notification Text',
  gravity: 'top',
  position: 'right',
  duration: 3000,
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

const notificationProps: PropData[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Notification.',
    values: 'primary, secondary, negative, warning, accent, positive, surface',
    default: 'primary',
    apiType: 'custom-string'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Notification.',
    values: 'filled, outlined, ghost, line, gradient',
    default: 'filled',
    apiType: 'custom-string'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Notification.',
    values: 'rounded, square, soft',
    default: 'soft',
    apiType: 'custom-string'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Notification.',
    values: 'xs, sm, md, lg',
    default: 'md',
    apiType: 'custom-string'
  },
  {
    key: 'styleSlotsProp',
    prop: 'styleSlots',
    required: false,
    description: 'Customizes style slots for Notification.',
    values: 'NotificationSlots',
    default: '',
    apiType: 'custom-type'
  },
  {
    key: 'textProp',
    prop: 'text',
    required: true,
    description: 'Message to be displayed in the Notification.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'durationProp',
    prop: 'duration',
    required: false,
    description: 'Duration for which the Notification should be displayed. -1 for permanent Notification.',
    values: 'number',
    default: '3000',
    apiType: 'primitive'
  },
  {
    key: 'destinationProp',
    prop: 'destination',
    required: false,
    description: 'URL to which the browser should be navigated on click of the Notification.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'newWindowProp',
    prop: 'newWindow',
    required: false,
    description: 'Decides whether the destination should be opened in a new window or not.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'closeProp',
    prop: 'close',
    required: false,
    description: 'To show the close icon or not.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'gravityProp',
    prop: 'gravity',
    required: false,
    description: 'To show the Notification from top or bottom.',
    values: 'top, bottom',
    default: 'top',
    apiType: 'custom-string'
  },
  {
    key: 'positionProp',
    prop: 'position',
    required: false,
    description: 'To show the Notification on left or right.',
    values: 'left, right',
    default: 'right',
    apiType: 'custom-string'
  },
  {
    key: 'stopOnFocusProp',
    prop: 'stopOnFocus',
    required: false,
    description: 'To stop timer when hovered over the Notification (Only if duration is set).',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'offsetProp',
    prop: 'offset',
    required: false,
    description: 'Ability to add some offset to axis.',
    values: '{y: number, x: number}',
    default: '',
    apiType: 'object'
  },
  {
    key: 'onClickProp',
    prop: 'onClick',
    required: false,
    description: 'Invoked when the Notification is clicked.',
    values: '() => void',
    default: 'close()',
    apiType: 'function'
  }
]

const styleSlotsInterface: PropData[] = [
  {
    key: 'root',
    prop: 'root',
    required: false,
    description: 'Root element of the Notification.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'icon',
    prop: 'icon',
    required: false,
    description: 'Icon section of the Notification.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'text',
    prop: 'text',
    required: false,
    description: 'Text/message section.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'close',
    prop: 'close',
    required: false,
    description: 'Close button element.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
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
    close: props.close,
    newWindow: props.newWindow,
    destination: props.destination,
    offset: props.offset,
    stopOnFocus: props.stopOnFocus,
    duration: props.duration,
    onClick: props.onClick
  })
}

const scriptCode = `<script setup lang="ts">
import type { NotificationProps } from '#valkoui'
import { useNotification } from '#valkoui'

const createNotification = (props: NotificationProps) => useNotification(props)
<\u002Fscript>
`

const colorSnippet = `
<template>
  ${colorOptions.withSurface.map(color => `<vk-button
    @click="createNotification({ text: ${color.label}, color: ${color.value} })"
  >
    ${color.label}
  </vk-button>`).join('\n\n  ')}
</template>
`

const variantSnippet = `
<template>
  ${variantOptions.withGradientAndLine.map(variant => `<vk-button
    @click="createNotification({ text: ${variant.label}, variant: ${variant.value} })"
  >
    ${variant.label}
  </vk-button>`).join('\n\n  ')}
</template>
`

const shapeSnippet = `
<template>
  ${shapeOptions.general.map(shape => `<vk-button
    @click="createNotification({ text: ${shape.label}, shape: ${shape.value} })"
  >
    ${shape.label}
  </vk-button>`).join('\n\n  ')}
</template>
`

const sizeSnippet = `
<template>
  ${sizeOptions.general.map(size => `<vk-button
    @click="createNotification({ text: ${size.label}, size: ${size.value} })"
  >
    ${size.label}
  </vk-button>`).join('\n\n  ')}
</template>
`

const gravitySnippet = `
<template>
  ${gravityOptions.map(gravity => `<vk-button
    @click="createNotification({ text: ${gravity.label}, gravity: ${gravity.value} })"
  >
    ${gravity.label}
  </vk-button>`).join('\n\n  ')}
</template>
`

const positionSnippet = `
<template>
  ${positionOptions.map(position => `<vk-button
    @click="createNotification({ text: ${position.label}, position: ${position.value} })"
  >
    ${position.label}
  </vk-button>`).join('\n\n  ')}
</template>
`

const closeSnippet = `
<template>
  <vk-button
    @click="createNotification({ text: Close, close: true })"
  >
    Close
  </vk-button>
</template>
`

const stopOnFocusSnippet = `
<template>
  <vk-button
    @click="createNotification({ text: Stop On Focus, stopOnFocus: true })"
  >
    Stop On Focus
  </vk-button>
</template>
`

const styles = {
  colors: {
    slotContainer: [
      'sm:grid-cols-[repeat(3,_minmax(0,_max-content))]',
      'lg:grid-cols-[repeat(4,_minmax(0,_max-content))]',
      'xl:grid-cols-[repeat(7,_minmax(0,_max-content))]'
    ]
  },
  variants: {
    slotContainer: [
      'sm:grid-cols-[repeat(2,_minmax(0,_max-content))]',
      'md:grid-cols-[repeat(4,_minmax(0,_max-content))]',
      'lg:grid-cols-[repeat(5,_minmax(0,_max-content))]'
    ]
  },
  shapes: {
    slotContainer: [
      'grid-cols-[repeat(2,_minmax(0,_max-content))]',
      'lg:grid-cols-[repeat(3,_minmax(0,_max-content))]'
    ]
  },
  sizes: {
    slotContainer: [
      'sm:grid-cols-[repeat(2,_minmax(0,_max-content))]',
      'lg:grid-cols-[repeat(4,_minmax(0,_max-content))]'
    ]
  },
  default: {
    slotContainer: [
      'grid-cols-[repeat(2,_minmax(0,_max-content))]'
    ]
  }
}
</script>

<template>
  <doc-section
    title="Notification"
    description="Versatile tool for displaying brief, timely messages to users. It serves to alert users to important accent, such as positive actions, warnings, or negative, enhancing their awareness and interaction with the application. Unlike pop-up alerts that interrupt workflow, notifications are subtle, non-intrusive cues that seamlessly integrate into the user interface, providing a seamless user experience. With customizable options for appearance and behavior, the Notification component empowers developers to tailor notifications to suit the specific needs and aesthetics of their application."
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
        :options="colorOptions.withSurface"
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
        v-model="form.close"
        label="Close"
      />
      <vk-checkbox
        v-model="form.stopOnFocus"
        label="Stop on focus"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        :style-slots="styles.colors"
      >
        <vk-button
          v-for="color in colorOptions.withSurface"
          :key="color.value"
          :color="color.value"
          @click="createNotification({ text: color.label, color: color.value })"
        >
          {{ color.label }}
        </vk-button>

        <template #code>
          <code-block :code="`${scriptCode}${colorSnippet}`" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        :style-slots="styles.variants"
      >
        <vk-button
          v-for="variant in variantOptions.withGradientAndLine"
          :key="variant.value"
          @click="createNotification({ text: variant.label, variant: variant.value })"
        >
          {{ variant.label }}
        </vk-button>

        <template #code>
          <code-block :code="`${scriptCode}${variantSnippet}`" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        :style-slots="styles.shapes"
      >
        <vk-button
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          :shape="shape.value"
          @click="createNotification({ text: shape.label, shape: shape.value })"
        >
          {{ shape.label }}
        </vk-button>

        <template #code>
          <code-block :code="`${scriptCode}${shapeSnippet}`" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        :style-slots="styles.sizes"
      >
        <vk-button
          v-for="size in sizeOptions.general"
          :key="size.value"
          :size="size.value"
          @click="createNotification({ text: size.label, size: size.value })"
        >
          {{ size.label }}
        </vk-button>

        <template #code>
          <code-block :code="`${scriptCode}${sizeSnippet}`" />
        </template>
      </example-section>

      <example-section
        title="Gravity"
        :style-slots="styles.default"
      >
        <vk-button
          v-for="gravity in gravityOptions"
          :key="gravity.value"
          :gravity="gravity.value"
          @click="createNotification({ text: gravity.label, gravity: gravity.value })"
        >
          {{ gravity.label }}
        </vk-button>

        <template #code>
          <code-block :code="`${scriptCode}${gravitySnippet}`" />
        </template>
      </example-section>

      <example-section
        title="Position"
        :style-slots="styles.default"
      >
        <vk-button
          v-for="position in positionOptions"
          :key="position.value"
          :position="position.value"
          @click="createNotification({ text: position.label, position: position.value })"
        >
          {{ position.label }}
        </vk-button>

        <template #code>
          <code-block :code="`${scriptCode}${positionSnippet}`" />
        </template>
      </example-section>

      <example-section title="Close">
        <vk-button @click="createNotification({ text: 'Close', close: true })">
          Close
        </vk-button>

        <template #code>
          <code-block :code="`${scriptCode}${closeSnippet}`" />
        </template>
      </example-section>

      <example-section title="Stop on Focus">
        <vk-button @click="createNotification({ text: 'Stop on Focus', stopOnFocus: true })">
          Stop on Focus
        </vk-button>

        <template #code>
          <code-block :code="`${scriptCode}${stopOnFocusSnippet}`" />
        </template>
      </example-section>
    </template>

    <template #api>
      <api-table
        name="Notification"
        :tables="[
          { title: 'Props', data: notificationProps, headers: 'props' },
          { title: 'Style Slots', data: styleSlotsInterface, headers: 'interface' }
        ]"
      />
    </template>
  </doc-section>
</template>
