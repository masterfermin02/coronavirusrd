<template>
  <section id="dashboard">
    <mdb-card class="mb-4">
      <mdb-card-body class="d-sm-flex justify-content-between">
        <h4 class="mb-sm-0 pt-2">
          Estado actual  del Coronavirus en REP DOM.
        </h4>
      </mdb-card-body>
    </mdb-card>
      <stats  />
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
                      <mdb-tbl responsive hover>
                          <thead class="blue lighten-4">
                              <tr>
                                  <th>#</th>
                                  <th>Provincia</th>
                                  <th>Infectados</th>
                                  <th>Recuperados</th>
                                  <th>Muertes</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr v-for="(province, i) in provinces" :key="i" >
                                  <th scope="row">{{ i + 1}}</th>
                                  <td>{{ province.title }}</td>
                                  <td>{{ province.cases }}</td>
                                  <td>{{ province.recovereds }}</td>
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
import provincePath from '@/services/provincePath';

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
    methods: {
      getProvinces() {
          this.provinces = provincePath.getWithCases();
      },
      provinceClick(province) {
          this.currentProvince = province;
      }
    },
    mounted() {
      this.getProvinces();
    },
  data () {
    return {
      provinces: [],
      currentProvince: {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
