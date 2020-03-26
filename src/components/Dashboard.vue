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
              <s-v-g-map />
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>

    <section>
      <mdb-row>
        <mdb-col md="12" class="mb-4">
          <mdb-card reverse>
            <mdb-card-body class="text-center" cascade>
              <mdb-card-title><strong>Siguenos!</strong></mdb-card-title>
              <mdb-card-text>Mantente al tanto de nuevas informaciones, boletines y notificaciones en nuestras redes sociales.</mdb-card-text>
              <a class="px-2 fa-lg li-ic" target="_blank" href="https://www.instagram.com/covidrd/">
                <mdb-icon fab icon="instagram"/></a>
              <a class="px-2 fa-lg tw-ic" target="_blank" href="https://twitter.com/coronavirusrd4">
                <mdb-icon fab icon="twitter"/></a>
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
      <evolutionary-cases-by-day />

      <gender-comparision />
  </section>
</template>

<script>
import { mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbCardHeader,
    mdbTbl,
    mdbCardTitle,
    mdbCardText,
    mdbIcon
} from 'mdbvue'
import stats from './stat/stats'
import SVGMap from './SVGMap'
import GenderComparision from './GenderComparision'
import EvolutionaryCasesByDay from './EvolutionaryCasesByDay'
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
        mdbCardTitle,
        mdbCardText,
        mdbCardBody,
        mdbIcon,
        mdbCardHeader,
        mdbTbl,
        stats,
        SVGMap,
        GenderComparision,
        EvolutionaryCasesByDay
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
