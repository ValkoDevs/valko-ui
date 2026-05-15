<script setup lang="ts">
import type { MenuItem, CalendarEvent, EventDropPayload, EventResizePayload, SelectOption } from '#valkoui'

const adapter = useEventCalendarAdapter({
  timezones: {
    locale: { id: 'America/New_York', name: 'New York' }
  },
  hourRange: [8, 18]
})

const today = new Date()
const year = today.getFullYear()
const month = today.getMonth()
const day = today.getDate()
const dayOfWeek = today.getDay()
const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek
const monday = day + mondayOffset

const events = ref<CalendarEvent[]>([
  { id: 'evt-01', title: 'Team Standup', start: new Date(year, month, monday, 9, 0), end: new Date(year, month, monday, 9, 30), color: 'primary' },
  { id: 'evt-02', title: 'Sprint Planning', start: new Date(year, month, monday, 10, 0), end: new Date(year, month, monday, 12, 0), color: 'secondary' },
  { id: 'evt-03', title: 'Design Review', start: new Date(year, month, monday + 1, 9, 0), end: new Date(year, month, monday + 1, 10, 0), color: 'accent' },
  { id: 'evt-04', title: 'Client Demo', start: new Date(year, month, monday + 1, 14, 0), end: new Date(year, month, monday + 1, 15, 30), color: 'positive' },
  { id: 'evt-05', title: 'Backend Sync', start: new Date(year, month, monday + 2, 9, 0), end: new Date(year, month, monday + 2, 9, 30), color: 'primary' },
  { id: 'evt-06', title: 'Code Review Session', start: new Date(year, month, monday + 2, 11, 0), end: new Date(year, month, monday + 2, 12, 0), color: 'secondary' },
  { id: 'evt-07', title: 'Incident Postmortem', start: new Date(year, month, monday + 2, 15, 0), end: new Date(year, month, monday + 2, 16, 0), color: 'negative' },
  { id: 'evt-08', title: 'Product Roadmap', start: new Date(year, month, monday + 3, 10, 0), end: new Date(year, month, monday + 3, 11, 30), color: 'accent' },
  { id: 'evt-09', title: 'Deadline: Feature Freeze', start: new Date(year, month, monday + 3, 17, 0), end: new Date(year, month, monday + 3, 18, 0), color: 'warning' },
  { id: 'evt-10', title: 'QA Handoff', start: new Date(year, month, monday + 4, 9, 0), end: new Date(year, month, monday + 4, 10, 0), color: 'positive' },
  { id: 'evt-11', title: 'Sprint Retrospective', start: new Date(year, month, monday + 4, 13, 0), end: new Date(year, month, monday + 4, 14, 30), color: 'primary' },
  { id: 'evt-12', title: 'Release Deployment', start: new Date(year, month, monday + 4, 16, 0), end: new Date(year, month, monday + 4, 17, 0), color: 'warning' }
])

const colorOptions: SelectOption[] = [
  { value: 'primary', label: 'Primary' },
  { value: 'secondary', label: 'Secondary' },
  { value: 'accent', label: 'Accent' },
  { value: 'positive', label: 'Positive' },
  { value: 'warning', label: 'Warning' },
  { value: 'negative', label: 'Negative' }
]

const menuItems: MenuItem[] = [
  { key: 'schedule', group: 'Calendar', text: 'Schedule' },
  { key: 'availability', group: 'Calendar', text: 'Availability' },
  { key: 'members', group: 'Team', text: 'Members' },
  { key: 'projects', group: 'Team', text: 'Projects' },
  { key: 'preferences', group: 'Settings', text: 'Preferences' }
]

const currentDate = ref(new Date())
const currentView = ref<'day' | 'week' | 'month'>('week')
const activeItem = ref('schedule')

const [editDateModel, editDateParsed, editDateAdapter] = useDateAdapter({ format: 'YYYY-MM-DD' })
const [editStartModel, editStartParsed, editStartAdapter] = useTimeAdapter({ format: 'HH:mm' })
const [editEndModel, editEndParsed, editEndAdapter] = useTimeAdapter({ format: 'HH:mm' })

const [createDateModel, createDateParsed, createDateAdapter] = useDateAdapter({ format: 'YYYY-MM-DD' })
const [createStartModel, createStartParsed, createStartAdapter] = useTimeAdapter({ format: 'HH:mm' })
const [createEndModel, createEndParsed, createEndAdapter] = useTimeAdapter({ format: 'HH:mm' })

const pickerStates = reactive<Record<string, boolean>>({})

let nextId = 13

const isDetailOpen = ref(false)
const isEditing = ref(false)
const selectedEvent = ref<CalendarEvent | null>(null)

const editForm = reactive({
  title: '',
  color: '' as string | number
})

const onEventClick = (event: CalendarEvent) => {
  selectedEvent.value = event
  isEditing.value = false
  isDetailOpen.value = true
}

const closeDetail = () => {
  isDetailOpen.value = false
  isEditing.value = false
  selectedEvent.value = null
}

const startEditing = () => {
  if (!selectedEvent.value) return
  editForm.title = selectedEvent.value.title ?? ''
  editForm.color = selectedEvent.value.color ?? 'primary'
  editDateModel.value = selectedEvent.value.start.getTime()
  editStartModel.value = selectedEvent.value.start.getTime()
  editEndModel.value = selectedEvent.value.end.getTime()
  isEditing.value = true
}

const saveEdit = () => {
  if (!selectedEvent.value) return
  const idx = events.value.findIndex(e => e.id === selectedEvent.value!.id)
  if (idx === -1) return
  const dateBase = new Date(editDateModel.value)
  const startTime = new Date(editStartModel.value)
  const endTime = new Date(editEndModel.value)
  const newStart = new Date(dateBase.getFullYear(), dateBase.getMonth(), dateBase.getDate(), startTime.getHours(), startTime.getMinutes())
  const newEnd = new Date(dateBase.getFullYear(), dateBase.getMonth(), dateBase.getDate(), endTime.getHours(), endTime.getMinutes())
  events.value[idx] = {
    ...events.value[idx],
    title: editForm.title,
    start: newStart,
    end: newEnd,
    color: String(editForm.color)
  }
  closeDetail()
}

const isDeleteOpen = ref(false)

const confirmDelete = () => {
  isDeleteOpen.value = true
}

const deleteEvent = () => {
  if (!selectedEvent.value) return
  events.value = events.value.filter(e => e.id !== selectedEvent.value!.id)
  isDeleteOpen.value = false
  closeDetail()
}

const cancelDelete = () => {
  isDeleteOpen.value = false
}

const isCreateOpen = ref(false)

const createForm = reactive({
  title: '',
  color: 'primary' as string | number
})

const openCreate = () => {
  createForm.title = ''
  createForm.color = 'primary'
  createDateModel.value = currentDate.value.getTime()
  const now = new Date()
  const defaultStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 0)
  const defaultEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0)
  createStartModel.value = defaultStart.getTime()
  createEndModel.value = defaultEnd.getTime()
  isCreateOpen.value = true
}

const closeCreate = () => {
  isCreateOpen.value = false
}

const saveNewEvent = () => {
  const dateBase = new Date(createDateModel.value)
  const startTime = new Date(createStartModel.value)
  const endTime = new Date(createEndModel.value)
  const newStart = new Date(dateBase.getFullYear(), dateBase.getMonth(), dateBase.getDate(), startTime.getHours(), startTime.getMinutes())
  const newEnd = new Date(dateBase.getFullYear(), dateBase.getMonth(), dateBase.getDate(), endTime.getHours(), endTime.getMinutes())
  const newEvent: CalendarEvent = {
    id: `evt-${String(nextId++).padStart(2, '0')}`,
    title: createForm.title || 'Untitled Event',
    start: newStart,
    end: newEnd,
    color: String(createForm.color)
  }
  events.value = [...events.value, newEvent]
  closeCreate()
}

const onEventUpdate = (payload: EventDropPayload | EventResizePayload) => {
  const idx = events.value.findIndex(e => e.id === payload.event.id)
  if (idx === -1 || !events.value[idx]) return
  events.value[idx].start = payload.newStart
  events.value[idx].end = payload.newEnd
}

const onItemClick = (item: MenuItem) => activeItem.value = `${item.key}`

const templateSnippet = `<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useEventCalendarAdapter, useDateAdapter, useTimeAdapter } from '#valkoui'
import type { MenuItem, CalendarEvent, EventDropPayload, EventResizePayload, SelectOption } from '#valkoui'

const adapter = useEventCalendarAdapter({
  timezones: {
    locale: { id: 'America/New_York', name: 'New York' }
  },
  hourRange: [8, 18]
})

const today = new Date()
const year = today.getFullYear()
const month = today.getMonth()
const day = today.getDate()
const dayOfWeek = today.getDay()
const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek
const monday = day + mondayOffset

const events = ref<CalendarEvent[]>([
  { id: 'evt-01', title: 'Team Standup', start: new Date(year, month, monday, 9, 0), end: new Date(year, month, monday, 9, 30), color: 'primary' },
  { id: 'evt-02', title: 'Sprint Planning', start: new Date(year, month, monday, 10, 0), end: new Date(year, month, monday, 12, 0), color: 'secondary' },
  { id: 'evt-03', title: 'Design Review', start: new Date(year, month, monday + 1, 9, 0), end: new Date(year, month, monday + 1, 10, 0), color: 'accent' },
  { id: 'evt-04', title: 'Client Demo', start: new Date(year, month, monday + 1, 14, 0), end: new Date(year, month, monday + 1, 15, 30), color: 'positive' },
  { id: 'evt-05', title: 'Backend Sync', start: new Date(year, month, monday + 2, 9, 0), end: new Date(year, month, monday + 2, 9, 30), color: 'primary' },
  { id: 'evt-06', title: 'Code Review Session', start: new Date(year, month, monday + 2, 11, 0), end: new Date(year, month, monday + 2, 12, 0), color: 'secondary' },
  { id: 'evt-07', title: 'Incident Postmortem', start: new Date(year, month, monday + 2, 15, 0), end: new Date(year, month, monday + 2, 16, 0), color: 'negative' },
  { id: 'evt-08', title: 'Product Roadmap', start: new Date(year, month, monday + 3, 10, 0), end: new Date(year, month, monday + 3, 11, 30), color: 'accent' },
  { id: 'evt-09', title: 'Deadline: Feature Freeze', start: new Date(year, month, monday + 3, 17, 0), end: new Date(year, month, monday + 3, 18, 0), color: 'warning' },
  { id: 'evt-10', title: 'QA Handoff', start: new Date(year, month, monday + 4, 9, 0), end: new Date(year, month, monday + 4, 10, 0), color: 'positive' },
  { id: 'evt-11', title: 'Sprint Retrospective', start: new Date(year, month, monday + 4, 13, 0), end: new Date(year, month, monday + 4, 14, 30), color: 'primary' },
  { id: 'evt-12', title: 'Release Deployment', start: new Date(year, month, monday + 4, 16, 0), end: new Date(year, month, monday + 4, 17, 0), color: 'warning' }
])

const colorOptions: SelectOption[] = [
  { value: 'primary', label: 'Primary' },
  { value: 'secondary', label: 'Secondary' },
  { value: 'accent', label: 'Accent' },
  { value: 'positive', label: 'Positive' },
  { value: 'warning', label: 'Warning' },
  { value: 'negative', label: 'Negative' }
]

const menuItems: MenuItem[] = [
  { key: 'schedule', group: 'Calendar', text: 'Schedule' },
  { key: 'availability', group: 'Calendar', text: 'Availability' },
  { key: 'members', group: 'Team', text: 'Members' },
  { key: 'projects', group: 'Team', text: 'Projects' },
  { key: 'preferences', group: 'Settings', text: 'Preferences' }
]

const currentDate = ref(new Date())
const currentView = ref<'day' | 'week' | 'month'>('week')
const activeItem = ref('schedule')

const [editDateModel, editDateParsed, editDateAdapter] = useDateAdapter({ format: 'YYYY-MM-DD' })
const [editStartModel, editStartParsed, editStartAdapter] = useTimeAdapter({ format: 'HH:mm' })
const [editEndModel, editEndParsed, editEndAdapter] = useTimeAdapter({ format: 'HH:mm' })

const [createDateModel, createDateParsed, createDateAdapter] = useDateAdapter({ format: 'YYYY-MM-DD' })
const [createStartModel, createStartParsed, createStartAdapter] = useTimeAdapter({ format: 'HH:mm' })
const [createEndModel, createEndParsed, createEndAdapter] = useTimeAdapter({ format: 'HH:mm' })

const pickerStates = reactive<Record<string, boolean>>({})

let nextId = 13

const isDetailOpen = ref(false)
const isEditing = ref(false)
const selectedEvent = ref<CalendarEvent | null>(null)

const editForm = reactive({
  title: '',
  color: '' as string | number
})

const onEventClick = (event: CalendarEvent) => {
  selectedEvent.value = event
  isEditing.value = false
  isDetailOpen.value = true
}

const closeDetail = () => {
  isDetailOpen.value = false
  isEditing.value = false
  selectedEvent.value = null
}

const startEditing = () => {
  if (!selectedEvent.value) return
  editForm.title = selectedEvent.value.title ?? ''
  editForm.color = selectedEvent.value.color ?? 'primary'
  editDateModel.value = selectedEvent.value.start.getTime()
  editStartModel.value = selectedEvent.value.start.getTime()
  editEndModel.value = selectedEvent.value.end.getTime()
  isEditing.value = true
}

const saveEdit = () => {
  if (!selectedEvent.value) return
  const idx = events.value.findIndex(e => e.id === selectedEvent.value!.id)
  if (idx === -1) return
  const dateBase = new Date(editDateModel.value)
  const startTime = new Date(editStartModel.value)
  const endTime = new Date(editEndModel.value)
  const newStart = new Date(dateBase.getFullYear(), dateBase.getMonth(), dateBase.getDate(), startTime.getHours(), startTime.getMinutes())
  const newEnd = new Date(dateBase.getFullYear(), dateBase.getMonth(), dateBase.getDate(), endTime.getHours(), endTime.getMinutes())
  events.value[idx] = {
    ...events.value[idx],
    title: editForm.title,
    start: newStart,
    end: newEnd,
    color: String(editForm.color)
  }
  closeDetail()
}

const isDeleteOpen = ref(false)

const confirmDelete = () => {
  isDeleteOpen.value = true
}

const deleteEvent = () => {
  if (!selectedEvent.value) return
  events.value = events.value.filter(e => e.id !== selectedEvent.value!.id)
  isDeleteOpen.value = false
  closeDetail()
}

const cancelDelete = () => {
  isDeleteOpen.value = false
}

const isCreateOpen = ref(false)

const createForm = reactive({
  title: '',
  color: 'primary' as string | number
})

const openCreate = () => {
  createForm.title = ''
  createForm.color = 'primary'
  createDateModel.value = currentDate.value.getTime()
  const now = new Date()
  const defaultStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 0)
  const defaultEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0)
  createStartModel.value = defaultStart.getTime()
  createEndModel.value = defaultEnd.getTime()
  isCreateOpen.value = true
}

const closeCreate = () => {
  isCreateOpen.value = false
}

const saveNewEvent = () => {
  const dateBase = new Date(createDateModel.value)
  const startTime = new Date(createStartModel.value)
  const endTime = new Date(createEndModel.value)
  const newStart = new Date(dateBase.getFullYear(), dateBase.getMonth(), dateBase.getDate(), startTime.getHours(), startTime.getMinutes())
  const newEnd = new Date(dateBase.getFullYear(), dateBase.getMonth(), dateBase.getDate(), endTime.getHours(), endTime.getMinutes())
  const newEvent: CalendarEvent = {
    id: \`evt-\${String(nextId++).padStart(2, '0')}\`,
    title: createForm.title || 'Untitled Event',
    start: newStart,
    end: newEnd,
    color: String(createForm.color)
  }
  events.value = [...events.value, newEvent]
  closeCreate()
}

const onEventUpdate = (payload: EventDropPayload | EventResizePayload) => {
  const idx = events.value.findIndex(e => e.id === payload.event.id)
  if (idx === -1 || !events.value[idx]) return
  events.value[idx].start = payload.newStart
  events.value[idx].end = payload.newEnd
}

const onItemClick = (item: MenuItem) => activeItem.value = \`\${item.key}\`
<\/script>

<template>
  <div class="flex h-full">
    <aside class="w-[12vw] border-r border-outlined bg-surface-container">
      <vk-menu
        :items="menuItems"
        :active="activeItem"
        floating
        @item-click="onItemClick"
      />
    </aside>

    <div class="flex-1 flex flex-col">
      <header class="p-4 border-b border-outlined flex justify-between items-center bg-surface-container">
        <h1 class="text-lg font-semibold">
          Team Schedule
        </h1>
        <vk-button
          color="primary"
          @click="openCreate"
        >
          New Event
        </vk-button>
      </header>

      <main class="flex-1 overflow-auto p-4">
        <vk-event-calendar
          v-model="currentDate"
          v-model:current-view="currentView"
          :adapter="adapter"
          :events="events"
          color="primary"
          variant="outlined"
          shape="soft"
          @event-click="onEventClick"
          @event-drop="onEventUpdate"
          @event-resize="onEventUpdate"
        />
      </main>
    </div>

    <vk-modal
      :is-open="isDetailOpen"
      title="Event Details"
      @close="closeDetail"
    >
      <template v-if="selectedEvent && !isEditing">
        <div class="p-6 flex flex-col gap-4">
          <h2 class="text-xl font-semibold">
            {{ selectedEvent.title || 'Untitled Event' }}
          </h2>
          <div class="flex items-center gap-3 text-sm">
            <vk-icon
              name="calendar"
              class="text-lg"
            />
            <span>{{ selectedEvent.start.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
          </div>
          <div class="flex items-center gap-3 text-sm">
            <vk-icon
              name="clock"
              class="text-lg"
            />
            <span>{{ selectedEvent.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }} – {{ selectedEvent.end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}</span>
          </div>
          <div class="flex gap-2 mt-4">
            <vk-button
              color="primary"
              variant="outlined"
              size="sm"
              @click="startEditing"
            >
              Edit
            </vk-button>
            <vk-button
              color="negative"
              variant="ghost"
              size="sm"
              @click="confirmDelete"
            >
              Delete
            </vk-button>
          </div>
        </div>
      </template>
      <template v-if="isEditing">
        <div class="p-6 flex flex-col gap-4">
          <vk-input
            v-model="editForm.title"
            label="Title"
          />
          <vk-datepicker
            v-model="editDateModel"
            :parsed-model="editDateParsed"
            :adapter="editDateAdapter"
            :is-open="pickerStates['editDate']"
            label="Date"
            @open="() => pickerStates['editDate'] = true"
            @close="() => pickerStates['editDate'] = false"
          />
          <div class="grid grid-cols-2 gap-4">
            <vk-timepicker
              v-model="editStartModel"
              :parsed-model="editStartParsed"
              :adapter="editStartAdapter"
              :is-open="pickerStates['editStart']"
              label="Start Time"
              @open="() => pickerStates['editStart'] = true"
              @close="() => pickerStates['editStart'] = false"
            />
            <vk-timepicker
              v-model="editEndModel"
              :parsed-model="editEndParsed"
              :adapter="editEndAdapter"
              :is-open="pickerStates['editEnd']"
              label="End Time"
              @open="() => pickerStates['editEnd'] = true"
              @close="() => pickerStates['editEnd'] = false"
            />
          </div>
          <vk-select
            v-model="editForm.color"
            label="Color"
            :options="colorOptions"
          />
          <div class="flex gap-2 justify-end mt-2">
            <vk-button
              color="surface"
              variant="outlined"
              size="sm"
              @click="closeDetail"
            >
              Cancel
            </vk-button>
            <vk-button
              color="primary"
              size="sm"
              @click="saveEdit"
            >
              Save Changes
            </vk-button>
          </div>
        </div>
      </template>
    </vk-modal>

    <vk-modal
      :is-open="isDeleteOpen"
      title="Delete Event"
      size="sm"
      @close="cancelDelete"
    >
      <div class="p-6 flex flex-col gap-4">
        <p>
          Are you sure you want to delete
          <strong>{{ selectedEvent?.title || 'this event' }}</strong>?
          This action cannot be undone.
        </p>
        <div class="flex gap-2 justify-end">
          <vk-button
            color="surface"
            variant="outlined"
            size="sm"
            @click="cancelDelete"
          >
            Cancel
          </vk-button>
          <vk-button
            color="negative"
            size="sm"
            @click="deleteEvent"
          >
            Delete
          </vk-button>
        </div>
      </div>
    </vk-modal>

    <vk-modal
      :is-open="isCreateOpen"
      title="New Event"
      @close="closeCreate"
    >
      <div class="p-6 flex flex-col gap-4">
        <vk-input
          v-model="createForm.title"
          label="Title"
        />
        <vk-datepicker
          v-model="createDateModel"
          :parsed-model="createDateParsed"
          :adapter="createDateAdapter"
          :is-open="pickerStates['createDate']"
          label="Date"
          @open="() => pickerStates['createDate'] = true"
          @close="() => pickerStates['createDate'] = false"
        />
        <div class="grid grid-cols-2 gap-4">
          <vk-timepicker
            v-model="createStartModel"
            :parsed-model="createStartParsed"
            :adapter="createStartAdapter"
            :is-open="pickerStates['createStart']"
            label="Start Time"
            @open="() => pickerStates['createStart'] = true"
            @close="() => pickerStates['createStart'] = false"
          />
          <vk-timepicker
            v-model="createEndModel"
            :parsed-model="createEndParsed"
            :adapter="createEndAdapter"
            :is-open="pickerStates['createEnd']"
            label="End Time"
            @open="() => pickerStates['createEnd'] = true"
            @close="() => pickerStates['createEnd'] = false"
          />
        </div>
        <vk-select
          v-model="createForm.color"
          label="Color"
          :options="colorOptions"
        />
        <div class="flex gap-2 justify-end mt-2">
          <vk-button
            color="surface"
            variant="outlined"
            size="sm"
            @click="closeCreate"
          >
            Cancel
          </vk-button>
          <vk-button
            color="primary"
            size="sm"
            @click="saveNewEvent"
          >
            Create Event
          </vk-button>
        </div>
      </div>
    </vk-modal>
  </div>
</template>`
</script>

<template>
  <page-template>
    <template #example>
      <div class="flex h-full">
        <aside class="w-[12vw] border-r border-outlined bg-surface-container">
          <vk-menu
            :items="menuItems"
            :active="activeItem"
            floating
            @item-click="onItemClick"
          />
        </aside>

        <div class="flex-1 flex flex-col">
          <header class="p-4 border-b border-outlined flex justify-between items-center bg-surface-container">
            <h1 class="text-lg font-semibold">
              Team Schedule
            </h1>
            <vk-button
              color="primary"
              @click="openCreate"
            >
              New Event
            </vk-button>
          </header>

          <main class="flex-1 overflow-auto p-4">
            <vk-event-calendar
              v-model="currentDate"
              v-model:current-view="currentView"
              :adapter="adapter"
              :events="events"
              color="primary"
              variant="outlined"
              shape="soft"
              @event-click="onEventClick"
              @event-drop="onEventUpdate"
              @event-resize="onEventUpdate"
            />
          </main>
        </div>

        <vk-modal
          :is-open="isDetailOpen"
          title="Event Details"
          @close="closeDetail"
        >
          <template v-if="selectedEvent && !isEditing">
            <div class="p-6 flex flex-col gap-4">
              <h2 class="text-xl font-semibold">
                {{ selectedEvent.title || 'Untitled Event' }}
              </h2>
              <div class="flex items-center gap-3 text-sm">
                <vk-icon
                  name="calendar"
                  class="text-lg"
                />
                <span>{{ selectedEvent.start.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
              </div>
              <div class="flex items-center gap-3 text-sm">
                <vk-icon
                  name="clock"
                  class="text-lg"
                />
                <span>{{ selectedEvent.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }} – {{ selectedEvent.end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}</span>
              </div>
              <div class="flex gap-2 mt-4">
                <vk-button
                  color="primary"
                  variant="outlined"
                  size="sm"
                  @click="startEditing"
                >
                  Edit
                </vk-button>
                <vk-button
                  color="negative"
                  variant="ghost"
                  size="sm"
                  @click="confirmDelete"
                >
                  Delete
                </vk-button>
              </div>
            </div>
          </template>
          <template v-if="isEditing">
            <div class="p-6 flex flex-col gap-4">
              <vk-input
                v-model="editForm.title"
                label="Title"
              />
              <vk-datepicker
                v-model="editDateModel"
                :parsed-model="editDateParsed"
                :adapter="editDateAdapter"
                :is-open="pickerStates['editDate']"
                label="Date"
                @open="() => pickerStates['editDate'] = true"
                @close="() => pickerStates['editDate'] = false"
              />
              <div class="grid grid-cols-2 gap-4">
                <vk-timepicker
                  v-model="editStartModel"
                  :parsed-model="editStartParsed"
                  :adapter="editStartAdapter"
                  :is-open="pickerStates['editStart']"
                  label="Start Time"
                  @open="() => pickerStates['editStart'] = true"
                  @close="() => pickerStates['editStart'] = false"
                />
                <vk-timepicker
                  v-model="editEndModel"
                  :parsed-model="editEndParsed"
                  :adapter="editEndAdapter"
                  :is-open="pickerStates['editEnd']"
                  label="End Time"
                  @open="() => pickerStates['editEnd'] = true"
                  @close="() => pickerStates['editEnd'] = false"
                />
              </div>
              <vk-select
                v-model="editForm.color"
                label="Color"
                :options="colorOptions"
              />
              <div class="flex gap-2 justify-end mt-2">
                <vk-button
                  color="surface"
                  variant="outlined"
                  size="sm"
                  @click="closeDetail"
                >
                  Cancel
                </vk-button>
                <vk-button
                  color="primary"
                  size="sm"
                  @click="saveEdit"
                >
                  Save Changes
                </vk-button>
              </div>
            </div>
          </template>
        </vk-modal>

        <vk-modal
          :is-open="isDeleteOpen"
          title="Delete Event"
          size="sm"
          @close="cancelDelete"
        >
          <div class="p-6 flex flex-col gap-4">
            <p>
              Are you sure you want to delete
              <strong>{{ selectedEvent?.title || 'this event' }}</strong>?
              This action cannot be undone.
            </p>
            <div class="flex gap-2 justify-end">
              <vk-button
                color="surface"
                variant="outlined"
                size="sm"
                @click="cancelDelete"
              >
                Cancel
              </vk-button>
              <vk-button
                color="negative"
                size="sm"
                @click="deleteEvent"
              >
                Delete
              </vk-button>
            </div>
          </div>
        </vk-modal>

        <vk-modal
          :is-open="isCreateOpen"
          title="New Event"
          @close="closeCreate"
        >
          <div class="p-6 flex flex-col gap-4">
            <vk-input
              v-model="createForm.title"
              label="Title"
            />
            <vk-datepicker
              v-model="createDateModel"
              :parsed-model="createDateParsed"
              :adapter="createDateAdapter"
              :is-open="pickerStates['createDate']"
              label="Date"
              @open="() => pickerStates['createDate'] = true"
              @close="() => pickerStates['createDate'] = false"
            />
            <div class="grid grid-cols-2 gap-4">
              <vk-timepicker
                v-model="createStartModel"
                :parsed-model="createStartParsed"
                :adapter="createStartAdapter"
                :is-open="pickerStates['createStart']"
                label="Start Time"
                @open="() => pickerStates['createStart'] = true"
                @close="() => pickerStates['createStart'] = false"
              />
              <vk-timepicker
                v-model="createEndModel"
                :parsed-model="createEndParsed"
                :adapter="createEndAdapter"
                :is-open="pickerStates['createEnd']"
                label="End Time"
                @open="() => pickerStates['createEnd'] = true"
                @close="() => pickerStates['createEnd'] = false"
              />
            </div>
            <vk-select
              v-model="createForm.color"
              label="Color"
              :options="colorOptions"
            />
            <div class="flex gap-2 justify-end mt-2">
              <vk-button
                color="surface"
                variant="outlined"
                size="sm"
                @click="closeCreate"
              >
                Cancel
              </vk-button>
              <vk-button
                color="primary"
                size="sm"
                @click="saveNewEvent"
              >
                Create Event
              </vk-button>
            </div>
          </div>
        </vk-modal>
      </div>
    </template>

    <template #code>
      <code-block :code="templateSnippet" />
    </template>
  </page-template>
</template>
