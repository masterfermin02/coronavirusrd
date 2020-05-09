<template>
  <section id="dashboard">
    <mdb-card class="mb-4">
      <mdb-card-body class="d-sm-flex justify-content-between ">
          <p class="mb-6" >Seleccione la provincia que quiere ver:</p>
          <select class="browser-default custom-select" v-model="provinceId" >
              <option
                      v-for="(province, i) in provinces"
                      :key="i"
                      :value="province.id"
              >{{ province.title }}</option>
          </select>
      </mdb-card-body>
    </mdb-card>
    <mdb-card class="mb-4">
      <mdb-card-body class="d-sm-flex justify-content-between">
        <h4 class="mb-sm-0 pt-2">
          Estado actual  del Coronavirus en {{ getProvince.title }}.
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
  </section>
</template>

<script>
import { mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbIcon
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
        ProvinceNewCasesByDay
    },
    computed: {
        ...mapState(['provinces']),
        ...mapGetters(['getProvince']),
        provinceId: {
            get() {
                return this.getProvince.id;
            },
            set(value) {
                let currentProvince = this.provinces.find( province => province.id === value);
                this.$store.dispatch('setProvince', currentProvince.title);
                this.$router.push('/province/' + currentProvince.title);
            }
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
</style>
