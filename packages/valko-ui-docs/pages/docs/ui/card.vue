<script setup lang="ts">
import type { TableItem, CardProps, Layout, SelectOption } from '#valkoui'
import { useNotification } from '#valkoui'

const form = ref<CardProps>({
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  layout: 'vertical',
  isPressable: false,
  elevated: false
})

const cardComponents = reactive({
  body: true,
  footer: true,
  header: true,
  image: true
})

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
    key: 'elevatedProp',
    prop: 'elevated',
    required: false,
    description: 'Applies a shadow and lowers the background tone to emphasize interactive content inside the Card. Useful when the Card contains inputs or other elevated elements.',
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
    type: '(event: MouseEvent) => void',
    values: 'MouseEvent',
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

const generateSnippet = snippetGeneratorFactory('vk-card')

const customSlot = `<vk-card-image :src="imgSrc" />
    <vk-card-header>
      Title
    </vk-card-header>

    <vk-card-body>
      <h3 class="font-semibold">
        Subtitle
      </h3>
      <p>Lorem</p>
    </vk-card-body>`
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
      <vk-card
        :is-pressable="form.isPressable"
        :variant="form.variant"
        :shape="form.shape"
        :size="form.size"
        :layout="form.layout"
        :elevated="form.elevated"
        @click="onClick"
      >
        <vk-card-header
          v-if="cardComponents.header"
        >
          Best nature pics 2024!
        </vk-card-header>
        <vk-card-image
          v-if="cardComponents.image"
          src="/assets/flower-m.jpg"
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
            color="surface"
            size="sm"
            :variant="form.variant"
            @click="randomImage"
          >
            Random
          </vk-button>
          <vk-button
            color="primary"
            size="sm"
            :variant="form.variant"
            @click="nextImage"
          >
            See next
          </vk-button>
        </vk-card-footer>
      </vk-card>
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
        v-model="form.elevated"
        label="Elevated"
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
        classes="sm:grid-cols-2 xl:grid-cols-3"
      >
        <vk-card
          v-for="variant in variantOptions.general"
          :key="variant.value"
          :variant="variant.value"
        >
          <vk-card-image
            src="/assets/flower-m.jpg"
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

        <template #code>
          <code-block :code="generateSnippet<string>('variant', { values: variantOptions.general.map(o => o.value), customSlot })" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        classes="sm:grid-cols-2 xl:grid-cols-3"
      >
        <vk-card
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          :shape="shape.value"
        >
          <vk-card-image
            src="/assets/flower-m.jpg"
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

        <template #code>
          <code-block :code="generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value), customSlot })" />
        </template>
      </example-section>

      <example-section
        title="Layout"
        classes="md:grid-cols-1 lg:grid-cols-2"
      >
        <vk-card
          v-for="layout in layoutOptions"
          :key="layout.value"
          :layout="layout.value"
          :class="layout.value === 'horizontal' ? 'col-span-full' : 'col-span-1'"
        >
          <vk-card-image
            src="/assets/flower-m.jpg"
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

        <template #code>
          <code-block :code="generateSnippet<string>('layout', { values: layoutOptions.map(o => o.value), customSlot })" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        classes="grid-cols-1 lg:grid-cols-2"
      >
        <vk-card
          v-for="size in sizeOptions.withFull"
          :key="size.value"
          :size="size.value"
          :layout="size.value === 'full' ? 'horizontal' : 'vertical'"
          :class="size.value === 'full' ? 'col-span-full' : 'col-span-1'"
        >
          <vk-card-image
            src="/assets/flower-m.jpg"
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

        <template #code>
          <code-block :code="generateSnippet<string>('size', { values: sizeOptions.withFull.map(o => o.value), customSlot })" />
        </template>
      </example-section>

      <example-section title="Pressable">
        <vk-card
          is-pressable
          @click="onClick"
        >
          <vk-card-image
            src="/assets/flower-m.jpg"
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

        <template #code>
          <code-block :code="generateSnippet<boolean>('is-pressable', { values: [true], customSlot })" />
        </template>
      </example-section>

      <example-section title="Elevated">
        <vk-card elevated>
          <vk-card-image
            src="/assets/flower-m.jpg"
            class="text-white"
          />
          <vk-card-header>
            Elevated
          </vk-card-header>
          <vk-card-body>
            <h3 class="font-semibold">
              Best nature pics 2024!
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit eos laboriosam, accusamus illo rerum earum cupiditate fugiat explicabo nulla nisi aspernatur quaerat molestias esse pariatur nobis, eaque harum neque dolor!</p>
          </vk-card-body>
        </vk-card>

        <template #code>
          <code-block :code="generateSnippet<boolean>('elevated', { values: [true], customSlot })" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Card Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="cardProps"
      />

      <h3>Card Emits</h3>
      <vk-table
        :headers="emitHeaders"
        :data="cardEmits"
      />

      <h3>Card Slots</h3>
      <vk-table
        :headers="slotHeaders"
        :data="cardSlots"
      />

      <h3>Card Image Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="cardImageProps"
      />
    </template>
  </doc-section>
</template>
