import { Commit } from 'vuex'

interface UiState {
  isMenuOpen: boolean
}

const types = {
  TOGGLE_MENU: 'TOGGLE_MENU'
}

export const state = ():UiState => ({
  isMenuOpen: false
})

export const mutations = {
  [types.TOGGLE_MENU] (state: UiState) {
    state.isMenuOpen = !state.isMenuOpen
  }
}

export const actions = {
  toggleMenu ({ commit }: {commit:Commit}) {
    commit(types.TOGGLE_MENU)
  }
}
