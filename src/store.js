import Vue from 'vue'
import Vuex from 'vuex'
import { filterPositiveCase } from './filters/provinces'
import { sortByColumn } from "./tools/comparision";
import firebaseSocketPlugin from './firebaseSocketPlugin'
import provinceService from '@/services/provinceService'

Vue.use(Vuex)

const firebaseStore = firebaseSocketPlugin()

export const store = new Vuex.Store({
  state: {
    provinces: [],
    provincesStat: {
      cases: 0,
      investigations: 0,
      deaths: 0,
      recoverers: 0,
      stats: []
    },
    provinceSortColumn: 'cases',
    provinceSortColumnDirection: true,
    collaborators: []
  },

  getters: {
    provincesPositiveCases: (state) => {
      return filterPositiveCase(state.provinces)
    },
    provincesSortByColumn: (state, getters) => (column, direction) => {
      return sortByColumn(column, direction)(getters.provincesPositiveCases)
    },
    positiCaseByDateChartData(state) {
      const results = state.provincesStat.stats.reduce( (result, stat) => {
          result.labels.push(stat.date)
          result.data.push(stat.infects)
        return result
      }, {
        labels: [],
        data: []
      })
      return {
        labels: results.labels,
        datasets: [
          {
            label: "Infectados",
            backgroundColor:  "rgba(127, 249, 216, 0.4)",
            borderColor: "rgba(127, 249, 216, 1)",
            borderWidth: 0.8,
            data: results.data
          }
        ]
      }
    }
  },

  mutations: {
    setProvinces(state, val) {
      state.provinces = val
    },
    setProvincesStat(state, val) {
      state.provincesStat = val
    },
    setCollaborators(state, val) {
      const collaboratorWithoutPicture = val.filter( item => !item.pictureUrl)
      collaboratorWithoutPicture.forEach( item => store.dispatch('downLoadColaboratorImage', item))
      state.collaborators = val
    },
    setCollaboratorPictureUrlById(state, val) {
      state.collaborators.find(item => item.id === val.id).pictureUrl = val.url
    }
  },

  actions: {
    downLoadColaboratorImage ({commit}, val) {
      provinceService.getCollaboratorImage(val, collaborator => commit('setCollaboratorPictureUrlById',collaborator))
    }
  },

  plugins: [firebaseStore]

})
