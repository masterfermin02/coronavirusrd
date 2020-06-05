<template  >
  <section>
    <mdb-row>
      <mdb-col md="12" class="mb-4">
        <mdb-card>
          <mdb-card-header>{{ msg }}</mdb-card-header>
          <mdb-card-body  >
            <p class="mb-2">Ante tanto ruido en las redes sociales y el mundo queremos llevar informacion oficial y centralizadas a las personas, tus retroalimentaciones nos ayudaran a mejorar, son 3 simples preguntas!</p>
            <mdb-btn class="btn-comm" tag="a" icon="comments" href="https://forms.gle/vUdHXDuTNwCJ7Ssz9" target="_blank">Completa el Formulario!</mdb-btn>
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
      msg: 'Ayudanos a mejorar!'
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
