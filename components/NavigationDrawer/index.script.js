import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'NavigationDrawer',
  computed: {
    ...mapGetters({
      isDrawerOpen: 'isDrawerOpen'
    })
  },
  methods: {
    ...mapActions({
      logout: 'Auth/logout'
    }),
    ...mapMutations({
      toggleDrawer: 'TOGGLE_DRAWER_OPEN'
    }),
    onLogout() {
      this.logout()

      this.$router.push('/login')
    }
  }
}
