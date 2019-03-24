import Vue from 'vue'
import Vuex from 'vuex'
import catService from '@/lib/catService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedOrigin: '',
    breedList: null
  },
  getters: {
    availableOrigins (state) {
      if (state.breedList) {
        const breedOriginDup = state.breedList.map(breed => breed.origin)
        return [...new Set(breedOriginDup)]
      }
    }
  },
  mutations: {
    'START_FETCH_BREED_LIST' (state) {
      state.breedListLoading = true
    },
    'END_FETCH_BREED_LIST' (state) {
      state.breedListLoading = false
    },
    'RECEIVED_BREED_LIST' (state, data) {
      state.breedList = data
    },
    'SELECTED_ORIGIN_CHANGED' (state, origin) {
      state.selectedOrigin = origin
    }
  },
  actions: {
    fetchBreedList ({ state, commit }) {
      if (state.breedListLoading) return
      commit('START_FETCH_BREED_LIST')
      return catService.getBreedList().then((res) => {
        commit('RECEIVED_BREED_LIST', res)
      }).finally(() => {
        commit('END_FETCH_BREED_LIST')
      })
    },
    setSelectedOrigin ({ commit }, origin) {
      commit('SELECTED_ORIGIN_CHANGED', origin)
    }
  }
})
