<script setup lang="ts">
import type { BreadcrumbsProps, Crumb } from '#valkoui/types/Breadcrumbs'
import styles from '#valkoui/styles/Breadcrumbs.styles.ts'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkBreadcrumbs' })

const props = withDefaults(defineProps<BreadcrumbsProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  separator: '>',
  crumbs: () => [],
  condensed: false,
  styleSlots: undefined
})

const emit = defineEmits(['crumbClick'])

const { nav, list, listItem, link, iconLeft, iconRight, separator } = styles(props)

const lastCrumbKey = props.crumbs[props.crumbs.length - 1]?.key

const onCrumbClick = (item: Crumb) => {
  if (item.disabled) return
  emit('crumbClick', item)
  item.onClick?.()
}

const selectIcon = (separator: string) => separator.length > 2
</script>

<template>
  <nav
    :class="nav({ class: styleSlots?.nav })"
    :aria-label="props['aria-label'] ?? 'Breadcrumbs'"
  >
    <ol :class="list({ class: styleSlots?.list })">
      <li
        v-for="crumb in crumbs"
        :key="crumb.key"
        :class="listItem({ class: styleSlots?.listItem })"
      >
        <a
          v-if="crumb.key !== lastCrumbKey"
          role="link"
          :tabindex="crumb.key !== lastCrumbKey ? 0 : -1"
          :class="link({ class: styleSlots?.link })"
          :data-disabled="crumb.disabled"
          :aria-disabled="crumb.disabled || undefined"
          @click.prevent="onCrumbClick(crumb)"
        >
          <vk-icon
            v-if="crumb.leftIcon"
            :name="crumb.leftIcon"
            :class="iconLeft({ class: styleSlots?.iconLeft })"
          />
          <span>{{ crumb.title }}</span>
          <vk-icon
            v-if="crumb.rightIcon"
            :name="crumb.rightIcon"
            :class="iconRight({ class: styleSlots?.iconRight })"
          />
        </a>

        <span
          v-else
          :class="[link({ class: styleSlots?.link }), '!cursor-default']"
          aria-current="page"
        >
          <vk-icon
            v-if="crumb.leftIcon"
            :name="crumb.leftIcon"
            :class="iconLeft({ class: styleSlots?.iconLeft })"
          />
          <span>{{ crumb.title }}</span>
          <vk-icon
            v-if="crumb.rightIcon"
            :name="crumb.rightIcon"
            :class="iconRight({ class: styleSlots?.iconRight })"
          />
        </span>

        <span
          v-if="crumb.key !== lastCrumbKey"
          :class="separator({ class: styleSlots?.separator })"
          aria-hidden="true"
        >
          <template v-if="selectIcon(props.separator)">
            <vk-icon :name="props.separator" />
          </template>
          <template v-else>
            {{ props.separator }}
          </template>
        </span>
      </li>
    </ol>
  </nav>
</template>
