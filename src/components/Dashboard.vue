<template>
  <section id="dashboard">
    <mdb-card class="mb-4">
      <mdb-card-body class="d-sm-flex justify-content-between">
        <h4 class="mb-sm-0 pt-2">
          Estado actual  del Coronavirus en REP DOM.
        </h4>
      </mdb-card-body>
    </mdb-card>
      <stats />
    <section>
      <mdb-row>
        <mdb-col lg="12" class="mb-4">
          <mdb-card>
            <mdb-card-header>Mapa De Casos <span v-show="currentProvince.title"> - {{currentProvince.title}} - infectados: {{ currentProvince.cases }}</span> </mdb-card-header>
            <mdb-card-body  >
              <s-v-g-map @onPathClick="provinceClick" />
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>

     <section>
      <mdb-row>
          <mdb-col md="12" class="mb-4">
              <mdb-card>
                  <mdb-card-header>Detalle por provincias</mdb-card-header>
                  <mdb-card-body>
                      <mdb-tbl responsive
                               striped
                               bordered
                               hover>
                          <thead class="blue lighten-4">
                              <tr>
                                  <th>#</th>
                                  <th> Provincia</th>
                                  <th><i @click="sort('cases')" class="fas fa-sort float-right"></i> Infectados</th>
                                  <th><i @click="sort('deaths')" class="fas fa-sort float-right"></i> Muertes</th>
                              </tr>
                          </thead>
                          <tbody v-if="provincesWithCases.length">
                              <tr v-for="(province, i) in provincesWithCases" :key="i" >
                                  <th scope="row">{{ i + 1}}</th>
                                  <td>{{ province.title }}</td>
                                  <td>{{ province.cases }}</td>
                                  <td>{{ province.deaths }}</td>
                              </tr>
                          </tbody>
                      </mdb-tbl>
                  </mdb-card-body>
              </mdb-card>
          </mdb-col>
      </mdb-row>
    </section>
  </section>
</template>

<script>
import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbCardHeader, mdbTbl } from 'mdbvue'
import stats from './stat/stats'
import SVGMap from './SVGMap'
import { mapState }  from 'vuex'
const filter = require('@/filters/provinces')
const { pipeline } = require('@/tools/functional')
const { descending, asscending, sortByColumn } = require('@/tools/comparision')

export default {

    name: 'Dashboard',
    components: {
        mdbRow,
        mdbCol,
        mdbCard,
        mdbCardBody,
        mdbCardHeader,
        mdbTbl,
        stats,
        SVGMap
    },
    computed: {
      ...mapState(['provinces']),
        provincesWithCases() {
          let direction = this.direction ? descending : asscending;
          return pipeline(
              sortByColumn(this.column, direction),
              filter.filterPositiveCase
          )(this.provinces)
        }
    },
    methods: {
      provinceClick(province) {
          this.currentProvince = province;
      },
      sort(colunm) {
          this.column = colunm
          this.direction = !this.direction;
      }
    },
    data () {
        return {
            currentProvince: {},
            column: 'cases',
            direction: true
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    table.table thead {
        cursor: pointer;
    }
</style>
