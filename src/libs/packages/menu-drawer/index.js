import MenuDrawer from './MenuDrawer.vue'

MenuDrawer.install = vue => {
  vue.components(MenuDrawer.name, MenuDrawer)
}

export default MenuDrawer
