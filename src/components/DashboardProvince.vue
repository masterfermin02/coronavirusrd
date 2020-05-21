<template>
  <section id="dashboard">
    <mdb-card class="mb-4">
      <mdb-card-body class="d-sm-flex justify-content-between ">
          <p class="mb-6" >Seleccione la provincia que quiere ver:</p>
          <select class="browser-default custom-select" v-model="name" >
              <option
                      v-for="(province, i) in provinces"
                      :key="i"
                      :value="province.title"
              >{{ province.title }}</option>
          </select>
      </mdb-card-body>
    </mdb-card>
    <mdb-card class="mb-4">
      <mdb-card-body class="d-sm-flex justify-content-between">
        <h4 class="mb-sm-0 pt-2">
          Estado actual  del Coronavirus en {{ name }}.
        </h4>
      </mdb-card-body>
    </mdb-card>
      <stat-provinces />
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
      <province-evolutionary-infects-by-day />
      <province-evolutionary-deaths-by-day />
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
      <province-evolutionary-recoverers-by-day />
      <province-new-cases-by-day />
      <section class="mt-lg-5">
          <mdb-row>
              <mdb-col xl="12" md="6" class="mb-r">
                  <mdb-card cascade class="cascading-admin-card">
                      <div class="admin-up">
                          <img src="../assets/android-chrome-192x192.png" />
                          <div class="data">
                              <p>¿Qué deseas ver ahora?</p>
                          </div>
                      </div>
                      <mdb-card-body>
                          <mdb-btn color="primary" @click="urlPush('/details')" >Ver Mapa</mdb-btn>
                          <mdb-btn color="primary" @click="urlPush('/graficos')" ><mdb-icon class="fas" icon="chart-line" /> Ver estadística</mdb-btn>
                          <mdb-btn color="primary" @click="urlPush('/acerca')" >Acerca</mdb-btn>
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
    mdbBtn
} from 'mdbvue'
import StatProvinces from './stat/StatProvinces'
import ProvinceEvolutionaryInfectsByDay from './ProvinceEvolutionaryInfectsByDay'
import ProvinceEvolutionaryDeathsByDay from './ProvinceEvolutionaryDeathsByDay'
import ProvinceEvolutionaryRecoverersByDay from './ProvinceEvolutionaryRecoverersByDay'
import ProvinceNewCasesByDay from './ProvinceNewCasesByDay'
import { mapState, mapGetters } from 'vuex'

export default {

    name: 'DashboardProvince',
    components: {
        mdbRow,
        mdbCol,
        mdbCard,
        mdbCardTitle,
        mdbCardText,
        mdbCardBody,
        mdbIcon,
        StatProvinces,
        ProvinceEvolutionaryInfectsByDay,
        ProvinceEvolutionaryDeathsByDay,
        ProvinceEvolutionaryRecoverersByDay,
        ProvinceNewCasesByDay,
        mdbBtn
    },
    computed: {
        ...mapState(['provinces']),
        ...mapGetters(['getProvince']),
        name: {
            get() {
                return this.getProvince.name;
            },
            set(value) {
                window.location = '/province/' + value.toLowerCase();
            }
        }
    },
    methods: {
        urlPush(url) {
            this.$router.push(url);
        }
    },
    mounted() {
       this.$store.dispatch('setProvince', this.$route.params.title);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    table.table thead {
        cursor: pointer;
    }
    .cascading-admin-card {
        margin: 20px 0;
    }
    .cascading-admin-card .admin-up {
        margin-left: 4%;
        margin-right: 4%;
        margin-top: -20px;
    }

    .cascading-admin-card .admin-up img {
        box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
        font-size: 1.45rem;
        color: #fff;
        text-align: left;
        margin-right: 1rem;
        border-radius: 3px;
        width: 52px;
    }
    .classic-admin-card .card-body .fas {
        font-size: 1.45rem;
    }
    .cascading-admin-card .admin-up .data {
        padding-left: 5rem;
    }
    .admin-up .data p {
        font-size: 20px;
        font-weight: bold;
    }

    .classic-admin-card .card-body {
        color: #fff;
        margin-bottom: 0;
        padding: 0.9rem;
    }
    .classic-admin-card .card-body p {
        font-size: 2rem;
        opacity: 0.7;
        margin-bottom: 0;
        margin-top: 10px;
    }
    .classic-admin-card .card-body h4 {
        margin-top: 10px;
    }

    .btn {
        width: 100%;
    }

    @media only screen and (min-width: 550px) {
        .btn {
            width: 50%;
        }
        .card-body {
            text-align: center;
        }
    }
</style>
