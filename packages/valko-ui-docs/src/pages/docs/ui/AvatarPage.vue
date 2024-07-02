<script setup lang="ts">
import { ref, computed } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import colorOptions from '@/data/colorOptions'
import variantWithGradient from '@/data/variantWithGradient'
import shapeOptions from '@/data/shapeOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'

const form = ref({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  name: 'Brand Copper',
  avatar: false,
  flat: false,
  user: '',
  src: ''
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

const avatarProps = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Avatar.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'primary'
  },
  {
    prop: 'variant',
    required: false,
    description: 'The variant of the Avatar.',
    values: 'filled, outlined, ghost, gradient',
    default: 'filled'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Avatar.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Avatar.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'src',
    required: true,
    description: 'The src of the image for the Avatar.',
    values: 'string',
    default: ''
  },
  {
    prop: 'name',
    required: false,
    description: 'The name of the user for the Avatar..',
    values: 'string',
    default: ''
  },
  {
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

const avatarSrc = computed(() => { return form.value.avatar ? '###' : form.value.src })
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
      <vk-checkbox
        label="Hide Avatar"
        v-model="form.avatar"
      />
      <vk-checkbox
        label="Flat"
        v-model="form.flat"
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
          v-for="variant in variantWithGradient"
          :key="variant.value"
          class="flex flex-col items-center"
        >
          <span class="mb-1">{{ variant.label }}</span>
          <vk-avatar
            :variant="variant.value"
          />
        </div>
      </example-section>

      <example-section
        title="Variants with Avatars"
        gap
      >
        <div
          v-for="variant in variantWithGradient"
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
          v-for="shape in shapeOptions"
          :key="shape.value"
          class="flex flex-col items-center"
        >
          <span class="mb-1">{{ shape.label }}</span>
          <vk-avatar
            :shape="shape.value"
          />
        </div>
      </example-section>

      <example-section
        title="Sizes"
        gap
      >
        <div
          v-for="size in sizeOptions"
          :key="size.value"
          class="flex flex-col items-center"
        >
          <span class="mb-1">{{ size.label }}</span>
          <vk-avatar
            :size="size.value"
          />
        </div>
      </example-section>

      <example-section
        title="Flat"
      >
        <vk-avatar
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
          <vk-data-table
            :headers="propHeaders"
            :data="avatarProps"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
