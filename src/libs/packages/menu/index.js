import Menu from './Menu.vue'

Menu.install = vue => {
  vue.components(Menu.name, Menu)
}

export default Menu
