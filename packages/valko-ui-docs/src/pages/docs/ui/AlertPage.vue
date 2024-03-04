<script setup lang="ts">
import { ref, watch } from 'vue'
import DocSection from '../../../components/DocSection'
import ExampleSection from '../../../components/ExampleSection'
import variantOptions from '@/data/variantOptions'
import colorOptions from '@/data/colorOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import shapeOptions from '@/data/shapeOptions'
import emitHeaders from '@/data/emitHeaders'
import slotHeaders from '@/data/slotHeaders'

const isShown = ref(true)

const form = ref({
  color: 'primary',
  variant: 'filled',
  size: 'md',
  title: '',
  shape: 'soft',
  closable: false,
  customIcon: false,
  noIcon: false,
  flat: false
})

const apiData = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Alert.',
    values: 'primary, secondary, error, warning, info, success, light, dark',
    default: 'primary'
  },
  {
    prop: 'variant',
    required: false,
    description: 'The variant of the Alert.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Alert.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'closable',
    required: false,
    description: 'Displays a button to close the Alert.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'title',
    required: false,
    description: 'The title of the Alert.',
    values: 'string',
    default: ''
  },
  {
    prop: 'icon',
    required: false,
    description: 'The icon of the Alert.',
    values: 'string | null',
    default: ''
  }
  ,
  {
    prop: 'flat',
    required: false,
    description: 'Displays a shadow for the Alert.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Button.',
    values: 'rounded, square, soft',
    default: 'soft'
  }
]

const emitData = [
  {
    event: 'close',
    type: '() => void',
    values: '',
    description: 'Emitted when the alert is closed by the user.'
  }
]

const slotData = [
  {
    name: 'default',
    description: 'Slot for the main content of the alert.',
    example: '<template #default>\n  <p>This is the main content of the alert.</p>\n</template>'
  }
]

const closeAlert = () => {
  isShown.value = false
}

watch(isShown, () => {
  if (!isShown.value) {
    setTimeout(() => isShown.value = true, 1000)
  }
})
</script>

<template>
  <doc-section
    title="Alert"
    description="Visual notification that informs the user about an important state or action. Alerts are commonly used to communicate success messages, warnings, or errors to the user."
  >
    <template #playground-view>
      <div class="w-full flex justify-center p-4">
        <transition
          enter-active-class="transition ease-out durantion-200"
          enter-from-class="opacity-0 scale-90"
          enter-to-class="opactiy-1 scale-100"
          leave-active-class="transition ease-out durantion-200"
          leave-from-class="opactiy-1 scale-100"
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
            :icon="form.noIcon ? null : form.customIcon ? 'brand-vue' : ''"
            @close="closeAlert()"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi neque doloremque dignissimos ducimus error? Molestias perferendis, sequi, laboriosam quod voluptatem voluptas repellat ut, earum nostrum dolore blanditiis facere impedit.
          </vk-alert>
        </transition>
      </div>
    </template>
    <template #playground-options>
      <vk-input
        label="Title"
        size="sm"
        v-model="form.title"
      />
      <vk-select
        placeholder="Variant"
        size="sm"
        :options="variantOptions"
        v-model="form.variant"
      />
      <vk-select
        placeholder="Color"
        size="sm"
        :options="colorOptions"
        v-model="form.color"
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
      <vk-checkbox
        label="Closable"
        v-model="form.closable"
      />
      <vk-checkbox
        label="Custom Icon"
        v-model="form.customIcon"
      />
      <vk-checkbox
        label="Without Icon"
        v-model="form.noIcon"
      />
      <vk-checkbox
        label="Flat"
        v-model="form.flat"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        justify="around"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-alert
            v-for="color in colorOptions"
            :key="color.value"
            :color="color.value"
            :title="color.label"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi neque doloremque dignissimos ducimus error? Molestias perferendis, sequi, laboriosam quod voluptatem voluptas repellat ut, earum nostrum dolore blanditiis facere impedit.
          </vk-alert>
        </div>
      </example-section>

      <example-section
        title="Variants"
        justify="start"
        align="start"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-alert
            v-for="variant in variantOptions"
            :key="variant.value"
            :variant="variant.value"
            :title="variant.label"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi neque doloremque dignissimos ducimus error? Molestias perferendis, sequi, laboriosam quod voluptatem voluptas repellat ut, earum nostrum dolore blanditiis facere impedit.
          </vk-alert>
        </div>
      </example-section>

      <example-section
        title="Shapes"
        justify="start"
        align="start"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2 items-start">
          <vk-alert
            v-for="shape in shapeOptions"
            :key="shape.value"
            :shape="shape.value"
            :title="shape.label"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi neque doloremque dignissimos ducimus error? Molestias perferendis, sequi, laboriosam quod voluptatem voluptas repellat ut, earum nostrum dolore blanditiis facere impedit.
          </vk-alert>
        </div>
      </example-section>

      <example-section
        title="Sizes"
        justify="start"
        align="start"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2 items-start">
          <vk-alert
            v-for="size in sizeOptions"
            :key="size.value"
            :size="size.value"
            :title="size.label"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi neque doloremque dignissimos ducimus error? Molestias perferendis, sequi, laboriosam quod voluptatem voluptas repellat ut, earum nostrum dolore blanditiis facere impedit.
          </vk-alert>
        </div>
      </example-section>

      <example-section
        title="Icons"
        justify="start"
        align="start"
        gap
      >
        <div class="grow gap-4 grid grid-cols-3">
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
            color="secondary"
            :icon="null"
          />
        </div>
      </example-section>

      <example-section
        title="Flat"
      >
        <vk-alert
          title="Flat"
          flat
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aut recusandae obcaecati qui neque? Magni aperiam odio aliquid ratione. Aliquam atque voluptates velit praesentium a sequi unde maiores tempora fugit!
        </vk-alert>
      </example-section>

      <example-section
        title="Closable"
      >
        <transition
          enter-active-class="transition ease-out durantion-200"
          enter-from-class="opacity-0 scale-90"
          enter-to-class="opactiy-1 scale-100"
          leave-active-class="transition ease-out durantion-200"
          leave-from-class="opactiy-1 scale-100"
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
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Alert Props"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="apiData"
          />
        </example-section>

        <example-section
          title="Alert Emits"
          gap
        >
          <vk-data-table
            :headers="emitHeaders"
            :data="emitData"
          />
        </example-section>

        <example-section
          title="Alert Slots"
          gap
        >
          <vk-data-table
            :headers="slotHeaders"
            :data="slotData"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
