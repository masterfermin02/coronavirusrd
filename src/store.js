import Vue from 'vue'
import Vuex from 'vuex'
import provinceService from './services/provinceService.js'
import { filterPositiveCase } from './filters/provinces'
import { sortByColumn } from "./tools/comparision";

Vue.use(Vuex)

provinceService.getFromFisebase(provinces => store.commit('setProvinces', provinces))
provinceService.getProvincesStat( provincesStat => {
  store.commit('setProvincesStat', provincesStat)
})

export const store = new Vuex.Store({
  state: {
    provinces: [],
    provincesStat: {
      cases: 0,
      investigations: 0,
      deaths: 0,
      recoverers: 0
    },
    provinceSortColumn: 'cases',
    provinceSortColumnDirection: true
  },

  getters: {
    provincesPositiveCases: (state) => {
      return filterPositiveCase(state.provinces)
    },
    provincesSortByColumn: (state, getters) => (column, direction) => {
      return sortByColumn(column, direction)(getters.provincesPositiveCases)
    }
  },

  mutations: {
    setProvinces(state, val) {
      state.provinces = val
    },
    setProvincesStat(state, val) {
      state.provincesStat = val
    }
  },

  actions: {}

})
