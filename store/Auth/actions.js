export default {
  async login({ commit }, payload) {
    try {
      const configs = await this.dispatch('getAxiosData')

      const { data, status } = await this.$axios.post('auth/login', payload, configs)

      this.$cookies.set(
        '_a__token',
        JSON.stringify(data.token),
        {
          path: '/',
          maxAge: 24 * 60 * 60,
        },
      )

      commit('SET_AUTH', data)

      return { status }
    } catch (e) {
      throw e
    }
  },
  async check({ commit }) {
    try {
      const configs = await this.dispatch('getAxiosData')

      const { data } = await this.$axios.get('auth/check', configs)

      commit('SET_AUTH', data)
    } catch (e) {
      commit('SET_AUTH', null)
    }
  },
  logout({ commit }) {
    try {
      this.$cookies.remove('_a__token')

      commit('SET_AUTH', null)
    } catch (e) {}
  },
}
