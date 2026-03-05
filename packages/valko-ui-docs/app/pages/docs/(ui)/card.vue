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
    default: 'filled',
    apiType: ApiTypeCategory.CUSTOM_STRING
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Card.',
    values: 'rounded, square, soft',
    default: 'soft',
    apiType: ApiTypeCategory.CUSTOM_STRING
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Card.',
    values: 'xs, sm, md, lg',
    default: 'md',
    apiType: ApiTypeCategory.CUSTOM_STRING
  },
  {
    key: 'layoutProp',
    prop: 'layout',
    required: false,
    description: 'The layout of the elements inside the Card.',
    values: 'vertical, horizontal, cover',
    default: 'vertical',
    apiType: ApiTypeCategory.CUSTOM_STRING
  },
  {
    key: 'isPressableProp',
    prop: 'isPressable',
    required: false,
    description: 'Wether the Card allows to be clicked.',
    values: 'boolean',
    default: 'false',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'elevatedProp',
    prop: 'elevated',
    required: false,
    description: 'Applies a shadow and lowers the background tone to emphasize interactive content inside the Card. Useful when the Card contains inputs or other elevated elements.',
    values: 'boolean',
    default: 'false',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'styleSlotsProp',
    prop: 'styleSlots',
    required: false,
    description: 'Root container.',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  }
]

const cardImageProps: TableItem[] = [
  {
    key: 'srcImageProp',
    prop: 'src',
    required: true,
    description: 'The src for the image.',
    values: 'string',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'altImageProp',
    prop: 'alt',
    required: false,
    description: 'The alt for the image.',
    values: 'string',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'widthImageProp',
    prop: 'width',
    required: false,
    description: 'The widht for the image.',
    values: 'string',
    default: '100%',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'heightImageProp',
    prop: 'height',
    required: false,
    description: 'The height for the image.',
    values: 'string',
    default: 'auto',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'styleSlotsProp',
    prop: 'styleSlots',
    required: false,
    description: 'Customizes style slots for CardImage.',
    values: 'CardImageSlots',
    default: '',
    apiType: ApiTypeCategory.CUSTOM_TYPE
  }
]

const cardImageStyleSlotsInterface: TableItem[] = [
  {
    key: 'container',
    prop: 'container',
    required: false,
    description: 'Root container.',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'imageTag',
    prop: 'imageTag',
    required: false,
    description: 'Class shared with image slot and the image element itself.',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  },
  {
    key: 'gradient',
    prop: 'gradient',
    required: false,
    description: 'Styles for the gradient.',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  }
]

const cardHeaderProps: TableItem[] = [
  {
    key: 'styleSlots',
    prop: 'styleSlots',
    required: false,
    description: 'Root container.',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  }
]

const cardBodyProps: TableItem[] = [
  {
    key: 'styleSlots',
    prop: 'styleSlots',
    required: false,
    description: 'Root container.',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  }
]

const cardFooterProps: TableItem[] = [
  {
    key: 'styleSlots',
    prop: 'styleSlots',
    required: false,
    description: 'Root container.',
    values: 'string[]',
    default: '',
    apiType: ApiTypeCategory.PRIMITIVE
  }
]

const cardEmits: TableItem[] = [
  {
    key: 'clickEmit',
    event: 'click',
    type: '(event: MouseEvent) => void',
    values: 'MouseEvent',
    description: 'Emitted when the Card is clicked by the user.',
    apiType: ApiTypeCategory.EVENT
  }
]

const cardSlots: TableItem[] = [
  {
    key: 'defaultSlot',
    name: 'default',
    description: 'Slot for the main content of the Card.',
    example: '<template #default>\n <vk-card-body>\n  This is the main content of the Card.\n </vk-card-body>\n</template>'
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
    </vk-card-body>
`

const styles = {
  default: {
    slotContainer: [
      'sm:grid-cols-2',
      'xl:grid-cols-3'
    ]
  },
  layout: {
    slotContainer: [
      'md:grid-cols-1',
      'lg:grid-cols-2'
    ]
  },
  sizes: {
    slotContainer: [
      'grid-cols-1',
      'lg:grid-cols-2'
    ]
  }
}
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
      <div :class="`flex justify-center items-center ${form.layout === 'horizontal' ? 'max-h-25' : 'max-w-80'}`">
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
        :options="sizeOptions.general"
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
        :style-slots="styles.default"
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
        :style-slots="styles.default"
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
        :style-slots="styles.layout"
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
        :style-slots="styles.sizes"
      >
        <vk-card
          v-for="size in sizeOptions.general"
          :key="size.value"
          :size="size.value"
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
          <code-block :code="generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value), customSlot })" />
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
      <api-table
        name="Card"
        :tables="[
          { title: 'Props', data: cardProps, headers: 'props' },
          { title: 'Emits', data: cardEmits, headers: 'emits' },
          { title: 'Slots', data: cardSlots, headers: 'slots' },
          { title: 'Image Props', data: cardImageProps, headers: 'props' },
          { title: 'Card Image Style Slots', data: cardImageStyleSlotsInterface, headers: 'interface' },
          { title: 'Header Props', data: cardHeaderProps, headers: 'props' },
          { title: 'Body Props', data: cardBodyProps, headers: 'props' },
          { title: 'Footer Props', data: cardFooterProps, headers: 'props' }
        ]"
      />
    </template>
  </doc-section>
</template>
