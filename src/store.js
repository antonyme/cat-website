import Vue from 'vue'
import Vuex from 'vuex'
import catService from '@/lib/catService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    breedList: null
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
    }
  }
})
