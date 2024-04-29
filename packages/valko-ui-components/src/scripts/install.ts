import { Plugin } from 'vue'
import * as components from '../components'
import create from './create'

export default create({
  components: Object.keys(components).map(
    (key) => components[key as keyof object]
  )
}) as Plugin<[]>
