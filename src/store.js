import Vue from 'vue'
import Vuex from 'vuex'
import { filterPositiveCase } from './filters/provinces'
import { sortByColumn } from "./tools/comparision";
import firebaseSocketPlugin from './firebaseSocketPlugin'
import provinceService from '@/services/provinceService'

Vue.use(Vuex);

const firebaseStore = firebaseSocketPlugin();

const mapPath = (paths, total) => {
  return paths.map((path, index) => {
    path['id'] = "DO-" + (index + 1);
    path['style'] = `fill: rgb(224, 101, 101, ${(path.cases / total.cases) * 100}); stroke: rgba(123, 111, 111, 0.87); stroke-width: 1.29247px;`;
    path['styleFilled'] = defaultData.styleFilled;
    path['hover'] = false;
    return path;
  });
};

const defaultData = {
  styleFilled: "fill: rgb(239, 177, 177, 1); stroke: rgb(247, 247, 247); stroke-width: 1.29247px;"
};

export const store = new Vuex.Store({
  state: {
    provinces: [],
    provincesStat: {
      cases: 0,
      investigations: 0,
      deaths: 0,
      recoverers: 0,
      discarted: 0,
      stats: []
    },
    provinceSortColumn: 'cases',
    provinceSortColumnDirection: true,
    collaborators: [],
    province: ''
  },

  getters: {
    getProvince(state) {
      return state.provinces.find(province => province.title.toLowerCase() === state.province.toLowerCase()) || {};
    },
    provincesPositiveCases: (state) => {
      return filterPositiveCase(mapPath(state.provinces, state.provincesStat))
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
    provincePositiCaseByDateChartData(state, getters) {
      if (!getters.getProvince.stats) {
        return {
          labels: [],
          data: []
        };
      }
      let stats = getters.getProvince.stats;
      const results = stats.reduce( (result, stat) => {
        result.labels.push(stat.date)
        result.data.push(stat.infects)
        return result
      }, {
        labels: [],
        data: []
      });
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
      return state.provincesStat.stats.reduce( (result, stat, currentIndex) => {
        result.labels.push(stat.date)

        if(currentIndex > 0) {
          let prevIndex = currentIndex - 1
          result.data.infects.push(  result.data.infects[prevIndex] + parseInt(stat.infects, 10))
          result.data.deaths.push( result.data.deaths[prevIndex] + parseInt(stat.deaths, 10))
          result.data.recoverers.push( result.data.recoverers[prevIndex] + parseInt(stat.recoverers, 10))
        } else {
          result.data.infects[currentIndex] = parseInt(stat.infects, 10)
          result.data.deaths[currentIndex] = parseInt(stat.deaths, 10)
          result.data.recoverers[currentIndex] = parseInt(stat.recoverers, 10)
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
    },
    provincePositiveTotalCaseByDate(state, getters) {
      if (!getters.getProvince.stats) {
        return {
          labels: [],
          data: {
            infects: [],
            deaths: [],
            recoverers: []
          }
        };
      }
      let stats = getters.getProvince.stats;
      return stats.reduce( (result, stat, currentIndex) => {
        result.labels.push(stat.date)

        if(currentIndex > 0) {
          let prevIndex = currentIndex - 1
          result.data.infects.push(  result.data.infects[prevIndex] + parseInt(stat.infects, 10));
          result.data.deaths.push( result.data.deaths[prevIndex] + parseInt(stat.deaths, 10));
          result.data.recoverers.push( result.data.recoverers[prevIndex] + parseInt(stat.recoverers, 10));
        } else {
          result.data.infects[currentIndex] = parseInt(stat.infects, 10);
          result.data.deaths[currentIndex] = parseInt(stat.deaths, 10);
          result.data.recoverers[currentIndex] = parseInt(stat.recoverers, 10);
        }

        return result;
      }, {
        labels: [],
        data: {
          infects: [],
          deaths: [],
          recoverers: []
        }
      });
    },
    infectsChartData: (state, getters) => {
      const results = getters.positiveTotalCaseByDate
      return {
        labels: results.labels,
        datasets: [
          {
            label: "Infectados",
            backgroundColor: "rgba(255, 99, 132, 0.1)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 0.7,
            data: results.data.infects
          }
        ]
      }
    },
    deathsChartData: (state, getters) => {
      const results = getters.positiveTotalCaseByDate
      return {
        labels: results.labels,
        datasets: [
          {
            label: "Muertes",
            backgroundColor: "rgba(151,187,205,0.2)",
            borderColor: "rgba(151,187,205,1)",
            borderWidth: 0.8,
            data: results.data.deaths
          }
        ]
      }
    },
    recoverersChartData: (state, getters) => {
      const results = getters.positiveTotalCaseByDate
      return {
        labels: results.labels,
        datasets: [
          {
            label: "Recuperados",
            backgroundColor: "rgba(127, 249, 216, 0.4)",
            borderColor: "rgba(127, 249, 216, 1)",
            borderWidth: 0.8,
            data: results.data.recoverers
          }
        ]
      }
    },
    provinceInfectsChartData: (state, getters) => {
      const results = getters.provincePositiveTotalCaseByDate;
      return {
        labels: results.labels,
        datasets: [
          {
            label: "Infectados",
            backgroundColor: "rgba(255, 99, 132, 0.1)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 0.7,
            data: results.data.infects
          }
        ]
      }
    },
    ProvinceDeathsChartData: (state, getters) => {
      const results = getters.provincePositiveTotalCaseByDate;
      return {
        labels: results.labels,
        datasets: [
          {
            label: "Muertes",
            backgroundColor: "rgba(151,187,205,0.2)",
            borderColor: "rgba(151,187,205,1)",
            borderWidth: 0.8,
            data: results.data.deaths
          }
        ]
      }
    },
    ProvinceRecoverersChartData: (state, getters) => {
      const results = getters.provincePositiveTotalCaseByDate
      return {
        labels: results.labels,
        datasets: [
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
    },
    updateProvince(state, val) {
      state.province = val;
    }
  },

  actions: {
    downLoadColaboratorImage ({commit}, val) {
      provinceService.getCollaboratorImage(val, collaborator => commit('setCollaboratorPictureUrlById',collaborator))
    },
    setProvince({ commit }, val) {
       commit('updateProvince', val);
    }
  },

  plugins: [firebaseStore]

})
