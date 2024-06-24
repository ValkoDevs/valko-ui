<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import variantOptions from '@/data/variantOptions'
import shapeOptions from '@/data/shapeOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import emitHeaders from '@/data/emitHeaders'
import slotHeaders from '@/data/slotHeaders'
import { useNotification } from '@valko-ui/components'

const form = ref({
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  direction: 'row',
  pressable: false,
  flat: false,
  bgImage: false,
  cardBody: false,
  cardFooter: false,
  cardHeader: false
})

const directionOptions = [
  { value: 'row', label: 'Row' },
  { value: 'col', label: 'Column' },
  { value: 'row-reverse', label: 'Row Reverse' },
  { value: 'col-reverse', label: 'Column Reverse' }
]

const sizes = [
  ...sizeOptions,
  { value: 'full', label: 'Full' }
]

const cardProps = [
  {
    prop: 'variant',
    required: false,
    description: 'The variant of the Card.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Card.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Card.',
    values: 'xs, sm, md, lg, full',
    default: 'md'
  },
  {
    prop: 'direction',
    required: false,
    description: 'The direction in what the slots are gonna be displayed.',
    values: 'row, col, row-reverse, col-reverse',
    default: 'row'
  },
  {
    prop: 'isPressable',
    required: false,
    description: 'Wether the Card allows to be clicked.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'flat',
    required: false,
    description: 'Displays a shadow for the Card.',
    values: 'true, false',
    default: 'false'
  }
]

const cardImageProps = [
  {
    prop: 'src',
    required: true,
    description: 'The src for the image.',
    values: 'string',
    default: ''
  },
  {
    prop: 'alt',
    required: false,
    description: 'The alt for the image.',
    values: 'string',
    default: ''
  },
  {
    prop: 'width',
    required: false,
    description: 'The widht for the image.',
    values: 'string',
    default: '100%'
  },
  {
    prop: 'height',
    required: false,
    description: 'The height for the image.',
    values: 'string',
    default: 'auto'
  }
]

const cardEmits = [
  {
    event: 'click',
    type: '() => void',
    values: '',
    description: 'Emitted when the Card is clicked by the user.'
  }
]

const cardSlots = [
  {
    name: 'default',
    description: 'Slot for the main content of the Card.',
    example: '<template #default>\n<vk-card-body>This is the main content of the Card.</vk-card-body>\n</template>'
  }
]

const onClick = () => useNotification({ text: 'Pressed' })
const adoptBuddy = () => useNotification({ text: 'Adopted!' })
const nextBuddy = () => useNotification({ text: 'Showing new buddy!' })
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
          :is-pressable="form.pressable"
          :variant="form.variant"
          :shape="form.shape"
          :size="form.size"
          :direction="form.direction"
          :flat="form.flat"
          @click="onClick"
        >
          <vk-card-header
            v-if="form.bgImage ? false : true && form.cardHeader"
          >
            <h2 class="font-semibold">
              Adopt a new buddy!
            </h2>
          </vk-card-header>
          <vk-card-image
            v-if="form.bgImage ? false : true"
            src="https://picsum.photos/id/237/200"
            class="text-white"
            height="15rem"
          />
          <vk-card-body
            v-if="form.bgImage ? false : true && form.cardBody"
          >
            <p>He's name is Drago</p>
          </vk-card-body>
          <vk-card-footer
            v-if="form.bgImage ? false : true && form.cardFooter"
          >
            <div class="flex justify-between">
              <vk-button
                color="success"
                size="xs"
                class="mr-2"
                @click="adoptBuddy"
              >
                Adopt the buddy!
              </vk-button>
              <vk-button
                color="error"
                size="xs"
                @click="nextBuddy"
              >
                Other buddys
              </vk-button>
            </div>
          </vk-card-footer>
          <vk-card-image
            v-if="form.bgImage"
            src="https://picsum.photos/id/237/200"
            class="text-white"
            height="15rem"
          >
            <div class="flex flex-col justify-between">
              <vk-card-header
                v-if="form.cardHeader && form.bgImage ? true : false"
              >
                <h2 class="font-semibold">
                  Adopt a new buddy!
                </h2>
              </vk-card-header>
              <vk-card-body
                v-if="form.cardBody && form.bgImage ? true : false"
              >
                <p>He's name is Drago</p>
              </vk-card-body>
              <vk-card-footer
                v-if="form.cardFooter && form.bgImage ? true : false"
              >
                <div class="flex justify-between">
                  <vk-button
                    color="success"
                    size="xs"
                    class="mr-2"
                    @click="adoptBuddy"
                  >
                    Adopt the buddy!
                  </vk-button>
                  <vk-button
                    color="error"
                    size="xs"
                    @click="nextBuddy"
                  >
                    Other buddys
                  </vk-button>
                </div>
              </vk-card-footer>
            </div>
          </vk-card-image>
        </vk-card>
      </div>
    </template>
    <template #playground-options>
      <vk-select
        placeholder="Variant"
        size="sm"
        :options="variantOptions"
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
        :options="sizes"
        v-model="form.size"
      />
      <vk-select
        placeholder="Direction"
        size="sm"
        :options="directionOptions"
        v-model="form.direction"
      />
      <vk-checkbox
        label="Pressable"
        v-model="form.pressable"
      />
      <vk-checkbox
        label="Flat"
        v-model="form.flat"
      />
      <vk-checkbox
        label="Card Header"
        v-model="form.cardHeader"
      />
      <vk-checkbox
        label="Card Body"
        v-model="form.cardBody"
      />
      <vk-checkbox
        label="Card Footer"
        v-model="form.cardFooter"
      />
      <vk-checkbox
        label="Card Image as background"
        v-model="form.bgImage"
      />
    </template>

    <template #examples>
      <example-section
        title="Variants"
        justify="start"
        gap
      >
        <vk-card
          v-for="variant in variantOptions"
          :key="variant.value"
          :variant="variant.value"
        >
          <vk-card-image
            src="https://picsum.photos/id/237/200"
            class="text-white"
            height="15rem"
          />
          <vk-card-body>
            <h2 class="font-black mb-4">
              {{ variant.label }}
            </h2>
            <h3 class="font-semibold">
              Adopt our buddy!
            </h3>
            <p>He's name is Drago</p>
          </vk-card-body>
        </vk-card>
      </example-section>

      <example-section
        title="Shapes"
        justify="start"
        gap
      >
        <vk-card
          v-for="shape in shapeOptions"
          :key="shape.value"
          :shape="shape.value"
        >
          <vk-card-image
            src="https://picsum.photos/id/237/200"
            class="text-white"
            height="15rem"
          />
          <vk-card-body>
            <h2 class="font-black mb-4">
              {{ shape.label }}
            </h2>
            <h3 class="font-semibold">
              Adopt our buddy!
            </h3>
            <p>He's name is Drago</p>
          </vk-card-body>
        </vk-card>
      </example-section>

      <example-section
        title="Sizes"
        justify="around"
        wrap
        gap
      >
        <vk-card
          v-for="size in sizes"
          :key="size.value"
          :size="size.value"
        >
          <vk-card-image
            src="https://picsum.photos/id/237/200"
            class="text-white"
            height="15rem"
          />
          <vk-card-body>
            <h2 class="font-black mb-4">
              {{ size.label }}
            </h2>
            <h3 class="font-semibold">
              Adopt our buddy!
            </h3>
            <p>He's name is Drago</p>
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
            src="https://picsum.photos/id/237/200"
            class="text-white"
            height="15rem"
          />
          <vk-card-body>
            <h2 class="font-black mb-4">
              Pressable
            </h2>
            <h3 class="font-semibold">
              Adopt our buddy!
            </h3>
            <p>He's name is Drago</p>
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
            src="https://picsum.photos/id/237/200"
            class="text-white"
            height="15rem"
          />
          <vk-card-body>
            <h2 class="font-black mb-4">
              Flat
            </h2>
            <h3 class="font-semibold">
              Adopt our buddy!
            </h3>
            <p>He's name is Drago</p>
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
          <vk-data-table
            :headers="propHeaders"
            :data="cardProps"
          />
        </example-section>

        <example-section
          title="Card Emits"
          gap
        >
          <vk-data-table
            :headers="emitHeaders"
            :data="cardEmits"
          />
        </example-section>

        <example-section
          title="Card Slots"
          gap
        >
          <vk-data-table
            :headers="slotHeaders"
            :data="cardSlots"
          />
        </example-section>

        <example-section
          title="Card Image Props"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="cardImageProps"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
