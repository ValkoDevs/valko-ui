<script setup lang="ts">
import type { AvatarProps, TableItem } from '#valkoui'

const form = ref<AvatarProps>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  name: 'Brand Copper',
  flat: false,
  src: ''
})

const extraForm = ref({
  avatar: false,
  user: ''
})

interface Avatar {
  name: string;
  src: string;
}

const urls: Avatar[] = [
  {
    name: 'Brandon Cooper',
    src: 'https://randomuser.me/api/portraits/men/33.jpg'
  },
  {
    name: 'Jones Guillaume',
    src: 'https://randomuser.me/api/portraits/men/25.jpg'
  },
  {
    name: 'Aleksej Marius',
    src: 'https://randomuser.me/api/portraits/men/56.jpg'
  },
  {
    name: 'Edgardo Peretz',
    src: 'https://randomuser.me/api/portraits/men/55.jpg'
  },
  {
    name: 'Atlas Costantino',
    src: 'https://randomuser.me/api/portraits/men/90.jpg'
  },
  {
    name: 'Gisela Hana',
    src: 'https://randomuser.me/api/portraits/women/50.jpg'
  },
  {
    name: 'Fernanda Filippa',
    src: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Paula Edina',
    src: 'https://randomuser.me/api/portraits/women/9.jpg'
  },
  {
    name: 'Caroline Parvin',
    src: 'https://randomuser.me/api/portraits/women/93.jpg'
  },
  {
    name: 'Liwen Fariba',
    src: 'https://randomuser.me/api/portraits/women/66.jpg'
  },
  {
    name: 'Matylda Gerda',
    src: 'https://randomuser.me/api/portraits/women/30.jpg'
  }
]

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

const randomAvatar = (urls: Avatar[]): Avatar => {
  const randomIndex = Math.floor(Math.random() * urls.length)
  return urls[randomIndex]
}

const randomUser = randomAvatar(urls)
form.value.name = randomUser.name
form.value.src = randomUser.src

const avatarSrc = computed(() => { return extraForm.value.avatar ? '###' : form.value.src })
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
      <example-section
        title="Colors"
        gap
      >
        <div
          v-for="color in colorOptions"
          :key="color.value"
          class="flex flex-col items-center"
        >
          <span class="mb-1">{{ color.label }}</span>
          <vk-avatar
            :src="'example.url'"
            :color="color.value"
          />
        </div>
      </example-section>

      <example-section
        title="Colors with Initials"
        gap
      >
        <div
          v-for="color in colorOptions"
          :key="color.value"
          class="flex flex-col items-center"
        >
          <span class="mb-1">{{ color.label }}</span>
          <vk-avatar
            :src="'example.url'"
            :name="form.name"
            :color="color.value"
          />
        </div>
      </example-section>

      <example-section
        title="Variants"
        gap
      >
        <div
          v-for="variant in variantOptions.withGradient"
          :key="variant.value"
          class="flex flex-col items-center"
        >
          <span class="mb-1">{{ variant.label }}</span>
          <vk-avatar
            :src="'example.url'"
            :variant="variant.value"
          />
        </div>
      </example-section>

      <example-section
        title="Variants with Avatars"
        gap
      >
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

      <example-section
        title="Shapes"
        gap
      >
        <div
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          class="flex flex-col items-center"
        >
          <span class="mb-1">{{ shape.label }}</span>
          <vk-avatar
            :src="'example.url'"
            :shape="shape.value"
          />
        </div>
      </example-section>

      <example-section
        title="Sizes"
        gap
      >
        <div
          v-for="size in sizeOptions.general"
          :key="size.value"
          class="flex flex-col items-center"
        >
          <span class="mb-1">{{ size.label }}</span>
          <vk-avatar
            :src="'example.url'"
            :size="size.value"
          />
        </div>
      </example-section>

      <example-section
        title="Flat"
      >
        <vk-avatar
          :src="'example.url'"
          flat
        />
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Avatar Props"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="avatarProps"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
