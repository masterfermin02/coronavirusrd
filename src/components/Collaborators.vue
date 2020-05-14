<template>
  <mdb-container v-once>
    <section >
      <mdb-card>
        <mdb-card-header></mdb-card-header>
        <mdb-card-body class="team-section text-center my-5">
          <mdb-row>
            <mdb-col lg="12" md="12" >
              <h2 class="h1-responsive font-weight-bold my-5">Nuestros Colaboradores</h2>
              <p class="grey-text w-responsive mx-auto mb-5">Este es el equipo que desinteresadamente ha estado colaborando para que este proyecto este en pie y llegue a cada Dominicano, con el unico objetivo de mantener a todos informados.</p>

              <mdb-row v-if="collaborators.length">
                <mdb-col v-for="(collaborator, i) in collaborators" :key="i" lg="6" md="6"  class="mb-lg-0 mb-5">
                  <div class="avatar mx-auto">
                    <img :src="collaborator.pictureUrl"  class="rounded z-depth-1 col-lg-6" alt="Fermin Perdomo"/>
                  </div>

                  <h5 class="font-weight-bold mt-4 mb-3">{{collaborator.name}}</h5>
                  <p class="text-uppercase blue-text">{{collaborator.role}}</p>
                  <p class="grey-text">{{collaborator.description}}</p>
                  <ul class="list-unstyled mb-0" >
                      <a v-for="(link, linkIndex) in collaborator.links" :key="linkIndex" class="p-2 fa-lg"  :href="link.url" target="_blank">
                        <mdb-icon fab :icon="link.icon" class="blue-text"/>
                      </a>
                  </ul>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
        </mdb-card-body>
      </mdb-card>
    </section>
  </mdb-container>
</template>

<script>
  import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbCard, mdbCardBody, mdbCardHeader} from 'mdbvue';
  import { mapState }  from 'vuex'

  export default {
    name: 'Collaborators',
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbIcon,
      mdbCard,
      mdbCardBody,
      mdbCardHeader
    },
    computed: {
      ...mapState(['collaborators'])
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
  .team-section .avatar img {
    max-width: 200px;
    height: auto;
    padding-left: 0px;
    padding-right: 0px;
  }
</style>
