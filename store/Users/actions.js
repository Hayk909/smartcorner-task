export default {
  async get({ commit }) {
    try {
      const configs = await this.dispatch('getAxiosData')

      const { data, status } = await this.$axios.get('users', configs)

      commit('SET_USERS', data.users)

      return { status }
    } catch (e) {
      throw e
    }
  },
}
