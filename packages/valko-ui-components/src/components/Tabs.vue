<script setup lang="ts">
import { Ref, ref, onUpdated, onMounted, nextTick } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import type { TabsProps } from '#valkoui/types/Tabs'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Tabs.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkTabs' })

const props = withDefaults(defineProps<TabsProps>(), {
  variant: 'filled',
  color: 'primary',
  shape: 'soft',
  size: 'md',
  defaultIndex: 0,
  vertical: false,
  tabs: () => []
})

const classes = useStyle<TabsProps, SlotStyles>(props, styles)

const cursor: Ref<HTMLElement | null> = ref(null)

const onChange = async () => {
  await nextTick()
  await nextTick()
  if (cursor.value) {
    const extraHeight = props.shape === 'line' && props.variant === 'outlined' && !props.vertical ? 2 : 0
    const extraLeft = props.shape === 'line' && props.variant === 'outlined' && props.vertical ? 2 : 0
    const selectedElement = cursor.value.closest('.tab-list')?.querySelector('button[data-headlessui-state=selected]') as HTMLElement
    if (selectedElement) {
      cursor.value.style.width = `${selectedElement.clientWidth}px`
      cursor.value.style.height = `${+selectedElement.clientHeight + extraHeight}px`
      cursor.value.style.left = `${selectedElement.offsetLeft - extraLeft}px`
      cursor.value.style.top = `${selectedElement.offsetTop}px`
    }
  }
}

onMounted(onChange)
onUpdated(onChange)
</script>

<template>
  <div :class="classes.container">
    <tab-group
      :vertical="props.vertical"
      :default-index="props.defaultIndex"
      as="div"
      :class="classes.group"
      @change="onChange"
    >
      <tab-list
        :class="classes.list"
        as="nav"
      >
        <div
          :class="classes.cursor"
          ref="cursor"
        />
        <tab
          v-for="item in props.tabs"
          :class="classes.tab"
          :key="item.key"
          :disabled="item.disabled"
        >
          <vk-icon
            v-if="item.leftIcon"
            :name="item.leftIcon"
            :class="classes.leftIcon"
          />
          <span> {{ item.title }} </span>
          <vk-icon
            v-if="item.rightIcon"
            :name="item.rightIcon"
            :class="classes.rightIcon"
          />
        </tab>
      </tab-list>

      <tab-panels :class="classes.content">
        <tab-panel
          v-for="item in props.tabs"
          :key="item.key"
          :data-key="item.key"
        >
          <slot :name="item.key" />
        </tab-panel>
      </tab-panels>
    </tab-group>
  </div>
</template>
