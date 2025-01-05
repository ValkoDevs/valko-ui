<script setup lang="ts">
import type { TableItem, AlertProps } from '#valkoui'

const isShown = ref(true)

const form = ref<AlertProps>({
  color: 'primary',
  variant: 'filled',
  size: 'md',
  title: '',
  shape: 'soft',
  flat: false
})

const iconsForm = ref<Record<string, boolean>>({
  noIcon: false,
  closable: false,
  customIcon: false
})

const alertProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Alert.',
    values: 'primary, neutral, error, warning, info, success',
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
  },
  {
    key: 'flatProp',
    prop: 'flat',
    required: false,
    description: 'Displays a shadow for the Alert.',
    values: 'true, false',
    default: 'false'
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

const { generalCode } = useCodeBlock('vk-alert')
</script>

<template>
  <doc-section
    title="Alert"
    description="Visual notification that informs the user about an important state or action. Alerts are commonly used to communicate success messages, warnings, or errors to the user."
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
          :flat="form.flat"
          :icon="iconsForm.noIcon ? null : iconsForm.customIcon ? 'brand-vue' : ''"
          @close="closeAlert()"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi neque doloremque dignissimos ducimus error? Molestias perferendis, sequi, laboriosam quod voluptatem voluptas repellat ut, earum nostrum dolore blanditiis facere impedit.
        </vk-alert>
      </transition>
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
      <vk-checkbox
        v-model="form.flat"
        label="Flat"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        classes="sm:grid-cols-2 md:grid-cols-3"
      >
        <vk-alert
          v-for="color in colorOptions"
          :key="color.value"
          :color="color.value"
          :title="color.label"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi neque doloremque dignissimos ducimus error? Molestias perferendis, sequi, laboriosam quod voluptatem voluptas repellat ut, earum nostrum dolore blanditiis facere impedit.
        </vk-alert>

        <template #code>
          <code-block :code="generalCode('color', colorOptions)" />
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi neque doloremque dignissimos ducimus error? Molestias perferendis, sequi, laboriosam quod voluptatem voluptas repellat ut, earum nostrum dolore blanditiis facere impedit.
        </vk-alert>

        <template #code>
          <code-block :code="generalCode('variant', variantOptions.withGradient)" />
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi neque doloremque dignissimos ducimus error? Molestias perferendis, sequi, laboriosam quod voluptatem voluptas repellat ut, earum nostrum dolore blanditiis facere impedit.
        </vk-alert>

        <template #code>
          <code-block :code="generalCode('shape', shapeOptions.general)" />
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi neque doloremque dignissimos ducimus error? Molestias perferendis, sequi, laboriosam quod voluptatem voluptas repellat ut, earum nostrum dolore blanditiis facere impedit.
        </vk-alert>

        <template #code>
          <code-block :code="generalCode('size', sizeOptions.general)" />
        </template>
      </example-section>

      <example-section
        title="Icons"
        classes="sm:grid-cols-2 md:grid-cols-3"
      >
        <vk-alert
          title="Default Icon"
          color="success"
        />
        <vk-alert
          title="Custom Icon"
          color="info"
          icon="home"
        />
        <vk-alert
          title="Without Icon"
          color="primary"
          :icon="null"
        />

        <template #code>
          <code-block :code="`<vk-alert></vk-alert>\n\<vk-alert icon=&quot;home&quot;></vk-alert>\n\<vk-alert :icon=&quot;null&quot;></vk-alert>`" />
        </template>
      </example-section>

      <example-section title="Flat">
        <vk-alert
          title="Flat"
          flat
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aut recusandae obcaecati qui neque? Magni aperiam odio aliquid ratione. Aliquam atque voluptates velit praesentium a sequi unde maiores tempora fugit!
        </vk-alert>

        <template #code>
          <code-block code="<vk-alert flat></vk-alert>" />
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
          <code-block code="<vk-alert closable></vk-alert>" />
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
