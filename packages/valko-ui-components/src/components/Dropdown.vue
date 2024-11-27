<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import type { DropdownProps, Item } from '#valkoui/types/Dropdown'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Dropdown.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkIcon from './Icon.vue'
import VkButton from './Button.vue'

defineOptions({ name: 'VkDropdown' })

const props = withDefaults(defineProps<DropdownProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  icon: 'chevron-down',
  flat: false,
  disabled: false,
  items: () => []
})

const emit = defineEmits(['itemClick'])

const classes = useStyle<DropdownProps, SlotStyles>(props, styles)

const onItemClick = (item: Item) => {
  if (item.disabled) return
  emit('itemClick', item)
  item.onClick?.()
}
</script>

<template>
  <div :class="classes.container">
    <Menu
      as="div"
      :class="classes.dropdown"
      v-slot="{ open }"
    >
      <div>
        <menu-button>
          <slot
            name="dropdown-trigger"
            :v-bind="props"
            :open="open"
          >
            <vk-button
              v-bind="props"
              :class="classes.triggerButton"
            >
              {{ label }}
              <vk-icon
                :class="classes.icon"
                :name="icon"
                :data-open="open"
              />
            </vk-button>
          </slot>
        </menu-button>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <menu-items
          :class="classes.itemsMenu"
        >
          <menu-item
            v-slot="{ active }"
            v-for="item in items"
            :key="item.key"
          >
            <button
              @click.prevent="onItemClick(item)"
              :class="classes.itemsButton"
              :data-active="active"
              :data-disabled="item.disabled"
              :data-shape="shape"
            >
              <vk-icon
                v-if="item.icon"
                :class="classes.itemsIcon"
                :name="item.icon"
              />
              {{ item.title }}
            </button>
          </menu-item>
        </menu-items>
      </transition>
    </Menu>
  </div>
</template>
