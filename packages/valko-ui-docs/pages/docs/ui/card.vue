<script setup lang="ts">
import type { TableItem, CardProps, Layout, SelectOption } from '#valkoui'
import { useNotification } from '#valkoui'

const form = ref<CardProps>({
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  layout: 'vertical',
  isPressable: false,
  flat: false
})

const cardComponents = {
  body: true,
  footer: true,
  header: true,
  image: true
}

const layoutOptions: SelectOption<Layout>[] = [
  { value: 'vertical', label: 'Vertical' },
  { value: 'cover', label: 'Cover' },
  { value: 'horizontal', label: 'Horizontal' }
]

const cardProps: TableItem[] = [
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Card.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Card.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Card.',
    values: 'xs, sm, md, lg, full',
    default: 'md'
  },
  {
    key: 'layoutProp',
    prop: 'layout',
    required: false,
    description: 'The layout of the elements inside the Card.',
    values: 'vertical, horizontal, cover',
    default: 'vertical'
  },
  {
    key: 'isPressableProp',
    prop: 'isPressable',
    required: false,
    description: 'Wether the Card allows to be clicked.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'flatProp',
    prop: 'flat',
    required: false,
    description: 'Displays a shadow for the Card.',
    values: 'true, false',
    default: 'false'
  }
]

const cardImageProps: TableItem[] = [
  {
    key: 'srcImageProp',
    prop: 'src',
    required: true,
    description: 'The src for the image.',
    values: 'string',
    default: ''
  },
  {
    key: 'altImageProp',
    prop: 'alt',
    required: false,
    description: 'The alt for the image.',
    values: 'string',
    default: ''
  },
  {
    key: 'widthImageProp',
    prop: 'width',
    required: false,
    description: 'The widht for the image.',
    values: 'string',
    default: '100%'
  },
  {
    key: 'heightImageProp',
    prop: 'height',
    required: false,
    description: 'The height for the image.',
    values: 'string',
    default: 'auto'
  }
]

const cardEmits: TableItem[] = [
  {
    key: 'clickEmit',
    event: 'click',
    type: '() => void',
    values: '',
    description: 'Emitted when the Card is clicked by the user.'
  }
]

const cardSlots: TableItem[] = [
  {
    key: 'defaultSlot',
    name: 'default',
    description: 'Slot for the main content of the Card.',
    example: '<template #default>\n<vk-card-body>This is the main content of the Card.</vk-card-body>\n</template>'
  }
]

const onClick = () => useNotification({ text: 'Pressed' })
const nextImage = () => useNotification({ text: 'Loading next image...' })
const randomImage = () => useNotification({ text: 'Loading random image...' })
</script>

<template>
  <doc-section
    title="Card"
    description="
      Card is a container for text, photos, and actions in the context of a single subject. ValkoUI export 5 card-related componets: Card: The main component to display a card.
      CardHeader: Commonly used for the title of a card.
      CardBody: The content of the card.
      CardFooter: Commonly used for actions.
      CardImage: An special component who allows to display a background image in the card."
  >
    <template #playground-view>
      <div class="w-full flex justify-center p-4">
        <vk-card
          :is-pressable="form.isPressable"
          :variant="form.variant"
          :shape="form.shape"
          :size="form.size"
          :layout="form.layout"
          :flat="form.flat"
          @click="onClick"
        >
          <vk-card-header
            v-if="cardComponents.header"
          >
            Best nature pics 2024!
          </vk-card-header>
          <vk-card-image
            v-if="cardComponents.image"
            src="https://picsum.photos/id/152/1080"
            class="text-white w-1/2"
          />

          <vk-card-body
            v-if="cardComponents.body"
          >
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit eos laboriosam, accusamus illo rerum earum cupiditate fugiat explicabo nulla nisi aspernatur quaerat molestias esse pariatur nobis, eaque harum neque dolor!</p>
          </vk-card-body>
          <vk-card-footer
            v-if="cardComponents.footer"
            class="flex justify-between"
          >
            <vk-button
              color="neutral"
              size="sm"
              :variant="form.variant"
              flat
              @click="randomImage"
            >
              Random
            </vk-button>
            <vk-button
              color="primary"
              size="sm"
              :variant="form.variant"
              flat
              @click="nextImage"
            >
              See next
            </vk-button>
          </vk-card-footer>
        </vk-card>
      </div>
    </template>
    <template #playground-options>
      <vk-select
        v-model="form.variant"
        label="Variant"
        size="sm"
        :options="variantOptions.general"
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
        :options="sizeOptions.withFull"
      />
      <vk-select
        v-model="form.layout"
        label="Layout"
        size="sm"
        :options="layoutOptions"
      />
      <vk-checkbox
        v-model="form.isPressable"
        label="Pressable"
      />
      <vk-checkbox
        v-model="form.flat"
        label="Flat"
      />
      <vk-checkbox
        v-model="cardComponents.header"
        label="Card Header"
      />
      <vk-checkbox
        v-model="cardComponents.image"
        label="Card Image"
      />
      <vk-checkbox
        v-model="cardComponents.body"
        label="Card Body"
      />
      <vk-checkbox
        v-model="cardComponents.footer"
        label="Card Footer"
      />
    </template>

    <template #examples>
      <example-section
        title="Variants"
        justify="start"
        gap
      >
        <vk-card
          v-for="variant in variantOptions.general"
          :key="variant.value"
          :variant="variant.value"
        >
          <vk-card-image
            src="https://picsum.photos/id/152/1080"
            class="text-white"
            height="15rem"
          />
          <vk-card-header>
            {{ variant.label }}
          </vk-card-header>
          <vk-card-body>
            <h3 class="font-semibold">
              Best nature pics 2024!
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit eos laboriosam, accusamus illo rerum earum cupiditate fugiat explicabo nulla nisi aspernatur quaerat molestias esse pariatur nobis, eaque harum neque dolor!</p>
          </vk-card-body>
        </vk-card>
      </example-section>

      <example-section
        title="Shapes"
        justify="start"
        gap
      >
        <vk-card
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          :shape="shape.value"
        >
          <vk-card-image
            src="https://picsum.photos/id/152/1080"
            class="text-white"
          />
          <vk-card-header>
            {{ shape.label }}
          </vk-card-header>
          <vk-card-body>
            <h3 class="font-semibold">
              Best nature pics 2024!
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit eos laboriosam, accusamus illo rerum earum cupiditate fugiat explicabo nulla nisi aspernatur quaerat molestias esse pariatur nobis, eaque harum neque dolor!</p>
          </vk-card-body>
        </vk-card>
      </example-section>

      <example-section
        title="Layout"
        justify="start"
        align="stretch"
        gap
        wrap
      >
        <vk-card
          v-for="layout in layoutOptions"
          :key="layout.value"
          :layout="layout.value"
        >
          <vk-card-image
            src="https://picsum.photos/id/152/1080"
            class="text-white"
          />
          <vk-card-header>
            {{ layout.label }}
          </vk-card-header>
          <vk-card-body>
            <h3 class="font-semibold">
              Best nature pics 2024!
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit eos laboriosam, accusamus illo rerum earum cupiditate fugiat explicabo nulla nisi aspernatur quaerat molestias esse pariatur nobis, eaque harum neque dolor!</p>
          </vk-card-body>
        </vk-card>
      </example-section>

      <example-section
        title="Sizes"
        justify="start"
        align="stretch"
        wrap
        gap
      >
        <vk-card
          v-for="size in sizeOptions.withFull"
          :key="size.value"
          :size="size.value"
          :layout="size.value === 'full' ? 'horizontal' : 'vertical'"
        >
          <vk-card-image
            src="https://picsum.photos/id/152/1080"
            class="text-white"
          />
          <vk-card-header>
            {{ size.label }}
          </vk-card-header>
          <vk-card-body>
            <h3 class="font-semibold">
              Best nature pics 2024!
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit eos laboriosam, accusamus illo rerum earum cupiditate fugiat explicabo nulla nisi aspernatur quaerat molestias esse pariatur nobis, eaque harum neque dolor!</p>
          </vk-card-body>
        </vk-card>
      </example-section>

      <example-section
        title="Pressable"
        justify="start"
        gap
      >
        <vk-card
          is-pressable
          @click="onClick"
        >
          <vk-card-image
            src="https://picsum.photos/id/152/1080"
            class="text-white"
          />
          <vk-card-header>
            Pressable
          </vk-card-header>
          <vk-card-body>
            <h3 class="font-semibold">
              Best nature pics 2024!
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit eos laboriosam, accusamus illo rerum earum cupiditate fugiat explicabo nulla nisi aspernatur quaerat molestias esse pariatur nobis, eaque harum neque dolor!</p>
          </vk-card-body>
        </vk-card>
      </example-section>

      <example-section
        title="Flat"
        justify="start"
        gap
      >
        <vk-card
          flat
        >
          <vk-card-image
            src="https://picsum.photos/id/152/1080"
            class="text-white"
          />
          <vk-card-header>
            Flat
          </vk-card-header>
          <vk-card-body>
            <h3 class="font-semibold">
              Best nature pics 2024!
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit eos laboriosam, accusamus illo rerum earum cupiditate fugiat explicabo nulla nisi aspernatur quaerat molestias esse pariatur nobis, eaque harum neque dolor!</p>
          </vk-card-body>
        </vk-card>
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Card Props"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="cardProps"
          />
        </example-section>

        <example-section
          title="Card Emits"
          gap
        >
          <vk-table
            :headers="emitHeaders"
            :data="cardEmits"
          />
        </example-section>

        <example-section
          title="Card Slots"
          gap
        >
          <vk-table
            :headers="slotHeaders"
            :data="cardSlots"
          />
        </example-section>

        <example-section
          title="Card Image Props"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="cardImageProps"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
