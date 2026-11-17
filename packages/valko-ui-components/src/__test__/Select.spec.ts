import { defineComponent, nextTick, ref, type PropType } from 'vue'
import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils'
import VkSelect from '#valkoui/components/Select.vue'
import type { SelectProps } from '#valkoui/types/Select'

const options = [
  { value: 1, label: 'Wade Cooper' },
  { value: 2, label: 'Arlene Mccoy' },
  { value: 3, label: 'Devon Webb' },
  { value: 4, label: 'Tom Cook' }
]

const flush = async () => {
  await nextTick()
  // one macrotask so Reka's delayed render-presence swap settles
  await new Promise(resolve => setTimeout(resolve))
  await nextTick()
}

const getDropdown = () => new DOMWrapper<HTMLElement>(document.querySelector<HTMLElement>('.vk-select__dropdown')!)
const getItems = () => getDropdown().findAll('[role="option"]')

// Reka arms a document-level capture `pointerup` listener when the content
// mounts; its swipe guard preventDefaults the first cancelable synthetic
// pointerup in jsdom (pageX/pageY are 0, so the move delta is always
// <= 10px). Consume it with a pointerup on the content itself so item
// interactions select cleanly.
const openDropdown = async () => {
  await wrapper!.find('input').trigger('focus')
  await flush()
  const dropdown = document.querySelector<HTMLElement>('.vk-select__dropdown')
  if (dropdown) {
    dropdown.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, cancelable: true }))
    await flush()
  }
}

const pressItem = async (item: DOMWrapper<Element>, key?: string) => {
  if (key) item.element.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true }))
  else item.element.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, cancelable: true }))
  await flush()
}

type HostProps = Pick<SelectProps, 'multiple' | 'clearable' | 'disabled' | 'readonly' | 'name'>

const Host = defineComponent({
  name: 'SelectHost',
  components: { VkSelect },
  props: {
    multiple: { type: Boolean, default: false },
    clearable: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    name: { type: String, default: undefined },
    // `type: undefined` erases the union at the type level; restate it so the
    // host's v-model keeps the declared value shape.
    initial: { type: undefined as unknown as PropType<SelectProps['modelValue']>, default: undefined }
  },
  setup(hostProps) {
    const value = ref(hostProps.initial)
    return { value, hostProps, options }
  },
  template: `
    <VkSelect
      :options="options"
      :multiple="hostProps.multiple"
      :clearable="hostProps.clearable"
      :disabled="hostProps.disabled"
      :readonly="hostProps.readonly"
      :name="hostProps.name"
      v-model="value"
    />
  `
})

let wrapper: VueWrapper | undefined

// The Host component exposes its v-model state as `value`; VTU's vm typing is
// loose, so assert through this named shape instead of inline casts.
interface HostInstance {
  value: SelectProps['modelValue']
}
const hostValue = () => (wrapper!.vm as unknown as HostInstance).value

describe('Select component', () => {
  afterEach(() => {
    wrapper?.unmount()
    document.body.innerHTML = ''
    wrapper = undefined
  })

  const mountSelect = async (props: HostProps & { initial?: SelectProps['modelValue'] } = {}) => {
    wrapper = mount(Host, {
      props: { ...props, initial: props.initial },
      attachTo: document.body
    })
    await flush()
  }

  describe('With default props', () => {
    it('should not render the dropdown before it is opened', async () => {
      await mountSelect()
      expect(document.querySelector('.vk-select__dropdown')).toBeNull()
    })

    it('should show the selected option label in the input', async () => {
      await mountSelect({ initial: 2 })
      expect((wrapper!.find('input').element as HTMLInputElement).value).toBe('Arlene Mccoy')
    })

    it('should render the options in a portal attached to the body when opened', async () => {
      await mountSelect()
      await openDropdown()
      expect(document.querySelector('.vk-select__dropdown')).not.toBeNull()
      expect(wrapper!.find('[role="option"]').exists()).toBe(false)
      expect(getItems().length).toBe(options.length)
    })

    it('should mark the selected option with data-state=checked', async () => {
      await mountSelect({ initial: 2 })
      await openDropdown()
      const checked = getItems().filter(item => item.attributes('data-state') === 'checked')
      expect(checked.length).toBe(1)
      expect(checked[0].text()).toBe('Arlene Mccoy')
    })

    it('should close the dropdown on outside pointerdown', async () => {
      await mountSelect()
      await openDropdown()
      document.body.dispatchEvent(new MouseEvent('pointerdown', { bubbles: true }))
      await flush()
      expect(document.querySelector('.vk-select__dropdown')).toBeNull()
    })

    it('should close the dropdown on escape', async () => {
      await mountSelect()
      await openDropdown()
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
      await flush()
      expect(document.querySelector('.vk-select__dropdown')).toBeNull()
    })
  })

  describe('Keyboard navigation', () => {
    it('should highlight the first option when opened', async () => {
      await mountSelect()
      await openDropdown()
      const highlighted = getItems().filter(item => item.attributes('data-highlighted') !== undefined)
      expect(highlighted.map(item => item.text())).toEqual(['Wade Cooper'])
    })

    it('should move the highlight with arrow down and select with enter', async () => {
      await mountSelect()
      await openDropdown()
      const first = getItems()[0]
      first.element.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true, cancelable: true }))
      await flush()
      const highlighted = getItems().filter(item => item.attributes('data-highlighted') !== undefined)
      expect(highlighted.map(item => item.text())).toEqual(['Arlene Mccoy'])

      await pressItem(highlighted[0], 'Enter')
      expect(hostValue()).toBe(2)
      expect(document.querySelector('.vk-select__dropdown')).toBeNull()
    })
  })

  describe('Single selection', () => {
    it('should select the clicked option and close', async () => {
      await mountSelect()
      await openDropdown()
      await pressItem(getItems()[1])
      expect(hostValue()).toBe(2)
      expect(document.querySelector('.vk-select__dropdown')).toBeNull()
    })

    it('should keep the value and stay open when re-selecting the selected option without clearable', async () => {
      await mountSelect({ initial: 2 })
      await openDropdown()
      await pressItem(getItems()[1])
      expect(hostValue()).toBe(2)
      expect(document.querySelector('.vk-select__dropdown')).not.toBeNull()
    })

    it('should deselect and close when re-selecting the selected option with clearable', async () => {
      await mountSelect({ initial: 2, clearable: true })
      await openDropdown()
      await pressItem(getItems()[1])
      expect(hostValue()).toBeUndefined()
      expect(document.querySelector('.vk-select__dropdown')).toBeNull()
    })

    it('should clear the value through the input clear button', async () => {
      await mountSelect({ initial: 2, clearable: true })
      await wrapper!.find('.vk-input__clear-icon').trigger('click')
      await flush()
      expect(hostValue()).toBeUndefined()
    })
  })

  describe('Multiple selection', () => {
    it('should toggle options and keep the dropdown open', async () => {
      await mountSelect({ multiple: true })
      await openDropdown()
      await pressItem(getItems()[0])
      await pressItem(getItems()[2])
      expect(hostValue()).toEqual([1, 3])
      expect(document.querySelector('.vk-select__dropdown')).not.toBeNull()
    })

    it('should empty the value through the clear button', async () => {
      await mountSelect({ multiple: true, clearable: true, initial: [1, 3] })
      await wrapper!.find('.vk-input__clear-icon').trigger('click')
      await flush()
      expect(hostValue()).toEqual([])
    })

    it('should not allow emptying the selection without clearable', async () => {
      await mountSelect({ multiple: true, initial: [3] })
      await openDropdown()
      await pressItem(getItems()[2])
      expect(hostValue()).toEqual([3])
      expect(document.querySelector('.vk-select__dropdown')).not.toBeNull()
    })

    it('should allow emptying the selection with clearable', async () => {
      await mountSelect({ multiple: true, clearable: true, initial: [3] })
      await openDropdown()
      await pressItem(getItems()[2])
      expect(hostValue()).toEqual([])
    })

    it('should show comma joined labels in the input', async () => {
      await mountSelect({ multiple: true, initial: [1, 2] })
      expect((wrapper!.find('input').element as HTMLInputElement).value).toBe('Wade Cooper, Arlene Mccoy')
    })
  })

  describe('When disabled or readonly', () => {
    it('should not open on focus when disabled', async () => {
      await mountSelect({ disabled: true })
      await openDropdown()
      expect(document.querySelector('.vk-select__dropdown')).toBeNull()
    })

    it('should not open on focus when readonly', async () => {
      await mountSelect({ readonly: true })
      await openDropdown()
      expect(document.querySelector('.vk-select__dropdown')).toBeNull()
    })
  })

  describe('Form submission parity', () => {
    it('should not render a hidden native select without a name prop', async () => {
      await mountSelect({ initial: 2 })
      expect(document.querySelector('select')).toBeNull()
    })

    it('should render the hidden native select with synced value inside a form', async () => {
      const Form = defineComponent({
        components: { VkSelect },
        setup() {
          return { options }
        },
        template: `
          <form data-test="form">
            <VkSelect name="country" :options="options" :model-value="2" />
          </form>`
      })
      wrapper = mount(Form, {
        attachTo: document.body
      })
      await flush()

      const nativeSelect = document.querySelector<HTMLSelectElement>('select[name="country"]')
      expect(nativeSelect).not.toBeNull()
      expect(nativeSelect!.value).toBe('2')
      expect(nativeSelect!.querySelectorAll('option').length).toBe(options.length)
    })

    it('should set multiple on the hidden native select in multiple mode', async () => {
      const Form = defineComponent({
        components: { VkSelect },
        setup() {
          return { options }
        },
        template: `
          <form data-test="form">
            <VkSelect name="country" :options="options" :model-value="[1, 3]" multiple />
          </form>`
      })
      wrapper = mount(Form, {
        attachTo: document.body
      })
      await flush()

      // Reka's hidden native select cannot reflect multi-value selection
      // (the native value setter is single-select only); parity for multiple
      // mode is limited to the element and its options being present.
      const nativeSelect = document.querySelector<HTMLSelectElement>('select[name="country"]')
      expect(nativeSelect!.hasAttribute('multiple')).toBe(true)
      expect(nativeSelect!.querySelectorAll('option').length).toBe(options.length)
    })
  })
})
