import { ActionTree, MutationTree } from 'vuex'

interface FiltersState {
  activeFilters: string[];
}

const types = {
  ADD_FILTER: 'ADD_FILTER',
  REMOVE_FILTER: 'REMOVE_FILTER'
}

export const state = ():FiltersState => ({
  activeFilters: []
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  [types.ADD_FILTER] (state: FiltersState, payload: string) {
    state.activeFilters = [...state.activeFilters, payload]
  },
  [types.REMOVE_FILTER] (state: FiltersState, payload: string) {
    state.activeFilters = state.activeFilters.filter(filter => filter !== payload)
  }
}

export const actions: ActionTree<RootState, RootState> = {
  addFilter ({ commit }, payload) {
    commit(types.ADD_FILTER, payload)
  },
  removeFilter ({ commit }, payload) {
    commit(types.REMOVE_FILTER, payload)
  }
}
