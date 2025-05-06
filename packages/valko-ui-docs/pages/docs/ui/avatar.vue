<script setup lang="ts">
import type { AvatarProps, TableItem } from '#valkoui'

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
    values: 'primary, secondary, negative, warning, accent, positive',
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
  }
]

const avatarSrc = computed(() => { return extraForm.avatar ? '' : form.src })

const generateSnippet = snippetGeneratorFactory('vk-avatar')

const extraProps = {
  name: 'name="Jane Doe"',
  src: ':src="avatarSrc"'
}

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
        :options="colorOptions.general"
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
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
      >
        <div
          v-for="color in colorOptions.general"
          :key="color.value"
          class="flex flex-col gap-2 justify-center items-center md:items-start md:justify-start"
        >
          <span>{{ color.label }}</span>
          <vk-avatar
            :color="color.value"
          />
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('color', { values: colorOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Colors with Initials"
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
      >
        <div
          v-for="color in colorOptions.general"
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
          <code-block :code="generateSnippet<string>('color', { values: colorOptions.general.map(o => o.value), extraProps: extraProps.name })" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
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
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
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
        classes="grid-cols-2 md:grid-cols-3"
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
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
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
    </template>
  </doc-section>
</template>
