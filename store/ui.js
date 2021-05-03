const types = {
  TOGGLE_MENU: 'TOGGLE_MENU'
}

export const state = () => ({
  isMenuOpen: false
})

export const mutations = {
  [types.TOGGLE_MENU] (state) {
    state.isMenuOpen = !state.isMenuOpen
  }
}

export const actions = {
  toggleMenu ({ commit }) {
    commit(types.TOGGLE_MENU)
  }
}
