<script setup lang="ts">
import { type ComponentPublicInstance, ref, useId, computed, watch, nextTick } from 'vue'
import type { DropdownProps, Item } from '#valkoui/types/Dropdown'
import styles from '#valkoui/styles/Dropdown.styles.ts'
import useListKeyboardNav from '#valkoui/composables/useListKeyboardNav.ts'
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

const s = computed(() => styles(props))

const dropdownId = useId()
const menuId = useId()
const internalOpen = ref(false)
const focusedIndex = ref(-1)
const itemRefs = ref<(HTMLElement | null)[]>([])

const open = computed({
  get: () => props.isOpen ?? internalOpen.value,
  set: (val: boolean) => {
    if (props.isOpen === undefined) internalOpen.value = val
  }
})

const navigableItems = computed(() => props.items.filter(item => !item.disabled))

const focusedKey = computed(() => navigableItems.value[focusedIndex.value]?.key)

const setItemRef = (index: number) => (el: Element | ComponentPublicInstance | null) => {
  itemRefs.value[index] = el instanceof HTMLElement ? el : null
}

const getItemIndex = (item: Item) =>
  props.items.findIndex(option => option.key === item.key)

const focusItem = (index: number) => {
  const item = navigableItems.value[index]

  if (!item) return

  focusedIndex.value = index

  nextTick(() => {
    const domIndex = getItemIndex(item)

    itemRefs.value[domIndex]?.focus()
  })
}

const handleItemKeyDown = useListKeyboardNav({
  currentIndex: focusedIndex,
  itemCount: () => navigableItems.value.length,
  loop: true,
  enabled: () => open.value && !props.disabled,
  onMove: focusItem,
  onSelect: (index: number) => {
    const item = navigableItems.value[index]

    if (item) onItemClick(item)
  }
})

const onTriggerKeyDown = (event: KeyboardEvent) => {
  if (
    props.disabled ||
    !['ArrowDown', 'ArrowUp'].includes(event.key) ||
    !navigableItems.value.length
  ) return

  event.preventDefault()

  open.value = true

  focusItem(event.key === 'ArrowDown' ? 0 : navigableItems.value.length - 1)
}

const onClick = (event: MouseEvent) => {
  open.value = !open.value
  emit('click', event)
}

const onItemClick = (item: Item) => {
  emit('itemClick', item)

  item.onClick?.()

  open.value = false
}

watch(
  [open, () => props.items.length],
  () => { focusedIndex.value = open.value && navigableItems.value.length ? 0 : -1 },
  { immediate: true }
)
</script>

<template>
  <vk-popover
    :class="s.container({ class: styleSlots?.container })"
    :style-slots="{ panel: [s.panel({ class: styleSlots?.panel })] }"
    :is-open="open && !disabled"
    :shape="shape"
    :placement="placement"
    :alignment="alignment"
    condensed
    @close="open = false"
  >
    <slot
      name="dropdown-trigger"
      v-bind="props"
      :open="open"
      :toggle="onClick"
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
        :aria-expanded="open"
        :aria-controls="menuId"
        @click.stop="onClick"
        @keydown="onTriggerKeyDown"
      >
        {{ label }}

        <vk-icon
          :class="s.icon({ class: styleSlots?.icon })"
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
        :class="s.itemsMenu({ class: styleSlots?.itemsMenu })"
      >
        <button
          v-for="(item, index) in items"
          :key="item.key"
          :ref="setItemRef(index)"
          role="menuitem"
          type="button"
          :tabindex="item.disabled ? -1 : (focusedKey === item.key ? 0 : -1)"
          :aria-disabled="item.disabled || undefined"
          :disabled="item.disabled"
          :class="s.itemsButton({ class: styleSlots?.itemsButton })"
          :data-disabled="item.disabled"
          :data-focused="focusedKey === item.key"
          :data-shape="shape"
          @click.prevent="onItemClick(item)"
          @keydown="!item.disabled && handleItemKeyDown($event)"
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
