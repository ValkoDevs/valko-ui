<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
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

const classes = styles(props)

const groups = props.items.reduce((acc: Set<string>, item: MenuItem) => {
  if (item.group) acc.add(item.group)
  else acc.add('default')
  return acc
}, new Set(['default']) as Set<string>)

const focusedIndex = ref(-1)

const navigableItems = computed(() => props.items.filter(item => !item.disabled))

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

const focusItem = (index: number) => {
  focusedIndex.value = index
  nextTick(() => {
    const allButtons = document.querySelectorAll('[role="menuitem"]')
    if (allButtons[index]) (allButtons[index] as HTMLElement).focus()
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
      v-for="group in groups"
      :key="group"
    >
      <span
        v-if="group !== 'default'"
        :class="classes.group({ class: styleSlots?.group })"
        role="presentation"
      >
        {{ group }}
      </span>
      <ul
        :class="classes.menu({ class: styleSlots?.menu })"
        role="menu"
        :aria-label="group !== 'default' ? group : 'Menu'"
      >
        <li
          v-for="item in props.items.filter(i => i.group === group)"
          :key="item.key"
          :class="classes.item({ class: styleSlots?.item })"
          role="none"
        >
          <slot
            name="item"
            :item="item"
          >
            <button
              :class="classes.content({ class: styleSlots?.content })"
              :data-active="item.key === props.active"
              :data-disabled="item.disabled"
              :aria-disabled="item.disabled || undefined"
              role="menuitem"
              :tabindex="focusedKey === item.key ? 0 : -1"
              @click.prevent="onItemClick(item)"
              @keydown="(e) => handleKeyDown(e, item)"
            >
              {{ item.text }}
            </button>
          </slot>
        </li>
      </ul>
    </div>
  </div>
</template>
