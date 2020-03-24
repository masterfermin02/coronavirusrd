import Vue from 'vue'
import Vuex from 'vuex'
import provincePath from './services/provincePath.js'

Vue.use(Vuex)

provincePath.getFromFisebase(provinces => store.commit('setProvinces', provinces) )

export const store = new Vuex.Store({
  state: {
    provinces: []
  },

  mutations: {
    setProvinces(state, val) {
      state.provinces = val
    }
  },

  actions: {
  }

})
