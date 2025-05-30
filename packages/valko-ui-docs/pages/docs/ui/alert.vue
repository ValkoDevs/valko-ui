<script setup lang="ts">
import type { TableItem, AlertProps } from '#valkoui'

const isShown = ref(true)

const form = ref<AlertProps>({
  color: 'primary',
  variant: 'filled',
  size: 'md',
  title: 'Title',
  shape: 'soft'
})

const iconsForm = ref<Record<string, boolean>>({})

const alertProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Alert.',
    values: 'primary, secondary, negative, warning, accent, positive, surface',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Alert.',
    values: 'filled, outlined, ghost, gradient',
    default: 'filled'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Alert.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Alert.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'closableProp',
    prop: 'closable',
    required: false,
    description: 'Displays a button to close the Alert.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'titleProp',
    prop: 'title',
    required: false,
    description: 'The title of the Alert.',
    values: 'string',
    default: ''
  },
  {
    key: 'iconProp',
    prop: 'icon',
    required: false,
    description: 'The icon of the Alert.',
    values: 'string | null',
    default: ''
  }
]

const alertEmits: TableItem[] = [
  {
    key: 'closeEmit',
    event: 'close',
    type: '() => void',
    values: '',
    description: 'Emitted when the alert is closed by the user.'
  }
]

const alertSlots: TableItem[] = [
  {
    key: 'defaultSlot',
    name: 'default',
    description: 'Slot for the main content of the alert.',
    example: '<template #default>\n  <p>This is the main content of the alert.</p>\n</template>'
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
        classes="sm:grid-cols-2 md:grid-cols-3"
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
        classes="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
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
        classes="sm:grid-cols-2 md:grid-cols-3"
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
        classes="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
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

      <example-section
        title="Icons"
        classes="sm:grid-cols-2 md:grid-cols-3"
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
      <h3>Alert Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="alertProps"
      />

      <h3>Alert Emits</h3>
      <vk-table
        :headers="emitHeaders"
        :data="alertEmits"
      />

      <h3>Alert Slots</h3>
      <vk-table
        :headers="slotHeaders"
        :data="alertSlots"
      />
    </template>
  </doc-section>
</template>
