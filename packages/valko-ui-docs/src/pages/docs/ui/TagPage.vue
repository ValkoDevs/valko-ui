<script setup lang="ts">
import { ref, watch } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import colorOptions from '@/data/colorOptions'
import variantWithGradient from '@/data/variantWithGradient'
import shapeOptions from '@/data/shapeOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import emitHeaders from '@/data/emitHeaders'
import { useNotification } from '@valko-ui/components'

const form = ref({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  text: 'ValkoUI',
  iconLeft: false,
  iconRight: false,
  closable: false,
  disabled: false,
  isPressable: false
})

const tagProps = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Tag.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'primary'
  },
  {
    prop: 'variant',
    required: false,
    description: 'The variant style of the Tag.',
    values: 'filled, outlined, ghost, gradient',
    default: 'filled'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape style of the Tag.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Tag.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'text',
    required: true,
    description: 'The text displayed in the Tag.',
    values: 'string',
    default: ''
  },
  {
    prop: 'iconLeft',
    required: false,
    description: 'The icon displayed on the left side of the Tag.',
    values: 'string',
    default: ''
  },
  {
    prop: 'iconRight',
    required: false,
    description: 'The icon displayed on the right side of the Tag.',
    values: 'string',
    default: ''
  },
  {
    prop: 'closable',
    required: false,
    description: 'Displays a close button on the Tag.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'isPressable',
    required: false,
    description: 'Whether the Tag should allow to be pressed.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'disabled',
    required: false,
    description: 'Disables interaction with the Tag.',
    values: 'true, false',
    default: 'false'
  }
]

const tagEmits = [
  {
    event: 'click',
    type: '() => void',
    values: '',
    description: 'Emitted when the Tag is clicked.'
  },
  {
    event: 'close',
    type: '() => void',
    values: '',
    description: 'Emitted when the close button on the Tag is clicked.'
  }
]

const isShown = ref(true)

const closeTag = () => {
  isShown.value = false
}

const onClick = () => useNotification({ text: 'Clickled' })

watch(isShown, () => {
  if (!isShown.value) {
    setTimeout(() => isShown.value = true, 1000)
  }
})
</script>

<template>
  <doc-section
    title="Tag"
    description="Provides a visually distinctive way to represent labels or categories in a user interface. Tags are useful for highlighting or classifying items such as articles, products, or topics."
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
          <vk-tag
            v-if="isShown"
            :color="form.color"
            :variant="form.variant"
            :shape="form.shape"
            :size="form.size"
            :text="form.text"
            :icon-left="form.iconLeft ? 'tag' : ''"
            :icon-right="form.iconRight ? 'tag' : ''"
            :closable="form.closable"
            :is-pressable="form.isPressable"
            :disabled="form.disabled"
            @click="onClick"
            @close="closeTag"
          />
        </transition>
      </div>
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
        :options="variantWithGradient"
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
      <vk-input
        label="Text"
        size="sm"
        v-model="form.text"
      />
      <vk-checkbox
        label="Icon Left"
        v-model="form.iconLeft"
      />
      <vk-checkbox
        label="Icon Right"
        v-model="form.iconRight"
      />
      <vk-checkbox
        label="Closable"
        v-model="form.closable"
      />
      <vk-checkbox
        label="Pressable"
        v-model="form.isPressable"
      />
      <vk-checkbox
        label="Disabled"
        v-model="form.disabled"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        justify="start"
        gap
      >
        <vk-tag
          v-for="color in colorOptions"
          :key="color.value"
          :color="color.value"
          :text="color.label"
        />
      </example-section>

      <example-section
        title="Variants"
        justify="start"
        gap
      >
        <vk-tag
          v-for="variant in variantWithGradient"
          :key="variant.value"
          :variant="variant.value"
          :text="variant.label"
        />
      </example-section>

      <example-section
        title="Shapes"
        justify="start"
        gap
      >
        <vk-tag
          v-for="shape in shapeOptions"
          :key="shape.value"
          :shape="shape.value"
          :text="shape.label"
        />
      </example-section>

      <example-section
        title="Sizes"
        justify="start"
        gap
      >
        <vk-tag
          v-for="size in sizeOptions"
          :key="size.value"
          :size="size.value"
          :text="size.label"
        />
      </example-section>

      <example-section
        title="Icons"
        justify="start"
        gap
      >
        <vk-tag
          text="Without Icons"
        />
        <vk-tag
          text="Icon Left"
          icon-left="tag"
        />
        <vk-tag
          text="Icon Right"
          icon-right="tag"
        />
        <vk-tag
          text="Icons"
          icon-left="tag"
          icon-right="tag"
        />
      </example-section>

      <example-section
        title="Closable"
        justify="start"
        gap
      >
        <transition
          enter-active-class="transition ease-out durantion-200"
          enter-from-class="opacity-0 scale-90"
          enter-to-class="opactiy-1 scale-100"
          leave-active-class="transition ease-out durantion-200"
          leave-from-class="opactiy-1 scale-100"
          leave-to-class="opacity-0 scale-90"
        >
          <vk-tag
            v-if="isShown"
            text="Closable"
            closable
            @close="closeTag"
          />
        </transition>
      </example-section>

      <example-section
        title="Pressable"
      >
        <vk-tag
          text="Pressable"
          is-pressable
          @click="onClick"
        />
      </example-section>

      <example-section
        title="Disabled"
      >
        <vk-tag
          text="Disabled"
          disabled
        />
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Tag Props"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="tagProps"
          />
        </example-section>

        <example-section
          title="Tag Emits"
          gap
        >
          <vk-data-table
            :headers="emitHeaders"
            :data="tagEmits"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
