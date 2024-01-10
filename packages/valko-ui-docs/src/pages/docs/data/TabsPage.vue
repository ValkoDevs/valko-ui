<script setup lang="ts">
import {ref} from 'vue'
import DocSection from '../../../components/DocSection'
import ExampleSection from '../../../components/ExampleSection'

const variants = [
  {value:'primary', label:'Primary'},
  {value:'secondary', label:'Secondary'},
  {value:'success', label:'Success'},
  {value:'info', label:'Info'},
  {value:'warning', label:'Warning'},
  {value:'error', label:'Error'}
]

const types = [
  {value:'filled', label:'Filled'},
  {value:'outlined', label:'Outlined'},
  {value:'ghost', label:'Ghost'}
]

const sizes = [
  {value:'xs', label:'Extra Small'},
  {value:'sm', label:'Small'},
  {value:'md', label:'Medium'},
  {value:'lg', label:'Large'}
]

const shapes = [
  {value:'underline', label:'Underline'},
  {value:'rounded', label:'Rounded'},
  {value:'square', label:'Square'},
  {value:'soft', label:'Soft'}
]

const tabs = [
  {title: 'Photos'},
  {title: 'Videos'},
  {title: 'Favorite'},
  {title: 'Trending'},
  {title: 'Friends'}
]

const tabWithIcon = [
  {title: 'Photos', leftIcon: 'photo'},
  {title: 'Videos', rightIcon: 'movie'},
  {title: 'Favorite', leftIcon: 'heart'},
  {title: 'Trending', leftIcon: 'flame', rightIcon: 'flame'},
  {title: 'Friends', rightIcon: 'friends'}
]

const tabDisabled = [
  {title: 'Photos', disabled: true},
  {title: 'Videos'},
  {title: 'Favorite', disabled: true},
  {title: 'Trending'},
  {title: 'Friends'}
]

const form = ref({
  variants: 'primary',
  types: 'filled',
  sizes: 'md',
  shapes: 'soft',
  grow: false,
  vertical: false,
  icons: false
})

const propsHeader = [
  {
    key: 'prop',
    label: 'Property'
  },
  {
    key: 'required',
    label: 'Required'
  },
  {
    key: 'description',
    label: 'Description'
  },
  {
    key: 'values',
    label: 'Values'
  },
  {
    key: 'default',
    label: 'Default'
  }
]

const tabsPropsData = [
  {
    prop: 'variant',
    required: false,
    description: 'The color variant of the Tabs.',
    values: 'primary, secondary, error, warning, info, success',
    default: 'primary'
  },
  {
    prop: 'size',
    required: false,
    description: 'The Tabs size.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'types',
    required: false,
    description: 'The type of the Tabs',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The Tabs appearance style.',
    values: 'underline, rounded, soft, square',
    default: 'soft'
  },
  {
    prop: 'grow',
    required: false,
    description: 'Allow the Tabs to grow to fill any available space',
    values: 'primary, secondary, error, warning, info, success',
    default: 'primary'
  },
  {
    prop: 'tabs',
    required: true,
    description: 'The list of tabs',
    values: 'Tab[]',
    default: '[]'
  },
  {
    prop: 'vertical',
    required: false,
    description: 'Wether the Tabs displays vertically or not',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'defaultIndex',
    required: false,
    description: 'The default selected tab',
    values: 'number',
    default: '0'
  }
]

const tabInterfaceData = [
  {
    prop: 'key',
    required: true,
    description: 'The key of the Tab who grants the name for the content panel',
    values: 'string | number',
    default: ''
  },
  {
    prop: 'title',
    required: true,
    description: 'The title for the Tab',
    values: 'string',
    default: ''
  },
  {
    prop: 'leftIcon',
    required: false,
    description: 'The name of the icon to display on the left side of the title',
    values: 'string',
    default: ''
  },
  {
    prop: 'rightIcon',
    required: false,
    description: 'The name of the icon to display on the right side of the title',
    values: 'string',
    default: ''
  },
  {
    prop: 'Disabled',
    required: false,
    description: 'Wether the Tab is disabled or not',
    values: 'true, false',
    default: 'false'
  }
]

const tabsSlotsHeader = [
  {
    key: 'name',
    label: 'Name'
  },
  {
    key: 'description',
    label: 'Description'
  },
  {
    key: 'example',
    label: 'Example'
  }
]

const tabsSlotsData = [
  {
    name: '[key: Tab["key"]]',
    description: 'Content for Tab with the same key',
    example: '<template #tab-1> Content for tab with key "tab-1" </template>'
  }
]
</script>

<template>
  <doc-section
    title="Tabs"
    description="Tabs organize content into multiple sections and allow users to navigate between them."
  >
    <template #playground-view>
      <div class="w-full flex justify-center items-center px-2">
        <vk-tabs
          :variant="form.variants"
          :shape="form.shapes"
          :type="form.types"
          :size="form.sizes"
          :tabs="form.icons ? tabWithIcon : tabs"
          :grow="form.grow"
          :vertical="form.vertical"
        >
          <template #content-photos>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sequi perspiciatis ab reprehenderit molestias voluptas illo nostrum nesciunt! Facere explicabo eum esse laboriosam illum aliquam minima molestiae quo similique vitae.</p>
            <p>Esse aspernatur consectetur, recusandae architecto qui quae dolores porro, nemo eveniet assumenda explicabo exercitationem id officia voluptatum ipsam, enim vitae sit? Quaerat sapiente aperiam, natus et ipsa quos praesentium at?</p>
            <p>Tempore blanditiis labore non reiciendis sapiente obcaecati earum odit ad sunt voluptas animi ipsum, veritatis harum rerum optio minima voluptate nihil quis et nulla quo assumenda consequatur. Sequi, vitae cum?</p>
            <p>Numquam, sit! Dolores iusto velit exercitationem perferendis soluta vero nulla earum alias at reprehenderit ducimus commodi, eaque, deserunt fugit nihil, quo quasi tenetur illum sequi. Ipsam accusantium temporibus suscipit eligendi.</p>
            <p>Reiciendis iusto distinctio vero velit perferendis? Quidem soluta veritatis voluptate, hic dolore impedit rem pariatur numquam non nam accusantium repellat, placeat at, odit officiis in incidunt itaque aspernatur assumenda? Aperiam?</p>
          </template>
        </vk-tabs>
      </div>
    </template>

    <template #playground-options>
      <div class="flex">
        <div class="w-1/2 px-4">
          <form action="">
            <div class="flex mb-1">
              <vk-select
                type="outlined"
                placeholder="Variant"
                size="sm"
                :options="variants"
                v-model="form.variants"
              />
            </div>
            <div class="flex mb-1">
              <vk-select
                type="outlined"
                placeholder="Type"
                size="sm"
                :options="types"
                v-model="form.types"
              />
            </div>
            <div class="flex mb-1">
              <vk-select
                type="outlined"
                placeholder="Size"
                size="sm"
                :options="sizes"
                v-model="form.sizes"
              />
            </div>
            <div class="flex mb-1">
              <vk-select
                type="outlined"
                placeholder="Shape"
                size="sm"
                :options="shapes"
                v-model="form.shapes"
              />
            </div>
            <div class="flex mb-1">
              <vk-checkbox
                label="Grow"
                v-model="form.grow"
              />
            </div>
            <div class="flex mb-1">
              <vk-checkbox
                label="Vertical"
                v-model="form.vertical"
              />
            </div>
            <div class="flex mb-1">
              <vk-checkbox
                label="With Icons"
                v-model="form.icons"
              />
            </div>
          </form>
        </div>
      </div>
    </template>

    <template #examples>
      <example-section
        title="Colors"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <div
            v-for="variant in variants"
            :key="variant.value"
          >
            <span> {{ variant.label }} </span>
            <vk-tabs
              :variant="variant.value"
              :tabs="tabs"
            />
          </div>
        </div>
      </example-section>

      <example-section
        title="Types"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <div
            v-for="type in types"
            :key="type.value"
          >
            <span> {{ type.label }} </span>
            <vk-tabs
              :type="type.value"
              :tabs="tabs"
            />
          </div>
          <div>
            <span>Grow</span>
            <vk-tabs
              grow
              :tabs="tabs"
            />
          </div>
          <div>
            <span>Disabled</span>
            <vk-tabs
              :tabs="tabDisabled"
            />
          </div>
          <div>
            <span>With Icons</span>
            <vk-tabs
              :tabs="tabWithIcon"
            />
          </div>
        </div>
      </example-section>

      <example-section
        title="Shapes"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <div
            v-for="shape in shapes"
            :key="shape.value"
            class="flex flex-col items-around"
          >
            <span> {{ shape.label }} </span>
            <vk-tabs
              :shape="shape.value"
              :tabs="tabs"
            />
          </div>
        </div>
      </example-section>

      <example-section
        title="Sizes"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <div
            v-for="size in sizes"
            :key="size.value"
          >
            <span> {{ size.label }} </span>
            <vk-tabs
              :size="size.value"
              :tabs="tabs"
            />
          </div>
        </div>
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Tabs props"
          gap
        >
          <vk-data-table
            :headers="propsHeader"
            :data="tabsPropsData"
          />
        </example-section>

        <example-section
          title="Tabs Slots"
          gap
        >
          <vk-data-table
            :headers="tabsSlotsHeader"
            :data="tabsSlotsData"
          />
        </example-section>

        <example-section
          title="Tab interface"
          gap
        >
          <vk-data-table
            :headers="propsHeader"
            :data="tabInterfaceData"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
