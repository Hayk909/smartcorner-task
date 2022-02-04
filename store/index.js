export const state = () => ({
  isDrawerOpen: false
})

export const mutations = {
  TOGGLE_DRAWER_OPEN(state) {
    state.isDrawerOpen = !state.isDrawerOpen
  }
}

export const actions = {
  getAxiosData() {
    let tokenType = '_a__token'

    const token = this.$cookies.get(tokenType)

    const bearerToken = token ? `Bearer ${token}` : ''

    return {
      headers: {
        Authorization: bearerToken,
      },
    }
  }
}

export const getters = {
  isDrawerOpen: (s) => s.isDrawerOpen
}
