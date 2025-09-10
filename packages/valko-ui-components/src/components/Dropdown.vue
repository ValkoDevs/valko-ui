<script setup lang="ts">
import { ref, useId, computed } from 'vue'
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
  elevated: false,
  disabled: false,
  placement: 'auto',
  alignment: undefined,
  isOpen: undefined,
  items: () => []
})

const emit = defineEmits(['itemClick', 'click'])

const classes = useStyle<DropdownProps, SlotStyles>(props, styles)

const dropdownId = useId()
const menuId = useId()
const internalOpen = ref(false)

const open = computed({
  get: () => props.isOpen ?? internalOpen.value,
  set: (val: boolean) => {
    if (props.isOpen === undefined) internalOpen.value = val
  }
})

const onClick = (event: MouseEvent) => {
  open.value = !open.value
  emit('click', event)
}

const onItemClick = (item: Item) => {
  if (item.disabled) return
  emit('itemClick', item)
  item.onClick?.()
  open.value = false
}
</script>

<template>
  <vk-popover
    :class="classes.container"
    :is-open="open && !disabled"
    :shape="shape"
    :placement="placement"
    :alignment="alignment"
    condensed
    @close="open = false"
  >
    <slot
      name="dropdown-trigger"
      :v-bind="props"
      :open="open"
      :toggle="onClick"
    >
      <vk-button
        v-bind="props"
        :id="dropdownId"
        :disabled="disabled"
        :elevated="elevated"
        :class="classes.triggerButton"
        :aria-haspopup="'menu'"
        :aria-expanded="open"
        :aria-controls="menuId"
        @click.stop="onClick"
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
      <div
        :id="menuId"
        role="menu"
        :aria-labelledby="dropdownId"
        :class="classes.itemsMenu"
      >
        <button
          v-for="item in items"
          :key="item.key"
          role="menuitem"
          type="button"
          :tabindex="item.disabled ? -1 : 0"
          :aria-disabled="item.disabled || undefined"
          :disabled="item.disabled"
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
