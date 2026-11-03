<script setup lang="ts">
import { ref, computed, watch, nextTick, type Ref, type ComponentPublicInstance } from 'vue'
import type { MenuProps, MenuItem } from '#valkoui/types/Menu'
import styles from '#valkoui/styles/Menu.styles.ts'

defineOptions({ name: 'VkMenu' })

const props = withDefaults(defineProps<MenuProps>(), {
  color: 'primary',
  size: 'md',
  variant: 'filled',
  shape: 'soft',
  active: null
})

const emit = defineEmits(['itemClick'])

const s = computed(() => styles(props))

const groupedItems = computed(() => {
  const groups: Record<string, MenuItem[]> = { default: [] }
  for (const item of props.items) {
    const group = item.group || 'default'
    if (!groups[group]) groups[group] = []
    groups[group].push(item)
  }
  return groups
})

// Flattened in the exact order items are rendered in the DOM.
const orderedItems = computed(() => Object.values(groupedItems.value).flat())

const focusedIndex = ref(-1)

const navigableItems = computed(() => orderedItems.value.filter(item => !item.disabled))

watch(
  () => [props.active, props.items],
  () => {
    const idx = navigableItems.value.findIndex(i => i.key === props.active)
    focusedIndex.value = idx >= 0 ? idx : (navigableItems.value.length ? 0 : -1)
  },
  { immediate: true }
)

const onItemClick = (item: MenuItem) => {
  if (item.disabled) return
  emit('itemClick', item)
  item.onClick?.()
}

const itemRefs: Ref<Record<string, HTMLElement | null>> = ref({})

const setItemRef = (key: string | number) => (el: Element | ComponentPublicInstance | null) => {
  // Vue invokes the previous ref callback with null on re-renders, which would
  // overwrite valid entries; only keep real elements.
  if (el instanceof HTMLElement) itemRefs.value[key] = el
}

const focusItem = (index: number) => {
  focusedIndex.value = index
  nextTick(() => {
    const key = navigableItems.value[index]?.key
    const el = key != null ? itemRefs.value[key] : undefined
    if (el) {
      el.focus()
      // 'nearest' avoids scrolling when the item is already visible.
      el.scrollIntoView({ block: 'nearest' })
    }
  })
}

const focusedKey = computed(() => navigableItems.value[focusedIndex.value]?.key)

const handleKeyDown = (e: KeyboardEvent, item: MenuItem) => {
  type AllowedKeys = 'ArrowDown' | 'ArrowUp' | 'Home' | 'End' | 'Enter' | 'SpaceBar'
  const allowedKeys: AllowedKeys[] = ['ArrowDown', 'ArrowUp', 'Home', 'End', 'Enter', 'SpaceBar']
  const currentKey = e.key as AllowedKeys

  if (!allowedKeys.includes(currentKey)) return

  e.preventDefault()

  const formulaMap = {
    ArrowDown: () => (focusedIndex.value + 1) % navigableItems.value.length,
    ArrowUp: () => (focusedIndex.value - 1 + navigableItems.value.length) % navigableItems.value.length,
    Home: () => 0,
    End: () => navigableItems.value.length - 1
  }

  if (!['Enter', 'SpaceBar'].includes(currentKey)) {
    const newIndex = formulaMap[currentKey as keyof typeof formulaMap]()
    focusItem(newIndex)
  } else if (!item.disabled) {
    onItemClick(item)
  }
}
</script>

<template>
  <div>
    <div
      v-for="(groupItems, group) in groupedItems"
      :key="group"
    >
      <span
        v-if="group !== 'default'"
        :class="s.group({ class: styleSlots?.group })"
        role="presentation"
      >
        {{ group }}
      </span>
      <ul
        :class="s.menu({ class: styleSlots?.menu })"
        role="menu"
        :aria-label="group !== 'default' ? group : 'Menu'"
      >
        <li
          v-for="item in groupItems"
          :key="item.key"
          :class="s.item({ class: styleSlots?.item })"
          role="none"
        >
          <slot
            name="item"
            :item="item"
          >
            <button
              :ref="setItemRef(item.key)"
              :class="s.content({ class: styleSlots?.content })"
              :data-active="item.key === active"
              :data-disabled="item.disabled"
              :aria-disabled="item.disabled || undefined"
              role="menuitem"
              :tabindex="focusedKey === item.key ? 0 : -1"
              @click.prevent="onItemClick(item)"
              @keydown="(e: KeyboardEvent) => handleKeyDown(e, item)"
            >
              {{ item.text }}
            </button>
          </slot>
        </li>
      </ul>
    </div>
  </div>
</template>
