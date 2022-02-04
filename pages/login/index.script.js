import { mapActions } from 'vuex'

export default {
  layout: 'auth/index',
  middleware: 'auth',
  data() {
    return {
      isShow: false,
      showRipple: false,
      form: {
        login: '',
        password: ''
      }
    }
  },
  watch: {
    showRipple(value) {
      if (value) {
        setTimeout(this.toggleShowRipple, 300);
      }
    }
  },
  computed: {
    icon() {
      return this.isShow ? 'eye' : 'eye-off'
    },
    type() {
      return this.isShow ? 'text' : 'password'
    }
  },
  methods: {
    ...mapActions({
      login: 'Auth/login'
    }),
    toggleShow() {
      this.isShow = !this.isShow
    },
    toggleShowRipple() {
      this.showRipple = !this.showRipple
    },
    async onSubmit() {
      try {
        await this.login(this.form)

        this.$router.push('/users')
      } catch(e) {
        alert(e?.response?.data?.message || 'Invalid credentails')
      }
    }
  },
}
