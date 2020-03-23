<template  >
  <section>
    <mdb-row>
      <mdb-col md="12" class="mb-4">
        <mdb-card>
          <mdb-card-header>{{ msg }}</mdb-card-header>
          <mdb-card-body  >
          <h3>Sobre la Herramienta:</h3>
          <p class="mb-2">Esta aplicacion busca llevar a sus usuarios informacion resumida y actualizada por el ministerio de Salud Publica sobre la propagacion del virus COVID-19.</p> 
          <p class="mb-2"> Estaremos actualizando cada dia luego del boletin informativo del ministerio.</p>
          <p class="mb-2">Esta herramienta no es oficial del Ministerio De Salud Publica, ni de ningun organismo institucional, mas se alimenta de la informacion publicada por esos medios</p>
          <p>
            Finalmente puede acceder a toda la informacion del ministerio a traves de sus redes sociales: <a href="https://www.instagram.com/saludpublicard/" target="_blank">Instagram</a>, <a href="https://twitter.com/SaludPublicaRD"  target="_blank">Twitter</a> & <a href="https://www.facebook.com/SaludPublicaRD" target="_blank" >Facebook</a>
          </p>
          <h3>Sobre el Proyecto:</h3>
          <p class="mb-2">Este es un proyecto Open Source que no busca lucrarse de forma alguna. </p> 
          <p class="mb-2">Si eres Developer, QA o interesado en la tecnologia, puedes colaborar aqui: <mdb-btn class="btn-git" icon="github" tag="a" color="black" fab href="https://github.com/masterfermin02/coronavirusrd" target="_blank" >Repositorio</mdb-btn> <mdb-btn class="btn-comm" tag="a" color="blue" icon="chalkboard" href="https://trello.com/b/57BtTWlZ" target="_blank">Pizarra</mdb-btn> </p>

          <h3>Sugerencias:</h3>
          <p class="mb-2">Estamos abiertos a sugerencias, tus ideas son importantes: <mdb-btn class="btn-comm" tag="a"  icon="comments" href="https://es.surveymonkey.com/r/CBD8BC8" target="_blank">Sugerencias</mdb-btn> </p>
         
          </mdb-card-body >
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </section>
</template>

<script>
import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbCardHeader, mdbBtn} from 'mdbvue'
export default {
  name: 'About',
   components: {
    mdbRow,
    mdbBtn,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbCardHeader
  },
  data () {
    return {
      msg: 'Acerca de CoVID19-RD'
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-weight: normal;
  padding-top: 20px;
  padding-bottom: 30px;
}
p {
  color: #969696;
  margin-bottom: 0;
  font-size: 14px;
}
</style>
