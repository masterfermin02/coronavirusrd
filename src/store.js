import Vue from 'vue'
import Vuex from 'vuex'
import provincePath from './services/provincePath.js'
import moment from 'moment'

Vue.use(Vuex)

provincePath.getFromFisebase(provinces => store.commit('setProvinces', provinces))
provincePath.getProvincesStat( provincesStat => {
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
    }
  },

  mutations: {
    setProvinces(state, val) {
      state.provinces = val
    },
    setProvincesStat(state, val) {
      moment.locale('es-do')
      val['lastUpdate'] = moment(val.lastUpdate).startOf('hour').fromNow()
      state.provincesStat = val
    }
  },

  actions: {

  }

})
