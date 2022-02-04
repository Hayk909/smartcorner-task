import { mapGetters } from 'vuex'

export default {
  name: 'UserDetailsModal',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      active: 'Users/active'
    })
  }
}
