<script setup lang="ts">
import type { ApiTableProps, HeaderKey } from './interfaces'
import styles from './ApiTable.styles'
import { type ApiType, ApiTypeCategory } from '~/utils/enums'

defineOptions({ name: 'ApiTable' })

defineProps<ApiTableProps>()

const s = computed(() => styles())

const headerMap = {
  props: propHeaders,
  emits: emitHeaders,
  slots: slotHeaders,
  interface: propHeaders,
  format: formatHeaders
}

const colorMap: Partial<Record<string, string>> = {
  string: 'text-secondary',
  number: 'text-warning',
  EpochTimeStamp: 'text-warning',
  boolean: 'text-accent',
  null: 'text-negative',
  undefined: 'text-negative',
  any: 'text-negative',
  unknown: 'text-negative',
  Date: 'text-primary',
  object: 'text-surface',
  function: 'text-surface',
  event: 'text-surface',
  'custom-string': 'text-positive',
  'custom-type': 'text-primary',
  'custom-number': 'text-warning'
}

const getColor = (type: string) => colorMap[type] || 'text-surface'
const getMainKey = (header: HeaderKey) => headerMap[header]?.[0]?.key || ''
const getSlotName = (header: HeaderKey) => `cell-${getMainKey(header)}`

const formatTokens = ({ input, apiType }: { input: string, apiType: ApiType }) => {
  const tokens = input.split(/[,|]/).map(t => t.trim())

  return tokens.map(token => {
    let baseType = token
    if (token.endsWith('[]')) baseType = token.replace(/\[\]$/, '')
    else baseType = token.replace(/^[[]|[\]]$/g, '').trim()

    if (apiType === ApiTypeCategory.PRIMITIVE) {
      return {
        display: token,
        color: getColor(baseType)
      }
    }

    if (apiType === ApiTypeCategory.CUSTOM_STRING) {
      return {
        display: `"${token}"`,
        color: getColor(ApiTypeCategory.CUSTOM_STRING)
      }
    }

    return {
      display: token,
      color: getColor(apiType)
    }
  })
}
</script>

<template>
  <template
    v-for="section in tables"
    :key="section.title"
  >
    <h3 :class="s.title()">
      {{ section.headers === 'interface' ? '' : name }} {{ section.title }} {{ section.headers === 'interface' ? 'Interface' : '' }}
    </h3>

    <vk-table
      :headers="headerMap[section.headers]"
      :data="section.data"
    >
      <template
        v-if="getMainKey(section.headers)"
        #[getSlotName(section.headers)]="{ item }"
      >
        <span :class="s.itemCell()">{{ item[getMainKey(section.headers)] }}</span>
      </template>

      <template #cell-required="{item}">
        <div :class="s.required()">
          <vk-icon
            v-if="item.required"
            name="check"
            class="text-positive"
          />
          <vk-icon
            v-else
            name="x"
            class="text-negative"
          />
        </div>
      </template>

      <template #cell-description="{ item }">
        <span :class="s.description()">{{ item.description }}</span>
      </template>

      <template
        v-if="['props', 'interface', 'emits'].includes(section.headers)"
        #cell-values="{ item }"
      >
        <code-block
          v-if="item.values !== undefined && item.values !==null && item.values !== '' && (item.apiType === ApiTypeCategory.OBJECT || item.apiType === ApiTypeCategory.FUNCTION || item.apiType === ApiTypeCategory.EVENT)"
          :has-copy-button="false"
          language="ts"
          :code="`${item.values}`"
        />

        <div
          v-else-if="item.values !== undefined && item.values !== null && item.values !== ''"
          :class="s.values()"
        >
          <template
            v-for="(token, index) in formatTokens({
              input: item.values as string,
              apiType: item.apiType as ApiType
            })"
            :key="index"
          >
            <span :class="token.color">
              {{ token.display }}
            </span>

            <span
              v-if="index < formatTokens({
                input: item.values as string,
                apiType: item.apiType as ApiType
              }).length - 1"
              class="text-outlined"
            >|</span>
          </template>
        </div>

        <span
          v-else
          class="text-on-surface-variant italic w-full flex p-2 rounded-lg bg-surface-container justify-center items-center"
        >—</span>
      </template>

      <template
        v-if="['props', 'interface'].includes(section.headers)"
        #cell-default="{ item }"
      >
        <span
          v-if="item.default !== undefined && item.default !== null && item.default !== ''"
          :class="[
            'font-mono bg-surface-container rounded p-2 w-full flex justify-center items-center',
            item.apiType === ApiTypeCategory.PRIMITIVE
              ? getColor(item.values as string)
              : getColor(item.apiType as string)
          ]"
        >
          {{ item.apiType === ApiTypeCategory.CUSTOM_STRING ? `"${item.default}"` : item.default }}
        </span>
        <span
          v-else
          class="text-on-surface-variant italic w-full flex p-2 rounded-lg bg-surface-container justify-center items-center"
        >—</span>
      </template>

      <template #cell-example="{ item }">
        <code-block
          v-if="section.headers === 'slots'"
          :has-copy-button="false"
          language="vue"
          :code="`${item.example}`"
        />

        <span
          v-else
          :class="s.example()"
        >
          {{ item.example }}
        </span>
      </template>

      <template
        v-if="section.headers === 'emits'"
        #cell-type="{ item }"
      >
        <code-block
          :has-copy-button="false"
          language="ts"
          :code="`${item.type}`"
        />
      </template>
    </vk-table>
  </template>
</template>
