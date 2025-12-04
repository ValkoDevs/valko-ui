<script setup lang="ts">
import type { AvatarProps, TableItem } from '#valkoui'

definePageMeta({
  alias: ['/docs/avatar']
})

const form = reactive<AvatarProps>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  name: 'Louise Barnett',
  elevated: false,
  src: '/assets/avatar.jpg'
})

const extraForm = reactive({
  avatar: false,
  user: ''
})

const avatarProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Avatar.',
    values: 'primary, secondary, negative, warning, accent, positive, surface',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Avatar.',
    values: 'filled, outlined, ghost, gradient',
    default: 'filled'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Avatar.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Avatar.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'srcProp',
    prop: 'src',
    required: true,
    description: 'The src of the image for the Avatar.',
    values: 'string',
    default: ''
  },
  {
    key: 'nameProp',
    prop: 'name',
    required: false,
    description: 'The name of the user for the Avatar..',
    values: 'string',
    default: ''
  },
  {
    key: 'elevatedProp',
    prop: 'elevated',
    required: false,
    description: 'Applies a shadow to visually elevate the Avatar.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'ariaLabelProp',
    prop: 'aria-label',
    required: false,
    description: 'Accessible text label read by assistive technologies when no visible label is provided.',
    values: 'string',
    default: ''
  },
  {
    key: 'styleSlotsProps',
    prop: 'styleSlots',
    required: false,
    description: 'Custom styles for different parts of the Avatar component.',
    values: 'AvatarSlots',
    default: ''
  }
]

const styleSlotsInterface: TableItem[] = [
  {
    key: 'container',
    prop: 'container',
    required: false,
    description: 'Root container for the avatar. Controls the overall layout and background.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'imageTag',
    prop: 'imageTag',
    required: false,
    description: 'Styles for the avatar image element.',
    values: 'string[]',
    default: ''
  }
]

const avatarSlots: TableItem[] = [
  {
    key: 'defaultSlot',
    name: 'default',
    description: 'Default slot for the Avatar, this would replace any existing content.',
    example: '<vk-avatar>\n  <template #default>\n Your custom content goes here!\n  </template>\n</vk-avatar>'
  }
]

const avatarSrc = computed(() => { return extraForm.avatar ? '' : form.src })

const generateSnippet = snippetGeneratorFactory('vk-avatar')

const extraProps = {
  name: 'name="Jane Doe"',
  src: ':src="avatarSrc"'
}

const styles = generateStyles({
  colors: [
    'grid-cols-2',
    'md:grid-cols-3',
    'lg:grid-cols-7'
  ],
  variants: [
    'grid-cols-2',
    'md:grid-cols-3',
    'lg:grid-cols-4'
  ],
  shapes: [
    'grid-cols-2',
    'md:grid-cols-3'
  ],
  sizes: [
    'grid-cols-2',
    'md:grid-cols-3',
    'lg:grid-cols-4'
  ]
})
</script>

<template>
  <doc-section
    title="Avatar"
    description="Graphic representation of a user or entity in the form of a small image. Avatars are often used to personalize user profiles or identify users within a system."
  >
    <template #playground-view>
      <vk-avatar
        :size="form.size"
        :shape="form.shape"
        :color="form.color"
        :variant="form.variant"
        :src="avatarSrc"
        :name="form.name"
        :elevated="form.elevated"
      />
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
      <vk-checkbox
        v-model="extraForm.avatar"
        label="Hide Avatar"
      />
      <vk-checkbox
        v-model="form.elevated"
        label="Elevated"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        :style-slots="styles.colors"
      >
        <div
          v-for="color in colorOptions.withSurface"
          :key="color.value"
          class="flex flex-col gap-2 justify-center items-center md:items-start md:justify-start"
        >
          <span>{{ color.label }}</span>
          <vk-avatar
            :color="color.value"
          />
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('color', { values: colorOptions.withSurface.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Colors with Initials"
        :style-slots="styles.colors"
      >
        <div
          v-for="color in colorOptions.withSurface"
          :key="color.value"
          class="flex flex-col gap-2 justify-center items-center md:items-start md:justify-start"
        >
          <span>{{ color.label }}</span>
          <vk-avatar
            :name="form.name"
            :color="color.value"
          />
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('color', { values: colorOptions.withSurface.map(o => o.value), extraProps: extraProps.name })" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        :style-slots="styles.variants"
      >
        <div
          v-for="variant in variantOptions.withGradient"
          :key="variant.value"
          class="flex flex-col gap-2 justify-center items-center md:items-start md:justify-start"
        >
          <span>{{ variant.label }}</span>
          <vk-avatar
            :variant="variant.value"
          />
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('variant', { values: variantOptions.withGradient.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Variants with Avatars"
        :style-slots="styles.variants"
      >
        <div
          v-for="variant in variantOptions.withGradient"
          :key="variant.value"
          class="flex flex-col gap-2 justify-center items-center md:items-start md:justify-start"
        >
          <span>{{ variant.label }}</span>
          <vk-avatar
            :src="avatarSrc"
            :variant="variant.value"
          />
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('variant', { values: variantOptions.withGradient.map(o => o.value), extraProps: extraProps.src })" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        :style-slots="styles.shapes"
      >
        <div
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          class="flex flex-col gap-2 justify-center items-center md:items-start md:justify-start"
        >
          <span>{{ shape.label }}</span>
          <vk-avatar
            :shape="shape.value"
          />
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        :style-slots="styles.sizes"
      >
        <div
          v-for="size in sizeOptions.general"
          :key="size.value"
          class="flex flex-col gap-2 justify-center items-center md:items-start md:justify-start"
        >
          <span>{{ size.label }}</span>
          <vk-avatar
            :size="size.value"
          />
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section title="Elevated">
        <vk-avatar
          elevated
        />

        <template #code>
          <code-block :code="generateSnippet<boolean>('elevated', { values: [true] })" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Avatar Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="avatarProps"
      />

      <h3>Avatar Slots</h3>
      <vk-table
        :headers="slotHeaders"
        :data="avatarSlots"
      />

      <h3>Style Slots Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="styleSlotsInterface"
      />
    </template>
  </doc-section>
</template>
