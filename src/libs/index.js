/* eslint-disable */

import Loading from './packages/loading'
import Menu from './packages/menu'
import MenuDrawer from './packages/menu-drawer'
import SwiperSandglass from './packages/swiper-sandglass'
import TextOmitted from './packages/text-omitted'
import Upload from './packages/upload'
import VEchart from './packages/v-echart'

import Ajax from './src/utils/xhr/axios'
import Utils from './src/utils/util'

const components = [
  Loading,
  Menu,
  MenuDrawer,
  SwiperSandglass,
  TextOmitted,
  Upload,
  VEchart
]

const tools = [
  Ajax,
  Utils
]

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  tools.forEach(tool => {
    Vue.prototype[`$${tool}`] = tool
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '2022-05-25',

  install,

  Loading,
  Menu,
  MenuDrawer,
  SwiperSandglass,
  TextOmitted,
  Upload,
  VEchart,

  Ajax,
  Utils
}
