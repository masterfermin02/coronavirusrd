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
    },
    positiveTotalCaseByDate(state) {
      const results = state.provincesStat.stats.reduce( (result, stat, currentIndex) => {
        result.labels.push(stat.date)

        if(currentIndex > 0) {
          let prevIndex = currentIndex - 1
          result.data.infects.push(  result.data.infects[prevIndex] + parseInt(stat.infects))
          result.data.deaths.push( result.data.deaths[prevIndex] + parseInt(stat.deaths))
          result.data.recoverers.push( result.data.recoverers[prevIndex] + parseInt(stat.recoverers))
        } else {
          result.data.infects[currentIndex] = parseInt(stat.infects)
          result.data.deaths[currentIndex] = parseInt(stat.deaths)
          result.data.recoverers[currentIndex] = parseInt(stat.recoverers)
        }

        return result
      }, {
        labels: [],
        data: {
          infects: [],
          deaths: [],
          recoverers: []
        }
      })
      return {
        labels: results.labels,
        datasets: [
          {
            label: "Infectados",
            backgroundColor: "rgba(255, 99, 132, 0.1)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 0.7,
            data: results.data.infects
          },
          {
            label: "Muertes",
            backgroundColor: "rgba(151,187,205,0.2)",
            borderColor: "rgba(151,187,205,1)",
            borderWidth: 0.8,
            data: results.data.deaths
          },
          {
            label: "Recuperados",
            backgroundColor: "rgba(127, 249, 216, 0.4)",
            borderColor: "rgba(127, 249, 216, 1)",
            borderWidth: 0.8,
            data: results.data.recoverers
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
