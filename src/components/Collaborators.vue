<template>
  <mdb-container>
    <section class="text-center">
      <h2 class="h1-responsive font-weight-bold my-5">Nuestros Colaboradores</h2>
      <p class="grey-text w-responsive mx-auto mb-5">Este es el equipo que desinteresadamente ha estado colaborando para que este proyecto este en pie y llegue a cada Dominicano, con el unico objetivo de mantener a todos informados.</p>
      <mdb-row>
        <mdb-col lg="6" md="6"  class="mb-lg-0 mb-5">
          <img src="../assets/fp.jpeg"  class="z-depth-1 col-lg-6" alt="Fermin Perdomo"/>
          <h5 class="font-weight-bold mt-4 mb-3">Fermin Perdomo</h5>
          <p class="text-uppercase blue-text">Full Stack Web Developer</p>
          <p class="grey-text">Desarrollador con mas de 5 años de experiencia en proyectos de software, nos da soporte en el area de programacion.</p>
          <ul class="list-unstyled mb-0">
            <a class="p-2 fa-lg" href:="https://www.linkedin.com/in/fermin-perdomo-89b24a13a/" target="_blank">
              <mdb-icon fab icon="linkedin" class="blue-text"/>
            </a>
            <a class="p-2 fa-lg" href="https://github.com/masterfermin02/" target="_blank">
              <mdb-icon fab icon="github" class="black-text"/>
            </a>
          </ul>
        </mdb-col>
        <mdb-col lg="6" md="6"  class="mb-lg-0 mb-5">
            <img src="../assets/acv.jpg" class="z-depth-1 col-lg-6" alt="Aneudy Caceres">
            <h5 class="font-weight-bold mt-4 mb-3">Aneudy Caceres</h5>
            <p class="text-uppercase blue-text">Project/Product Management</p>
            <p class="grey-text">Scrum Master certificado con 10 a&ntilde;s en proyectos de software, nos da soporte en el area de Product Management y Programacion.</p>
            <ul class="list-unstyled mb-0">
              <a class="p-2 fa-lg" href="https://www.linkedin.com/in/aneudy-caceres-62776315/" target="_blank">
                <mdb-icon fab icon="linkedin" class="blue-text"/>
              </a>
              <a class="p-2 fa-lg" href="https://github.com/aneudyx" target="_blank">
                <mdb-icon fab icon="github" class="black-text"/>
              </a>
            </ul>
        </mdb-col>
      </mdb-row>
    </section>
  </mdb-container>
</template>

<script>
  import { mdbContainer, mdbRow, mdbCol, mdbIcon, } from 'mdbvue';
  export default {
    name: 'Collaborators',
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbIcon
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .rounded-circle {
    max-width: 150px;
  }

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
