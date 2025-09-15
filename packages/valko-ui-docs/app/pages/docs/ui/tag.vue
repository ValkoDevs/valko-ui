<script setup lang="ts">
import type { TagProps, TableItem } from '#valkoui'
import { useNotification } from '#valkoui'

const form = ref<TagProps>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  text: 'ValkoUI',
  closable: false,
  disabled: false,
  isPressable: false
})

const iconsForm = ref({
  left: false,
  right: false
})

const tagProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Tag.',
    values: 'primary, secondary, negative, warning, accent, positive, surface',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant style of the Tag.',
    values: 'filled, outlined, ghost, gradient',
    default: 'filled'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape style of the Tag.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Tag.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'textProp',
    prop: 'text',
    required: true,
    description: 'The text displayed in the Tag.',
    values: 'string',
    default: ''
  },
  {
    key: 'iconLeftProp',
    prop: 'iconLeft',
    required: false,
    description: 'The icon displayed on the left side of the Tag.',
    values: 'string',
    default: ''
  },
  {
    key: 'iconRightProp',
    prop: 'iconRight',
    required: false,
    description: 'The icon displayed on the right side of the Tag.',
    values: 'string',
    default: ''
  },
  {
    key: 'closableProp',
    prop: 'closable',
    required: false,
    description: 'Displays a close button on the Tag.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'isPressableProp',
    prop: 'isPressable',
    required: false,
    description: 'Whether the Tag should allow to be pressed.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'disabledProp',
    prop: 'disabled',
    required: false,
    description: 'Disables interaction with the Tag.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'styleSlotsProp',
    prop: 'styleSlots',
    required: false,
    description: 'Customizes style slots for Tag.',
    values: 'TagSlots',
    default: ''
  }
]

const styleSlotsInterface: TableItem[] = [
  {
    key: 'container',
    prop: 'container',
    description: 'Root container for the tag component.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'contentContainer',
    prop: 'contentContainer',
    description: 'Wrapper for the tag content and icons.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'icons',
    prop: 'icons',
    description: 'Styles for left and right icons.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'content',
    prop: 'content',
    description: 'Text content of the tag.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'closeButton',
    prop: 'closeButton',
    description: 'Styles for the close button container.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'closeIcon',
    prop: 'closeIcon',
    description: 'Icon for the close button.',
    values: 'string[]',
    default: ''
  }
]

const tagEmits: TableItem[] = [
  {
    key: 'clickEmit',
    event: 'click',
    type: '() => void',
    values: '',
    description: 'Emitted when the Tag is clicked.'
  },
  {
    key: 'closeEmit',
    event: 'close',
    type: '() => void',
    values: '',
    description: 'Emitted when the close button on the Tag is clicked.'
  }
]

const isShown = ref(true)

const closeTag = () => isShown.value = false

const onClick = () => useNotification({ text: 'Clickled' })

watch(isShown, () => { if (!isShown.value) setTimeout(() => isShown.value = true, 1000) })

const generateSnippet = snippetGeneratorFactory('vk-tag')

const iconSnippet = `<template>
  <vk-tag
    text="Without Icons"
  />

  <vk-tag
    icon-left="tag"
    text="Icon Left"
  />

  <vk-tag
    icon-right="tag"
    text="Icon Right"
  />

  <vk-tag
    text="Icons"
    icon-left="tag"
    icon-right="tag"
  />
</template>
`

const extraProps = 'text="Content"'
</script>

<template>
  <doc-section
    title="Tag"
    description="Provides a visually distinctive way to represent labels or categories in a user interface. Tags are useful for highlighting or classifying items such as articles, products, or topics."
  >
    <template #playground-view>
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
          :icon-left="iconsForm.left ? 'tag' : ''"
          :icon-right="iconsForm.right ? 'tag' : ''"
          :closable="form.closable"
          :is-pressable="form.isPressable"
          :disabled="form.disabled"
          @click="onClick"
          @close="closeTag"
        />
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
        v-model="form.text"
        label="Text"
        size="sm"
      />
      <vk-checkbox
        v-model="iconsForm.left"
        label="Icon Left"
      />
      <vk-checkbox
        v-model="iconsForm.right"
        label="Icon Right"
      />
      <vk-checkbox
        v-model="form.closable"
        label="Closable"
      />
      <vk-checkbox
        v-model="form.isPressable"
        label="Pressable"
      />
      <vk-checkbox
        v-model="form.disabled"
        label="Disabled"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-7"
      >
        <vk-tag
          v-for="color in colorOptions.withSurface"
          :key="color.value"
          :color="color.value"
          :text="color.label"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('color', {values: colorOptions.withSurface.map(o => o.value), extraProps})" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <vk-tag
          v-for="variant in variantOptions.withGradient"
          :key="variant.value"
          :variant="variant.value"
          :text="variant.label"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('variant', {values: variantOptions.withGradient.map(o => o.value), extraProps})" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        classes="grid-cols-2 md:grid-cols-3"
      >
        <vk-tag
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          :shape="shape.value"
          :text="shape.label"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('shape', {values: shapeOptions.general.map(o => o.value), extraProps})" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <vk-tag
          v-for="size in sizeOptions.general"
          :key="size.value"
          :size="size.value"
          :text="size.label"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('size', {values: sizeOptions.general.map(o => o.value), extraProps})" />
        </template>
      </example-section>

      <example-section
        title="Icons"
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
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

        <template #code>
          <code-block :code="iconSnippet" />
        </template>
      </example-section>

      <example-section title="Closable">
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

        <template #code>
          <code-block :code="generateSnippet<boolean>('closable', {values: [true], extraProps})" />
        </template>
      </example-section>

      <example-section title="Pressable">
        <vk-tag
          text="Pressable"
          is-pressable
          @click="onClick"
        />

        <template #code>
          <code-block :code="generateSnippet<boolean>('pressable', {values: [true], extraProps})" />
        </template>
      </example-section>

      <example-section title="Disabled">
        <vk-tag
          text="Disabled"
          disabled
        />

        <template #code>
          <code-block :code="generateSnippet<boolean>('disabled', {values: [true], extraProps})" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Tag Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="tagProps"
      />

      <h3>Style Slots Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="styleSlotsInterface"
      />

      <h3>Tag Emits</h3>
      <vk-table
        :headers="emitHeaders"
        :data="tagEmits"
      />
    </template>
  </doc-section>
</template>
