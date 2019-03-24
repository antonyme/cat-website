import Vue from 'vue'
import Vuex from 'vuex'
import catService from '@/lib/catService'
import wikiService from '@/lib/wikiService'
import {
  E_SERVER_HTTP
} from '@/constants'
import logger from '@/lib/logger'

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
    },
    filteredBreedList (state) {
      if (state.selectedOrigin) {
        return state.breedList.filter(breed => breed.origin === state.selectedOrigin)
      } else {
        return state.breedList
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
    'RECEIVED_BREED_MEDIA' (state, { index, mediaUrl }) {
      Vue.set(state.breedList[index], 'mediaUrl', mediaUrl)
    },
    'SELECTED_ORIGIN_CHANGED' (state, origin) {
      state.selectedOrigin = origin
    }
  },
  actions: {
    fetchBreedList ({ state, commit }) {
      if (state.breedListLoading) return
      commit('START_FETCH_BREED_LIST')
      return catService.getBreedList().then(res => {
        commit('RECEIVED_BREED_LIST', res)
      }).finally(() => {
        commit('END_FETCH_BREED_LIST')
      })
    },
    fetchAllBreedMedia ({ state, dispatch }) {
      return Promise.all(
        state.breedList.map((v, index) => dispatch('fetchBreedMedia', index))
      )
    },
    fetchBreedMedia ({ state, commit }, index) {
      const wikiPage = state.breedList[index].wikiPage
      return wikiService.getMedia(wikiPage).then(mediaUrl => {
        commit('RECEIVED_BREED_MEDIA', { index, mediaUrl })
      }).catch(err => {
        if (err.name === E_SERVER_HTTP && err.statusCode === 404) {
          logger.log(`cat image not found for ${state.breedList[index].name}`)
        } else {
          throw err
        }
      })
    },
    setSelectedOrigin ({ commit }, origin) {
      commit('SELECTED_ORIGIN_CHANGED', origin)
    }
  }
})
