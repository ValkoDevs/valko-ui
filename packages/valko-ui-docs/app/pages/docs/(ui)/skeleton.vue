<script setup lang="ts">
import type { TableItem, SkeletonProps } from '#valkoui'

const form = ref<SkeletonProps>({
  shape: 'soft'
})

const size = ref('size-30')

const sizeOptions = [
  { label: 'Small', value: 'size-20' },
  { label: 'Medium', value: 'size-30' },
  { label: 'Large', value: 'size-40' }
]

const skeletonProps: TableItem[] = [
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Skeleton.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'styleSlotsProp',
    prop: 'styleSlots',
    required: false,
    description: 'Accepts an object of Tailwind class arrays to override styles on each slot.',
    values: 'SkeletonSlots',
    default: ''
  }
]

const styleSlotsInterface: TableItem[] = [
  {
    key: 'container',
    prop: 'container',
    required: false,
    description: 'Root container for the Skeleton. Accepts Tailwind classes to control size, colors, animation, and any other visual aspect.',
    values: 'string[]',
    default: ''
  }
]

const generateSnippet = snippetGeneratorFactory('vk-skeleton')

const exampleSnippets = {
  card: `<template>
  <div class="flex flex-col gap-4 w-72 p-4 rounded-lg border">
    <vk-skeleton shape="soft" :style-slots="{ container: ['w-full', 'h-40'] }" />
    <vk-skeleton shape="soft" :style-slots="{ container: ['w-3/4', 'h-6'] }" />
    <vk-skeleton shape="soft" :style-slots="{ container: ['w-full', 'h-4'] }" />
    <vk-skeleton shape="soft" :style-slots="{ container: ['w-5/6', 'h-4'] }" />
  </div>
</template>`,
  profile: `<template>
  <div class="flex items-center gap-4 w-80">
    <vk-skeleton shape="rounded" :style-slots="{ container: ['size-14', 'shrink-0'] }" />
    <div class="flex flex-col gap-2 w-full">
      <vk-skeleton shape="soft" :style-slots="{ container: ['w-1/2', 'h-4'] }" />
      <vk-skeleton shape="soft" :style-slots="{ container: ['w-3/4', 'h-3'] }" />
    </div>
  </div>
</template>`,
  paragraph: `<template>
  <div class="flex flex-col gap-3 w-80">
    <vk-skeleton shape="soft" :style-slots="{ container: ['w-2/3', 'h-6'] }" />
    <vk-skeleton shape="soft" :style-slots="{ container: ['w-full', 'h-4'] }" />
    <vk-skeleton shape="soft" :style-slots="{ container: ['w-full', 'h-4'] }" />
    <vk-skeleton shape="soft" :style-slots="{ container: ['w-4/5', 'h-4'] }" />
  </div>
</template>`,
  button: `<template>
  <vk-skeleton shape="soft" :style-slots="{ container: ['w-24', 'h-10'] }" />
  <vk-skeleton shape="rounded" :style-slots="{ container: ['w-32', 'h-10'] }" />
  <vk-skeleton shape="square" :style-slots="{ container: ['w-28', 'h-10'] }" />
</template>`,
  imageGallery: `<template>
  <div class="grid grid-cols-3 gap-4 w-80">
    <vk-skeleton
      v-for="i in 6"
      :key="i"
      shape="soft"
      :style-slots="{ container: ['w-full', 'aspect-square'] }"
    />
  </div>
</template>`,
  list: `<template>
  <div class="flex flex-col gap-4 w-80">
    <div v-for="i in 3" :key="i" class="flex items-center gap-3">
      <vk-skeleton shape="rounded" :style-slots="{ container: ['size-10', 'shrink-0'] }" />
      <div class="flex flex-col gap-2 w-full">
        <vk-skeleton shape="soft" :style-slots="{ container: ['w-3/5', 'h-4'] }" />
        <vk-skeleton shape="soft" :style-slots="{ container: ['w-full', 'h-3'] }" />
      </div>
    </div>
  </div>
</template>`,
  table: `<template>
  <div class="flex flex-col gap-2 w-full max-w-lg">
    <!-- header row -->
    <div class="grid grid-cols-4 gap-3 pb-2 border-b border-surface-container-highest">
      <vk-skeleton v-for="i in 4" :key="i" shape="soft" :style-slots="{ container: ['h-4', 'w-4/5'] }" />
    </div>
    <!-- data rows -->
    <div
      v-for="row in 5"
      :key="row"
      class="grid grid-cols-4 gap-3 py-2 border-b border-surface-container-highest"
    >
      <vk-skeleton shape="soft" :style-slots="{ container: ['h-3', 'w-full'] }" />
      <vk-skeleton shape="soft" :style-slots="{ container: ['h-3', 'w-3/4'] }" />
      <vk-skeleton shape="soft" :style-slots="{ container: ['h-3', 'w-5/6'] }" />
      <vk-skeleton shape="soft" :style-slots="{ container: ['h-3', 'w-2/3'] }" />
    </div>
  </div>
</template>`,
  form: `<template>
  <div class="flex flex-col gap-5 w-80">
    <!-- two side-by-side fields -->
    <div class="flex gap-4">
      <div class="flex flex-col gap-2 w-full">
        <vk-skeleton shape="soft" :style-slots="{ container: ['w-1/3', 'h-3'] }" />
        <vk-skeleton shape="soft" :style-slots="{ container: ['w-full', 'h-9'] }" />
      </div>
      <div class="flex flex-col gap-2 w-full">
        <vk-skeleton shape="soft" :style-slots="{ container: ['w-1/3', 'h-3'] }" />
        <vk-skeleton shape="soft" :style-slots="{ container: ['w-full', 'h-9'] }" />
      </div>
    </div>
    <!-- full-width field -->
    <div class="flex flex-col gap-2">
      <vk-skeleton shape="soft" :style-slots="{ container: ['w-1/4', 'h-3'] }" />
      <vk-skeleton shape="soft" :style-slots="{ container: ['w-full', 'h-9'] }" />
    </div>
    <!-- textarea -->
    <div class="flex flex-col gap-2">
      <vk-skeleton shape="soft" :style-slots="{ container: ['w-1/5', 'h-3'] }" />
      <vk-skeleton shape="soft" :style-slots="{ container: ['w-full', 'h-24'] }" />
    </div>
    <!-- submit button -->
    <div class="flex justify-end">
      <vk-skeleton shape="soft" :style-slots="{ container: ['w-28', 'h-9'] }" />
    </div>
  </div>
</template>`,
  statCard: `<template>
  <div class="grid grid-cols-2 gap-4 w-96">
    <div v-for="i in 4" :key="i" class="flex flex-col gap-3 p-4 rounded-lg border border-surface-container-highest">
      <vk-skeleton shape="soft" :style-slots="{ container: ['w-1/2', 'h-3'] }" />
      <vk-skeleton shape="soft" :style-slots="{ container: ['w-2/3', 'h-8'] }" />
      <vk-skeleton shape="soft" :style-slots="{ container: ['w-3/4', 'h-3'] }" />
    </div>
  </div>
</template>`
}
</script>

<template>
  <doc-section
    title="Skeleton"
    description="Placeholder content that is displayed while the actual content is loading, use multiple skeletons for better effect."
    :style-slots="{
      playgroundView: ['h-100']
    }"
  >
    <template #playground-view>
      <vk-skeleton
        :shape="form.shape"
        :style-slots="{
          container: [size]
        }"
      />
    </template>

    <template #playground-options>
      <vk-select
        v-model="form.shape"
        label="Shape"
        size="sm"
        :options="shapeOptions.general"
      />
      <vk-select
        v-model="size"
        label="Sizes"
        size="sm"
        :options="sizeOptions"
      />
    </template>

    <template #examples>
      <example-section
        title="Shapes"
        :style-slots="{ slotContainer: ['flex', 'flex-col', 'items-center', 'md:flex-row', 'gap-8'] }"
      >
        <vk-skeleton
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          :shape="shape.value"
          :style-slots="{
            container: ['size-40']
          }"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Card"
        :style-slots="{ slotContainer: ['flex', 'justify-center', 'md:justify-start'] }"
      >
        <div class="flex flex-col gap-4 w-72 p-4 rounded-lg border border-surface-container-highest">
          <vk-skeleton
            shape="soft"
            :style-slots="{ container: ['w-full', 'h-40'] }"
          />
          <vk-skeleton
            shape="soft"
            :style-slots="{ container: ['w-3/4', 'h-6'] }"
          />
          <vk-skeleton
            shape="soft"
            :style-slots="{ container: ['w-full', 'h-4'] }"
          />
          <vk-skeleton
            shape="soft"
            :style-slots="{ container: ['w-5/6', 'h-4'] }"
          />
        </div>

        <template #code>
          <code-block
            language="vue"
            :code="exampleSnippets.card"
          />
        </template>
      </example-section>

      <example-section
        title="Profile"
        :style-slots="{ slotContainer: ['flex', 'justify-center', 'md:justify-start'] }"
      >
        <div class="flex items-center gap-4 w-80">
          <vk-skeleton
            shape="rounded"
            :style-slots="{ container: ['size-14', 'shrink-0'] }"
          />
          <div class="flex flex-col gap-2 w-full">
            <vk-skeleton
              shape="soft"
              :style-slots="{ container: ['w-1/2', 'h-4'] }"
            />
            <vk-skeleton
              shape="soft"
              :style-slots="{ container: ['w-3/4', 'h-3'] }"
            />
          </div>
        </div>

        <template #code>
          <code-block
            language="vue"
            :code="exampleSnippets.profile"
          />
        </template>
      </example-section>

      <example-section
        title="Paragraph"
        :style-slots="{ slotContainer: ['flex', 'justify-center', 'md:justify-start'] }"
      >
        <div class="flex flex-col gap-3 w-80">
          <vk-skeleton
            shape="soft"
            :style-slots="{ container: ['w-2/3', 'h-6'] }"
          />
          <vk-skeleton
            shape="soft"
            :style-slots="{ container: ['w-full', 'h-4'] }"
          />
          <vk-skeleton
            shape="soft"
            :style-slots="{ container: ['w-full', 'h-4'] }"
          />
          <vk-skeleton
            shape="soft"
            :style-slots="{ container: ['w-4/5', 'h-4'] }"
          />
        </div>

        <template #code>
          <code-block
            language="vue"
            :code="exampleSnippets.paragraph"
          />
        </template>
      </example-section>

      <example-section
        title="Button"
        :style-slots="{ slotContainer: ['flex', 'flex-col', 'items-center', 'md:items-start', 'md:flex-row', 'gap-8'] }"
      >
        <vk-skeleton
          shape="soft"
          :style-slots="{ container: ['w-24', 'h-10'] }"
        />
        <vk-skeleton
          shape="rounded"
          :style-slots="{ container: ['w-32', 'h-10'] }"
        />
        <vk-skeleton
          shape="square"
          :style-slots="{ container: ['w-28', 'h-10'] }"
        />

        <template #code>
          <code-block
            language="vue"
            :code="exampleSnippets.button"
          />
        </template>
      </example-section>

      <example-section
        title="Image Gallery"
        :style-slots="{ slotContainer: ['flex', 'justify-center', 'md:justify-start'] }"
      >
        <div class="grid grid-cols-3 gap-4 w-80">
          <vk-skeleton
            v-for="i in 6"
            :key="i"
            shape="soft"
            :style-slots="{ container: ['w-full', 'aspect-square'] }"
          />
        </div>

        <template #code>
          <code-block
            language="vue"
            :code="exampleSnippets.imageGallery"
          />
        </template>
      </example-section>

      <example-section
        title="List"
        :style-slots="{ slotContainer: ['flex', 'justify-center', 'md:justify-start'] }"
      >
        <div class="flex flex-col gap-4 w-80">
          <div
            v-for="i in 3"
            :key="i"
            class="flex items-center gap-3"
          >
            <vk-skeleton
              shape="rounded"
              :style-slots="{ container: ['size-10', 'shrink-0'] }"
            />
            <div class="flex flex-col gap-2 w-full">
              <vk-skeleton
                shape="soft"
                :style-slots="{ container: ['w-3/5', 'h-4'] }"
              />
              <vk-skeleton
                shape="soft"
                :style-slots="{ container: ['w-full', 'h-3'] }"
              />
            </div>
          </div>
        </div>

        <template #code>
          <code-block
            language="vue"
            :code="exampleSnippets.list"
          />
        </template>
      </example-section>

      <example-section
        title="Table"
        :style-slots="{ slotContainer: ['flex', 'justify-center', 'md:justify-start'] }"
      >
        <div class="flex flex-col gap-2 w-full max-w-lg">
          <div class="grid grid-cols-4 gap-3 pb-2 border-b border-surface-container-highest">
            <vk-skeleton
              v-for="i in 4"
              :key="i"
              shape="soft"
              :style-slots="{ container: ['h-4', 'w-4/5'] }"
            />
          </div>
          <div
            v-for="row in 5"
            :key="row"
            class="grid grid-cols-4 gap-3 py-2 border-b border-surface-container-highest"
          >
            <vk-skeleton
              shape="soft"
              :style-slots="{ container: ['h-3', 'w-full'] }"
            />
            <vk-skeleton
              shape="soft"
              :style-slots="{ container: ['h-3', 'w-3/4'] }"
            />
            <vk-skeleton
              shape="soft"
              :style-slots="{ container: ['h-3', 'w-5/6'] }"
            />
            <vk-skeleton
              shape="soft"
              :style-slots="{ container: ['h-3', 'w-2/3'] }"
            />
          </div>
        </div>

        <template #code>
          <code-block
            language="vue"
            :code="exampleSnippets.table"
          />
        </template>
      </example-section>

      <example-section
        title="Form"
        :style-slots="{ slotContainer: ['flex', 'justify-center', 'md:justify-start'] }"
      >
        <div class="flex flex-col gap-5 w-80">
          <div class="flex gap-4">
            <div class="flex flex-col gap-2 w-full">
              <vk-skeleton
                shape="soft"
                :style-slots="{ container: ['w-1/3', 'h-3'] }"
              />
              <vk-skeleton
                shape="soft"
                :style-slots="{ container: ['w-full', 'h-9'] }"
              />
            </div>
            <div class="flex flex-col gap-2 w-full">
              <vk-skeleton
                shape="soft"
                :style-slots="{ container: ['w-1/3', 'h-3'] }"
              />
              <vk-skeleton
                shape="soft"
                :style-slots="{ container: ['w-full', 'h-9'] }"
              />
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <vk-skeleton
              shape="soft"
              :style-slots="{ container: ['w-1/4', 'h-3'] }"
            />
            <vk-skeleton
              shape="soft"
              :style-slots="{ container: ['w-full', 'h-9'] }"
            />
          </div>
          <div class="flex flex-col gap-2">
            <vk-skeleton
              shape="soft"
              :style-slots="{ container: ['w-1/5', 'h-3'] }"
            />
            <vk-skeleton
              shape="soft"
              :style-slots="{ container: ['w-full', 'h-24'] }"
            />
          </div>
          <div class="flex justify-end">
            <vk-skeleton
              shape="soft"
              :style-slots="{ container: ['w-28', 'h-9'] }"
            />
          </div>
        </div>

        <template #code>
          <code-block
            language="vue"
            :code="exampleSnippets.form"
          />
        </template>
      </example-section>

      <example-section
        title="Stat Card"
        :style-slots="{ slotContainer: ['flex', 'justify-center', 'md:justify-start'] }"
      >
        <div class="flex flex-col w-full gap-4 md:w-xl md:grid md:grid-cols-2">
          <div
            v-for="i in 4"
            :key="i"
            class="flex flex-col gap-3 p-4 rounded-lg border border-surface-container-highest"
          >
            <vk-skeleton
              shape="soft"
              :style-slots="{ container: ['w-1/2', 'h-3'] }"
            />
            <vk-skeleton
              shape="soft"
              :style-slots="{ container: ['w-2/3', 'h-8'] }"
            />
            <vk-skeleton
              shape="soft"
              :style-slots="{ container: ['w-3/4', 'h-3'] }"
            />
          </div>
        </div>

        <template #code>
          <code-block
            language="vue"
            :code="exampleSnippets.statCard"
          />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Skeleton Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="skeletonProps"
      />

      <h3>Style Slots Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="styleSlotsInterface"
      />
    </template>
  </doc-section>
</template>
