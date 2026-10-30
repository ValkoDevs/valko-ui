<script setup lang="ts">
import { useId, computed } from 'vue'
import type { DropdownProps, Item } from '#valkoui/types/Dropdown'
import styles from '#valkoui/styles/Dropdown.styles.ts'
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

const emit = defineEmits(['itemClick', 'update:isOpen'])

const s = computed(() => styles(props))

const dropdownId = useId()
const menuId = useId()

const onItemClick = (item: Item, setOpen: (value: boolean) => void) => {
  emit('itemClick', item)
  item.onClick?.()
  setOpen(false)
}
</script>

<template>
  <vk-popover
    :class="s.container({ class: styleSlots?.container })"
    :style-slots="{ panel: [s.panel({ class: styleSlots?.panel })] }"
    :is-open="disabled ? false : isOpen"
    :shape="shape"
    :placement="placement"
    :alignment="alignment"
    condensed
    @update:is-open="emit('update:isOpen', $event)"
  >
    <template #trigger="{ isOpen, setOpen }">
      <slot
        name="trigger"
        :is-open="isOpen"
        :set-open="setOpen"
        :disabled="disabled"
      >
        <vk-button
          :variant="variant"
          :shape="shape"
          :color="color"
          :size="size"
          :id="dropdownId"
          :disabled="disabled"
          :elevated="elevated"
          :class="s.triggerButton({ class: styleSlots?.triggerButton })"
          :aria-haspopup="'menu'"
          :aria-expanded="isOpen"
          :aria-controls="menuId"
          @click="setOpen(!isOpen)"
        >
          {{ label }}

          <vk-icon
            :class="s.icon({ class: styleSlots?.icon })"
            :name="icon"
            :data-open="isOpen"
          />
        </vk-button>
      </slot>
    </template>

    <template #panel="{ setOpen }">
      <div
        :id="menuId"
        role="menu"
        :aria-labelledby="dropdownId"
        :class="s.itemsMenu({ class: styleSlots?.itemsMenu })"
      >
        <button
          v-for="item in items"
          :key="item.key"
          role="menuitem"
          type="button"
          :tabindex="item.disabled ? -1 : 0"
          :aria-disabled="item.disabled || undefined"
          :disabled="item.disabled"
          :class="s.itemsButton({ class: styleSlots?.itemsButton })"
          :data-disabled="item.disabled"
          :data-shape="shape"
          @click.prevent="onItemClick(item, setOpen)"
        >
          <vk-icon
            v-if="item.icon"
            :class="s.itemsIcon({ class: styleSlots?.itemsIcon })"
            :name="item.icon"
          />
          {{ item.title }}
        </button>
      </div>
    </template>
  </vk-popover>
</template>
