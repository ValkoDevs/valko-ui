<script setup lang="ts">
import { ref } from 'vue'
import type { DropdownProps, Item } from '#valkoui/types/Dropdown'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Dropdown.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkIcon from './Icon.vue'
import VkButton from './Button.vue'
import VkPopover from './Popover.vue'

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

const open = ref(false)

const onItemClick = (item: Item) => {
  if (item.disabled) return
  emit('itemClick', item)
  item.onClick?.()
}
</script>

<template>
  <vk-popover
    :class="classes.container"
    :is-open="open && !disabled"
    :flat="flat || variant === 'ghost' || variant === 'link'"
    :shape="shape"
    condensed
    @close="open = false"
  >
    <slot
      name="dropdown-trigger"
      :v-bind="props"
      :open="open"
    >
      <vk-button
        v-bind="props"
        :disabled="disabled"
        :class="classes.triggerButton"
        @click="open = !open"
      >
        {{ label }}
        <vk-icon
          :class="classes.icon"
          :name="icon"
          :data-open="open"
        />
      </vk-button>
    </slot>

    <template #popover-content>
      <div :class="classes.itemsMenu">
        <button
          v-for="item in items"
          :key="item.key"
          :class="classes.itemsButton"
          :data-disabled="item.disabled"
          :data-shape="shape"
          @click.prevent="onItemClick(item)"
        >
          <vk-icon
            v-if="item.icon"
            :class="classes.itemsIcon"
            :name="item.icon"
          />
          {{ item.title }}
        </button>
      </div>
    </template>
  </vk-popover>
</template>
