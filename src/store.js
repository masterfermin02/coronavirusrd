import Vue from 'vue'
import Vuex from 'vuex'
import { filterPositiveCase } from './filters/provinces'
import { sortByColumn } from "./tools/comparision";
const fb = require('@/firebaseConfig.js');

Vue.use(Vuex);

const mapPath = (provincesStat) => {
  const paths = provincesStat
      .province
      .provinces
      .map(province => {
        let oldProvince = store.state.oldProvinces.find(item => province.name === item.title);
        return {
          ...province.cases[province.cases.length - 1],
          name: province.name,
          data: oldProvince ? oldProvince.data : ''
        };
      });
  return paths.map((path, index) => {
    path['id'] = "DO-" + (index + 1);
    path['style'] = `fill: rgb(224, 101, 101, ${(path.total_cases / provincesStat.cases) * 100}); stroke: rgba(123, 111, 111, 0.87); stroke-width: 1.29247px;`;
    path['styleFilled'] = defaultData.styleFilled;
    path['hover'] = false;
    return path;
  });
};

fb.provincesStat.on('value', snapshot => {
  const provincesStat = snapshot.val();
  store.commit('setProvincesStat', provincesStat);
});
fb.collaborators.on('value', snapshot => store.commit('setCollaborators', snapshot.val() || []));
fb.provinces.on('value', snapshot => store.commit('setOldProvince', snapshot.val() || []));

const defaultData = {
  styleFilled: "fill: rgb(239, 177, 177, 1); stroke: rgb(247, 247, 247); stroke-width: 1.29247px;"
};

export const store = new Vuex.Store({
  state: {
    provinces: [],
    oldProvinces: [],
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
      if (state.provincesStat.province) {
        return state.provincesStat.province.provinces.find(province => province.name.toLowerCase() === state.province.toLowerCase()) || {};
      }

      return {};
    },
    getProvinces(state) {
      return state.provinces;
    },
    provincesPositiveCases: (state, getters) => {
      return filterPositiveCase(getters.getProvinces)
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
      if (!getters.getProvince.cases) {
        return {
          labels: [],
          data: []
        };
      }
      let stats = getters.getProvince.cases;
      const results = stats.reduce( (result, stat) => {
        result.labels.push(stat.date);
        let diff = parseInt(stat.total_cases) - result.total;
        result.total = parseInt(stat.total_cases);
        result.data.push(diff);
        return result
      }, {
        labels: [],
        data: [],
        total: 0
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
      if (!getters.getProvince.cases) {
        return {
          labels: [],
          data: {
            infects: [],
            deaths: [],
            recoverers: []
          }
        };
      }
      let stats = getters.getProvince.cases;
      return stats.reduce( (result, stat) => {
        result.labels.push(stat.date);
        result.data.infects.push(parseInt(stat.total_cases, 10));
        result.data.deaths.push(parseInt(stat.total_deaths, 10));
        result.data.recoverers.push(parseInt(stat.total_recovered, 10));

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
    },
    getCollaborators: (state) => state.collaborators
  },

  mutations: {
    setProvinces(state, val) {
      state.provinces = val
    },
    setProvincesStat(state, val) {
      state.provincesStat = val;
    },
    setCollaborators(state, val) {
      state.collaborators = val;
    },
    setCollaboratorPictureUrlById(state, val) {
      state.collaborators.find(item => item.id === val.id).pictureUrl = val.url
    },
    setOldProvince(state, val) {
      state.oldProvinces = val;
      if (state.provincesStat.province) {
        store.commit('setProvinces', mapPath(state.provincesStat));
      }
    },
    updateProvince(state, val) {
      state.province = val;
    }
  },

  actions: {
    setProvince({ commit }, val) {
       commit('updateProvince', val);
    }
  }

})
