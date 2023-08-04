<script setup lang="ts">
import { MenuProps, MenuItem } from '@/components/Menu/interfaces'
import useStyle from './Menu.styles'

const props = withDefaults(defineProps<MenuProps>(), {
  variant: 'primary',
  active: null,
  rounded: false
})

const emit = defineEmits(['itemClick'])

const onItemClick = (item: MenuItem) => {
  if (item.disabled) return
  emit('itemClick', item)
  item.onClick?.()
}

defineOptions({ name: 'VkMenu' })

const classes = useStyle(props)
</script>

<template>
  <ul :class="classes.menu">
    <slot name="items">
      <li
        v-for="item in props.items"
        :key="item.key"
        :class="classes.item"
      >
        <slot
          name="item"
          :item="item"
        >
          <a
            href="!#"
            @click.prevent="onItemClick(item)"
            :class="classes.content"
            :data-active="item.key === props.active"
            :data-disabled="item.disabled"
          >{{ item.text }}</a>
        </slot>
      </li>
    </slot>
  </ul>
</template>