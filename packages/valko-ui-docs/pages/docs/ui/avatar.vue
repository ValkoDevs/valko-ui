<script setup lang="ts">
import type { AvatarProps, TableItem } from '#valkoui'

const form = reactive<AvatarProps>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  name: 'Louise Barnett',
  flat: false,
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
    values: 'primary, neutral, error, warning, info, success',
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
    key: 'flatProp',
    prop: 'flat',
    required: false,
    description: 'Displays a shadow for the Avatar.',
    values: 'true, false',
    default: 'false'
  }
]

const avatarSrc = computed(() => { return extraForm.avatar ? '' : form.src })
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
        :flat="form.flat"
      />
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
      <vk-checkbox
        v-model="extraForm.avatar"
        label="Hide Avatar"
      />
      <vk-checkbox
        v-model="form.flat"
        label="Flat"
      />
    </template>

    <template #examples>
      <example-section title="Colors">
        <div
          v-for="color in colorOptions"
          :key="color.value"
          class="flex flex-col items-center"
        >
          <span class="mb-1">{{ color.label }}</span>
          <vk-avatar
            :color="color.value"
          />
        </div>
      </example-section>

      <example-section title="Colors with Initials">
        <div
          v-for="color in colorOptions"
          :key="color.value"
          class="flex flex-col items-center"
        >
          <span class="mb-1">{{ color.label }}</span>
          <vk-avatar
            :name="form.name"
            :color="color.value"
          />
        </div>
      </example-section>

      <example-section title="Variants">
        <div
          v-for="variant in variantOptions.withGradient"
          :key="variant.value"
          class="flex flex-col items-center"
        >
          <span class="mb-1">{{ variant.label }}</span>
          <vk-avatar
            :variant="variant.value"
          />
        </div>
      </example-section>

      <example-section title="Variants with Avatars">
        <div
          v-for="variant in variantOptions.withGradient"
          :key="variant.value"
          class="flex flex-col items-center"
        >
          <span class="mb-1">{{ variant.label }}</span>
          <vk-avatar
            :src="avatarSrc"
            :variant="variant.value"
          />
        </div>
      </example-section>

      <example-section title="Shapes">
        <div
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          class="flex flex-col items-center"
        >
          <span class="mb-1">{{ shape.label }}</span>
          <vk-avatar
            :shape="shape.value"
          />
        </div>
      </example-section>

      <example-section title="Sizes">
        <div
          v-for="size in sizeOptions.general"
          :key="size.value"
          class="flex flex-col items-center"
        >
          <span class="mb-1">{{ size.label }}</span>
          <vk-avatar
            :size="size.value"
          />
        </div>
      </example-section>

      <example-section title="Flat">
        <vk-avatar
          flat
        />
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section title="Avatar Props">
          <vk-table
            :headers="propHeaders"
            :data="avatarProps"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
