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
                      <mdb-card-header id="map" >Mapa De Casos </mdb-card-header>
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
                                  <th><i @click="sort('total_cases')" class="fas fa-sort float-right"></i> Infectados</th>
                                  <th><i @click="sort('total_deaths')" class="fas fa-sort float-right"></i> Muertes</th>
                                  <th><i @click="sort('total_recovered')" class="fas fa-sort float-right"></i> Recuperados</th>
                              </tr>
                              </thead>
                              <tbody >
                              <tr v-for="(province, i) in provinceWithFormat" :key="i" >
                                  <th scope="row">{{ i + 1}}</th>
                                  <td><a :href=" '/province/' + province.name" >{{ province.name }}</a></td>
                                  <td>{{ province.total_cases }}</td>
                                  <td>{{ province.total_deaths }}</td>
                                  <td>{{ province.total_recovered }}</td>
                              </tr>
                              </tbody>
                          </mdb-tbl>
                      </mdb-card-body>
                  </mdb-card>
              </mdb-col>
          </mdb-row>
      </section>

      <section>
          <what-to-do />
      </section>

    <section>
      <mdb-row>
        <mdb-col md="12" class="mb-4">
          <mdb-card reverse>
            <mdb-card-body class="text-center" cascade>
              <mdb-card-title><strong>S&iacute;guenos!</strong></mdb-card-title>
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
                  <mdb-card reverse>
                      <mdb-card-body class="text-center" cascade>
                          <mdb-card-title><strong>Compartir!</strong></mdb-card-title>
                          <mdb-card-text>Comparte esta informacion con t&uacute;s amigos.</mdb-card-text>
                          <a class="px-2 fa-lg tw-ic" href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcoronavirus-rd.com" target="_blank" rel="noopener" aria-label="">
                              <mdb-icon fab icon="facebook"/>
                          </a>
                          <a class="px-2 fa-lg tw-ic" target="_blank" href="https://twitter.com/intent/tweet/?text=Esta aplicacion busca llevar a sus usuarios informacion resumida y actualizada por el ministerio de Salud Publica sobre la propagacion del virus COVID-19&amp;url=https%3A%2F%2Fcoronavirus-rd.com">
                              <mdb-icon fab icon="twitter"/>
                          </a>
                          <a class="px-2 fa-lg green-ic" target="_blank" href="https://wa.me/?text=Esta aplicacion busca llevar a sus usuarios informacion resumida y actualizada por el ministerio de Salud Publica sobre la propagacion del virus COVID-19 https%3A%2F%2Fcoronavirus-rd.com" >
                              <mdb-icon fab icon="whatsapp"/>
                          </a>
                      </mdb-card-body>
                  </mdb-card>
              </mdb-col>
          </mdb-row>
      </section>
  </section>
</template>

<script>
import { mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbIcon,
    mdbCardHeader,
    mdbTbl
} from 'mdbvue';
import SVGMap from '../components/SVGMap';
import stats from './stat/stats';
import WhatToDo from './WhatToDo';
import {descending, asscending} from "@/tools/comparision";
import { mapGetters }  from 'vuex'
import { convertToPresentationalNumber } from '../tools/parses';

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
        stats,
        WhatToDo,
        mdbCardHeader,
        SVGMap,
        mdbTbl
    },
    computed: {
        ...mapGetters(['provincesSortByColumn']),
        provinces() {
            return this.provincesSortByColumn(
                this.column,
                this.direction ? descending : asscending
            );
        },
        provinceWithFormat() {
            return  this.provinces.map( (province) => {
                return {
                    name: province.name,
                    total_cases: this.convertToPresentationalNumber(province.total_cases),
                    total_deaths: this.convertToPresentationalNumber(province.total_deaths),
                    total_recovered: this.convertToPresentationalNumber(province.total_recovered)
                };
            });
        }
    },
    methods: {
      sort(column) {
          this.direction = !this.direction;
          this.column = column
      },
      convertToPresentationalNumber,
    },
    data () {
        return {
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
