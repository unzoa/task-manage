import AddMember from './AddMember.vue'

AddMember.install = vue => {
  vue.components(AddMember.name, AddMember)
}

export default AddMember
