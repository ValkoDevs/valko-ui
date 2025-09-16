<script setup lang="ts">
import { computed } from 'vue'
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

const s = computed(() => styles(props))

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
    :class="s.nav({ class: styleSlots?.nav })"
    :aria-label="props['aria-label'] ?? 'Breadcrumbs'"
  >
    <ol :class="s.list({ class: styleSlots?.list })">
      <li
        v-for="crumb in crumbs"
        :key="crumb.key"
        :class="s.listItem({ class: styleSlots?.listItem })"
      >
        <a
          v-if="crumb.key !== lastCrumbKey"
          role="link"
          :tabindex="crumb.key !== lastCrumbKey ? 0 : -1"
          :class="s.link({ class: styleSlots?.link })"
          :data-disabled="crumb.disabled"
          :aria-disabled="crumb.disabled || undefined"
          @click.prevent="onCrumbClick(crumb)"
        >
          <vk-icon
            v-if="crumb.leftIcon"
            :name="crumb.leftIcon"
            :class="s.iconLeft({ class: styleSlots?.iconLeft })"
          />
          <span>{{ crumb.title }}</span>
          <vk-icon
            v-if="crumb.rightIcon"
            :name="crumb.rightIcon"
            :class="s.iconRight({ class: styleSlots?.iconRight })"
          />
        </a>

        <span
          v-else
          :class="[s.link({ class: styleSlots?.link }), '!cursor-default']"
          aria-current="page"
        >
          <vk-icon
            v-if="crumb.leftIcon"
            :name="crumb.leftIcon"
            :class="s.iconLeft({ class: styleSlots?.iconLeft })"
          />
          <span>{{ crumb.title }}</span>
          <vk-icon
            v-if="crumb.rightIcon"
            :name="crumb.rightIcon"
            :class="s.iconRight({ class: styleSlots?.iconRight })"
          />
        </span>

        <span
          v-if="crumb.key !== lastCrumbKey"
          :class="s.separator({ class: styleSlots?.separator })"
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
