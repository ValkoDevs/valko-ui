<script setup lang="ts">
import type { AlertProps } from '#valkoui'

const isShown = ref(true)

const form = ref<AlertProps>({
  color: 'primary',
  variant: 'filled',
  size: 'md',
  title: 'Title',
  shape: 'soft',
  elevated: false
})

const iconsForm = ref<Record<string, boolean>>({})

const alertProps: PropData[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Alert.',
    values: 'primary, secondary, negative, warning, accent, positive, surface',
    default: 'primary',
    apiType: 'custom-string'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Alert.',
    values: 'filled, outlined, ghost, gradient',
    default: 'filled',
    apiType: 'custom-string'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Alert.',
    values: 'rounded, square, soft',
    default: 'soft',
    apiType: 'custom-string'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Alert.',
    values: 'xs, sm, md, lg',
    default: 'md',
    apiType: 'custom-string'
  },
  {
    key: 'elevatedProp',
    prop: 'elevated',
    required: false,
    description: 'Adds a subtle shadow to the Alert, giving it a slightly raised appearance. When false (default), the alert appears flat with no shadow.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'closableProp',
    prop: 'closable',
    required: false,
    description: 'Displays a button to close the Alert.',
    values: 'boolean',
    default: false,
    apiType: 'primitive'
  },
  {
    key: 'titleProp',
    prop: 'title',
    required: false,
    description: 'The title of the Alert.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'iconProp',
    prop: 'icon',
    required: false,
    description: 'The icon of the Alert.',
    values: 'string | null',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'ariaLabelProp',
    prop: 'ariaLabel',
    required: false,
    description: 'Accessible text label read by assistive technologies when no visible label is provided.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'ariaLabelledByProp',
    prop: 'ariaLabelledBy',
    required: false,
    description: 'ID reference to an element that labels the input (e.g. a visible <label>).',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'styleSlotsProps',
    prop: 'styleSlots',
    required: false,
    description: 'Custom styles for different parts of the Alert component.',
    values: 'AlertSlots',
    default: '',
    apiType: 'custom-type'
  }
]

const alertEmits: EmitData[] = [
  {
    key: 'closeEmit',
    event: 'close',
    type: '() => void',
    values: '',
    description: 'Emitted when the alert is closed by the user.',
    apiType: 'event'
  }
]

const alertSlots: SlotData[] = [
  {
    key: 'defaultSlot',
    name: 'default',
    description: 'Slot for the main content of the alert.',
    example: '<template #default>\n  <p>This is the main content of the alert.</p>\n</template>',
    apiType: 'slot'
  }
]

const styleSlotsInterface: PropData[] = [
  {
    key: 'container',
    prop: 'container',
    required: false,
    description: 'Root container for the alert. Controls the overall layout and background.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'mainIcon',
    prop: 'mainIcon',
    required: false,
    description: 'Styles for the main icon.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'title',
    prop: 'title',
    required: false,
    description: 'Styles for the alert title text.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'contentContainer',
    prop: 'contentContainer',
    required: false,
    description: 'Container for the title and content.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'content',
    prop: 'content',
    required: false,
    description: 'Container for the main content area (slot).',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'closeButton',
    prop: 'closeButton',
    required: false,
    description: 'Styles for the close button itself.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'closeIcon',
    prop: 'closeIcon',
    required: false,
    description: 'Styles for the close icon itself.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  }
]

const closeAlert = () => isShown.value = false

watch(isShown, () => {
  if (!isShown.value) {
    setTimeout(() => isShown.value = true, 1000)
  }
})

const generateSnippet = snippetGeneratorFactory('vk-alert')

const iconSnippet = `
<template>
  <vk-alert/>

  <vk-alert
    icon="home"
  />

  <vk-alert
    :icon="null"
  />
</template>
`

const styles = {
  default: {
    slotContainer: [
      'sm:grid-cols-2',
      'md:grid-cols-3'
    ]
  },
  defaultAlt: {
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
    title="Alert"
    description="Visual notification that accent the user about an important state or action. Alerts are commonly used to communicate positive messages, warnings, or negative to the user."
  >
    <template #playground-view>
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 scale-90"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-out duration-200"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-90"
      >
        <vk-alert
          v-if="isShown"
          :title="form.title"
          :size="form.size"
          :variant="form.variant"
          :shape="form.shape"
          :color="form.color"
          :closable="form.closable"
          :elevated="form.elevated"
          :icon="iconsForm.noIcon ? null : iconsForm.customIcon ? 'brand-vue' : ''"
          @close="closeAlert()"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi neque doloremque dignissimos ducimus negative Molestias perferendis, sequi, laboriosam quod voluptatem voluptas repellat ut, earum nostrum dolore blanditiis facere impedit.
        </vk-alert>
      </transition>
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
        :options="variantOptions.withGradient"
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
        v-model="form.title"
        label="Title"
        size="sm"
      />
      <vk-checkbox
        v-model="form.elevated"
        label="Elevated"
      />
      <vk-checkbox
        v-model="form.closable"
        label="Closable"
      />
      <vk-checkbox
        v-model="iconsForm.customIcon"
        label="Custom Icon"
      />
      <vk-checkbox
        v-model="iconsForm.noIcon"
        label="Without Icon"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        :style-slots="styles.default"
      >
        <vk-alert
          v-for="color in colorOptions.withSurface"
          :key="color.value"
          :color="color.value"
          :title="color.label"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi neque doloremque dignissimos ducimus negative Molestias perferendis, sequi, laboriosam quod voluptatem voluptas repellat ut, earum nostrum dolore blanditiis facere impedit.
        </vk-alert>

        <template #code>
          <code-block :code="generateSnippet<string>('color', { values: colorOptions.withSurface.map(o => o.value), hasSlot: true })" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        :style-slots="styles.defaultAlt"
      >
        <vk-alert
          v-for="variant in variantOptions.withGradient"
          :key="variant.value"
          :variant="variant.value"
          :title="variant.label"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi neque doloremque dignissimos ducimus negative Molestias perferendis, sequi, laboriosam quod voluptatem voluptas repellat ut, earum nostrum dolore blanditiis facere impedit.
        </vk-alert>

        <template #code>
          <code-block :code="generateSnippet<string>('variant', { values: variantOptions.withGradient.map(o => o.value), hasSlot: true })" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        :style-slots="styles.default"
      >
        <vk-alert
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          :shape="shape.value"
          :title="shape.label"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi neque doloremque dignissimos ducimus negative Molestias perferendis, sequi, laboriosam quod voluptatem voluptas repellat ut, earum nostrum dolore blanditiis facere impedit.
        </vk-alert>

        <template #code>
          <code-block :code="generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value), hasSlot: true })" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        :style-slots="styles.defaultAlt"
      >
        <vk-alert
          v-for="size in sizeOptions.general"
          :key="size.value"
          :size="size.value"
          :title="size.label"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi neque doloremque dignissimos ducimus negative Molestias perferendis, sequi, laboriosam quod voluptatem voluptas repellat ut, earum nostrum dolore blanditiis facere impedit.
        </vk-alert>

        <template #code>
          <code-block :code="generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value), hasSlot: true })" />
        </template>
      </example-section>

      <example-section title="Elevated">
        <vk-alert
          elevated
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi neque doloremque dignissimos ducimus negative Molestias perferendis, sequi, laboriosam quod voluptatem voluptas repellat ut, earum nostrum dolore blanditiis facere impedit.
        </vk-alert>

        <template #code>
          <code-block :code="generateSnippet<boolean>('elevated', { values: [true], hasSlot: true })" />
        </template>
      </example-section>

      <example-section
        title="Icons"
        :style-slots="styles.default"
      >
        <vk-alert
          title="Default Icon"
          color="positive"
        />
        <vk-alert
          title="Custom Icon"
          color="accent"
          icon="home"
        />
        <vk-alert
          title="Without Icon"
          color="primary"
          :icon="null"
        />

        <template #code>
          <code-block :code="iconSnippet" />
        </template>
      </example-section>

      <example-section title="Closable">
        <transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 scale-90"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition ease-out duration-200"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-90"
        >
          <vk-alert
            v-if="isShown"
            title="Closable"
            closable
            @close="closeAlert()"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quo ad, voluptates necessitatibus quis ipsum recusandae, quia laborum accusantium earum distinctio velit blanditiis quidem enim commodi accusamus fuga eveniet incidunt.
          </vk-alert>
        </transition>

        <template #code>
          <code-block :code="generateSnippet<boolean>('closable', { values: [true], hasSlot: true })" />
        </template>
      </example-section>
    </template>

    <template #api>
      <api-table
        name="Alert"
        :tables="[
          { title: 'Props', headers: 'props', data: alertProps },
          { title: 'Emits', headers: 'emits', data: alertEmits },
          { title: 'Slots', headers: 'slots', data: alertSlots },
          { title: 'Style Slots', headers: 'interface', data: styleSlotsInterface }
        ]"
      />
    </template>
  </doc-section>
</template>
