import { mapGetters, mapMutations } from 'vuex'

import UserCard from '~/components/UserCard'
import UserDetailsModal from '~/components/UserDetailsModal'

export default {
  components: {
    UserCard,
    UserDetailsModal
  },
  layout: 'default/index',
  middleware: 'auth',
  async asyncData({ store }) {
    await store.dispatch('Users/get')
  },
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    ...mapGetters({
      users: 'Users/users'
    }),
  },
  methods: {
    ...mapMutations({
      toggleDrawer: 'TOGGLE_DRAWER_OPEN',
      setActive: 'Users/SET_ACTIVE'
    }),
    toggleShowModal(user) {
      if (user) {
        this.setActive(user)
      }

      this.isOpen = !this.isOpen
    }
  }
}
